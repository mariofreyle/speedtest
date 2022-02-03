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
    var $html = (0, _App.$)("html"),
        maxWidth = 850,
        fontSize = 15,
        num,
        width;

    function resize() {
        width = window.innerWidth;
        num = width / maxWidth;
        num = num < 1 ? num : 1;
        num = num + (1 - num) / 1.5;
        if (width < 350) {
            num = num * (width / 350);
        }
        $html.style({ fontSize: fontSize * num + "px" });
    }

    window.addEventListener("resize", resize);
    resize();

    $html.addClass(app.isMobile ? "mobile" : "desktop");

    // ========= Page Output - Render Page ===========
    (0, _App.$)("#app").render(app.createElement("div", {}, app.createElement(_MainHeader2.default), app.createElement(_MainContent2.default)));
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
    var app,
        node,
        initialId = Math.floor(Math.random() * 1000),
        element = {},
        elementPrefix = "__App_",
        elementProps = { events: 1, methods: 1, onMount: 1, onDismount: 1 },
        nodePrototype = { className: 1, id: 1, textContent: 1, value: 1, selected: 1, checked: 1, onclick: 1, onmousemove: 1, onmouseover: 1, onmouseout: 1, onkeyup: 1, onkeydown: 1, onchange: 1, onsubmit: 1, action: 1, ariaLabel: 1 },
        nsTags = { svg: 1, path: 1, circle: 1, polyline: 1, polygon: 1, linearGradient: 1, defs: 1, stop: 1, g: 1 },
        isArray = Array.isArray;

    // Useful Functions
    function guid() {
        initialId += 1;
        return initialId;
    }

    function rtrim(str) {
        return str.replace(/[\x20\t\r\n\f]+/g, " ").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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

    function isIterable(elem) {
        return elem && (typeof elem === "undefined" ? "undefined" : _typeof(elem)) == "object" && "length" in elem;
    }
    function convertToArray(elem) {
        return isIterable(elem) ? elem : [elem];
    }

    function parseNumber(value, props, parseFn) {
        props = props || {};
        props.value = parseFn(value);
        if (isNaN(props.value) && typeof props.default == "number") {
            return props.default;
        }
        props.value = props.value < props.min ? props.min : props.value;
        props.value = props.value > props.max ? props.max : props.value;
        return props.value;
    }

    function classesToArray(value) {
        if (typeof value === "string") {
            return value.match(/[^\x20\t\r\n\f]+/g) || [];
        }
        return [];
    }

    function _hasClass(elem, className, classList) {
        classList = elem.getAttribute("class") || "";
        return classList.search(new RegExp("(\\s|^)" + className + "(\\s|$)")) !== -1;
    }

    function _addClass(elem, classes) {
        var clazz,
            update,
            classList = elem.getAttribute("class") || "",
            j = 0;
        while (clazz = classes[j++]) {
            if (classList.search(new RegExp("(\\s|^)" + clazz + "(\\s|$)")) === -1) {
                classList += " " + clazz;
                update = true;
            }
        }
        if (update) {
            elem.setAttribute("class", rtrim(classList));
        }
    }

    function _removeClass(elem, classes) {
        var clazz,
            update,
            classList = elem.getAttribute("class") || "",
            j = 0;
        while (clazz = classes[j++]) {
            if (classList.search(new RegExp("(\\s|^)" + clazz + "(\\s|$)")) !== -1) {
                classList = classList.replace(new RegExp("(\\s|^)" + clazz + "(\\s|$)", "g"), " ");
                update = true;
            }
        }
        if (update) {
            elem.setAttribute("class", rtrim(classList));
        }
    }

    function _toggleClass(elem, className, state) {
        state = typeof state == "boolean" ? state : !_hasClass(elem, className);
        return state ? _addClass(elem, [className]) : _removeClass(elem, [className]);
    }

    element.listenEvents = function (elem) {
        var events = elem[elementPrefix + "events"],
            elementId = elem[elementPrefix + "id"],
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
    element.removeEvents = function (elem) {
        var events = elem[elementPrefix + "events"],
            elemId = elem[elementPrefix + "id"],
            eventName;

        for (eventName in events) {
            if (app.events[eventName] && app.events[eventName]["_" + elemId]) {
                delete app.events[eventName]["_" + elemId];
            }
        }
    };
    element.mountAll = function (elements) {
        function search(childs) {
            var len = childs.length,
                item,
                index;

            for (index = 0; index < len; index++) {
                item = childs[index];
                // si el elemento tiene el methodo onMount entonces este se ejecutará (montar componente)
                if (item[elementPrefix + "onMount"]) item[elementPrefix + "onMount"]();
                // si el elemento tiene eventos estos se agregaran a la lista de eventos
                if (item[elementPrefix + "events"]) element.listenEvents(item);

                if (item.children.length) search(item.children);
            }
        }
        search(convertToArray(elements));
    };
    element.dismountAll = function (elements) {
        function search(childs) {
            var len = childs.length,
                item,
                index;

            for (index = 0; index < len; index++) {
                item = childs[index];
                // si el elemento tiene el methodo componentWillUnmount entonces este se ejecutará (desmontar componente)
                if (item[elementPrefix + "onDismount"]) item[elementPrefix + "onDismount"]();
                // si el elemento tiene eventos estos se eliminaran y dejaran de escuchar
                if (item[elementPrefix + "events"]) element.removeEvents(item);

                if (item.children.length) search(item.children);
            }
        }
        search(convertToArray(elements));
    };
    element.create = function (args) {
        var elem,
            index,
            item,
            key,
            node,
            len,
            ind,
            name = args[0],
            props = args[1] || {},
            nameType = typeof name === "undefined" ? "undefined" : _typeof(name),
            argsLen = args.length;

        if (nameType == "function") {
            item = new name(props) || {};
            elem = item.render ? item.render() : {};
            elem = elem[0];

            if (elem && elem.nodeType) {
                for (key in item) {
                    if (key in elementProps) {
                        elem[elementPrefix + key] = item[key];
                    }
                }
                this[0] = elem;
                this.length = 1;
            } else {
                this.length = 0;
            }

            return this;
        }

        if (nameType == "string") {
            elem = name in nsTags ? document.createElementNS("http://www.w3.org/2000/svg", name) : document.createElement(name);

            elem[elementPrefix + "id"] = guid();
        } else if (name) {
            elem = name[0];
        }

        if (elem && elem.nodeType) {

            for (key in props) {
                if (key in nodePrototype) {
                    elem[key] = props[key];
                } else {
                    elem.setAttribute(key, props[key]);
                }
            }

            for (index = 2; index < argsLen; index++) {
                if (item = args[index]) {
                    if (isArray(item)) {
                        len = item.length;
                        for (ind = 0; ind < len; ind++) {
                            if (node = item[ind]) {
                                node = (node.nodeType ? node : node[0]) || {};
                                if (node.nodeType) {
                                    elem.appendChild(node);
                                }
                            }
                        }
                    } else {
                        node = (item.nodeType ? item : item[0]) || {};
                        if (node.nodeType) {
                            elem.appendChild(node);
                        }
                    }
                }
            }

            this[0] = elem;
            this.length = 1;
        } else {
            this.length = 0;
        }

        return this;
    };
    element.init = function (selector) {

        if (!selector) {
            this.length = 0;

            return this;
        }

        var elem,
            match = [],
            i = 0;

        if (selector.nodeType) {
            match = [selector];
        } else if (typeof selector == "string") {
            try {
                match = document.querySelectorAll(selector);
            } catch (e) {}
        } else if (isIterable(selector)) {
            match = selector;
        }

        while (elem = match[i]) {
            this[i] = elem;
            i++;
        }

        this.length = match.length;

        return this;
    };
    // SET ELEMENT PROPERTYS
    element.init.prototype = element.create.prototype = {
        forEach: function forEach(callback) {
            var item,
                i = 0;

            while (item = this[i++]) {
                callback(new element.init(item), i, this);
            }
        },
        remove: function remove() {
            var elem,
                i = 0;

            while (elem = this[i++]) {
                if (elem.parentNode) {

                    element.dismountAll(elem);

                    elem.parentNode.removeChild(elem);
                }
            }

            return this;
        },
        addClass: function addClass(value) {
            var elem,
                classes,
                i = 0;

            classes = classesToArray(value);

            if (classes.length) {
                while (elem = this[i++]) {
                    if (elem.nodeType === 1) {
                        _addClass(elem, classes);
                    }
                }
            }

            return this;
        },
        removeClass: function removeClass(value) {
            var elem,
                classes,
                i = 0;

            classes = classesToArray(value);

            if (classes.length) {
                while (elem = this[i++]) {
                    if (elem.nodeType === 1) {
                        _removeClass(elem, classes);
                    }
                }
            }

            return this;
        },
        hasClass: function hasClass(value) {
            var className,
                elem = this[0];

            className = "" + value + "";

            if (elem && elem.nodeType === 1) {
                return _hasClass(elem, className);
            }

            return false;
        },
        toggleClass: function toggleClass(value, state) {
            var elem,
                i = 0;

            if (typeof value == "string" && value.length) {
                while (elem = this[i++]) {
                    if (elem.nodeType === 1) {
                        _toggleClass(elem, value, state);
                    }
                }
            }

            return this;
        },
        value: function value(_value) {
            var elem,
                valueUndef = _value === undefined,
                i = 0;

            while (elem = this[i++]) {
                if (valueUndef) {
                    return elem.value;
                } else {
                    elem.value = _value;
                }
            }

            return this;
        },
        eq: function eq(i) {
            return new element.init(this[i]);
        },
        checked: function checked(value) {
            var elem,
                valueValid = typeof value == "boolean",
                i = 0;

            while (elem = this[i++]) {
                if (valueValid) {
                    elem.checked = value;
                } else {
                    return elem.checked;
                }
            }

            return this;
        },
        selected: function selected(value) {
            var elem,
                valueValid = typeof value == "boolean",
                i = 0;

            while (elem = this[i++]) {
                if (valueValid) {
                    elem.selected = value;
                } else {
                    return elem.selected;
                }
            }

            return this;
        },
        textContent: function textContent(value) {
            var elem,
                valueUndef = value === undefined,
                i = 0;

            while (elem = this[i++]) {
                if (valueUndef) {
                    return elem.textContent;
                } else {
                    elem.textContent = value;
                }
            }

            return this;
        },
        attr: function attr(_attr, value) {
            var elem,
                valueUndef = value === undefined,
                attrType = typeof _attr === "undefined" ? "undefined" : _typeof(_attr),
                i = 0;

            if (attrType == "string" || attrType == "number") {
                while (elem = this[i++]) {
                    if (valueUndef) {
                        if (elem.getAttribute) {
                            return elem.getAttribute(_attr);
                        }
                    } else {
                        elem.setAttribute && elem.setAttribute(_attr, value);
                    }
                }
            }

            return this;
        },
        removeAttr: function removeAttr(value) {
            var elem,
                attr,
                attrNames,
                j,
                i = 0;

            attrNames = classesToArray(value);

            while (elem = this[i++]) {
                if (elem.nodeType === 1) {
                    j = 0;
                    while (attr = attrNames[j++]) {
                        elem.removeAttribute(attr);
                    }
                }
            }

            return this;
        },
        style: function style(value) {
            var elem,
                key,
                isString = typeof value == "string",
                i = 0;

            if (value && ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" || isString)) {
                while (elem = this[i++]) {
                    if (elem.nodeType) {
                        if (isString) {
                            return elem.style[value];
                        }

                        for (key in value) {
                            elem.style[key] = value[key];
                        }
                    }
                }
            }

            return this;
        },
        childs: function childs(index) {
            var childs,
                j,
                node,
                finalIndex,
                elem = this[0],
                matched = [];

            if (elem && elem.nodeType) {
                childs = elem.childNodes;
                if (childs) {
                    j = 0;
                    while (node = childs[j++]) {
                        if (node.nodeType === 1) {
                            matched.push(node);
                        }
                    }
                }

                if (index != undefined) {
                    finalIndex = index < 0 ? matched.length + index : index;

                    return new element.init(matched[finalIndex]);
                }
            }

            return new element.init(matched);
        },
        child: function child(index) {
            return this.childs(index);
        },
        firstChild: function firstChild(props) {
            return this.childs(0);
        },
        lastChild: function lastChild(before) {
            return this.childs(-1);
        },
        find: function find(selector) {
            var find,
                elem = this[0],
                i = 0;

            if (typeof selector == "string") {
                if (elem && elem.querySelectorAll) {
                    find = elem.querySelectorAll(selector);
                }
            }

            return new element.init(find);
        },
        parent: function parent() {
            var elem = this[0],
                i = 0;

            if (elem && elem.parentNode) {
                return new element.init(elem.parentNode);
            }

            return new element.init();
        },
        closest: function closest(className) {
            var find,
                elem = this[0],
                i = 0;

            if (typeof className == "string") {
                className = className.replace(".", "");

                if (elem && elem.nodeType === 1) {
                    var search = function search(parent) {
                        if (parent.nodeType === 1) {
                            if (_hasClass(parent, className)) {
                                find = parent;
                            } else {
                                parent.parentNode && search(parent.parentNode);
                            }
                        }
                    };

                    search(elem.parentNode);
                }
            }

            return new element.init(find);
        },
        prepend: function prepend(insert) {
            var node,
                elem = this[0],
                i = 0;

            if (insert) {
                insert = isArray(insert) ? insert : [insert];
                insert.reverse && insert.reverse();

                if (elem) {
                    while (node = insert[i++]) {
                        node = node.length ? node[0] : node;

                        if (node.nodeType) {
                            if (elem.firstChild) {
                                elem.insertBefore(node, elem.firstChild);
                            } else {
                                elem.appendChild(node);
                            }

                            element.mountAll(node);
                        }
                    }
                }
            }

            return this;
        },
        append: function append(insert) {
            var node,
                elem = this[0],
                i = 0;

            if (insert) {
                insert = isArray(insert) ? insert : [insert];

                if (elem) {
                    while (node = insert[i++]) {
                        node = node.length ? node[0] : node;
                        if (node.nodeType) {
                            elem.appendChild(node);

                            element.mountAll(node);
                        }
                    }
                }
            }

            return this;
        },
        render: function render(insert) {
            var node,
                elem = this[0],
                i = 0;

            if (insert) {
                insert = isArray(insert) ? insert : [insert];

                if (elem) {
                    element.dismountAll(elem.childNodes);

                    while (elem.firstChild) {
                        elem.removeChild(elem.firstChild);
                    }

                    while (node = insert[i++]) {
                        node = node.length ? node[0] : node;

                        if (node.nodeType) {
                            elem.appendChild(node);

                            element.mountAll(node);
                        }
                    }
                }
            }

            return this;
        },
        empty: function empty() {
            var elem,
                i = 0;

            while (elem = this[i++]) {
                if (elem.nodeType) {
                    element.dismountAll(elem.childNodes);

                    while (elem.firstChild) {
                        elem.removeChild(elem.firstChild);
                    }
                }
            }

            return this;
        },
        replaceWith: function replaceWith(insert) {
            var elem = this[0],
                i = 0;

            if (insert) {
                insert = insert.nodeType ? insert : insert[0] ? insert[0] : {};

                if (elem) {
                    if (elem.parentNode && insert.nodeType) {
                        element.dismountAll(elem);

                        elem.parentNode.replaceChild(insert, elem);

                        element.mountAll(insert);
                    }
                }
            }

            return this;
        },
        method: function method(name, props) {
            var elem,
                i = 0;

            if (typeof name == "string") {
                while (elem = this[i++]) {
                    elem[elementPrefix + "methods"][name](props);
                }
            }

            return this;
        },
        scrollTop: function scrollTop(value) {
            var elem,
                valueUndef = value === undefined,
                i = 0;

            while (elem = this[i++]) {
                if (valueUndef) {
                    return elem.scrollTop;
                } else {
                    elem.scrollTop = value;
                }
            }

            return valueUndef ? 0 : this;
        },
        scrollLeft: function scrollLeft(value) {
            var elem,
                valueUndef = value === undefined,
                i = 0;

            while (elem = this[i++]) {
                if (valueUndef) {
                    return elem.scrollLeft;
                } else {
                    elem.scrollLeft = value;
                }
            }

            return valueUndef ? 0 : this;
        },
        scrollWidth: function scrollWidth() {
            var elem = this[0],
                i = 0;
            if (elem) {
                return elem.scrollWidth;
            }
            return 0;
        },
        scrollHeight: function scrollHeight() {
            var elem = this[0],
                i = 0;
            if (elem) {
                return elem.scrollHeight;
            }
            return 0;
        },
        offsetWidth: function offsetWidth() {
            var elem = this[0],
                i = 0;
            if (elem) {
                return elem.offsetWidth;
            }
            return 0;
        },
        offsetHeight: function offsetHeight() {
            var elem = this[0],
                i = 0;
            if (elem) {
                return elem.offsetHeight;
            }
            return 0;
        },
        focus: function focus() {
            var elem = this[0],
                i = 0;
            if (elem) {
                elem.focus();
            }
            return this;
        },
        width: function width() {
            var elem = this[0],
                i = 0;
            if (elem) {
                return elem.clientWidth;
            }
            return 0;
        },
        height: function height() {
            var elem = this[0],
                i = 0;
            if (elem) {
                return elem.clientHeight;
            }
            return 0;
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
        createElement: function createElement() {
            return new element.create(arguments);
        },
        $: function $(value) {
            return new element.init(value);
        },
        event: function event(eventName, props) {
            var events = app.events[eventName],
                key,
                item;

            props = props || {};

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
            return ("000000000000000000" + Math.random().toString().slice(2)).slice(-12);
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
            function parseInt(_x, _x2) {
                return _parseInt.apply(this, arguments);
            }

            parseInt.toString = function () {
                return _parseInt.toString();
            };

            return parseInt;
        }(function (value, props) {
            return parseNumber(value, props, parseInt);
        }),
        parseFloat: function (_parseFloat) {
            function parseFloat(_x3, _x4) {
                return _parseFloat.apply(this, arguments);
            }

            parseFloat.toString = function () {
                return _parseFloat.toString();
            };

            return parseFloat;
        }(function (value, props) {
            return parseNumber(value, props, parseFloat);
        }),
        fixNumber: function fixNumber(number, len, index) {
            number = number.toString();
            number += (number.indexOf(".") == -1 ? "." : "") + "00000";
            index = number.indexOf(".");
            return number.slice(0, index + 1 + parseInt(len));
        },
        setCookie: function setCookie(props) {
            var expires,
                date = new Date();

            props.days = props.days == undefined ? 365 : props.days;
            date.setTime(date.getTime() + props.days * 24 * 60 * 60 * 1000);

            expires = "expires=" + date.toUTCString();
            document.cookie = props.name + "=" + props.value + ";" + expires + ";path=/";
        },
        getCookie: function getCookie(cname) {
            var name = cname + "=",
                ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    };

    app.isMobile = function (w, n) {
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(n.userAgent || n.vendor || w.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((n.userAgent || n.vendor || w.opera).substr(0, 4))
        );
    }(window, window.navigator);

    window.addEventListener("resize", function () {
        app.event("appResize");
    });

    window.$ = app.$;

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

        elem[app.elementPrefix + "id"] = app.guid();

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
        },
        info: function info() {
            return createElement("svg", { viewBox: "0 0 30 30", class: "svgIcon" }, createElement("path", { d: "M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z" }));
        },
        close2: function close2() {
            return createElement("svg", { viewBox: "0 0 503.021 503.021", class: "svgIcon" }, createElement("path", { d: "M491.613,75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056,0L251.507,132.222L130.686,11.407 c-15.202-15.202-39.853-15.202-55.055,0L11.401,75.643c-15.202,15.202-15.202,39.854,0,55.056l120.821,120.815L11.401,372.328 c-15.202,15.202-15.202,39.854,0,55.056l64.235,64.229c15.202,15.202,39.854,15.202,55.056,0l120.815-120.814l120.822,120.814 c15.202,15.202,39.854,15.202,55.056,0l64.235-64.229c15.202-15.202,15.202-39.854,0-55.056L370.793,251.514l120.82-120.815 C506.815,115.49,506.815,90.845,491.613,75.643z" }));
        },
        radioButtonOff: function radioButtonOff() {
            return createElement("svg", { viewBox: "0 0 24 24", class: "svgIcon" }, createElement("path", { d: "M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z" }));
        },
        radioButtonOn: function radioButtonOn() {
            return createElement("svg", { viewBox: "0 0 24 24", class: "svgIcon" }, createElement("path", { d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" }), createElement("path", { d: "M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" }));
        }
    };

    return function (name, props) {
        return icons[name](props);
    };
}(window, document, app);

var createElement = app.createElement,
    svgIcon = app.svgIcon,
    $ = app.$;

exports.default = app;
exports.createElement = createElement;
exports.svgIcon = svgIcon;
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
        logoIcon: (0, _App.createElement)("span"),
        switchButton: (0, _App.createElement)("button"),
        testNav: (0, _App.createElement)("div"),
        toggleButton: (0, _App.createElement)("button"),
        settingsButton: (0, _App.createElement)("button"),
        settingsMenu: (0, _App.createElement)("div"),
        testOptions: (0, _App.createElement)("div"),
        testServer: (0, _App.createElement)("select"),
        testTime: (0, _App.createElement)("input"),
        testConnections: (0, _App.createElement)("select"),
        testEnableBuffer: (0, _App.createElement)("input"),
        testOutputSpeed: (0, _App.createElement)("select"),
        testMode: (0, _App.createElement)("select"),
        testPrecision: (0, _App.createElement)("select")
    },
        consoleOpened = false,
        initialPage;
    function pageView(name, regex, result, view) {
        name = "view";
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        result = regex.exec(location.search);
        view = result === null ? null : decodeURIComponent(result[1].replace(/\+/g, " "));

        if (view != "ping" && view != "network") {
            view = "main";
        }
        return view;
    }

    initialPage = pageView();

    function switchStage(view) {
        _App2.default.event("switchStage", { view: view });
    }
    function toggleSettingsMenu() {
        elem.settingsMenu.style({ display: elem.settingsMenu.style("display") == "none" ? "block" : "none" });
    }

    elem.logoIcon.handleClick = function () {
        switchStage(pageView() == "network" ? "main" : "network");
    };
    elem.switchButton.handleClick = function () {
        switchStage(pageView() == "ping" ? "main" : "ping");
    };
    elem.toggleButton.handleClick = function () {
        consoleOpened = !consoleOpened;
        elem.toggleButton.textContent(consoleOpened ? "Hide console" : "Show console");

        _App2.default.event("consoleToggle", { toggle: consoleOpened });
    };

    this.events = {
        speedTestSettings: function speedTestSettings() {
            test.runTime = _App2.default.parseInt(elem.testTime.value(), { min: 1, max: 60, default: 15 }) * 1000;
            test.connections.count = _App2.default.parseInt(elem.testConnections.value(), { min: 1, max: 6, default: test.connections.default });
            test.selectedServer = _App2.default.parseInt(elem.testServer.value());
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
        },
        switchStage: function switchStage(e) {
            var view = e.view;

            elem.switchButton.textContent(view != "ping" ? "Ping Test" : "< Back");
            elem.testNav[view != "main" ? "addClass" : "removeClass"]("unseen-u");
        }
    };
    this.onMount = function () {
        elem.testMode.child(test.mode - 1).selected(true);
    };

    this.render = function () {
        return (0, _App.createElement)("header", { className: "mainHeader" }, (0, _App.createElement)("div", { className: "container" }, (0, _App.createElement)("div", { className: "headerContents" }, (0, _App.createElement)("div", { className: "logoWrapper" }, (0, _App.createElement)(elem.logoIcon, { className: "logoIcon", onclick: elem.logoIcon.handleClick }, (0, _App.createElement)("button", {}, (0, _App.svgIcon)("testLogo"))), (0, _App.createElement)("span", { className: "logoText", textContent: "SPEEDTEST", onclick: function onclick() {
                isLocal && location.reload();
            } }), (0, _App.createElement)("span", { className: "divider-fGntc", textContent: "•" })), (0, _App.createElement)("div", { className: "nav-gAfej" }, (0, _App.createElement)(elem.switchButton, { className: "button-r8eYj",
            textContent: initialPage != "ping" ? "Ping Test" : "< Back",
            onclick: elem.switchButton.handleClick }), (0, _App.createElement)(elem.testNav, { className: "testNav-zMcl" + (initialPage != "main" ? " unseen-u" : "") }, (0, _App.createElement)(elem.toggleButton, { className: "consoleToggleButton", textContent: "Show console", onclick: elem.toggleButton.handleClick }), (0, _App.createElement)("div", { className: "testSettings-pwLy" }, (0, _App.createElement)(elem.settingsButton, { className: "settingsButton-rKfy", onclick: toggleSettingsMenu }, (0, _App.svgIcon)("menu")), (0, _App.createElement)(elem.settingsMenu, { className: "menu-jrbk", style: "display: none;" }, (0, _App.createElement)("div", { className: "menuInner-jrbk" }, (0, _App.createElement)(elem.testOptions, { className: "content-rtbh" }, (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Server: " }), (0, _App.createElement)(elem.testServer, {}, test.servers.map(function (item, index) {
            if (!isLocal && index == 0) return null;
            return (0, _App.createElement)("option", { value: index, selected: test.selectedServer == item.id, textContent: item.name });
        })))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Test time: " }), (0, _App.createElement)(elem.testTime, { type: "number", min: "1", max: "60", value: test.runTime / 1000 }))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Connections: " }), (0, _App.createElement)(elem.testConnections, {}, (0, _App.createElement)("option", { value: "1", textContent: "1", selected: test.connections.count == 1 }), (0, _App.createElement)("option", { value: "2", textContent: "2", selected: test.connections.count == 2 }), (0, _App.createElement)("option", { value: "4", textContent: "4", selected: test.connections.count == 4 }), (0, _App.createElement)("option", { value: "6", textContent: "6", selected: test.connections.count == 6 })))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Enable buffer: " }), (0, _App.createElement)(elem.testEnableBuffer, { type: "checkbox", checked: test.bufferEnabled }))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Output speed: " }), (0, _App.createElement)(elem.testOutputSpeed, {}, (0, _App.createElement)("option", { value: "instant", textContent: "Instant speed" }), (0, _App.createElement)("option", { value: "average", selected: true, textContent: "Average speed" })))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Test mode: " }), (0, _App.createElement)(elem.testMode, {}, (0, _App.createElement)("option", { value: "1", textContent: "Download - Upload", selected: test.mode == "1" }), (0, _App.createElement)("option", { value: "2", textContent: "Only Download", selected: test.mode == "2" }), (0, _App.createElement)("option", { value: "3", textContent: "Only Upload", selected: test.mode == "3" })))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("label", {}, (0, _App.createElement)("span", { textContent: "Results precision: " }), (0, _App.createElement)(elem.testPrecision, {}, (0, _App.createElement)("option", { value: "1", textContent: "1", checked: test.resultsPrecision == "1" }), (0, _App.createElement)("option", { value: "2", textContent: "2", checked: test.resultsPrecision == "2" })))))), (0, _App.createElement)("div", { className: "menuOverlay-jrbk", onclick: toggleSettingsMenu }))))))));
    };
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
    var container = (0, _App.createElement)("div"),
        testWrapper = (0, _App.createElement)("div"),
        stageElem = (0, _App.createElement)(_TestStage2.default),
        stageNames = ["main", "ping", "network"];

    function className() {
        var runType = " test--" + _TestConfig2.default.runType.current;
        return "testWrapper" + (" test--" + (_TestConfig2.default.connections.count > 1 ? "multi" : "single") + "Mode") + (_TestConfig2.default.opened ? " testOpen" : "") + (_TestConfig2.default.started ? runType : "") + (_TestConfig2.default.finished ? " test--finished" : "");
    }
    function updateStatus(config) {
        if (config.started != void 0) _TestConfig2.default.started = config.started;
        if (config.opened != void 0) _TestConfig2.default.opened = config.opened;
        if (config.finished != void 0) _TestConfig2.default.finished = config.finished;
        if (config.runType != void 0) _TestConfig2.default.runType.current = config.runType;

        testWrapper.attr("class", className());
    }
    function pageView(name, regex, result, view) {
        name = "view";
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        result = regex.exec(location.search);
        view = result === null ? null : decodeURIComponent(result[1].replace(/\+/g, " "));

        if (view != "ping" && view != "network") {
            view = "main";
        }
        return view;
    }

    this.events = {
        renderStage: function renderStage(e) {
            var replace = (0, _App.createElement)(_TestStage2.default, { fadeIn: e.fadeIn ? true : false });

            stageElem.replaceWith(replace);

            stageElem = replace;
        },
        runTest: function runTest(e) {
            updateStatus({ started: true, runType: e.runType });
        },
        testStatus: function testStatus(e) {
            updateStatus(e);
        },
        closeTest: function closeTest() {
            updateStatus({ started: false, finished: true });
        },
        switchStage: function switchStage(e) {
            if (e.pushState == undefined) window.history.pushState("", document.title, URL_BASE + "/?view=" + e.view);
            container.attr("class", "container test--" + e.view);
        }
    };

    window.onpopstate = function () {
        _App2.default.event("switchStage", { view: pageView(), pushState: false });
    };

    this.render = function () {
        return (0, _App.createElement)("div", { className: "pageContent" }, (0, _App.createElement)(container, { className: "container test--" + pageView() }, (0, _App.createElement)(testWrapper, { className: className() }, stageElem, (0, _App.createElement)(_PingStage2.default), (0, _App.createElement)(_NetworkStage2.default)), (0, _App.createElement)("div", { className: "log valueNumber-vgKp", textContent: "0.123456789" }), (0, _App.createElement)("div", { className: "log icrementNumber-vgKp", textContent: "0.123456789" })));
    };
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
        fbStaticUrl,
        cdnWsUrl,
        mmgWsUrl,
        httpProtocol = window.location.protocol == "http:",
        servers;

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

    fbStaticUrl = "https://z-m-static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico";

    cdnWsUrl = "https://media-bog1-1.cdn.whatsapp.net/v/t62.7119-24/34896796_1886206084908284_2826374126373875528_n.enc?ccb=11-4&oh=01_AVx7iGJkBRCwQiLJx0_ZYicBHAfig-uTRN-70-aI3jYnzQ&oe=620F5F37&hash=VVstsyg4AfsJ68ag_SgQNDqm-viTDvjzqGoIW9wuX4c%3D&mode=manual&mms-type=document&__wa-mms=";

    mmgWsUrl = "https://mmg.whatsapp.net/v/t62.7119-24/34896796_1886206084908284_2826374126373875528_n.enc?ccb=11-4&oh=01_AVx7iGJkBRCwQiLJx0_ZYicBHAfig-uTRN-70-aI3jYnzQ&oe=620F5F37&hash=VVstsyg4AfsJ68ag_SgQNDqm-viTDvjzqGoIW9wuX4c%3D&mode=manual&mms-type=document&__wa-mms=";

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
        upload: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
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
        preconnect: "https://s362-fi1h5.fireinfra.net/?action=download&size=0",
        download: "https://s362-fi1h5.fireinfra.net/?action=download&size=100",
        upload: "https://s362-fi1h5.fireinfra.net/?action=xupload",
        ping: "https://s362-fi1h5.fireinfra.net/?action=download&size=0"
    }, {
        name: "Madrid - Movispeed.es",
        id: 9,
        download: "https://m0012.movispeed.es/apolo/data/a100m.dat",
        upload: "https://m0012.movispeed.es/apolo/subida.php",
        ping: "https://m0012.movispeed.es/apolo/data/a1b.dat"
    }, {
        name: "Sydney - Fireprobe.net",
        id: 10,
        preconnect: "https://s283-c9f39.fireinfra.net:9114/?action=download&size=0",
        download: "https://s283-c9f39.fireinfra.net:9114/?action=download&size=100",
        upload: "https://s283-c9f39.fireinfra.net:9114/?action=xupload",
        ping: "https://s283-c9f39.fireinfra.net:9114/?action=download&size=0"
    }, {
        name: "Singapore - Fireprobe.net",
        id: 11,
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
        runTime: isLocal ? 10 * 1000 : 15000,
        hearbeatTime: 80,
        connections: {
            default: 4,
            count: 4
        },
        mode: "1",
        bufferEnabled: true,
        resultsPrecision: 1,
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
        var urls = {
            download: [{
                name: "Aditional url",
                nodes: [{ url: "" }]
            }, {
                name: "Local",
                nodes: [{ url: servers[0].download }]
            }, {
                name: "Cachefly.net",
                nodes: [{ url: servers[1].download }],
                selected: true
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
                name: servers[5].name,
                nodes: [{ url: servers[5].download }]
            }, {
                name: servers[6].name,
                nodes: [{ url: servers[6].download }]
            }, {
                name: servers[7].name,
                nodes: [{ url: servers[7].download }]
            }, {
                name: servers[8].name,
                nodes: [{ url: servers[8].download, preconnect: servers[8].preconnect }]
            }, {
                name: servers[9].name,
                nodes: [{ url: servers[9].download }]
            }, {
                name: servers[10].name,
                nodes: [{ url: servers[10].download, preconnect: servers[10].preconnect }]
            }, {
                name: servers[11].name,
                nodes: [{ url: servers[11].download, preconnect: servers[11].preconnect }]
            }, {
                rname: "Whatsapp MMG",
                nodes: [{ url: mmgWsUrl, requestsCount: 6 }]
            }, {
                rname: "Whatsapp CDN",
                nodes: [{ url: cdnWsUrl, requestsCount: 6 }]
            }, {
                rname: "Mi Tigo - JS",
                nodes: [{ url: "https://mi.tigo.com.co/main-es2015.195b32862d20f2e5354e.js" }]
            }],
            upload: [{
                name: "Local",
                nodes: [{ url: servers[0].upload }]
            }, {
                name: "Virginia, US",
                nodes: [{ url: "https://nvirginia.bandwidthplace.com/uploader/upload.cgi" }],
                selected: true
            }, {
                name: "New York, US",
                nodes: [{ url: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true" }]
            }, {
                name: "Facebook Zero",
                nodes: [{ url: fbStaticUrl, requestsCount: 6 }]
            }, {
                name: "WhatsApp MMG",
                nodes: [{ url: mmgWsUrl, requestsCount: 6 }]
            }]
        };
        if (!isLocal) urls.download.splice(1, 1), urls.upload.splice(0, 1);
        return {
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
        pingServers = [servers[0], servers[1], { name: "New York, US", providerName: "Clouvider", providerWebsite: "https://www.clouvider.com/", wsping: "wss://nyc.speedtest.clouvider.net.prod.hosts.ooklaserver.net:8080/ws", wsmessage: "PING" }, servers[3], { name: "Miami, US", providerName: "Grupo GTD", providerWebsite: "https://www.gtd.cl/", wsping: "wss://speedtest-miami.grupogtd.com.prod.hosts.ooklaserver.net:8080/ws", wsmessage: "PING" },
        //            {name: "Miami, US", providerName: "Cloudflare", providerWebsite: "https://www.cloudflare.com/", wsping: "wss://speedtest.eti.cfdata.org:8080/ws", wsmessage: "PING"},
        servers[4], servers[5], servers[6], servers[7], { name: "mmg.whatsapp.net", ping: mmgWsUrl }, { name: "media-bog1-1.cdn.whatsapp.net", ping: cdnWsUrl }, { name: "Facebook Static", ping: fbStaticUrl }, { name: "Bogota, Colombia", providerName: "DIRECTV Colombia", providerWebsite: "https://www.directv.com.co/", wsping: "wss://speedtest.directv.com.co.prod.hosts.ooklaserver.net:8080/ws", wsmessage: "PING" }, { name: "Washsington, US", providerName: "Xiber LLC", providerWebsite: "https://www.xiber.net/", wsping: "wss://speedtest.washington-dc.xiber.net.prod.hosts.ooklaserver.net:8080/ws", wsmessage: "PING" }, servers[9], servers[10], servers[11], { name: "Custom Url", download: "" }];
        return {
            results: 100,
            completeAll: true,
            servers: pingServers,
            server: pingServers[1],
            runTime: 10000,
            graphItemsVisible: [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97],
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
        testStage: (0, _App.createElement)("div"),
        stageClose: (0, _App.createElement)("button"),
        startWrapper: (0, _App.createElement)("div"),
        resultsContainer: (0, _App.createElement)("div"),
        resultDownload: (0, _App.createElement)("div"),
        speedDownloadNumber: (0, _App.createElement)("div"),
        resultUpload: (0, _App.createElement)("div"),
        speedUploadNumber: (0, _App.createElement)("div"),
        consoleWrapper: (0, _App.createElement)("div"),
        console: (0, _App.createElement)("textarea"),
        ispName: (0, _App.createElement)("div"),
        publicIp: (0, _App.createElement)("div"),
        multiModeButton: (0, _App.createElement)("button"),
        singleModeButton: (0, _App.createElement)("button"),
        gauge: 0
    },
        timer = {
        timeout: {},
        interval: {}
    },
        fixNumber = _App2.default.fixNumber,
        graph,
        interval,
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
        elem.startWrapper.addClass("close-m6jHb tryAgain-EuG8d");
        timer.timeout.closeGauge = setTimeout(function () {
            elem.startWrapper.removeClass("open-m6jHb close-m6jHb");
            elem.gauge.method("removeGauge");
        }, 1300);
    }
    function clearResults() {
        elem.resultsContainer.find(".resultValue").textContent("- -");
        elem.resultsContainer.find("polygon, polyline").attr("points", "");

        testConsole.clear();
        testConsole.log("Starting test...");
    }
    function progressEnd() {
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
            clearTimeout(timer.timeout[key]);
        }
        for (key in timer.interval) {
            clearInterval(timer.interval[key]);
        }
    }
    function breakTest() {
        clearTimers();
        stopTest();
        graph && connections.speedRate && graph.draw(connections.speedRate, _TestConfig2.default.runTime, 0);
        testConsole.state("measures error");
        timer.timeout.breakTest = setTimeout(progressEnd, 1300);
    }
    graph = function () {
        var graphElem, chart, line, points, pointMax, maxTime, updateCount, chartPoints, graphWidth, graphHeight, viewHeight, index, item, len, pointX, pointY;

        return {
            draw: function draw(point, intervalTime, count) {
                point = parseFloat(point);

                if (intervalTime > maxTime) maxTime = intervalTime;

                if (point > pointMax) {
                    pointMax = point;

                    len = points.length;
                    chartPoints = "";
                    for (index = 0; index < len; index++) {
                        item = points[index];
                        item.y = (viewHeight - item.value / pointMax * viewHeight + 2).toFixed(2);

                        chartPoints += " " + item.x + "," + item.y;
                    }
                }

                pointX = (graphWidth * (intervalTime / maxTime)).toFixed(2);
                pointY = (viewHeight - point / pointMax * viewHeight + 2).toFixed(2);

                if (count % updateCount == 0) {
                    points.push({ value: point, x: pointX, y: pointY });
                } else {
                    item = points[points.length - 1];
                    chartPoints = chartPoints.slice(0, (" " + item.x + "," + item.y).length * -1);
                    points[points.length - 1] = { value: point, x: pointX, y: pointY };
                }

                chartPoints += " " + pointX + "," + pointY;

                chart.attr("points", "0," + graphHeight + (" 0," + points[0].y) + chartPoints + (" " + pointX + "," + graphHeight));
                line.attr("points", pointX + "," + pointY + " " + (graphWidth + "," + pointY));
            },
            open: function open() {
                graphElem = (_TestConfig2.default.runType.download ? elem.resultDownload : elem.resultUpload).find(".graph");
                chart = graphElem.find(".chart");
                line = graphElem.find(".line");
                points = [];
                pointMax = 0;
                chartPoints = "";
                graphWidth = Math.floor(graphElem.width());
                graphHeight = Math.floor(graphElem.height());
                viewHeight = graphHeight - 4;
                maxTime = _TestConfig2.default.runTime;
                updateCount = Math.ceil(_TestConfig2.default.runTime / _TestConfig2.default.hearbeatTime / 190);

                graphElem.attr("viewBox", "0 0 " + graphWidth + " " + graphHeight);
            }
        };
    }();
    interval = function () {
        var speedNumberElem, resultsPrecision, time, hearbeatTime, intervalStartedTime, loadTime, transfer, loaded, prev, bufferEnabled, buffer, speed, took, count;

        function consoleTime(time) {
            return (time / 1000).toFixed(time < 10000 ? 3 : 2);
        }
        function consoleSpeed(speed) {
            speed = speed / 125000;
            if (speed >= 10 && !took) took = true;
            return fixNumber(speed, took && speed < 10 ? 3 : 2);
        }
        function callback() {
            time = _App2.default.time();
            loadTime = time - globalLoadStartTime;
            intervalTime = time - intervalStartedTime;
            loaded = connections.loaded;
            transfer.transferred = loaded - prev.loaded;
            transfer.lastTime = transfer.transferred > 0 ? time : transfer.lastTime;
            transfer.time = time - transfer.lastTime;
            if (transfer.time > transfer.maxTime) transfer.maxTime = transfer.time;

            if (transfer.transferred > 0) {
                transfer.averageCount += prev.transferTime;
                transfer.averageLen += 1;
                transfer.averageTime = transfer.averageCount / transfer.averageLen;

                //console.log(test.runType.download ? "[download]" : "[upload]", "average time:", Math.round(transfer.averageTime), "max time:", transfer.maxTime)
            }

            buffer.size += transfer.transferred;
            buffer.loaded += transfer.transferred;
            //buffer._sizeTime = buffer.sizeTime + transfer.maxTime;
            buffer._sizeTime = transfer.maxTime > buffer.sizeTime ? transfer.maxTime : buffer.sizeTime;

            if (transfer.transferred && time - buffer.startTime > buffer._sizeTime) {
                buffer.speed = buffer.size / (time - buffer.startTime);

                buffer.size = buffer.speed * buffer._sizeTime;
                buffer.startTime = time - buffer._sizeTime;

                buffer.speed = buffer.size / (time - buffer.startTime);
                buffer.loaded = buffer.speed * loadTime;
            }

            //buffer.speed = buffer.size / ((time - buffer.startTime) / 1000);
            buffer.speed = buffer.loaded / (loadTime / 1000);

            speed.instant = loaded / (loadTime / 1000);

            if (bufferEnabled) {
                speed.instant = buffer.speed > speed.instant ? buffer.speed : speed.instant;
            }

            speed.maxItems = 8 /* + Math.ceil(transfer.averageTime / hearbeatTime);
                               speed.maxItems = speed.maxItems > 15 ? 15 : speed.maxItems*/;

            speed.instantItems.push(speed.instant);
            speed.instantCount += speed.instant;

            if (speed.instantItems.length > speed.maxItems) {
                speed.instantCount -= speed.instantItems[0];
                speed.instantItems.splice(0, 1);
            }

            speed.averageItems.push(speed.instantAverage = speed.instantCount / speed.instantItems.length);
            speed.averageCount += speed.instantAverage;

            if (speed.averageItems.length > speed.maxItems) {
                speed.averageCount -= speed.averageItems[0];
                speed.averageItems.splice(0, 1);
            }

            speed.average = speed.averageCount / speed.averageItems.length;

            speed.rate = speedRateMbps(_TestConfig2.default.outputSpeed == "average" ? speed.average : speed.instant);
            speed.rateFixed = fixNumber(speed.rate, speed.rate < 1 ? 2 : resultsPrecision);

            testConsole.state("instant: " + consoleSpeed(speed.instant) + "mbps, average: " + consoleSpeed(speed.average) + "mbps, time: " + consoleTime(loadTime) + "s, loaded: " + loadedData(loaded) + ", transf: " + transferredData(transfer.transferred));

            speedNumberElem.textContent(speed.rateFixed);
            elem.gauge.method("updateNumber", { number: speed.rateFixed });
            graph.draw(speed.rate, intervalTime, count);

            if (count % 4 == 0) {
                elem.gauge.method("updateIcon", { speedRate: speed.rate });
            }

            prev.loaded = loaded;
            prev.transferTime = transfer.time;
            connections.speedRate = speed.rate;
            count++;
        }
        function stop() {
            stopTest();

            time = _App2.default.time();

            connections.requests.forEach(function (req, index) {
                if (req.id > 6) return;

                testConsole.state("request " + req.id + " loaded: " + loadedData(req.loaded) + ", max time: " + req.maxTransferTime + "ms" + (req.firstProgressTime ? ", avg time: " + Math.round((req.lastProgressTime - req.firstProgressTime) / (req.progressCount || 1)) + "ms" : "") + (req.id > connections.count ? " (added)" : ""));
            });
            testConsole.state("final speed: " + fixNumber(loaded / (loadTime / 1000) / 125000, 2) + "mbps, buffer speed: " + fixNumber(buffer.speed / 125000, 2) + "mbps (" + (time - buffer.startTime) + "ms)");
            testConsole.state("total loaded: " + loadedData(connections.loaded) + ", max time: " + transfer.maxTime + "ms, avg time: " + Math.round(transfer.averageTime) + "ms");

            timer.timeout.progressEnd = setTimeout(progressEnd, 500);
        }
        function run() {
            speedNumberElem = _TestConfig2.default.runType.download ? elem.speedDownloadNumber : elem.speedUploadNumber;
            hearbeatTime = _TestConfig2.default.hearbeatTime;
            resultsPrecision = _TestConfig2.default.resultsPrecision;
            transfer = {
                transferred: 0,
                time: 0,
                lastTime: 0,
                maxTime: 0,
                averageCount: 0,
                averageLen: 0,
                averageTime: 0
            };
            prev = {
                loaded: 0,
                transferTime: 0
            };
            bufferEnabled = _TestConfig2.default.bufferEnabled;
            buffer = {
                sizeTime: 6000,
                startTime: globalLoadStartTime,
                loaded: 0,
                size: 0,
                speed: 0
            };
            speed = {
                instant: 0,
                instantItems: [],
                instantCount: 0,
                average: 0,
                averageItems: [],
                averageCount: 0,
                instantAverage: 0,
                maxItems: 0,
                rate: 0
            };
            took = false;
            count = 0;

            graph.open();

            intervalStartedTime = _App2.default.time();

            timer.interval.intervalHeartbeat = setInterval(callback, _TestConfig2.default.hearbeatTime);

            timer.timeout.stopInterval = setTimeout(function () {
                callback();
                stop();
            }, _TestConfig2.default.runTime);
        }
        function init() {
            timer.timeout.runInterval = setTimeout(function () {
                intervalStarted = true;
                run();
            }, 2000);
        }
        function start() {
            intervalStarted = true;
            clearTimeout(timer.timeout.runInterval);
            loadTime = _App2.default.time() - globalLoadStartTime;
            timer.timeout.startIntervalDelay = setTimeout(run, loadTime > 420 ? 1 : 420 - loadTime);
        }

        return {
            init: init,
            start: start,
            run: run
        };
    }();
    function requestConfig(req, url, isAdded) {
        var target = _TestConfig2.default.runType.download ? req : req.upload,
            progressCount = 0,
            prev = { loaded: 0, progressTime: 0 },
            transfer = { transferred: 0, time: 0 },
            time;

        req.loaded = 0;
        req.id = connections.requests.length + 1;
        req.maxTransferTime = 0;
        req.firstProgressTime = 0;
        req.lastProgressTime = 0;
        req.progressCount = 0;

        target.addEventListener("progress", function (e) {
            time = _App2.default.time();
            progressCount++;
            if (!globalLoadStartTime) globalLoadStartTime = time, interval.init();
            transfer.transferred = e.loaded - prev.loaded;
            transfer.time = time - (prev.progressTime || time);
            if (transfer.time > req.maxTransferTime) req.maxTransferTime = transfer.time;
            if (progressCount > 1 || isAdded) connections.loaded += transfer.transferred;
            req.lastProgressTime = time;
            req.progressCount = progressCount;
            req.loaded += transfer.transferred;

            if (!intervalStarted && progressCount == 4) interval.start();
            if (progressCount == 1) {
                req.id <= connections.count && testConsole.state("request " + req.id + " first transfer: " + transferredData(e.loaded));
                req.firstProgressTime = time;
            }

            prev.loaded = e.loaded;
            prev.progressTime = time;
        });
        target.addEventListener("load", function () {
            connections.addRequest(true, url, true);
        });
    }

    this.events = {
        initializeTest: function initializeTest() {
            var runType;

            clearResults();

            _App2.default.event("speedTestSettings");

            toggleConnectionsMode();

            runType = _TestConfig2.default.mode == "1" || _TestConfig2.default.mode == "2" ? "download" : "upload";

            elem.gauge = (0, _App.createElement)(_GaugeContainer2.default, { loadType: runType });

            elem.startWrapper.addClass("open-m6jHb").append(elem.gauge);

            timer.timeout.runTest = setTimeout(function () {
                _App2.default.event("runTest", { runType: runType });
            }, 850);

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
                addRequest: function addRequest(send, url, fullUpload) {
                    connections.requests.push(_App2.default.fetch({
                        xhr: function xhr(_xhr) {
                            requestConfig(_xhr, url, fullUpload);
                        },
                        url: url,
                        get: { v: _App2.default.random() },
                        post: uploadData ? uploadData[fullUpload ? 1 : 0] : null,
                        fail: function fail(status, xhr) {
                            if (xhr.loaded < 50000) breakTest(); // < 50KB
                        },
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
            _App2.default.event("testStatus", { started: false, opened: false, finished: false });
            _App2.default.event("renderStage", { fadeIn: 1 });
        }, 300);
    };
    this.onMount = function () {
        if (!_TestConfig2.default.user.ip) {
            var http = window.location.protocol == "http:";
            _App2.default.fetch({
                url: http ? "http://ip-api.com/json/" : "https://ipapi.co/json/",
                success: function success(fetch) {
                    showUserProvider(http ? fetch.isp : fetch.org, http ? fetch.query : fetch.ip);
                }
            });
        }
    };

    this.render = function () {
        return (0, _App.createElement)(elem.testStage, { className: "stage-Kbsc8 testStage" + (props.fadeIn ? " fadeIn" : "") }, (0, _App.createElement)("div", { className: "testContainer-y5vpt" }, (0, _App.createElement)("section", { className: "resultsArea" }, (0, _App.createElement)("div", { className: "resultsContainer" }, (0, _App.createElement)("div", { className: "stageClose-eJsd" }, (0, _App.createElement)(elem.stageClose, { className: "closeButton-fQtb", title: "Cerrar Prueba", "aria-label": "Cerrar Prueba", onclick: this.closeStage }, (0, _App.svgIcon)("close"))), (0, _App.createElement)(elem.resultsContainer, { className: "resultsData" }, (0, _App.createElement)(elem.resultDownload, { className: "resultItem resultDownload" }, (0, _App.createElement)("div", { className: "resultContainer" }, (0, _App.createElement)("div", { className: "resultHeader" }, (0, _App.createElement)("div", { className: "resultIcon" }, (0, _App.svgIcon)("downlink")), (0, _App.createElement)("div", { className: "resultTitle" }, (0, _App.createElement)("b", { textContent: "DESCARGAR" })), (0, _App.createElement)("div", { className: "resultUnit textHolder", textContent: "Mbps" })), (0, _App.createElement)("div", { className: "resultBody" }, (0, _App.createElement)(elem.speedDownloadNumber, { className: "resultValue valueNumber-vgKp", textContent: "- -" })), (0, _App.createElement)("div", { className: "resultGraph" }, (0, _App.svgIcon)("resultGraph", 0)))), (0, _App.createElement)(elem.resultUpload, { className: "resultItem resultUpload" }, (0, _App.createElement)("div", { className: "resultContainer" }, (0, _App.createElement)("div", { className: "resultHeader" }, (0, _App.createElement)("div", { className: "resultIcon" }, (0, _App.svgIcon)("uplink")), (0, _App.createElement)("div", { className: "resultTitle" }, (0, _App.createElement)("b", { textContent: "SUBIR" })), (0, _App.createElement)("div", { className: "resultUnit textHolder", textContent: "Mbps" })), (0, _App.createElement)("div", { className: "resultBody" }, (0, _App.createElement)(elem.speedUploadNumber, { className: "resultValue valueNumber-vgKp", textContent: "- -" })), (0, _App.createElement)("div", { className: "resultGraph" }, (0, _App.svgIcon)("resultGraph", 1))))))), (0, _App.createElement)("main", { className: "stageMain size-ghjk" }, (0, _App.createElement)(elem.startWrapper, { className: "startWrapper" }, (0, _App.createElement)(_StartButton2.default, { textContent: "COMENZAR", action: 1 })))), (0, _App.createElement)(elem.consoleWrapper, { className: "testConsoleWrapper hidden" }, (0, _App.createElement)("div", { className: "console-e2Lfg" }, (0, _App.createElement)("button", { className: "consoleButton-mHsq", onclick: testConsole.scroll }), (0, _App.createElement)(elem.console, { className: "console-Sq3NP", readonly: "", spellcheck: "false", value: "waiting to start the test..." }))), (0, _App.createElement)("footer", { className: "stage-footer" }, (0, _App.createElement)("div", { className: "footerItem" }, (0, _App.createElement)("div", { className: "footerItem-details" }, (0, _App.createElement)("div", { className: "footerItem-icon" }, (0, _App.svgIcon)("user")), (0, _App.createElement)("div", { className: "footerItem-content" }, (0, _App.createElement)(elem.ispName, { className: "footerItem-title ispName", textContent: _TestConfig2.default.user.isp || "- -" }), (0, _App.createElement)(elem.publicIp, { className: "footerItem-description textHolder" + (_TestConfig2.default.user.ip && _TestConfig2.default.user.ip.split("").indexOf(":") > -1 ? " hidden" : ""), textContent: _TestConfig2.default.user.ip || "- -" })))), (0, _App.createElement)("div", { className: "footerItem" }, (0, _App.createElement)("div", { className: "footerItem-details" }, (0, _App.createElement)("div", { className: "footerItem-icon" }, (0, _App.svgIcon)("connections")), (0, _App.createElement)("div", { className: "footerItem-content" }, (0, _App.createElement)("div", { className: "footerItem-title", textContent: "Conexiones" }), (0, _App.createElement)("div", { className: "footerItem-description" }, (0, _App.createElement)("div", { className: "testModeToggle-wrapper" }, (0, _App.createElement)(elem.multiModeButton, { className: "testModeToggle-button" + (_TestConfig2.default.connections.count > 1 ? " active" : ""), textContent: "Multi", onclick: function onclick() {
                toggleConnectionsMode(_TestConfig2.default.connections.default);
            } }), (0, _App.createElement)("span", { className: "testModeToggle-divider textHolder", textContent: "•" }), (0, _App.createElement)(elem.singleModeButton, { className: "testModeToggle-button" + (_TestConfig2.default.connections.count == 1 ? " active" : ""), textContent: "Unica", onclick: function onclick() {
                toggleConnectionsMode(1);
            } }))))))));
    };
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
        startButton: (0, _App.createElement)("button"),
        buttonText: (0, _App.createElement)("div")
    },
        action = false;

    this.handleClick = function () {
        if (action) {
            return;
        }
        action = true;
        _App2.default.event("initializeTest");
    };

    this.render = function () {
        return (0, _App.createElement)(elem.startButton, { className: "startButton", ariaLabel: props.textContent, onclick: this.handleClick }, (0, _App.createElement)(elem.buttonText, { className: "buttonText", textContent: props.textContent }), (0, _App.createElement)("div", { className: "buttonBorder" }), props.action == 1 ? (0, _App.createElement)("div", { className: "buttonAnimatedBorder" }) : null);
    };
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
    var increments = [0, 1, 5, 10, 20, 30, 50, 75, 100],
        incrementsLen = increments.length,
        firstIncrement = increments[0],
        lastIncrement = increments[incrementsLen - 1],
        incrementsRefPercent = 100 / (incrementsLen - 1),
        gaugeCircleStrokeMin = 404,
        // deg
    gaugeCircleStrokeMax = 194,
        // deg
    gaugeNeedleRotateMin = 49,
        // deg
    gaugeNeedleRotateMax = 310,
        // deg
    gaugeCircleOffsetRef = gaugeCircleStrokeMax - gaugeCircleStrokeMin,
        gaugeNeedleRotateRef = gaugeNeedleRotateMax - gaugeNeedleRotateMin,
        elem = {
        gaugeContainer: (0, _App.createElement)("div"),
        gaugeState: (0, _App.createElement)("div"),
        speedDetailsNumber: (0, _App.createElement)("div"),
        incrementsContainer: (0, _App.createElement)("div"),
        gaugeNeedle: (0, _App.createElement)("div"),
        gaugeIcon: (0, _App.createElement)("div"),
        gaugeCircleSpeed: (0, _App.createElement)("circle"),
        speedDatils: (0, _App.createElement)("div")
    },
        prevSpeed = 0,
        activeIncrements,
        gaugePercent,
        circleOffset,
        needleRotate;

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

    function _updateNumber(value) {
        elem.speedDetailsNumber.textContent(value);
    }
    function _updateIcon(speedRate) {
        if (prevSpeed != speedRate) {
            activeIncrements = "";

            increments.forEach(function (item, index) {
                if (speedRate >= item && speedRate > firstIncrement) activeIncrements += " incrementOn--" + index;
            });

            gaugePercent = calcGaugePercent(speedRate);
            circleOffset = gaugeCircleOffsetRef * gaugePercent / 100 + gaugeCircleStrokeMin;
            needleRotate = gaugeNeedleRotateRef * gaugePercent / 100 + gaugeNeedleRotateMin;

            elem.gaugeCircleSpeed.attr("stroke-dashoffset", circleOffset);
            elem.gaugeNeedle.style({ transform: "rotate(" + needleRotate + "deg)" });
            elem.incrementsContainer.attr("class", "incrementsContainer" + activeIncrements);
        }
        prevSpeed = speedRate;
    }
    function gaugeDashoffset(speedRate) {
        _updateIcon(speedRate);
    }

    this.methods = {
        loadType: function loadType(e) {
            elem.gaugeContainer.removeClass("download-QvMr upload-QvMr").addClass(e.type + "-QvMr");
        },
        updateNumber: function updateNumber(e) {
            _updateNumber(e.number);
        },
        updateIcon: function updateIcon(e) {
            _updateIcon(e.speedRate);
        },
        clear: function clear() {
            _updateNumber("0.0");
            _updateIcon("0.0");
        },
        removeGauge: function removeGauge() {
            elem.gaugeContainer.remove();
        }
    };

    this.render = function () {
        return (0, _App.createElement)(elem.gaugeContainer, { className: "gaugeContainer " + (props.loadType || "download") + "-QvMr" }, (0, _App.createElement)(elem.gaugeIcon, { className: "gaugeIcon" }, (0, _App.createElement)("svg", { viewBox: "0 0 100 100", class: "svgIcon gaugeVectorIcon" }, (0, _App.createElement)("circle", { class: "gaugeCircle gaugeCircleBackground", r: "42.1", cx: "50%", cy: "50%" }), (0, _App.createElement)("circle", { class: "gaugeCircle gaugeCircleLoadingBackground", r: "42.2", cx: "50%", cy: "50%" }), (0, _App.createElement)("circle", { class: "gaugeCircle gaugeCircleStrokeLeft", r: "46", cx: "50%", cy: "50%" }), (0, _App.createElement)("circle", { class: "gaugeCircle gaugeCircleStrokeRight", r: "46", cx: "50%", cy: "50%" }), (0, _App.createElement)(elem.gaugeCircleSpeed, { class: "gaugeCircle gaugeCircleCurrentSpeed", r: "46", cx: "50%", cy: "50%", "stroke-dashoffset": "404" }))), (0, _App.createElement)("div", { className: "gaugeInner" }, (0, _App.createElement)(elem.incrementsContainer, { className: "incrementsContainer" }, increments.map(function (num, i) {
            return (0, _App.createElement)("div", { className: "increment increment--" + i, textContent: num });
        })), (0, _App.createElement)(elem.gaugeNeedle, { className: "gaugeNeedle" }, (0, _App.createElement)("svg", { viewBox: "0 0 120 801", class: "svgIcon gaugeNeedleIcon" }, (0, _App.createElement)("linearGradient", { id: "needleGradient", x1: "0", x2: "0", y1: "0", y2: "1" }, (0, _App.createElement)("stop", { class: "stop--1", "stop-opacity": "0", "stop-color": "transparent", offset: "40%" }), (0, _App.createElement)("stop", { class: "stop--1", "stop-opacity": "0.95", "stop-color": "currentColor", offset: "100%" })), (0, _App.createElement)("path", { d: "M95 800.5l-34.25-.958H26.5L0 .5h120l-25 800z", fill: "url(#needleGradient)" }))), (0, _App.createElement)(elem.gaugeState, { className: "gaugeState" }, (0, _App.createElement)(elem.speedDatils, { className: "speedDetailsContainer" }, (0, _App.createElement)(elem.speedDetailsNumber, { className: "speedDetailsNumber valueNumber-vgKp" }, (0, _App.createElement)("span", { textContent: "0.0" })), (0, _App.createElement)("div", { className: "speedDetailsUnit" }, (0, _App.createElement)("span", { className: "speedDetailsIcon" }, (0, _App.svgIcon)("uplink")), (0, _App.createElement)("span", { className: "textHolder", textContent: "Mbps" }))))));
    };
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
        pingItem: (0, _App.createElement)("div"),
        minValue: (0, _App.createElement)("b"),
        avgValue: (0, _App.createElement)("b"),
        maxValue: (0, _App.createElement)("b"),
        jitterValue: (0, _App.createElement)("b"),
        graphInner: (0, _App.createElement)("div"),
        graphTooltip: (0, _App.createElement)("div"),
        graphTooltipItem: (0, _App.createElement)("div"),
        graphTooltipValue: (0, _App.createElement)("div"),
        lineWrapper: (0, _App.createElement)("svg"),
        graphLine: (0, _App.createElement)("polyline")
    },
        graphItems = _TestConfig2.default.ping.graphItems.map(function (item, index) {
        return _TestConfig2.default.ping.graphItemsVisible.indexOf(index) > -1 ? (0, _App.createElement)("div", { index: index, a: "" }) : (0, _App.createElement)("div", { index: index });
    }),
        startedTime = _App2.default.time(),
        measures = {
        progressMode: props.progressMode,
        sendCount: 0,
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
            items: [],
            count: 0
        },
        max: {
            value: 0
        },
        jitter: {
            value: 0,
            items: [],
            count: 0
        },
        prevResult: 0,
        connection: null
    },
        graph,
        tooltipIndex,
        mousePosX,
        timeout = {
        ping: null
    },
        hasPerformance = window.performance && window.performance.getEntriesByType;

    function finishMeasures() {
        if (measures.started) {
            measures.started = false;
            clearTimeout(timeout.ping);
            measures.connection && measures.connection.abort();
            measures.wsconnection && measures.wsconnection.close();
            _App2.default.event("pingTestFinished");
        }
    }
    function updateGraphTooltip() {
        if (tooltipIndex) {
            elem.graphTooltipItem.textContent(tooltipIndex);
            elem.graphTooltipValue.textContent("ping: " + graph.values[tooltipIndex] + " ms");
        }

        var parentPos = elem.graphInner[0].getBoundingClientRect(),
            tooltipWidth = elem.graphTooltip.width(),
            posX = mousePosX - parentPos.left + 20;

        if (mousePosX > parentPos.right - (tooltipWidth + 30)) {
            posX = mousePosX - parentPos.left - tooltipWidth - 20;
        }

        elem.graphTooltip.style({ left: posX + "px" });
    }
    graph = function () {
        var maxValue = 50,
            viewWidth,
            viewHeight,
            chartPoints,
            pointWidth,
            index,
            len,
            item,
            pointX,
            pointY;

        function draw(value) {
            if (!isNaN(value)) {
                graph.values.push(value);
                if (graph.values.length > 100) {
                    graph.values.splice(0, 90);
                }

                if (value > maxValue) {
                    maxValue = value;
                }
            }

            chartPoints = "";

            len = graph.values.length;

            for (index = 0; index < len; index++) {
                item = graph.values[index];

                pointX = (pointWidth * index + 0.5).toFixed(2);
                pointY = (viewHeight - item / maxValue * viewHeight).toFixed(2);

                chartPoints += pointX + "," + pointY + " ";
            }

            elem.graphLine.attr("points", chartPoints);
        }
        function adjust() {
            viewWidth = elem.graphInner.width();
            viewHeight = elem.graphInner.height() - 25;
            pointWidth = viewWidth / _TestConfig2.default.ping.graphItems.length;
            elem.lineWrapper.attr("viewBox", "0 0 " + viewWidth + " " + elem.graphInner.height());
        }

        return {
            draw: draw,
            adjust: adjust,
            values: []
        };
    }();
    function handlePing(pingTime) {
        var time = _App2.default.time(),
            jitter;

        measures.ping.count += 1;

        if (pingTime < measures.min.value) {
            measures.min.value = pingTime;
        }
        if (pingTime > measures.max.value) {
            measures.max.value = pingTime;
        }

        measures.avg.items.push(pingTime);
        measures.avg.count += pingTime;
        if (measures.avg.items.length > 100) {
            measures.avg.count -= measures.avg.items[0];
            measures.avg.items.splice(0, 1);
        }
        measures.avg.value = measures.avg.count / measures.avg.items.length;

        if (measures.ping.count > 1) {
            jitter = pingTime > measures.prevResult ? pingTime - measures.prevResult : measures.prevResult - pingTime;
            measures.jitter.items.push(jitter);
            measures.jitter.count += jitter;
            if (measures.jitter.items.length > 100) {
                measures.jitter.count -= measures.jitter.items[0];
                measures.jitter.items.splice(0, 1);
            }
            measures.jitter.value = measures.jitter.count / measures.jitter.items.length;
        }

        elem.minValue.textContent(measures.min.value + " ms");
        elem.avgValue.textContent(measures.avg.value.toFixed(1) + " ms");
        elem.maxValue.textContent(measures.max.value + " ms");
        elem.jitterValue.textContent(measures.jitter.value.toFixed(1) + " ms");

        measures.prevResult = pingTime;

        graph.draw(pingTime);
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
            ping0,
            entries,
            timing;

        xhr.open(measures.connectionType, measures.connectionUrl + measures.connectionPrefix + "v=" + _App2.default.random(), true);

        if (measures.progressMode) {
            xhr.onprogress = function () {
                time = _App2.default.time();
                endTime = time;
                progress += 1;

                pingTime = endTime - startTime;

                if (progress > 2) {
                    if (pingTime >= 50) {
                        handlePing(pingTime);
                    } else {
                        finishMeasures();
                    }
                }

                startTime = time;
            };
            xhr.onload = finishMeasures;
        } else {
            xhr.onload = function () {
                if (xhr.status == 200 || xhr.status == 204) {
                    endTime = _App2.default.time();

                    pingTime = endTime - startTime;

                    if (hasPerformance) {
                        entries = performance.getEntriesByType("resource");
                        if (entries.length > 0) {
                            timing = entries[entries.length - 1];

                            ping0 = parseInt((timing.responseStart || timing.responseEnd) - (timing.requestStart || timing.fetchStart));

                            performance.clearResourceTimings && performance.clearResourceTimings();

                            if (ping0 < pingTime) {
                                pingTime = ping0;
                            }
                        }
                    }

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
        ws.onclose = finishMeasures;

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
        measures.started = true;
        startedTime = _App2.default.time();

        if (_TestConfig2.default.ping.server.wsping) {
            measures.wsping = _TestConfig2.default.ping.server.wsping;
            measures.wsmessage = _TestConfig2.default.ping.server.wsmessage;

            return wsping();
        }

        measures.connectionUrl = measures.progressMode ? _TestConfig2.default.ping.server.download : _TestConfig2.default.ping.server.ping;
        measures.connectionType = measures.progressMode ? "GET" : "HEAD";
        measures.connectionPrefix = measures.connectionUrl.indexOf("?") > -1 ? "&" : "?";

        httpping();
    }

    this.onMount = function () {
        startMeasures();
        graph.adjust();
    };
    this.events = {
        appResize: function appResize() {
            graph.adjust();
            graph.draw();
        }
    };
    this.render = function () {
        return (0, _App.createElement)(elem.pingItem, { className: "pingItem-e3Lhk" }, (0, _App.createElement)("div", { className: "results-viKtf" }, (0, _App.createElement)("div", { className: "serverDetails-twBep" }, (0, _App.createElement)("button", { className: "closeButton-twBep", title: "Delete result", onclick: deleteResult }, (0, _App.svgIcon)("close")), (0, _App.createElement)("div", { className: "serverName-twBep", textContent: _TestConfig2.default.ping.server.showName === undefined ? _TestConfig2.default.ping.server.name : _TestConfig2.default.ping.server.showName })), (0, _App.createElement)("div", { className: "results-hn8Gk" }, (0, _App.createElement)("div", { className: "result-x3Ayv" }, (0, _App.createElement)("span", { textContent: "min: " }), (0, _App.createElement)(elem.minValue, { textContent: "-- ms" })), (0, _App.createElement)("div", { className: "result-x3Ayv" }, (0, _App.createElement)("span", { textContent: "avg: " }), (0, _App.createElement)(elem.avgValue, { textContent: "-- ms" })), (0, _App.createElement)("div", { className: "result-x3Ayv" }, (0, _App.createElement)("span", { textContent: "max: " }), (0, _App.createElement)(elem.maxValue, { textContent: "-- ms" })), (0, _App.createElement)("div", { className: "result-x3Ayv" }, (0, _App.createElement)("span", { textContent: "jitter: " }), (0, _App.createElement)(elem.jitterValue, { textContent: "-- ms" })))), (0, _App.createElement)("div", { className: "graphWrapper-viKtf" }, (0, _App.createElement)("div", { className: "graph-o1wfv" }, (0, _App.createElement)(elem.graphInner, { className: "graphInner-o1wfv", onmousemove: graphMouseMove, onmouseout: graphMouseOut }, (0, _App.createElement)("div", { className: "graphItems-o1wfv" }, graphItems), (0, _App.createElement)(elem.lineWrapper, { class: "lineWrapper-dnXzj" }, (0, _App.createElement)(elem.graphLine, { points: "" })), (0, _App.createElement)(elem.graphTooltip, { className: "graphTooltip-o1wfv unseen-u" }, (0, _App.createElement)(elem.graphTooltipItem, { className: "tooltipItem-o1wfv", textContent: "0" }), (0, _App.createElement)(elem.graphTooltipValue, { className: "tooltipValue-o1wfv", textContent: "ping: undefined ms" }))))));
    };
}

function PingStage() {
    var elem = {
        start: (0, _App.createElement)("div"),
        startButton: (0, _App.createElement)("button"),
        serverDetails: (0, _App.createElement)("div"),
        selectServer: (0, _App.createElement)("select"),
        settingsButton: (0, _App.createElement)("button"),
        settingsMenu: (0, _App.createElement)("div"),
        completeAll: (0, _App.createElement)("input"),
        progressMode: (0, _App.createElement)("input"),
        customUrl: (0, _App.createElement)("input"),
        resultsCount: (0, _App.createElement)("select"),
        pingItems: (0, _App.createElement)("div")
    },
        testStarted = false,
        pingItems = [],
        itemId = 0;

    function extractHostname(url) {
        var hostname;
        if (typeof url != "string") return "";
        if (url.indexOf("//") > -1) {
            hostname = url.split('/')[2];
        } else {
            hostname = url.split('/')[0];
        }
        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];
        return hostname;
    }
    function testFinished() {
        elem.start.removeClass("disabled");
        testStarted = false;
    }
    function startTest() {
        if (testStarted) return;

        var indexLast = _TestConfig2.default.ping.servers.length - 1;

        _TestConfig2.default.ping.completeAll = elem.completeAll.checked();
        _TestConfig2.default.ping.results = _App2.default.parseInt(elem.resultsCount.value(), { min: 50, max: 1000, default: 100 });

        _TestConfig2.default.ping.servers[indexLast].showName = extractHostname(elem.customUrl.value());
        _TestConfig2.default.ping.servers[indexLast].ping = elem.customUrl.value();
        _TestConfig2.default.ping.servers[indexLast].download = elem.customUrl.value();

        if (_TestConfig2.default.ping.server.ping == "") return;

        itemId += 1;

        var el = (0, _App.createElement)(PingItem, { id: itemId, progressMode: elem.progressMode.checked() });

        el.id = itemId;

        pingItems.push(el);
        if (pingItems.length > 6) {
            pingItems[0].remove();
            pingItems.splice(0, 1);
        }
        elem.pingItems.prepend(el);

        elem.start.addClass("disabled");
        testStarted = true;
    }
    function changeServer(id) {
        var serverId = isNaN(id) || id == "" ? elem.selectServer.value() : id,
            server = _TestConfig2.default.ping.servers[serverId];
        if (server) {
            _App2.default.setCookie({ name: "ping:serverId", value: serverId });
            _TestConfig2.default.ping.server = server;
            elem.serverDetails.textContent(server.name);
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
    function clearCustomUrl() {
        elem.customUrl.value("");
    }

    elem.progressMode.handleClick = function () {
        var value,
            checked = elem.progressMode.checked();

        elem.selectServer.childs().forEach(function (item, index) {
            value = item.attr("value");
            item.style({ display: checked && _TestConfig2.default.ping.servers[value].download === undefined ? "none" : "block" });
            if (item.selected() && _TestConfig2.default.ping.servers[value].download === undefined) {
                elem.selectServer.child(isLocal ? 1 : 0).selected(true);
                changeServer();
            }
        });
    };

    this.events = {
        pingTestFinished: testFinished,
        deletePingResult: deletePingResult
    };
    this.onMount = function () {
        setTimeout(function () {
            var serverId = _App2.default.getCookie("ping:serverId");
            if (serverId != "") {
                changeServer(serverId);
                elem.selectServer.childs().forEach(function (item) {
                    if (item.value() == serverId) {
                        item.selected(true);
                    }
                });
            }
        }, 1);
    };
    this.render = function () {
        return (0, _App.createElement)("div", { className: "stage-Kbsc8 pingStage" }, (0, _App.createElement)(elem.start, { className: "start-inBnq" }, (0, _App.createElement)("div", { className: "contents-vr4n" }, (0, _App.createElement)(elem.startButton, { className: "startButton-twMcg", textContent: "start", onclick: startTest }), (0, _App.createElement)("div", { className: "selectedServer-xncHv" }, (0, _App.createElement)(elem.serverDetails, { className: "serverDetails-xncHv", textContent: _TestConfig2.default.ping.server.name }), (0, _App.createElement)("div", { className: "testSettings-qRnpi" }, (0, _App.createElement)("div", { className: "changeServer-xncHv" }, (0, _App.createElement)(elem.selectServer, { className: "select-fquMx", onchange: changeServer }, _TestConfig2.default.ping.servers.map(function (item, index) {
            if (!isLocal && index == 0) return null;
            return (0, _App.createElement)("option", { value: index, textContent: item.name, selected: item.name == _TestConfig2.default.ping.server.name ? true : false });
        })), (0, _App.createElement)("button", { className: "changeButton-xncHv", textContent: "Change server" })), (0, _App.createElement)("div", { className: "buttonWrapper-xvYef" }, (0, _App.createElement)(elem.settingsButton, { className: "button-xvYef", title: "Test settings", onclick: toggleSettingsMenu }, (0, _App.svgIcon)("settings")), (0, _App.createElement)(elem.settingsMenu, { className: "menu-jrbk", style: "display: none;" }, (0, _App.createElement)("div", { className: "menuInner-jrbk" }, (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("span", { textContent: "Complete all:" }), (0, _App.createElement)(elem.completeAll, { type: "checkbox", checked: true })), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("span", { textContent: "Results:" }), (0, _App.createElement)(elem.resultsCount, {}, (0, _App.createElement)("option", { value: "60", textContent: "60" }), (0, _App.createElement)("option", { value: "100", textContent: "100", selected: true }), (0, _App.createElement)("option", { value: "190", textContent: "190" }), (0, _App.createElement)("option", { value: "280", textContent: "280" }), (0, _App.createElement)("option", { value: "460", textContent: "460" }), (0, _App.createElement)("option", { value: "1000", textContent: "1000" }))), (0, _App.createElement)("div", { className: "menuItem-jrbk" }, (0, _App.createElement)("span", { textContent: "Progress mode:" }), (0, _App.createElement)(elem.progressMode, { type: "checkbox", onclick: elem.progressMode.handleClick })), (0, _App.createElement)("div", { className: "menuItem-jrbk item-gxcv" }, (0, _App.createElement)("div", { textContent: "Custom Url:" }), (0, _App.createElement)("div", { className: "inputWrapper-hgjl" }, (0, _App.createElement)(elem.customUrl, { type: "text", placeholder: "Enter custom url..." }), (0, _App.createElement)("button", { className: "clearButton-ehkc", onclick: clearCustomUrl }, (0, _App.svgIcon)("close2"))))), (0, _App.createElement)("div", { className: "menuOverlay-jrbk", onclick: toggleSettingsMenu }))))))), (0, _App.createElement)(elem.pingItems, { className: "pingItems-id3Lk" }));
    };
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
        networkStage: (0, _App.createElement)("div"),
        urlInput: (0, _App.createElement)("input"),
        selectUrlMenu: (0, _App.createElement)("div"),
        requestsCount: (0, _App.createElement)("input"),
        persistentMode: (0, _App.createElement)("input"),
        preventClose: (0, _App.createElement)("input"),
        uploadMode: (0, _App.createElement)("input"),
        selectedServersText: (0, _App.createElement)("div"),
        gauge: (0, _App.createElement)(_GaugeContainer2.default),
        console: (0, _App.createElement)("textarea"),
        doneRequests: (0, _App.createElement)("span"),
        doneRequestsMenu: (0, _App.createElement)("div"),
        doneRequestsSwitch: (0, _App.createElement)("input"),
        doneRequestsUrls: (0, _App.createElement)("div"),
        doneRequestsLoaded: (0, _App.createElement)("textarea"),
        currentRequests: (0, _App.createElement)("span"),
        activeRequests: (0, _App.createElement)("span")
    },
        currentRequestsCount,
        measures = {
        loaded: 0,
        speedRate: 0,
        uploadMode: false,
        groupRequests: true
    },
        mconsole,
        getTime = Date.now,
        random = Math.random,
        fixNumber = _App2.default.fixNumber,
        reqId = 0,
        currentRequests = {},
        interval,
        preconnectTimeout = null,
        doneRequests;

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
                _log("[" + (measures.uploadMode ? "upload" : "download") + "] " + data);
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
        return fixNumber(value, value < 100 ? 2 : 1) + "KB";
    }
    function loadedData(value) {
        value = value / 1000000;
        return fixNumber(value, value < 10 ? 3 : 2) + "MB";
    }
    function consoleTime(time) {
        return (time / 1000).toFixed(time < 10000 ? 2 : 1);
    }
    doneRequests = function () {
        var len, index, requests, inner, updateItems, checked;

        function update(updateItems) {
            inner = "";
            requests = measures[measures.groupRequests ? "urls" : "requestsUrls"] || [];
            len = requests.length < 20 ? requests.length : 20;
            if (updateItems) {
                elem.doneRequestsUrls.empty();
            }
            for (index = 0; index < len; index++) {
                if (updateItems) {
                    elem.doneRequestsUrls.append((0, _App.createElement)("div", { className: "textUrl-bvzp", textContent: requests[index].url }));
                }
                inner += (index != 0 ? "\n" : "") + loadedData(requests[index].loaded);
            }
            elem.doneRequestsLoaded.value(inner);
        }
        function handleSwitch() {
            measures.groupRequests = checked = elem.doneRequestsSwitch.checked();

            update(true);
        }

        return {
            update: update,
            switch: handleSwitch
        };
    }();
    function stopMeasures() {
        if (measures.started) {
            var prop, req;
            measures.started = false;
            measures.preconnectRequests.forEach(function (req) {
                req.abort();
            });
            for (prop in currentRequests) {
                req = currentRequests[prop];
                req.abort();
            }
            clearTimeout(preconnectTimeout);
            measures.activeRequests = 0;
            currentRequestsCount = 0;
            interval.stop();
            elem.gauge.method("clear");
            elem.networkStage.removeClass("started-P5Hym");
            mconsole.log("Finished measures.");
        }
    }
    interval = function () {
        var time, started, loadTime, transferred, transfer, speed, buffer, prev, intervalId, count, resultsPrecision;

        function callback(last) {
            time = getTime();
            loadTime = time - measures.loadStartTime;
            transferred = measures.loaded - prev.loaded;
            if (transferred) transfer.count += 1;

            if (transfer.count > 5 && loadTime >= 500 || loadTime > 2000) {

                if (transferred) {
                    buffer.items.push({ loaded: measures.loaded, time: time });

                    if (buffer.items[buffer.items.length - 1].time - buffer.items[1].time > buffer.sizeTime) {
                        buffer.items.splice(0, 1);
                    }
                }

                buffer.speed = (buffer.items[buffer.items.length - 1].loaded - buffer.items[0].loaded) / ((time - buffer.items[0].time) / 1000) / 125000;

                speed.items.push(buffer.speed);
                speed.count += buffer.speed;

                if (speed.items.length > 10) {
                    speed.count -= speed.items[0];
                    speed.items.splice(0, 1);
                }

                speed.average = speed.count / speed.items.length;

                speed.rate = speed.average;
                speed.rateFixed = fixNumber(speed.rate, speed.rate < 1 ? 2 : resultsPrecision);

                mconsole.state("speed: " + fixNumber(speed.rate, 2) + "mbps, time: " + consoleTime(loadTime) + "s, loaded: " + loadedData(measures.loaded) + (!last ? ", transferred: " + transferredData(transferred) : ""));
                if (!last) {
                    elem.gauge.method("updateNumber", { number: speed.rateFixed });
                    if (count % 3 == 0) {
                        elem.gauge.method("updateIcon", { speedRate: speed.rate });
                    }
                }
                if (count % 2 == 0 || last) {
                    doneRequests.update();
                }

                elem.activeRequests.textContent(measures.activeRequests);
                elem.currentRequests.textContent(currentRequestsCount);
            }

            measures.speedRate = speed.rate;
            measures.loadTime = loadTime;
            prev.loaded = measures.loaded;
            count++;
        }
        function start() {
            transfer = {
                count: 0,
                average: {
                    items: [],
                    len: 0,
                    time: 0
                }
            };
            speed = {
                items: [],
                count: 0,
                average: 0,
                rate: 0
            };
            buffer = {
                items: [{ loaded: 0, time: measures.loadStartTime }],
                sizeTime: 30000,
                speed: 0
            };
            prev = {
                loaded: 0
            };
            count = 0;
            resultsPrecision = _TestConfig2.default.resultsPrecision;

            intervalId = setInterval(callback, 100);
            started = true;
        }
        function stop() {
            if (started) {
                callback(true);
                clearInterval(intervalId);

                started = false;
            }
        }

        return {
            start: start,
            stop: stop
        };
    }();
    function preconnectRequests(requests, callback) {
        var count = 0,
            first = true,
            prefix;

        requests.forEach(function (item) {
            var xhr = new XMLHttpRequest(),
                url;

            url = typeof item.preconnect == "string" ? item.preconnect : item.url;
            prefix = url.indexOf("?") > -1 ? "&" : "?";

            xhr.open(typeof item.preconnect == "string" ? "GET" : "HEAD", url + prefix + "vr=" + random(), true);

            function done() {
                count += 1;
                if (xhr.status == 0) return stopMeasures();
                if (first) mconsole.state("Preconnect start..."), first = false;
                if (count == requests.length) preconnectTimeout = setTimeout(callback, 50);
            }

            xhr.onload = done;
            xhr.onerror = done;
            xhr.ontimeout = done;

            xhr.send();

            measures.preconnectRequests.push(xhr);
        });
    }
    function request(props, isInitial) {
        var xhr = new XMLHttpRequest(),
            prevLoaded = 0,
            first = true,
            transferred = 0,
            loaded = 0,
            post = measures.uploadMode ? _TestConfig2.default.uploadData.$99 : null,
            target = measures.uploadMode ? xhr.upload : xhr;

        xhr._id = "_" + (reqId += 1);

        xhr.open(post ? "POST" : "GET", props.url + props.prefix + "vr=" + random(), true);

        target.onprogress = function (e) {
            loaded = e.loaded;
            transferred = loaded - prevLoaded;

            measures.loaded += transferred;

            if (isInitial && first) {
                measures.loaded -= transferred;
                if (!measures.loadStartTime) mconsole.state("Load start..."), measures.loadStartTime = getTime(), interval.start();
            }

            measures.urls[props.urlId].loaded += transferred;
            measures.requestsUrls[props.requestId].loaded += transferred;
            prevLoaded = e.loaded;

            if (first) measures.activeRequests += 1, first = false;
        };
        function done() {
            measures.doneRequests += 1;
            measures.activeRequests -= first ? 0 : 1;

            elem.doneRequests.textContent(measures.doneRequests);

            delete currentRequests[xhr._id];
            currentRequestsCount -= 1;

            if (measures.persistentMode && loaded > 50000) {
                // > 50KB
                request(props).sendRequest();
            }

            if (currentRequestsCount == 0) {
                stopMeasures();
            }
        }

        if (measures.uploadMode) {
            xhr.onload = done;
        } else {
            target.onload = done;
        }
        target.onerror = done;
        target.ontimeout = done;

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
        measures.loadStartTime = 0;
        measures.speedRate = 0;
        measures.activeRequests = 0;
        measures.doneRequests = 0;
        measures.preconnectRequests = [];

        measures.persistentMode = elem.persistentMode.checked();
        measures.uploadMode = elem.uploadMode.checked();

        measures.urls = [];
        measures.requestsUrls = [];

        var inputUrl = elem.urlInput.value().trim(),
            requestsCount = _App2.default.parseInt(elem.requestsCount.value(), { min: 1, max: 100, default: 0 }),
            index,
            item,
            len,
            urlsLen;

        currentRequests = {};
        currentRequestsCount = 0;

        _TestConfig2.default.network.urls["download"][0].nodes[0].url = inputUrl;

        _TestConfig2.default.network.urls[measures.uploadMode ? "upload" : "download"].forEach(function (url) {
            if (url.selected) {
                url.nodes.forEach(function (node) {
                    if (node.url != "") {
                        measures.urls.push({
                            url: node.url,
                            id: measures.urls.length,
                            prefix: node.url.indexOf("?") > -1 ? "&" : "?",
                            preconnect: node.preconnect,
                            preconnectCount: _App2.default.parseInt(node.preconnectCount, { min: 1, default: Infinity }),
                            requestsCount: _App2.default.parseInt(node.requestsCount, { min: 1, default: 6 }),
                            done: 0,
                            loaded: 0
                        });
                    }
                });
            }
        });

        if (measures.urls.length == 0) {
            return;
        } else if (requestsCount != 0 && measures.urls.length > requestsCount) {
            measures.urls.splice((measures.urls.length - requestsCount) * -1);
        }

        urlsLen = Math.ceil(requestsCount / measures.urls.length);

        measures.urls.forEach(function (url) {
            if (requestsCount == 0) urlsLen = url.requestsCount;
            for (index = 0; index < urlsLen; index++) {
                if (requestsCount != 0 && measures.requestsUrls.length >= requestsCount) return;
                item = {
                    url: url.url,
                    urlId: url.id,
                    requestId: measures.requestsUrls.length,
                    prefix: url.prefix,
                    preconnect: url.preconnect,
                    preconnectCount: url.preconnectCount,
                    requestsCount: url.requestsCount,
                    done: 0,
                    loaded: 0
                };
                request(item, true);
                measures.requestsUrls.push(item);
            }
        });

        function sendRequests() {
            for (item in currentRequests) {
                currentRequests[item].sendRequest();
            }
        }

        measures.started = true;
        mconsole.log("Starting measures...");
        elem.networkStage.addClass("started-P5Hym");
        elem.doneRequests.textContent("0");
        elem.currentRequests.textContent("0");

        preconnectRequests(measures.requestsUrls, sendRequests);

        doneRequests.update(true);
    }
    function toggleUrlMenu() {
        elem.selectUrlMenu.style({ display: elem.selectUrlMenu.style("display") == "none" ? "block" : "none" });
    }
    function toggleDoneRequestsMenu() {
        elem.doneRequestsMenu.style({ display: elem.doneRequestsMenu.style("display") == "none" ? "block" : "none" });
    }
    function selectUrl(props) {
        props.elem = (0, _App.$)(props.elem).closest("menuItem-jrbk");
        props.isSelected = props.elem.hasClass("selected-wrpb");
        props.select = !props.isSelected;

        if (props.multi == false) {
            props.elem.closest("itemsContainer-tpvb").childs().forEach(function (item, index) {
                index = item.attr("data-index");

                _TestConfig2.default.network.urls[props.type][item.attr("data-index")].selected = false;
                item.removeClass("selected-wrpb");
            });
        }

        props.selectedCount = function () {
            var count = 0,
                arr = _TestConfig2.default.network.urls[props.type],
                len = arr.length,
                index;
            for (index = 0; index < len; index++) {
                if (arr[index].selected) count++;
            }
            return count;
        }();

        if (props.isSelected && props.selectedCount <= 1) {
            props.select = true;
        }

        _TestConfig2.default.network.urls[props.type][props.index].selected = props.select ? true : false;
        props.elem[props.select ? "addClass" : "removeClass"]("selected-wrpb");
        selectedServersText();
    }
    function setRequestsCount() {
        elem.requestsCount.value(this.value);
    }
    function selectedServersText() {
        var items = _TestConfig2.default.network.urls[measures.uploadMode ? "upload" : "download"],
            selected = [];
        items.forEach(function (item) {
            if (item.selected) selected.push(item.name == undefined ? item.rname : item.name);
        });
        elem.selectedServersText.textContent(selected.join(", ") + " ");
    }
    function clearUrlInput() {
        elem.urlInput.value("");
    }

    elem.uploadMode.handleClick = function () {
        measures.uploadMode = elem.uploadMode.checked();
        elem.selectUrlMenu.firstChild().attr("data-type", measures.uploadMode ? "upload" : "download");
        elem.gauge.method("loadType", { type: measures.uploadMode ? "upload" : "download" });
        selectedServersText();
    };
    elem.preventClose.handleClick = function () {
        function prevent() {
            return "Dude, are you sure you want to leave? Think of the kittens!";
        }
        window.onbeforeunload = elem.preventClose.checked() ? prevent : null;
    };

    this.onMount = function () {
        setTimeout(function () {
            elem.console.value("");
            elem.uploadMode.handleClick();
            elem.preventClose.handleClick();
            selectedServersText();
            doneRequests.update();
        }, 1);
    };

    this.render = function () {
        return (0, _App.createElement)(elem.networkStage, { className: "stage-Kbsc8 networkStage" }, (0, _App.createElement)("div", { className: "start-BgYmU" }, (0, _App.createElement)("div", { className: "buttonWrapper-jM8zj" }, (0, _App.createElement)("button", { className: "startButton-x4Jsv", onclick: startMeasures }, (0, _App.createElement)("span", { textContent: "start" }), (0, _App.createElement)("span", { textContent: "stop" }))), (0, _App.createElement)("div", { className: "configOptions-cs8qH" }, (0, _App.createElement)("div", { className: "group-bjFqx option-dfsj" }, (0, _App.createElement)(elem.selectUrlMenu, { className: "menu-jrbk menu-fgcv", style: "display: none;" }, (0, _App.createElement)("div", { className: "menuInner-jrbk urlItems-hsqn", "data-type": "download" }, (0, _App.createElement)("div", { className: "itemsContainer-tpvb" }, _TestConfig2.default.network.urls.download.map(function (item, index) {
            return (0, _App.createElement)("div", { className: "menuItem-jrbk" + (item.selected ? " selected-wrpb" : ""), "data-index": index }, (0, _App.createElement)("div", { className: "itemInner-ghrt", onclick: index == 0 ? null : function () {
                    selectUrl({ index: index, elem: this, type: "download", multi: false });
                } }, (0, _App.createElement)("button", { className: "selectedIcon-wrpb", onclick: index == 0 ? function () {
                    selectUrl({ index: index, elem: this, type: "download", multi: false });
                } : null }, (0, _App.svgIcon)("checked")), index == 0 ? (0, _App.createElement)("div", { className: "inputWrapper-ghjk" }, (0, _App.createElement)(elem.urlInput, { className: "inputUrl-sdsf", type: "text", name: "__url", placeholder: "Enter aditional url..." }), (0, _App.createElement)("button", { className: "clearButton-artp", onclick: clearUrlInput }, (0, _App.svgIcon)("close2"))) : (0, _App.createElement)("div", { className: "textUrl-sdsf", textContent: item.name ? item.name : item.nodes[0].url.replace(/^https?:\/\//, "").replace("www.", "") })), (0, _App.createElement)("button", { className: "multiSelect-cbgh", onclick: function onclick() {
                    selectUrl({ index: index, elem: this, type: "download", multi: true });
                } }, (0, _App.svgIcon)("radioButtonOn")));
        })), (0, _App.createElement)("div", { className: "itemsContainer-tpvb" }, _TestConfig2.default.network.urls.upload.map(function (item, index) {
            return (0, _App.createElement)("div", { className: "menuItem-jrbk" + (item.selected ? " selected-wrpb" : ""), "data-index": index }, (0, _App.createElement)("div", { className: "itemInner-ghrt", onclick: function onclick() {
                    selectUrl({ index: index, elem: this, type: "upload", multi: false });
                } }, (0, _App.createElement)("button", { className: "selectedIcon-wrpb" }, (0, _App.svgIcon)("checked")), (0, _App.createElement)("div", { className: "textUrl-sdsf",
                textContent: item.name ? item.name : item.nodes[0].url.replace(/^https?:\/\//, "").replace("www.", "") })));
        }))), (0, _App.createElement)("div", { className: "menuOverlay-jrbk", onclick: toggleUrlMenu })), (0, _App.createElement)("div", { className: "item-Z9hxm" }, (0, _App.createElement)("button", { className: "url-RD6hW", onclick: toggleUrlMenu }, (0, _App.createElement)("div", { className: "text-cghl", textContent: "Select Servers Or Url... " }), (0, _App.createElement)("div", { className: "selectButton-zGsn" }, (0, _App.svgIcon)("arrowDown")))), (0, _App.createElement)("div", { className: "item-Z9hxm" }, (0, _App.createElement)(elem.requestsCount, { className: "inputNumber-neXQ6", type: "number", value: "", placeholder: "", min: "1", max: "100" }), (0, _App.createElement)("button", { className: "selectButton-zGsn" }, (0, _App.svgIcon)("arrowDown"), (0, _App.createElement)("select", { className: "select-crth", onchange: setRequestsCount }, (0, _App.createElement)("option", { value: "", selected: true }), (0, _App.createElement)("option", { value: "1", textContent: "1" }), (0, _App.createElement)("option", { value: "2", textContent: "2" }), (0, _App.createElement)("option", { value: "4", textContent: "4" }), (0, _App.createElement)("option", { value: "6", textContent: "6" }), (0, _App.createElement)("option", { value: "10", textContent: "10" }), (0, _App.createElement)("option", { value: "20", textContent: "20" }), (0, _App.createElement)("option", { value: "30", textContent: "30" }), (0, _App.createElement)("option", { value: "50", textContent: "50" }), (0, _App.createElement)("option", { value: "60", textContent: "60" }), (0, _App.createElement)("option", { value: "80", textContent: "80" }), (0, _App.createElement)("option", { value: "100", textContent: "100" }))))), (0, _App.createElement)("div", { className: "group-bjFqx" }, (0, _App.createElement)("div", { className: "item-Z9hxm option-dfsj" }, (0, _App.createElement)("label", { className: "switch-dU4km" }, (0, _App.createElement)(elem.persistentMode, { className: "input-dU4km", type: "checkbox", checked: true }), (0, _App.createElement)("span", { className: "slider-dU4km" }), (0, _App.createElement)("span", { className: "text-dU4km", textContent: "Persistent measures" }))), (0, _App.createElement)("div", { className: "item-Z9hxm option-dfsj" }, (0, _App.createElement)("label", { className: "switch-dU4km" }, (0, _App.createElement)(elem.uploadMode, { className: "input-dU4km", type: "checkbox", onclick: elem.uploadMode.handleClick }), (0, _App.createElement)("span", { className: "slider-dU4km" }), (0, _App.createElement)("span", { className: "text-dU4km", textContent: "Upload mode" }))), (0, _App.createElement)("div", { className: "item-Z9hxm" }, (0, _App.createElement)("label", { className: "switch-dU4km" }, (0, _App.createElement)(elem.preventClose, { className: "input-dU4km", type: "checkbox", onclick: elem.preventClose.handleClick }), (0, _App.createElement)("span", { className: "slider-dU4km" }), (0, _App.createElement)("span", { className: "text-dU4km", textContent: "Prevent close" })))), (0, _App.createElement)("div", { className: "group-bjFqx selectedServers-jgc" }, (0, _App.createElement)("div", { className: "item-Z9hxm" }, (0, _App.svgIcon)("info"), (0, _App.createElement)(elem.selectedServersText, { className: "text-fgh", textContent: " " }))))), (0, _App.createElement)("div", { className: "content-LJepA" }, (0, _App.createElement)("div", { className: "engine-d3WGk " }, (0, _App.createElement)("div", { className: "header-cSqe2" }, (0, _App.createElement)("div", { className: "measuresDetails-Cs7YH" }, (0, _App.createElement)(elem.doneRequestsMenu, { className: "menu-jrbk doneRequestsMenu-rsgl", style: "display: none;" }, (0, _App.createElement)("div", { className: "menuInner-jrbk" }, (0, _App.createElement)("div", { className: "optionWrapper-ktwf item-Z9hxm" }, (0, _App.createElement)("label", { className: "switch-dU4km" }, (0, _App.createElement)(elem.doneRequestsSwitch, { className: "input-dU4km", type: "checkbox", checked: true, onclick: doneRequests.switch }), (0, _App.createElement)("span", { className: "slider-dU4km" }), (0, _App.createElement)("span", { className: "text-dU4km", textContent: "Group requests" }))), (0, _App.createElement)("div", { className: "requests-bvzp" }, (0, _App.createElement)(elem.doneRequestsUrls, { className: "requestsUrls-bvzp" }), (0, _App.createElement)(elem.doneRequestsLoaded, { className: "requestsLoaded-bvzp", readonly: "", value: "" }))), (0, _App.createElement)("div", { className: "menuOverlay-jrbk", onclick: toggleDoneRequestsMenu })), (0, _App.createElement)("button", { className: "item-Cs7YH", textContent: "Done requests: ", onclick: toggleDoneRequestsMenu }, (0, _App.createElement)(elem.doneRequests, { textContent: 0 })), (0, _App.createElement)("div", { className: "item-Cs7YH", textContent: "Current requests: " }, (0, _App.createElement)(elem.currentRequests, { textContent: 0 })), (0, _App.createElement)("div", { className: "item-Cs7YH", textContent: "Active requests: " }, (0, _App.createElement)(elem.activeRequests, { textContent: 0 })))), (0, _App.createElement)("div", { className: "consoleWrapper-rWFEZ console-e2Lfg" }, (0, _App.createElement)("button", { className: "consoleButton-mHsq", onclick: mconsole.scroll }), (0, _App.createElement)(elem.console, { className: "console-r4XGp console-Sq3NP", readonly: "", value: "" }))), (0, _App.createElement)("div", { className: "wrapper-tKbg" }, (0, _App.createElement)("div", { className: "gauge-dJ3hc size-ghjk" }, (0, _App.createElement)(elem.gauge)))));
    };
}

exports.default = NetworkStage;

/***/ })
/******/ ]);