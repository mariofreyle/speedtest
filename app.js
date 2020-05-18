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

var app = function (window, document) {
    // Initialize Variables
    var initialId = Math.floor(Math.random() * 1000),
        app,
        componentEvents,
        componentProps,
        ComponentsModelInit,
        nodePrototype;

    nodePrototype = ["className", "id", "textContent", "onclick", "onkeyup", "onkeydown", "onchange", "onsubmit", "action", "ariaLabel"];

    componentEvents = function () {
        function removeEvent(eventName, componentId) {
            var events = app.events[eventName],
                eventsLen = events ? events.length : 0;

            if (!events) return;

            // remove event
            if (events[componentId]) delete events[componentId];
        }
        return {
            listen: function listen(elem) {
                var events = elem.component.events,
                    componentId = elem.id,
                    callback,
                    eventName;

                for (eventName in events) {
                    callback = events[eventName];

                    if (app.events[eventName] === void 0) app.events[eventName] = {};

                    app.events[eventName][componentId] = {
                        componentId: componentId,
                        callback: callback
                    };
                }
            },
            remove: function remove(elem) {
                var events = elem.component.events,
                    componentId = elem.id,
                    callback,
                    eventName;

                for (eventName in events) {
                    removeEvent(eventName, componentId);
                }
            }
        };
    }(componentEvents);

    // Useful Functions
    function guid() {
        initialId += 1;
        return initialId;
    }
    function scapeRegExp(a) {
        return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function appendNode(node, el) {
        return el.appendChild((typeof node === "undefined" ? "undefined" : _typeof(node)) == "object" ? node : document.createTextNode(node));
    }
    function encodeUrlParams(params) {
        var data = "",
            prop;
        for (prop in params) {
            data += prop + "=" + encodeURIComponent(params[prop]) + "&";
        }
        return data.substring(0, data.length - 1);
    }
    function createNodeElement(data) {
        var name = data.name,
            type = data.type,
            component = data.component,
            props = data.props,
            childs = data.childs || null,
            nodeElem,
            key;

        if (component) {
            component.componentDidMount && setTimeout(component.componentDidMount, 1);
            component.events && componentEvents.listen(data);

            return createNodeElement(childs[0]);
        }

        nodeElem = data.node;

        for (key in props) {
            if (nodePrototype.indexOf(key) > -1) {
                nodeElem[key] = props[key];
            } else {
                nodeElem.setAttribute(key, props[key]);
            }
        }

        childs.length && childs.forEach(function (item) {
            item && nodeElem.appendChild(createNodeElement(item));
        });

        return nodeElem;
    }
    function isArray(elem) {
        return elem && elem.constructor && elem.constructor.name == "Array";
    }
    function convertToArray(elem) {
        return elem.constructor.name == "Array" ? elem : [elem];
    }
    function unMountComponents(components) {
        components = convertToArray(components);

        function search(childs) {
            var len = childs.length,
                item,
                index;
            if (len === 0) return;

            for (index = 0; index < len; index++) {
                item = childs[index];

                // si el componente tiene el methodo componentWillUnmount entonces este se ejecutará (desmontar componente)
                if (item.component && item.component.componentWillUnmount) item.component.componentWillUnmount();
                // si el componente tiene eventos estos se eliminaran y dejaran de escuchar
                if (item.component && item.component.events) componentEvents.remove(item);

                search(item.childs);
            }
        }
        search(components);
    }
    function removeComponent(id, childs) {
        ComponentsModel.remove(id);
        if (childs.length) {
            var firstChild = childs[0].node;
            firstChild && firstChild.parentNode.removeChild(firstChild);
        }
    }

    ComponentsModelInit = function ComponentsModelInit(component) {
        this.components = component;
        return this;
    };
    ComponentsModelInit.prototype = {
        // buscar un componente por su id y retornar este.
        searchComponentById: function searchComponentById(id) {
            var component = null;

            function search(childs) {
                var len = childs.length,
                    item,
                    index;

                for (index = 0; index < len; index++) {
                    if (component) return;

                    item = childs[index];

                    if (item.id == id) {
                        component = item;
                        return;
                    }

                    search(item.childs);
                }
            }
            search(this.components.childs);

            return component;
        },
        // Buscar un componente por su id y eliminarlo.
        remove: function remove(id) {
            var found = 0;
            function search(childs) {
                var len = childs.length,
                    item,
                    index;

                for (index = 0; index < len; index++) {
                    if (found) return;

                    item = childs[index];

                    if (item.id == id) {
                        //console.log("Found: ", item, ", index: ", index);
                        found = 1;
                        unMountComponents(item);
                        childs.splice(index, 1);
                        return;
                    }

                    search(item.childs);
                }
            }
            search(this.components.childs);
        },
        // agregar nuevo hijo a un componente 
        addChild: function addChild(id, newChild) {
            var found = 0;
            function search(childs) {
                var len = childs.length,
                    item,
                    index;

                for (index = 0; index < len; index++) {
                    if (found) return;

                    item = childs[index];

                    if (item.id == id) {
                        found = 1;
                        // añadir hijo
                        item.childs.push(newChild);
                        return;
                    }

                    search(item.childs);
                }
            }
            search(this.components.childs);
        },
        // eliminar todos los hijos de un componente
        deleteChilds: function deleteChilds(id) {
            var found = 0;
            function search(childs) {
                var len = childs.length,
                    item,
                    index;

                for (index = 0; index < len; index++) {
                    if (found) return;

                    item = childs[index];

                    if (item.id == id) {
                        found = 1;
                        //console.log("Found: ", item, ", index: ", index);

                        // desmontar componentes
                        unMountComponents(item.childs);
                        // eliminar todos los hijos. (vaciar array)
                        item.childs = [];
                        return;
                    }

                    search(item.childs);
                }
            }
            search(this.components.childs);
        },
        // establecer hijos a un componente
        setChilds: function setChilds(id, newChilds) {
            var found = 0;
            function search(childs) {
                var len = childs.length,
                    item,
                    index;

                for (index = 0; index < len; index++) {
                    if (found) return;

                    item = childs[index];

                    if (item.id == id) {
                        found = 1;
                        //console.log("Found: ", item, ", index: ", index);

                        // desmontar componentes
                        unMountComponents(item.childs);
                        // eliminar todos los hijos. (vaciar array)
                        item.childs = [newChilds];
                        return;
                    }

                    search(item.childs);
                }
            }
            search(this.components.childs);
        },
        // desmontar componentes
        unMountComponents: unMountComponents,
        // disparar un metodo a todos los hijos de un componente
        dispatchMethod: function dispatchMethod(parentId, methodName, methodProps) {
            var itemMethods,

            // component = buscar el componente por su id.
            component = this.searchComponentById(parentId);

            // la función search busca metodos y los aplicara apartir del componente padre.
            function search(childs) {
                var len = childs.length,
                    item,
                    index;
                for (index = 0; index < len; index++) {
                    item = childs[index];

                    if (item.component && item.component.methods) {
                        itemMethods = item.component.methods;

                        itemMethods[methodName] && itemMethods[methodName](methodProps);
                        return;
                    }
                    search(item.childs);
                }
            }
            search([component]);
        }

        // COMPONENTS PROPERTYS
    };componentProps = function componentProps(props) {
        this.type = props.type, this.name = props.name, this.node = props.node, this.component = props.component, this.props = props.props, this.id = props.id, this.childs = props.childs;

        return this;
    };
    componentProps.prototype = {
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
            ComponentsModel.remove(this.id);

            this.node.parentNode.removeChild(this.node);
        },
        addClass: function addClass(value) {
            if (this.node.classList.contains(value)) return;

            return this.node.classList.add(value);
        },
        removeClass: function removeClass(value) {
            if (!this.node.classList.contains(value)) return;

            return this.node.classList.remove(value);
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
            return len > 0 ? new componentProps(childs[len - 1]) : null;
        },
        textContent: function textContent(value) {
            this.node.textContent = value;
        },
        setAttrNS: function setAttrNS(ns, attr, attrValue) {
            this.node.setAttributeNS(ns, attr, attrValue);
        },
        className: function className(value) {
            this.node.className = value;
        },
        style: function style(props) {
            var elem = this.node;
            for (var i in props) {
                elem.style[i] = props[i];
            }
        },
        first: function first(props) {
            return this.node.firstChild;
        },
        find: function find(className) {
            var elem = this.node,
                find = elem.getElementsByClassName(className)[0];

            return new componentProps({ node: find });
        },
        parent: function parent() {
            return new componentProps(this.node.parentNode);
        },
        // la función ´createNodeElement´ convierte objetos a nodos DOM.
        append: function append(elem) {

            ComponentsModel.addChild(this.id, elem);

            var append = createNodeElement(elem);

            return this.node.appendChild(append);
        },
        render: function render(_render) {
            var elem = this.node,
                nodes = createNodeElement(_render);

            ComponentsModel.setChilds(this.id, _render);

            while (elem.firstChild) {
                elem.removeChild(elem.firstChild);
            }

            return _render && elem.appendChild(nodes);
        },
        method: function method(name, props) {
            // this.id = obtener el id del componente.
            return ComponentsModel.dispatchMethod(this.id, name, props);
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
        }
    };
    app = {
        fetch: function fetch(config) {
            var isFormData = config.post && _typeof(config.post) == "object" && config.post.constructor.name == "FormData",
                postData = config.post ? !isFormData ? encodeUrlParams(config.post) : config.post : null,
                type = config.post ? "POST" : "GET",
                url = config.url || "",
                xhrCallback = config.xhr,
                contentType = config.contentType || null,
                headers = config.headers ? config.headers : {},
                xhr = new XMLHttpRequest(),
                fail = function fail() {
                config.fail && config.fail();
            };

            if (config.get) {
                url += "?" + encodeUrlParams(config.get);
            }

            typeof xhrCallback == "function" && xhrCallback(xhr);

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var response = xhr.responseText,
                            JSONParsed = false;
                        if (xhr.getResponseHeader("Content-Type").search("application/json") > -1) {
                            try {
                                response = JSON.parse(response);
                                JSONParsed = true;
                            } catch (e) {
                                fail();
                                return;
                            }
                            JSONParsed && config.success && config.success(response);
                        } else {
                            config.success && config.success(response);
                        }
                    }
                }
            };
            xhr.onerror = function () {
                console.log("Request Fail: " + url);
                fail();
            };
            xhr.open(type, url, true);
            !isFormData && !contentType && xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            contentType && xhr.setRequestHeader("Content-type", contentType);
            //xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            //xhr.setRequestHeader("X-App-Fetch", "data");

            for (var prop in headers) {
                xhr.setRequestHeader(prop, headers[prop]);
            }

            xhr.send(postData);

            return xhr;
        },
        createElement: function createElement(_name, _props, _childs) {
            var isComponent = typeof _name == "function",
                hasRef = !(typeof _name == "string"),
                props = _props || {},
                childsArray = isArray(_childs),
                childs = childsArray ? _childs : [],
                arsLen = arguments.length,
                component = null,
                node = null,
                id = guid(),
                elem,
                name,
                index,
                item;

            if (!childsArray) {
                for (index = 2; index < arsLen; index++) {
                    item = arguments[index];

                    item && childs.push(item);
                }
            }

            if (isComponent) {
                name = _name.name;
                component = new _name(props);
                component.removeComponent = function () {
                    removeComponent(id, childs);
                };
                component.render && childs.push(component.render());
            } else {
                name = hasRef ? _name.name : _name;
                node = hasRef ? _name.node : document.createElement(_name);
            }

            elem = {
                type: isComponent ? "component" : "node",
                name: name,
                node: node,
                component: component,
                props: props,
                id: _name.id ? _name.id : id,
                childs: childs
            };

            return elem;
        },
        createRef: function createRef(elem) {
            return new componentProps(app.createElement(elem));
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
        listenEvent: function listenEvent(eventName, callback) {
            var id = guid(),
                props;

            if (app.events[eventName] === void 0) app.events[eventName] = [];

            app.events[eventName].push({
                id: id,
                callback: callback
            });

            props = {
                name: eventName,
                id: id
            };
            return props;
        },
        removeEvent: function removeEvent() {
            var len = arguments.length;

            function removeEvent(e) {
                var events = app.events[e.name],
                    eventsLen = events ? events.length : 0;

                for (var i = 0; i < eventsLen; i++) {
                    if (events[i].id == e.id) {
                        events.splice(i, 1);
                        return;
                    }
                }
            }

            for (var i = 0; i < len; i++) {
                removeEvent(arguments[i]);
            }
        },
        component: {},
        removeComponent: function removeComponent(elem) {
            return ComponentsModel.remove(elem.id);
        },
        events: {},
        guid: guid,
        _guid: function _guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
        },
        rootRender: function rootRender(render) {
            var
            //render = app.createElement(component),
            rootElem = document.getElementById("app");

            // Initialize te ComponentsModel before append node to the DOM
            window.ComponentsModel = new ComponentsModelInit(render);

            rootElem.appendChild(createNodeElement(render));
        },
        /* ----------- Utils ----------- */
        each: function each(arr, callback) {
            var type = isArray(arr),
                index;
            if (type) {} else {
                for (var key in arr) {
                    callback(arr[key], key);
                }
            }
        },
        trim: function trim(value, _trim) {
            _trim = _trim ? scapeRegExp(_trim) : _trim;
            var exp = _trim ? new RegExp("^" + _trim + "|" + _trim + "+$", "gm") : /^\s+|\s+$/gm;
            return value.replace(exp, "");
        },
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

    window.App = app;

    return app;
}(window, document);

app.svgIcon = function (window, document, app) {
    function createElement(name, _props, _childs) {
        var props = _props || {},
            childs = [],
            arsLen = arguments.length,
            id = app.guid(),
            node = document.createElementNS("http://www.w3.org/2000/svg", name),
            elem;

        for (var index = 2; index < arsLen; index++) {
            childs.push(arguments[index]);
        }

        elem = {
            type: "node",
            name: name,
            node: node,
            component: null,
            props: props,
            id: id,
            childs: childs
        };

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
            return createElement("svg", { viewBox: "0 0 100 100", class: "svgIcon gaugeVectorIcon" }, createElement("circle", { class: "gaugeCircle gaugeCircleBackground strokeBackground", r: "46", cx: "50%", cy: "50%" }), createElement("circle", { class: "gaugeCircle gaugeCircleCurrentSpeed strokePrimary", r: "46", cx: "50%", cy: "50%", "stroke-dasharray": "404" }), createElement("circle", { class: "gaugeCircle gaugeCircleLoading strokeBackground hidden", r: "46", cx: "50%", cy: "50%" }));
        }
    };

    return function (name) {
        return icons[name]();
    };
}(window, document, app);
/*

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
*/

var components = app.components,
    createElement = app.createElement,
    svgIcon = app.svgIcon,
    createRef = app.createRef;

exports.default = app;
exports.components = components;
exports.createElement = createElement;
exports.svgIcon = svgIcon;
exports.createRef = createRef;

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
    this.render = function () {
        return (0, _App.createElement)("header", { className: "mainHeader" }, (0, _App.createElement)("div", { className: "container" }, (0, _App.createElement)("div", { className: "logoWrapper" }, (0, _App.createElement)("span", { className: "logoIcon" }, (0, _App.svgIcon)("testLogo")), (0, _App.createElement)("span", { className: "logoText", textContent: "SPEEDTEST" }))));
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainContent() {
    var $this = this,
        testWrapper = (0, _App.createRef)("div"),
        ispNameElem = (0, _App.createRef)("span"),
        localIpElem = (0, _App.createRef)("span"),
        renderStage,
        initEvent;

    function updateStatus(config) {
        _TestConfig2.default.started = void 0 === config.started ? _TestConfig2.default.started : config.started;
        _TestConfig2.default.runType = void 0 === config.runType ? _TestConfig2.default.runType : config.runType;
        _TestConfig2.default.onprogress = void 0 === config.onprogress ? _TestConfig2.default.onprogress : config.onprogress;

        var runType = "test--" + _TestConfig2.default.runType + (_TestConfig2.default.onprogress ? " onprogress" : "");

        testWrapper.className("testWrapper" + (void 0 === config.clearClass ? " testOpen " : "") + " " + (_TestConfig2.default.started ? runType : "test--finished"));
    }

    this.events = {
        initializeTest: function initializeTest() {
            testWrapper.addClass("testOpen");
        },
        renderStage: function renderStage() {
            testWrapper.render((0, _App.createElement)(_TestStage2.default));
        },
        runTest: function runTest(e) {
            updateStatus({ started: true, runType: e.runType });
        },
        testStatus: function testStatus(e) {
            updateStatus(e);
        },
        closeTest: function closeTest() {
            updateStatus({ started: false, onprogress: false });
        }
    };
    this.componentDidMount = function () {
        _App2.default.fetch({
            url: isLocal ? "http://ip-api.com/json/" : "https://ipapi.co/json/",
            success: function success(fetch) {
                ispNameElem.textContent(_App2.default.ucWords(isLocal ? fetch.isp : fetch.org)), localIpElem.textContent(isLocal ? fetch.query : fetch.ip);
            }
        });
    };
    this.render = function () {
        return (0, _App.createElement)("div", { className: "pageContent" }, (0, _App.createElement)("div", { className: "container" }, (0, _App.createElement)(testWrapper, { className: "testWrapper" }, (0, _App.createElement)(_TestStage2.default)), (0, _App.createElement)("div", { className: "log", textContent: "0.00" }), (0, _App.createElement)("footer", { className: "footer" }, (0, _App.createElement)("div", { className: "hostIsp" }, (0, _App.createElement)("div", { className: "hostDetails" }, (0, _App.createElement)("div", { className: "icon" }, (0, _App.svgIcon)("user")), (0, _App.createElement)("div", { className: "hostIp" }, (0, _App.createElement)("div", { className: "ispName" }, (0, _App.createElement)(ispNameElem, { textContent: "- -" })), (0, _App.createElement)("div", { className: "localIp textHolder" }, (0, _App.createElement)(localIpElem, { textContent: "- -" }))))))));
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

var test = {
    started: false, // false = stop - finished, true = started
    runType: true, // true = download, false = upload
    onprogress: false, // true = progress, false = waiting
    increments: [0, 2, 4, 6, 8, 10, 12, 14, 16],
    rateProgress: 0,
    uploadFileDup: 24,
    runningTime: isLocal ? 1000 * 8 : 16000,
    hearbeatTime: 65,
    xhrConnections: 3,
    xhrData: [],
    downloadURL: isLocal ? URL_BASE + "/download/download.file" : "https://fl-us-ping.vultr.com/vultr.com.100MB.bin",
    uploadURL: isLocal ? URL_BASE + "/upload/upload.file" : "https://fl-us-ping.vultr.com/ajax.php",
    gaugeCircleStrokeMin: 404,
    gaugeCircleStrokeMax: 617.5,
    gaugeNeedleRotateMin: 46, // in deg
    gaugeNeedleRotateMax: 315 // in deg
};

test.increments = [0, 1, 5, 10, 20, 30, 50, 75, 100];

test.gaugeCircleOffsetRef = test.gaugeCircleStrokeMax - test.gaugeCircleStrokeMin;
test.gaugeNeedleRotateRef = test.gaugeNeedleRotateMax - test.gaugeNeedleRotateMin; // in deg
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

function TestStage() {
    var $this = this,
        increments = _TestConfig2.default.increments,
        incrementsLen = _TestConfig2.default.increments.length,
        incrementsRefPercent = 100 / (_TestConfig2.default.increments.length - 1),
        lastIncrement = _TestConfig2.default.increments[_TestConfig2.default.increments.length - 1],
        runInterval,
        xhrData,
        loadstartTime,
        testStage = (0, _App.createRef)("div"),
        stageMain = (0, _App.createRef)("main"),
        resultsContainer = (0, _App.createRef)("div"),
        resultDownload = (0, _App.createRef)("div"),
        speedDownloadNumber = (0, _App.createRef)("div"),
        resultUpload = (0, _App.createRef)("div"),
        speedUploadNumber = (0, _App.createRef)("div"),
        runTestEvent,
        initEvent;

    function fileData() {
        var data = new FormData();

        data.append("file-" + _App2.default.random(13), _TestConfig2.default.tempFile);

        return data;
    }
    function speedRateMbps(rate) {
        rate = rate / 125000;
        return rate.toFixed(rate > 100 ? 1 : 2); // convert bytes per second to megabits per second
    }
    function maxIncrementRate(rate) {
        return rate >= lastIncrement ? lastIncrement : rate;
    }
    function abortXhr() {
        xhrData && xhrData.forEach(function (item) {
            item.abort && item.abort();
        });
    }
    function clearOnprogress() {
        xhrData && xhrData.forEach(function (item) {
            item.onprogress = null;
            item.upload.onprogress = null;
        });
    }
    function getLoadedBytes() {
        var count = 0;
        xhrData.forEach(function (item) {
            count += item.loadedBytes;
        });
        return count;
    }
    function stopTest() {
        clearInterval(runInterval);
        abortXhr();
    }
    function closeGauge() {
        stageMain.append((0, _App.createElement)(_StartButton2.default, { textContent: "DE NUEVO", action: 2, tryAgainAnim: true }));
        setTimeout(function () {
            _App2.default.event("removeGauge");
        }, 410);
    }
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
    function intervalHearbeat(xhr) {
        var config = _TestConfig2.default.runType == "download" ? xhr : xhr.upload;

        xhr.loadedBytes = 0;

        if (_TestConfig2.default.runType == "upload") {
            config.onloadstart = function () {
                loadstartTime = loadstartTime || _App2.default.getTime();
            };
        }

        config.onprogress = function () {
            _App2.default.event("testStatus", { onprogress: true });

            clearOnprogress();

            var speedNumberElem = _TestConfig2.default.runType == "download" ? speedDownloadNumber : speedUploadNumber,
                progressBarElem = (_TestConfig2.default.runType == "download" ? resultDownload : resultUpload).find("progressBar"),


            // Iterval vars
            intervalIterations = 0,
                averageSpeed = 0,
                timeNow,
                loadTime,
                activeIncrementsClasses,
                loadedBytes,
                bytesRate,
                speedRate,
                gaugeCircleOffset,
                gaugePercent,
                gaugeNeedleRotate;

            loadstartTime = loadstartTime || _App2.default.getTime();

            runInterval = setInterval(function () {
                timeNow = _App2.default.getTime();
                loadTime = (timeNow - loadstartTime) / 1000;
                activeIncrementsClasses = "";
                loadedBytes = getLoadedBytes();

                // Calc Method 1
                /*
                if(loadTime > 1){
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
                test.speedRate = loadTime > 1 ? (test.speedRateresults / test.speedRateresultsArr.length) : loadedBytes;
                  */

                // Method 2
                bytesRate = loadedBytes / loadTime;

                if (loadTime > 1 || 1) {
                    intervalIterations += 1;
                    averageSpeed += bytesRate;
                } else {
                    intervalIterations = 1;
                    averageSpeed = bytesRate;
                }

                speedRate = speedRateMbps(averageSpeed / intervalIterations);

                testStage.node.appendChild(document.createTextNode("instant: " + (bytesRate / 125000).toFixed(2) + "mbps, average: " + speedRate + "mbps, loaded: " + (loadedBytes / 125000).toFixed(2) + "mb, loadTime: " + loadTime + "s"));
                testStage.node.appendChild(document.createElement("br"));
                testStage.node.appendChild(document.createElement("br"));

                //console.log("instant: " + (bytesRate / 125000).toFixed(2) + "mbps, average: " + speedRate + "mbps, loaded: " + (loadedBytes / 125000).toFixed(2) + "mb, loadstartTime: " + loadTime + "s");

                increments.forEach(function (item, index) {
                    if (speedRate >= item) activeIncrementsClasses += " incrementOn--" + index;
                });

                gaugePercent = calcGaugePercent(speedRate);

                gaugeCircleOffset = _TestConfig2.default.gaugeCircleOffsetRef * gaugePercent / 100 + _TestConfig2.default.gaugeCircleStrokeMin;
                gaugeNeedleRotate = _TestConfig2.default.gaugeNeedleRotateRef * gaugePercent / 100 + _TestConfig2.default.gaugeNeedleRotateMin;

                speedNumberElem.textContent(speedRate);
                progressBarElem.style({ width: (timeNow - loadstartTime) / (_TestConfig2.default.runningTime - _TestConfig2.default.hearbeatTime) * 100 + "%" });

                _App2.default.event("updateGauge", [speedRate, gaugeCircleOffset, gaugeNeedleRotate, activeIncrementsClasses]);
            }, _TestConfig2.default.hearbeatTime);

            _App2.default.event("toggleGaugeDetails");

            setTimeout(function () {
                stopTest();
                setTimeout(function () {
                    _App2.default.event("testStatus", { onprogress: false });
                    _App2.default.event("clearGauge");

                    setTimeout(function () {
                        if (_TestConfig2.default.runType == "download") {
                            _App2.default.event("runTest", { runType: "upload" });
                        } else {
                            _App2.default.event("closeTest");
                            closeGauge();
                        }
                    }, 500);
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
            _App2.default.event("teststatus", { onprogress: false });
            _App2.default.event("clearGauge");
            setTimeout(function () {
                if (_TestConfig2.default.runType == "download") {
                    _App2.default.event("runTest", { runType: "upload" });
                } else {
                    _App2.default.event("closeTest");
                    closeGauge();
                }
            }, 500);
        }, 1300);
    }
    function testTransferComplete() {}
    function clearResults() {
        resultDownload.find("resultValue").textContent("- -");
        resultDownload.find("progressBar").style({ width: 0 });

        resultUpload.find("resultValue").textContent("- -");
        resultUpload.find("progressBar").style({ width: 0 });
    }

    this.events = {
        initializeTest: function initializeTest() {
            clearResults();

            setTimeout(function () {
                stageMain.append((0, _App.createElement)(_GaugeContainer2.default));
            }, 450);
        },
        runTest: function runTest() {
            //return;
            var data = _TestConfig2.default.runType == "download" ? null : fileData(),
                xhr,
                v;

            xhrData = [];
            loadstartTime = 0;

            for (var i = 0; i < _TestConfig2.default.xhrConnections; i++) {
                v = _App2.default.random(6) + "" + _App2.default.getTime();

                xhr = _App2.default.fetch({
                    xhr: intervalHearbeat,
                    url: _TestConfig2.default.runType == "download" ? _TestConfig2.default.downloadURL : _TestConfig2.default.uploadURL,
                    get: { v: v },
                    post: data,
                    fail: testLoadError,
                    success: testTransferComplete
                });

                xhrData.push(xhr);
            }
        }
    };
    this.closeStage = function (e) {
        e.preventDefault();
        stopTest();

        var id = setTimeout(function () {}, 0);
        while (id--) {
            clearTimeout(id);
        }

        testStage.style({ opacity: 0, pointerEvents: "none" });

        setTimeout(function () {
            _App2.default.event("testStatus", { started: false, runType: true, onprogress: false, clearClass: true });
            _App2.default.event("renderStage");
        }, 300);
    };
    this.render = function () {
        return (0, _App.createElement)(testStage, { className: "testStage" }, (0, _App.createElement)("section", { className: "resultsArea" }, (0, _App.createElement)(resultsContainer, { className: "resultsContainer" }, (0, _App.createElement)("button", { className: "stageClose", title: "Cerrar Prueba", "aria-label": "Cerrar Prueba", onclick: $this.closeStage }, (0, _App.svgIcon)("close")), (0, _App.createElement)(resultDownload, { className: "resultItem resultDownload" }, (0, _App.createElement)("div", { className: "resultContainer" }, (0, _App.createElement)("div", { className: "resultHeader" }, (0, _App.createElement)("div", { className: "resultHeaderWrapper" }, (0, _App.createElement)("div", { className: "resultIcon" }, (0, _App.svgIcon)("downlink")), (0, _App.createElement)("div", { className: "resultTitle" }, (0, _App.createElement)("b", { textContent: "DESCARGAR" })), (0, _App.createElement)("div", { className: "resultUnit textHolder" }, (0, _App.createElement)("span", { textContent: "Mbps" })))), (0, _App.createElement)("div", { className: "resultBody" }, (0, _App.createElement)(speedDownloadNumber, { className: "resultValue speedDownloadNumber" }, (0, _App.createElement)("span", { textContent: "- -" }))), (0, _App.createElement)("div", { className: "progressBarWrapper" }, (0, _App.createElement)("div", { className: "progressBar" })))), (0, _App.createElement)(resultUpload, { className: "resultItem resultUpload" }, (0, _App.createElement)("div", { className: "resultContainer" }, (0, _App.createElement)("div", { className: "resultHeader" }, (0, _App.createElement)("div", { className: "resultHeaderWrapper" }, (0, _App.createElement)("div", { className: "resultIcon" }, (0, _App.svgIcon)("uplink")), (0, _App.createElement)("div", { className: "resultTitle" }, (0, _App.createElement)("b", { textContent: "SUBIR" })), (0, _App.createElement)("div", { className: "resultUnit textHolder" }, (0, _App.createElement)("span", { textContent: "Mbps" })))), (0, _App.createElement)("div", { className: "resultBody" }, (0, _App.createElement)(speedUploadNumber, { className: "resultValue speedUploadNumber" }, (0, _App.createElement)("span", { textContent: "- -" }))), (0, _App.createElement)("div", { className: "progressBarWrapper" }, (0, _App.createElement)("div", { className: "progressBar" })))))), (0, _App.createElement)(stageMain, { className: "stageMain" }, (0, _App.createElement)(_StartButton2.default, { textContent: "COMENZAR", action: 1 })));
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
    var $this = this,
        startWrapper = (0, _App.createRef)("div");

    this.handleClick = function () {
        startWrapper.addClass("anim");

        _App2.default.event("initializeTest");

        setTimeout(function () {
            $this.removeComponent();
            _App2.default.event("runTest", { runType: "download" });
        }, 2600);
    };
    this.componentDidMount = function () {
        setTimeout(function () {
            startWrapper.removeClass("tryAgainAnim");
        }, 1000);
    };
    this.render = function () {
        return (0, _App.createElement)(startWrapper, { className: "startWrapper" + (props.action == 1 ? "" : " tryAgain") + (props.tryAgainAnim ? " tryAgainAnim" : "") }, (0, _App.createElement)("button", { className: "startButton", ariaLabel: props.textContent, onclick: this.handleClick }, (0, _App.createElement)("div", { className: "buttonText", textContent: props.textContent }), (0, _App.createElement)("div", { className: "buttonBackground" }), (0, _App.createElement)("div", { className: "buttonBorder" }), props.action == 1 ? (0, _App.createElement)("div", { className: "buttonAnimatedBorder" }) : null));
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

function GaugeContainer() {
    var $this = this,
        gaugeContainer = (0, _App.createRef)("div"),
        gaugeState = (0, _App.createRef)("div"),
        speedDetailsNumber = (0, _App.createRef)("div"),
        incrementsContainer = (0, _App.createRef)("div"),
        gaugeNeedle = (0, _App.createRef)("div"),
        gaugeIcon = (0, _App.createRef)("div"),
        speedDatils = (0, _App.createRef)("div"),
        connectingElem = (0, _App.createRef)("div"),
        toggleDetails,
        updateEvent,
        clearEvent,
        removeEvent;

    function _updateGauge(speedRate, gaugeCircleOffset, gaugeNeedleRotate, activeIncrementsClasses) {
        speedDetailsNumber.textContent(speedRate);
        gaugeIcon.find("gaugeCircleCurrentSpeed").setAttrNS(null, "stroke-dasharray", gaugeCircleOffset);
        gaugeNeedle.style({ transform: "rotateZ(" + gaugeNeedleRotate + "deg)" });
        incrementsContainer.className("incrementsContainer" + activeIncrementsClasses);
    }
    function increments() {
        var items = [];
        _TestConfig2.default.increments.forEach(function (num, i) {
            items.push((0, _App.createElement)("div", { className: "increment increment--" + i }, (0, _App.createElement)("b", { textContent: num })));
        });
        return items;
    }

    this.events = {
        toggleGaugeDetails: function toggleGaugeDetails() {
            speedDatils.removeClass("unseen");
            connectingElem.addClass("unseen");
        },
        updateGauge: function updateGauge(e) {
            _updateGauge.apply(null, e);
        },
        clearGauge: function clearGauge() {
            _updateGauge("0.00", _TestConfig2.default.gaugeCircleStrokeMin, _TestConfig2.default.gaugeNeedleRotateMin, "");
        },
        removeGauge: function removeGauge() {
            $this.removeComponent();
        }
    };
    this.render = function () {
        return (0, _App.createElement)(gaugeContainer, { className: "gaugeContainer" }, (0, _App.createElement)(gaugeState, { className: "gaugeState" }, (0, _App.createElement)(speedDatils, { className: "speedDetailsContainer state unseen" }, (0, _App.createElement)(speedDetailsNumber, { className: "speedDetailsNumber" }, (0, _App.createElement)("span", { textContent: "0.00" })), (0, _App.createElement)("div", { className: "" }, (0, _App.createElement)("span", { className: "speedDetailsIcon" }, (0, _App.svgIcon)("uplink")), (0, _App.createElement)("span", { className: "speedDetailsUnit textHolder", textContent: "Mbps" }))), (0, _App.createElement)(connectingElem, { className: "connectingServer state textHolder" }, (0, _App.createElement)("b", { textContent: "Conectando..." }))), (0, _App.createElement)(incrementsContainer, { className: "incrementsContainer" }, increments()), (0, _App.createElement)(gaugeNeedle, { className: "gaugeNeedle" }, (0, _App.svgIcon)("gaugeNeedle")), (0, _App.createElement)(gaugeIcon, { className: "gaugeAnim gaugeIcon" }, (0, _App.svgIcon)("gaugeVector")));
    };
}

exports.default = GaugeContainer;

/***/ })
/******/ ]);