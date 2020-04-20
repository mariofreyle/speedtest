window.customProps = function(elem){
    return new customProps.init(elem);
}
customProps.init = function(elem){
    var len = elem.length;
    if(void 0 === len){
        this[0] = elem;
        this.length = 1;
        return this;
    }
    for(var key = 0; key < len; key++){
        this[key] = elem[key]
    }
    this.length = len;
    return this;
}
customProps.init.prototype = customProps.prototype = {
    each: function(arr, callback){
        var len = arr.length;
        if(len == 1){
            return callback(arr[0])
        }
        for(var key = 0; key < len; key++){
            callback(arr[key])
        }
    },
    remove: function(){
        this.each(this, function(elem){
            elem.parentNode.removeChild(elem)
        })
    },
    addClass: function(value){
        this.each(this, function(elem){
            elem.classList.add(value)
        })
    },
    removeClass: function(value){
        this.each(this, function(elem){
                elem.classList.remove(value)
        })
    },
    toggleClass: function(value){
        this.each(this, function(elem){
            elem.classList.toggle(value)
        })
    },
    append: function(append){
        this.each(this, function(elem){
            elem.appendChild(append)
        })
    },
    replaceWith: function(replace){
        this.each(this, function(elem){
            elem.parentNode.replaceChild(elem, replace)
        })
    },
    textContent: function(value){
        this.each(this, function(elem){
            elem.textContent = value;
        })
    },
    setAttrNS: function(ns, attr, attrValue){
        this.each(this, function(elem){
            elem.setAttributeNS(ns, attr, attrValue)
        })
    },
    className: function(value){
        this.each(this, function(elem){
            elem.className = value;
        })
    },
    style: function(props){
        this.each(this, function(elem){
            for(var i in props){
                elem.style[i] = props[i];
            }
        })
    },
    first: function(props){
        return this[0].firstChild;
    },
    find: function(className){
        var elem = this[0], elements = elem.getElementsByClassName(className);
        return customProps(elements)
    },
    render: function(render){
        var elem = this[0], firstChild = elem.firstChild;
        return firstChild ? elem.replaceChild(render, firstChild) : elem.appendChild(render)
    }
}

window.App = function(w, d){
    var app = this;
    function appendNode(node, el){
        el.appendChild((typeof node == "object") ? node : d.createTextNode(node));
    }
    return {
        ajax: function(a){
            function uriParams(data){
                var url = "";
                for(var prop in data) url += prop + "=" + w.encodeURIComponent(data[prop]) + "&";
                return url.substring(0, url.length - 1)
            }
            var isFormData = typeof a.data == "object" && a.data.constructor.name == "FormData",
                sendData = a.data ? (!isFormData ? uriParams(a.data) : a.data) : "",
                type = a.type || "GET",
                url = a.url || "",
                x = a.xhr,
                dataType = a.dataType || "",
                contentType = (a.contentType) ? a.contentType : null,
                headers = a.headers ? a.headers : {},
                xhr = new XMLHttpRequest();

            typeof x == "function" && x(xhr);
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        var response = xhr.responseText;
                        if(dataType == "json" && response != ""){
                            try {
                                response = JSON.parse(response);
                            }catch(cte){
                                a.error && a.error();
                                return;
                            }
                        }
                        a.success && a.success(response);
                    }
                }
            }
            xhr.onerror = function(){
                console.log("Request Fail.");
                a.fail && a.fail();
            }
            xhr.open(type, url, true);
            !isFormData && !contentType && xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            contentType && xhr.setRequestHeader("Content-type", contentType);
            for(var prop in headers){
                xhr.setRequestHeader(prop, headers[prop]);
            }
            xhr.send(sendData);
            return xhr;
        },
        createElement: function(name, options, childs){
            options = options ? options : {};
            if(typeof name == "function"){
                var render,
                    componentName = name.name;
                name = new name(options);
                App.components[componentName] = name;
                render = name.render();
                name.componentDidMount && name.componentDidMount();
                return render;
            }
            var elem = typeof name == "string" ? d.createElement(name) : name[0];
            for(var prop in options){
                if(prop in elem){
                    elem[prop] = options[prop]
                }else{
                    elem.setAttribute(prop, options[prop])
                }
            }
            childs && (childs.constructor.name == "Array" ? childs.forEach(function(item){ item && appendNode(item, elem) }) : appendNode(childs, elem));
            return elem;
        },
        customElement: function(elem){
            return customProps(App.createElement(elem));
        },
        createSvg: function(a){
            var props,
                svg = App.svgIcons[a],
                xmlns = "http://www.w3.org/2000/svg",
                svgElem = d.createElementNS(xmlns, "svg");
            props = svg.props;
            function appendNodeNS(node, childs){
                childs.forEach(function(item){
                    var itemNode = document.createElementNS(xmlns, item.tag),
                        props = item.props;
                    if(props){
                        for(var g in props){
                            itemNode.setAttributeNS(null, g, props[g]);
                        }
                    }
                    if(item.childs) appendNodeNS(itemNode, item.childs);
                    node.appendChild(itemNode);
                });
            }
            appendNodeNS(svgElem, svg.childs);
            svgElem.setAttribute("class", "svgIcon " + props.className);
            svgElem.setAttribute("xmlns", xmlns);
            svgElem.setAttributeNS(null, "viewBox", props.viewBox);
            
            return svgElem;
        },
        svgIcons: {
            $1: {
                tag: "svg",
                props: {className: "iconLogo", viewBox: "0 0 512 512"},
                childs: [{
                    tag: "path",
                    props: {d: "M357.423,209.039c-9.093-9.093-23.832-9.093-32.925,0l-66.389,66.386c-3.286-0.779-6.708-1.203-10.23-1.203 c-24.435,0-44.316,19.897-44.316,44.358c0,24.457,19.88,44.357,44.316,44.357c24.46,0,44.357-19.9,44.357-44.357 c0-3.523-0.424-6.945-1.203-10.231l66.389-66.386C366.515,232.871,366.515,218.13,357.423,209.039z"}
                },
                    {tag: "path",
                    props: {d: "M437.083,120.099c-99.837-99.837-262.318-99.837-362.206,0.003c-86.213,86.257-99.573,222.315-31.769,323.513    c7.156,10.683,21.618,13.535,32.3,6.38c10.681-7.156,13.538-21.617,6.38-32.3c-19.051-28.437-30.268-60.238-33.925-92.598h21.887    c12.857,0,23.281-10.422,23.281-23.281c0-12.856-10.424-23.281-23.281-23.281H47.789C52.008,239.863,66.9,202.32,92,170.742    l15.842,15.842c4.546,4.547,10.504,6.821,16.461,6.821c5.958,0,11.917-2.274,16.461-6.821c9.092-9.09,9.092-23.832,0-32.924    l-15.909-15.91c32.054-25.745,69.977-40.674,108.842-44.8v21.986c0,12.859,10.424,23.281,23.281,23.281    c12.857,0,23.281-10.422,23.281-23.281V93.163c38.183,4.411,75.369,19.28,106.875,44.596l-15.902,15.902    c-9.09,9.093-9.09,23.832,0.003,32.927c4.544,4.544,10.504,6.818,16.459,6.818c5.96,0,11.917-2.274,16.463-6.821l15.826-15.826    c25.109,31.572,40.004,69.111,44.224,107.779h-21.961c-12.856,0-23.281,10.425-23.281,23.281    c0,12.859,10.425,23.281,23.281,23.281h21.889c-3.658,32.36-14.878,64.159-33.935,92.595c-7.16,10.68-4.304,25.142,6.374,32.3    c3.981,2.668,8.485,3.947,12.941,3.947c7.503,0,14.869-3.622,19.362-10.321C536.709,342.411,523.338,206.353,437.083,120.099z"}
                }]
            },
            $2: {
                tag: "svg",
                props: {className: "iconUser", viewBox: "0 0 512 512"},
                childs: [{
                    tag: "path",
                    props: {d: "M256 0c88.366 0 160 71.634 160 160s-71.634 160-160 160S96 248.366 96 160 167.634 0 256 0zm183.283 333.821l-71.313-17.828c-74.923 53.89-165.738 41.864-223.94 0l-71.313 17.828C29.981 344.505 0 382.903 0 426.955V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-37.045c0-44.052-29.981-82.45-72.717-93.134z"}
                }]
            },
            $3: {
                tag: "svg",
                props: {className: "needleGradient", viewBox: "0 0 120 801"},
                childs: [{
                    tag: "defs",
                    childs: [{tag: "linearGradient", props: {id: "needleGradient", x1: "0", x2: "0", y1: "0", y2: "1"}, childs: [{tag: "stop", props: {class: "stop--1", "stop-opacity": "0", "stop-color": "transparent", offset: "40%"}}, {tag: "stop", props: {class: "stop--1", "stop-opacity": "0.95", "stop-color": "currentColor", offset: "100%"}}]}]
                }, {tag: "path", props: {d: "M95 800.5l-34.25-.958H26.5L0 .5h120l-25 800z", fill: "url(#needleGradient)"}}]
            },
            $4: {
                tag: "svg",
                props: {className: "gaugeVector", viewBox: "0 0 100 100"},
                childs: [
                    {tag: "circle", props: {class: "gaugeCircle gaugeCircleBackground strokeBackground", r: "46", cx: "50%", cy: "50%"}},
                    {tag: "circle", props: {class: "gaugeCircle gaugeCircleCurrentSpeed strokePrimary", r: "46", cx: "50%", cy: "50%", "stroke-dasharray": "404"}},
                    {tag: "circle", props: {class: "gaugeCircle gaugeCircleLoading strokeBackground hidden", r: "46", cx: "50%", cy: "50%"}},
                    /*{tag: "polygon", props: {points: "0,100 22,79 78,79 100,100"}}*/
                ]
            },
            $5: {
                tag: "svg",
                props: {className: "iconDownlink", viewBox: "0 0 16 16"},
                childs: [{
                    tag: "path",
                    props: {d: "M8 0a8 8 0 100 16A8 8 0 008 0zM1.333 8a6.667 6.667 0 1113.334 0A6.667 6.667 0 011.333 8zm10-.667a.675.675 0 00-.473.194l-2.2 2.2v-5.06a.666.666 0 10-1.333 0v5.06L5.16 7.533a.668.668 0 00-1.12.3.67.67 0 00.173.647l3.334 3.333a.663.663 0 00.946.001l3.334-3.333a.667.667 0 00-.481-1.148h-.014z"}
                }]
            },
            $6: {
                tag: "svg",
                props: {className: "iconUplink", viewBox: "0 0 16 16"},
                childs: [{
                    tag: "path",
                    props: {d: "M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.667a6.667 6.667 0 11.013 0H8zm.493-10.48a.663.663 0 00-.946-.001L4.213 7.52a.672.672 0 000 .947c.262.26.686.26.947 0l2.2-2.2v5.066a.666.666 0 101.333 0v-5.06l2.2 2.2a.668.668 0 00.935-.946l-3.335-3.34z"}
                }]
            },
            gaugeRanure: {
                tag: "svg",
                props: {className: "iconRanure", viewBox: "100 100 100 100"},
                childs: [{
                    tag: "polygon",
                    props: {points: "0,100 22,79 78,79 100,100"}
                }]
            },
            iClose: {
                tag: "svg",
                props: {className: "iconIClose", viewBox: "0 0 213 213"},
                childs: [{
                    tag: "path",
                    props: {d: "M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0l-75.937 75.937L30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936L5.242 182.427c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312L131.804 106.491z"}
                }]
            }
        },
        rootNode: customProps(d.getElementById("app")),
        query: function(a, b){
            return b ? b.querySelectorAll(a) : d.querySelectorAll(a);
        },
        queryOne: function(a, b){
            return b ? b.querySelector(a) : d.querySelector(a);
        },
        setTimeout: function(id, callback, wait){
            app.timeouts[id] = setTimeout(function(){
                callback()
            }, wait)
        },
        clearTimeout: function(timeouts){
            timeouts = typeof timeouts == "string" ? [timeouts] : timeouts;
            timeouts.forEach(function(item){
                var timeout = app.timeouts[item];
                if(!timeout){
                    return
                }
                clearTimeout(timeout);
            });
        },
        timeouts: {},
        URL_BASE: isLocal ? "http://localhost:8080" : "https://mariofreyle.github.io/speedtest",
        components: {},
        isLocal: isLocal
    }
}(window, document);

var components = App.components,
    createElement = App.createElement,
    createSvg = App.createSvg,
    customElement = App.customElement;

export default App;
export {components, createElement, createSvg, customElement};