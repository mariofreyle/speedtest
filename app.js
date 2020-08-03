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

var app = function (window, document) {
    // Initialize Variables
    var initialId = Math.floor(Math.random() * 1000),
        app,
        componentEvents,
        componentProps,
        ComponentsModelInit,
        nodePrototype;

    nodePrototype = ["className", "id", "textContent", "value", "onclick", "onkeyup", "onkeydown", "onchange", "onsubmit", "action", "ariaLabel"];

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
        setAttr: function setAttr(name, value) {
            this.node.setAttribute(name, value);
        },
        setAttrNS: function setAttrNS(ns, name, value) {
            this.node.setAttributeNS(ns, name, value);
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
                headers = config.headers || {},
                xhr = new XMLHttpRequest(),
                fail = function fail() {
                console.log("Request Fail: " + url);
                config.fail && config.fail();
            };

            if (config.get) {
                url += "?" + encodeUrlParams(config.get);
            }

            xhr.open(type, url, true);

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
                    } else if (xhr.status == 404) {
                        fail();
                    }
                }
            };

            xhr.ontimeout = fail;
            xhr.onerror = fail;

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
        useComponent: function useComponent(component) {},
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
            return Date.now();
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
            return createElement("svg", { viewBox: "0 0 100 100", class: "svgIcon gaugeVectorIcon" }, createElement("circle", { class: "gaugeCircle gaugeCircleLoading gaugeCircleLoadingLeft strokeBackground", r: "46", cx: "50%", cy: "50%" }), createElement("circle", { class: "gaugeCircle gaugeCircleLoading gaugeCircleLoadingRight strokeBackground", r: "46", cx: "50%", cy: "50%" }), createElement("circle", { class: "gaugeCircle gaugeCircleBackground strokeBackground", r: "46", cx: "50%", cy: "50%" }), createElement("circle", { class: "gaugeCircle gaugeCircleCurrentSpeed strokePrimary", r: "46", cx: "50%", cy: "50%", "stroke-dashoffset": "404" }));
        },
        resultGraph: function resultGraph(type) {
            return createElement("svg", { viewBox: "0 0 100 100", class: "svgIcon graph " + (type ? "upload" : "download") + "Graph" }, createElement("polyline", { points: "0,0 0,100 0,100 100,100" }));
        },
        connections: function connections(type) {
            return createElement("svg", { viewBox: "0 0 512 512", class: "svgIcon" }, createElement("path", { d: "M234.693,270.09c8.754-20.745,16.175-37.019,22.266-48.82c4.568-8.754,8.854-16.13,12.851-22.126    c3.993-5.996,8.85-11.849,14.558-17.558c5.715-5.711,12.278-9.998,19.705-12.85c7.419-2.855,15.697-4.283,24.838-4.283h73.084    v54.818c0,2.474,0.903,4.617,2.71,6.423c1.807,1.809,3.949,2.712,6.42,2.712c2.669,0,4.859-0.854,6.563-2.568l91.365-91.359    c1.718-1.715,2.573-3.901,2.573-6.567c0-2.666-0.855-4.853-2.573-6.574L417.976,30.26c-2.279-1.902-4.572-2.849-6.852-2.849    c-2.669,0-4.853,0.855-6.57,2.57c-1.704,1.713-2.56,3.9-2.56,6.565v54.814h-73.084c-12.946,0-25.126,1.574-36.549,4.714    c-11.423,3.14-21.56,7.135-30.409,11.991c-8.852,4.854-17.416,11.372-25.697,19.558c-8.28,8.182-15.324,16.084-21.126,23.697    c-5.804,7.611-11.897,17.127-18.272,28.549c-6.374,11.42-11.514,21.414-15.416,29.978c-3.903,8.566-8.613,19.13-14.132,31.693    c-8.757,20.746-16.18,37.022-22.27,48.822c-4.567,8.754-8.853,16.132-12.847,22.127c-3.996,5.996-8.853,11.848-14.562,17.557    c-5.711,5.715-12.278,9.999-19.701,12.854c-7.421,2.854-15.703,4.284-24.838,4.284H9.139c-2.666,0-4.856,0.849-6.567,2.566    c-1.709,1.711-2.568,3.895-2.568,6.563v54.823c0,2.663,0.862,4.853,2.575,6.57c1.714,1.712,3.905,2.567,6.567,2.567h63.954    c12.946,0,25.125-1.574,36.547-4.716c11.42-3.142,21.558-7.139,30.406-11.991c8.853-4.856,17.417-11.376,25.697-19.562    c8.278-8.179,15.324-16.084,21.128-23.694c5.802-7.615,11.894-17.129,18.271-28.548c6.374-11.424,11.516-21.416,15.416-29.979    C224.464,293.217,229.173,282.656,234.693,270.09z" }), createElement("path", { d: "M9.135,164.45h63.954c8.375,0,16.13,1.381,23.269,4.143s13.134,6.091,17.987,9.995c4.854,3.904,9.707,9.279,14.561,16.13    c4.853,6.855,8.708,12.9,11.563,18.131c2.853,5.236,6.374,12.137,10.562,20.701c14.659-34.451,27.694-60.432,39.115-77.943    c-30.454-42.825-69.473-64.241-117.058-64.241H9.135c-2.666,0-4.856,0.855-6.567,2.57C0.859,95.647,0,97.834,0,100.5v54.818    c0,2.667,0.855,4.851,2.568,6.563C4.283,163.596,6.473,164.45,9.135,164.45z" }), createElement("path", { d: "M417.983,286.085c-2.286-1.902-4.572-2.847-6.858-2.847c-2.662,0-4.853,0.852-6.563,2.566    c-1.711,1.711-2.566,3.901-2.566,6.563v54.823h-73.091c-8.378,0-16.132-1.383-23.271-4.147    c-7.139-2.759-13.135-6.088-17.987-9.993c-4.849-3.901-9.705-9.28-14.558-16.135c-4.856-6.852-8.713-12.898-11.567-18.135    c-2.852-5.226-6.373-12.135-10.561-20.693c-14.655,34.259-27.596,60.24-38.828,77.943c5.137,7.422,10.467,14.037,15.987,19.838    c5.518,5.804,10.754,10.896,15.702,15.276c4.949,4.374,10.564,8.186,16.844,11.416c6.283,3.237,11.8,5.948,16.563,8.139    c4.771,2.189,10.76,3.949,17.99,5.283c7.231,1.328,13.322,2.334,18.271,2.991c4.948,0.664,11.707,1.143,20.272,1.431    c8.562,0.287,15.51,0.376,20.834,0.287c5.335-0.096,13.045-0.198,23.134-0.287c10.089-0.093,18.179-0.144,24.271-0.144v54.819    c0,2.474,0.903,4.616,2.71,6.423c1.807,1.808,3.949,2.711,6.42,2.711c2.669,0,4.859-0.855,6.563-2.566l91.365-91.358    c1.711-1.718,2.566-3.901,2.566-6.57c0-2.666-0.855-4.853-2.573-6.563L417.983,286.085z" }));
        }
    };

    return function (name, props) {
        return icons[name](props);
    };
}(window, document, app);

var components = app.components,
    createElement = app.createElement,
    useComponent = app.useComponent,
    svgIcon = app.svgIcon,
    createRef = app.createRef;

exports.default = app;
exports.createElement = createElement;
exports.createRef = createRef;
exports.useComponent = useComponent;
exports.svgIcon = svgIcon;

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
    var toggleButton = (0, _App.createRef)("button"),
        consoleHidden = true;

    function toggleConsole() {
        consoleHidden = !consoleHidden;
        toggleButton.textContent(consoleHidden ? "Show console" : "Hide console");

        _App2.default.event("consoleToggle", { toggle: consoleHidden });
    }

    this.render = function () {
        return (0, _App.createElement)("header", { className: "mainHeader" }, (0, _App.createElement)("div", { className: "container" }, (0, _App.createElement)("div", { className: "headerContents" }, (0, _App.createElement)("div", { className: "logoWrapper" }, (0, _App.createElement)("span", { className: "logoIcon" }, (0, _App.svgIcon)("testLogo")), (0, _App.createElement)("span", { className: "logoText", textContent: "SPEEDTEST" })), (0, _App.createElement)(toggleButton, { className: "consoleToggleButton", textContent: "Show console", onclick: toggleConsole }))));
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
        renderStage,
        initEvent;

    function updateStatus(config) {
        _TestConfig2.default.started = void 0 === config.started ? _TestConfig2.default.started : config.started;
        _TestConfig2.default.runType.current = void 0 === config.runType ? _TestConfig2.default.runType.current : config.runType;
        _TestConfig2.default.onprogress = void 0 === config.onprogress ? _TestConfig2.default.onprogress : config.onprogress;

        var runType = "test--" + _TestConfig2.default.runType.current + (_TestConfig2.default.onprogress ? " onprogress" : "");

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
    this.render = function () {
        return (0, _App.createElement)("div", { className: "pageContent" }, (0, _App.createElement)("div", { className: "container" }, (0, _App.createElement)(testWrapper, { className: "testWrapper" }, (0, _App.createElement)(_TestStage2.default)), (0, _App.createElement)("div", { className: "log", textContent: "0.0" })));
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

var test = window.test = {
    started: false, // false = stop - finished, true = started
    runType: true, // true = download, false = upload
    onprogress: false, // true = progress, false = waiting
    increments: [0, 2, 4, 6, 8, 10, 12, 14, 16],
    rateProgress: 0,
    uploadFileDup: 24,
    downloadRunTime: isLocal ? 1000 * 8 : 15000,
    uploadRunTime: isLocal ? 1000 * 8 : 15000,
    hearbeatTime: 80,
    connections: {
        count: 3,
        multi: 3,
        single: 1,
        mode: "multi"
    },
    resultsPrecision: 1,
    xhrData: [],
    downloadServers: ["https://m0006.movispeed.es/apolo/data/a100m.dat", "https://open.cachefly.net/downloading", "https://fl-us-ping.vultr.com/vultr.com.100MB.bin"],
    gaugeCircleStrokeMin: 404,
    gaugeCircleStrokeMax: 194,
    gaugeNeedleRotateMin: 49, // in deg
    gaugeNeedleRotateMax: 310, // in deg
    user: {
        isp: null,
        ip: null
    }
};

test.increments = [0, 1, 5, 10, 20, 30, 50, 75, 100];
test.downloadURL = isLocal ? URL_BASE + "/download/download.file" : test.downloadServers[1], test.uploadURL = isLocal ? URL_BASE + "/upload/upload.file" : "https://m0006.movispeed.es/apolo/subida.php", test.gaugeCircleOffsetRef = test.gaugeCircleStrokeMax - test.gaugeCircleStrokeMin;
test.gaugeNeedleRotateRef = test.gaugeNeedleRotateMax - test.gaugeNeedleRotateMin; // in deg
test.tempFile = function (size) {
    var str = "11";
    for (var dup = 0; dup < size; dup++) {
        str += str;
    }
    var blob = new Blob([str], { type: "plain/text" });
    return blob;
}(test.uploadFileDup);

test.runType = {
    download: false,
    upload: false,
    current: null,
    set: function set(_set) {
        test.runType.download = "download" == _set;
        test.runType.upload = "upload" == _set;
    }
};

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
        testStage = (0, _App.createRef)("div"),
        stageMain = (0, _App.createRef)("main"),
        resultsContainer = (0, _App.createRef)("div"),
        resultDownload = (0, _App.createRef)("div"),
        speedDownloadNumber = (0, _App.createRef)("div"),
        resultUpload = (0, _App.createRef)("div"),
        speedUploadNumber = (0, _App.createRef)("div"),
        consoleWrapper = (0, _App.createRef)("div"),
        consoleElem = (0, _App.createRef)("textarea"),
        ispNameElem = (0, _App.createRef)("div"),
        publicIpElem = (0, _App.createRef)("div"),
        multiModeButton = (0, _App.createRef)("button"),
        singleModeButton = (0, _App.createRef)("button"),
        connections,
        globalLoadStartTime,
        intervalStarted,
        intervalHeartbeat,
        testConsole;

    testConsole = function () {
        var consoleInner = "",
            scrollTop,
            scrollHeight,
            elemHeight;

        function _log(data) {
            consoleInner += (consoleInner != "" ? "\n" : "") + data;

            scrollHeight = consoleElem.scrollHeight(), scrollTop = consoleElem.scrollTop(), elemHeight = consoleElem.offsetHeight();

            consoleElem.value(consoleInner);

            if (scrollTop > scrollHeight - elemHeight - 10) {
                consoleElem.scrollTop(consoleElem.scrollHeight());
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
                consoleElem.value(consoleInner);
            }
        };
    }();
    function fileData() {
        var data = new FormData();

        data.append("file-" + _App2.default.random(13), _TestConfig2.default.tempFile);

        return data;
    }
    function speedRateMbps(rate) {
        rate = rate / 125000;
        return rate.toFixed(rate > 100 ? 1 : 2); // convert bytes per second to megabits per second
    }
    function abortXhr() {
        connections && connections.requests && connections.requests.forEach(function (req) {
            req.abort && req.abort();
        });
    }
    function getLoadedBytes() {
        var loaded = { count: 0, items: [] };
        connections.requests.forEach(function (req) {
            loaded.count += req.loaded;
            loaded.items.push(req.loaded);
        });
        //        if(test.runType.upload){
        //            var avgLoad = loaded.count / loaded.items.length;
        //            loaded.count = 0;
        //            loaded.items.forEach(function(item, index){
        //                loaded.count += item > avgLoad ? avgLoad : item;
        //            });
        //        }
        return loaded.count;
    }
    function countArrayItems(arr) {
        var count = 0;
        arr.forEach(function (item) {
            count += item;
        });
        return count;
    }
    function loadedData(loaded) {
        if (loaded == 0) return "0KB";
        return loaded / 1000000 > 1.024 ? (loaded / 1000000).toFixed(2) + "MB" : (loaded / 1000).toFixed(2) + "KB";
    }
    function showUserProvider(isp, ip) {
        _TestConfig2.default.user.isp = isp;
        _TestConfig2.default.user.ip = ip;
        ispNameElem.textContent(isp), publicIpElem.textContent(ip);
    }
    function stopTest() {
        clearInterval(intervalHeartbeat);
        abortXhr();
    }
    function toggleConnectionsMode(mode) {
        multiModeButton.removeClass("active"), singleModeButton.removeClass("active");

        (mode == "multi" ? multiModeButton : singleModeButton).addClass("active");
        _TestConfig2.default.connections.count = mode == "multi" ? _TestConfig2.default.connections.multi : _TestConfig2.default.connections.single;
        _TestConfig2.default.connections.mode = mode;
    }
    function closeGauge() {
        stageMain.append((0, _App.createElement)(_StartButton2.default, { textContent: "DE NUEVO", action: 2, tryAgainAnim: true }));
        _App2.default.event("closeGauge");
    }
    function clearResults() {
        resultDownload.find("resultValue").textContent("- -");
        resultDownload.find("progressBar").style({ width: 0 });

        resultUpload.find("resultValue").textContent("- -");
        resultUpload.find("progressBar").style({ width: 0 });

        testConsole.clear();
        testConsole.log("Starting test...");
    }
    function breakTest() {
        var id = setTimeout(function () {}, 0);
        while (id--) {
            clearTimeout(id);
        }
        stopTest();
        setTimeout(function () {
            _App2.default.event("testStatus", { onprogress: false });
            _App2.default.event("clearGauge");
            setTimeout(function () {
                if (_TestConfig2.default.runType.download) {
                    _App2.default.event("runTest", { runType: "upload" });
                } else {
                    _App2.default.event("closeTest");
                    closeGauge();
                }
            }, 500);
        }, 1300);
    }
    function startInterval() {
        intervalStarted = true;

        _App2.default.event("testStatus", { onprogress: true });

        var speedNumberElem = _TestConfig2.default.runType.download ? speedDownloadNumber : speedUploadNumber,
            progressBarElem = (_TestConfig2.default.runType.download ? resultDownload : resultUpload).find("progressBar"),
            runTime = _TestConfig2.default.runType.download ? _TestConfig2.default.downloadRunTime : _TestConfig2.default.uploadRunTime,


        // Iterval vars
        time = _App2.default.getTime(),
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
            intervalTime,
            loadedBytes,
            prev = {
            instantSpeed: 0,
            averageSpeed: 0,
            loaded: 0,
            transferTime: 0
        },
            buffer = {
            items: [{
                loaded: 0,
                loadTime: 0,
                time: 0
            }],
            splice: function splice() {
                var time = buffer.items[buffer.items.length - 1].time - buffer.items[1].time;

                if (time >= 2000) {
                    buffer.items.splice(0, 1);
                    buffer._time = time;
                }
            },
            update: function update() {
                var first, last;

                first = buffer.items[0];
                last = buffer.items[buffer.items.length - 1];

                buffer.size = last.loaded - first.loaded;
                buffer.time = last.time - first.time;
            },
            size: 0,
            time: 0
        },
            instant = {
            speed: 0,
            results: []
        },
            average = {
            speed: 0,
            results: [],
            maxLen: 1
        },
            output = {
            speed: 0
        },
            speedRate;

        loadTime = time - globalLoadStartTime;

        function parseValue(val) {
            if (_TestConfig2.default.resultsPrecision > 1) return val;
            var str = val.toString(),
                i = str.indexOf(".");
            return str.substr(0, val >= 1 ? i + 2 : i + 3);
        }
        function intervalCallback() {
            time = _App2.default.getTime();
            loadTime = time - globalLoadStartTime;
            intervalTime = time - intervalStartedTime;
            loadedBytes = getLoadedBytes();
            transfer.transferred = loadedBytes - prev.loaded;
            transfer.lastTime = transfer.transferred > 0 ? time : transfer.lastTime;
            transfer.time = time - transfer.lastTime;
            if (transfer.time > transfer.maxTime) {
                transfer.maxTime = transfer.time;
            }

            if (transfer.transferred > 0 && prev.transferTime > 0) {
                transfer.average.count += prev.transferTime;
                transfer.average.len += 1;
                transfer.average.time = transfer.average.count / transfer.average.len;

                //console.log(test.runType.download ? "[download]" : "[upload]", "average time:", transfer.average.time, "max time:", transfer.maxTime)
            }
            if (transfer.transferred > 0) {
                buffer.items.push({ loaded: loadedBytes, time: loadTime });
                if (transfer.maxTime < 2500 && intervalTime < 10000) {
                    buffer.splice();
                }
                buffer.update();
            } else {
                buffer.time = loadTime - buffer.items[0].time;
            }

            instant.speed = buffer.size / (buffer.time / 1000);

            transfer.transferred > 0 && instant.results.push(instant.speed);
            if (instant.results.length > (loadTime > 2000 ? 3 : 3) || transfer.time > 200 && instant.results.length > 12) {
                instant.results.splice(0, 1);
            }
            average.speed = countArrayItems(instant.results) / instant.results.length;
            average.results.push(average.speed);
            average.maxLen = Math.round(transfer.average.time / _TestConfig2.default.hearbeatTime) || 1;
            average.maxLen = average.maxLen > 1 ? 1 : average.maxLen;

            if (average.results.length > average.maxLen) {
                average.results.splice(0, average.results.length - average.maxLen);
            }
            console.log(average.results.length);

            output.speed = countArrayItems(average.results) / average.results.length;

            speedRate = speedRateMbps(output.speed);

            speedNumberElem.textContent(parseValue(speedRate));
            progressBarElem.style({ width: (time - intervalStartedTime) / runTime * 100 + "%" });

            _App2.default.event("updateGauge", { speedRate: speedRate });

            testConsole.state("instant: " + (instant.speed / 125000).toFixed(2) + "mbps, average: " + speedRate + "mbps, transf: " + loadedData(transfer.transferred) + ", loaded: " + loadedData(loadedBytes) + ", time: " + loadTime / 1000 + "s");

            prev.instantSpeed = instant.speed;
            prev.averageSpeed = average.speed;
            prev.loaded = loadedBytes;
            prev.transferTime = transfer.time;
        }

        setTimeout(function () {
            intervalStartedTime = _App2.default.getTime();
            // start interval
            intervalHeartbeat = setInterval(intervalCallback, _TestConfig2.default.hearbeatTime);

            _App2.default.event("listenSpeed");

            setTimeout(function () {
                stopTest();

                connections.requests.forEach(function (req) {
                    testConsole.state("xhr " + req.id + " loaded: " + (req.loaded / 1000000).toFixed(3) + "MB, maxTransferTime: " + req.maxTransferTime + "ms");
                });

                testConsole.state("loaded: " + (getLoadedBytes() / 1000000).toFixed(2) + "MB, finalSpeed: " + (getLoadedBytes() / 125000 / ((_App2.default.getTime() - globalLoadStartTime) / 1000)).toFixed(2) + "mbps, bufferTime: " + buffer._time + "ms, maxTransferTime: " + transfer.maxTime + "ms, time: " + (_App2.default.getTime() - globalLoadStartTime) / 1000 + "s");

                setTimeout(function () {
                    _App2.default.event("testStatus", { onprogress: false });
                    _App2.default.event("clearGauge");

                    setTimeout(function () {
                        if (_TestConfig2.default.runType.download) {
                            _App2.default.event("runTest", { runType: "upload" });
                        } else {
                            _App2.default.event("closeTest");
                            closeGauge();
                        }
                    }, 500);
                }, 500);
            }, runTime + _TestConfig2.default.hearbeatTime);
        }, loadTime > 420 ? 1 : 420 - loadTime);
    }
    function requestConfig(req) {
        var target = _TestConfig2.default.runType.download ? req : req.upload,
            firstTransferred = 0,
            progressCount = 1,
            prev = {
            loaded: 0,
            progressTime: 0
        },
            transfer = {
            time: 0
        },
            time;

        req.loaded = 0;
        req.firstTransferred = 0;
        req.id = connections.requests.length + 1;
        req.maxTransferTime = 0;

        target.addEventListener("progress", function (e) {
            time = _App2.default.getTime();
            req.loaded = prev.loaded;
            transfer.time = time - (prev.progressTime || time);
            if (transfer.time > req.maxTransferTime) {
                req.maxTransferTime = transfer.time;
            }

            if (!globalLoadStartTime) globalLoadStartTime = _App2.default.getTime();
            if (!intervalStarted && progressCount == 3) startInterval();
            if (!firstTransferred) {
                firstTransferred = e.loaded, req.firstTransferred = e.loaded;
                testConsole.state("xhr " + req.id + " first transfer: " + loadedData(e.loaded));
            } else if (_TestConfig2.default.runType.upload) {
                testConsole.state("xhr " + req.id + " transfer " + progressCount + ": " + loadedData(req.loaded - prev.loaded) + ", loaded: " + loadedData(req.loaded) + ", time: " + (_App2.default.getTime() - globalLoadStartTime) / 1000);
            }

            prev.loaded = e.loaded - firstTransferred;
            prev.progressTime = time;
            progressCount++;
        });
    }

    this.events = {
        initializeTest: function initializeTest() {
            clearResults();

            setTimeout(function () {
                stageMain.append((0, _App.createElement)(_GaugeContainer2.default));
            }, 450);
        },
        runTest: function runTest(e) {
            //return;
            _TestConfig2.default.runType.set(e.runType);

            var data = _TestConfig2.default.runType.download ? null : fileData(),
                xhr,
                v;

            testConsole.state("starting measures...");

            connections = {
                requests: []
            };
            globalLoadStartTime = 0;
            intervalStarted = false;

            for (var i = 0; i < _TestConfig2.default.connections.count; i++) {
                v = _App2.default.random(6) + "" + _App2.default.getTime();

                xhr = _App2.default.fetch({
                    xhr: requestConfig,
                    url: _TestConfig2.default.runType.download ? _TestConfig2.default.downloadURL : _TestConfig2.default.uploadURL,
                    get: { v: v },
                    post: data,
                    fail: breakTest,
                    success: breakTest
                });

                connections.requests.push(xhr);
            }
        },
        consoleToggle: function consoleToggle(e) {
            consoleWrapper.toggleClass("hidden");
            consoleElem.scrollTop(consoleElem.scrollHeight());
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
    this.componentDidMount = function () {
        if (!_TestConfig2.default.user.ip) {
            _App2.default.fetch({
                url: isLocal ? "http://ip-api.com/json/" : "https://ipapi.co/json/",
                success: function success(fetch) {
                    showUserProvider(_App2.default.ucWords(isLocal ? fetch.isp : fetch.org), isLocal ? fetch.query : fetch.ip);
                }
            });
        }
    };
    this.render = function () {
        return (0, _App.createElement)(testStage, { className: "testStage" }, (0, _App.createElement)("section", { className: "resultsArea" }, (0, _App.createElement)(resultsContainer, { className: "resultsData" }, (0, _App.createElement)("button", { className: "stageClose", title: "Cerrar Prueba", "aria-label": "Cerrar Prueba", onclick: $this.closeStage }, (0, _App.svgIcon)("close")), (0, _App.createElement)(resultDownload, { className: "resultItem resultDownload" }, (0, _App.createElement)("div", { className: "resultContainer" }, (0, _App.createElement)("div", { className: "resultHeader" }, (0, _App.createElement)("div", { className: "resultHeaderWrapper" }, (0, _App.createElement)("div", { className: "resultIcon" }, (0, _App.svgIcon)("downlink")), (0, _App.createElement)("div", { className: "resultTitle" }, (0, _App.createElement)("b", { textContent: "DESCARGAR" })), (0, _App.createElement)("div", { className: "resultUnit textHolder" }, (0, _App.createElement)("span", { textContent: "Mbps" })))), (0, _App.createElement)("div", { className: "resultBody" }, (0, _App.createElement)(speedDownloadNumber, { className: "resultValue speedDownloadNumber" }, (0, _App.createElement)("span", { textContent: "- -" }))), (0, _App.createElement)("div", { className: "progressBarWrapper" }, (0, _App.createElement)("div", { className: "progressBar" })))), (0, _App.createElement)(resultUpload, { className: "resultItem resultUpload" }, (0, _App.createElement)("div", { className: "resultContainer" }, (0, _App.createElement)("div", { className: "resultHeader" }, (0, _App.createElement)("div", { className: "resultHeaderWrapper" }, (0, _App.createElement)("div", { className: "resultIcon" }, (0, _App.svgIcon)("uplink")), (0, _App.createElement)("div", { className: "resultTitle" }, (0, _App.createElement)("b", { textContent: "SUBIR" })), (0, _App.createElement)("div", { className: "resultUnit textHolder" }, (0, _App.createElement)("span", { textContent: "Mbps" })))), (0, _App.createElement)("div", { className: "resultBody" }, (0, _App.createElement)(speedUploadNumber, { className: "resultValue speedUploadNumber" }, (0, _App.createElement)("span", { textContent: "- -" }))), (0, _App.createElement)("div", { className: "progressBarWrapper" }, (0, _App.createElement)("div", { className: "progressBar" }))))), (0, _App.createElement)("div", { className: "resultsGraph hidden" }, (0, _App.svgIcon)("resultGraph", 0), (0, _App.svgIcon)("resultGraph", 0))), (0, _App.createElement)(stageMain, { className: "stageMain" }, (0, _App.createElement)(_StartButton2.default, { textContent: "COMENZAR", action: 1 })), (0, _App.createElement)(consoleWrapper, { className: "testConsoleWrapper hidden" }, (0, _App.createElement)(consoleElem, { readonly: "", spellcheck: "false", value: "waiting to start the test..." })), (0, _App.createElement)("footer", { className: "stage-footer" }, (0, _App.createElement)("div", { className: "footerItem" }, (0, _App.createElement)("div", { className: "footerItem-details" }, (0, _App.createElement)("div", { className: "footerItem-icon" }, (0, _App.svgIcon)("user")), (0, _App.createElement)("div", { className: "footerItem-content" }, (0, _App.createElement)(ispNameElem, { className: "footerItem-title ispName", textContent: _TestConfig2.default.user.isp || "- -" }), (0, _App.createElement)(publicIpElem, { className: "footerItem-description textHolder", textContent: _TestConfig2.default.user.ip || "- -" })))), (0, _App.createElement)("div", { className: "footerItem" }, (0, _App.createElement)("div", { className: "footerItem-details" }, (0, _App.createElement)("div", { className: "footerItem-icon" }, (0, _App.svgIcon)("connections")), (0, _App.createElement)("div", { className: "footerItem-content" }, (0, _App.createElement)("div", { className: "footerItem-title", textContent: "Conexiones" }), (0, _App.createElement)("div", { className: "footerItem-description" }, (0, _App.createElement)("div", { className: "testModeToggle-wrapper" }, (0, _App.createElement)(multiModeButton, { className: "testModeToggle-button" + (_TestConfig2.default.connections.mode == "multi" ? " active" : ""), textContent: "Multi", onclick: function onclick() {
                toggleConnectionsMode("multi");
            } }), (0, _App.createElement)("span", { className: "testModeToggle-divider textHolder", textContent: "•" }), (0, _App.createElement)(singleModeButton, { className: "testModeToggle-button" + (_TestConfig2.default.connections.mode == "single" ? " active" : ""), textContent: "Unica", onclick: function onclick() {
                toggleConnectionsMode("single");
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
    var $this = this,
        startWrapper = (0, _App.createRef)("div"),
        buttonText = (0, _App.createRef)("div");

    this.handleClick = function () {
        startWrapper.addClass("anim");

        _App2.default.event("initializeTest");

        setTimeout(function () {
            $this.removeComponent();
            _App2.default.event("runTest", { runType: "download" });
        }, 2600);
    };
    this.componentDidMount = function () {
        props.tryAgainAnim && setTimeout(function () {
            startWrapper.removeClass("tryAgainAnim");
        }, 1200);
    };
    this.render = function () {
        return (0, _App.createElement)(startWrapper, { className: "startWrapper" + (props.action == 1 ? "" : " tryAgain") + (props.tryAgainAnim ? " tryAgainAnim" : "") }, (0, _App.createElement)("button", { className: "startButton", ariaLabel: props.textContent, onclick: this.handleClick }, (0, _App.createElement)(buttonText, { className: "buttonText", textContent: props.textContent }), (0, _App.createElement)("div", { className: "buttonBackgroundPrimary" }), (0, _App.createElement)("div", { className: "buttonBackgroundSecondary" }), (0, _App.createElement)("div", { className: "buttonBorder" }), props.action == 1 ? (0, _App.createElement)("div", { className: "buttonAnimatedBorder" }) : null));
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
        increments = _TestConfig2.default.increments,
        incrementsLen = _TestConfig2.default.increments.length,
        firstIncrement = _TestConfig2.default.increments[0],
        lastIncrement = _TestConfig2.default.increments[_TestConfig2.default.increments.length - 1],
        incrementsRefPercent = 100 / (_TestConfig2.default.increments.length - 1),
        gaugeContainer = (0, _App.createRef)("div"),
        gaugeState = (0, _App.createRef)("div"),
        speedDetailsNumber = (0, _App.createRef)("div"),
        incrementsContainer = (0, _App.createRef)("div"),
        gaugeNeedle = (0, _App.createRef)("div"),
        gaugeIcon = (0, _App.createRef)("div"),
        speedDatils = (0, _App.createRef)("div"),
        connectingElem = (0, _App.createRef)("div"),
        currentSpeed,
        prevSpeed,
        activeIncrements,
        gaugePercent,
        circleOffset,
        needleRotate,
        gaugeCircleSpeed,
        listenInterval;

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
    function gaugeDashoffset(speedRate) {
        var calc = _TestConfig2.default.gaugeCircleOffsetRef * calcGaugePercent(speedRate) / 100 + _TestConfig2.default.gaugeCircleStrokeMin;
        document.querySelector(".gaugeCircleCurrentSpeed").setAttribute("stroke-dashoffset", calc);
        return calc;
    }
    function parseValue(val) {
        if (_TestConfig2.default.resultsPrecision > 1) return val;
        var str = val.toString(),
            i = str.indexOf(".");
        return str.substr(0, val >= 1 ? i + 2 : i + 3);
    }
    function updateSpeed(speedRate) {
        currentSpeed = speedRate;

        speedDetailsNumber.textContent(parseValue(speedRate));
    }
    function updateGauge() {
        if (prevSpeed != currentSpeed) {
            activeIncrements = "";

            increments.forEach(function (item, index) {
                if (currentSpeed >= item && currentSpeed > firstIncrement) activeIncrements += " incrementOn--" + index;
            });

            gaugePercent = calcGaugePercent(currentSpeed);
            circleOffset = _TestConfig2.default.gaugeCircleOffsetRef * gaugePercent / 100 + _TestConfig2.default.gaugeCircleStrokeMin;
            needleRotate = _TestConfig2.default.gaugeNeedleRotateRef * gaugePercent / 100 + _TestConfig2.default.gaugeNeedleRotateMin;

            gaugeCircleSpeed.setAttr("stroke-dashoffset", circleOffset);
            gaugeNeedle.style({ transform: "rotateZ(" + needleRotate + "deg)" });
            incrementsContainer.className("incrementsContainer" + activeIncrements);

            prevSpeed = currentSpeed;
        }
    }

    this.events = {
        listenSpeed: function listenSpeed() {
            speedDatils.removeClass("unseen");
            connectingElem.addClass("unseen");

            listenInterval = setInterval(updateGauge, 120);
        },
        updateGauge: function updateGauge(e) {
            updateSpeed(e.speedRate);
        },
        clearGauge: function clearGauge() {
            clearInterval(listenInterval);
            updateSpeed("0.0");
            updateGauge();
        },
        closeGauge: function closeGauge() {
            gaugeContainer.addClass("close");
            setTimeout(function () {
                $this.removeComponent();
            }, 575);
        }
    };
    this.componentDidMount = function () {
        gaugeCircleSpeed = gaugeIcon.find("gaugeCircleCurrentSpeed");
    };
    this.componentWillUnmount = function () {
        clearInterval(listenInterval);
    };
    this.render = function () {
        return (0, _App.createElement)(gaugeContainer, { className: "gaugeContainer" }, (0, _App.createElement)("div", { className: "gaugeInner" }, (0, _App.createElement)(incrementsContainer, { className: "incrementsContainer" }, increments.map(function (num, i) {
            return (0, _App.createElement)("div", { className: "increment increment--" + i }, (0, _App.createElement)("b", { textContent: num }));
        })), (0, _App.createElement)(gaugeNeedle, { className: "gaugeNeedle" }, (0, _App.svgIcon)("gaugeNeedle")), (0, _App.createElement)(gaugeState, { className: "gaugeState" }, (0, _App.createElement)(speedDatils, { className: "speedDetailsContainer state unseen" }, (0, _App.createElement)(speedDetailsNumber, { className: "speedDetailsNumber" }, (0, _App.createElement)("span", { textContent: "0.0" })), (0, _App.createElement)("div", { className: "" }, (0, _App.createElement)("span", { className: "speedDetailsIcon" }, (0, _App.svgIcon)("uplink")), (0, _App.createElement)("span", { className: "speedDetailsUnit textHolder", textContent: "Mbps" }))), (0, _App.createElement)(connectingElem, { className: "connectingServer state textHolder" }, (0, _App.createElement)("b", { textContent: "Conectando..." })))), (0, _App.createElement)(gaugeIcon, { className: "gaugeAnim gaugeIcon" }, (0, _App.svgIcon)("gaugeVector")));
    };
}

exports.default = GaugeContainer;

/***/ })
/******/ ]);
