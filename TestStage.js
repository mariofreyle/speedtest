import app, {createElement, createRef, svgIcon} from "../assets/js/App";

import StartButton from "./StartButton";
import GaugeContainer from "./GaugeContainer";
import test from "./TestConfig";

function TestStage(props){
    var $this = this,
        testStage = createRef("div"),
        stageMain = createRef("main"),
        resultsContainer = createRef("div"),
        resultDownload = createRef("div"),
        speedDownloadNumber = createRef("div"),
        resultUpload = createRef("div"),
        speedUploadNumber = createRef("div"),
        consoleWrapper = createRef("div"),
        testTimeInput = createRef("input"),
        connectionsInput = createRef("input"),
        enableBuffer = createRef("input"),
        serverSelectElem = createRef("select"),
        consoleElem = createRef("textarea"),
        ispNameElem = createRef("div"),
        publicIpElem = createRef("div"),
        multiModeButton = createRef("button"),
        singleModeButton = createRef("button"),
        
        connections,
        intervalStarted,
        globalLoadStartTime,
        firstTransferred,
        intervalTime,
        intervalHeartbeat,
        testConsole;
    
    
    testConsole = function(){
        var consoleInner = "",
            scrollTop,
            scrollHeight,
            elemHeight;
        
        function log(data){
            consoleInner += (consoleInner != "" ? "\n" : "") + data;
                
            scrollHeight = consoleElem.scrollHeight(),
            scrollTop = consoleElem.scrollTop(),
            elemHeight = consoleElem.offsetHeight();

            consoleElem.value(consoleInner);

            if(scrollTop > (scrollHeight - elemHeight - 10)){
                consoleElem.scrollTop(consoleElem.scrollHeight());
            }
        }
        
        return {
            log: function(data){
                log(data);
            },
            state: function(data){
                data = "[" + (test.runType.download ? "download" : "upload") + "] " + data;
                log(data);
            },
            clear: function(){
                consoleInner = "";
                consoleElem.value(consoleInner);
            }
        }
    }();
    function fileData(){
        var data = new FormData();

        data.append("file-" + app.random(13), test.tempFile);

        return data;
    }
    function speedRateMbps(rate){
        rate = rate / 125000;
        return rate.toFixed(rate > 100 ? 1 : 2); // convert bytes per second to megabits per second
    }
    function countArrayItems(arr){
        var count = 0;
        arr.forEach(function(item){
            count += item;
        });
        return count;
    }
    function loadedData(loaded){
        if(loaded == 0) return "0KB";
        return (loaded / 1000000) < 1.024 ? (loaded / 1000).toFixed(2) + "KB" : (loaded / 1000000).toFixed(2) + "MB";
    }
    function showUserProvider(isp, ip){
        test.user.isp = isp;
        test.user.ip = ip;
        ispNameElem.textContent(isp),
        publicIpElem.textContent(ip);
        if(test.user.ip && test.user.ip.split("").indexOf(":") > -1){
            publicIpElem.addClass("hidden");
        }
    }
    function stopTest(){
        clearInterval(intervalHeartbeat);
        connections && connections.requests && connections.requests.forEach(function(req){
            req.abort && req.abort();
        });
        connections && connections.preconnect && connections.preconnect.requests.forEach(function(req){
            req.abort && req.abort();
        });
    }
    function toggleConnectionsMode(mode){
        multiModeButton.removeClass("active"),
        singleModeButton.removeClass("active");
        
        (mode == "multi" ? multiModeButton : singleModeButton).addClass("active");
        test.connections.mode = mode;
        app.event("testStatus", {});
    }
    function closeGauge(){
        stageMain.append(createElement(StartButton, {textContent: "DE NUEVO", action: 2, tryAgainAnim: true}));
        app.event("closeGauge");
    }
    function clearResults(){
        resultDownload.find("resultValue").textContent("- -");
        resultDownload.find("progressBar").style({width: 0});
        
        resultUpload.find("resultValue").textContent("- -");
        resultUpload.find("progressBar").style({width: 0});
        
        testConsole.clear();
        testConsole.log("Starting test...");
    }
    function breakTest(){
        var id = setTimeout(function() {}, 0);
        while(id--){
            clearTimeout(id);
        }
        stopTest();
        setTimeout(function(){
            app.event("testStatus", {onprogress: false});
            app.event("clearGauge");
            setTimeout(function(){
                if(test.runType.download){
                    app.event("runTest", {runType: "upload"});
                }else{
                    app.event("closeTest");
                    closeGauge();
                }
            }, 500);
        }, 1300);
    }
    function startInterval(){
        intervalStarted = true;

        app.event("testStatus", {onprogress: true});

        var speedNumberElem = test.runType.download ? speedDownloadNumber : speedUploadNumber,
            progressBarElem = (test.runType.download ? resultDownload : resultUpload).find("progressBar"),
            
            runTime = test.runTime,

            // Iterval vars
            time = app.time(),
            intervalStartedTime,
            loadTime,
            record = 1,
            transfer = {
                transferred: 0,
                lastTime: 0,
                time: 0,
                maxTime: 0,
                average: {
                    count: 0,
                    len: 0,
                    time: 0
                }
            },
            loaded,
            prev = {
                loaded: 0,
                transferTime: 0,
                instantSpeed: 0
            },
            buffer = {
                items: [{
                    loaded: 0,
                    loadTime: globalLoadStartTime,
                    time: 0
                }],
                splice: function(){
                    var bufferTime = buffer.items[buffer.items.length - 1].time - buffer.items[1].time;
                    
                    if(bufferTime >= buffer.maxTime){
                        buffer.items.splice(0, 1);
                    }
                },
                update: function(){
                    var first, last;
                    
                    first = buffer.items[0];
                    last = buffer.items[buffer.items.length - 1];
                    
                    buffer.size = last.loaded - first.loaded;
                    buffer.time = last.time - first.time;
                },
                size: 0,
                time: 0,
                maxTime: 1500
            },
            instant = {
                speed: 0,
                results: [],
                maxResults: 0
            },
            average = {
                speed: 0,
                results: [],
                maxLen: 1
            },
            speedRate;
        
        loadTime = time - globalLoadStartTime;
        
        function parseValue(val){
            if(test.resultsPrecision > 1) return val;
            var str = val.toString(), i = str.indexOf(".");
            return str.substr(0, val >= 1 ? i + 2 : i + 3);
        }
        function getInstantSpeed(){
            var loaded = 0, startTime = [];
            connections.requests.forEach(function(req){
                if(req.buffer){
                    buffer = req.buffer;
                    loaded += buffer[buffer.length - 1].loaded - buffer[0].loaded;
                    startTime.push(buffer[0].time);
                }
            });
            return loaded / ((time - Math.min.apply(null, startTime)) / 1000);

            var speed = 0;
                connections.requests.forEach(function(req){
                if(req.buffer){
                    buffer = req.buffer;
                    //speed += (buffer[buffer.length - 1].loaded - buffer[0].loaded) / (((time - buffer[0].time) + (req.firstProgressTime - globalLoadStartTime)) / 1000);
                    speed += (buffer[buffer.length - 1].loaded - buffer[0].loaded) / ((time - buffer[0].time) / 1000);
                }
            });
            return speed;
        }
        function intervalCallback(){
            time = app.time();
            loadTime = time - globalLoadStartTime;
            intervalTime = time - intervalStartedTime;
            loaded = connections.loaded;
            transfer.transferred = loaded - prev.loaded;
            transfer.lastTime = transfer.transferred > 0 ? time : transfer.lastTime;
            transfer.time = time - transfer.lastTime;
            if(transfer.time > transfer.maxTime){
                transfer.maxTime = transfer.time;
                //buffer.maxTime = 1500 + transfer.maxTime;
            }
            
            if(transfer.transferred > 0 && prev.transferTime > 0){
                transfer.average.count += prev.transferTime;
                transfer.average.len += 1;
                transfer.average.time = transfer.average.count / transfer.average.len;
                
                //console.log(test.runType.download ? "[download]" : "[upload]", "average time:", Math.round(transfer.average.time), "max time:", transfer.maxTime)
            }
            /*if(record && transfer.time > 280 && test.runType.download && loadTime > 1000){
                record = 0;
                setTimeout(function(){ record = 1; }, transfer.time > 1000 ? 1000 : transfer.time);
            }
            if(transfer.transferred > 0){
                buffer.items.push({loaded: loaded, time: loadTime, loadTime: time});
                if(transfer.maxTime < 1500 && intervalTime < 5000 && test.runType.download){
                    buffer.splice();
                }
                buffer.update();
            }else{
                buffer.time = loadTime - buffer.items[0].time;
            }
            
            instant.speed = (buffer.refSize + buffer.size) / (loadTime / 1000);
            instant.speed = buffer.size / (buffer.time / 1000);
            */
            instant.speed = getInstantSpeed();
            
            //if(transfer.transferred){
                //instant.results.push(!transfer.transferred && prev.instantSpeed ? (instant.speed + prev.instantSpeed) / 2 : instant.speed);
                instant.results.push(instant.speed);
                instant.maxResults = (loadTime > 2500 ? 5 : 5) + Math.round(transfer.average.time / 80);
                instant.maxResults = instant.maxResults > 10 ? 10 : instant.maxResults;
                if(instant.results.length > instant.maxResults){
                    instant.results.splice(0, instant.results.length - instant.maxResults);
                    //instant.results.splice(0, 1);
                }
                
                average.speed = countArrayItems(instant.results) / instant.results.length;

                speedRate = speedRateMbps(average.speed);
                
                speedNumberElem.textContent(parseValue(speedRate));
                app.event("updateGauge", {speedRate: speedRate});
            //}

            progressBarElem.style({width: (((time - intervalStartedTime) / runTime) * 100) + "%"});
            
            testConsole.state("instant: " + (instant.speed / 125000).toFixed(2) + "mbps, average: " + speedRate + "mbps, transf: " + loadedData(transfer.transferred) + ", loaded: " + loadedData(loaded) + ", time: " + (loadTime / 1000) + "s");
            
            prev.loaded = loaded;
            prev.transferTime = transfer.time;
            prev.instantSpeed = transfer.transferred ? instant.speed : prev.instantSpeed;
        }
        
        setTimeout(function(){
            intervalStartedTime = app.time();
            // start interval
            intervalHeartbeat = setInterval(intervalCallback, test.hearbeatTime);

            app.event("listenSpeed");

            setTimeout(function(){
                stopTest();

                connections.requests.forEach(function(req){
                    testConsole.state("xhr " + req.id + " loaded: " + (req.loaded / 1000000).toFixed(3) + "MB, maxTime: " + req.maxTransferTime + "ms" + (req.firstProgressTime ? ", avgTime: " + Math.round((req.lastProgressTime - req.firstProgressTime) / (req.progressCount - 1 || 1)) + "ms" : ""));
                });

                testConsole.state("loaded: " + (connections.loaded / 1000000).toFixed(2) + "MB, finalSpeed: " + ((connections.loaded / 125000) / ((app.time() - globalLoadStartTime) / 1000)).toFixed(2) + "mbps, maxTransferTime: " + transfer.maxTime + "ms, time: " + ((app.time() - globalLoadStartTime) / 1000) + "s");

                setTimeout(function(){
                    app.event("testStatus", {onprogress: false});
                    app.event("clearGauge");

                    setTimeout(function(){
                        if(test.runType.download){
                            app.event("runTest", {runType: "upload"});
                        }else{
                            app.event("closeTest"), closeGauge();
                        }
                    }, 500);

                }, 500);

            }, runTime + test.hearbeatTime);
        }, loadTime > 420 ? 1 : 420 - loadTime);
    }
    function requestConfig(req){
        var target = test.runType.download ? req : req.upload,
            upload = test.runType.upload,
            progressCount = 1,
            prev = {loaded: 0, progressTime: 0},
            transfer = {transferred: 0, time: 0},
            buffer = [],
            bufferIndex = 0,
            bufferEnabled = test.bufferEnabled,
            time;
        
        req.loaded = 0;
        req.id = connections.requests.length + 1;
        req.maxTransferTime = 0;
        req.firstProgressTime = 0;
        req.lastProgressTime = 0;
        req.lastProgressTime = 0;
        req.progressCount = 1;
        
        target.addEventListener("progress", function(e){
            time = app.time();
            if(!globalLoadStartTime) globalLoadStartTime = time;
            if(!firstTransferred) firstTransferred = e.loaded;
            transfer.transferred = e.loaded - prev.loaded;
            transfer.time = time - (prev.progressTime || time);
            if(transfer.time > req.maxTransferTime) req.maxTransferTime = transfer.time;
            if(progressCount > 1) req.loaded += transfer.transferred, connections.loaded += transfer.transferred;
            req.lastProgressTime = time;
            req.progressCount = progressCount;
            
            if(!intervalStarted && progressCount == 4) startInterval();
            
            if(progressCount > 1){
                if(time - buffer[bufferIndex].startTime < 300 && bufferIndex > 0){
                    buffer[bufferIndex].loaded = e.loaded;
                    buffer[bufferIndex].time = time;
                }else{
                    buffer.push({loaded: e.loaded, time: time, startTime: time});
                    if(bufferEnabled && intervalTime < 5000 && buffer[buffer.length - 1].time - buffer[1].time >= 1500){
                        buffer.splice(0, 1);
                    }
                    bufferIndex = buffer.length - 1;
                }
                req.buffer = buffer;
                if(upload){
                    testConsole.state("xhr " + req.id + " transfer " + progressCount + ": " + loadedData(transfer.transferred) + ", time: " + transfer.time + "ms, " + ((time - globalLoadStartTime) / 1000) + "s");
                }
            }else{
                testConsole.state("xhr " + req.id + " first transfer: " + loadedData(e.loaded));
                req.firstProgressTime = time;
                
                buffer.push({loaded: e.loaded, time: time, startTime: time});
            }
            
            prev.loaded = e.loaded;
            prev.progressTime = time;
            progressCount++;
        });
    }
    function parseNumber(num, min, max){
        num = parseInt(num);
        num = isNaN(num) || num < min ? min : num;
        num = num > max ? max : num;
        return num;
    }
    
    
    this.events = {
        initializeTest: function(){
            clearResults();
            
            setTimeout(function(){
                stageMain.append(createElement(GaugeContainer));
            }, 450);
        },
        runTest: function(e){
            //return;
            test.runType.set(e.runType);
            test.runTime = parseNumber(testTimeInput.value(), 1, 1800) * 1000;
            test.connections.multi.download = parseNumber(connectionsInput.value(), 2, 20);
            test.selectedServer = parseInt(serverSelectElem.value());
            test.bufferEnabled = enableBuffer.node.checked;
            
            var uploadData = test.runType.download ? null : fileData(), i;
            
            testConsole.state("starting measures...");
            
            connections = {
                server: test.servers[test.selectedServer],
                preconnect: {requests: [], success: 0},
                requests: [],
                count: test.connections[test.connections.mode][test.runType.download ? "download" : "upload"],
                loaded: 0
            };
            globalLoadStartTime = 0;
            firstTransferred = 0;
            intervalTime = 0;
            intervalStarted = false;
            
            function sendRequests(){
                for(i = 0; i < connections.count; i++){
                    connections.requests.push(app.fetch({
                        xhr: requestConfig,
                        url: test.runType.download ? connections.server.download : connections.server.upload,
                        get: {v: app.random(6) + "_" + app.time()},
                        post: uploadData,
                        fail: breakTest,
                        success: breakTest
                    }));
                }
            }
            if(test.runType.download){
                for(i = 0; i < connections.count; i++){
                    connections.preconnect.requests.push(app.fetch({
                        url: connections.server.download,
                        get: {v: app.random(6) + "_" + app.time()},
                        type: "HEAD",
                        fail: breakTest,
                        success: function(){
                            connections.preconnect.success += 1;
                            if(connections.preconnect.success == connections.preconnect.requests.length) setTimeout(sendRequests, 1);
                        }
                    }));
                }
                return;
            }
//            var prevLoaded = 0;
//            window.hey === void 0 && (window.hey = setInterval(function(){
//                
//                console.clear(), console.log("speedRate: " + loadedData(connections.loaded - prevLoaded) + "/s");
//                
//                prevLoaded = connections.loaded;
//            }, 1000));
            sendRequests();
        },
        consoleToggle: function(e){
            consoleWrapper.toggleClass("hidden");
            consoleElem.scrollTop(consoleElem.scrollHeight());
        }
    }
    this.closeStage = function(e){
        e.preventDefault();
        stopTest();
        
        var id = setTimeout(function() {}, 0);
        while(id--){
            clearTimeout(id);
        }
        
        testStage.style({opacity: 0, pointerEvents: "none"});
        
        setTimeout(function(){
            app.event("testStatus", {started: false, opened: false, finished: false, onprogress: false});
            app.event("renderStage", {fadeIn: 1});
        }, 300);
    }
    this.componentDidMount = function(){
        if(!test.user.ip){
            app.fetch({
                url: isLocal ? "http://ip-api.com/json/" : "https://ipapi.co/json/",
                success: function(fetch){
                    showUserProvider(app.ucWords(isLocal ? fetch.isp : fetch.org), isLocal ? fetch.query : fetch.ip);
                }
            });
        }
    }
    this.render = function(){
        return (
            createElement(testStage, {className: "testStage" + (props.fadeIn ? " fadeIn" : "")},
                createElement("section", {className: "resultsArea"},
                    createElement(resultsContainer, {className: "resultsData"},
                        createElement("button", {className: "stageClose", title: "Cerrar Prueba", "aria-label": "Cerrar Prueba", onclick: $this.closeStage}, svgIcon("close")),
                        createElement(resultDownload, {className: "resultItem resultDownload"},
                            createElement("div", {className: "resultContainer"},
                                createElement("div", {className: "resultHeader"},
                                    createElement("div", {className: "resultHeaderWrapper"},
                                        createElement("div", {className: "resultIcon"}, svgIcon("downlink")),
                                        createElement("div", {className: "resultTitle"}, createElement("b", {textContent: "DESCARGAR"})),
                                        createElement("div", {className: "resultUnit textHolder"}, createElement("span", {textContent: "Mbps"}))
                                    )
                                ),
                                createElement("div", {className: "resultBody"},
                                    createElement(speedDownloadNumber, {className: "resultValue speedDownloadNumber"}, createElement("span", {textContent: "- -"}))
                                ),
                                createElement("div", {className: "progressBarWrapper"}, createElement("div", {className: "progressBar"}))
                            )
                        ),
                        createElement(resultUpload, {className: "resultItem resultUpload"},
                            createElement("div", {className: "resultContainer"},
                                createElement("div", {className: "resultHeader"},
                                    createElement("div", {className: "resultHeaderWrapper"},
                                        createElement("div", {className: "resultIcon"}, svgIcon("uplink")),
                                        createElement("div", {className: "resultTitle"}, createElement("b", {textContent: "SUBIR"})),
                                        createElement("div", {className: "resultUnit textHolder"}, createElement("span", {textContent: "Mbps"}))
                                    )
                                ),
                                createElement("div", {className: "resultBody"},
                                    createElement(speedUploadNumber, {className: "resultValue speedUploadNumber"}, createElement("span", {textContent: "- -"}))
                                ),
                                createElement("div", {className: "progressBarWrapper"}, createElement("div", {className: "progressBar"}))
                            )
                        )
                    ),
                    createElement("div", {className: "resultsGraph hidden"}, svgIcon("resultGraph", 0), svgIcon("resultGraph", 0))
                ),
                createElement(stageMain, {className: "stageMain"},
                    createElement(StartButton, {textContent: "COMENZAR", action: 1})
                ),
                createElement(consoleWrapper, {className: "testConsoleWrapper hidden"},
                    createElement(consoleElem, {readonly: "", spellcheck: "false", value: "waiting to start the test..."}),
                    createElement("div", {className: "testSettings"},
                        createElement("div", {className: "testSettings-item setTime"},
                            createElement("label", {className: "testSettings-label textHolder", for: "testSettings-setTime"}, createElement("b", {textContent: "Test time: "})),
                            createElement("div", {className: "testSettings-input"},
                                createElement(testTimeInput, {className: "testSettings-inputElem", id: "testSettings-setTime", type: "number", min: "1", value: test.runTime / 1000}),
                                createElement("div", {className: "testSettings-inputBorder"})
                            )
                        ),
                        createElement("div", {className: "testSettings-item setConnections"},
                            createElement("label", {className: "testSettings-label textHolder", for: "testSettings-setConnections"}, createElement("b", {textContent: "Connections: "})),
                            createElement("div", {className: "testSettings-input"},
                                createElement(connectionsInput, {className: "testSettings-inputElem", id: "testSettings-setConnections", type: "number", min: "1", value: test.connections.multi.download}),
                                createElement("div", {className: "testSettings-inputBorder"})
                            )
                        ),
                        createElement("div", {className: "testSettings-item setServer"},
                            createElement("label", {className: "testSettings-label textHolder", for: "testSettings-setServer"}, createElement("b", {textContent: "Server: "})),
                            createElement("div", {className: "testSettings-input"},
                                createElement(serverSelectElem, {className: "testSettings-selectElem", id: "testSettings-setServer"},
                                    test.servers.map(function(item, index){
                                        return index > 0 || isLocal ? (index != test.selectedServer ? createElement("option", {value: index, textContent: item.name}) : createElement("option", {value: index, selected: "", textContent: item.name})) : null
                                    })
                                )
                            )
                        ),
                        createElement("div", {className: "testSettings-item enableBuffer"},
                            createElement("label", {className: "testSettings-label textHolder", for: "testSettings-enableBuffer"}, createElement("b", {textContent: "Enable buffer: "})),
                            createElement("div", {className: "testSettings-input"},
                                test.bufferEnabled ?
                                    createElement(enableBuffer, {className: "testSettings-inputCheckbox", id: "testSettings-enableBuffer", type: "checkbox", checked: ""})
                                    :
                                    createElement(enableBuffer, {className: "testSettings-inputCheckbox", id: "testSettings-enableBuffer", type: "checkbox"})
                                ,
                            )
                        )
                    )
                ),
                createElement("footer", {className: "stage-footer"},
                    createElement("div", {className: "footerItem"},
                        createElement("div", {className: "footerItem-details"},
                            createElement("div", {className: "footerItem-icon"}, svgIcon("user")),
                            createElement("div", {className: "footerItem-content"},
                                createElement(ispNameElem, {className: "footerItem-title ispName", textContent: test.user.isp || "- -"}),
                                createElement(publicIpElem, {className: "footerItem-description textHolder" + (test.user.ip && test.user.ip.split("").indexOf(":") > -1 ? " hidden" : ""), textContent: test.user.ip || "- -"})
                            )
                        )
                    ),
                    createElement("div", {className: "footerItem"},
                        createElement("div", {className: "footerItem-details"},
                            createElement("div", {className: "footerItem-icon"}, svgIcon("connections")),
                            createElement("div", {className: "footerItem-content"},
                                createElement("div", {className: "footerItem-title", textContent: "Conexiones"}),
                                createElement("div", {className: "footerItem-description"},
                                    createElement("div", {className: "testModeToggle-wrapper"},
                                        createElement(multiModeButton, {className: "testModeToggle-button" + (test.connections.mode == "multi" ? " active" : ""), textContent: "Multi", onclick: function(){ toggleConnectionsMode("multi"); }}),
                                        createElement("span", {className: "testModeToggle-divider textHolder", textContent: "•"}),
                                        createElement(singleModeButton, {className: "testModeToggle-button" + (test.connections.mode == "single" ? " active" : ""), textContent: "Unica", onclick: function(){ toggleConnectionsMode("single"); }})
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    }
};

export default TestStage;