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

var _MainHeader = __webpack_require__(2);

var _MainHeader2 = _interopRequireDefault(_MainHeader);

var _MainContent = __webpack_require__(3);

var _MainContent2 = _interopRequireDefault(_MainContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (w, d, app) {

    app.n.addClass(app.isMobile ? "mobile" : "desktop", d.documentElement);

    // ========= Page output ===========
    var content = app.createElement("div", {}, app.createElement(_MainHeader2.default), app.createElement(_MainContent2.default));
    app.rootRender(content);
})(window, document, _App2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

window.app = function (window, document) {
    // Initialize Variables
    var initialId = Math.floor(Math.random() * 1000),
        app,
        _element = {},
        elementPrefix = "__App_",
        elementProps = { events: "", methods: "", onMount: "", onDismount: "" },
        nodePrototype = { className: "", id: "", textContent: "", value: "", onclick: "", onmousemove: "", onmouseover: "", onmouseout: "", onkeyup: "", onkeydown: "", onchange: "", onsubmit: "", action: "", ariaLabel: "" },
        nsTags = { svg: "", path: "", circle: "", polyline: "", polygon: "", linearGradient: "", defs: "", stop: "", g: "" };

    // Useful Functions
    function guid() {
        initialId += 1;
        return initialId;
    }
    function scapeRegExp(a) {
        return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function encodeUrlParams(params) {
        var data = "",
            prop;
        for (prop in params) {
            data += prop + "=" + encodeURIComponent(params[prop]) + "&";
        }
        return data.substring(0, data.length - 1);
    }
    function isArray(elem) {
        return elem && elem.constructor && elem.constructor.name == "Array";
    }
    function convertToArray(elem) {
        return "length" in elem ? elem : [elem];
    }
    function parseNumber(props, parseFn) {
        props.value = parseFn(props.value);
        props.value = props.value < props.min ? props.min : props.value;
        props.value = props.value > props.max ? props.max : props.value;
        props.value = typeof props.default == "number" && isNaN(props.value) ? props.default : props.value;
        return props.value;
    }

    _element.listenEvents = function (elem) {
        var events = elem[elementPrefix + "events"],
            elementId = elem[elementPrefix + "ID"],
            callback,
            eventName;

        for (eventName in events) {
            callback = events[eventName];

            if (app.events[eventName] === void 0) app.events[eventName] = {};

            app.events[eventName]["_" + elementId] = {
                componentId: elementId,
                callback: callback
            };
        }
    };
    _element.removeEvents = function (elem) {
        var events = elem[elementPrefix + "events"],
            elemId = elem[elementPrefix + "ID"],
            eventName;

        for (eventName in events) {
            if (app.events[eventName] && app.events[eventName]["_" + elemId]) {
                delete app.events[eventName]["_" + elemId];
            }
        }
    };
    _element.mountAll = function (elements) {
        function search(childs) {
            var len = childs.length,
                item,
                index;

            for (index = 0; index < len; index++) {
                item = childs[index];
                // si el elemento tiene el methodo onMount entonces este se ejecutará (montar componente)
                if (item[elementPrefix + "onMount"]) item[elementPrefix + "onMount"]();
                // si el elemento tiene eventos estos se agregaran a la lista de eventos
                if (item[elementPrefix + "events"]) _element.listenEvents(item);

                if (item.children.length) search(item.children);
            }
        }
        search(convertToArray(elements));
    };
    _element.dismountAll = function (elements) {
        function search(childs) {
            var len = childs.length,
                item,
                index;

            for (index = 0; index < len; index++) {
                item = childs[index];
                // si el elemento tiene el methodo componentWillUnmount entonces este se ejecutará (desmontar componente)
                if (item[elementPrefix + "onDismount"]) item[elementPrefix + "onDismount"]();
                // si el elemento tiene eventos estos se eliminaran y dejaran de escuchar
                if (item[elementPrefix + "events"]) _element.removeEvents(item);

                if (item.children.length) search(item.children);
            }
        }
        search(convertToArray(elements));
    };
    _element.init = function (elem) {
        this.node = elem;

        return this;
    };
    // SET ELEMENT PROPERTYS
    _element.init.prototype = {
        each: function each(arr, callback, len, key) {
            len = arr.length;
            for (key = 0; key < len; key++) {
                callback(arr[key]);
            }
        },
        remove: function remove() {
            _element.dismountAll(this.node);

            this.node.parentNode.removeChild(this.node);
        },
        addClass: function addClass(value) {
            if (this.node.classList.contains(value)) return;

            this.node.classList.add(value);

            return this;
        },
        removeClass: function removeClass() {
            var index,
                len = arguments.length;

            for (index = 0; index < len; index++) {
                this.node.classList.remove(arguments[index]);
            }

            return this;
        },
        toggleClass: function toggleClass(value) {
            return this.node.classList.toggle(value);
        },
        hasClass: function hasClass(value) {
            return this.node.classList.contains(value);
        },
        replaceClass: function replaceClass(oldClass, newClass) {
            return this.removeClass(oldClass), this.addClass(newClass);
        },
        value: function value(_value) {
            return void 0 === _value ? this.node.value : this.node.value = _value;
        },
        last: function last(before) {
            var childs = this.nodes.childNodes,
                len = childs.length + (void 0 === before || before >= 0 ? 0 : before);
            return len > 0 ? new _element.init(childs[len - 1]) : null;
        },
        checked: function checked(a) {
            if (a !== void 0) this.node.checked = a;

            return this.node.checked;
        },
        selected: function selected(a) {
            if (a !== void 0) this.node.selected = a;

            return this.node.selected;
        },
        textContent: function textContent(value) {
            this.node.textContent = value;
        },
        attr: function attr(_attr, value) {
            return value === void 0 ? this.node.getAttribute(_attr) : this.node.setAttribute(_attr, value);
        },
        setAttr: function setAttr(name, value) {
            this.node.setAttribute(name, value);
        },
        removeAttr: function removeAttr(name) {
            this.node.removeAttribute(name);
            return this;
        },
        setAttrNS: function setAttrNS(ns, name, value) {
            this.node.setAttributeNS(ns, name, value);
        },
        className: function className(value) {
            if (value === void 0) {
                return this.node.className;
            }
            this.node.className = value;
            return this;
        },
        style: function style(props) {
            var elem = this.node;

            if (typeof props == "string") {
                return elem.style[props];
            }

            for (var i in props) {
                elem.style[i] = props[i];
            }
        },
        childs: function childs() {
            return this.node.childNodes;
        },
        child: function child(a) {
            return new _element.init(this.node.childNodes[a]);
        },
        firstChild: function firstChild(props) {
            return new _element.init(this.node.firstChild);
        },
        find: function find(className) {
            var elem = this.node,
                find = elem.getElementsByClassName(className)[0];

            return new _element.init(find);
        },
        parent: function parent() {
            return new _element.init(this.node.parentNode);
        },
        prepend: function prepend(elem) {
            if (this.node.firstChild) {
                this.node.insertBefore(elem, this.node.firstChild);
            } else {
                this.node.appendChild(elem);
            }

            _element.mountAll(elem);

            return this;
        },
        append: function append(elem) {
            this.node.appendChild(elem);

            _element.mountAll(elem);

            return this;
        },
        render: function render(_render) {
            if (!_render) return;

            var elem = this.node;

            _element.dismountAll(elem.children);

            while (elem.firstChild) {
                elem.removeChild(elem.firstChild);
            }

            elem.appendChild(_render);

            _element.mountAll(_render);
        },
        empty: function empty(elem) {
            elem = this.node;

            _element.dismountAll(elem.children);

            while (elem.firstChild) {
                elem.removeChild(elem.firstChild);
            }

            return this;
        },
        replaceWith: function replaceWith(replace) {
            if (!replace) return;

            var node = this.node;

            _element.dismountAll(node);

            node.parentNode.replaceChild(replace, node);

            _element.mountAll(replace);
        },
        method: function method(name, props) {
            this.node[elementPrefix + "methods"][name](props);

            return this;
        },
        scrollTop: function scrollTop(_scrollTop) {
            return void 0 === _scrollTop ? this.node.scrollTop : this.node.scrollTop = _scrollTop;
        },
        scrollHeight: function scrollHeight() {
            return this.node.scrollHeight;
        },
        offsetHeight: function offsetHeight() {
            return this.node.offsetHeight;
        },
        focus: function focus() {
            return this.node.focus();
        },
        disabled: function disabled(status) {
            var $status = void 0 === status ? true : status;
            $status ? this.addClass("disabled-ufQt") : this.removeClass("disabled-ufQt");
        },
        width: function width() {
            return this.node.clientWidth;
        },
        height: function height() {
            return this.node.clientHeight;
        },
        data: function data(_data) {
            if (typeof _data === "string") {}
        }
    };

    app = {
        fetch: function fetch(config) {
            var xhr = new XMLHttpRequest(),
                isFormData = config.post && _typeof(config.post) == "object" && config.post.constructor && config.post.constructor.name == "FormData",
                postData = config.post ? !isFormData ? encodeUrlParams(config.post) : config.post : null,
                type = config.post ? "POST" : "GET",
                url = config.url || "",
                send = config.send === void 0 ? true : config.send;

            function fail() {
                console.log("Request Fail: " + url, xhr.status);
                if (typeof config.fail == "function") config.fail(xhr.status, xhr);
                if (typeof config.done == "function") config.done(xhr.status, xhr);
            }

            if (config.get) {
                url += (url.indexOf("?") > -1 ? "&" : "?") + encodeUrlParams(config.get);
            }

            xhr.open(config.type === void 0 ? type : config.type, url, true);

            typeof config.xhr == "function" && config.xhr(xhr);

            xhr.onload = function () {
                if (xhr.status == 200) {
                    if (xhr.getResponseHeader && xhr.getResponseHeader("Content-Type") && xhr.getResponseHeader("Content-Type").search("application/json") > -1) {
                        var response = xhr.responseText,
                            JSONParsed = false;
                        try {
                            response = JSON.parse(response);
                            JSONParsed = true;
                        } catch (e) {
                            return fail();
                        }
                        JSONParsed && config.success && config.success(response);
                    } else {
                        config.success && config.success(xhr.responseText);
                    }
                } else {
                    fail();
                }

                if (typeof config.done == "function") config.done(xhr.status, xhr);
            };

            xhr.ontimeout = fail;
            xhr.onerror = fail;

            !isFormData && xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xhr._send = function () {
                xhr.send(postData);
            };

            send && xhr._send();

            return xhr;
        },
        createElement: function createElement(_name, _props, _childs) {
            var props = _props || {},
                childs = [],
                arsLen = arguments.length,
                node = null,
                elem,
                name,
                index,
                item,
                key;

            if (typeof _name == "string") {
                elem = _name in nsTags ? document.createElementNS("http://www.w3.org/2000/svg", _name) : document.createElement(_name);
            } else if (typeof _name == "function") {
                elem = new _name(props);

                return elem;
            } else {
                elem = _name.node;
            }

            for (key in props) {
                if (props[key] != null) {
                    if (key in elementProps) {
                        elem[elementPrefix + key] = props[key];
                    } else if (key in nodePrototype) {
                        elem[key] = props[key];
                    } else {
                        elem.setAttribute(key, props[key]);
                    }
                }
            }

            for (index = 2; index < arsLen; index++) {
                item = arguments[index];
                if (isArray(item)) {
                    var itemLen = item.length,
                        _index,
                        _item;
                    for (var _index = 0; _index < itemLen; _index++) {
                        _item = item[_index];
                        _item && elem.appendChild(_item);
                    }
                } else {
                    item && elem.appendChild(item);
                }
            }

            elem[elementPrefix + "ID"] = guid();

            return elem;
        },
        createRef: function createRef(elem) {
            return new _element.init(elem in nsTags ? document.createElementNS("http://www.w3.org/2000/svg", elem) : document.createElement(elem));
        },
        element: function element(elem) {
            return new _element.init(elem);
        },
        $: function $(elem) {
            if (typeof elem == "string") {
                return new _element.init(document.querySelector(elem));
            }
            return new _element.init(elem);
        },
        event: function event(eventName, props) {
            var events = app.events[eventName],
                key,
                item;

            if (!events) return;

            for (key in events) {
                item = events[key];
                item && item.callback && item.callback(props);
            }
        },
        events: {},
        elementPrefix: elementPrefix,
        nodePrototype: nodePrototype,
        guid: guid,
        _guid: function _guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
        },
        rootRender: function rootRender(render) {
            document.getElementById("app").appendChild(render);
            _element.mountAll(render);
        },
        /* ----------- Utils ----------- */
        each: function each(arr, callback, key, len) {
            if (isArray(arr)) {
                len = arr.length;
                for (key = 0; key < len; key++) {
                    callback(arr[key], key);
                }
                return;
            }
            for (key in arr) {
                callback(arr[key], key);
            }
        },
        trim: function trim(value, _trim) {
            _trim = _trim ? scapeRegExp(_trim) : _trim;
            var exp = _trim ? new RegExp("^" + _trim + "|" + _trim + "+$", "gm") : /^\s+|\s+$/gm;
            return value.replace(exp, "");
        },
        time: function time() {
            return Date.now();
        },
        random: function random(a) {
            return ("0000000000" + Math.random().toString().slice(2)).slice(-12);
        },
        ucWords: function ucWords(string) {
            if (!string) return;
            var arrayWords = string.split(" "),
                returnString = "",
                len;
            function ucFirst(str) {
                return str.substr(0, 1).toUpperCase() + str.substr(1, str.length).toLowerCase();
            }
            len = arrayWords.length;
            for (var i = 0; i < len; i++) {
                returnString = i != len - 1 ? returnString + ucFirst(arrayWords[i]) + " " : returnString + ucFirst(arrayWords[i]);
            }
            return returnString;
        },

        parseInt: function (_parseInt) {
            function parseInt(_x) {
                return _parseInt.apply(this, arguments);
            }

            parseInt.toString = function () {
                return _parseInt.toString();
            };

            return parseInt;
        }(function (props) {
            return parseNumber(props, parseInt);
        }),
        parseFloat: function (_parseFloat) {
            function parseFloat(_x2) {
                return _parseFloat.apply(this, arguments);
            }

            parseFloat.toString = function () {
                return _parseFloat.toString();
            };

            return parseFloat;
        }(function (props) {
            return parseNumber(props, parseFloat);
        }),
        fixNumber: function fixNumber(number, len, index) {
            number = number.toString();
            number += (number.indexOf(".") == -1 ? "." : "") + "00000";
            index = number.indexOf(".");
            return number.slice(0, index + 1 + parseInt(len));
        }
    };

    app.n = function () {
        return {
            addClass: function addClass(newClass, elem) {
                return elem.classList.add(newClass);
            }
        };
    }(window);

    app.isMobile = function (w, n) {
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(n.userAgent || n.vendor || w.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((n.userAgent || n.vendor || w.opera).substr(0, 4))
        );
    }(window, window.navigator);

    window.addEventListener("resize", function () {
        app.event("appResize");
    });

    return app;
}(window, document);

app.svgIcon = function (window, document, app) {
    var nodePrototype = app.nodePrototype;

    function createElement(name, _props, _childs) {
        var props = _props || {},
            arsLen = arguments.length,
            elem = document.createElementNS("http://www.w3.org/2000/svg", name),
            key;

        for (key in props) {
            if (key in nodePrototype) {
                elem[key] = props[key];
            } else {
                elem.setAttribute(key, props[key]);
            }
        }

        for (var index = 2; index < arsLen; index++) {
            elem.appendChild(arguments[index]);
        }

        elem[app.elementPrefix + "ID"] = app.guid();

        return elem;
    }
    var icons = {
        close: function close() {
            return createElement("svg", { viewBox: "0 0 213 213", class: "svgIcon closeIcon" }, createElement("path", { d: "M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0l-75.937 75.937L30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936L5.242 182.427c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312L131.804 106.491z" }));
        },
        alert: function alert() {
            return createElement("svg", { viewBox: "0 0 512 512", class: "svgIcon alertIcon" }, createElement("path", { d: "M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2 c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8 c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z" }));
        },
        testLogo: function testLogo() {
            return createElement("svg", { viewBox: "0 0 512 512", class: "svgIcon testLogoIcon" }, createElement("path", { d: "M357.423,209.039c-9.093-9.093-23.832-9.093-32.925,0l-66.389,66.386c-3.286-0.779-6.708-1.203-10.23-1.203 c-24.435,0-44.316,19.897-44.316,44.358c0,24.457,19.88,44.357,44.316,44.357c24.46,0,44.357-19.9,44.357-44.357 c0-3.523-0.424-6.945-1.203-10.231l66.389-66.386C366.515,232.871,366.515,218.13,357.423,209.039z" }), createElement("path", { d: "M437.083,120.099c-99.837-99.837-262.318-99.837-362.206,0.003c-86.213,86.257-99.573,222.315-31.769,323.513    c7.156,10.683,21.618,13.535,32.3,6.38c10.681-7.156,13.538-21.617,6.38-32.3c-19.051-28.437-30.268-60.238-33.925-92.598h21.887    c12.857,0,23.281-10.422,23.281-23.281c0-12.856-10.424-23.281-23.281-23.281H47.789C52.008,239.863,66.9,202.32,92,170.742    l15.842,15.842c4.546,4.547,10.504,6.821,16.461,6.821c5.958,0,11.917-2.274,16.461-6.821c9.092-9.09,9.092-23.832,0-32.924    l-15.909-15.91c32.054-25.745,69.977-40.674,108.842-44.8v21.986c0,12.859,10.424,23.281,23.281,23.281    c12.857,0,23.281-10.422,23.281-23.281V93.163c38.183,4.411,75.369,19.28,106.875,44.596l-15.902,15.902    c-9.09,9.093-9.09,23.832,0.003,32.927c4.544,4.544,10.504,6.818,16.459,6.818c5.96,0,11.917-2.274,16.463-6.821l15.826-15.826    c25.109,31.572,40.004,69.111,44.224,107.779h-21.961c-12.856,0-23.281,10.425-23.281,23.281    c0,12.859,10.425,23.281,23.281,23.281h21.889c-3.658,32.36-14.878,64.159-33.935,92.595c-7.16,10.68-4.304,25.142,6.374,32.3    c3.981,2.668,8.485,3.947,12.941,3.947c7.503,0,14.869-3.622,19.362-10.321C536.709,342.411,523.338,206.353,437.083,120.099z" }));
        },
        user: function user() {
            return createElement("svg", { viewBox: "0 0 512 512", class: "svgIcon userIcon" }, createElement("path", { d: "M256 0c88.366 0 160 71.634 160 160s-71.634 160-160 160S96 248.366 96 160 167.634 0 256 0zm183.283 333.821l-71.313-17.828c-74.923 53.89-165.738 41.864-223.94 0l-71.313 17.828C29.981 344.505 0 382.903 0 426.955V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-37.045c0-44.052-29.981-82.45-72.717-93.134z" }));
        },
        downlink: function downlink() {
            return createElement("svg", { viewBox: "0 0 16 16", class: "svgIcon downlinkIcon" }, createElement("path", { d: "M8 0a8 8 0 100 16A8 8 0 008 0zM1.333 8a6.667 6.667 0 1113.334 0A6.667 6.667 0 011.333 8zm10-.667a.675.675 0 00-.473.194l-2.2 2.2v-5.06a.666.666 0 10-1.333 0v5.06L5.16 7.533a.668.668 0 00-1.12.3.67.67 0 00.173.647l3.334 3.333a.663.663 0 00.946.001l3.334-3.333a.667.667 0 00-.481-1.148h-.014z" }));
        },
        uplink: function uplink() {
            return createElement("svg", { viewBox: "0 0 16 16", class: "svgIcon uplinkIcon" }, createElement("path", { d: "M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.667a6.667 6.667 0 11.013 0H8zm.493-10.48a.663.663 0 00-.946-.001L4.213 7.52a.672.672 0 000 .947c.262.26.686.26.947 0l2.2-2.2v5.066a.666.666 0 101.333 0v-5.06l2.2 2.2a.668.668 0 00.935-.946l-3.335-3.34z" }));
        },
        gaugeNeedle: function gaugeNeedle() {
            return createElement("svg", { viewBox: "0 0 120 801", class: "svgIcon gaugeNeedleIcon" }, createElement("defs", {}, createElement("linearGradient", { id: "needleGradient", x1: "0", x2: "0", y1: "0", y2: "1" }, createElement("stop", { class: "stop--1", "stop-opacity": "0", "stop-color": "transparent", offset: "40%" }), createElement("stop", { class: "stop--1", "stop-opacity": "0.95", "stop-color": "currentColor", offset: "100%" }))), createElement("path", { d: "M95 800.5l-34.25-.958H26.5L0 .5h120l-25 800z", fill: "url(#needleGradient)" }));
        },
        gaugeVector: function gaugeVector() {
            return createElement("svg", { viewBox: "0 0 100 100", class: "svgIcon gaugeVectorIcon" }, createElement("circle", { class: "gaugeCircle gaugeCircleBackground", r: "46", cx: "50%", cy: "50%" }), createElement("circle", { class: "gaugeCircle gaugeCircleLoadingBackground", r: "46", cx: "50%", cy: "50%" }), createElement("circle", { class: "gaugeCircle gaugeCircleStrokeLeft", r: "46", cx: "50%", cy: "50%" }), createElement("circle", { class: "gaugeCircle gaugeCircleStrokeRight", r: "46", cx: "50%", cy: "50%" }), createElement("circle", { class: "gaugeCircle gaugeCircleCurrentSpeed", r: "46", cx: "50%", cy: "50%", "stroke-dashoffset": "404" }));
        },
        resultGraph: function resultGraph(type) {
            return createElement("svg", { viewBox: "0 0 300 100", class: "svgIcon graph " + (type ? "up" : "down") + "loadGraph" }, createElement("polyline", { points: "", class: "line" }), createElement("polygon", { points: "", class: "chart" }));
        },
        connections: function connections() {
            return createElement("svg", { viewBox: "0 0 512 512", class: "svgIcon" }, createElement("path", { d: "M234.693,270.09c8.754-20.745,16.175-37.019,22.266-48.82c4.568-8.754,8.854-16.13,12.851-22.126    c3.993-5.996,8.85-11.849,14.558-17.558c5.715-5.711,12.278-9.998,19.705-12.85c7.419-2.855,15.697-4.283,24.838-4.283h73.084    v54.818c0,2.474,0.903,4.617,2.71,6.423c1.807,1.809,3.949,2.712,6.42,2.712c2.669,0,4.859-0.854,6.563-2.568l91.365-91.359    c1.718-1.715,2.573-3.901,2.573-6.567c0-2.666-0.855-4.853-2.573-6.574L417.976,30.26c-2.279-1.902-4.572-2.849-6.852-2.849    c-2.669,0-4.853,0.855-6.57,2.57c-1.704,1.713-2.56,3.9-2.56,6.565v54.814h-73.084c-12.946,0-25.126,1.574-36.549,4.714    c-11.423,3.14-21.56,7.135-30.409,11.991c-8.852,4.854-17.416,11.372-25.697,19.558c-8.28,8.182-15.324,16.084-21.126,23.697    c-5.804,7.611-11.897,17.127-18.272,28.549c-6.374,11.42-11.514,21.414-15.416,29.978c-3.903,8.566-8.613,19.13-14.132,31.693    c-8.757,20.746-16.18,37.022-22.27,48.822c-4.567,8.754-8.853,16.132-12.847,22.127c-3.996,5.996-8.853,11.848-14.562,17.557    c-5.711,5.715-12.278,9.999-19.701,12.854c-7.421,2.854-15.703,4.284-24.838,4.284H9.139c-2.666,0-4.856,0.849-6.567,2.566    c-1.709,1.711-2.568,3.895-2.568,6.563v54.823c0,2.663,0.862,4.853,2.575,6.57c1.714,1.712,3.905,2.567,6.567,2.567h63.954    c12.946,0,25.125-1.574,36.547-4.716c11.42-3.142,21.558-7.139,30.406-11.991c8.853-4.856,17.417-11.376,25.697-19.562    c8.278-8.179,15.324-16.084,21.128-23.694c5.802-7.615,11.894-17.129,18.271-28.548c6.374-11.424,11.516-21.416,15.416-29.979    C224.464,293.217,229.173,282.656,234.693,270.09z" }), createElement("path", { d: "M9.135,164.45h63.954c8.375,0,16.13,1.381,23.269,4.143s13.134,6.091,17.987,9.995c4.854,3.904,9.707,9.279,14.561,16.13    c4.853,6.855,8.708,12.9,11.563,18.131c2.853,5.236,6.374,12.137,10.562,20.701c14.659-34.451,27.694-60.432,39.115-77.943    c-30.454-42.825-69.473-64.241-117.058-64.241H9.135c-2.666,0-4.856,0.855-6.567,2.57C0.859,95.647,0,97.834,0,100.5v54.818    c0,2.667,0.855,4.851,2.568,6.563C4.283,163.596,6.473,164.45,9.135,164.45z" }), createElement("path", { d: "M417.983,286.085c-2.286-1.902-4.572-2.847-6.858-2.847c-2.662,0-4.853,0.852-6.563,2.566    c-1.711,1.711-2.566,3.901-2.566,6.563v54.823h-73.091c-8.378,0-16.132-1.383-23.271-4.147    c-7.139-2.759-13.135-6.088-17.987-9.993c-4.849-3.901-9.705-9.28-14.558-16.135c-4.856-6.852-8.713-12.898-11.567-18.135    c-2.852-5.226-6.373-12.135-10.561-20.693c-14.655,34.259-27.596,60.24-38.828,77.943c5.137,7.422,10.467,14.037,15.987,19.838    c5.518,5.804,10.754,10.896,15.702,15.276c4.949,4.374,10.564,8.186,16.844,11.416c6.283,3.237,11.8,5.948,16.563,8.139    c4.771,2.189,10.76,3.949,17.99,5.283c7.231,1.328,13.322,2.334,18.271,2.991c4.948,0.664,11.707,1.143,20.272,1.431    c8.562,0.287,15.51,0.376,20.834,0.287c5.335-0.096,13.045-0.198,23.134-0.287c10.089-0.093,18.179-0.144,24.271-0.144v54.819    c0,2.474,0.903,4.616,2.71,6.423c1.807,1.808,3.949,2.711,6.42,2.711c2.669,0,4.859-0.855,6.563-2.566l91.365-91.358    c1.711-1.718,2.566-3.901,2.566-6.57c0-2.666-0.855-4.853-2.573-6.563L417.983,286.085z" }));
        },
        menu: function menu() {
            return createElement("svg", { viewBox: "0 0 512 512", class: "svgIcon" }, createElement("path", { d: "M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" }), createElement("path", { d: "M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z" }), createElement("path", { d: "M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20 C512,404.954,503.046,396,492,396z" }));
        },
        menu2: function menu2() {
            return createElement("svg", { viewBox: "0 0 124 124", class: "svgIcon" }, createElement("path", { d: "M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z" }), createElement("path", { d: "M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z" }), createElement("path", { d: "M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z" }));
        },
        settings: function settings() {
            return createElement("svg", { viewBox: "0 0 512 512", class: "svgIcon" }, createElement("path", { d: "M500.6,212.6l-59.9-14.7c-3.3-10.5-7.5-20.7-12.6-30.6l30.6-51c3.6-6,2.7-13.5-2.1-18.3L414,55.4 c-4.8-4.8-12.3-5.7-18.3-2.1l-51,30.6c-9.9-5.1-20.1-9.3-30.6-12.6l-14.4-59.9C297.9,4.8,291.9,0,285,0h-60 c-6.9,0-12.9,4.8-14.7,11.4l-14.4,59.9c-10.5,3.3-20.7,7.5-30.6,12.6l-51-30.6c-6-3.6-13.5-2.7-18.3,2.1L53.4,98 c-4.8,4.8-5.7,12.3-2.1,18.3l30.6,51c-5.1,9.9-9.3,20.1-12.6,30.6l-57.9,14.7C4.8,214.1,0,220.1,0,227v60 c0,6.9,4.8,12.9,11.4,14.4l57.9,14.7c3.3,10.5,7.5,20.7,12.6,30.6l-30.6,51c-3.6,6-2.7,13.5,2.1,18.3L96,458.6 c4.8,4.8,12.3,5.7,18.3,2.1l51-30.6c9.9,5.1,20.1,9.3,30.6,12.6l14.4,57.9c1.8,6.6,7.8,11.4,14.7,11.4h60 c6.9,0,12.9-4.8,14.7-11.4l14.4-57.9c10.5-3.3,20.7-7.5,30.6-12.6l51,30.6c6,3.6,13.5,2.7,18.3-2.1l42.6-42.6 c4.8-4.8,5.7-12.3,2.1-18.3l-30.6-51c5.1-9.9,9.3-20.1,12.6-30.6l59.9-14.7c6.6-1.5,11.4-7.5,11.4-14.4v-60 C512,220.1,507.2,214.1,500.6,212.6z M255,332c-41.4,0-75-33.6-75-75c0-41.4,33.6-75,75-75c41.4,0,75,33.6,75,75 C330,298.4,296.4,332,255,332z" }));
        },
        arrowDown: function arrowDown() {
            return createElement("svg", { viewBox: "0 0 293 293", class: "svgIcon" }, createElement("path", { d: "M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424 C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428 s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" }));
        },
        checked: function checked() {
            return createElement("svg", { viewBox: "0 0 405 405", class: "svgIcon" }, createElement("path", { d: "M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z" }));
        }
    };

    return function (name, props) {
        return icons[name](props);
    };
}(window, document, app);

var components = app.components,
    createElement = app.createElement,
    svgIcon = app.svgIcon,
    createRef = app.createRef,
    element = app.element,
    $ = app.$;

exports.default = app;
exports.createElement = createElement;
exports.createRef = createRef;
exports.svgIcon = svgIcon;
exports.element = element;
exports.$ = $;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainHeader() {
    var elem = {
        logoIcon: (0, _App.createRef)("span"),
        switchButton: (0, _App.createRef)("button"),
        testNav: (0, _App.createRef)("div"),
        toggleButton: (0, _App.createRef)("button"),
        settingsButton: (0, _App.createRef)("button"),
        settingsMenu: (0, _App.createRef)("div"),
        testOptions: (0, _App.createRef)("div"),
        testServer: (0, _App.createRef)("select"),
        testTime: (0, _App.createRef)("input"),
        testConnections: (0, _App.createRef)("input"),
        testEnableBuffer: (0, _App.createRef)("input"),
        testOutputSpeed: (0, _App.createRef)("select"),
        testMode: (0, _App.createRef)("select"),
        testPrecision: (0, _App.createRef)("select"),
        testViewInterfaz: (0, _App.createRef)("input")
    },
        consoleOpened = false,
        currentStage = 0;

    function switchStage(target) {
        currentStage = target;
        _App2.default.event("switchStage", { switch: target });

        if (target == 0) {
            elem.testNav.removeClass("unseen-u");
        } else {
            elem.testNav.addClass("unseen-u");
        }
    }
    function toggleSettingsMenu() {
        elem.settingsMenu.style({ display: elem.settingsMenu.style("display") == "none" ? "block" : "none" });
    }

    elem.logoIcon.handleClick = function () {
        elem.switchButton.toggle(false);

        switchStage(currentStage == 2 ? 0 : 2);
    };
    elem.switchButton.toggle = function (toggle) {
        if (void 0 === toggle) {
            elem.switchButton.toggleClass("active");
        } else {
            elem.switchButton[toggle ? "addClass" : "removeClass"]("active");
        }

        elem.switchButton.textContent(elem.switchButton.hasClass("active") ? "< Back" : "Ping Test");
    };
    elem.switchButton.handleClick = function () {
        elem.switchButton.toggle();

        switchStage(elem.switchButton.hasClass("active") ? 1 : 0);
    };
    elem.toggleButton.handleClick = function () {
        consoleOpened = !consoleOpened;
        elem.toggleButton.textContent(consoleOpened ? "Hide console" : "Show console");

        _App2.default.event("consoleToggle", { toggle: consoleOpened });
    };
    elem.testViewInterfaz.handleClick = function () {
        test.viewInterfaz = elem.testViewInterfaz.checked() ? 2 : 1;
        _App2.default.event("speedTestViewInterfaz");
    };

    this.events = {
        speedTestSettings: function speedTestSettings() {
            test.runTime = _App2.default.parseInt({ value: elem.testTime.value(), min: 1, max: 1800, default: 15 }) * 1000;
            test.connections.count = _App2.default.parseInt({ value: elem.testConnections.value(), min: 1, max: 20, default: test.connections.default });
            test.selectedServer = parseInt(elem.testServer.value());
            test.bufferEnabled = elem.testEnableBuffer.checked();
            test.outputSpeed = elem.testOutputSpeed.value();
            test.resultsPrecision = elem.testPrecision.value();
            test.mode = elem.testMode.value();
        },
        speedTestConnections: function speedTestConnections(e) {
            elem.testConnections.value(test.connections.count);
        },
        initializeTest: function initializeTest() {
            elem.testOptions.addClass("disabled-kTch");
        },
        closeTest: function closeTest() {
            elem.testOptions.removeClass("disabled-kTch");
        },
        renderStage: function renderStage() {
            if (consoleOpened) {
                consoleOpened = 0;
                elem.toggleButton.textContent("Show console");
            }
            elem.testOptions.removeClass("disabled-kTch");
        }
    };
    this.onMount = function () {
        elem.testMode.child(test.mode - 1).selected(true);
    };
    this.reload = function () {
        isLocal && location.reload();
    };

    return (0, _App.createElement)("header", { className: "mainHeader", events: this.events, onMount: this.onMount }, (0, _App.createElement)("div", { className: "container" }, (0, _App.createElement)("div", { className: "headerContents" }, (0, _App.createElement)("div", { className: "logoWrapper" }, (0, _App.createElement)(elem.logoIcon, { className: "logoIcon", onclick: elem.logoIcon.handleClick }, (0, _App.createElement)("button", {}, (0, _App.svgIcon)("testLogo"))), (0, _App.createElement)("span", { className: "logoText", textContent: "SPEEDTEST", onclick: this.reload }), (0, _App.createElement)("span", { className: "divider-fGntc", textContent: "•" })), (0, _App.createElement)("div", { className: "nav-gAfej" }, (0, _App.createElement)(elem.switchButton, { className: "button-r8eYj", textContent: "Ping Test", onclick: elem.switchButton.handleClick }), (0, _App.createElement)(elem.testNav, { className: "testNav-zMcl" }, (0, _App.createElement)(elem.toggleButton, { className: "consoleToggleButton", textContent: "Show console", onclick: elem.toggleButton.handleClick }), (0, _App.createElement)("div", { className: "testSettings-pwLy" }, (0, _App.createElement)(elem.settingsButton, { className: "settingsButton-rKfy", onclick: toggleSettingsMenu }, (0, _App.svgIcon)("menu")), (0, _App.createElement)(elem.settingsMenu, { className: "menu-jrbk", style: "display: none;" }, (0, _App.createElement)("div", { className: "menuInner-jrbk" }, (0, _App.createElement)(elem.testOptions, { className: "content-rtbh" }, (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Server: " }), (0, _App.createElement)(elem.testServer, {}, test.servers.map(function (item, index) {
        return index > 0 || isLocal ? index != test.selectedServer ? (0, _App.createElement)("option", { value: index, textContent: item.name }) : (0, _App.createElement)("option", { value: index, selected: "", textContent: item.name }) : null;
    })))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Test time: " }), (0, _App.createElement)(elem.testTime, { type: "number", min: "1", value: test.runTime / 1000 }))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Connections: " }), (0, _App.createElement)(elem.testConnections, { type: "number", min: "1", value: test.connections.count }))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Enable buffer: " }), test.bufferEnabled ? (0, _App.createElement)(elem.testEnableBuffer, { type: "checkbox", checked: "" }) : (0, _App.createElement)(elem.testEnableBuffer, { type: "checkbox" }))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Output speed: " }), (0, _App.createElement)(elem.testOutputSpeed, {}, (0, _App.createElement)("option", { value: "instant", textContent: "Instant speed" }), (0, _App.createElement)("option", { value: "average", selected: "", textContent: "Average speed" })))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Test mode: " }), (0, _App.createElement)(elem.testMode, {}, (0, _App.createElement)("option", { value: "1", textContent: "Download - Upload" }), (0, _App.createElement)("option", { value: "2", textContent: "Only Download" }), (0, _App.createElement)("option", { value: "3", textContent: "Only Upload" })))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Results precision: " }), (0, _App.createElement)(elem.testPrecision, {}, (0, _App.createElement)("option", { value: "1", textContent: "1", checked: "" }), (0, _App.createElement)("option", { value: "2", textContent: "2" })))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Show new speedtest interfaz: " }), test.viewInterfaz == 1 ? (0, _App.createElement)(elem.testViewInterfaz, { type: "checkbox", onclick: elem.testViewInterfaz.handleClick }) : (0, _App.createElement)(elem.testViewInterfaz, { type: "checkbox", checked: "", onclick: elem.testViewInterfaz.handleClick }))))), (0, _App.createElement)("div", { className: "menuOverlay-jrbk", onclick: toggleSettingsMenu }))))))));
}

exports.default = MainHeader;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

var _TestConfig = __webpack_require__(4);

var _TestConfig2 = _interopRequireDefault(_TestConfig);

var _TestStage = __webpack_require__(5);

var _TestStage2 = _interopRequireDefault(_TestStage);

var _PingStage = __webpack_require__(8);

var _PingStage2 = _interopRequireDefault(_PingStage);

var _NetworkStage = __webpack_require__(9);

var _NetworkStage2 = _interopRequireDefault(_NetworkStage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainContent() {
    var container = (0, _App.createRef)("div"),
        testWrapper = (0, _App.createRef)("div"),
        stageNames = ["mainTest", "pingTest", "networkTest"],
        stageElem = (0, _App.createElement)(_TestStage2.default);

    function className() {
        var runType = " test--" + _TestConfig2.default.runType.current + (_TestConfig2.default.onprogress ? " onprogress" : "");
        return "testWrapper" + (" test--" + (_TestConfig2.default.connections.count > 1 ? "multi" : "single") + "Mode") + (_TestConfig2.default.opened ? " testOpen" : "") + (_TestConfig2.default.started ? runType : "") + (_TestConfig2.default.finished ? " test--finished" : "");
    }
    function updateStatus(config) {
        if (config.started != void 0) _TestConfig2.default.started = config.started;
        if (config.opened != void 0) _TestConfig2.default.opened = config.opened;
        if (config.finished != void 0) _TestConfig2.default.finished = config.finished;
        if (config.runType != void 0) _TestConfig2.default.runType.current = config.runType;
        if (config.onprogress != void 0) _TestConfig2.default.onprogress = config.onprogress;

        testWrapper.className(className());
    }

    this.events = {
        renderStage: function renderStage(e) {
            var replace = (0, _App.createElement)(_TestStage2.default, { fadeIn: e && e.fadeIn ? 1 : 0 });

            (0, _App.element)(stageElem).replaceWith(replace);

            stageElem = replace;
        },
        runTest: function runTest(e) {
            updateStatus({ started: true, runType: e.runType });
        },
        testStatus: function testStatus(e) {
            updateStatus(e);
        },
        closeTest: function closeTest() {
            updateStatus({ started: false, finished: true, onprogress: false });
        },
        switchStage: function switchStage(e) {
            container.className("container " + stageNames[e.switch]);
        }
    };

    return (0, _App.createElement)("div", { className: "pageContent", events: this.events }, (0, _App.createElement)(container, { className: "container mainTest" }, (0, _App.createElement)(testWrapper, { className: className() }, stageElem, (0, _App.createElement)(_PingStage2.default), (0, _App.createElement)(_NetworkStage2.default)), (0, _App.createElement)("div", { className: "log valueNumber-vgKp", textContent: "0.123456789" }), (0, _App.createElement)("div", { className: "log icrementNumber-vgKp", textContent: "0.123456789" })));
};

exports.default = MainContent;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var test = window.test = function () {
    var test,
        fnaBasicUrl,
        httpProtocol = window.location.protocol == "http:",
        servers,
        gaugeCircleStrokeMin,
        gaugeCircleStrokeMax,
        gaugeNeedleRotateMin,
        gaugeNeedleRotateMax,
        gaugeCircleOffsetRef,
        gaugeNeedleRotateRef;

    function replaceFnaSign(url, sign) {
        url = url.split(".");
        url[1] = sign;
        return url.join(".");
    }
    function uploadData() {
        var str = "111111111111111",
            size = 21,
            formData30 = new FormData(),
            formData99 = new FormData(),
            dup,
            blob;

        for (dup = 0; dup < size; dup++) {
            str += str;
        }

        blob = new Blob([str], { type: "plain/text" });

        formData30.append("x-file-1", blob);

        formData99.append("x-file-1", blob);
        formData99.append("x-file-2", blob);
        formData99.append("x-file-3", blob);

        return {
            $30: formData30,
            $99: formData99
        };
    }

    fnaBasicUrl = "https://z-m-scontent-bog1-1.xx.fbcdn.net/v/t1.15752-9/fr/cp0/e15/q65/135856944_1366451607033113_1598808278752931662_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=58c789&efg=eyJpIjoibyJ9&_nc_eui2=AeHt6CAq5yTPwLYNQBa1yNudTvXFk30_ZfVO9cWTfT9l9Vq9sBMVOuHnd3u6jr2TKi-wHeCtj_mcDCDsK8l62o-o&_nc_ohc=j6ijnJkes4QAX9Iikyy&_nc_ad=z-m&_nc_cid=3943&_nc_eh=f60fab09e89864f36b068ff2d11e5abc&_nc_rml=0&_nc_ht=z-m-scontent-bog1-1.xx&tp=14&oh=b1f91d29beadc43f566f2c476056460f&oe=60D88DCC";

    gaugeCircleStrokeMin = 404; // deg
    gaugeCircleStrokeMax = 194; // deg
    gaugeNeedleRotateMin = 49; // deg
    gaugeNeedleRotateMax = 310; // deg
    gaugeCircleOffsetRef = gaugeCircleStrokeMax - gaugeCircleStrokeMin;
    gaugeNeedleRotateRef = gaugeNeedleRotateMax - gaugeNeedleRotateMin;

    servers = [{
        name: "Local",
        id: 0,
        download: URL_BASE + "/xx-download.file",
        upload: URL_BASE,
        ping: URL_BASE + "/index.html"
    }, {
        name: "Cachefly.net",
        id: 1,
        http: true,
        download: "https://open.cachefly.net/downloading",
        upload: "https://nvirginia.bandwidthplace.com/uploader/upload.cgi",
        ping: "https://open.cachefly.net/downloading"
    }, {
        name: "New York - Librespeed.org",
        id: 2,
        http: true,
        download: "https://nyc.speedtest.clouvider.net/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true"
    }, {
        name: "New Jersey - Vultr.com",
        id: 3,
        http: true,
        download: "https://nj-us-ping.vultr.com/vultr.com.100MB.bin",
        upload: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://nj-us-ping.vultr.com/favicon.ico"
    }, {
        name: "Miami - Vultr.com",
        id: 4,
        http: true,
        download: "https://fl-us-ping.vultr.com/vultr.com.100MB.bin",
        upload: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://fl-us-ping.vultr.com/favicon.ico"
    }, {
        name: "Chicago - Vultr.com",
        id: 5,
        http: true,
        download: "https://il-us-ping.vultr.com/vultr.com.100MB.bin",
        upload: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://il-us-ping.vultr.com/favicon.ico"
    }, {
        name: "Atlanta - Vultr.com",
        id: 6,
        http: true,
        download: "https://ga-us-ping.vultr.com/vultr.com.100MB.bin",
        upload: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://ga-us-ping.vultr.com/favicon.ico"
    }, {
        name: "Dalas - Vultr.com",
        id: 7,
        http: true,
        download: "https://tx-us-ping.vultr.com/vultr.com.100MB.bin",
        upload: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://tx-us-ping.vultr.com/favicon.ico"
    }, {
        name: "Washington - Fireprobe.net",
        id: 8,
        preconnect: "https://s12-je1rw.fireinfra.net/?action=download&size=0",
        download: "https://s12-je1rw.fireinfra.net/?action=download&size=100",
        upload: "https://s12-je1rw.fireinfra.net/?action=xupload",
        ping: "https://s12-je1rw.fireinfra.net/?action=download&size=0"
    }, {
        name: "Madrid - Movispeed.es",
        id: 9,
        download: "https://m0012.movispeed.es/apolo/data/a100m.dat",
        upload: "https://m0012.movispeed.es/apolo/subida.php",
        ping: "https://m0012.movispeed.es/apolo/data/a1b.dat"
    }, {
        name: "Sydney - Fireprobe.net",
        id: 10,
        preconnect: "https://s87-lggif.fireinfra.net/?action=download&size=0",
        download: "https://s87-lggif.fireinfra.net/?action=download&size=100",
        upload: "https://s87-lggif.fireinfra.net/?action=xupload",
        ping: "https://s87-lggif.fireinfra.net/?action=download&size=0"
    }, {
        name: "Singapore - Fireprobe.net",
        id: 11,
        preconnect: "https://s281-tnorz.fireinfra.net:9114/?action=download&size=0",
        download: "https://s281-tnorz.fireinfra.net:9114/?action=download&size=100",
        upload: "https://s281-tnorz.fireinfra.net:9114/?action=xupload",
        ping: "https://s281-tnorz.fireinfra.net:9114/?action=download&size=0"
    }, {
        name: "Facebook",
        id: 12,
        preconnect: "https://s281-tnorz.fireinfra.net:9114/?action=download&size=0",
        download: "https://s281-tnorz.fireinfra.net:9114/?action=download&size=100",
        upload: "https://s281-tnorz.fireinfra.net:9114/?action=xupload",
        ping: "https://s281-tnorz.fireinfra.net:9114/?action=download&size=0"
    }];

    servers = servers.map(function (item) {
        if (httpProtocol && item.http) {
            if (item.preconnect) item.preconnect = item.preconnect.replace("https://", "http://");
            if (item.download) item.download = item.download.replace("https://", "http://");
            if (item.upload) item.upload = item.upload.replace("https://", "http://");
        }

        return item;
    });

    test = {
        started: false, // false = stop - finished, true = started
        opened: false,
        finished: false,
        onprogress: false, // true = progress, false = waiting
        increments: [0, 1, 5, 10, 20, 30, 50, 75, 100],
        viewInterfaz: 1,
        runTime: isLocal ? 1000 * 10 : 15000,
        hearbeatTime: 80,
        connections: {
            default: 4,
            count: 4
        },
        mode: "1",
        bufferEnabled: true,
        resultsPrecision: 1,
        gaugeCircleStrokeMin: gaugeCircleStrokeMin,
        gaugeCircleStrokeMax: gaugeCircleStrokeMax,
        gaugeNeedleRotateMin: gaugeNeedleRotateMin,
        gaugeNeedleRotateMax: gaugeNeedleRotateMax,
        gaugeCircleOffsetRef: gaugeCircleOffsetRef,
        gaugeNeedleRotateRef: gaugeNeedleRotateRef,
        user: {
            isp: null,
            ip: null
        },
        servers: [servers[0], servers[1], {
            name: "United States (East) - Multi Server",
            multi: [servers[5], servers[3], servers[6], servers[7], servers[4]],
            upload: servers[2].upload
        }, servers[2], servers[3], servers[4], servers[5], servers[6], servers[7], servers[8], servers[9], servers[10], servers[11]],
        uploadData: uploadData(),
        runType: {
            download: false,
            upload: false,
            current: null,
            set: function set(_set) {
                test.runType.download = "download" == _set;
                test.runType.upload = "upload" == _set;
            }
        },
        selectedServer: isLocal && 0 ? 0 : 1
    };

    test.network = function () {
        var urls, fnaSign0, fnaSign1;

        fnaSign0 = ["fbog11-1", "fbog10-1", "fclo7-1", "fctg2-1", "fbaq1-1", "feoh3-1", "fbga3-1"];
        fnaSign1 = fnaSign0.concat(["fbaq7-1", "fbaq6-1", "fbaq5-1", "fbog13-1", "fbog12-1", "fbog9-1", "fbog8-1", "fbog7-1", "fbog6-1", "fbog5-1", "fbog4-1", "fbog3-1", "fbog2-1"]);
        urls = {
            download: [{
                name: "Local",
                nodes: [{ url: servers[0].download }]
            }, {
                name: "Cachefly.net",
                nodes: [{ url: servers[1].download }],
                selected: true
            }, {
                name: "Vultr.com - Multi Location",
                nodes: [{ url: servers[5].download, requestsCount: 5 }, { url: servers[3].download, requestsCount: 5 }, { url: servers[6].download, requestsCount: 5 }, { url: servers[7].download, requestsCount: 5 }],
                selected: false
            }, {
                name: servers[2].name,
                nodes: [{ url: servers[2].download }]
            }, {
                name: servers[3].name,
                nodes: [{ url: servers[3].download }]
            }, {
                name: servers[4].name,
                nodes: [{ url: servers[4].download }]
            }, {
                rname: "Facebook Zero - JPG", /*
                                              nodes: fnaSign0.map(function(sign){
                                              return {url: replaceFnaSign(fnaBasicUrl, sign), preconnectCount: 1, requestsCount: 3}
                                              })*/
                nodes: [{ url: fnaBasicUrl, preconnectCount: 1, requestsCount: 6 }]
            }, {
                rname: "Mi Tigo - JS",
                nodes: [{ url: "https://mi.tigo.com.co/main.7870aa2fbe835c315b3e.js" }]
            }, {
                rname: "Mi Cuenta Tigo - CSS",
                nodes: [{ url: "https://micuenta.tigo.com.co/sites/tigoselfcareregional.co/files/css/css_TfZmanse90OtW98FdwxK3piXS3wBN_7tCRPvOOrbWdo.css" }]
            }, {
                rname: "Tigo - PDF",
                nodes: [{ url: "https://www.tigo.com.co/sites/tigounecorp/files/fragmentos/general_listado_archivos/Mantenimientos-taoli-marz1al15.pdf" }]
            }, {
                rname: "Facebook Static - JS",
                nodes: [{ url: "https://z-m-static.xx.fbcdn.net/rsrc.php/v3iaPW4/yk/l/es_LA/p9oJ6xU0RfanM5gMd_ntn3rHhjCB3MkcLFvIMIXs-Cd0GfuMdZk44cwdYgTr1fPr7jIIoDRBBJWHtUAEjMv0FyR4VrYCPoltBt5Wp1apCv48LXz2kqxAT2AB91B6Bp6TdCzUtrQV1DzHNXghaGVz-fRIdN.js?_nc_x=oKaJbgQx21R", preconnectCount: 1 }]
            }, {
                rname: "Youtube - JS",
                nodes: [{ url: "https://www.youtube.com/s/desktop/de591bc6/jsbin/desktop_polymer_inlined_html_polymer_flags.vflset/desktop_polymer_inlined_html_polymer_flags.js", preconnectCount: 1, requestsCount: 20 }]
            }],
            upload: [{
                name: "Local",
                nodes: [{ url: servers[0].upload }]
            }, {
                name: "Virginia, US",
                nodes: [{ url: "https://nvirginia.bandwidthplace.com/uploader/upload.cgi" }],
                selected: true
            }, {
                name: "Facebook Zero",
                nodes: [{ url: "https://z-m-static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg", requestsCount: 15, preconnectCount: 1 }]
            }]
        };
        if (!isLocal) urls.download.splice(0, 1), urls.upload.splice(0, 1);
        return {
            fnaBasicUrl: fnaBasicUrl,
            urls: urls
        };
    }();

    test.ping = function () {
        var graphItems = [],
            graphItemsLen = 100,
            index,
            pingServers;
        for (index = 0; index < graphItemsLen; index++) {
            graphItems.push(index);
        }
        pingServers = [servers[0], servers[1], servers[3], servers[4], servers[5], servers[6], servers[7], { name: "Facebook", ping: fnaBasicUrl, download: fnaBasicUrl }, { name: "Bogota, Colombia", providerName: "EdgeUno", providerWebsite: "https://edgeuno.com/", wsping: "wss://co-edgeuno.metercdn.com:8443/wsping" }, { name: "Washsington, United States", providerName: "Fireprobe", providerWebsite: "https://www.fireprobe.net/", wsping: "ws://lw.us.v-speed.eu:8080/ws?latency", wsmessage: "LATENCY" }, servers[9], servers[10], servers[11]];
        return {
            results: 100,
            completeAll: false,
            servers: pingServers,
            server: pingServers[1],
            runTime: 10000,
            graphItemsLen: graphItemsLen,
            graphVisibleItems: [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97],
            graphItems: graphItems
        };
    }();

    return test;
}();

exports.default = test;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

var _StartButton = __webpack_require__(6);

var _StartButton2 = _interopRequireDefault(_StartButton);

var _GaugeContainer = __webpack_require__(7);

var _GaugeContainer2 = _interopRequireDefault(_GaugeContainer);

var _TestConfig = __webpack_require__(4);

var _TestConfig2 = _interopRequireDefault(_TestConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TestStage(props) {
    var elem = {
        testStage: (0, _App.createRef)("div"),
        stageClose: (0, _App.createRef)("button"),
        startWrapper: (0, _App.createRef)("div"),
        resultsContainer: (0, _App.createRef)("div"),
        resultDownload: (0, _App.createRef)("div"),
        speedDownloadNumber: (0, _App.createRef)("div"),
        resultUpload: (0, _App.createRef)("div"),
        speedUploadNumber: (0, _App.createRef)("div"),
        consoleWrapper: (0, _App.createRef)("div"),
        console: (0, _App.createRef)("textarea"),
        ispName: (0, _App.createRef)("div"),
        publicIp: (0, _App.createRef)("div"),
        multiModeButton: (0, _App.createRef)("button"),
        singleModeButton: (0, _App.createRef)("button"),
        gauge: 0
    },
        timer = {
        timeout: {},
        interval: {}
    },
        fixNumber = _App2.default.fixNumber,
        graph,
        connections,
        intervalStarted,
        globalLoadStartTime,
        intervalTime,
        testConsole;

    testConsole = function () {
        var consoleLines = [],
            consoleLen = 0,
            consoleInner = "",
            scrollTop,
            scrollHeight,
            elemHeight,
            scrollBottom;

        function _log(data) {
            scrollHeight = elem.console.scrollHeight(), scrollTop = elem.console.scrollTop(), elemHeight = elem.console.offsetHeight();

            scrollBottom = scrollTop > scrollHeight - elemHeight - 10;

            if (!scrollBottom && consoleLen >= 520) return;

            consoleLines.push(data);
            consoleLen++;
            if (consoleLen > 520) {
                consoleLines.splice(0, 1);
                consoleLen--;
                consoleInner = consoleLines.join("\n");
            } else {
                consoleInner += (consoleInner == "" ? "" : "\n") + data;
            }
            elem.console.value(consoleInner);

            if (scrollBottom) {
                elem.console.scrollTop(elem.console.scrollHeight());
            }
        }

        return {
            log: function log(data) {
                _log(data);
            },
            state: function state(data) {
                data = "[" + (_TestConfig2.default.runType.download ? "download" : "upload") + "] " + data;
                _log(data);
            },
            clear: function clear() {
                consoleInner = "";
                consoleLines = [];
                consoleLen = 0;
                elem.console.value(consoleInner);
            },
            scroll: function scroll() {
                elem.console.scrollTop(elem.console.scrollHeight());
            }
        };
    }();
    function countArrayItems(arr) {
        var count = 0,
            i,
            len = arr.length;
        for (i = 0; i < len; i++) {
            count += arr[i];
        }
        return count;
    }
    function speedRateMbps(rate) {
        return rate / 125000; // convert bytes per second to megabits per second
    }
    function transferredData(value) {
        if (value == 0) return "0KB";
        value = value / 1000;
        return fixNumber(value, value < 100 ? 2 : 1) + "KB";
    }
    function loadedData(value) {
        value = value / 1000000;
        return fixNumber(value, value < 10 ? 3 : 2) + "MB";
    }
    function showUserProvider(isp, ip) {
        _TestConfig2.default.user.isp = isp;
        _TestConfig2.default.user.ip = ip;
        elem.ispName.textContent(isp), elem.publicIp.textContent(ip);
        if (_TestConfig2.default.user.ip && _TestConfig2.default.user.ip.split("").indexOf(":") > -1) {
            elem.publicIp.addClass("hidden");
        }
    }
    function stopTest() {
        clearInterval(timer.interval.intervalHeartbeat);
        connections && connections.requests && connections.requests.forEach(function (req) {
            req.abort && req.abort();
        });
        connections && connections.preconnect && connections.preconnect.requests.forEach(function (req) {
            req.abort && req.abort();
        });
    }
    function toggleConnectionsMode(mode) {
        elem.multiModeButton.removeClass("active"), elem.singleModeButton.removeClass("active");

        if (mode) {
            _TestConfig2.default.connections.count = mode;
            _App2.default.event("speedTestConnections", { count: _TestConfig2.default.connections.count });
        }

        (_TestConfig2.default.connections.count > 1 ? elem.multiModeButton : elem.singleModeButton).addClass("active");
    }
    function closeGauge() {
        elem.startWrapper.firstChild().replaceWith((0, _App.createElement)(_StartButton2.default, { textContent: "DE NUEVO", action: 2 }));
        elem.startWrapper.addClass("close-m6jHb").addClass("tryAgain-EuG8d");
        timer.timeout.closeGauge = setTimeout(function () {
            elem.startWrapper.removeClass("open-m6jHb", "close-m6jHb");
            elem.gauge.method("removeGauge");
        }, 1300);
    }
    function clearResults() {
        elem.resultDownload.find("resultValue").textContent("- -");
        elem.resultDownload.find("graph").addClass("unseen");

        elem.resultUpload.find("resultValue").textContent("- -");
        elem.resultUpload.find("graph").addClass("unseen");

        testConsole.clear();
        testConsole.log("Starting test...");
    }
    function progressEnd() {
        _App2.default.event("testStatus", { onprogress: false });
        elem.gauge.method("clear");

        timer.timeout.progressEnd = setTimeout(function () {
            if (_TestConfig2.default.runType.download && _TestConfig2.default.mode == "1") {
                _App2.default.event("runTest", { runType: "upload" });
                elem.gauge.method("loadType", { type: "upload" });
            } else {
                _App2.default.event("closeTest"), closeGauge();
            }
        }, 500);
    }
    function clearTimers() {
        var key;
        for (key in timer.timeout) {
            //console.log(key, timer.timeout[key]);
            clearTimeout(timer.timeout[key]);
        }
        for (key in timer.interval) {
            //console.log(key, timer.interval[key]);
            clearInterval(timer.interval[key]);
        }
    }
    function breakTest() {
        clearTimers();
        stopTest();
        graph && connections.speedRate && graph.draw(connections.speedRate, _TestConfig2.default.runTime, _App2.default.time(), true);
        testConsole.state("measures error");
        timer.timeout.breakTest = setTimeout(progressEnd, 1300);
    }
    function averageSpeed() {
        this.items = [];
        this.len = 0;
        this.count = 0;

        this.get = function (speed, maxItems) {
            this.len = this.items.push(speed);
            this.count += speed;

            if (this.len > maxItems) {
                this.count -= this.items[0];
                this.items.splice(0, 1);
                this.len--;
            }
            return this.count / this.len;
        };
    }
    function drawGraph() {
        this.elem = (_TestConfig2.default.runType.download ? elem.resultDownload : elem.resultUpload).find("graph");
        this.elemWidth = Math.round(this.elem.width());
        this.elemHeight = Math.round(this.elem.height());
        this.chart = this.elem.find("chart");
        this.line = this.elem.find("line");
        this.points = [];
        this.maxPoint = 0;
        this.maxTime = _TestConfig2.default.runTime;
        this.pointWidth = this.elemWidth / this.pointsLen;
        this.updateTime = _TestConfig2.default.runTime / 190;
        this.lastTime = 0;

        var update,
            chartPoints = [],
            _chartPoints,
            viewWidth,
            viewHeight,
            len,
            pointWidth,
            index,
            item,
            pointX,
            pointY;

        function draw1(point, intervalTime, time) {
            point = parseFloat(point);
            this.points.push(point);
            if (point > this.maxPoint) this.maxPoint = point;
            if (intervalTime > this.maxTime) this.maxTime = intervalTime;

            chartPoints = "", viewWidth = intervalTime / this.maxTime * this.elemWidth;
            viewHeight = this.elemHeight - 4;
            len = this.points.length;
            pointWidth = viewWidth / len;

            chartPoints += "0," + this.elemHeight;

            for (index = 0; index < len; index++) {
                item = this.points[index];

                pointX = (pointWidth * (index + 1)).toFixed(2);
                pointY = (viewHeight - item / this.maxPoint * viewHeight + 2).toFixed(2);

                if (index == 0) chartPoints += " 0," + pointY;
                chartPoints += " " + pointX + "," + pointY;
            }

            this.chart.setAttr("points", chartPoints + " " + pointX + "," + this.elemHeight);
            this.line.setAttr("points", chartPoints + " " + this.elemWidth + "," + pointY);
        }
        function draw2(point, intervalTime, time) {
            point = parseFloat(point);
            update = false;

            if (point > this.maxPoint) this.maxPoint = point, update = true;
            if (intervalTime > this.maxTime) this.maxTime = intervalTime;

            viewWidth = intervalTime / this.maxTime * this.elemWidth;
            viewHeight = this.elemHeight - 4;

            pointX = viewWidth.toFixed(2);
            pointY = (viewHeight - point / this.maxPoint * viewHeight + 2).toFixed(2);

            if (chartPoints.length == 0) {
                this.points.push({ value: point, x: 0 });
                chartPoints.push("0," + pointY);
            }

            if (time - this.lastTime < this.updateTime) {
                this.points[chartPoints.length - 1] = { value: point, x: pointX };
                chartPoints[chartPoints.length - 1] = pointX + "," + pointY;
            } else {
                this.points.push({ value: point, x: pointX });
                chartPoints.push(pointX + "," + pointY);
                this.lastTime = time;
            }

            if (update) {
                len = this.points.length;
                for (index = 0; index < len; index++) {
                    item = this.points[index];
                    pointY = (viewHeight - item.value / this.maxPoint * viewHeight + 2).toFixed(2);

                    chartPoints[index] = item.x + "," + pointY;
                }
            }

            _chartPoints = chartPoints.join(" ");

            this.chart.setAttr("points", "0," + this.elemHeight + " " + _chartPoints + (" " + pointX + "," + this.elemHeight));
            this.line.setAttr("points", _chartPoints + " " + this.elemWidth + "," + pointY);
        }

        this.open = function () {
            this.chart.setAttr("points", "");
            this.line.setAttr("points", "");
            this.elem.setAttr("viewBox", "0 0 " + this.elemWidth + " " + this.elemHeight);
            this.elem.removeClass("unseen");

            this.draw = _TestConfig2.default.runTime > 16000 || _TestConfig2.default.hearbeatTime < 80 ? draw2 : draw1;
        };
    }
    function startInterval() {
        intervalStarted = true;

        _App2.default.event("testStatus", { onprogress: true });

        var speedNumberElem = _TestConfig2.default.runType.download ? elem.speedDownloadNumber : elem.speedUploadNumber,
            runTime = _TestConfig2.default.runTime,
            resultsPrecision = _TestConfig2.default.resultsPrecision,


        // Iterval vars
        time = _App2.default.time(),
            intervalStartedTime,
            loadTime,
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
            transferTime: 0
        },
            bufferEnabled = _TestConfig2.default.bufferEnabled && _TestConfig2.default.runType.download,
            buffers = [{
            sizeTime: 2000,
            maxTime: 6000,
            startTime: globalLoadStartTime,
            loaded: 0,
            size: 0,
            speed: 0
        }, {
            sizeTime: 6000,
            maxTime: 16000,
            startTime: globalLoadStartTime,
            loaded: 0,
            size: 0,
            speed: 0
        }],
            buffer = {
            speed: 0
        },
            instant = {
            speed: 0,
            average: 0,
            calc: new averageSpeed()
        },
            average = {
            speed: 0,
            calc: new averageSpeed()
        },
            output = {
            speed: 0,
            speedRate: 0
        },
            took,
            it = 0;

        loadTime = time - globalLoadStartTime;

        graph = new drawGraph();
        graph.open();

        function consoleTime(time) {
            return (time / 1000).toFixed(time < 10000 ? 3 : 2);
        }
        function consoleSpeed(speed) {
            speed = speed / 125000;
            if (speed >= 10 && !took) took = true;
            return fixNumber(speed, took && speed < 10 ? 3 : 2);
        }
        function intervalCallback(closeInterval) {
            time = _App2.default.time();
            loadTime = time - globalLoadStartTime;
            intervalTime = time - intervalStartedTime;
            loaded = connections.loaded;
            transfer.transferred = loaded - prev.loaded;
            transfer.lastTime = transfer.transferred > 0 ? time : transfer.lastTime;
            transfer.time = time - transfer.lastTime;
            if (transfer.time > transfer.maxTime) transfer.maxTime = transfer.time;

            if (transfer.transferred > 0) {
                transfer.average.count += prev.transferTime;
                transfer.average.len += 1;
                transfer.average.time = transfer.average.count / (transfer.average.len - 1 || 1);

                //console.log(test.runType.download ? "[download]" : "[upload]", "average time:", Math.round(transfer.average.time), "max time:", transfer.maxTime)
            }

            buffer.speed = Math.max.apply(null, buffers.map(function (buffer, index) {
                buffer.size += transfer.transferred;
                buffer.loaded += transfer.transferred;

                buffer._sizeTime = index == 0 ? buffer.sizeTime + transfer.maxTime : buffer.sizeTime;

                if (intervalTime < buffer.maxTime && transfer.transferred && time - buffer.startTime > buffer._sizeTime) {
                    buffer.speed = buffer.size / (time - buffer.startTime);

                    buffer.size = buffer.speed * buffer._sizeTime;
                    buffer.startTime = time - buffer._sizeTime;

                    buffer.speed = buffer.size / (time - buffer.startTime);
                    buffer.loaded = buffer.speed * loadTime;
                }

                //buffer.speed = buffer.size / ((time - buffer.startTime) / 1000);
                buffer.speed = buffer.loaded / (loadTime / 1000);

                return buffer.speed;
            }));

            instant.speed = loaded / (loadTime / 1000);
            if (bufferEnabled) instant.speed = buffer.speed > instant.speed ? buffer.speed : instant.speed;

            instant.maxItems = loadTime > 2000 ? 6 : 4;
            instant.maxItems += Math.round(transfer.average.time / 80);
            instant.maxItems = instant.maxItems > 10 ? 10 : instant.maxItems;

            instant.average = instant.calc.get(instant.speed, instant.maxItems);
            average.speed = average.calc.get(instant.average, instant.maxItems);

            output.speedRate = speedRateMbps(_TestConfig2.default.outputSpeed == "average" ? average.speed : instant.speed);
            output.speed = fixNumber(output.speedRate, output.speedRate < 1 && resultsPrecision < 2 ? 2 : resultsPrecision);

            testConsole.state("instant: " + consoleSpeed(instant.speed) + "mbps, average: " + consoleSpeed(average.speed) + "mbps, time: " + consoleTime(loadTime) + "s, loaded: " + loadedData(loaded) + ", transf: " + transferredData(transfer.transferred));

            speedNumberElem.textContent(output.speed);
            elem.gauge.method("updateNumber", { number: output.speed, speedRate: output.speedRate });
            graph.draw(output.speedRate, intervalTime, time, closeInterval);

            if (it % 3 == 0) {
                elem.gauge.method("updateIcon");
            }

            prev.loaded = loaded;
            prev.transferTime = transfer.time;
            connections.speedRate = output.speedRate;
            it++;
        }
        function stopInterval() {
            stopTest();

            time = _App2.default.time();

            connections.requests.forEach(function (req, index) {
                if (req.id > 6) return;

                testConsole.state("request " + req.id + " loaded: " + loadedData(req.loaded) + ", max time: " + req.maxTransferTime + "ms" + (req.firstProgressTime ? ", avg time: " + Math.round((req.lastProgressTime - req.firstProgressTime) / (req.progressCount - 1 || 1)) + "ms" : "") + (req.id > connections.count ? " (added)" : ""));
            });

            testConsole.state("final speed: " + fixNumber(loaded / (loadTime / 1000) / 125000, 2) + "mbps, buffer 1: " + fixNumber(buffers[0].speed / 125000, 2) + "mbps (" + (time - buffers[0].startTime) + "), buffer 2: " + fixNumber(buffers[1].speed / 125000, 2) + "mbps (" + (time - buffers[1].startTime) + ")");

            testConsole.state("total loaded: " + loadedData(connections.loaded) + ", max time: " + transfer.maxTime + "ms, avg time: " + Math.round(transfer.average.time) + "ms");

            timer.timeout.stopInterval = setTimeout(function () {
                _App2.default.event("testStatus", { onprogress: false });
                elem.gauge.method("clear");

                timer.timeout.$progressEnd = setTimeout(progressEnd, 500);
            }, 500);
        }

        timer.timeout.startIntervalDelay = setTimeout(function () {
            intervalStartedTime = _App2.default.time();
            // start interval
            timer.interval.intervalHeartbeat = setInterval(intervalCallback, _TestConfig2.default.hearbeatTime);

            timer.timeout.stopInterval = setTimeout(function () {
                intervalCallback(true);
                stopInterval();
            }, runTime);

            //elem.gauge.method("listenSpeed");
        }, loadTime > 420 ? 1 : 420 - loadTime);

        clearTimeout(timer.timeout.runInterval);
    }
    function runInterval() {
        timer.timeout.runInterval = setTimeout(startInterval, 2000);
    }
    function requestConfig(req, url) {
        var target = _TestConfig2.default.runType.download ? req : req.upload,
            progressCount = 1,
            prev = { loaded: 0, progressTime: 0 },
            transfer = { transferred: 0, time: 0 },
            time;

        req.loaded = 0;
        req.id = connections.requests.length + 1;
        req.maxTransferTime = 0;
        req.firstProgressTime = 0;
        req.lastProgressTime = 0;
        req.progressCount = 1;

        target.addEventListener("progress", function (e) {
            time = _App2.default.time();
            if (!globalLoadStartTime) globalLoadStartTime = time, runInterval();
            transfer.transferred = e.loaded - prev.loaded;
            transfer.time = time - (prev.progressTime || time);
            if (transfer.time > req.maxTransferTime) req.maxTransferTime = transfer.time;
            if (progressCount > 1 || 1) req.loaded += transfer.transferred, connections.loaded += transfer.transferred;
            req.lastProgressTime = time;
            req.progressCount = progressCount;

            if (!intervalStarted && progressCount == 4) startInterval();
            if (progressCount == 1) {
                req.id <= connections.count && testConsole.state("request " + req.id + " first transfer: " + transferredData(e.loaded));
                req.firstProgressTime = time;
            }

            prev.loaded = e.loaded;
            prev.progressTime = time;
            progressCount++;
        });
        target.addEventListener("load", function () {
            connections.addRequest(true, url, true);
        });
    }

    this.events = {
        speedTestViewInterfaz: function speedTestViewInterfaz() {
            elem.testStage[_TestConfig2.default.viewInterfaz == 1 ? "removeClass" : "addClass"]("view2-jGuh6");
        },
        initializeTest: function initializeTest() {
            var runType, gaugeNode;

            clearResults();

            _App2.default.event("speedTestSettings");

            toggleConnectionsMode();

            runType = _TestConfig2.default.mode == "1" || _TestConfig2.default.mode == "2" ? "download" : "upload";

            gaugeNode = (0, _App.createElement)(_GaugeContainer2.default, { animate: true, loadType: runType });

            elem.gauge = _App2.default.element(gaugeNode);

            elem.startWrapper.append(gaugeNode).addClass("open-m6jHb");

            timer.timeout.runTest = setTimeout(function () {
                _App2.default.event("runTest", { runType: runType });
            }, 1050);

            _App2.default.event("testStatus", { opened: true, finished: false });
        },
        runTest: function runTest(e) {
            _TestConfig2.default.runType.set(e.runType);

            //timer.timeout.closeTest = setTimeout(function(){ app.event("closeTest"), closeGauge(); }, 3000);
            //return;

            var uploadData = _TestConfig2.default.runType.download ? null : [_TestConfig2.default.uploadData.$30, _TestConfig2.default.uploadData.$99],
                i;

            testConsole.state("starting measures...");

            connections = {
                server: _TestConfig2.default.servers[_TestConfig2.default.selectedServer],
                preconnect: { requests: [], success: 0 },
                requests: [],
                count: _TestConfig2.default.connections.count,
                loaded: 0,
                speedRate: 0,
                addRequest: function addRequest(send, url, upload) {
                    connections.requests.push(_App2.default.fetch({
                        xhr: function xhr(_xhr) {
                            requestConfig(_xhr, url);
                        },
                        url: url,
                        get: { v: _App2.default.random() },
                        post: uploadData ? uploadData[upload ? 1 : 0] : null,
                        fail: isLocal ? null : breakTest,
                        send: send
                    }));
                }
            };
            globalLoadStartTime = 0;
            intervalTime = 0;
            intervalStarted = false;

            function sendRequests(requests) {
                var len = requests.length;
                for (i = 0; i < len; i++) {
                    requests[i]._send();
                }
            }
            function startConnections() {
                var index,
                    isDownload = _TestConfig2.default.runType.download,
                    servers = [],
                    serverItem = 0,
                    serverUrl = 0,
                    serverIndex = 0,
                    serverLen = 0,
                    preconnectUrl = 0;

                if (connections.server.multi && isDownload) {
                    servers = connections.server.multi;
                } else {
                    servers.push(connections.server);
                }

                serverLen = servers.length;

                for (index = 0; index < connections.count; index++) {
                    serverItem = servers[serverIndex];
                    serverUrl = serverItem[isDownload ? "download" : "upload"];
                    preconnectUrl = serverItem["preconnect"];

                    connections.preconnect.requests.push(_App2.default.fetch({
                        url: preconnectUrl ? preconnectUrl : serverUrl,
                        get: { v: _App2.default.random() },
                        type: preconnectUrl ? "GET" : "HEAD",
                        done: function done(status) {
                            if (status == 0) return breakTest();
                            connections.preconnect.success += 1;
                            if (connections.preconnect.success == connections.count) {
                                setTimeout(function () {
                                    sendRequests(connections.requests);
                                }, 1);
                            }
                        },
                        send: false
                    }));

                    connections.addRequest(false, serverUrl);

                    serverIndex = serverIndex == serverLen - 1 ? 0 : serverIndex + 1;
                }

                sendRequests(connections.preconnect.requests);
            }

            startConnections();
        },
        consoleToggle: function consoleToggle(e) {
            elem.consoleWrapper.toggleClass("hidden");
            elem.console.scrollTop(elem.console.scrollHeight());
        }
    };
    this.closeStage = function (e) {
        e.preventDefault();

        if (elem.stageClose.isActive) {
            return;
        }
        elem.stageClose.isActive = true;

        stopTest();
        clearTimers();

        elem.testStage.style({ opacity: 0, pointerEvents: "none" });

        setTimeout(function () {
            _App2.default.event("testStatus", { started: false, opened: false, finished: false, onprogress: false });
            _App2.default.event("renderStage", { fadeIn: 1 });
        }, 300);
    };
    this.onMount = function () {
        if (!_TestConfig2.default.user.ip) {
            var http = window.location.protocol == "http:";
            _App2.default.fetch({
                url: http ? "http://ip-api.com/json/" : "https://ipapi.co/json/",
                success: function success(fetch) {
                    showUserProvider(_App2.default.ucWords(http ? fetch.isp : fetch.org), http ? fetch.query : fetch.ip);
                }
            });
        }
    };

    return (0, _App.createElement)(elem.testStage, { className: "stage-Kbsc8 testStage" + (props.fadeIn ? " fadeIn" : "") + (_TestConfig2.default.viewInterfaz == 2 ? " view2-jGuh6" : ""), events: this.events, onMount: this.onMount }, (0, _App.createElement)("div", { className: "testContainer-y5vpt" }, (0, _App.createElement)("section", { className: "resultsArea" }, (0, _App.createElement)("div", { className: "resultsContainer" }, (0, _App.createElement)("div", { className: "stageClose-eJsd" }, (0, _App.createElement)(elem.stageClose, { className: "closeButton-fQtb", title: "Cerrar Prueba", "aria-label": "Cerrar Prueba", onclick: this.closeStage }, (0, _App.svgIcon)("close"))), (0, _App.createElement)(elem.resultsContainer, { className: "resultsData" }, (0, _App.createElement)(elem.resultDownload, { className: "resultItem resultDownload" }, (0, _App.createElement)("div", { className: "resultContainer" }, (0, _App.createElement)("div", { className: "resultHeader" }, (0, _App.createElement)("div", { className: "resultIcon" }, (0, _App.svgIcon)("downlink")), (0, _App.createElement)("div", { className: "resultTitle" }, (0, _App.createElement)("b", { textContent: "DESCARGAR" })), (0, _App.createElement)("div", { className: "resultUnit textHolder", textContent: "Mbps" })), (0, _App.createElement)("div", { className: "resultBody" }, (0, _App.createElement)(elem.speedDownloadNumber, { className: "resultValue valueNumber-vgKp", textContent: "- -" })), (0, _App.createElement)("div", { className: "resultGraph" }, (0, _App.svgIcon)("resultGraph", 0)))), (0, _App.createElement)(elem.resultUpload, { className: "resultItem resultUpload" }, (0, _App.createElement)("div", { className: "resultContainer" }, (0, _App.createElement)("div", { className: "resultHeader" }, (0, _App.createElement)("div", { className: "resultIcon" }, (0, _App.svgIcon)("uplink")), (0, _App.createElement)("div", { className: "resultTitle" }, (0, _App.createElement)("b", { textContent: "SUBIR" })), (0, _App.createElement)("div", { className: "resultUnit textHolder", textContent: "Mbps" })), (0, _App.createElement)("div", { className: "resultBody" }, (0, _App.createElement)(elem.speedUploadNumber, { className: "resultValue valueNumber-vgKp", textContent: "- -" })), (0, _App.createElement)("div", { className: "resultGraph" }, (0, _App.svgIcon)("resultGraph", 1))))))), (0, _App.createElement)("main", { className: "stageMain size-ghjk" }, (0, _App.createElement)(elem.startWrapper, { className: "startWrapper" }, (0, _App.createElement)(_StartButton2.default, { textContent: "COMENZAR", action: 1 })))), (0, _App.createElement)(elem.consoleWrapper, { className: "testConsoleWrapper hidden" }, (0, _App.createElement)("div", { className: "console-e2Lfg" }, (0, _App.createElement)("button", { className: "consoleButton-mHsq", onclick: testConsole.scroll }), (0, _App.createElement)(elem.console, { className: "console-Sq3NP", readonly: "", spellcheck: "false", value: "waiting to start the test..." }))), (0, _App.createElement)("footer", { className: "stage-footer" }, (0, _App.createElement)("div", { className: "footerItem" }, (0, _App.createElement)("div", { className: "footerItem-details" }, (0, _App.createElement)("div", { className: "footerItem-icon" }, (0, _App.svgIcon)("user")), (0, _App.createElement)("div", { className: "footerItem-content" }, (0, _App.createElement)(elem.ispName, { className: "footerItem-title ispName", textContent: _TestConfig2.default.user.isp || "- -" }), (0, _App.createElement)(elem.publicIp, { className: "footerItem-description textHolder" + (_TestConfig2.default.user.ip && _TestConfig2.default.user.ip.split("").indexOf(":") > -1 ? " hidden" : ""), textContent: _TestConfig2.default.user.ip || "- -" })))), (0, _App.createElement)("div", { className: "footerItem" }, (0, _App.createElement)("div", { className: "footerItem-details" }, (0, _App.createElement)("div", { className: "footerItem-icon" }, (0, _App.svgIcon)("connections")), (0, _App.createElement)("div", { className: "footerItem-content" }, (0, _App.createElement)("div", { className: "footerItem-title", textContent: "Conexiones" }), (0, _App.createElement)("div", { className: "footerItem-description" }, (0, _App.createElement)("div", { className: "testModeToggle-wrapper" }, (0, _App.createElement)(elem.multiModeButton, { className: "testModeToggle-button" + (_TestConfig2.default.connections.count > 1 ? " active" : ""), textContent: "Multi", onclick: function onclick() {
            toggleConnectionsMode(_TestConfig2.default.connections.default);
        } }), (0, _App.createElement)("span", { className: "testModeToggle-divider textHolder", textContent: "•" }), (0, _App.createElement)(elem.singleModeButton, { className: "testModeToggle-button" + (_TestConfig2.default.connections.count == 1 ? " active" : ""), textContent: "Unica", onclick: function onclick() {
            toggleConnectionsMode(1);
        } }))))))));
};

exports.default = TestStage;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StartButton(props) {
    var elem = {
        startButton: (0, _App.createRef)("button"),
        buttonText: (0, _App.createRef)("div")
    },
        action = false;

    this.handleClick = function () {
        if (action) {
            return;
        }
        action = true;
        _App2.default.event("initializeTest");
    };

    return (0, _App.createElement)(elem.startButton, { className: "startButton", ariaLabel: props.textContent, onclick: this.handleClick }, (0, _App.createElement)(elem.buttonText, { className: "buttonText", textContent: props.textContent }), (0, _App.createElement)("div", { className: "buttonBorder" }), props.action == 1 ? (0, _App.createElement)("div", { className: "buttonAnimatedBorder" }) : null);
}

exports.default = StartButton;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

var _TestConfig = __webpack_require__(4);

var _TestConfig2 = _interopRequireDefault(_TestConfig);

var _StartButton = __webpack_require__(6);

var _StartButton2 = _interopRequireDefault(_StartButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GaugeContainer(props) {
    var increments = _TestConfig2.default.increments,
        incrementsLen = _TestConfig2.default.increments.length,
        firstIncrement = _TestConfig2.default.increments[0],
        lastIncrement = _TestConfig2.default.increments[_TestConfig2.default.increments.length - 1],
        incrementsRefPercent = 100 / (_TestConfig2.default.increments.length - 1),
        elem = {
        gaugeContainer: (0, _App.createRef)("div"),
        gaugeState: (0, _App.createRef)("div"),
        speedDetailsNumber: (0, _App.createRef)("div"),
        incrementsContainer: (0, _App.createRef)("div"),
        gaugeNeedle: (0, _App.createRef)("div"),
        gaugeIcon: (0, _App.createRef)("div"),
        gaugeCircleSpeed: 0,
        speedDatils: (0, _App.createRef)("div")
    },
        currentSpeed,
        prevSpeed,
        activeIncrements,
        gaugePercent,
        circleOffset,
        needleRotate,
        listenInterval = null;

    function calcGaugePercent(speedRate) {
        var index,
            item,
            percent = 0,
            currentIncrementPercent,
            currentIncrementValue;

        if (speedRate >= lastIncrement) return 100;
        if (speedRate <= 0) return percent;

        for (index = 0; index < incrementsLen; index++) {
            item = increments[index];
            if (speedRate < item) {
                currentIncrementValue = increments[index - 1];
                currentIncrementPercent = (speedRate - currentIncrementValue) / (item - currentIncrementValue) * incrementsRefPercent;

                percent = currentIncrementPercent + incrementsRefPercent * (index - 1);

                return percent;
            }
        }
        return percent;
    }

    function _updateNumber(value, speedRate) {
        currentSpeed = speedRate;

        elem.speedDetailsNumber.textContent(value);
    }
    function _updateIcon() {
        if (prevSpeed != currentSpeed) {
            activeIncrements = "";

            increments.forEach(function (item, index) {
                if (currentSpeed >= item && currentSpeed > firstIncrement) activeIncrements += " incrementOn--" + index;
            });

            gaugePercent = calcGaugePercent(currentSpeed);
            circleOffset = _TestConfig2.default.gaugeCircleOffsetRef * gaugePercent / 100 + _TestConfig2.default.gaugeCircleStrokeMin;
            needleRotate = _TestConfig2.default.gaugeNeedleRotateRef * gaugePercent / 100 + _TestConfig2.default.gaugeNeedleRotateMin;

            elem.gaugeCircleSpeed.setAttr("stroke-dashoffset", circleOffset);
            elem.gaugeNeedle.style({ transform: "rotate(" + needleRotate + "deg)" });
            elem.incrementsContainer.className("incrementsContainer" + activeIncrements);

            prevSpeed = currentSpeed;
        }
    }
    function gaugeDashoffset(speedRate) {
        currentSpeed = speedRate;
        _updateIcon();
    }

    this.methods = {
        loadType: function loadType(e) {
            elem.gaugeContainer.removeClass("download-QvMr", "upload-QvMr").addClass(e.type + "-QvMr");
        },
        listenSpeed: function listenSpeed() {
            listenInterval = setInterval(_updateIcon, 200);
        },
        updateNumber: function updateNumber(e) {
            _updateNumber(e.number, e.speedRate);
        },
        updateIcon: function updateIcon() {
            _updateIcon();
        },
        update: function update(e) {
            _updateNumber(e.number, e.speedRate);
            _updateIcon();
        },
        clear: function clear() {
            elem.gaugeContainer.addClass("clear-QvMr");

            clearInterval(listenInterval);
            _updateNumber("0.0", "0.0");
            _updateIcon();

            setTimeout(function () {
                elem.gaugeContainer.removeClass("clear-QvMr");
            }, 400);
        },
        removeGauge: function removeGauge() {
            elem.gaugeContainer.remove();
        }
    };
    this.onMount = function () {
        elem.gaugeCircleSpeed = elem.gaugeIcon.find("gaugeCircleCurrentSpeed");
    };
    this.onDismount = function () {
        clearInterval(listenInterval);
    };

    return (0, _App.createElement)(elem.gaugeContainer, { className: "gaugeContainer " + (props.loadType === void 0 ? "download" : props.loadType) + "-QvMr" + (props.animate ? " animate-QvMr" : ""), methods: this.methods, onMount: this.onMount, onDismount: this.onDismount }, (0, _App.createElement)(elem.gaugeIcon, { className: "gaugeAnim gaugeIcon" }, (0, _App.svgIcon)("gaugeVector")), (0, _App.createElement)("div", { className: "gaugeInner" }, (0, _App.createElement)(elem.incrementsContainer, { className: "incrementsContainer" }, increments.map(function (num, i) {
        return (0, _App.createElement)("div", { className: "increment increment--" + i, textContent: num });
    })), (0, _App.createElement)(elem.gaugeNeedle, { className: "gaugeNeedle" }, (0, _App.svgIcon)("gaugeNeedle")), (0, _App.createElement)(elem.gaugeState, { className: "gaugeState" }, (0, _App.createElement)(elem.speedDatils, { className: "speedDetailsContainer" }, (0, _App.createElement)(elem.speedDetailsNumber, { className: "speedDetailsNumber valueNumber-vgKp" }, (0, _App.createElement)("span", { textContent: "0.0" })), (0, _App.createElement)("div", { className: "speedDetailsUnit" }, (0, _App.createElement)("span", { className: "speedDetailsIcon" }, (0, _App.svgIcon)("uplink")), (0, _App.createElement)("span", { className: "textHolder", textContent: "Mbps" }))))));
}

exports.default = GaugeContainer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

var _TestConfig = __webpack_require__(4);

var _TestConfig2 = _interopRequireDefault(_TestConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PingItem(props) {
    var elem = {
        pingItem: (0, _App.createRef)("div"),
        minValue: (0, _App.createRef)("b"),
        avgValue: (0, _App.createRef)("b"),
        maxValue: (0, _App.createRef)("b"),
        jitterValue: (0, _App.createRef)("b"),
        graphInner: (0, _App.createRef)("div"),
        graphTooltip: (0, _App.createRef)("div"),
        graphTooltipItem: (0, _App.createRef)("div"),
        graphTooltipValue: (0, _App.createRef)("div"),
        lineWrapper: (0, _App.createRef)("svg"),
        graphLine: (0, _App.createRef)("polyline")
    },
        graphItems = _TestConfig2.default.ping.graphItems.map(function (item, index) {
        return _TestConfig2.default.ping.graphVisibleItems.indexOf(index) > -1 ? (0, _App.createElement)("div", { index: index, a: "" }) : (0, _App.createElement)("div", { index: index });
    }),
        startedTime = _App2.default.time(),
        measures = {
        progressMode: props.progressMode,
        sendCount: 0,
        sendTime: 0,
        ping: {
            start: 0,
            end: 0,
            time: 0,
            count: 0
        },
        min: {
            value: Infinity
        },
        avg: {
            value: 0,
            count: 0,
            items: []
        },
        max: {
            value: 0
        },
        jitter: {
            value: 0
        },
        results: [],
        connection: null
    },
        graph = {
        values: [],
        maxValue: 50
    },
        tooltipIndex,
        mousePosX,
        timeout = {
        ping: null
    },
        abs = Math.abs,
        hasPerformance = "performance" in window && performance.getEntriesByType && performance.getEntriesByType("resource");

    function finishMeasures() {
        clearTimeout(timeout.ping);
        measures.connection && measures.connection.abort();
        measures.wsconnection && measures.wsconnection.close();
        _App2.default.event("pingTestFinished");
    }
    function updateGraphTooltip() {
        if (tooltipIndex) {
            elem.graphTooltipItem.textContent(tooltipIndex);
            elem.graphTooltipValue.textContent("ping: " + graph.values[tooltipIndex] + " ms");
        }

        var parentPos = elem.graphInner.node.getBoundingClientRect(),
            tooltipWidth = elem.graphTooltip.width(),
            posX = mousePosX - parentPos.left + 20;

        if (mousePosX > parentPos.right - (tooltipWidth + 30)) {
            posX = mousePosX - parentPos.left - tooltipWidth - 20;
        }

        elem.graphTooltip.style({ left: posX + "px" });
    }
    function drawGraph(value) {
        if (!isNaN(value)) {
            graph.values.push(value);
            if (graph.values.length > 100) {
                graph.values.splice(0, 90);
            }
            if (value > graph.maxValue) {
                graph.maxValue = value;
            }
        }

        var chartPoints = "",
            portWidth = elem.graphInner.width(),
            portHeight = elem.graphInner.height() - 25,
            pointWidth = portWidth / _TestConfig2.default.ping.graphItems.length,
            index,
            len = graph.values.length,
            item,
            pointX,
            pointY;

        for (index = 0; index < len; index++) {
            item = graph.values[index];

            pointX = (pointWidth * index + 0.5).toFixed(2);
            pointY = (portHeight - item / graph.maxValue * portHeight).toFixed(2);

            chartPoints += " " + pointX + "," + pointY;
        }

        elem.graphLine.setAttr("points", chartPoints);
    }
    function adjustGraph() {
        elem.lineWrapper.setAttr("viewBox", "0 0 " + elem.graphInner.width() + " " + elem.graphInner.height());
    }
    function calcJitter(values) {
        var count = 0,
            countLen = 0,
            index,
            len = values.length;
        if (len > 1) {
            for (index = 0; index < len; index++) {
                if (index != len - 1) {
                    count += abs(values[index].value - values[index + 1].value);
                    countLen++;
                }
            }
        }
        return count / (countLen || 1);
    }
    function handlePing(pingTime) {
        var time = _App2.default.time();

        measures.ping.count += 1;

        if (pingTime < measures.min.value) {
            measures.min.value = pingTime;
        }
        if (pingTime > measures.max.value) {
            measures.max.value = pingTime;
        }

        measures.avg.items.push({ value: pingTime, time: time });
        measures.avg.count += pingTime;
        if (measures.avg.items.length > 100 /*&& measures.avg.items[measures.avg.items.length - 1].time - measures.avg.items[1].time >= 6000*/) {
                measures.avg.count -= measures.avg.items[0].value;
                measures.avg.items.splice(0, 1);
            }

        measures.avg.value = measures.avg.count / measures.avg.items.length;
        measures.jitter.value = calcJitter(measures.avg.items);

        elem.minValue.textContent(measures.min.value + " ms");
        elem.avgValue.textContent(measures.avg.value.toFixed(1) + " ms");
        elem.maxValue.textContent(measures.max.value + " ms");
        elem.jitterValue.textContent(measures.jitter.value.toFixed(1) + " ms");

        measures.results.push(pingTime);

        if (measures.results.length > _TestConfig2.default.ping.graphItemsLen) {
            measures.results.splice(0, 1);
        }

        drawGraph(pingTime);
        updateGraphTooltip();

        if (time - startedTime > 12000 + measures.max.value && !_TestConfig2.default.ping.completeAll || measures.ping.count >= _TestConfig2.default.ping.results) {
            finishMeasures();
            return false;
        }
        return true;
    }
    function httpping() {
        var xhr = new XMLHttpRequest(),
            progress = 0,
            time,
            startTime,
            endTime,
            pingTime,
            ping0 = Infinity,
            ping1 = Infinity;

        xhr.open(measures.connectionType, measures.connectionUrl + measures.connectionPrefix + "v=" + _App2.default.random(), true);

        if (measures.progressMode) {
            xhr.onprogress = function () {
                time = _App2.default.time();
                endTime = time;
                progress += 1;

                pingTime = endTime - startTime;

                if (progress <= 2 && measures.sendCount == 1) {
                    startedTime = time;
                } else if (progress > 1) {
                    handlePing(Math.max(pingTime, 50));
                }

                startTime = time;
            };
            xhr.onload = httpping;
        } else {
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 2) {
                    if (xhr.status == 200 || xhr.status == 204) {
                        endTime = _App2.default.time();
                        ping0 = endTime - startTime;

                        if (hasPerformance) {
                            var entries = performance.getEntriesByType("resource");
                            if (entries.length > 0) {
                                var timing = entries[entries.length - 1];

                                ping1 = parseInt((timing.responseStart || timing.responseEnd) - (timing.requestStart || timing.fetchStart));

                                if (typeof performance.clearResourceTimings == "function") {
                                    performance.clearResourceTimings();
                                }
                            }
                        }
                        pingTime = Math.min(ping0, ping1);
                        //console.log("ping 0:", ping0 + "ms", " ping 1:", ping1 + "ms");
                        if (measures.sendCount == 1) {
                            return httpping();
                        }
                        timeout.ping = setTimeout(function () {
                            if (handlePing(pingTime)) {
                                httpping();
                            }
                        }, Math.max(60 - pingTime, 0));
                    } else {
                        finishMeasures();
                    }
                }
            };
        }

        xhr.onerror = finishMeasures;
        xhr.ontimeout = finishMeasures;

        measures.connection = xhr;

        xhr.send();

        if (measures.sendCount <= 2) startedTime = _App2.default.time();
        measures.sendCount += 1;
        startTime = _App2.default.time();
    }
    function wsping() {
        var ws = new WebSocket(measures.wsping),
            message = 0,
            startTime,
            endTime,
            pingTime;

        function send() {
            ws.send(measures.wsmessage ? measures.wsmessage : message);
            startTime = _App2.default.time();
            message = message == 9 ? 0 : message + 1;
        }

        ws.onopen = function () {
            startedTime = _App2.default.time();
            send();
        };

        ws.onmessage = function () {
            endTime = _App2.default.time();
            pingTime = endTime - startTime;
            timeout.ping = setTimeout(function () {
                if (handlePing(pingTime)) {
                    send();
                }
            }, Math.max(60 - pingTime, 0));
        };

        ws.onerror = finishMeasures;

        measures.wsconnection = ws;
    }
    function graphMouseMove(e) {
        elem.graphTooltip.removeClass("unseen-u");

        tooltipIndex = e.target.getAttribute("index");
        mousePosX = e.clientX;

        updateGraphTooltip();
    }
    function graphMouseOut() {
        elem.graphTooltip.addClass("unseen-u");
    }
    function deleteResult() {
        elem.pingItem.addClass("close");
        setTimeout(function () {
            finishMeasures();
            _App2.default.event("deletePingResult", { id: props.id });
        }, 300);
    }
    function startMeasures() {
        startedTime = _App2.default.time();
        if (_TestConfig2.default.ping.server.wsping) {
            measures.wsping = _TestConfig2.default.ping.server.wsping;
            measures.wsmessage = _TestConfig2.default.ping.server.wsmessage;
        } else {
            measures.connectionUrl = measures.progressMode ? _TestConfig2.default.ping.server.download : _TestConfig2.default.ping.server.ping;
            measures.connectionType = measures.progressMode ? "GET" : "HEAD";
            measures.connectionPrefix = measures.connectionUrl.indexOf("?") > -1 ? "&" : "?";
        }

        if (measures.wsping) {
            return wsping();
        }
        httpping();
    }

    this.onMount = function () {
        startMeasures();
        adjustGraph();
    };
    this.events = {
        appResize: function appResize() {
            adjustGraph();
            drawGraph();
        }
    };

    return (0, _App.createElement)(elem.pingItem, { className: "pingItem-e3Lhk", onMount: this.onMount, events: this.events }, (0, _App.createElement)("div", { className: "results-viKtf" }, (0, _App.createElement)("div", { className: "serverDetails-twBep" }, (0, _App.createElement)("button", { className: "closeButton-twBep", title: "Delete result", onclick: deleteResult }, (0, _App.svgIcon)("close")), (0, _App.createElement)("div", { className: "serverName-twBep", textContent: _TestConfig2.default.ping.server.name })), (0, _App.createElement)("div", { className: "results-hn8Gk" }, (0, _App.createElement)("div", { className: "result-x3Ayv" }, (0, _App.createElement)("span", { textContent: "min: " }), (0, _App.createElement)(elem.minValue, { textContent: "-- ms" })), (0, _App.createElement)("div", { className: "result-x3Ayv" }, (0, _App.createElement)("span", { textContent: "avg: " }), (0, _App.createElement)(elem.avgValue, { textContent: "-- ms" })), (0, _App.createElement)("div", { className: "result-x3Ayv" }, (0, _App.createElement)("span", { textContent: "max: " }), (0, _App.createElement)(elem.maxValue, { textContent: "-- ms" })), (0, _App.createElement)("div", { className: "result-x3Ayv" }, (0, _App.createElement)("span", { textContent: "jitter: " }), (0, _App.createElement)(elem.jitterValue, { textContent: "-- ms" })))), (0, _App.createElement)("div", { className: "graphWrapper-viKtf" }, (0, _App.createElement)("div", { className: "graph-o1wfv" }, (0, _App.createElement)(elem.graphInner, { className: "graphInner-o1wfv", onmousemove: graphMouseMove, onmouseout: graphMouseOut }, (0, _App.createElement)("div", { className: "graphItems-o1wfv" }, graphItems), (0, _App.createElement)(elem.lineWrapper, { class: "lineWrapper-dnXzj" }, (0, _App.createElement)(elem.graphLine, { points: "" })), (0, _App.createElement)(elem.graphTooltip, { className: "graphTooltip-o1wfv unseen-u" }, (0, _App.createElement)(elem.graphTooltipItem, { className: "tooltipItem-o1wfv", textContent: "0" }), (0, _App.createElement)(elem.graphTooltipValue, { className: "tooltipValue-o1wfv", textContent: "ping: undefined ms" }))))));
}

function PingStage() {
    var elem = {
        start: (0, _App.createRef)("div"),
        startButton: (0, _App.createRef)("button"),
        serverDetails: (0, _App.createRef)("div"),
        selectServer: (0, _App.createRef)("select"),
        settingsButton: (0, _App.createRef)("button"),
        settingsMenu: (0, _App.createRef)("div"),
        completeAll: (0, _App.createRef)("input"),
        progressMode: (0, _App.createRef)("input"),
        resultsCount: (0, _App.createRef)("select"),
        pingItems: (0, _App.createRef)("div")
    },
        testStarted = false,
        pingItems = [],
        itemId = 0;

    function testFinished() {
        elem.start.removeClass("disabled");
        testStarted = false;
    }
    function startTest() {
        if (testStarted) return;

        elem.start.addClass("disabled");

        testStarted = true;
        _TestConfig2.default.ping.completeAll = elem.completeAll.checked();
        if (elem.resultsCount.value() != "") _TestConfig2.default.ping.results = _App2.default.parseInt({ value: elem.resultsCount.value(), min: 50, max: 1000, default: 100 });

        itemId += 1;

        var item = (0, _App.createElement)(PingItem, { id: itemId, progressMode: elem.progressMode.checked() }),
            el = (0, _App.element)(item);

        el.id = itemId;

        pingItems.push(el);
        if (pingItems.length > 6) {
            pingItems[0].remove();
            pingItems.splice(0, 1);
        }
        elem.pingItems.prepend(item);
    }
    function changeServer() {
        if (_TestConfig2.default.ping.servers[elem.selectServer.value()]) {
            _TestConfig2.default.ping.server = _TestConfig2.default.ping.servers[elem.selectServer.value()];
            elem.serverDetails.textContent(_TestConfig2.default.ping.server.name);
        }
    }
    function toggleSettingsMenu() {
        elem.settingsMenu.style({ display: elem.settingsMenu.style("display") == "none" ? "block" : "none" });
    }
    function deletePingResult(e) {
        pingItems.forEach(function (item, index) {
            if (e.id == item.id) {
                item.remove();
                pingItems.splice(index, 1);
            }
        });
    }

    elem.progressMode.handleClick = function () {
        var checked = elem.progressMode.checked(),
            child,
            value;
        elem.selectServer.node.childNodes.forEach(function (item, index) {
            child = elem.selectServer.child(index);
            value = child.attr("value");
            child.style({ display: checked && _TestConfig2.default.ping.servers[value].download === void 0 ? "none" : "block" });
            if (child.selected() && _TestConfig2.default.ping.servers[value].download === void 0) {
                elem.selectServer.child(1).selected(true);
                changeServer();
            }
        });
    };

    this.events = {
        pingTestFinished: testFinished,
        deletePingResult: deletePingResult
    };
    this.onMount = function () {};

    return (0, _App.createElement)("div", { className: "stage-Kbsc8 pingStage", events: this.events, onMount: this.onMount }, (0, _App.createElement)(elem.start, { className: "start-inBnq" }, (0, _App.createElement)("div", { className: "contents-vr4n" }, (0, _App.createElement)(elem.startButton, { className: "startButton-twMcg", textContent: "start", onclick: startTest }), (0, _App.createElement)("div", { className: "selectedServer-xncHv" }, (0, _App.createElement)(elem.serverDetails, { className: "serverDetails-xncHv", textContent: _TestConfig2.default.ping.server.name }), (0, _App.createElement)("div", { className: "testSettings-qRnpi" }, (0, _App.createElement)("div", { className: "changeServer-xncHv" }, (0, _App.createElement)(elem.selectServer, { className: "select-fquMx", onchange: changeServer }, _TestConfig2.default.ping.servers.map(function (item, index) {
        if (!isLocal && index == 0) return null;
        return (0, _App.createElement)("option", { value: index, textContent: item.name, selected: item.name == _TestConfig2.default.ping.server.name ? "selected" : null });
    })), (0, _App.createElement)("button", { className: "changeButton-xncHv", textContent: "Change server" })), (0, _App.createElement)("div", { className: "buttonWrapper-xvYef" }, (0, _App.createElement)(elem.settingsButton, { className: "button-xvYef", title: "Test settings", onclick: toggleSettingsMenu }, (0, _App.svgIcon)("settings")), (0, _App.createElement)(elem.settingsMenu, { className: "menu-jrbk", style: "display: none;" }, (0, _App.createElement)("div", { className: "menuInner-jrbk" }, (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("span", { textContent: "Complete all:" }), (0, _App.createElement)(elem.completeAll, { type: "checkbox" })), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("span", { textContent: "Results:" }), (0, _App.createElement)(elem.resultsCount, {}, (0, _App.createElement)("option", { value: "100", textContent: "100", selected: "" }), (0, _App.createElement)("option", { value: "190", textContent: "190" }), (0, _App.createElement)("option", { value: "280", textContent: "280" }), (0, _App.createElement)("option", { value: "460", textContent: "460" }), (0, _App.createElement)("option", { value: "920", textContent: "920" }))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("span", { textContent: "Progress mode:" }), (0, _App.createElement)(elem.progressMode, { type: "checkbox", onclick: elem.progressMode.handleClick }))), (0, _App.createElement)("div", { className: "menuOverlay-jrbk", onclick: toggleSettingsMenu }))))))), (0, _App.createElement)(elem.pingItems, { className: "pingItems-id3Lk" }));
};

exports.default = PingStage;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

var _TestConfig = __webpack_require__(4);

var _TestConfig2 = _interopRequireDefault(_TestConfig);

var _GaugeContainer = __webpack_require__(7);

var _GaugeContainer2 = _interopRequireDefault(_GaugeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NetworkStage(props) {
    var elem = {
        networkStage: (0, _App.createRef)("div"),
        startButton: (0, _App.createRef)("button"),
        urlInput: (0, _App.createRef)("input"),
        selectUrlButton: (0, _App.createRef)("button"),
        selectUrlMenu: (0, _App.createRef)("div"),
        requestsCount: (0, _App.createRef)("input"),
        persistentMode: (0, _App.createRef)("input"),
        preventClose: (0, _App.createRef)("input"),
        uploadMode: (0, _App.createRef)("input"),
        content: (0, _App.createRef)("div"),
        gauge: (0, _App.$)((0, _App.createElement)(_GaugeContainer2.default)),
        recordButton: (0, _App.createRef)("a"),
        console: (0, _App.createRef)("textarea"),
        doneRequestsButton: (0, _App.createRef)("button"),
        doneRequests: (0, _App.createRef)("span"),
        doneRequestsMenu: (0, _App.createRef)("div"),
        doneRequestsSwitch: (0, _App.createRef)("input"),
        doneRequestsGroupOne: (0, _App.createRef)("div"),
        doneRequestsItemsOne: (0, _App.createRef)("div"),
        doneRequestsLoadedOne: (0, _App.createRef)("textarea"),
        doneRequestsGroupTwo: (0, _App.createRef)("div"),
        doneRequestsItemsTwo: (0, _App.createRef)("div"),
        doneRequestsLoadedTwo: (0, _App.createRef)("textarea"),
        currentRequests: (0, _App.createRef)("span"),
        activeRequests: (0, _App.createRef)("span")
    },
        currentRequestsCount,
        measures = {
        loaded: 0,
        speedRate: 0,
        recordConsole: true
    },
        mconsole,
        getTime = Date.now,
        random = Math.random,
        fixNumber = _App2.default.fixNumber,
        reqId = 0,
        currentRequests = {},
        interval,
        preconnectTimeout = null;

    mconsole = function () {
        var consoleLines = [],
            consoleInner = "",
            scrollTop,
            scrollHeight,
            elemHeight;

        function _log(data) {
            scrollHeight = elem.console.scrollHeight();
            scrollTop = elem.console.scrollTop();
            elemHeight = elem.console.offsetHeight();

            if (scrollTop > scrollHeight - elemHeight - 10) {
                consoleLines.push(data);
                if (consoleLines.length > 200) {
                    consoleLines.splice(0, 1);
                    consoleInner = consoleLines.join("\n");
                } else {
                    consoleInner += (consoleInner == "" ? "" : "\n") + data;
                }
                elem.console.value(consoleInner);
                elem.console.scrollTop(elem.console.scrollHeight());
            }
        }

        return {
            log: function log(data) {
                _log(data);
            },
            state: function state(data) {
                data = "[measures] " + data;
                _log(data);
            },
            clear: function clear() {
                consoleInner = "";
                consoleLines = [];
                elem.console.value(consoleInner);
            },
            scroll: function scroll() {
                elem.console.scrollTop(elem.console.scrollHeight());
            }
        };
    }();

    function transferredData(value) {
        if (value == 0) return "0KB";
        value = value / 1000;
        return value.toFixed(value < 100 ? 2 : 1) + "KB";
    }
    function loadedData(value) {
        value = value / 1000000;
        return value.toFixed(value < 10 ? 3 : 2) + "MB";
    }
    function stopMeasures() {
        if (measures.started) {
            var prop, req;
            measures.started = false;
            measures.preconnectRequests.forEach(function (req) {
                req.onloadend = null;
                req.upload.onloadend = null;
                req.isAborted = true;
                req.abort();
            });
            for (prop in currentRequests) {
                req = currentRequests[prop];
                req.onloadend = null;
                req.upload.onloadend = null;
                req.isAborted = true;
                req.abort();
            }
            measures.activeRequests = 0;
            currentRequestsCount = 0;
            clearTimeout(preconnectTimeout);
            interval.stop();
            elem.gauge.method("clear");
            elem.networkStage.removeClass("started-P5Hym");
            if (typeof measures.speedRate == "number" && measures.speedRate > 0) mconsole.state("final speed: " + fixNumber(measures.speedRate, 2) + "mbps");
            mconsole.log("Finished measures.");
        }
    }
    function _interval() {
        var time,
            intervalStart,
            intervalTime,
            loadTime,
            loadProgress,
            transferred,
            speedRate = 0,
            transfer = {
            count: 0,
            average: {
                items: [],
                len: 0,
                time: 0
            }
        },
            average = {
            items: [],
            maxLen: 0,
            count: 0,
            len: 0,
            speed: 0
        },
            buffer = {
            items: [{ loaded: 0, loadTime: measures.loadStartTime }],
            sizeTime: 40000,
            startTime: measures.loadStartTime,
            size: 0,
            speed: 0
        },
            prev = {
            loaded: 0,
            transferTime: 0,
            rconsoleLoaded: 0
        },
            rconsole = {
            loaded: 0,
            transferred: 0
        },
            intervalId = null,
            timeoutId = null,
            index,
            len,
            it = 1,
            itemsLoadedValue,
            resultsPrecision = _TestConfig2.default.resultsPrecision;

        function consoleTime(time) {
            return (time / 1000).toFixed(time < 10000 ? 2 : 1);
        }
        function updateDoneRequestsLoaded() {
            len = Math.min(measures[measures.groupRequests ? "urls" : "requestsUrls"].length, 20);
            itemsLoadedValue = "";
            for (index = 0; index < len; index++) {
                itemsLoadedValue += (index == 0 ? "" : "\n") + loadedData(measures[measures.groupRequests ? "urls" : "requestsUrls"][index][measures.groupRequests ? "loaded" : "requestLoaded"]);
            }
            measures.doneRequestsLoaded.value(itemsLoadedValue);
        }
        function callback(nolog) {
            time = getTime();
            intervalTime = time - intervalStart;
            loadTime = time - measures.loadStartTime;
            loadProgress = 1 - Math.min(Math.max(intervalTime - 1000, 0), 20000) / 20000;
            transferred = measures.loaded - prev.loaded;
            if (transferred) transfer.count += 1;

            if (transfer.count > 5 && loadTime >= 500 || loadTime > 2000) {
                if (loadProgress > 0) {
                    if (transfer.average.len == 0) {
                        transfer.average.items.push(loadTime);
                        transfer.average.len += 1;
                    }
                    if (transferred > 0) {
                        transfer.average.items.push(loadTime);
                        transfer.average.len += 1;
                    } else {
                        transfer.average.items[transfer.average.len - 1] = loadTime;
                    }
                    if (transfer.average.items[transfer.average.len - 1] - transfer.average.items[1] > 3000) {
                        transfer.average.items.splice(0, 1);
                        transfer.average.len--;
                    }
                    transfer.average.time = (transfer.average.items[transfer.average.len - 1] - transfer.average.items[0]) / (transfer.average.len - 1);
                }

                if (measures.recordConsole) {
                    rconsole.transferred = measures.loaded - prev.rconsoleLoaded;
                    buffer.size += rconsole.transferred;

                    if (rconsole.transferred > 0 && time - buffer.startTime > buffer.sizeTime) {
                        buffer.speed = buffer.size / (time - buffer.startTime);

                        buffer.size = buffer.speed * buffer.sizeTime;
                        buffer.startTime = time - buffer.sizeTime;
                    }
                    /*if(transferred){
                        buffer.items.push({loaded: measures.loaded, loadTime: time});
                        if(buffer.items[buffer.items.length - 1].loadTime - buffer.items[1].loadTime > 60000){
                            buffer.items.splice(0, 1);
                        }
                    }
                    buffer.speed1 = (buffer.items[buffer.items.length - 1].loaded - buffer.items[0].loaded) / ((time - buffer.items[0].loadTime) / 1000);
                    buffer.speed1 = buffer.speed1 / 125000;*/

                    buffer.speed = buffer.size / ((time - buffer.startTime) / 1000) / 125000;

                    //console.log("speed: " + buffer.speed.toFixed(2), "speed1: " + buffer.speed1.toFixed(2));

                    transfer.maxLen = Math.round((transfer.average.time - 100) / 100 * 3);
                    transfer.maxLen = Math.min(transfer.maxLen, 15);
                    transfer.maxLen = Math.max(transfer.maxLen, 1);
                    transfer.maxLen = Math.round((measures.uploadMode ? 10 : 5) * loadProgress) + transfer.maxLen;

                    average.items.push(buffer.speed);
                    average.count += buffer.speed;
                    average.len++;
                    if (average.items.length > transfer.maxLen) {
                        len = average.items.length - transfer.maxLen;
                        for (index = 0; index < len; index++) {
                            average.count -= average.items[index];
                        }
                        average.len -= len;
                        average.items.splice(0, len);
                    }
                    average.speed = average.count / average.len;
                    //console.log("average time: " + Math.round(transfer.average.time) + "ms", "maxLen: " + transfer.maxLen, "itemsLen: " + average.items.length);

                    speedRate = average.speed;

                    elem.gauge.method("updateNumber", { number: fixNumber(speedRate, speedRate < 1 && resultsPrecision < 2 ? 2 : resultsPrecision), speedRate: speedRate });
                    if (!nolog) mconsole.state("time: " + consoleTime(loadTime) + "s, loaded: " + loadedData(measures.loaded) + ", transferred: " + transferredData(transferred));
                    if (it % 2 == 0) {
                        elem.gauge.method("updateIcon");
                        updateDoneRequestsLoaded();
                    }
                    prev.rconsoleLoaded = measures.loaded;
                }

                elem.activeRequests.textContent(measures.activeRequests);
                elem.currentRequests.textContent(currentRequestsCount);
            }

            measures.speedRate = speedRate;
            prev.loaded = measures.loaded;
            it++;
        }
        function start() {
            buffer.startTime = measures.loadStartTime;
            buffer.items[0].loadTime = measures.loadStartTime;
            //timeoutId = setTimeout(function(){
            intervalStart = getTime();
            intervalId = setInterval(callback, 100);
            //}, measures.uploadMode ? 1100 : 600);
        }
        function stop() {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
            if (intervalStart) callback(true);
        }

        return {
            started: false,
            start: start,
            stop: stop,
            updateDoneRequestsLoaded: updateDoneRequestsLoaded
        };
    }
    function preconnectRequest(urls, callback) {
        var done = 0,
            requestsCount = {},
            requests = [],
            prefix,
            first = true;

        urls.forEach(function (url) {
            if (requestsCount[url.id] === void 0) requestsCount[url.id] = 0;
            if (requestsCount[url.id] < url.preconnectCount) {
                requests.push(url);
                requestsCount[url.id] += 1;
            }
        });
        requests.forEach(function (item) {
            var xhr = new XMLHttpRequest();

            prefix = item.url.indexOf("?") > -1 ? "&" : "?";

            xhr.open("HEAD", item.url + prefix + "vr=" + random(), true);

            xhr.onloadend = function () {
                if (xhr.status == 0) return stopMeasures();
                if (first) mconsole.state("Preconnect start..."), first = false;
                done += 1;
                if (done == requests.length) preconnectTimeout = setTimeout(callback, 50);
            };

            xhr.send();

            measures.preconnectRequests.push(xhr);
        });
    }
    function request(props) {
        var xhr = new XMLHttpRequest(),
            prevLoaded = 0,
            first = true,
            loaded = 0,
            post = measures.uploadMode ? _TestConfig2.default.uploadData.$99 : null,
            target = measures.uploadMode ? xhr.upload : xhr;

        xhr._id = "_" + (reqId += 1);

        xhr.open(post ? "POST" : "GET", props.url + props.prefix + "vr=" + random(), true);

        target.onprogress = function (e) {
            loaded = e.loaded;
            //loaded += parseInt(app.random().slice(-7));
            measures.loaded += loaded - prevLoaded;
            measures.urls[props.id].loaded += loaded - prevLoaded;
            measures.requestsUrls[props.requestId].requestLoaded += loaded - prevLoaded;
            prevLoaded = loaded;

            if (first) measures.activeRequests += 1, first = false;
        };
        function loadend() {
            measures.doneRequests += 1;
            measures.activeRequests -= first ? 0 : 1;

            elem.doneRequests.textContent(measures.doneRequests);

            xhr.onloadend = null;
            target.onloadend = null;
            xhr.abort();

            delete currentRequests[xhr._id];
            currentRequestsCount -= 1;

            if (measures.persistentMode && loaded > 10000) {
                // > 1KB
                request(props).sendRequest();
            }

            if (currentRequestsCount == 0) {
                stopMeasures();
            }
        }
        target.onloadend = loadend;
        if (measures.uploadMode) xhr.onloadend = loadend;

        currentRequests[xhr._id] = xhr;
        currentRequestsCount += 1;

        xhr.sendRequest = function () {
            xhr.send(post);
        };

        return xhr;
    }
    function startMeasures() {
        if (measures.actionTime && getTime() - measures.actionTime < 500) {
            return;
        }

        measures.actionTime = getTime();

        if (measures.started) {
            return stopMeasures();
        }

        measures.loaded = 0;
        measures.speedRate = 0;
        measures.doneRequests = 0;
        measures.preconnectRequests = [];
        measures.activeRequests = 0;
        measures.persistentMode = elem.persistentMode.node.checked;
        measures.uploadMode = elem.uploadMode.checked();

        var urls = [],
            urlMaster = elem.urlInput.value().trim(),
            requestsCount = _App2.default.parseInt({
            value: elem.requestsCount.value().trim(),
            min: 1,
            max: 100,
            default: 0
        }),
            requestsUrls = [];

        currentRequests = {};
        currentRequestsCount = 0;
        interval = new _interval();

        if (urlMaster != "" && !measures.uploadMode) {
            urls.push({
                url: urlMaster,
                id: urls.length,
                prefix: urlMaster.indexOf("?") > -1 ? "&" : "?",
                requestsCount: 6,
                preconnectCount: Infinity,
                done: 0,
                loaded: 0
            });
        }

        _TestConfig2.default.network.urls[measures.uploadMode ? "upload" : "download"].forEach(function (url) {
            if (url.selected) {
                url.nodes.forEach(function (node) {
                    urls.push({
                        url: node.url,
                        id: urls.length,
                        prefix: node.url.indexOf("?") > -1 ? "&" : "?",
                        preconnectCount: _App2.default.parseInt({ value: node.preconnectCount, min: 1, default: Infinity }),
                        requestsCount: _App2.default.parseInt({ value: node.requestsCount, min: 1, default: 6 }),
                        done: 0,
                        loaded: 0
                    });
                });
            }
        });

        if (urls.length == 0) {
            return;
        } else if (requestsCount != 0 && urls.length > requestsCount) {
            urls.splice((urls.length - requestsCount) * -1);
        }

        var index,
            item,
            len,
            urlsLen = Math.ceil(requestsCount / urls.length);

        urls.forEach(function (url) {
            if (requestsCount == 0) urlsLen = url.requestsCount;
            for (index = 0; index < urlsLen; index++) {
                if (requestsCount != 0 && requestsUrls.length >= requestsCount) return;
                item = {
                    url: url.url,
                    id: url.id,
                    requestId: requestsUrls.length,
                    prefix: url.prefix,
                    preconnectCount: url.preconnectCount,
                    requestsCount: url.requestsCount,
                    done: 0,
                    loaded: 0,
                    requestDone: 0,
                    requestLoaded: 0
                };
                request(item);
                requestsUrls.push(item);
            }
        });

        function sendRequests() {
            for (item in currentRequests) {
                currentRequests[item].sendRequest();
            }
            mconsole.state("Load start...");
            measures.loadStartTime = getTime();
            interval.start();
        }

        measures.started = true;
        mconsole.log("Starting measures...");
        elem.networkStage.addClass("started-P5Hym");
        elem.doneRequests.textContent("0");
        elem.currentRequests.textContent("0");
        measures.urls = urls;
        measures.requestsUrls = requestsUrls;

        preconnectRequest(requestsUrls, sendRequests);

        elem.doneRequestsItemsOne.empty();
        elem.doneRequestsLoadedOne.value("");
        for (index = 0, len = Math.min(urls.length, 20); index < len; index++) {
            elem.doneRequestsItemsOne.append((0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("div", { className: "textUrl-fjwq", textContent: urls[index].url })));
        }
        elem.doneRequestsItemsTwo.empty();
        elem.doneRequestsLoadedTwo.value("");
        for (index = 0, len = Math.min(requestsUrls.length, 20); index < len; index++) {
            elem.doneRequestsItemsTwo.append((0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("div", { className: "textUrl-fjwq", textContent: requestsUrls[index].url })));
        }
    }
    function toggleUrlMenu() {
        elem.selectUrlMenu.style({ display: elem.selectUrlMenu.style("display") == "none" ? "block" : "none" });
    }
    function toggleDoneRequestsMenu() {
        elem.doneRequestsMenu.style({ display: elem.doneRequestsMenu.style("display") == "none" ? "block" : "none" });
    }
    function selectUrl(index, elem, type, selected) {
        elem = (0, _App.$)(elem);
        selected = _TestConfig2.default.network.urls[type][index].selected;

        if (type == "upload") {
            elem.parent().childs().forEach(function (item) {
                item = (0, _App.$)(item);
                _TestConfig2.default.network.urls[type][item.attr("data-index")].selected = false;
                item.removeClass("selected-wrpb");
            });
        }

        _TestConfig2.default.network.urls[type][index].selected = selected ? false : true;
        elem[selected ? "removeClass" : "addClass"]("selected-wrpb");
    }
    function setRequestsCount() {
        elem.requestsCount.value(this.value);
    }

    elem.recordButton.handleClick = function () {
        elem.recordButton.toggleClass("off-t2qKV");
        measures.recordConsole = !elem.recordButton.hasClass("off-t2qKV");
    };
    elem.uploadMode.handleClick = function () {
        var checked = elem.uploadMode.checked();
        elem.selectUrlMenu.firstChild().attr("data-type", checked ? "upload" : "download");
        elem.gauge.method("loadType", { type: checked ? "upload" : "download" });
    };
    elem.preventClose.handleClick = function () {
        function prevent() {
            return "Dude, are you sure you want to leave? Think of the kittens!";
        }
        window.onbeforeunload = elem.preventClose.checked() ? prevent : null;
    };
    elem.doneRequestsSwitch.handleClick = function () {
        var checked = elem.doneRequestsSwitch.checked();
        measures.groupRequests = checked;
        measures.doneRequestsLoaded = checked ? elem.doneRequestsLoadedOne : elem.doneRequestsLoadedTwo;
        if (interval) interval.updateDoneRequestsLoaded();
        elem.doneRequestsGroupOne.addClass("hidden");
        elem.doneRequestsGroupTwo.addClass("hidden");
        elem["doneRequestsGroup" + (checked ? "One" : "Two")].removeClass("hidden");
    };
    measures.groupRequests = true;
    measures.doneRequestsLoaded = measures.groupRequests ? elem.doneRequestsLoadedOne : elem.doneRequestsLoadedTwo;

    this.onMount = function () {
        setTimeout(function () {
            elem.console.value("");
            elem.doneRequestsLoadedOne.value("");
            elem.doneRequestsLoadedTwo.value("");
            elem.doneRequestsSwitch.handleClick();
            elem.uploadMode.handleClick();
            elem.preventClose.handleClick();
        }, 100);
    };

    return (0, _App.createElement)(elem.networkStage, { className: "stage-Kbsc8 networkStage", onMount: this.onMount }, (0, _App.createElement)("div", { className: "start-BgYmU" }, (0, _App.createElement)("div", { className: "buttonWrapper-jM8zj" }, (0, _App.createElement)(elem.startButton, { className: "startButton-x4Jsv", onclick: startMeasures }, (0, _App.createElement)("span", { textContent: "start" }), (0, _App.createElement)("span", { textContent: "stop" }))), (0, _App.createElement)("div", { className: "configOptions-cs8qH" }, (0, _App.createElement)("div", { className: "group-bjFqx option-dfsj" }, (0, _App.createElement)("div", { className: "item-Z9hxm url-RD6hW" }, (0, _App.createElement)(elem.urlInput, { type: "text", name: "__url", value: "", placeholder: "Enter aditional url..." }), (0, _App.createElement)(elem.selectUrlButton, { className: "selectButton-zGsn", onclick: toggleUrlMenu }, (0, _App.svgIcon)("arrowDown")), (0, _App.createElement)(elem.selectUrlMenu, { className: "menu-jrbk", style: "display: none;" }, (0, _App.createElement)("div", { className: "menuInner-jrbk urlItems-hsqn", "data-type": "download" }, (0, _App.createElement)("div", { className: "" }, _TestConfig2.default.network.urls.download.map(function (item, index) {
        return (0, _App.createElement)("div", { className: "menuItem-jrbk" + (item.selected ? " selected-wrpb" : ""), "data-index": index, onclick: function onclick() {
                selectUrl(index, this, "download");
            } }, (0, _App.createElement)("div", { className: "itemInner-ghrt" }, (0, _App.createElement)("button", { className: "selectedIcon-wrpb" }, (0, _App.svgIcon)("checked")), (0, _App.createElement)("div", { className: "textUrl-sdsf",
            textContent: item.name ? item.name : item.nodes[0].url.replace(/^https?:\/\//, "").replace("www.", "") })));
    })), (0, _App.createElement)("div", { className: "" }, _TestConfig2.default.network.urls.upload.map(function (item, index) {
        return (0, _App.createElement)("div", { className: "menuItem-jrbk" + (item.selected ? " selected-wrpb" : ""), "data-index": index, onclick: function onclick() {
                selectUrl(index, this, "upload");
            } }, (0, _App.createElement)("div", { className: "itemInner-ghrt" }, (0, _App.createElement)("button", { className: "selectedIcon-wrpb" }, (0, _App.svgIcon)("checked")), (0, _App.createElement)("div", { className: "textUrl-sdsf",
            textContent: item.name ? item.name : item.nodes[0].url.replace(/^https?:\/\//, "").replace("www.", "") })));
    }))), (0, _App.createElement)("div", { className: "menuOverlay-jrbk", onclick: toggleUrlMenu }))), (0, _App.createElement)("div", { className: "item-Z9hxm" }, (0, _App.createElement)(elem.requestsCount, { className: "inputNumber-neXQ6", type: "number", value: "", placeholder: "", min: "1", max: "100" }), (0, _App.createElement)("button", { className: "selectButton-zGsn" }, (0, _App.svgIcon)("arrowDown"), (0, _App.createElement)("select", { className: "select-crth", onchange: setRequestsCount }, (0, _App.createElement)("option", { value: "", selected: "" }), (0, _App.createElement)("option", { value: "1", textContent: "1" }), (0, _App.createElement)("option", { value: "6", textContent: "6" }), (0, _App.createElement)("option", { value: "10", textContent: "10" }), (0, _App.createElement)("option", { value: "20", textContent: "20" }), (0, _App.createElement)("option", { value: "30", textContent: "30" }), (0, _App.createElement)("option", { value: "50", textContent: "50" }), (0, _App.createElement)("option", { value: "60", textContent: "60" }), (0, _App.createElement)("option", { value: "80", textContent: "80" }), (0, _App.createElement)("option", { value: "100", textContent: "100" }))))), (0, _App.createElement)("div", { className: "group-bjFqx" }, (0, _App.createElement)("div", { className: "item-Z9hxm option-dfsj" }, (0, _App.createElement)("label", { className: "switch-dU4km" }, (0, _App.createElement)(elem.persistentMode, { className: "input-dU4km", type: "checkbox", checked: "" }), (0, _App.createElement)("span", { className: "slider-dU4km" }), (0, _App.createElement)("span", { className: "text-dU4km", textContent: "Persistent measures" }))), (0, _App.createElement)("div", { className: "item-Z9hxm option-dfsj" }, (0, _App.createElement)("label", { className: "switch-dU4km" }, (0, _App.createElement)(elem.uploadMode, { className: "input-dU4km", type: "checkbox", onclick: elem.uploadMode.handleClick }), (0, _App.createElement)("span", { className: "slider-dU4km" }), (0, _App.createElement)("span", { className: "text-dU4km", textContent: "Upload mode" }))), (0, _App.createElement)("div", { className: "item-Z9hxm" }, (0, _App.createElement)("label", { className: "switch-dU4km" }, (0, _App.createElement)(elem.preventClose, { className: "input-dU4km", type: "checkbox", onclick: elem.preventClose.handleClick }), (0, _App.createElement)("span", { className: "slider-dU4km" }), (0, _App.createElement)("span", { className: "text-dU4km", textContent: "Prevent close" })))))), (0, _App.createElement)(elem.content, { className: "content-LJepA" }, (0, _App.createElement)("div", { className: "engine-d3WGk " }, (0, _App.createElement)("div", { className: "header-cSqe2" }, (0, _App.createElement)("div", { className: "measuresDetails-Cs7YH" }, (0, _App.createElement)(elem.doneRequestsMenu, { className: "menu-jrbk doneRequestsMenu-rsgl", style: "display: none;" }, (0, _App.createElement)("div", { className: "menuInner-jrbk" }, (0, _App.createElement)("div", { className: "optionWrapper-ktwf" }, (0, _App.createElement)("div", { className: "item-Z9hxm" }, (0, _App.createElement)("label", { className: "switch-dU4km" }, (0, _App.createElement)(elem.doneRequestsSwitch, { className: "input-dU4km", type: "checkbox", checked: "", onclick: elem.doneRequestsSwitch.handleClick }), (0, _App.createElement)("span", { className: "slider-dU4km" }), (0, _App.createElement)("span", { className: "text-dU4km", textContent: "Group requests" })))), (0, _App.createElement)(elem.doneRequestsGroupOne, { className: "requests-bvzp requestsOne-bvzp" + (measures.groupRequests ? "" : " hidden") }, (0, _App.createElement)(elem.doneRequestsItemsOne, { className: "menuItems-jrbk" }, (0, _App.createElement)("div", { className: "menuItem-jrbk" })), (0, _App.createElement)(elem.doneRequestsLoadedOne, { readonly: "", value: "0" })), (0, _App.createElement)(elem.doneRequestsGroupTwo, { className: "requests-bvzp requestsTwo-bvzp" + (measures.groupRequests ? " hidden" : "") }, (0, _App.createElement)(elem.doneRequestsItemsTwo, { className: "menuItems-jrbk" }, (0, _App.createElement)("div", { className: "menuItem-jrbk" })), (0, _App.createElement)(elem.doneRequestsLoadedTwo, { readonly: "", value: "0" }))), (0, _App.createElement)("div", { className: "menuOverlay-jrbk", onclick: toggleDoneRequestsMenu })), (0, _App.createElement)(elem.doneRequestsButton, { className: "item-Cs7YH", textContent: "Done requests: ", onclick: toggleDoneRequestsMenu }, (0, _App.createElement)(elem.doneRequests, { textContent: 0 })), (0, _App.createElement)("div", { className: "item-Cs7YH", textContent: "Current requests: " }, (0, _App.createElement)(elem.currentRequests, { textContent: 0 })), (0, _App.createElement)("div", { className: "item-Cs7YH", textContent: "Active requests: " }, (0, _App.createElement)(elem.activeRequests, { textContent: 0 }))), (0, _App.createElement)("div", { className: "options-jRr7U" }, (0, _App.createElement)(elem.recordButton, { className: "item-nEaZk button-t2qKV", onclick: elem.recordButton.handleClick }))), (0, _App.createElement)("div", { className: "consoleWrapper-rWFEZ console-e2Lfg" }, (0, _App.createElement)("button", { className: "consoleButton-mHsq", onclick: mconsole.scroll }), (0, _App.createElement)(elem.console, { className: "console-r4XGp console-Sq3NP", readonly: "", value: "" }))), (0, _App.createElement)("div", { className: "wrapper-tKbg" }, (0, _App.createElement)("div", { className: "gauge-dJ3hc size-ghjk" }, (0, _App.createElement)(elem.gauge)))));
}

exports.default = NetworkStage;

/***/ })
/******/ ]);
