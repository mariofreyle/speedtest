/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _MainHeader = __webpack_require__(3);

var _MainHeader2 = _interopRequireDefault(_MainHeader);

var _MainContent = __webpack_require__(4);

var _MainContent2 = _interopRequireDefault(_MainContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (w, d, app) {

    // ========= Page output ===========
    var content = app.createElement("div", {}, [app.createElement(_MainHeader2.default), app.createElement(_MainContent2.default)]);
    app.rootNode.render(content);
})(window, document, _App2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

window.customProps = function (elem) {
    return new customProps.init(elem);
};
customProps.init = function (elem) {
    var len = elem.length;
    if (void 0 === len) {
        this[0] = elem;
        this.length = 1;
        return this;
    }
    for (var key = 0; key < len; key++) {
        this[key] = elem[key];
    }
    this.length = len;
    return this;
};
customProps.init.prototype = customProps.prototype = {
    each: function each(arr, callback) {
        var len = arr.length;
        if (len == 1) {
            return callback(arr[0]);
        }
        for (var key = 0; key < len; key++) {
            callback(arr[key]);
        }
    },
    remove: function remove() {
        this.each(this, function (elem) {
            elem.parentNode.removeChild(elem);
        });
    },
    addClass: function addClass(value) {
        this.each(this, function (elem) {
            elem.classList.add(value);
        });
    },
    removeClass: function removeClass(value) {
        this.each(this, function (elem) {
            elem.classList.remove(value);
        });
    },
    toggleClass: function toggleClass(value) {
        this.each(this, function (elem) {
            elem.classList.toggle(value);
        });
    },
    append: function append(_append) {
        this.each(this, function (elem) {
            elem.appendChild(_append);
        });
    },
    replaceWith: function replaceWith(replace) {
        this.each(this, function (elem) {
            elem.parentNode.replaceChild(elem, replace);
        });
    },
    textContent: function textContent(value) {
        this.each(this, function (elem) {
            elem.textContent = value;
        });
    },
    setAttrNS: function setAttrNS(ns, attr, attrValue) {
        this.each(this, function (elem) {
            elem.setAttributeNS(ns, attr, attrValue);
        });
    },
    className: function className(value) {
        this.each(this, function (elem) {
            elem.className = value;
        });
    },
    style: function style(props) {
        this.each(this, function (elem) {
            for (var i in props) {
                elem.style[i] = props[i];
            }
        });
    },
    first: function first(props) {
        return this[0].firstChild;
    },
    find: function find(className) {
        var elem = this[0],
            elements = elem.getElementsByClassName(className);
        return customProps(elements);
    },
    render: function render(_render) {
        var elem = this[0],
            firstChild = elem.firstChild;
        return firstChild ? elem.replaceChild(_render, firstChild) : elem.appendChild(_render);
    }
};

window.App = function (w, d) {
    var app = this;
    function appendNode(node, el) {
        el.appendChild((typeof node === "undefined" ? "undefined" : _typeof(node)) == "object" ? node : d.createTextNode(node));
    }
    return {
        ajax: function ajax(a) {
            function uriParams(data) {
                var url = "";
                for (var prop in data) {
                    url += prop + "=" + w.encodeURIComponent(data[prop]) + "&";
                }return url.substring(0, url.length - 1);
            }
            var isFormData = _typeof(a.data) == "object" && a.data.constructor.name == "FormData",
                sendData = a.data ? !isFormData ? uriParams(a.data) : a.data : "",
                type = a.type || "GET",
                url = a.url || "",
                x = a.xhr,
                dataType = a.dataType || "",
                contentType = a.contentType ? a.contentType : null,
                headers = a.headers ? a.headers : {},
                xhr = new XMLHttpRequest();

            typeof x == "function" && x(xhr);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var response = xhr.responseText;
                        if (dataType == "json" && response != "") {
                            try {
                                response = JSON.parse(response);
                            } catch (cte) {
                                a.error && a.error();
                                return;
                            }
                        }
                        a.success && a.success(response);
                    }
                }
            };
            xhr.onerror = function () {
                console.log("Request Fail.");
                a.fail && a.fail();
            };
            xhr.open(type, url, true);
            !isFormData && !contentType && xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            contentType && xhr.setRequestHeader("Content-type", contentType);
            for (var prop in headers) {
                xhr.setRequestHeader(prop, headers[prop]);
            }
            xhr.send(sendData);
            return xhr;
        },
        createElement: function createElement(name, options, childs) {
            options = options ? options : {};
            if (typeof name == "function") {
                var render,
                    componentName = name.name;
                name = new name(options);
                App.components[componentName] = name;
                render = name.render();
                name.componentDidMount && name.componentDidMount();
                return render;
            }
            var elem = typeof name == "string" ? d.createElement(name) : name[0];
            for (var prop in options) {
                if (prop in elem) {
                    elem[prop] = options[prop];
                } else {
                    elem.setAttribute(prop, options[prop]);
                }
            }
            childs && (childs.constructor.name == "Array" ? childs.forEach(function (item) {
                item && appendNode(item, elem);
            }) : appendNode(childs, elem));
            return elem;
        },
        customElement: function customElement(elem) {
            return customProps(App.createElement(elem));
        },
        createSvg: function createSvg(a) {
            var props,
                svg = App.svgIcons[a],
                xmlns = "http://www.w3.org/2000/svg",
                svgElem = d.createElementNS(xmlns, "svg");
            props = svg.props;
            function appendNodeNS(node, childs) {
                childs.forEach(function (item) {
                    var itemNode = document.createElementNS(xmlns, item.tag),
                        props = item.props;
                    if (props) {
                        for (var g in props) {
                            itemNode.setAttributeNS(null, g, props[g]);
                        }
                    }
                    if (item.childs) appendNodeNS(itemNode, item.childs);
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
                props: { className: "iconLogo", viewBox: "0 0 512 512" },
                childs: [{
                    tag: "path",
                    props: { d: "M357.423,209.039c-9.093-9.093-23.832-9.093-32.925,0l-66.389,66.386c-3.286-0.779-6.708-1.203-10.23-1.203 c-24.435,0-44.316,19.897-44.316,44.358c0,24.457,19.88,44.357,44.316,44.357c24.46,0,44.357-19.9,44.357-44.357 c0-3.523-0.424-6.945-1.203-10.231l66.389-66.386C366.515,232.871,366.515,218.13,357.423,209.039z" }
                }, { tag: "path",
                    props: { d: "M437.083,120.099c-99.837-99.837-262.318-99.837-362.206,0.003c-86.213,86.257-99.573,222.315-31.769,323.513    c7.156,10.683,21.618,13.535,32.3,6.38c10.681-7.156,13.538-21.617,6.38-32.3c-19.051-28.437-30.268-60.238-33.925-92.598h21.887    c12.857,0,23.281-10.422,23.281-23.281c0-12.856-10.424-23.281-23.281-23.281H47.789C52.008,239.863,66.9,202.32,92,170.742    l15.842,15.842c4.546,4.547,10.504,6.821,16.461,6.821c5.958,0,11.917-2.274,16.461-6.821c9.092-9.09,9.092-23.832,0-32.924    l-15.909-15.91c32.054-25.745,69.977-40.674,108.842-44.8v21.986c0,12.859,10.424,23.281,23.281,23.281    c12.857,0,23.281-10.422,23.281-23.281V93.163c38.183,4.411,75.369,19.28,106.875,44.596l-15.902,15.902    c-9.09,9.093-9.09,23.832,0.003,32.927c4.544,4.544,10.504,6.818,16.459,6.818c5.96,0,11.917-2.274,16.463-6.821l15.826-15.826    c25.109,31.572,40.004,69.111,44.224,107.779h-21.961c-12.856,0-23.281,10.425-23.281,23.281    c0,12.859,10.425,23.281,23.281,23.281h21.889c-3.658,32.36-14.878,64.159-33.935,92.595c-7.16,10.68-4.304,25.142,6.374,32.3    c3.981,2.668,8.485,3.947,12.941,3.947c7.503,0,14.869-3.622,19.362-10.321C536.709,342.411,523.338,206.353,437.083,120.099z" }
                }]
            },
            $2: {
                tag: "svg",
                props: { className: "iconUser", viewBox: "0 0 512 512" },
                childs: [{
                    tag: "path",
                    props: { d: "M256 0c88.366 0 160 71.634 160 160s-71.634 160-160 160S96 248.366 96 160 167.634 0 256 0zm183.283 333.821l-71.313-17.828c-74.923 53.89-165.738 41.864-223.94 0l-71.313 17.828C29.981 344.505 0 382.903 0 426.955V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-37.045c0-44.052-29.981-82.45-72.717-93.134z" }
                }]
            },
            $3: {
                tag: "svg",
                props: { className: "needleGradient", viewBox: "0 0 120 801" },
                childs: [{
                    tag: "defs",
                    childs: [{ tag: "linearGradient", props: { id: "needleGradient", x1: "0", x2: "0", y1: "0", y2: "1" }, childs: [{ tag: "stop", props: { class: "stop--1", "stop-opacity": "0", "stop-color": "transparent", offset: "40%" } }, { tag: "stop", props: { class: "stop--1", "stop-opacity": "0.95", "stop-color": "currentColor", offset: "100%" } }] }]
                }, { tag: "path", props: { d: "M95 800.5l-34.25-.958H26.5L0 .5h120l-25 800z", fill: "url(#needleGradient)" } }]
            },
            $4: {
                tag: "svg",
                props: { className: "gaugeVector", viewBox: "0 0 100 100" },
                childs: [{ tag: "circle", props: { class: "gaugeCircle gaugeCircleBackground strokeBackground", r: "46", cx: "50%", cy: "50%" } }, { tag: "circle", props: { class: "gaugeCircle gaugeCircleCurrentSpeed strokePrimary", r: "46", cx: "50%", cy: "50%", "stroke-dasharray": "404" } }, { tag: "circle", props: { class: "gaugeCircle gaugeCircleLoading strokeBackground hidden", r: "46", cx: "50%", cy: "50%" } }]
            },
            $5: {
                tag: "svg",
                props: { className: "iconDownlink", viewBox: "0 0 16 16" },
                childs: [{
                    tag: "path",
                    props: { d: "M8 0a8 8 0 100 16A8 8 0 008 0zM1.333 8a6.667 6.667 0 1113.334 0A6.667 6.667 0 011.333 8zm10-.667a.675.675 0 00-.473.194l-2.2 2.2v-5.06a.666.666 0 10-1.333 0v5.06L5.16 7.533a.668.668 0 00-1.12.3.67.67 0 00.173.647l3.334 3.333a.663.663 0 00.946.001l3.334-3.333a.667.667 0 00-.481-1.148h-.014z" }
                }]
            },
            $6: {
                tag: "svg",
                props: { className: "iconUplink", viewBox: "0 0 16 16" },
                childs: [{
                    tag: "path",
                    props: { d: "M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.667a6.667 6.667 0 11.013 0H8zm.493-10.48a.663.663 0 00-.946-.001L4.213 7.52a.672.672 0 000 .947c.262.26.686.26.947 0l2.2-2.2v5.066a.666.666 0 101.333 0v-5.06l2.2 2.2a.668.668 0 00.935-.946l-3.335-3.34z" }
                }]
            },
            gaugeRanure: {
                tag: "svg",
                props: { className: "iconRanure", viewBox: "100 100 100 100" },
                childs: [{
                    tag: "polygon",
                    props: { points: "0,100 22,79 78,79 100,100" }
                }]
            },
            iClose: {
                tag: "svg",
                props: { className: "iconIClose", viewBox: "0 0 213 213" },
                childs: [{
                    tag: "path",
                    props: { d: "M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0l-75.937 75.937L30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936L5.242 182.427c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312L131.804 106.491z" }
                }]
            }
        },
        rootNode: customProps(d.getElementById("app")),
        query: function query(a, b) {
            return b ? b.querySelectorAll(a) : d.querySelectorAll(a);
        },
        queryOne: function queryOne(a, b) {
            return b ? b.querySelector(a) : d.querySelector(a);
        },
        setTimeout: function (_setTimeout) {
            function setTimeout(_x, _x2, _x3) {
                return _setTimeout.apply(this, arguments);
            }

            setTimeout.toString = function () {
                return _setTimeout.toString();
            };

            return setTimeout;
        }(function (id, callback, wait) {
            app.timeouts[id] = setTimeout(function () {
                callback();
            }, wait);
        }),
        clearTimeout: function (_clearTimeout) {
            function clearTimeout(_x4) {
                return _clearTimeout.apply(this, arguments);
            }

            clearTimeout.toString = function () {
                return _clearTimeout.toString();
            };

            return clearTimeout;
        }(function (timeouts) {
            timeouts = typeof timeouts == "string" ? [timeouts] : timeouts;
            timeouts.forEach(function (item) {
                var timeout = app.timeouts[item];
                if (!timeout) {
                    return;
                }
                clearTimeout(timeout);
            });
        }),
        timeouts: {},
        URL_BASE: isLocal ? "http://localhost:8080" : "https://mariofreyle.github.io/speedtest",
        components: {},
        isLocal: isLocal
    };
}(window, document);

var components = App.components,
    createElement = App.createElement,
    createSvg = App.createSvg,
    customElement = App.customElement;

exports.default = App;
exports.components = components;
exports.createElement = createElement;
exports.createSvg = createSvg;
exports.customElement = customElement;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Utils = function (w) {
    return {
        getTime: function getTime() {
            return new Date().getTime();
        },
        random: function random(a) {
            return Math.floor(Math.random() * (a * 1000));
        },
        ucWords: function ucWords(string) {
            if (!string) return;
            function ucFirst(str) {
                return str.substr(0, 1).toUpperCase() + str.substr(1, str.length).toLowerCase();
            }
            var arrayWords = string.split(" "),
                returnString = "",
                len;
            len = arrayWords.length;
            for (var i = 0; i < len; i++) {
                returnString = i != len - 1 ? returnString + ucFirst(arrayWords[i]) + " " : returnString + ucFirst(arrayWords[i]);
            }
            return returnString;
        }
    };
}(window);

exports.default = Utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainHeader() {
    this.render = function () {
        return (0, _App.createElement)("header", { className: "mainHeader" }, (0, _App.createElement)("div", { className: "container" }, (0, _App.createElement)("div", { className: "logoWrapper" }, [(0, _App.createElement)("span", { className: "logoIcon" }, (0, _App.createSvg)("$1")), (0, _App.createElement)("span", { className: "logoText", textContent: "SPEEDTEST" })])));
    };
}

exports.default = MainHeader;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _TestConfig = __webpack_require__(5);

var _TestConfig2 = _interopRequireDefault(_TestConfig);

var _TestStage = __webpack_require__(6);

var _TestStage2 = _interopRequireDefault(_TestStage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainContent() {
    var $this = this,
        testWrapper = (0, _App.customElement)("div"),
        ispNameElem = (0, _App.customElement)("span"),
        localIpElem = (0, _App.customElement)("span");

    this.componentDidMount = function () {
        _App2.default.ajax({
            url: _App2.default.isLocal ? "http://ip-api.com/json/" : "https://ipapi.co/json/",
            dataType: "json",
            success: function success(data) {
                ispNameElem.textContent(_Utils2.default.ucWords(_App2.default.isLocal ? data.isp : data.org)), localIpElem.textContent(_App2.default.isLocal ? data.query : data.ip);
            }
        });
    }, this.open = function () {
        testWrapper.addClass("testOpen");
    }, this.updateStatus = function (config) {
        _TestConfig2.default.started = void 0 === config.started ? _TestConfig2.default.started : config.started;
        _TestConfig2.default.runType = void 0 === config.runType ? _TestConfig2.default.runType : config.runType;
        _TestConfig2.default.onprogress = void 0 === config.onprogress ? _TestConfig2.default.onprogress : config.onprogress;

        var runType = (_TestConfig2.default.runType ? "test--download" : "test--upload") + (_TestConfig2.default.onprogress ? " onprogress" : "");

        testWrapper.className("testWrapper" + (void 0 === config.clearClass ? " testOpen " : "") + " " + (_TestConfig2.default.started ? runType : "test--finished"));
    }, this.renderStage = function () {
        testWrapper.render((0, _App.createElement)(_TestStage2.default));
    }, this.render = function () {
        return (0, _App.createElement)("div", { className: "pageContent" }, (0, _App.createElement)("div", { className: "container" }, [(0, _App.createElement)(testWrapper, { className: "testWrapper" }, (0, _App.createElement)(_TestStage2.default)), (0, _App.createElement)("div", { className: "log", textContent: "0.00" }), (0, _App.createElement)("footer", { className: "footer" }, (0, _App.createElement)("div", { className: "hostIsp" }, (0, _App.createElement)("div", { className: "hostDetails" }, [(0, _App.createElement)("div", { className: "icon" }, (0, _App.createSvg)("$2")), (0, _App.createElement)("div", { className: "hostIp" }, [(0, _App.createElement)("div", { className: "ispName" }, (0, _App.createElement)(ispNameElem, { textContent: "- -" })), (0, _App.createElement)("div", { className: "localIp textHolder" }, (0, _App.createElement)(localIpElem, { textContent: "- -" }))])])))]));
    };
};

exports.default = MainContent;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var test = {
    started: false, // false = stop - finished, true = started
    runType: true, // true = download, false = upload
    onprogress: false, // true = progress, false = waiting
    increments: [0, 2, 4, 6, 8, 10, 12, 14, 16],
    rateProgress: 0,
    uploadFileDup: 24,
    runningTime: _App2.default.isLocal ? 1000 * 4 : 16000,
    hearbeatTime: 50,
    xhrConnections: 3,
    xhrData: [],
    downloadURL: _App2.default.URL_BASE + "/download/download.file",
    uploadURL: _App2.default.URL_BASE + "/upload/upload.file",
    gaugeCircleStrokeMin: 404,
    gaugeCircleStrokeMax: 617.5,
    gaugeNeedleRotateMin: 46, // In deg
    gaugeNeedleRotateMax: 315 // In deg
};
test.incrementsLast = test.increments[test.increments.length - 1], test.gaugeCircleOffsetRef = test.gaugeCircleStrokeMax - test.gaugeCircleStrokeMin, test.gaugeNeedleRotateRef = test.gaugeNeedleRotateMax - test.gaugeNeedleRotateMin; // In deg
test.tempFile = function (size) {
    var str = "1";
    for (var dup = 0; dup < size; dup++) {
        str += str;
    }
    var blob = new Blob([str], { type: "plain/text" });
    return blob;
}(test.uploadFileDup);

exports.default = test;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _StartButton = __webpack_require__(7);

var _StartButton2 = _interopRequireDefault(_StartButton);

var _GaugeContainer = __webpack_require__(8);

var _GaugeContainer2 = _interopRequireDefault(_GaugeContainer);

var _TestConfig = __webpack_require__(5);

var _TestConfig2 = _interopRequireDefault(_TestConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TestStage() {
    var interval,
        $this = this,
        testStage = (0, _App.customElement)("div"),
        stageMain = (0, _App.customElement)("main"),
        resultsContainer = (0, _App.customElement)("div"),
        resultDownload = (0, _App.customElement)("div"),
        speedDownloadNumber = (0, _App.customElement)("div"),
        resultUpload = (0, _App.customElement)("div"),
        speedUploadNumber = (0, _App.customElement)("div");

    function fileData() {
        var data = new FormData();

        data.append("file-" + _Utils2.default.random(13), _TestConfig2.default.tempFile);

        return data;
    }
    function speedRateMbps(rate) {
        return (rate / 125000).toFixed(2); // convert bytes per second to megabits per second
    }
    function maxIncrementRate(rate) {
        return rate >= _TestConfig2.default.incrementsLast ? _TestConfig2.default.incrementsLast : rate;
    }
    function abortXhr() {
        _TestConfig2.default.xhrData.forEach(function (item) {
            item.abort && item.abort();
        });
    }
    function clearOnprogress() {
        _TestConfig2.default.xhrData.forEach(function (item) {
            item.upload.onprogress = null;
            item.onprogress = null;
        });
    }
    function getLoadedBytes() {
        var count = 0;
        _TestConfig2.default.xhrData.forEach(function (item) {
            count += item.loadedBytes;
        });
        return count;
    }
    function stopTest() {
        clearInterval(_TestConfig2.default.interval);
        abortXhr();
    }
    function closeGauge() {
        _App.components.MainContent.updateStatus({ started: false });
        stageMain.append((0, _App.createElement)(_StartButton2.default, { textContent: "DE NUEVO", action: 2, tryAgainAnim: true }));
        _App.components.GaugeContainer.remove();
    }
    function intervalHearbeat(xhr) {
        xhr.loadedBytes = 0;
        var config = _TestConfig2.default.runType ? xhr : xhr.upload;
        config.onprogress = function () {
            _App.components.MainContent.updateStatus({ onprogress: true });
            clearOnprogress();
            /*
            test.prevloadedBytes = 0;
            test.lastLoadTime = 0;
            test.speedRateresultsArr = [];
            test.speedRateresults = 0;
            */
            var initLoadTime = _Utils2.default.getTime(),
                speedNumberElem = _TestConfig2.default.runType ? speedDownloadNumber : speedUploadNumber,
                progressBarElem = (_TestConfig2.default.runType ? resultDownload : resultUpload).find("progressBar");
            _TestConfig2.default.interval = setInterval(function () {
                var timeNow = _Utils2.default.getTime(),
                    testTime = (timeNow - initLoadTime) / 1000,
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

                _TestConfig2.default.increments.forEach(function (item, index) {
                    if (speedRate >= item) {
                        activeIncrementsClasses += " incrementOn--" + index;
                    }
                });

                gaugePercent = maxIncrementRate(speedRate) / _TestConfig2.default.incrementsLast * 100; // Calculate Percent
                gaugeCircleOffset = _TestConfig2.default.gaugeCircleOffsetRef * gaugePercent / 100 + _TestConfig2.default.gaugeCircleStrokeMin;

                gaugeNeedleRotate = _TestConfig2.default.gaugeNeedleRotateRef * gaugePercent / 100 + _TestConfig2.default.gaugeNeedleRotateMin;

                speedNumberElem.textContent(speedRate);
                progressBarElem.style({ width: (timeNow - initLoadTime) / (_TestConfig2.default.runningTime - _TestConfig2.default.hearbeatTime) * 100 + "%" });
                _App.components.GaugeContainer.update(speedRate, gaugeCircleOffset, gaugeNeedleRotate, activeIncrementsClasses);
            }, _TestConfig2.default.hearbeatTime);
            _TestConfig2.default.runType && _App.components.GaugeContainer.toggleDetails();
            setTimeout(function () {
                stopTest();
                setTimeout(function () {
                    _App.components.MainContent.updateStatus({ onprogress: false });
                    _App.components.GaugeContainer.clear(function () {
                        if (_TestConfig2.default.runType) {
                            $this.run(false);
                        } else {
                            closeGauge();
                        }
                    });
                }, 1300);
            }, _TestConfig2.default.runningTime);
        };
        config.addEventListener("progress", function (e) {
            xhr.loadedBytes = e.loaded;
        });
    }
    function testLoadError() {
        var id = setTimeout(function () {}, 0);
        while (id--) {
            clearTimeout(id);
        }
        stopTest();
        setTimeout(function () {
            _App.components.MainContent.updateStatus({ onprogress: false });
            _App.components.GaugeContainer.clear(function () {
                if (_TestConfig2.default.runType) {
                    $this.run(false);
                } else {
                    closeGauge();
                }
            });
        }, 1300);
    }
    function testTransferComplete() {}
    this.run = function (runType) {
        _App.components.MainContent.updateStatus({ started: true, runType: runType });
        //return;
        var xhr,
            v = _Utils2.default.random(6) + "" + _Utils2.default.getTime(),
            data = _TestConfig2.default.runType ? "" : fileData();

        _TestConfig2.default.xhrData = [];

        for (var i = 0; i < _TestConfig2.default.xhrConnections; i++) {
            v = _Utils2.default.random(6) + "" + _Utils2.default.getTime();
            xhr = _App2.default.ajax({
                xhr: intervalHearbeat,
                url: (_TestConfig2.default.runType ? _TestConfig2.default.downloadURL : _TestConfig2.default.uploadURL) + "?v=" + v,
                type: _TestConfig2.default.runType ? "GET" : "POST",
                data: data,
                fail: testLoadError,
                success: testTransferComplete
            });
            _TestConfig2.default.xhrData.push(xhr);
        }
    }, this.stageClose = function (e) {
        e.preventDefault();
        stopTest();

        var id = setTimeout(function () {}, 0);
        while (id--) {
            clearTimeout(id);
        }

        testStage.style({ opacity: 0 });
        setTimeout(function () {
            _App.components.MainContent.updateStatus({ started: false, runType: true, onprogress: false, clearClass: true });
            _App.components.MainContent.renderStage();
        }, 300);
    }, this.clearResults = function () {
        resultsContainer.find("resultValue").textContent("- -");
        resultsContainer.find("progressBar").style({ width: 0 });
    }, this.showGauge = function () {
        stageMain.append((0, _App.createElement)(_GaugeContainer2.default));
    }, this.render = function () {
        return (0, _App.createElement)(testStage, { className: "testStage" }, [(0, _App.createElement)("section", { className: "resultsArea" }, (0, _App.createElement)(resultsContainer, { className: "resultsContainer" }, [(0, _App.createElement)("button", { className: "stageClose", title: "Cerrar Prueba", "aria-label": "Cerrar Prueba", onclick: $this.stageClose }, (0, _App.createSvg)("iClose")), (0, _App.createElement)(resultDownload, { className: "resultItem resultDownload" }, (0, _App.createElement)("div", { className: "resultContainer" }, [(0, _App.createElement)("div", { className: "resultHeader" }, (0, _App.createElement)("div", { className: "resultHeaderWrapper" }, [(0, _App.createElement)("div", { className: "resultIcon" }, (0, _App.createSvg)("$5")), (0, _App.createElement)("div", { className: "resultTitle" }, (0, _App.createElement)("b", { textContent: "DESCARGAR" })), (0, _App.createElement)("div", { className: "resultUnit textHolder" }, (0, _App.createElement)("span", { textContent: "Mbps" }))])), (0, _App.createElement)("div", { className: "resultBody" }, [(0, _App.createElement)(speedDownloadNumber, { className: "resultValue speedDownloadNumber" }, (0, _App.createElement)("span", { textContent: "- -" }))]), (0, _App.createElement)("div", { className: "progressBarWrapper" }, (0, _App.createElement)("div", { className: "progressBar" }))])), (0, _App.createElement)(resultUpload, { className: "resultItem resultUpload" }, (0, _App.createElement)("div", { className: "resultContainer" }, [(0, _App.createElement)("div", { className: "resultHeader" }, (0, _App.createElement)("div", { className: "resultHeaderWrapper" }, [(0, _App.createElement)("div", { className: "resultIcon" }, (0, _App.createSvg)("$6")), (0, _App.createElement)("div", { className: "resultTitle" }, (0, _App.createElement)("b", { textContent: "SUBIR" })), (0, _App.createElement)("div", { className: "resultUnit textHolder" }, (0, _App.createElement)("span", { textContent: "Mbps" }))])), (0, _App.createElement)("div", { className: "resultBody" }, [(0, _App.createElement)(speedUploadNumber, { className: "resultValue speedUploadNumber" }, (0, _App.createElement)("span", { textContent: "- -" }))]), (0, _App.createElement)("div", { className: "progressBarWrapper" }, (0, _App.createElement)("div", { className: "progressBar" }))]))])), (0, _App.createElement)(stageMain, { className: "stageMain" }, (0, _App.createElement)(_StartButton2.default, { textContent: "COMENZAR", action: 1 }))]);
    };
};

exports.default = TestStage;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StartButton(props) {
    var $this = this,
        startWrapper = (0, _App.customElement)("div");

    this.handleClick = function () {
        startWrapper.addClass("anim");

        _App.components.MainContent.open();
        _App.components.TestStage.clearResults();
        setTimeout(function () {
            _App.components.TestStage.showGauge();
        }, 600);
        setTimeout(function () {
            startWrapper.remove();
            _App.components.TestStage.run(true);
        }, 2300);
    }, this.componentDidMount = function () {
        setTimeout(function () {
            startWrapper.removeClass("tryAgainAnim");
        }, 1100);
    }, this.render = function () {
        return (0, _App.createElement)(startWrapper, { className: "startWrapper" + (props.action == 1 ? "" : " tryAgain") + (props.tryAgainAnim ? " tryAgainAnim" : "") }, (0, _App.createElement)("button", { className: "startButton", role: "button", onclick: this.handleClick }, [(0, _App.createElement)("div", { className: "buttonText", textContent: props.textContent }), (0, _App.createElement)("div", { className: "buttonBackground" }), (0, _App.createElement)("div", { className: "buttonBorder" }), props.action == 1 ? (0, _App.createElement)("div", { className: "buttonAnimatedBorder" }) : null]));
    };
}

exports.default = StartButton;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

var _TestConfig = __webpack_require__(5);

var _TestConfig2 = _interopRequireDefault(_TestConfig);

var _StartButton = __webpack_require__(7);

var _StartButton2 = _interopRequireDefault(_StartButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GaugeContainer() {
    var $this = this,
        gaugeContainer = (0, _App.customElement)("div"),
        gaugeState = (0, _App.customElement)("div"),
        speedDetailsNumber = (0, _App.customElement)("div"),
        incrementsContainer = (0, _App.customElement)("div"),
        gaugeNeedle = (0, _App.customElement)("div"),
        gaugeIcon = (0, _App.customElement)("div");

    this.increments = function () {
        var items = [];
        _TestConfig2.default.increments.forEach(function (num, i) {
            items.push((0, _App.createElement)("div", { className: "increment increment--" + i }, (0, _App.createElement)("b", { textContent: num })));
        });
        return items;
    }, this.toggleDetails = function () {
        gaugeState.find("state").toggleClass("unseen");
    }, this.clear = function (callback) {
        this.update("0.00", _TestConfig2.default.gaugeCircleStrokeMin, _TestConfig2.default.gaugeNeedleRotateMin, "");
        setTimeout(function () {
            callback();
        }, 500);
    }, this.remove = function () {
        setTimeout(function () {
            gaugeContainer.remove();
        }, 410);
    }, this.update = function (speedRate, gaugeCircleOffset, gaugeNeedleRotate, activeIncrementsClasses) {
        speedDetailsNumber.textContent(speedRate);
        gaugeIcon.find("gaugeCircleCurrentSpeed").setAttrNS(null, "stroke-dasharray", gaugeCircleOffset);
        gaugeNeedle.style({ transform: "rotateZ(" + gaugeNeedleRotate + "deg)" });
        incrementsContainer.className("incrementsContainer" + activeIncrementsClasses);
    }, this.render = function () {
        return (0, _App.createElement)(gaugeContainer, { className: "gaugeContainer" }, [(0, _App.createElement)(gaugeState, { className: "gaugeState" }, [(0, _App.createElement)("div", { className: "speedDetailsContainer state unseen" }, [(0, _App.createElement)(speedDetailsNumber, { className: "speedDetailsNumber" }, (0, _App.createElement)("span", { textContent: "0.00" })), (0, _App.createElement)("div", { className: "" }, [(0, _App.createElement)("span", { className: "speedDetailsIcon" }, (0, _App.createSvg)("$6")), (0, _App.createElement)("span", { className: "speedDetailsUnit textHolder", textContent: "Mbps" })])]), (0, _App.createElement)("div", { className: "connectingServer state textHolder" }, (0, _App.createElement)("b", { textContent: "Conectando..." }))]), (0, _App.createElement)(incrementsContainer, { className: "incrementsContainer" }, this.increments()), (0, _App.createElement)(gaugeNeedle, { className: "gaugeNeedle" }, (0, _App.createSvg)("$3")), (0, _App.createElement)(gaugeIcon, { className: "gaugeAnim gaugeIcon" }, (0, _App.createSvg)("$4"))]);
    };
};

exports.default = GaugeContainer;

/***/ })
/******/ ]);