import app, {components, createElement, createSvg, customElement} from "../assets/js/App";
import utils from "../assets/js/Utils";

import StartButton from "./StartButton";
import GaugeContainer from "./GaugeContainer";
import test from "./TestConfig";

function TestStage(){
    var interval,
        $this = this,
        testStage = customElement("div"),
        stageMain = customElement("main"),
        resultsContainer = customElement("div"),
        resultDownload = customElement("div"),
        speedDownloadNumber = customElement("div"),
        resultUpload = customElement("div"),
        speedUploadNumber = customElement("div");
    
    function fileData(){
        var data = new FormData();

        data.append("file-" + utils.random(13), test.tempFile);

        return data;
    }
    function speedRateMbps(rate){
        return (rate / 125000).toFixed(2); // convert bytes per second to megabits per second
    }
    function maxIncrementRate(rate){
        return rate >= test.incrementsLast ? test.incrementsLast : rate;
    }
    function abortXhr(){
        test.xhrData.forEach(function(item){
            item.abort && item.abort();
        });
    }
    function clearOnprogress(){
        test.xhrData.forEach(function(item){
            item.upload.onprogress = null;
            item.onprogress = null;
        });
    }
    function getLoadedBytes(){
        var count = 0;
        test.xhrData.forEach(function(item){
            count += item.loadedBytes;
        });
        return count;
    }
    function stopTest(){
        clearInterval(test.interval);
        abortXhr();
    }
    function closeGauge(){
        components.MainContent.updateStatus({started: false});
        stageMain.append(createElement(StartButton, {textContent: "DE NUEVO", action: 2, tryAgainAnim: true}));
        components.GaugeContainer.remove();
    }
    function intervalHearbeat(xhr){
        xhr.loadedBytes = 0;
        var config = test.runType ? xhr : xhr.upload;
        config.onprogress = function(){
            components.MainContent.updateStatus({onprogress: true});
            clearOnprogress();
            /*
            test.prevloadedBytes = 0;
            test.lastLoadTime = 0;
            test.speedRateresultsArr = [];
            test.speedRateresults = 0;
            */
            var initLoadTime = utils.getTime(),
                speedNumberElem = test.runType ? speedDownloadNumber : speedUploadNumber,
                progressBarElem = (test.runType ? resultDownload : resultUpload).find("progressBar");
            test.interval = setInterval(function(){
                var timeNow = utils.getTime(),
                    testTime = ((timeNow - initLoadTime) / 1000),
                    activeIncrementsClasses = "",
                    loadedBytes = getLoadedBytes(),
                    bytesRate,
                    speedRate,
                    gaugeCircleOffset,
                    gaugePercent,
                    gaugeNeedleRotate;
                // Method 1
                /*
                if(testTime > 1){
                    test.bytesRate = (loadedBytes - test.prevloadedBytes) / ((timeNow - test.lastLoadTime) / 1000);
                    test.prevloadedBytes = loadedBytes;
                    test.lastLoadTime = timeNow;
                    test.speedRateresultsArr.push(test.bytesRate);
                    test.speedRateresults += test.bytesRate;
                }else{
                    test.bytesRate = loadedBytes;
                    test.prevloadedBytes = loadedBytes;
                    test.lastLoadTime = timeNow;
                    test.speedRateresultsArr.push(loadedBytes);
                    test.speedRateresultsArr = test.speedRateresultsArr.map(function(){
                        return loadedBytes;
                    });
                    test.speedRateresults = countArrayItems(test.speedRateresultsArr);
                }

                //test.bytesRate = loadedBytes;



                if(test.speedRateresultsArr.length > 20){
                    test.speedRateresults -= test.speedRateresultsArr[0];
                    test.speedRateresultsArr.splice(0, 1);
                }
                // Stabilize bytes rate
                test.speedRate = testTime > 1 ? (test.speedRateresults / test.speedRateresultsArr.length) : loadedBytes;

                */
                // Method 2

                bytesRate = loadedBytes / testTime;


                speedRate = speedRateMbps(bytesRate);

                //w.console.log("testTime: " + testTime + ", speedRateMbps: " + (bytesRate / 125000).toFixed(3) + ", currentSpeedRateMbps: " + speedRate);

                test.increments.forEach(function(item, index){
                    if(speedRate >= item){
                        activeIncrementsClasses += " incrementOn--" + index;
                    }
                });

                gaugePercent = (maxIncrementRate(speedRate) / test.incrementsLast) * 100; // Calculate Percent
                gaugeCircleOffset = ((test.gaugeCircleOffsetRef * gaugePercent) / 100) + test.gaugeCircleStrokeMin;

                gaugeNeedleRotate = ((test.gaugeNeedleRotateRef * gaugePercent) / 100) + test.gaugeNeedleRotateMin;

                speedNumberElem.textContent(speedRate);
                progressBarElem.style({width: (((timeNow - initLoadTime) / (test.runningTime - test.hearbeatTime)) * 100) + "%"});
                components.GaugeContainer.update(speedRate, gaugeCircleOffset, gaugeNeedleRotate, activeIncrementsClasses);

            }, test.hearbeatTime);
            test.runType && components.GaugeContainer.toggleDetails();
            setTimeout(function(){
                stopTest();
                setTimeout(function(){
                    components.MainContent.updateStatus({onprogress: false});
                    components.GaugeContainer.clear(function(){
                        if(test.runType){
                            $this.run(false);
                        }else{
                            closeGauge();
                        }
                    });
                }, 1300);
            }, test.runningTime);
        }
        config.addEventListener("progress", function(e){
            xhr.loadedBytes = e.loaded;
        });
    }
    function testLoadError(){
        var id = setTimeout(function() {}, 0);
        while (id--){
            clearTimeout(id);
        }
        stopTest();
        setTimeout(function(){
            components.MainContent.updateStatus({onprogress: false});
            components.GaugeContainer.clear(function(){
                if(test.runType){
                    $this.run(false);
                }else{
                    closeGauge();
                }
            });
        }, 1300);
    }
    function testTransferComplete(){
        
    }
    this.run = function(runType){
        components.MainContent.updateStatus({started: true, runType: runType});
        //return;
        var xhr,
            v = utils.random(6) + "" + utils.getTime(),
            data = test.runType ? "" : fileData();
        
        test.xhrData = [];
        
        for(var i = 0; i < test.xhrConnections; i++){
            v = utils.random(6) + "" + utils.getTime();
            xhr = app.ajax({
                xhr: intervalHearbeat,
                url: (test.runType ? test.downloadURL : test.uploadURL) + "?v=" + v,
                type: test.runType ? "GET" : "POST",
                data: data,
                fail: testLoadError,
                success: testTransferComplete
            });
            test.xhrData.push(xhr);
        }
    },
    this.stageClose = function(e){
        e.preventDefault();
        stopTest();
        
        var id = setTimeout(function() {}, 0);
        while (id--){
            clearTimeout(id);
        }
        
        testStage.style({opacity: 0});
        setTimeout(function(){
            components.MainContent.updateStatus({started: false, runType: true, onprogress: false, clearClass: true});
            components.MainContent.renderStage();
        }, 300);
    },
    this.clearResults = function(){
        resultsContainer.find("resultValue").textContent("- -");
        resultsContainer.find("progressBar").style({width: 0});
    },
    this.showGauge = function(){
        stageMain.append(createElement(GaugeContainer));
    },
    this.render = function(){
        return (
            createElement(testStage, {className: "testStage"}, [
                createElement("section", {className: "resultsArea"},
                    createElement(resultsContainer, {className: "resultsContainer"}, [
                        createElement("button", {className: "stageClose", title: "Cerrar Prueba", "aria-label": "Cerrar Prueba", onclick: $this.stageClose}, createSvg("iClose")),
                        createElement(resultDownload, {className: "resultItem resultDownload"},
                            createElement("div", {className: "resultContainer"}, [
                                createElement("div", {className: "resultHeader"},
                                    createElement("div", {className: "resultHeaderWrapper"}, [
                                        createElement("div", {className: "resultIcon"}, createSvg("$5")),
                                        createElement("div", {className: "resultTitle"}, createElement("b", {textContent: "DESCARGAR"})),
                                        createElement("div", {className: "resultUnit textHolder"}, createElement("span", {textContent: "Mbps"}))
                                    ])
                                ),
                                createElement("div", {className: "resultBody"}, [
                                    createElement(speedDownloadNumber, {className: "resultValue speedDownloadNumber"}, createElement("span", {textContent: "- -"}))
                                ]),
                                createElement("div", {className: "progressBarWrapper"}, createElement("div", {className: "progressBar"}))
                            ])
                        ),
                        createElement(resultUpload, {className: "resultItem resultUpload"},
                            createElement("div", {className: "resultContainer"}, [
                                createElement("div", {className: "resultHeader"},
                                    createElement("div", {className: "resultHeaderWrapper"}, [
                                        createElement("div", {className: "resultIcon"}, createSvg("$6")),
                                        createElement("div", {className: "resultTitle"}, createElement("b", {textContent: "SUBIR"})),
                                        createElement("div", {className: "resultUnit textHolder"}, createElement("span", {textContent: "Mbps"}))
                                    ])
                                ),
                                createElement("div", {className: "resultBody"}, [
                                    createElement(speedUploadNumber, {className: "resultValue speedUploadNumber"}, createElement("span", {textContent: "- -"}))
                                ]),
                                createElement("div", {className: "progressBarWrapper"}, createElement("div", {className: "progressBar"}))
                            ])
                        )
                    ])
                ),
                createElement(stageMain, {className: "stageMain"},
                    createElement(StartButton, {textContent: "COMENZAR", action: 1})
                )
            ])
        );
    }
};

export default TestStage;