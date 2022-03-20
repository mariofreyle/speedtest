/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "svgIcon": () => (/* binding */ svgIcon),
/* harmony export */   "$": () => (/* binding */ $)
/* harmony export */ });
window.app = function(window, document){
    // Initialize Variables
    var app, node,
        initialId = Math.floor(Math.random() * 1000),
        element = {},
        elementPrefix = "__App_",
        elementProps  = {events: 1, methods: 1, onMount: 1, onDismount: 1},
        nodePrototype = {className: 1, id: 1, textContent: 1, value: 1, selected: 1, checked: 1, onclick: 1, onmousemove: 1, onmouseover: 1, onmouseout: 1, onkeyup: 1, onkeydown: 1, onchange: 1, onsubmit: 1, action: 1, ariaLabel: 1},
        nsTags = {svg: 1, path: 1, circle: 1, polyline: 1, polygon: 1, linearGradient: 1, defs: 1, stop: 1, g: 1},
        isArray = Array.isArray;
    
    // Useful Functions
    function guid(){
        initialId += 1;
        return initialId;
    }
    
    function rtrim(str){
        return str.replace(/[\x20\t\r\n\f]+/g, " ").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    function scapeRegExp(a){
        return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    
    function encodeUrlParams(params){
        var data = "", prop;
        for(prop in params){
            data += prop + "=" + encodeURIComponent(params[prop]) + "&";
        }
        return data.substring(0, data.length - 1);
    }
    
    function isIterable(elem){
        return elem && typeof elem == "object" && "length" in elem;
    }
    function convertToArray(elem){
        return isIterable(elem) ? elem : [elem];
    }
    
    function parseNumber(value, props, parseFn){
        props = props || {};
        props.value = parseFn(value);
        if(isNaN(props.value) && typeof props.default == "number"){
            return props.default;
        }
        props.value = props.value < props.min ? props.min : props.value;
        props.value = props.value > props.max ? props.max : props.value;
        return props.value;
    }
    
    function classesToArray(value){
        if(typeof value === "string"){
            return value.match(/[^\x20\t\r\n\f]+/g) || [];
        }
        return [];
    }
    
    function hasClass(elem, className, classList){
        classList = elem.getAttribute("class") || "";
        return classList.search(new RegExp("(\\s|^)" + className + "(\\s|$)")) !== -1;
    }
    
    function addClass(elem, classes){
        var clazz, update,
            classList = elem.getAttribute("class") || "",
            j = 0;
        while(clazz = classes[j++]){
            if(classList.search(new RegExp("(\\s|^)" + clazz + "(\\s|$)")) === -1){
                classList += " " + clazz;
                update = true;
            }
        }
        if(update){
            elem.setAttribute("class", rtrim(classList));
        }
    }
    
    function removeClass(elem, classes){
        var clazz, update,
            classList = elem.getAttribute("class") || "",
            j = 0;
        while(clazz = classes[j++]){
            if(classList.search(new RegExp("(\\s|^)" + clazz + "(\\s|$)")) !== -1){
                classList = classList.replace(new RegExp("(\\s|^)" + clazz + "(\\s|$)", "g"), " ");
                update = true;
            }
        }
        if(update){
            elem.setAttribute("class", rtrim(classList));
        }
    }
    
    function toggleClass(elem, className, state){
        state = typeof state == "boolean" ? state : !hasClass(elem, className);
        return state ? addClass(elem, [className]) : removeClass(elem, [className]);
    }
    
    
    
    element.listenEvents = function(elem){
        var events = elem[elementPrefix + "events"], elementId = elem[elementPrefix + "id"], callback, eventName;
        
        for(eventName in events){
            callback = events[eventName];
            
            if(app.events[eventName] === void 0) app.events[eventName] = {};
            
            app.events[eventName]["_" + elementId] = {
                componentId: elementId,
                callback: callback
            }
        }
    }
    element.removeEvents = function(elem){
        var events = elem[elementPrefix + "events"], elemId = elem[elementPrefix + "id"], eventName;

        for(eventName in events){
            if(app.events[eventName] && app.events[eventName]["_" + elemId]){
                delete app.events[eventName]["_" + elemId];
            }
        }
    }
    element.mountAll = function(elements){
        function search(childs){
            var len = childs.length, item, index;

            for(index = 0; index < len; index++){
                item = childs[index];
                // si el elemento tiene el methodo onMount entonces este se ejecutará (montar componente)
                if(item[elementPrefix + "onMount"]) item[elementPrefix + "onMount"]();
                // si el elemento tiene eventos estos se agregaran a la lista de eventos
                if(item[elementPrefix + "events"]) element.listenEvents(item);

                if(item.children.length) search(item.children);
            }
        }
        search(convertToArray(elements));
    }
    element.dismountAll = function(elements){
        function search(childs){
            var len = childs.length, item, index;

            for(index = 0; index < len; index++){
                item = childs[index];
                // si el elemento tiene el methodo componentWillUnmount entonces este se ejecutará (desmontar componente)
                if(item[elementPrefix + "onDismount"]) item[elementPrefix + "onDismount"]();
                // si el elemento tiene eventos estos se eliminaran y dejaran de escuchar
                if(item[elementPrefix + "events"]) element.removeEvents(item);
                
                if(item.children.length) search(item.children);
            }
        }
        search(convertToArray(elements));
    }
    element.create = function(args){
        var elem, index, item, key, node, len, ind,
            name = args[0],
            props = args[1] || {},
            nameType = typeof name,
            argsLen = args.length;
        
        if(nameType == "function"){
            item = new name(props) || {};
            elem = item.render ? item.render() : {};
            elem = elem[0];
            
            if(elem && elem.nodeType){
                for(key in item){
                    if(key in elementProps){
                        elem[elementPrefix + key] = item[key];
                    }
                }
                this[0] = elem;
                this.length = 1;
            }else{
                this.length = 0;
            }
            
            return this;
        }
        
        if(nameType == "string"){
            elem = name in nsTags ? document.createElementNS("http://www.w3.org/2000/svg", name) : document.createElement(name);

            elem[elementPrefix + "id"] = guid();
        }else if(name){
            elem = name[0];
        }

        if(elem && elem.nodeType){

            for(key in props){
                if(key in nodePrototype){
                    elem[key] = props[key];
                }else{
                    elem.setAttribute(key, props[key]);
                }
            }

            for(index = 2; index < argsLen; index++){
                if(item = args[index]){
                    if(typeof item == "string"){
                        elem.appendChild(document.createTextNode(item));
                    }else if(isArray(item)){
                        for(ind = 0, len = item.length; ind < len; ind++){
                            if(node = item[ind]){
                                node = (node.nodeType ? node : node[0]) || {};
                                if(node.nodeType){
                                    elem.appendChild(node);
                                }
                            }
                        }
                    }else{
                        node = (item.nodeType ? item : item[0]) || {};
                        if(node.nodeType){
                            elem.appendChild(node);
                        }
                    }
                }
            }

            this[0] = elem;
            this.length = 1;

        }else{
            this.length = 0;
        }
        
        return this;
    }
    element.init = function(selector){
        
        if(!selector){
            this.length = 0;
            
            return this;
        }
        
        var elem,
            match,
            i = 0;
        
        if(typeof selector == "string"){
            try {
                match = document.querySelectorAll(selector);
            }catch(e){
                match = [];
            }
        }else if(isIterable(selector) && selector !== window){
            match = selector;
        }else{
            match = [selector]
        }
        
        while(elem = match[i]){
            this[i] = elem;
            i++;
        }
        
        this.length = match.length;

        return this;
    }
    // SET ELEMENT PROPERTYS
    element.init.prototype = element.create.prototype = {
        forEach: function(callback){
            var item,
                i = 0;
            
            while(item = this[i++]){
                callback(new element.init(item), i, this);
            }
        },
        remove: function(){
            var elem,
                i = 0;
            
            while(elem = this[i++]){
                if(elem.parentNode){
                    
                    element.dismountAll(elem);
                    
                    elem.parentNode.removeChild(elem);
                }
            }
            
            return this;
        },
        addClass: function(value){
            var elem, classes,
                i = 0;
            
            classes = classesToArray(value);
            
            if(classes.length){
                while(elem = this[i++]){
                    if(elem.nodeType === 1){
                        addClass(elem, classes);
                    }
                }
            }
            
            return this;
        },
        removeClass: function(value){
            var elem, classes,
                i = 0;
            
            classes = classesToArray(value);
            
            if(classes.length){
                while(elem = this[i++]){
                    if(elem.nodeType === 1){
                        removeClass(elem, classes);
                    }
                }
            }
            
            return this;
        },
        hasClass: function(value){
            var className,
                elem = this[0];
            
            className = "" + value + "";
            
            if(elem && elem.nodeType === 1){
                return hasClass(elem, className);
            }
            
            return false;
        },
        toggleClass: function(value, state){
            var elem,
                i = 0;
            
            if(typeof value == "string" && value.length){
                while(elem = this[i++]){
                    if(elem.nodeType === 1){
                        toggleClass(elem, value, state);
                    }
                }
            }
            
            return this;
        },
        value: function(value){
            var elem,
                valueUndef = value === undefined,
                i = 0;
            
            while(elem = this[i++]){
                if(valueUndef){
                    return elem.value;
                }else{
                    elem.value = value;
                }
            }
            
            return this;
        },
        eq: function(i){
            return new element.init(this[i]);
        },
        checked: function(value){
            var elem,
                valueValid = typeof value == "boolean",
                i = 0;
            
            while(elem = this[i++]){
                if(valueValid){
                    elem.checked = value;
                }else{
                    return elem.checked;
                }
            }
            
            return this;
        },
        selected: function(value){
            var elem,
                valueValid = typeof value == "boolean",
                i = 0;
            
            while(elem = this[i++]){
                if(valueValid){
                    elem.selected = value;
                }else{
                    return elem.selected;
                }
            }
            
            return this;
        },
        textContent: function(value){
            var elem,
                valueUndef = value === undefined,
                i = 0;
            
            while(elem = this[i++]){
                if(valueUndef){
                    return elem.textContent;
                }else{
                    elem.textContent = value;
                }
            }
            
            return this;
        },
        attr: function(attr, value){
            var elem,
                valueUndef = value === undefined,
                attrType = typeof attr,
                i = 0;
            
            if(attrType == "string" || attrType == "number"){
                while(elem = this[i++]){
                    if(valueUndef){
                        if(elem.getAttribute){
                            return elem.getAttribute(attr);
                        }
                    }else{
                        elem.setAttribute && elem.setAttribute(attr, value);
                    }
                }
            }
            
            return this;
        },
        removeAttr: function(value){
            var elem, attr, attrNames, j,
                i = 0;
            
            attrNames = classesToArray(value);
            
            while(elem = this[i++]){
                if(elem.nodeType === 1){
                    j = 0;
                    while(attr = attrNames[j++]){
                        elem.removeAttribute(attr);
                    }
                }
            }
            
            return this;
        },
        style: function(value){
            var elem, key,
                isString = typeof value == "string",
                i = 0;
            
            if(value && (typeof value == "object" || isString)){
                while(elem = this[i++]){
                    if(elem.nodeType){
                        if(isString){
                            return elem.style[value];
                        }

                        for(key in value){
                            elem.style[key] = value[key];
                        }
                    }
                }
            }
            
            return this;
        },
        childs: function(){
            return new element.init((this[0] || {}).children);
        },
        child: function(index){
            var elem = this[0],
                children, child;
            
            if(typeof index == "number" && elem && elem.nodeType){
                children = elem.children;
                
                child = children[index < 0 ? (children.length + index) : index];
            }
            
            return new element.init(child);
        },
        first: function(props){
            return new element.init((this[0] || {}).firstElementChild);
        },
        last: function(){
            return new element.init((this[0] || {}).lastElementChild);
        },
        find: function(selector){
            var find,
                elem = this[0],
                i = 0;
            
            if(typeof selector == "string"){
                if(elem && elem.querySelectorAll){
                    find = elem.querySelectorAll(selector);
                }
            }
            
            return new element.init(find);
        },
        parent: function(){
            var elem = this[0],
                i = 0;
            
            if(elem && elem.parentNode){
                return new element.init(elem.parentNode)
            }
            
            return new element.init();
        },
        closest: function(className){
            var find,
                elem = this[0],
                i = 0;
            
            if(typeof className == "string"){
                className = className.replace(".", "");
                
                if(elem && elem.nodeType === 1){
                    function search(parent){
                        if(parent.nodeType === 1){
                            if(hasClass(parent, className)){
                                find = parent;
                            }else{
                                parent.parentNode && search(parent.parentNode);
                            }
                        }
                    }
                    search(elem.parentNode);
                }
            }
            
            return new element.init(find);
        },
        prepend: function(insert){
            var elem = this[0],
                i,
                len,
                node;
            
            if(insert){
                insert = isArray(insert) ? insert : [insert];
                insert.reverse && insert.reverse();
                
                if(elem){
                    for(i = 0, len = insert.length; i < len; i++){
                        if(node = insert[i]){
                            node = node.length ? node[0] : node;

                            if(node.nodeType){
                                if(elem.firstChild){
                                    elem.insertBefore(node, elem.firstChild);
                                }else{
                                    elem.appendChild(node);
                                }
                                element.mountAll(node);
                            }
                        }
                    }
                }
            }
            
            return this;
        },
        append: function(insert){
            var elem = this[0],
                i,
                len,
                node;
            
            if(insert){
                insert = isArray(insert) ? insert : [insert];
                
                if(elem){
                    for(i = 0, len = insert.length; i < len; i++){
                        if(node = insert[i]){
                            node = node.length ? node[0] : node;
                            
                            if(node.nodeType){
                                elem.appendChild(node);
                                element.mountAll(node);
                            }
                        }
                    }
                }
            }
            
            return this;
        },
        render: function(insert){
            var elem = this[0],
                i,
                len,
                node;
            
            if(insert){
                insert = isArray(insert) ? insert : [insert];
                
                if(elem){
                    element.dismountAll(elem.childNodes);
                    
                    while(elem.firstChild){
                        elem.removeChild(elem.firstChild);
                    }
                    
                    for(i = 0, len = insert.length; i < len; i++){
                        if(node = insert[i]){
                            node = node.length ? node[0] : node;

                            if(node.nodeType){
                                elem.appendChild(node);
                                element.mountAll(node);
                            }
                        }
                    }
                }
            }
            
            return this;
        },
        empty: function(){
            var elem,
                i = 0;

            while(elem = this[i++]){
                if(elem.nodeType){
                    element.dismountAll(elem.childNodes);
                    
                    while(elem.firstChild){
                        elem.removeChild(elem.firstChild);
                    }
                }
            }
            
            return this;
        },
        replaceWith: function(insert){
            var elem = this[0];
            
            if(insert){
                insert = insert.nodeType ? insert : insert[0] || {};
                
                if(elem && elem.parentNode){
                    element.dismountAll(elem);

                    elem.parentNode.replaceChild(insert, elem);
                    element.mountAll(insert);
                }
            }
            
            return this;
        },
        on: function(type, listener){
            var elem,
                i = 0;
            while(elem = this[i++]){
                if(elem.addEventListener){
                    elem.addEventListener(type, listener);
                }
            }
        },
        method: function(name, props){
            var elem,
                i = 0;
            
            if(typeof name == "string"){
                while(elem = this[i++]){
                    elem[elementPrefix + "methods"][name](props);
                }
            }
            
            return this;
        },
        scrollTop: function(value){
            var elem,
                valueUndef = value === undefined,
                i = 0;
            
            while(elem = this[i++]){
                if(valueUndef){
                    return elem.scrollTop;
                }else{
                    elem.scrollTop = value;
                }
            }
            
            return valueUndef ? 0 : this;
        },
        scrollLeft: function(value){
            var elem,
                valueUndef = value === undefined,
                i = 0;
            
            while(elem = this[i++]){
                if(valueUndef){
                    return elem.scrollLeft;
                }else{
                    elem.scrollLeft = value;
                }
            }
            
            return valueUndef ? 0 : this;
        },
        scrollWidth: function(){
            var elem = this[0],
                i = 0;
            if(elem){
                return elem.scrollWidth;
            }
            return 0;
        },
        scrollHeight: function(){
            var elem = this[0],
                i = 0;
            if(elem){
                return elem.scrollHeight;
            }
            return 0;
        },
        offsetWidth: function(){
            var elem = this[0],
                i = 0;
            if(elem){
                return elem.offsetWidth;
            }
            return 0;
        },
        offsetHeight: function(){
            var elem = this[0],
                i = 0;
            if(elem){
                return elem.offsetHeight;
            }
            return 0;
        },
        focus: function(){
            var elem = this[0],
                i = 0;
            if(elem){
                elem.focus();
            }
            return this;
        },
        width: function(){
            var elem = this[0],
                i = 0;
            if(elem){
                return elem.clientWidth;
            }
            return 0;
        },
        height: function(){
            var elem = this[0],
                i = 0;
            if(elem){
                return elem.clientHeight;
            }
            return 0;
        }
    }
    
    
    
    app = {
        fetch: function(config){
            var xhr = new XMLHttpRequest(),
                isFormData = config.post && typeof config.post == "object" && config.post.constructor && config.post.constructor.name == "FormData",
                postData = config.post ? (!isFormData ? encodeUrlParams(config.post) : config.post) : null,
                url = config.url || "",
                type = config.post ? "POST" : "GET",
                dataType = config.dataType,
                send = config.send === void 0 ? true : config.send,
                response;
            
            function success(response){
                if(typeof config.success == "function") config.success(response, xhr.status, xhr);
                if(typeof config.done == "function") config.done(xhr.status, xhr);
            }
            function fail(){
                console.log("Request Fail: " + url, xhr.status);
                if(typeof config.fail == "function") config.fail(xhr.status, xhr);
                if(typeof config.done == "function") config.done(xhr.status, xhr);
            }
            
            if(config.get){
                url += (url.indexOf("?") > -1 ? "&" : "?") + encodeUrlParams(config.get);
            }
            
            xhr.open(config.type === void 0 ? type : config.type, url, true);
            
            if(typeof config.xhr == "function") config.xhr(xhr);
            if(typeof config.timeout == "number") xhr.timeout = config.timeout;
            
            xhr.onload = function(){
                if(xhr.status == 200){
                    response = xhr.responseText;
                    if(dataType == "json" || (xhr.getResponseHeader("Content-Type") || "").search("application/json") > -1){
                        try {
                            response = JSON.parse(response);
                        }catch(e){
                            return fail();
                        }
                    }
                    success(response);
                }else{
                    fail();
                }
            }
            
            xhr.ontimeout = fail;
            xhr.onerror = fail;
            xhr._send = function(){
                xhr.send(postData);
            };
            
            if(!isFormData){
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
            if(send){
                xhr._send();
            }

            return xhr;
        },
        createElement: function(){
            return new element.create(arguments);
        },
        $: function(value){
            return new element.init(value);
        },
        event: function(eventName, props){
            var events = app.events[eventName] || {},
                key,
                item;
            
            for(key in events){
                item = events[key];
                item && item.callback && item.callback(props);
            }
        },
        events: {},
        elementPrefix: elementPrefix,
        nodePrototype: nodePrototype,
        guid: guid,
        _guid: function(){
            function s4(){
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4 () + s4()
        },
        /* ----------- Utils ----------- */
        each: function(arr, callback, key, len){
            if(isArray(arr)){
                len = arr.length;
                for(key = 0; key < len; key++){
                    callback(arr[key], key);
                }
                return;
            }
            for(key in arr){
                callback(arr[key], key);
            }
        },
        trim: function(value, trim){
            trim = trim ? scapeRegExp(trim) : trim;
            var exp = trim ? new RegExp("^" + trim + "|" + trim + "+$", "gm"): /^\s+|\s+$/gm;
            return value.replace(exp, "");
        },
        time: function(){
            return Date.now();
        },
        random: function(a){
            return ("000000000000000000" + Math.random().toString().slice(2)).slice(-12);
        },
        ucWords(string){
            if(!string) return;
            var arrayWords = string.split(" "),
                returnString = "",
                len;
            function ucFirst(str){
                return str.substr(0, 1).toUpperCase() + str.substr(1, str.length).toLowerCase();
            }
            len = arrayWords.length;
            for(var i = 0; i < len ; i++){
                returnString = (i != (len - 1)) ? (returnString + ucFirst(arrayWords[i]) + " ") : (returnString + ucFirst(arrayWords[i]));
            }
            return returnString;
        },
        parseInt: function(value, props){
            return parseNumber(value, props, parseInt);
        },
        parseFloat: function(value, props){
            return parseNumber(value, props, parseFloat);
        },
        fixNumber: function(number, len, index){
            number  = number.toString();
            number += (number.indexOf(".") == -1 ? "." : "") + "00000";
            index   = number.indexOf(".");
            return number.slice(0, index + 1 + parseInt(len));
        },
        cookie: function(name, value){
            if(typeof name != "string"){
                return null;
            }
            if(value === undefined){
                var cname = name + "=",
                    ca = document.cookie.split(";");
                for(let i = 0; i < ca.length; i++){
                    let c = ca[i];
                    while(c.charAt(0) == " "){
                        c = c.substring(1);
                    }
                    if(c.indexOf(name) == 0){
                        return c.substring(name.length, c.length);
                    }
                }
                return null;
            }else{
                var date = new Date(),
                    days = 365,
                    expires;
            
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

                expires = "expires=" + date.toUTCString();
                document.cookie = name + "=" + value + ";" + expires + ";path=/";
            }
        }
    }
    
    app.isMobile = function(w, n){
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(n.userAgent || n.vendor || w.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((n.userAgent || n.vendor || w.opera).substr(0, 4)))
    }(window, window.navigator);
    
    window.addEventListener("resize", function(){
        app.event("appResize");
    });
    
    window.$ = app.$;
    
    return app;
    
}(window, document);

app.svgIcon = function(window, document, app){
    var nodePrototype = app.nodePrototype;
    
    function createElement(name, _props, _childs){
        var props = _props || {},
            arsLen = arguments.length,
            elem = document.createElementNS("http://www.w3.org/2000/svg", name),
            key;
        
        for(key in props){
            if(key in nodePrototype){
                elem[key] = props[key]
            }else{
                elem.setAttribute(key, props[key])
            }
        }
        
        for(var index = 2; index < arsLen; index++){
            elem.appendChild(arguments[index]);
        }
        
        elem[app.elementPrefix + "id"] = app.guid();
        
        return elem;
    }
    var icons = {
        close: function(){
            return (
                createElement("svg", {viewBox: "0 0 213 213", class: "svgIcon closeIcon"},
                    createElement("path", {d: "M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0l-75.937 75.937L30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936L5.242 182.427c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312L131.804 106.491z"})
                )
            )
        },
        alert: function(){
            return (
                createElement("svg", {viewBox: "0 0 512 512", class: "svgIcon alertIcon"},
                    createElement("path", {d: "M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2 c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8 c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"})
                )
            )
        },
        testLogo: function(){
            return (
                createElement("svg", {viewBox: "0 0 512 512", class: "svgIcon testLogoIcon"},
                    createElement("path", {d: "M357.423,209.039c-9.093-9.093-23.832-9.093-32.925,0l-66.389,66.386c-3.286-0.779-6.708-1.203-10.23-1.203 c-24.435,0-44.316,19.897-44.316,44.358c0,24.457,19.88,44.357,44.316,44.357c24.46,0,44.357-19.9,44.357-44.357 c0-3.523-0.424-6.945-1.203-10.231l66.389-66.386C366.515,232.871,366.515,218.13,357.423,209.039z"}),
                    
                    createElement("path", {d: "M437.083,120.099c-99.837-99.837-262.318-99.837-362.206,0.003c-86.213,86.257-99.573,222.315-31.769,323.513    c7.156,10.683,21.618,13.535,32.3,6.38c10.681-7.156,13.538-21.617,6.38-32.3c-19.051-28.437-30.268-60.238-33.925-92.598h21.887    c12.857,0,23.281-10.422,23.281-23.281c0-12.856-10.424-23.281-23.281-23.281H47.789C52.008,239.863,66.9,202.32,92,170.742    l15.842,15.842c4.546,4.547,10.504,6.821,16.461,6.821c5.958,0,11.917-2.274,16.461-6.821c9.092-9.09,9.092-23.832,0-32.924    l-15.909-15.91c32.054-25.745,69.977-40.674,108.842-44.8v21.986c0,12.859,10.424,23.281,23.281,23.281    c12.857,0,23.281-10.422,23.281-23.281V93.163c38.183,4.411,75.369,19.28,106.875,44.596l-15.902,15.902    c-9.09,9.093-9.09,23.832,0.003,32.927c4.544,4.544,10.504,6.818,16.459,6.818c5.96,0,11.917-2.274,16.463-6.821l15.826-15.826    c25.109,31.572,40.004,69.111,44.224,107.779h-21.961c-12.856,0-23.281,10.425-23.281,23.281    c0,12.859,10.425,23.281,23.281,23.281h21.889c-3.658,32.36-14.878,64.159-33.935,92.595c-7.16,10.68-4.304,25.142,6.374,32.3    c3.981,2.668,8.485,3.947,12.941,3.947c7.503,0,14.869-3.622,19.362-10.321C536.709,342.411,523.338,206.353,437.083,120.099z"})
                )
            )
        },
        user: function(){
            return (
                createElement("svg", {viewBox: "0 0 512 512", class: "svgIcon userIcon"},
                    createElement("path", {d: "M256 0c88.366 0 160 71.634 160 160s-71.634 160-160 160S96 248.366 96 160 167.634 0 256 0zm183.283 333.821l-71.313-17.828c-74.923 53.89-165.738 41.864-223.94 0l-71.313 17.828C29.981 344.505 0 382.903 0 426.955V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-37.045c0-44.052-29.981-82.45-72.717-93.134z"})
                )
            )
        },
        ping: function(){
            return (
                createElement("svg", {viewBox: "0 0 16 16", class: "svgIcon"},
                    createElement("path", {d: "M4.16 6.672a.69.69 0 00.513.246h6.667c.368 0 .667-.282.667-.63 0-.347-.3-.628-.667-.628H5.953l2.04-1.924a.61.61 0 00.215-.625.653.653 0 00-.492-.464.692.692 0 00-.663.203L4.027 5.703a.602.602 0 000 .887c.04.033.085.06.133.082zM8 0C3.582 0 0 3.38 0 7.547s3.582 7.546 8 7.546 8-3.38 8-7.546C16 3.38 12.418 0 8 0zM1.333 7.547c0-3.474 2.985-6.29 6.667-6.29s6.667 2.816 6.667 6.29c0 3.468-2.977 6.28-6.654 6.288-3.695 0-6.68-2.815-6.68-6.288zm10.494.874a.686.686 0 00-.514-.245H4.647c-.37 0-.667.282-.667.63 0 .347.298.628.667.628h5.393L8 11.358a.609.609 0 00-.215.624c.06.23.25.41.493.465a.69.69 0 00.662-.203l3.027-2.855a.606.606 0 000-.888.626.626 0 00-.14-.08z"})
                )
            )
        },
        jitter: function(){
            return (
                createElement("svg", {viewBox: "0 0 24 24", class: "svgIcon"},
                    createElement("path", {d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.4 22 2 17.5 2 12S6.4 2 12 2s10 4.4 10 10-4.5 10-10 10z"}),
                    createElement("path", {d: "M14.7 14.2c-1.6 0-2.7-.9-3.4-1.8-1.4-2.1-4.3-2.1-4.5.6 0 .4-.3.8-.8.8-.3 0-.8-.3-.8-.8 0-2.9 2.2-3.6 3.8-3.6 1.8 0 2.7.9 3.4 1.9 1.1 1.5 4.2 2.6 4.7-.9 0-.4.3-.8.8-.8.4 0 .8.3.8.8.1 3.5-2.9 3.8-4 3.8z"})
                )
            )
        },
        downlink: function(){
            return (
                createElement("svg", {viewBox: "0 0 16 16", class: "svgIcon downlinkIcon"},
                    createElement("path", {d: "M8 0a8 8 0 100 16A8 8 0 008 0zM1.333 8a6.667 6.667 0 1113.334 0A6.667 6.667 0 011.333 8zm10-.667a.675.675 0 00-.473.194l-2.2 2.2v-5.06a.666.666 0 10-1.333 0v5.06L5.16 7.533a.668.668 0 00-1.12.3.67.67 0 00.173.647l3.334 3.333a.663.663 0 00.946.001l3.334-3.333a.667.667 0 00-.481-1.148h-.014z"})
                )
            )
        },
        uplink: function(){
            return (
                createElement("svg", {viewBox: "0 0 16 16", class: "svgIcon uplinkIcon"},
                    createElement("path", {d: "M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.667a6.667 6.667 0 11.013 0H8zm.493-10.48a.663.663 0 00-.946-.001L4.213 7.52a.672.672 0 000 .947c.262.26.686.26.947 0l2.2-2.2v5.066a.666.666 0 101.333 0v-5.06l2.2 2.2a.668.668 0 00.935-.946l-3.335-3.34z"})
                )
            )
        },
        resultGraph: function(type){
            return (
                createElement("svg", {viewBox: "0 0 300 100", class: "svgIcon graph"},
                    createElement("polyline", {points: "", class: "line"}),
                    createElement("polygon", {points: "", class: "chart"})
                )
            )
        },
        internet: function(){
            return (
                createElement("svg", {viewBox: "0 0 23 23", class: "svgIcon"},
                    createElement("path", {d: "M12 1C5.94 1 1 5.94 1 12s4.94 11 11 11 11-4.94 11-11S18.06 1 12 1zm9.444 10.247H16.99c-.11-3.487-.86-6.44-2.042-8.26 3.542 1.18 6.177 4.398 6.496 8.26zM12 21.444c-1.557 0-3.273-3.646-3.432-8.69h6.924c-.22 5.043-1.935 8.69-3.492 8.69zM8.568 11.247c.16-5.043 1.875-8.69 3.432-8.69s3.273 3.647 3.432 8.69H8.568zm.48-8.262C7.863 4.812 7.115 7.76 7.005 11.197H2.55c.325-3.812 2.96-7.03 6.497-8.212zm-6.492 9.768H7.01c.11 3.487.86 6.385 2.04 8.212-3.54-1.133-6.175-4.35-6.494-8.212zm12.397 8.26c1.183-1.825 1.93-4.773 2.04-8.21h4.455c-.323 3.812-2.958 7.03-6.495 8.21z"})
                )
            )
        },
        connections: function(){
            return (
                createElement("svg", {viewBox: "0 0 512 512", class: "svgIcon"},
                    createElement("path", {d: "M234.693,270.09c8.754-20.745,16.175-37.019,22.266-48.82c4.568-8.754,8.854-16.13,12.851-22.126    c3.993-5.996,8.85-11.849,14.558-17.558c5.715-5.711,12.278-9.998,19.705-12.85c7.419-2.855,15.697-4.283,24.838-4.283h73.084    v54.818c0,2.474,0.903,4.617,2.71,6.423c1.807,1.809,3.949,2.712,6.42,2.712c2.669,0,4.859-0.854,6.563-2.568l91.365-91.359    c1.718-1.715,2.573-3.901,2.573-6.567c0-2.666-0.855-4.853-2.573-6.574L417.976,30.26c-2.279-1.902-4.572-2.849-6.852-2.849    c-2.669,0-4.853,0.855-6.57,2.57c-1.704,1.713-2.56,3.9-2.56,6.565v54.814h-73.084c-12.946,0-25.126,1.574-36.549,4.714    c-11.423,3.14-21.56,7.135-30.409,11.991c-8.852,4.854-17.416,11.372-25.697,19.558c-8.28,8.182-15.324,16.084-21.126,23.697    c-5.804,7.611-11.897,17.127-18.272,28.549c-6.374,11.42-11.514,21.414-15.416,29.978c-3.903,8.566-8.613,19.13-14.132,31.693    c-8.757,20.746-16.18,37.022-22.27,48.822c-4.567,8.754-8.853,16.132-12.847,22.127c-3.996,5.996-8.853,11.848-14.562,17.557    c-5.711,5.715-12.278,9.999-19.701,12.854c-7.421,2.854-15.703,4.284-24.838,4.284H9.139c-2.666,0-4.856,0.849-6.567,2.566    c-1.709,1.711-2.568,3.895-2.568,6.563v54.823c0,2.663,0.862,4.853,2.575,6.57c1.714,1.712,3.905,2.567,6.567,2.567h63.954    c12.946,0,25.125-1.574,36.547-4.716c11.42-3.142,21.558-7.139,30.406-11.991c8.853-4.856,17.417-11.376,25.697-19.562    c8.278-8.179,15.324-16.084,21.128-23.694c5.802-7.615,11.894-17.129,18.271-28.548c6.374-11.424,11.516-21.416,15.416-29.979    C224.464,293.217,229.173,282.656,234.693,270.09z"}),
                    createElement("path", {d: "M9.135,164.45h63.954c8.375,0,16.13,1.381,23.269,4.143s13.134,6.091,17.987,9.995c4.854,3.904,9.707,9.279,14.561,16.13    c4.853,6.855,8.708,12.9,11.563,18.131c2.853,5.236,6.374,12.137,10.562,20.701c14.659-34.451,27.694-60.432,39.115-77.943    c-30.454-42.825-69.473-64.241-117.058-64.241H9.135c-2.666,0-4.856,0.855-6.567,2.57C0.859,95.647,0,97.834,0,100.5v54.818    c0,2.667,0.855,4.851,2.568,6.563C4.283,163.596,6.473,164.45,9.135,164.45z"}),
                    createElement("path", {d: "M417.983,286.085c-2.286-1.902-4.572-2.847-6.858-2.847c-2.662,0-4.853,0.852-6.563,2.566    c-1.711,1.711-2.566,3.901-2.566,6.563v54.823h-73.091c-8.378,0-16.132-1.383-23.271-4.147    c-7.139-2.759-13.135-6.088-17.987-9.993c-4.849-3.901-9.705-9.28-14.558-16.135c-4.856-6.852-8.713-12.898-11.567-18.135    c-2.852-5.226-6.373-12.135-10.561-20.693c-14.655,34.259-27.596,60.24-38.828,77.943c5.137,7.422,10.467,14.037,15.987,19.838    c5.518,5.804,10.754,10.896,15.702,15.276c4.949,4.374,10.564,8.186,16.844,11.416c6.283,3.237,11.8,5.948,16.563,8.139    c4.771,2.189,10.76,3.949,17.99,5.283c7.231,1.328,13.322,2.334,18.271,2.991c4.948,0.664,11.707,1.143,20.272,1.431    c8.562,0.287,15.51,0.376,20.834,0.287c5.335-0.096,13.045-0.198,23.134-0.287c10.089-0.093,18.179-0.144,24.271-0.144v54.819    c0,2.474,0.903,4.616,2.71,6.423c1.807,1.808,3.949,2.711,6.42,2.711c2.669,0,4.859-0.855,6.563-2.566l91.365-91.358    c1.711-1.718,2.566-3.901,2.566-6.57c0-2.666-0.855-4.853-2.573-6.563L417.983,286.085z"})
                )
            )
        },
        menu: function(){
            return (
                createElement("svg", {viewBox: "0 0 512 512", class: "svgIcon"},
                    createElement("path", {d: "M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"}),
                    createElement("path", {d: "M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"}),
                    createElement("path", {d: "M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20 C512,404.954,503.046,396,492,396z"})
                )
            )
        },
        menu2: function(){
            return (
                createElement("svg", {viewBox: "0 0 124 124", class: "svgIcon"},
                    createElement("path", {d: "M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"}),
                    createElement("path", {d: "M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"}),
                    createElement("path", {d: "M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"})
                )
            )
        },
        settings: function(){
            return (
                createElement("svg", {viewBox: "0 0 512 512", class: "svgIcon"},
                    createElement("path", {d: "M500.6,212.6l-59.9-14.7c-3.3-10.5-7.5-20.7-12.6-30.6l30.6-51c3.6-6,2.7-13.5-2.1-18.3L414,55.4 c-4.8-4.8-12.3-5.7-18.3-2.1l-51,30.6c-9.9-5.1-20.1-9.3-30.6-12.6l-14.4-59.9C297.9,4.8,291.9,0,285,0h-60 c-6.9,0-12.9,4.8-14.7,11.4l-14.4,59.9c-10.5,3.3-20.7,7.5-30.6,12.6l-51-30.6c-6-3.6-13.5-2.7-18.3,2.1L53.4,98 c-4.8,4.8-5.7,12.3-2.1,18.3l30.6,51c-5.1,9.9-9.3,20.1-12.6,30.6l-57.9,14.7C4.8,214.1,0,220.1,0,227v60 c0,6.9,4.8,12.9,11.4,14.4l57.9,14.7c3.3,10.5,7.5,20.7,12.6,30.6l-30.6,51c-3.6,6-2.7,13.5,2.1,18.3L96,458.6 c4.8,4.8,12.3,5.7,18.3,2.1l51-30.6c9.9,5.1,20.1,9.3,30.6,12.6l14.4,57.9c1.8,6.6,7.8,11.4,14.7,11.4h60 c6.9,0,12.9-4.8,14.7-11.4l14.4-57.9c10.5-3.3,20.7-7.5,30.6-12.6l51,30.6c6,3.6,13.5,2.7,18.3-2.1l42.6-42.6 c4.8-4.8,5.7-12.3,2.1-18.3l-30.6-51c5.1-9.9,9.3-20.1,12.6-30.6l59.9-14.7c6.6-1.5,11.4-7.5,11.4-14.4v-60 C512,220.1,507.2,214.1,500.6,212.6z M255,332c-41.4,0-75-33.6-75-75c0-41.4,33.6-75,75-75c41.4,0,75,33.6,75,75 C330,298.4,296.4,332,255,332z"}),
                )
            )
        },
        arrowDown: function(){
            return (
                createElement("svg", {viewBox: "0 0 293 293", class: "svgIcon"},
                    createElement("path", {d: "M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424 C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428 s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"}),
                )
            )
        },
        checked: function(){
            return (
                createElement("svg", {viewBox: "0 0 405 405", class: "svgIcon"},
                    createElement("path", {d: "M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"}),
                )
            )
        },
        info: function(){
            return (
                createElement("svg", {viewBox: "0 0 30 30", class: "svgIcon"},
                    createElement("path", {d: "M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"}),
                )
            )
        },
        close2: function(){
            return (
                createElement("svg", {viewBox: "0 0 503.021 503.021", class: "svgIcon"},
                    createElement("path", {d: "M491.613,75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056,0L251.507,132.222L130.686,11.407 c-15.202-15.202-39.853-15.202-55.055,0L11.401,75.643c-15.202,15.202-15.202,39.854,0,55.056l120.821,120.815L11.401,372.328 c-15.202,15.202-15.202,39.854,0,55.056l64.235,64.229c15.202,15.202,39.854,15.202,55.056,0l120.815-120.814l120.822,120.814 c15.202,15.202,39.854,15.202,55.056,0l64.235-64.229c15.202-15.202,15.202-39.854,0-55.056L370.793,251.514l120.82-120.815 C506.815,115.49,506.815,90.845,491.613,75.643z"}),
                )
            )
        },
        radioButtonOff: function(){
            return (
                createElement("svg", {viewBox: "0 0 24 24", class: "svgIcon"},
                    createElement("path", {d: "M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"}),
                )
            )
        },
        radioButtonOn: function(){
            return (
                createElement("svg", {viewBox: "0 0 24 24", class: "svgIcon"},
                    createElement("path", {d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"}),
                    createElement("path", {d: "M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"}),
                )
            )
        }
    };
    
    return function(name, props){
        return icons[name](props);
    }
    
}(window, document, app);

var createElement = app.createElement,
    svgIcon       = app.svgIcon,
    $             = app.$;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


function MainHeader(){
    var elem = {
        logoIcon:     (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span"),
        switchButton: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
        testNav: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        toggleButton: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
        settingsButton: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
        settingsMenu:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        testOptions:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        testServer:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("select"),
        testTime:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        testConnections:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("select"),
        testEnableBuffer: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        testOutputSpeed: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("select"),
        testMode: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("select"),
        testPrecision: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("select")
    },
        consoleOpened = false,
        initialPage;
    
    function pageView(name, regex, result, view){
        name  = "view";
        name  = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        result = regex.exec(location.search);
        view   = result === null ? null : decodeURIComponent(result[1].replace(/\+/g, " "));
        
        if(view != "ping" && view != "network"){
            view = "main";
        }
        return view;
    }
    
    initialPage = pageView();
    
    function switchStage(view){
        _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("switchStage", {view: view});
    }
    function toggleSettingsMenu(){
        elem.settingsMenu.style({display: elem.settingsMenu.style("display") == "none" ? "block" : "none"});
    }
    
    elem.logoIcon.handleClick = function(){
        switchStage(pageView() == "network" ? "main" : "network");
    }
    elem.switchButton.handleClick = function(){
        switchStage(pageView() == "ping" ? "main" : "ping");
    }
    elem.toggleButton.handleClick = function(){
        consoleOpened = !consoleOpened;
        elem.toggleButton.textContent(consoleOpened ? "Hide console" : "Show console");
        
        _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("consoleToggle", {toggle: consoleOpened});
    }
    elem.testConnections.handleOnchange = function(){
        _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("setConnectionsNumber", parseInt(elem.testConnections.value()));
    }
    elem.testServer.handleOnchange = function(){
        test.selectedServer = test.servers[parseInt(elem.testServer.value())];
        _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("testChangeServer");
    }
    
    this.events = {
        speedTestSettings: function(){
            test.runTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].parseInt(elem.testTime.value(), {min: 1, max: 60, default: 15}) * 1000;
            test.connections.count = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].parseInt(elem.testConnections.value(), {min: 1, max: 6, default: test.connections.default});
            
            test.bufferEnabled  = elem.testEnableBuffer.checked();
            test.outputSpeed    = elem.testOutputSpeed.value();
            test.resultsPrecision = elem.testPrecision.value();
            test.mode   = elem.testMode.value();
        },
        setConnectionsNumber: function(number){
            elem.testConnections.value(number);
        },
        initializeTest: function(){
            elem.testOptions.addClass("disabled-kTch");
        },
        testFinished: function(){
            elem.testOptions.removeClass("disabled-kTch");
        },
        switchStage: function(e){
            var view = e.view;
            
            elem.switchButton.textContent(view != "ping" ? "Ping Test" : "< Back");
            elem.testNav[view != "main" ? "addClass" : "removeClass"]("unseen-u");
        },
        closestServer: function(){
            elem.testServer.render(
                test.servers.map(function(item, index){
                    if(index == 1 && !isLocal || !item.download || !item.upload){
                        return null;
                    }
                    return (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: index, "data-id": index, selected: index == test.selectedServer.id, textContent: item.name})
                })
            );
        }
    }
    this.onMount = function(){
        elem.testMode.child(test.mode - 1).selected(true);
    }

    this.render = function(){
    return (
        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {className:"mainHeader"},
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "container"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "headerContents"}, 
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "logoWrapper"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.logoIcon, {className: "logoIcon", onclick: elem.logoIcon.handleClick}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("testLogo"))),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "logoText", textContent: "SPEEDTEST", onclick: function(){ isLocal && location.reload() }}),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "divider-fGntc", textContent: "•"})
                    ),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "nav-gAfej"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.switchButton, {className: "button-r8eYj",
                                                          textContent: initialPage != "ping" ? "Ping Test" : "< Back",
                                                          onclick: elem.switchButton.handleClick}),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testNav, {className: "testNav-zMcl" + (initialPage != "main" ? " unseen-u" : "")},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.toggleButton, {className: "consoleToggleButton", textContent: "Show console", onclick: elem.toggleButton.handleClick}),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "testSettings-pwLy"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.settingsButton, {className: "settingsButton-rKfy", onclick: toggleSettingsMenu}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("menu")),
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.settingsMenu, {className: "menu-jrbk", style: "display: none;"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuInner-jrbk"},
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testOptions, {className: "content-rtbh"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {},
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "Server: "}),
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testServer, {onchange: elem.testServer.handleOnchange},
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "", textContent: "Loading server list...", selected: true})
                                                    )
                                                )
                                            ),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {},
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "Test time: "}),
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testTime, {type: "number", min: "1", max: "60", value: test.runTime / 1000})
                                                )
                                            ),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {},
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "Connections: "}),
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testConnections, {onchange: elem.testConnections.handleOnchange},
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "1", textContent: "1", selected: test.connections.count == 1}),
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "2", textContent: "2", selected: test.connections.count == 2}),
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "3", textContent: "3", selected: test.connections.count == 3}),
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "4", textContent: "4", selected: test.connections.count == 4}),
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "5", textContent: "5", selected: test.connections.count == 5}),
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "6", textContent: "6", selected: test.connections.count == 6})
                                                    )
                                                )
                                            ),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {},
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "Enable buffer: "}),
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testEnableBuffer, {type: "checkbox", checked: test.bufferEnabled})
                                                )
                                            ),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {},
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "Output speed: "}),
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testOutputSpeed, {},
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "instant", textContent: "Instant speed"}),
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "average", selected: true, textContent: "Average speed"})
                                                    )
                                                )
                                            ),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {},
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "Test mode: "}),
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testMode, {},
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "1", textContent: "Download - Upload", selected: test.mode == "1"}),
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "2", textContent: "Only Download", selected: test.mode == "2"}),
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "3", textContent: "Only Upload", selected: test.mode == "3"})
                                                    )
                                                )
                                            ),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {},
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "Results precision: "}),
                                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testPrecision, {},
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "1", textContent: "1", checked: test.resultsPrecision == "1"}),
                                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "2", textContent: "2", checked: test.resultsPrecision == "2"})
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuOverlay-jrbk", onclick: toggleSettingsMenu})
                                )
                            )
                        )
                    )
                )
            )
        )
    )
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _TestConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _TestStage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _PingStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _NetworkStage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);







function MainContent(){
    var container   = (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        testWrapper = (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    
    function pageView(name, regex, result, view){
        name  = "view";
        name  = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        result = regex.exec(location.search);
        view   = result === null ? null : decodeURIComponent(result[1].replace(/\+/g, " "));
        
        if(view != "ping" && view != "network"){
            view = "main";
        }
        return view;
    }
    
    this.events = {
        switchStage: function(e){
            if(e.pushState == undefined) window.history.pushState("", document.title, URL_BASE + "/?view=" + e.view);
            container.attr("class", "container test--" + e.view);
        },
        closestServer: function(){
            testWrapper.addClass("ready-ctpd");
        }
    }
    
    window.onpopstate = function(){
        _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("switchStage", {view: pageView(), pushState: false});
    }
    
    this.render = function(){
    return (
        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "pageContent"},
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(container, {className: "container test--" + pageView()},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(testWrapper, {className: "testWrapper"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TestStage__WEBPACK_IMPORTED_MODULE_2__["default"]),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PingStage__WEBPACK_IMPORTED_MODULE_3__["default"]),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NetworkStage__WEBPACK_IMPORTED_MODULE_4__["default"])
                ),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "log valueNumber-vgKp", textContent: "0.123456789"}),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "log icrementNumber-vgKp", textContent: "0.123456789"})
            )
        )
    )
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContent);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


var test = window.test = (function(){
    var http = window.location.protocol == "http:",
        test,
        fbStaticUrl,
        mmgWsUrl,
        servers;
    
    function uploadData(){
        var str  = "111111111111111",
            size = 21,
            formData30 = new FormData(),
            formData99 = new FormData(),
            dup,
            blob;

        for(dup = 0; dup < size; dup++){
            str += str;
        }

        blob = new Blob([str], {type: "plain/text"});

        formData30.append("x-file-1", blob);

        formData99.append("x-file-1", blob);
        formData99.append("x-file-2", blob);
        formData99.append("x-file-3", blob);

        return {
            $30: formData30,
            $99: formData99
        }
    }
    function distance(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo){
        var rad, theta, dist;
        rad = Math.PI / 180;
        theta = longitudeFrom - longitudeTo;
        dist = Math.sin(latitudeFrom * rad)
            * Math.sin(latitudeTo * rad)
            + Math.cos(latitudeFrom * rad)
            * Math.cos(latitudeTo * rad)
            * Math.cos(theta * rad);

        return Math.acos(dist) / rad * 60 * 1.853;
    }
    function getDistance(userLatitude, userLongitude, serverLatitude, serverLongitude){
        return parseFloat(distance(userLatitude, userLongitude, serverLatitude, serverLongitude).toFixed(2));
    }
    
    
    fbStaticUrl = "https://z-m-static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico";
    
    mmgWsUrl = "https://mmg.whatsapp.net/v/t62.7119-24/40895583_953423365545486_6554171171410307689_n.enc?ccb=11-4&oh=01_AVwy5taBj8V_yMv1-iJxiO01I-vyAOf-8sDFb_2Swx9pQA&oe=6248AEA5&hash=4WQ79Ml0lBKYLHgtJcgvYTNyCpIjU7c1FYMnSuU4ezM%3D&mode=manual&mms-type=document&__wa-mms=";
    
    
    servers = [{
        name: "Custom Url",
        download: "",
        ping: "",
        latitude: null, longitude: null,
        distance: -1
    }, {
        name: "Local",
        download: URL_BASE + "/xx-download.file",
        upload: URL_BASE,
        ping: URL_BASE + "/index.html",
        latitude: null, longitude: null,
        distance: -1
    }, {
        name: "Akamai Network",
        download: "https://speedtest-download-btwholesale.akamaized.net/PT/1000MB.bin",
        upload: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://speedtest-download-btwholesale.akamaized.net/PT/1000MB.bin",
        latitude: null, longitude: null,
        distance: -1
    }, {
        name: "Cachefly Network",
        http: true,
        download: "https://cachefly.cachefly.net/100mb.test",
        upload: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://cachefly.cachefly.net/100mb.test",
        latitude: null, longitude: null,
        distance: -1
    }, {
        name: "Cloudflare Network",
        wsping: "wss://speedtest.eti.cfdata.org:8080/ws",
        latitude: null, longitude: null,
        distance: -1
    }, {
        name: "New York, US - Clouvider",
        http: true,
        download: "https://nyc.speedtest.clouvider.net/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://nyc.speedtest.clouvider.net/backend/empty.php?cors=true",
        wsping: "wss://nyc.speedtest.clouvider.net.prod.hosts.ooklaserver.net:8080/ws",
        latitude: 40.7177, longitude: -74.0083,
        distance: null,
        countryCode: "US"
    }, {
        name: "New Jersey, US - Vultr",
        download: "https://nyc.veeapps.com/100MB.bin",
        upload: "https://nyc.veeapps.com/upload.php",
        ping: "https://nyc.veeapps.com/ping.txt",
        latitude: 40.5569, longitude: -74.4847,
        distance: null,
        countryCode: "US"
    }, {
        name: "Virginia, US - OVH",
        download: "https://riverside.rocks/speedtest/garbage.php?cors=true&ckSize=100",
        upload: "https://riverside.rocks/speedtest/empty.php?cors=true",
        ping: "https://riverside.rocks/speedtest/empty.php?cors=true",
        wsping: "wss://va.na.speedtest.i3d.net.prod.hosts.ooklaserver.net:8080/ws",
        latitude: 38.9555, longitude: -77.3643,
        distance: null,
        countryCode: "US"
    }, {
        name: "Chicago, US - Vultr",
        download: "https://chi.veeapps.com/100MB.bin",
        upload: "https://chi.veeapps.com/upload.php",
        ping: "https://chi.veeapps.com/ping.txt",
        wsping: "wss://speedtest.chicago.xiber.net.prod.hosts.ooklaserver.net:8080/ws",
        latitude: 41.9943, longitude: -87.962,
        distance: null,
        countryCode: "US"
    }, {
        name: "Atlanta, US - Clouvider",
        http: true,
        download: "https://atl.speedtest.clouvider.net/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://atl.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://atl.speedtest.clouvider.net/backend/empty.php?cors=true",
        wsping: "wss://atl.speedtest.clouvider.net.prod.hosts.ooklaserver.net:8080/ws",
        latitude: 33.749, longitude: -84.388,
        distance: null,
        countryCode: "US"
    }, {
        name: "Miami, US - Vultr",
        download: "https://mia2.veeapps.com/100MB.bin",
        upload: "https://mia2.veeapps.com/100MB.bin",
        ping: "https://mia2.veeapps.com/ping.txt",
        wsping: "wss://lg-mia.fdcservers.net:8080/ws",
        latitude: 25.7975, longitude: -80.2301,
        distance: null,
        countryCode: "US"
    }, {
        name: "Dallas, US - Vultr",
        download: "https://dal.veeapps.com/100MB.bin",
        upload: "https://dal.veeapps.com/upload.php",
        ping: "https://dal.veeapps.com/ping.txt",
        wsping: "wss://tx.na.speedtest.i3d.net.prod.hosts.ooklaserver.net:8080/ws",
        latitude: 32.7872, longitude: -96.7942,
        distance: null,
        countryCode: "US"
    }, {
        name: "Los Angeles, US - Clouvider",
        download: "https://la.speedtest.clouvider.net/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://la.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://la.speedtest.clouvider.net/backend/empty.php?cors=true",
        wsping: "wss://la.speedtest.clouvider.net.prod.hosts.ooklaserver.net:8080/ws",
        http: true,
        latitude: 34.0522, longitude: -118.244,
        distance: null,
        countryCode: "US"
    }, {
        name: "Seattle, US - Vultr",
        download: "https://seattle.veeapps.com/100MB.bin",
        upload: "https://seattle.veeapps.com/upload.php",
        ping: "https://seattle.veeapps.com/ping.txt",
        wsping: "wss://seattle.speedtest.bluespanwireless.com.prod.hosts.ooklaserver.net:8080/ws",
        latitude: 47.6143, longitude: -122.339,
        distance: null,
        countryCode: "US"
    }, {
        name: "Toronto, CA - Vultr",
        download: "https://toronto.veeapps.com/100MB.bin",
        upload: "https://toronto.veeapps.com/upload.php",
        ping: "https://toronto.veeapps.com/ping.txt",
        wsping: "wss://speedtest01.fibernetics.ca:8080/ws",
        latitude: 43.6509, longitude: -79.3618,
        distance: null,
        countryCode: "CA"
    }, {
        name: "Bogota, Colombia - Edgeuno",
        download: "https://speedtest.bog.edgeuno.com/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://speedtest.bog.edgeuno.com/backend/empty.php?cors=true",
        ping: "https://speedtest.bog.edgeuno.com/backend/empty.php?cors=true",
        wsping: "wss://spt-bog1.edgeuno.com:8080/ws",
        latitude: 4.68097, longitude: -74.0413,
        distance: null,
        countryCode: "CO",
        autoselect: false
    }, {
        name: "Quito, Ecuador - Edgeuno",
        download: "https://speedtest.uio1.edgeuno.com/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://speedtest.uio1.edgeuno.com/backend/empty.php?cors=true",
        ping: "https://speedtest.uio1.edgeuno.com/backend/empty.php?cors=true",
        wsping: "wss://spt-uio.edgeuno.com.prod.hosts.ooklaserver.net:8080/ws",
        latitude: -0.180653, longitude: -78.4678,
        distance: null,
        countryCode: "EC",
        autoselect: false
    }, {
        name: "Ciudad De Mexico, Mexico - Vultr",
        download: "https://mx.veeapps.com/100MB.bin",
        upload: "https://mx.veeapps.com/upload.php",
        ping: "https://mx.veeapps.com/ping.txt",
        wsping: "wss://spt-qro1.edgeuno.com.prod.hosts.ooklaserver.net:8080/ws",
        latitude: 20.5888, longitude: -100.39,
        distance: null,
        countryCode: "MX"
    }, {
        name: "Lima, Peru - Edgeuno",
        download: "https://speedtest.lim.edgeuno.com/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://speedtest.lim.edgeuno.com/backend/empty.php?cors=true",
        ping: "https://speedtest.lim.edgeuno.com/backend/empty.php?cors=true",
        latitude: -12.0464, longitude: -77.0428,
        distance: null,
        countryCode: "PE",
        autoselect: false
    }, {
        name: "Buenos Aires, Argentina - Edgeuno",
        download: "https://speedtest.eze1.edgeuno.com/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://speedtest.eze1.edgeuno.com/backend/empty.php?cors=true",
        ping: "https://speedtest.eze1.edgeuno.com/backend/empty.php?cors=true",
        wsping: "wss://spt-eze1.edgeuno.com:8080/ws",
        latitude: -34.5967, longitude: -58.3798,
        distance: null,
        countryCode: "AR",
        autoselect: false
    }, {
        name: "Santiago, Chile - Edgeuno",
        download: "https://speedtest.scl1.edgeuno.com/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://speedtest.scl1.edgeuno.com/backend/empty.php?cors=true",
        ping: "https://speedtest.scl1.edgeuno.com/backend/empty.php?cors=true",
        wsping: "wss://spt-scl1.edgeuno.com:8080/ws",
        latitude: -33.4489, longitude: -70.6693,
        distance: null,
        countryCode: "CL",
        autoselect: false
    }, {
        name: "Sao Paulo, Brazil - Oneprovider",
        download: "https://saopaulo.veeapps.com/100MB.bin",
        upload: "https://saopaulo.veeapps.com/upload.php",
        ping: "https://saopaulo.veeapps.com/ping.txt",
        wsping: "wss://velocidade-spo.algartelecom.com.br:8080/ws",
        latitude: -23.5505, longitude: -46.6333,
        distance: null,
        countryCode: "BR"
    }, {
        name: "Madrid - Movispeed",
        download: "https://m0012.movispeed.es/apolo/data/a100m.dat",
        upload: "https://m0012.movispeed.es/apolo/subida.php",
        ping: "https://m0012.movispeed.es/apolo/data/a1b.dat",
        wsping: "wss://speedtest.digimobil.es:8080/ws",
        latitude: 40.5167, longitude: -3.66479,
        distance: null,
        countryCode: "ES"
    }, {
        name: "London, England - Clouvider",
        download: "https://lon.speedtest.clouvider.net/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://lon.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://lon.speedtest.clouvider.net/backend/empty.php?cors=true",
        wsping: "wss://lon.speedtest.clouvider.net.prod.hosts.ooklaserver.net:8080/ws",
        http: true,
        latitude: 51.5164, longitude: -0.0888135,
        distance: null,
        countryCode: "GB"
    }, {
        name: "Paris, France - Vultr",
        download: "https://paris.veeapps.com/100MB.bin",
        upload: "https://paris.veeapps.com/upload.php",
        ping: "https://paris.veeapps.com/ping.txt",
        wsping: "wss://perf.keyyo.net:8080/ws",
        latitude: 48.9068, longitude: 2.37011,
        distance: null,
        countryCode: "FR",
        checked: true
    }, {
        name: "Amsterdam, Netherlands - Clouvider",
        download: "https://ams.speedtest.clouvider.net/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://ams.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://ams.speedtest.clouvider.net/backend/empty.php?cors=true",
        wsping: "wss://ams.speedtest.clouvider.net.prod.hosts.ooklaserver.net:8080/ws",
        http: true,
        latitude: 52.3702, longitude: 4.89517,
        distance: null,
        countryCode: "NL"
    }, {
        name: "Frankfurt, Germany - Clouvider",
        download: "https://fra.speedtest.clouvider.net/backend/garbage.php?cors=true&ckSize=100",
        upload: "https://fra.speedtest.clouvider.net/backend/empty.php?cors=true",
        ping: "https://fra.speedtest.clouvider.net/backend/empty.php?cors=true",
        wsping: "wss://fra.speedtest.clouvider.net.prod.hosts.ooklaserver.net:8080/ws",
        http: true,
        latitude: 50.1109, longitude: 8.68213,
        distance: null,
        countryCode: "DE"
    }, {
        name: "Sydney - HostHatch",
        download: "https://sydney.veeapps.com/100MB.bin",
        upload: "https://sydney.veeapps.com/upload.php",
        ping: "https://sydney.veeapps.com/ping.txt",
        wsping: "wss://speedtest-syd.apac-tools.ovh.prod.hosts.ooklaserver.net:8080/ws",
        latitude: 27.5433, longitude: 153.203,
        distance: null,
        countryCode: "AU"
    }, {
        name: "Singapore - Vultr",
        download: "https://sg.veeapps.com/100MB.bin",
        upload: "https://sg.veeapps.com/upload.php",
        ping: "https://sg.veeapps.com/ping.txt",
        wsping: "wss://speedtest-sgp.apac-tools.ovh.prod.hosts.ooklaserver.net:8080/ws",
        latitude: 1.35208, longitude: 103.82,
        distance: null,
        countryCode: "SG",
        checked: true
    }, {
        name: "WhatsApp",
        download: mmgWsUrl,
        upload: mmgWsUrl,
        ping: mmgWsUrl,
        latitude: null, longitude: null,
        distance: 100000
    }, {
        name: "Facebook Zero",
        upload: fbStaticUrl,
        ping: fbStaticUrl,
        latitude: null, longitude: null,
        distance: 100000
    }, {
        name: "Custom Url",
        download: "",
        ping: "",
        latitude: null, longitude: null,
        distance: 100000
    }];
    
    servers = servers.map(function(item, index){
        if(http && item.http){
            if(item.preconnect) item.preconnect = item.preconnect.replace("https://", "http://");
            if(item.download)   item.download = item.download.replace("https://", "http://");
            if(item.upload)     item.upload = item.upload.replace("https://", "http://");
        }
        item.id = index;
        return item;
    });
        
    test = {
        started: false,
        opened: false,
        runTime: isLocal ? (10 * 1000) : 15000,
        hearbeatTime: 80,
        connections: {
            default: 4,
            count: 4
        },
        mode: "1",
        bufferEnabled: true,
        resultsPrecision: 1,
        user: {
            ip: null,
            isp: null,
            org: null
        },
        servers: servers,
        getDistance: getDistance,
        uploadData: uploadData(),
        runType: {
            current: "none",
            download: false,
            upload: false
        },
        selectedServer: servers[2],
        closestDone: false
    };

    test.network = (function(){
        return {
            selectedServers: [2]
        }
    })();
    
    test.ping = (function(){
        var graphItems = [], graphItemsLen = 100, index;
        for(index = 0; index < graphItemsLen; index++){
            graphItems.push(index);
        }        
        return {
            results: 100,
            completeAll: true,
            wsping: true,
            selectedServer: servers[2],
            runTime: 10000,
            graphItemsVisible: [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97],
            graphItems: graphItems
        }
    })();
    
    return test;
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (test);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _GaugeContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _TestConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);






function TestStage(props){
    var elem = {
        testStage: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        stageMain: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        stageClose: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
        testEngine: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        resultsContainer: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        pingValue: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span"),
        jitterValue: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span"),
        resultDownload: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        speedDownloadNumber: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        resultUpload: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        speedUploadNumber: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        consoleWrapper: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        console: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea"),
        selectedServerName: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        ispName: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        publicIp: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        multiModeButton: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
        singleModeButton: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button")
    },
    timer = {},
    fixNumber = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].fixNumber,
    graph, ping, interval,
    connections,
    testConsole;
    
    testConsole = (function(){
        var consoleLines = [],
            consoleLen   = 0,
            consoleInner = "",
            scrollTop,
            scrollHeight,
            elemHeight,
            scrollBottom;
        
        function log(data){
            scrollHeight = elem.console.scrollHeight(),
            scrollTop    = elem.console.scrollTop(),
            elemHeight   = elem.console.offsetHeight();
            
            scrollBottom = scrollTop > (scrollHeight - elemHeight - 10);
            
            if(!scrollBottom && consoleLen >= 520) return;
            
            consoleLines.push(data);
            consoleLen++;
            if(consoleLen > 520){
                consoleLines.splice(0, 1);
                consoleLen--;
                consoleInner = consoleLines.join("\n");
            }else{
                consoleInner += (consoleInner == "" ? "" : "\n") + data;
            }
            elem.console.value(consoleInner);
            
            if(scrollBottom){
                elem.console.scrollTop(elem.console.scrollHeight());
            }
        }
        
        return {
            log: function(data){
                log(data);
            },
            state: function(data){
                data = "[" + (_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.download ? "download" : "upload") + "] " + data;
                log(data);
            },
            clear: function(){
                consoleInner = "";
                consoleLines = [];
                consoleLen   = 0;
                elem.console.value(consoleInner);
            },
            scroll: function(){
                elem.console.scrollTop(elem.console.scrollHeight());
            }
        }
    })();
    ping = (function(){
        var callback,
            xhr,
            url,
            urlPrefix,
            sendTime,
            sendCount,
            result,
            jitter,
            startedTime,
            started = false,
            timeout = null;
        
        function finished(){
            if(started){
                callback({
                    min: result.count > 0 ? result.min : "--",
                    jitter: result.count > 1 ? parseFloat(jitter.value.toFixed(1)) : "--"
                });
                started = false;
            }
        }
        function handlePing(){
            result.count++;
            if(result.time < result.min){
                result.min = result.time;
            }
            if(result.count > 1){
                jitter.time = result.time > result.prev ? result.time - result.prev : result.prev - result.time;
                jitter.count += jitter.time;
                jitter.len += 1;
                jitter.value = jitter.count / jitter.len;
            }
            result.prev = result.time;
            if(result.count == 5 || _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time() - startedTime > 2000){
                finished();
            }else{
                send();
            }
        }
        function send(){
            xhr = new XMLHttpRequest();
            
            xhr.open("HEAD", url + urlPrefix + _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].random(), true);

            xhr.onload = function(){
                if(xhr.status == 200){
                    if(sendCount == 1){
                        startedTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
                        send();
                        return;
                    }
                    
                    result.time = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time() - sendTime;
                    
                    timeout = setTimeout(
                        handlePing,
                        60 - result.time > 0 ? 60 - result.time : 0
                    );
                }else{
                    finished();
                }
            }
            
            xhr.timeout   = 10000;
            xhr.onerror   = finished;
            xhr.ontimeout = finished;

            xhr.send();

            sendTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
            sendCount++;
        }
        function start(props){
            url = props.url;
            urlPrefix = props.url.indexOf("?") == -1 ? "?" : "&";
            callback = props.done;
            sendCount = 0;
            result = {
                min: Infinity,
                prev: 0,
                count: 0
            };
            jitter = {
                time: 0,
                value: 0,
                count: 0,
                len: 0
            };
            
            started = true;
            
            send();
        }
        function stop(){
            if(started){
                xhr.abort();
                clearTimeout(timeout);
                started = false;
            }
        }
        return {
            start: start,
            stop: stop
        }
    })();
    function testStatus(config){
        if(config.started != void 0) _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].started = config.started;
        if(config.opened  != void 0) _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].opened  = config.opened;
        if(config.count   != void 0) _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].connections.count = config.count;
        if(config.runType != void 0){
            _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.current  = config.runType;
            _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.download = "download" == config.runType;
            _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.upload = "upload" == config.runType;
        }
        
        var className = "stage-kbsf testStage" + " test--" + (_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].connections.count > 1 ? "multi" : "single") + "Mode" + (_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].opened ? " test--opened" : "") + (_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].started ? " test--started" : "") + (_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.current != "none" ? " test--" + _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.current : "");
        
        elem.testStage.attr("class", className);
    }
    function transferredData(value){
        if(value == 0) return "0KB";
        value = value / 1000;
        return fixNumber(value, value < 100 ? 2 : 1) + "KB";
    }
    function loadedData(value){
        value = value / 1000000;
        return fixNumber(value, value < 10 ? 3 : 2) + "MB";
    }
    function consoleTime(time){
        return (time / 1000).toFixed(time < 10000 ? 3 : 2);
    }
    function consoleSpeed(speed, speedMax, speedStr){
        speedMax = parseInt(speedMax).toString().length;
        speedStr = parseInt(speed).toString().length;
        return fixNumber(speed, 2 + (speedMax - speedStr));
    }
    function showUserProvider(userIp, userIsp, userOrg, userLatitude, userLongitude){
        var index, len, server;
        _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].user.ip  = userIp;
        _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].user.isp = userIsp;
        _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].user.org = userOrg;
        if(typeof userIsp == "string" && typeof userOrg == "string"){
            elem.ispName.textContent(
                userIsp + (userOrg.replace(/\./g, "").toLowerCase() != userIsp.replace(/\./g, "").toLowerCase() ? "\n" + userOrg : "")
            );
        }
        if(userIp){
            elem.publicIp.textContent(userIp);
            if(userIp.indexOf(".") == -1){
                elem.publicIp.addClass("hidden");
            }
        }
        if(isNaN(userLatitude) || isNaN(userLongitude)){
            return;
        }
        for(index = 0, len = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].servers.length; index < len; index++){
            server = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].servers[index];
            if(server.latitude != null){
                server.distance = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].getDistance(userLatitude, userLongitude, server.latitude, server.longitude);
            }
        }
        _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].servers = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].servers.sort(function(a, b){ return a.distance - b.distance; }).map(function(item, index){
            item.id = index;
            return item;
        });
        for(index = 0, len = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].servers.length; index < len; index++){
            server = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].servers[index];
            if(server.distance >= 0){
                _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].ping.selectedServer = server;
                if(server.autoselect != false){
                    _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].selectedServer = server;
                    _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].network.selectedServers = [server.id];
                }
                _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].servers[2].upload = server.upload;
                _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].servers[3].upload = server.upload;
                break;
            }
        }
    }
    function stopTest(log){
        var key;
        for(key in timer){
            clearTimeout(timer[key]);
        }
        connections && connections.requests && connections.requests.forEach(function(req){
            req.abort && req.abort();
        });
        connections && connections.preconnect && connections.preconnect.requests.forEach(function(req){
            req.abort && req.abort();
        });
        interval.stop(log);
    }
    function clearResults(){
        elem.resultsContainer.find(".resultPing_itemValue").textContent("--");
        elem.resultsContainer.find(".resultValue").textContent("- -");
        elem.resultsContainer.find("polygon, polyline").attr("points", "");
        
        testConsole.clear();
        testConsole.log("Starting test...");
    }
    function finishTest(){
        testStatus({started: false, runType: "none"});
        _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("testFinished");
        
        elem.gauge.addClass("close-m6jh");
        
        timer.engine = setTimeout(function(){
            elem.testEngine.render((0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(_StartButton__WEBPACK_IMPORTED_MODULE_1__["default"], {textContent: "DE NUEVO", action: 2, close: true}));
            timer.engine = setTimeout(function(){ elem.testEngine.first().removeClass("close-m6jh"); }, 500);
        }, 600);
    }
    function progressEnd(){
        elem.gauge.method("clear");

        timer.progressEnd = setTimeout(function(){
            if(_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.download && _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].mode == "1"){
                testStatus({runType: "upload"});
                elem.gauge.method("loadType", {type: "upload"});
                _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("runTest");
            }else{
                finishTest();
            }
        }, 600);
    }
    function breakTest(){
        stopTest();
        connections.speedRate && graph.draw(connections.speedRate, _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runTime, 0);
        testConsole.state("measures error");
        timer.breakTest = setTimeout(progressEnd, 1300);
    }
    graph = (function(){
        var graphElem, chart, line,
            points, pointMax,
            maxTime, updateCount,
            chartPoints, graphWidth,
            graphHeight, viewHeight,
            index, item, len,
            pointX, pointY;
        
        return {
            draw: function(point, intervalTime, count){
                if(intervalTime > maxTime) maxTime = intervalTime;

                if(point > pointMax){
                    pointMax = point;
                    
                    len = points.length;
                    chartPoints = "";
                    for(index = 0; index < len; index++){
                        item   = points[index];
                        item.y = ((viewHeight - ((item.value / (pointMax || 1)) * viewHeight)) + 2).toFixed(2);

                        chartPoints += " " + item.x + "," + item.y;
                    }
                }
                
                pointX = (graphWidth * (intervalTime / maxTime)).toFixed(2);
                pointY = ((viewHeight - ((point / (pointMax || 1)) * viewHeight)) + 2).toFixed(2);

                if(count % updateCount == 0){
                    points.push({value: point, x: pointX, y: pointY});
                }else{
                    item = points[points.length - 1];
                    chartPoints = chartPoints.slice(0, (" " + item.x + "," + item.y).length * -1);
                    points[points.length - 1] = {value: point, x: pointX, y: pointY};
                }
                
                chartPoints += " " + pointX + "," + pointY;

                chart.attr("points", ("0," + graphHeight) + (" 0," + points[0].y) + chartPoints + (" " + pointX + "," + graphHeight));
                line.attr("points",  (pointX + "," + pointY) + " " + (graphWidth + "," + pointY));
            },
            open: function(){
                graphElem = (_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.download ? elem.resultDownload : elem.resultUpload).find(".graph");
                chart = graphElem.find(".chart");
                line = graphElem.find(".line");
                points = [];
                pointMax = 0;
                chartPoints = "";
                graphWidth = Math.floor(graphElem.width());
                graphHeight = Math.floor(graphElem.height());
                viewHeight = graphHeight - 4;
                maxTime = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runTime;
                updateCount = Math.ceil((_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runTime / _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].hearbeatTime) / 190);

                graphElem.attr("viewBox", "0 0 " + graphWidth + " " + graphHeight);
            }
        }
    })();
    interval = (function(){
        var speedNumberElem, resultsPrecision,
            time, hearbeatTime, intervalTime,
            intervalStartedTime, loadTime,
            transfer, loaded, intervalId,
            prev, bufferEnabled,
            buffer, speed, count;
    
        function callback(){
            time                 = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
            loadTime             = time - connections.loadStartTime;
            intervalTime         = time - intervalStartedTime;
            loaded               = connections.loaded;
            transfer.transferred = loaded - prev.loaded;
            transfer.lastTime    = transfer.transferred > 0 ? time : transfer.lastTime;
            transfer.time        = time - transfer.lastTime;
            if(transfer.time > transfer.maxTime) transfer.maxTime = transfer.time;
            
            buffer.size     += transfer.transferred;
            buffer.loaded   += transfer.transferred;
            buffer.maxSizeTime = transfer.maxTime > buffer.sizeTime ? transfer.maxTime : buffer.sizeTime;
            
            if(transfer.transferred && time - buffer.startTime > buffer.maxSizeTime){
                buffer.speed     = buffer.size / (time - buffer.startTime);

                buffer.size      = buffer.speed * buffer.maxSizeTime;
                buffer.startTime = time - buffer.maxSizeTime;

                buffer.speed  = buffer.size / (time - buffer.startTime);
                buffer.loaded = buffer.speed * loadTime;
            }
            
            buffer.speed = (buffer.loaded / (loadTime / 1000)) / 125000;
            
            
            speed.instant = (loaded / (loadTime / 1000) / 125000);
            if(bufferEnabled){
                speed.instant = buffer.speed > speed.instant ? buffer.speed : speed.instant;
            }
            speed.instantMax = speed.instant > speed.instantMax ? speed.instant : speed.instantMax;
            
            speed.maxItems = 8;
            
            speed.instantItems.push(speed.instant);
            speed.instantCount += speed.instant;
            
            if(speed.instantItems.length > speed.maxItems){
                speed.instantCount -= speed.instantItems[0];
                speed.instantItems.splice(0, 1);
            }
            
            speed.averageItems.push(speed.instantAverage = speed.instantCount / speed.instantItems.length);
            speed.averageCount += speed.instantAverage;
            
            if(speed.averageItems.length > speed.maxItems){
                speed.averageCount -= speed.averageItems[0];
                speed.averageItems.splice(0, 1);
            }

            speed.average = speed.averageCount / speed.averageItems.length;
            speed.averageMax = speed.average > speed.averageMax ? speed.average : speed.averageMax;
            
            
            speed.rate = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].outputSpeed == "average" ? speed.average : speed.instant;
            speed.rateFixed = fixNumber(speed.rate, speed.rate < 1 ? 2 : resultsPrecision);
            
            testConsole.state("instant: " + consoleSpeed(speed.instant, speed.instantMax) + "mbps, average: " + consoleSpeed(speed.average, speed.averageMax) + "mbps, time: " + consoleTime(loadTime) + "s, loaded: " + loadedData(loaded) + ", transf: " + transferredData(transfer.transferred));
            
            speedNumberElem.textContent(speed.rateFixed);
            elem.gauge.method("updateNumber", {number: speed.rateFixed});
            graph.draw(speed.rate, intervalTime, count);
            
            if(count % 5 == 0){
                elem.gauge.method("updateIcon", {speedRate: speed.rate});
            }
            
            prev.loaded           = loaded;
            connections.speedRate = speed.rate;
            count++;
        }
        function stop(log){
            if(interval.started){
                callback(true);
                clearInterval(intervalId);
            }
            interval.initialized = false;
            interval.started = false;
            
            if(log){
                time = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();

                connections.requests.forEach(function(req, index){
                    if(req.id > connections.count) return;

                    testConsole.state("request " + req.id + " loaded: " + loadedData(req.loaded) + ", max time: " + req.maxTransferTime + "ms" + (req.firstProgressTime ? ", avg time: " + Math.round((req.lastProgressTime - req.firstProgressTime) / (req.progressCount || 1)) + "ms" : ""));
                });
                testConsole.state("final speed: " + fixNumber((loaded / (loadTime / 1000)) / 125000, 2) + "mbps, buffer speed: " + fixNumber(buffer.speed, 2) + "mbps (" + (time - buffer.startTime) + "ms), max time: " + transfer.maxTime + "ms");
            }
        }
        function run(){
            speedNumberElem = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.download ? elem.speedDownloadNumber : elem.speedUploadNumber;
            hearbeatTime = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].hearbeatTime;
            resultsPrecision = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].resultsPrecision;
            transfer = {
                transferred: 0,
                time: 0,
                maxTime: 0
            };
            prev = {
                loaded: 0
            };
            bufferEnabled = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].bufferEnabled;
            buffer = {
                sizeTime:  6000,
                startTime: connections.loadStartTime,
                loaded: 0,
                size: 0,
                speed: 0
            };
            speed = {
                instant: 0,
                instantMax: 0,
                instantItems: [],
                instantCount: 0,
                average: 0,
                averageMax: 0,
                averageItems: [],
                averageCount: 0,
                instantAverage: 0,
                maxItems: 0,
                rate: 0
            };
            count = 0;

            graph.open();
            
            intervalStartedTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
            
            intervalId = setInterval(callback, _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].hearbeatTime);
            
            timer.stopInterval = setTimeout(function(){
                stopTest(true);
                timer.progressEnd = setTimeout(progressEnd, 500);
            }, _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runTime);
        }
        function init(){
            interval.initialized = true;
            timer.runInterval = setTimeout(function(){
                interval.started = true;
                run();
            }, 2000);
        }
        function start(){
            interval.started = true;
            clearTimeout(timer.runInterval);
            loadTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time() - connections.loadStartTime;
            timer.startIntervalDelay = setTimeout(run, loadTime > 420 ? 1 : 420 - loadTime);
        }
        
        return {
            initialized: false,
            started: false,
            init: init,
            start: start,
            stop: stop
        }
    })();
    function requestConfig(req, url, isAdded){
        var target = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.download ? req : req.upload,
            progressCount = 0,
            prev = {loaded: 0, progressTime: 0},
            transfer = {transferred: 0, time: 0},
            firstLoad = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.download || isAdded,
            time;
        
        req.loaded = 0;
        req.id = connections.requests.length + 1;
        req.maxTransferTime = 0;
        req.firstProgressTime = 0;
        req.lastProgressTime = 0;
        req.progressCount = 0;
        
        target.addEventListener("progress", function(e){
            time = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
            progressCount++;
            if(!connections.loadStartTime) connections.loadStartTime = time;
            if(!interval.initialized) interval.init();
            transfer.transferred = e.loaded - prev.loaded;
            transfer.time        = time - (prev.progressTime || time);
            if(transfer.time > req.maxTransferTime) req.maxTransferTime = transfer.time;
            connections.loaded += transfer.transferred;
            req.lastProgressTime = time;
            req.progressCount    = progressCount;
            req.loaded          += transfer.transferred;
            
            if(!interval.started && progressCount == 6) interval.start();
            if(progressCount == 1){
                !isAdded && testConsole.state("request " + req.id + " first transfer: " + transferredData(e.loaded) + ", time: " + consoleTime(time - connections.loadStartTime) + "s");
                req.firstProgressTime = time;
            }
            
            prev.loaded       = e.loaded;
            prev.progressTime = time;
        });
        target.addEventListener("load", function(){
            connections.addRequest(url, true);
        });
    }
    function closeStage(){
        if(!elem.stageClose.isActive){
            elem.stageClose.isActive = true;
            ping.stop();
            stopTest();
            elem.stageMain.style({opacity: 0, pointerEvents: "none"});
            setTimeout(function(){
                testStatus({started: false, opened: false, runType: "none"});
                elem.testEngine.render((0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(_StartButton__WEBPACK_IMPORTED_MODULE_1__["default"], {textContent: "COMENZAR", action: 1}));
                testConsole.clear();
                testConsole.log("Waiting to start the test...");
                _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("testFinished");
                elem.stageMain.style({opacity: 1, pointerEvents: "auto"});
                elem.stageClose.isActive = false;
            }, 300);
        }
    }
    function toggleConnectionsMode(number){
        if(!_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].started && number != _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].connections.count){
            _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("setConnectionsNumber", number);
        }
    }
    function sendRequests(requests){
        var len = requests.length, index;
        len = requests.length;
        for(index = 0; index < len; index++){
            requests[index]._send();
        }
    }
    
    this.events = {
        initializeTest: function(){
            _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("speedTestSettings");
            clearResults();     
            elem.gauge = (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GaugeContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {loadType: _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].mode == "1" || _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].mode == "2" ? "download" : "upload", open: true});
            elem.testEngine.first().addClass("open-m6jh");
            timer.engine = setTimeout(function(){
                elem.testEngine.render(elem.gauge);
            }, 500);
            _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].initializedTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
            testStatus({opened: true, started: true});
            _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("startTest");
        },
        startTest: function(){
            if(!_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].closestDone){
                return;
            }
            var runType = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].mode == "1" || _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].mode == "2" ? "download" : "upload";
            ping.start({
                url: _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].selectedServer.ping,
                done: function(result, refTime){
                    refTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time() - _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].initializedTime;
                    timer.ping = setTimeout(function(){
                        elem.pingValue.textContent(result.min);
                        elem.jitterValue.textContent(result.jitter);
                        testStatus({runType: runType});
                        _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("runTest");
                    }, 950 - refTime > 0 ? 950 - refTime : 0);
                }
            });
        },
        runTest: function(){
            //timer.closeTest = setTimeout(function(){ finishTest(); }, 3000);
            //return;
            
            var isDownload  = _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].runType.download,
                url = {},
                index;
            
            testConsole.state("starting measures...");
            
            connections = {
                server: _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].selectedServer,
                preconnect: {requests: [], success: 0},
                requests: [],
                count: _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].connections.count,
                loaded: 0,
                loadStartTime: 0,
                speedRate: 0,
                addRequest: function(url, send){
                    connections.requests.push(_assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].fetch({
                        xhr: function(xhr){
                            requestConfig(xhr, url);
                        },
                        url: url.url + url.prefix + _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].random(),
                        post: isDownload ? null : _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].uploadData.$99,
                        fail: function(status, xhr){
                            if(xhr.loaded < 50000) breakTest();// < 50KB
                        },
                        send: send
                    }));
                }
            };
            
            url.url = connections.server[isDownload ? "download" : "upload"];
            url.prefix = url.url.indexOf("?") == -1 ? "?" : "&";
            
            for(index = 0; index < connections.count; index++){
                connections.preconnect.requests.push(_assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].fetch({
                    url: url.url + url.prefix + _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].random(),
                    type: "HEAD",
                    done: function(status){
                        if(status == 0){
                            return breakTest();
                        }
                        connections.preconnect.success += 1;
                        if(connections.preconnect.success == connections.count){
                            setTimeout(function(){
                                sendRequests(connections.requests);
                                if(!isDownload) connections.loadStartTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
                            }, 1);
                        }
                    },
                    send: false
                }));

                connections.addRequest(url, false);
            }
            
            sendRequests(connections.preconnect.requests);
        },
        setConnectionsNumber: function(number){
            if(_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].opened){
                closeStage();
            }
            (number > 1 ? elem.singleModeButton : elem.multiModeButton).removeClass("active");
            (number > 1 ? elem.multiModeButton : elem.singleModeButton).addClass("active");
            testStatus({count: number});
        },
        testChangeServer: function(){
            if(_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].opened){
                closeStage();
            }
            elem.selectedServerName.textContent(_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].selectedServer.name);
        },
        consoleToggle: function(e){
            elem.consoleWrapper.toggleClass("hidden");
            elem.console.scrollTop(elem.console.scrollHeight());
        }
    }
    this.onMount = function(){
        var url = ["https://m.clear.link/geoip", "https://net.etrality.com/isp", "http://ip-api.com/json/", "https://ipapi.co/json/"];
        _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].fetch({
            url: url[1],
            dataType: "json",
            timeout: 20000,
            success: function(fetch){
                showUserProvider(fetch.query, fetch.isp, fetch.org, parseFloat(fetch.lat), parseFloat(fetch.lon));
            },
            done: function(){
                _TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].closestDone = true;
                _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("closestServer");
                elem.selectedServerName.textContent(_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].selectedServer.name);
                if(_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].started){
                    _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("startTest");
                }
            }
        });
    }
    
    this.render = function(){
    return (
        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testStage, {className: "stage-kbsf testStage test--" + (_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].connections.count > 1 ? "multi" : "single") + "Mode"},
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.stageMain, {className: "stageMain-kbsf"},
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "testContainer-y5vpt"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {className: "resultsArea"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.resultsContainer, {className: "resultsContainer"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "stageClose-eJsd"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.stageClose, {className: "closeButton-fQtb", title: "Cerrar Prueba", "aria-label": "Cerrar Prueba", onclick: closeStage},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("close")
                            )
                        ),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultsData"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultType resultPing"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultPing_item"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "resultPing_itemIcon iconWrapper"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("ping")), 
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "resultPing_itemText"},
                                        "Ping: ",
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.pingValue, {className: "resultPing_itemValue"}, "--"),
                                        " ms"
                                    )
                                ),
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultPing_item"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "resultPing_itemIcon iconWrapper"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("jitter")), 
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "resultPing_itemText"},
                                        "Jitter: ",
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.jitterValue, {className: "resultPing_itemValue"}, "--"),
                                        " ms"
                                    )
                                )
                            ),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultType resultSpeed"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.resultDownload, {className: "resultItem resultDownload"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultContainer"},
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultHeader"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultIcon iconWrapper"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("downlink")),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultTitle"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", {textContent: "DESCARGAR"})),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultUnit textHolder", textContent: "Mbps"})
                                        ),
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultBody"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.speedDownloadNumber, {className: "resultValue valueNumber-vgKp", textContent: "- -"})
                                        ),
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultGraph"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("resultGraph"))
                                    )
                                ),
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.resultUpload, {className: "resultItem resultUpload"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultContainer"},
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultHeader"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultIcon iconWrapper"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("uplink")),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultTitle"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", {textContent: "SUBIR"})),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultUnit textHolder", textContent: "Mbps"})
                                        ),
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultBody"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.speedUploadNumber, {className: "resultValue valueNumber-vgKp", textContent: "- -"})
                                        ),
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "resultGraph"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("resultGraph"))
                                    )
                                )
                            )
                        )
                    )
                ),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.testEngine, {className: "testEngine"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(_StartButton__WEBPACK_IMPORTED_MODULE_1__["default"], {textContent: "COMENZAR", action: 1})
                )
            ),
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.consoleWrapper, {className: "testConsoleWrapper hidden"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "console-e2Lfg"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "consoleButton-mHsq", onclick: testConsole.scroll}),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.console, {className: "console-Sq3NP", readonly: "", spellcheck: "false", value: "Waiting to start the test..."})
                )
            )
            ),
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", {className: "stageFooter-kbsf"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-details"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "loader loader-gfkb"}),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-icon contents-vr4n"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("internet")),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-content"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.selectedServerName, {className: "footerItem-title itemName", textContent: "Buscando el servidor más cercano..."}),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-description textHolder hidden", textContent: "- -"})
                        )
                    )
                ),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem contents-vr4n"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-details"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-icon"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("user")),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-content"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.ispName, {className: "footerItem-title itemName", textContent: "- -"}),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.publicIp, {className: "footerItem-description textHolder", textContent: "- -"})
                        )
                    )
                ),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-details"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-icon"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("connections")),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-content"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-title", textContent: "Conexiones"}),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "footerItem-description"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "testModeToggle-wrapper"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.multiModeButton, {className: "testModeToggle-button" + (_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].connections.count > 1 ? " active" : ""), textContent: "Multi", onclick: function(){ toggleConnectionsMode(_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].connections["default"]); }}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "testModeToggle-divider textHolder", textContent: "•"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.singleModeButton, {className: "testModeToggle-button" + (_TestConfig__WEBPACK_IMPORTED_MODULE_3__["default"].connections.count == 1 ? " active" : ""), textContent: "Unica", onclick: function(){ toggleConnectionsMode(1); }})
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestStage);

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


function StartButton(props){
    var elem = {
        startButton:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
        buttonText:   (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div")
    },
        action = false;
    
    this.handleClick = function(){
        if(action){
            return;
        }
        action = true;
        _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("initializeTest");
    }
    
    this.render = function(){
        return (
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.startButton, {className: "startButton" + (props.action == 2 ? " tryAgain-EuG8d" : "") + (props.close ? " close-m6jh" : ""), ariaLabel: props.textContent, onclick: this.handleClick},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.buttonText, {className: "buttonText", textContent: props.textContent}),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "buttonBorder"}),
                (props.action == 1 ? (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "buttonAnimatedBorder"}) : null),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "buttonBackground"})
            )
        )
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartButton);

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _TestConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _StartButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);





function GaugeContainer(props){
    var increments = [0, 1, 5, 10, 20, 30, 50, 75, 100],
        incrementsLen = increments.length,
        firstIncrement = increments[0],
        lastIncrement = increments[incrementsLen - 1],
        incrementsRefPercent = 100 / (incrementsLen - 1),
        
        gaugeCircleStrokeMin = 404,  // deg
        gaugeCircleStrokeMax = 194,  // deg
        gaugeNeedleRotateMin = 49,   // deg
        gaugeNeedleRotateMax = 310,  // deg
        gaugeCircleOffsetRef = gaugeCircleStrokeMax - gaugeCircleStrokeMin,
        gaugeNeedleRotateRef = gaugeNeedleRotateMax - gaugeNeedleRotateMin,
        
        elem = {
            gaugeContainer: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
            gaugeState: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
            speedDetailsNumber: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
            incrementsContainer: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
            gaugeNeedle: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
            gaugeIcon: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
            gaugeCircleSpeed: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle"),
            speedDatils: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div")
        },
        
        prevSpeed = 0,
        activeIncrements,
        gaugePercent,
        circleOffset,
        needleRotate;
    
    
    function calcGaugePercent(speedRate){
        var index, item, percent = 0, currentIncrementPercent, currentIncrementValue;
        
        if(speedRate >= lastIncrement) return 100;
        if(speedRate <= 0) return percent;
            
        for(index = 0; index < incrementsLen; index++){
            item = increments[index];
            if(speedRate < item){
                currentIncrementValue = increments[index - 1];
                currentIncrementPercent = ((speedRate - currentIncrementValue) / (item - currentIncrementValue)) * incrementsRefPercent;

                percent = currentIncrementPercent + (incrementsRefPercent * (index - 1));
                
                return percent;
            }
        }
        return percent;
    }
    
    function updateNumber(value){
        elem.speedDetailsNumber.textContent(value);
    }
    function updateIcon(speedRate){
        if(prevSpeed != speedRate){
            activeIncrements = "";

            increments.forEach(function(item, index){
                if(speedRate >= item && speedRate > firstIncrement) activeIncrements += " incrementOn--" + index;
            });

            gaugePercent = calcGaugePercent(speedRate);
            circleOffset = ((gaugeCircleOffsetRef * gaugePercent) / 100) + gaugeCircleStrokeMin;
            needleRotate = ((gaugeNeedleRotateRef * gaugePercent) / 100) + gaugeNeedleRotateMin;

            elem.gaugeCircleSpeed.attr("stroke-dashoffset", circleOffset);
            elem.gaugeNeedle.style({transform: "rotate(" + needleRotate + "deg)"});
            elem.incrementsContainer.attr("class", "incrementsContainer" + activeIncrements);
        }
        prevSpeed = speedRate;
    }
    function gaugeDashoffset(speedRate){
        updateIcon(speedRate);
    }
    
    this.methods = {
        loadType: function(e){
            elem.gaugeContainer.removeClass("download-QvMr upload-QvMr").addClass(e.type + "-QvMr");
        },
        updateNumber: function(e){
            updateNumber(e.number);
        },
        updateIcon: function(e){
            updateIcon(e.speedRate);
        },
        clear: function(){
            updateNumber("0.0");
            updateIcon("0.0");
        }
    }
    
    this.render = function(){
    return (
        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.gaugeContainer, {className: "gaugeContainer " + (props.loadType || "download") + "-QvMr" + (props.open ? " open-m6jh" : "")},
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.gaugeIcon, {className: "gaugeIcon"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {viewBox: "0 0 100 100", class: "svgIcon gaugeVectorIcon"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {class: "gaugeCircle gaugeCircleBackground", r: "42.1", cx: "50%", cy: "50%"}),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {class: "gaugeCircle gaugeCircleLoadingBackground", r: "42.2", cx: "50%", cy: "50%"}),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {class: "gaugeCircle gaugeCircleStrokeLeft", r: "46", cx: "50%", cy: "50%"}),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {class: "gaugeCircle gaugeCircleStrokeRight", r: "46", cx: "50%", cy: "50%"}),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.gaugeCircleSpeed, {class: "gaugeCircle gaugeCircleCurrentSpeed", r: "46", cx: "50%", cy: "50%", "stroke-dashoffset": "404"})
                )
            ),
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "gaugeInner"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.incrementsContainer, {className: "incrementsContainer"},
                    increments.map(function(num, i){
                        return (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "increment increment--" + i, textContent: num})
                    })
                ),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.gaugeNeedle, {className: "gaugeNeedle"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {viewBox: "0 0 120 801", class: "svgIcon gaugeNeedleIcon"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {id: "needleGradient", x1: "0", x2: "0", y1: "0", y2: "1"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {class: "stop--1", "stop-opacity": "0", "stop-color": "transparent", offset: "40%"}),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {class: "stop--1", "stop-opacity": "0.95", "stop-color": "currentColor", offset: "100%"})
                        ),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {d: "M95 800.5l-34.25-.958H26.5L0 .5h120l-25 800z", fill: "url(#needleGradient)"})
                    )
                ),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.gaugeState, {className: "gaugeState"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.speedDatils, {className: "speedDetailsContainer"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.speedDetailsNumber, {className: "speedDetailsNumber valueNumber-vgKp"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "0.0"})),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "speedDetailsUnit"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "speedDetailsIcon"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("uplink")),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "textHolder", textContent: "Mbps"})
                        )
                    )
                )
            )
        )
    )
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaugeContainer);

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _TestConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);




function PingItem(props){
    var elem = {
        pingItem: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        minValue: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("b"),
        avgValue: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("b"),
        maxValue: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("b"),
        jitterValue: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("b"),
        graphInner: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        graphTooltip: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        graphTooltipItem: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        graphTooltipValue: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        lineWrapper: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg"),
        graphLine: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("polyline")
    },
        graphItems = _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.graphItems.map(function(item, index){
            return (_TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.graphItemsVisible.indexOf(index) > -1 ?
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {index: index, a: ""})
                    :
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {index: index})
            )
        }),
        startedTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time(),
        measures = {
            progressMode: _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.progressMode,
            server: _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.selectedServer,
            sendCount: 0,
            ping: {
                time:  0,
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
        timeout = null;
    
    function finishMeasures(){
        if(measures.started){
            clearTimeout(timeout);
            if(measures.connectionType == "xhr"){
                measures.connection.abort();
            }else{
                measures.connection.close();
            }
            _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("pingTestFinished");
            measures.started = false;
        }
    }
    function updateGraphTooltip(){
        if(tooltipIndex){
            elem.graphTooltipItem.textContent(tooltipIndex);
            elem.graphTooltipValue.textContent("ping: " + graph.values[tooltipIndex] + " ms");
        }
        
        var parentPos = elem.graphInner[0].getBoundingClientRect(),
            tooltipWidth = elem.graphTooltip.width(),
            posX = (mousePosX - parentPos.left) + 20; 
        
        if(mousePosX > (parentPos.right - (tooltipWidth + 30))){
            posX = (mousePosX - parentPos.left - tooltipWidth) - 20;
        }
        
        elem.graphTooltip.style({left: posX + "px"});
    }
    graph = (function(){
        var maxValue = 50,
            viewWidth, viewHeight,
            chartPoints, pointWidth,
            index, len, item,
            pointX, pointY;
        
        function draw(value){
            if(!isNaN(value)){
                graph.values.push(value);
                if(graph.values.length > 100){
                    graph.values.splice(0, 90);
                }

                if(value > maxValue){
                    maxValue = value;
                }
            }
            
            chartPoints = "";
                
            len = graph.values.length;
                
            for(index = 0; index < len; index++){
                item = graph.values[index];

                pointX = ((pointWidth * index) + 0.5).toFixed(2);
                pointY = (viewHeight - ((item / maxValue) * viewHeight)).toFixed(2);

                chartPoints += pointX + "," + pointY + " ";
            }
            
            elem.graphLine.attr("points", chartPoints);
        }
        function adjust(){
            viewWidth = elem.graphInner.width();
            viewHeight = elem.graphInner.height() - 25;
            pointWidth = viewWidth / _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.graphItems.length;
            elem.lineWrapper.attr("viewBox", "0 0 " + viewWidth + " " + elem.graphInner.height());
        }
        
        return {
            draw: draw,
            adjust: adjust,
            values: []
        }
        
    })();
    function handlePing(pingTime){
        var time = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time(), jitter;
        
        measures.ping.count += 1;
        
        if(pingTime < measures.min.value){
            measures.min.value = pingTime; 
        }
        if(pingTime > measures.max.value){
            measures.max.value = pingTime;
        }
        
        measures.avg.items.push(pingTime);
        measures.avg.count += pingTime;
        if(measures.avg.items.length > 100){
            measures.avg.count -= measures.avg.items[0];
            measures.avg.items.splice(0, 1);
        }
        measures.avg.value = measures.avg.count / measures.avg.items.length;
        
        if(measures.ping.count > 1){
            jitter = pingTime > measures.prevResult ? pingTime - measures.prevResult : measures.prevResult - pingTime;
            measures.jitter.items.push(jitter);
            measures.jitter.count += jitter;
            if(measures.jitter.items.length > 100){
                measures.jitter.count -= measures.jitter.items[0];
                measures.jitter.items.splice(0, 1);
            }
            measures.jitter.value = measures.jitter.count / measures.jitter.items.length;
        }

        elem.minValue.textContent(measures.min.value);
        elem.avgValue.textContent(measures.avg.value.toFixed(1));
        elem.maxValue.textContent(measures.max.value);
        elem.jitterValue.textContent(measures.jitter.value.toFixed(1));
        
        measures.prevResult = pingTime;

        graph.draw(pingTime);
        updateGraphTooltip();
        
        if(measures.ping.count >= _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.results || (time - startedTime > (12000 + measures.max.value) && !_TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.completeAll)){
            finishMeasures();
            return false;
        }
        return true;
    }
    function httpping(){
        var xhr = new XMLHttpRequest(),
            progress = 0,
            time,
            sendTime,
            pingTime;

        xhr.open(measures.type, measures.url + measures.prefix + _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].random(), true);

        if(measures.progressMode){
            xhr.onprogress = function(){
                time = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
                progress += 1;

                pingTime = time - sendTime;

                if(progress > 2){
                    if(pingTime >= 50){
                        handlePing(pingTime);
                    }else{
                        finishMeasures();
                    }
                }

                sendTime = time;
            }
            xhr.onload = finishMeasures;
        }else{
            xhr.onload = function(){
                if(xhr.status == 200){
                    if(measures.sendCount == 1){
                        httpping();
                        return;
                    }
                    
                    pingTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time() - sendTime;
                    
                    timeout = setTimeout(
                        function(){
                            if(handlePing(pingTime)){
                                httpping();
                            }
                        },
                        Math.max(60 - pingTime, 0)
                    );
                }else{
                    finishMeasures();
                }
            }
        }

        xhr.onerror   = finishMeasures;
        xhr.ontimeout = finishMeasures;

        measures.connection = xhr;

        xhr.send();

        if(measures.sendCount <= 2) startedTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
        measures.sendCount += 1;
        sendTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
    }
    function wsping(){
        var ws = new WebSocket(measures.wsping),
            message = 0,
            sendTime,
            pingTime;
        
        function send(){
            ws.send(measures.wsmessage ? measures.wsmessage : message);
            sendTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
            message = message == 9 ? 0 : message + 1;
        }

        ws.onopen = function(){
            startedTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
            send();
        }

        ws.onmessage = function(){
            pingTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time() - sendTime;
            timeout = setTimeout(function(){
                if(handlePing(pingTime)){
                    send();
                }
            }, Math.max(60 - pingTime, 0));
        }
        
        ws.onerror = finishMeasures;
        ws.onclose = finishMeasures;
        
        measures.connection = ws;
    }
    function graphMouseMove(e){
        elem.graphTooltip.removeClass("unseen-u");
        
        tooltipIndex = e.target.getAttribute("index");
        mousePosX = e.clientX;
        
        updateGraphTooltip();
    }
    function graphMouseOut(){
        elem.graphTooltip.addClass("unseen-u");
    }
    function deleteResult(){
        elem.pingItem.addClass("close");
        setTimeout(function(){
            finishMeasures();
            _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].event("deletePingResult", {id: props.id});
        }, 300);
    }
    function startMeasures(){
        measures.started = true;
        startedTime = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].time();
        
        if(_TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.wsping && measures.server.wsping && !measures.progressMode){
            measures.wsping = measures.server.wsping;
            measures.wsmessage = measures.server.wsmessage;
            measures.connectionType = "ws";
            wsping();
        }else{
            measures.url    = measures.progressMode ? measures.server.download : measures.server.ping;
            measures.prefix = measures.url.indexOf("?") == -1 ? "?" : "&";
            measures.type   = measures.progressMode ? "GET" : "HEAD";
            measures.connectionType = "xhr";
            httpping();
        }
    }
    
    this.onMount = function(){
        startMeasures();
        graph.adjust();
    }
    this.events = {
        appResize: function(){
            graph.adjust();
            graph.draw();
        }
    }
    this.render = function(){
    return (
        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.pingItem, {className: "pingItem-e3Lhk"},
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "results-viKtf"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "serverDetails-twBep"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "closeButton-twBep", title: "Delete result", onclick: deleteResult}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("close")),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "serverName-twBep", textContent: measures.server.showName ? measures.server.showName : measures.server.name})
                ),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "results-hn8Gk"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "result-x3Ayv"},
                        "min: ",
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.minValue, {}, "--"),
                        " ms"
                    ),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "result-x3Ayv"},
                        "avg: ",
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.avgValue, {}, "--"),
                        " ms"
                    ),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "result-x3Ayv"},
                        "max: ",
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.maxValue, {}, "--"),
                        " ms"
                    ),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "result-x3Ayv"},
                        "jitter: ",
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.jitterValue, {}, "--"),
                        " ms"
                    )
                )
            ),
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "graphWrapper-viKtf"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "graph-o1wfv"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.graphInner, {className: "graphInner-o1wfv", onmousemove: graphMouseMove, onmouseout: graphMouseOut},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "graphItems-o1wfv"},
                            graphItems
                        ),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.lineWrapper, {class: "lineWrapper-dnXzj"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.graphLine, {points: ""})
                        ),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.graphTooltip, {className: "graphTooltip-o1wfv unseen-u"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.graphTooltipItem, {className: "tooltipItem-o1wfv", textContent: "0"}),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.graphTooltipValue, {className: "tooltipValue-o1wfv", textContent: "ping: undefined ms"})
                        )
                    )
                )
            )
        )
    )
    }
}

function PingStage(){
    var elem = {
        start: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        startButton: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
        serverDetails: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        selectServer: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("select"),
        settingsButton: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button"),
        settingsMenu: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        completeAll: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        wsping: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        progressMode: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        customUrl: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        resultsCount: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("select"),
        pingItems: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div")
    },
        testStarted = false,
        pingItems = [],
        itemId = 0;
    
    function extractHostname(url) {
        var hostname;
        if(typeof url != "string") return "";
        if(url.indexOf("//") > -1){
            hostname = url.split('/')[2];
        }else{
            hostname = url.split('/')[0];
        }
        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];
        return hostname;
    }
    function testFinished(){
        elem.start.removeClass("disabled");
        testStarted = false;
    }
    function startTest(){
        if(testStarted) return;
        
        var serverLast = _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].servers[_TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].servers.length - 1];
        
        _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.results = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].parseInt(elem.resultsCount.value(), {min: 50, max: 1000, default: 100});
        _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.completeAll = elem.completeAll.checked();
        _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.wsping  = elem.wsping.checked();
        _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.progressMode = elem.progressMode.checked();
        
        serverLast.showName = extractHostname(elem.customUrl.value());
        serverLast.ping = serverLast.download = elem.customUrl.value();
        
        if(_TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.selectedServer.ping || (_TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.wsping && _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.selectedServer.wsping && !_TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.progressMode)){
            itemId += 1;

            var el = (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(PingItem, {id: itemId});

            el.id = itemId;

            pingItems.push(el);
            if(pingItems.length > 6){
                pingItems[0].remove();
                pingItems.splice(0, 1);
            }
            elem.pingItems.prepend(el);


            elem.start.addClass("disabled");
            testStarted = true;
        }
    }
    function changeServer(){
        var id = parseInt(elem.selectServer.value());
        _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.selectedServer = _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].servers[id];
        elem.serverDetails.textContent(_TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].servers[id].name);
    }
    function toggleSettingsMenu(){
        elem.settingsMenu.style({display: elem.settingsMenu.style("display") == "none" ? "block" : "none"});
    }
    function deletePingResult(e){
        pingItems.forEach(function(item, index){
            if(e.id == item.id){
                item.remove();
                pingItems.splice(index, 1);
            }
        });
    }
    function clearCustomUrl(){
        elem.customUrl.value("");
    }
    
    this.events = {
        pingTestFinished: testFinished,
        deletePingResult: deletePingResult,
        closestServer: function(){
            elem.selectServer.render(
                _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].servers.map(function(item, index){
                    if(index == 0 || (index == 1 && !isLocal)){
                        return null;
                    }
                    return (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: index, "data-id": index, textContent: item.name, selected: index == _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.selectedServer.id});
                })
            );

            changeServer();
        }
    }
    this.onMount = function(){
        
    }
    this.render = function(){
    return (
        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "stage-Kbsc8 pingStage"},
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.start, {className: "start-inBnq"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "contents-vr4n"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.startButton, {className: "startButton-twMcg", textContent: "start", onclick: startTest}),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "selectedServer-xncHv"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.serverDetails, {className: "serverDetails-xncHv", textContent: _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].ping.selectedServer.name}),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "testSettings-qRnpi"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "changeServer-xncHv"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.selectServer, {className: "select-fquMx", onchange: changeServer}
                                ),
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "changeButton-xncHv", textContent: "Change server"})
                            ),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "buttonWrapper-xvYef"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.settingsButton, {className: "button-xvYef", title: "Test settings", onclick: toggleSettingsMenu}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("settings")),
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.settingsMenu, {className: "menu-jrbk", style: "display: none;"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuInner-jrbk"},
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "Results:"}),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.resultsCount, {},
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "60", textContent: "60"}),
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "100", textContent: "100", selected: true}),
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "190", textContent: "190"}),
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "280", textContent: "280"}),
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "460", textContent: "460"}),
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "1000", textContent: "1000"})
                                            )
                                        ),
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "Complete all:"}),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.completeAll, {type: "checkbox", checked: true})
                                        ),
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "WS Ping:"}),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.wsping, {type: "checkbox", checked: true})
                                        ),
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "Progress mode:"}),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.progressMode, {type: "checkbox"})
                                        ),
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk item-gxcv"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {textContent: "Custom Url:"}),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "inputWrapper-hgjl"},
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.customUrl, {type: "text", placeholder: "Enter custom url..."}),
                                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "clearButton-ehkc", onclick: clearCustomUrl}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("close2"))
                                            )
                                        )
                                    ),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuOverlay-jrbk", onclick: toggleSettingsMenu})
                                )
                            )
                        )
                    )
                    
                ),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "selectingServer-ghtk"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "selectingServer_loader-ghtk loader"}),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "selectingServer_text-ghtk", textContent: "Finding closest server..."})
                )
            ),
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.pingItems, {className: "pingItems-id3Lk"})
        )
    )
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PingStage);

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _TestConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _GaugeContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);





function NetworkStage(props){
    var elem = {
        networkStage:    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        start:           (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        urlInput:        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        selectUrlMenu:   (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        requestsCount:   (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("select"),
        persistentMode:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        preventClose:    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        uploadMode:      (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        selectedServersText: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        gauge:           (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GaugeContainer__WEBPACK_IMPORTED_MODULE_2__["default"]),
        console:         (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea"),
        doneRequests:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span"),
        doneRequestsMenu:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        doneRequestsSwitch:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("input"),
        doneRequestsUrls: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"),
        doneRequestsLoaded: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea"),
        currentRequests: (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span"),
        activeRequests:  (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span")
    },
        currentRequestsCount,
        measures = {
            loaded: 0,
            speedRate: 0,
            uploadMode: false,
            groupRequests: true
        },
        mconsole,
        getTime   = Date.now,
        random    = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].random,
        fixNumber = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].fixNumber,
        reqId = 0,
        currentRequests = {},
        interval,
        preconnectTimeout = null,
        doneRequests;

    mconsole = function(){
        var consoleLines = [],
            consoleInner = "",
            scrollTop,
            scrollHeight,
            elemHeight;
        
        function log(data){
            scrollHeight = elem.console.scrollHeight();
            scrollTop    = elem.console.scrollTop();
            elemHeight   = elem.console.offsetHeight();

            if(scrollTop > (scrollHeight - elemHeight - 10)){
                consoleLines.push(data);
                if(consoleLines.length > 200){
                    consoleLines.splice(0, 1);
                    consoleInner = consoleLines.join("\n");
                }else{
                    consoleInner += (consoleInner == "" ? "" : "\n") + data;
                }
                elem.console.value(consoleInner);
                elem.console.scrollTop(elem.console.scrollHeight());
            }
        }
        
        return {
            log: function(data){
                log(data);
            },
            state: function(data){
                log("[" + (measures.uploadMode ? "upload" : "download") +"] " + data);
            },
            clear: function(){
                consoleInner = "";
                consoleLines = [];
                elem.console.value(consoleInner);
            },
            scroll: function(){
                elem.console.scrollTop(elem.console.scrollHeight());
            }
        }
    }();
    
    function transferredData(value){
        if(value == 0) return "0KB";
        value = value / 1000;
        return fixNumber(value, value < 100 ? 2 : 1) + "KB";
    }
    function loadedData(value){
        value = value / 1000000;
        return fixNumber(value, value < 10 ? 3 : 2) + "MB";
    }
    function consoleTime(time){
        return (time / 1000).toFixed(time < 10000 ? 2 : 1);
    }
    function consoleSpeed(speed, speedMax, speedStr){
        speedMax = parseInt(speedMax).toString().length;
        speedStr = parseInt(speed).toString().length;
        return fixNumber(speed, 2 + (speedMax - speedStr));
    }
    doneRequests = (function(){
        var len, index, requests, inner;
        
        function update(updateItems){
            inner = "";
            requests = measures[measures.groupRequests ? "urls" : "requestsUrls"] || [];
            len = requests.length < 20 ? requests.length : 20;
            if(updateItems){
                elem.doneRequestsUrls.empty();
            }
            for(index = 0; index < len; index++){
                if(updateItems){
                    elem.doneRequestsUrls.append(
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "textUrl-bvzp", textContent: requests[index].url})
                    )
                }
                inner += (index != 0 ? "\n" : "") + loadedData(requests[index].loaded);
            }
            elem.doneRequestsLoaded.value(inner);
        }
        function handleSwitch(){
            measures.groupRequests = elem.doneRequestsSwitch.checked();
            
            update(true);
        }
        
        return {
            update: update,
            switch: handleSwitch
        }
    })();
    function stopMeasures(){
        if(measures.started){
            var prop, req;
            measures.started = false;
            measures.preconnectRequests.forEach(function(req){
                req.abort();
            });
            for(prop in currentRequests){
                req = currentRequests[prop];
                req.abort();
            }
            clearTimeout(preconnectTimeout);
            measures.activeRequests = 0;
            currentRequestsCount    = 0;
            interval.stop();
            elem.gauge.method("clear");
            elem.networkStage.removeClass("started-P5Hym");
            mconsole.log("Finished measures.");
        }
    }
    interval = (function(){
        var time, loadTime,
            transferred,
            transfer, speed,
            buffer, prev,
            intervalId, count,
            resultsPrecision;
        
        function callback(last){
            time = getTime();
            loadTime     = time - measures.loadStartTime;
            transferred  = measures.loaded - prev.loaded;
            if(transferred) transfer.count += 1;
            
            if(transferred){
                buffer.items.push({loaded: measures.loaded, time: time});

                if((buffer.items[buffer.items.length - 1].time - buffer.items[1].time) > buffer.sizeTime){
                    buffer.items.splice(0, 1);
                }
            }
            
            if(transfer.count > 5 && loadTime >= 500 || loadTime > 2000){
                
                buffer.speed = ((buffer.items[buffer.items.length - 1].loaded - buffer.items[0].loaded) / ((time - buffer.items[0].time) / 1000) / 125000);
                
                speed.items.push(buffer.speed);
                speed.count += buffer.speed;
                
                if(speed.items.length > 10){
                    speed.count -= speed.items[0];
                    speed.items.splice(0, 1);
                }
                
                speed.average = speed.count / speed.items.length;
                
                speed.rate = speed.average;
                speed.rateMax = speed.rate > speed.rateMax ? speed.rate : speed.rateMax;
                speed.rateFixed = fixNumber(speed.rate, speed.rate < 1 ? 2 : resultsPrecision);
                
                mconsole.state("speed: " + consoleSpeed(speed.rate, speed.rateMax) + "mbps, time: " + consoleTime(loadTime) + "s, loaded: " + loadedData(measures.loaded) + (!last ? ", transferred: " + transferredData(transferred) : ""));
                if(!last){
                    elem.gauge.method("updateNumber", {number: speed.rateFixed});
                    if(count % 4 == 0){
                        elem.gauge.method("updateIcon", {speedRate: speed.rate});
                    }
                }
                if(count % 2 == 0 || last){
                    doneRequests.update();
                }

                elem.activeRequests.textContent(measures.activeRequests);
                elem.currentRequests.textContent(currentRequestsCount);
                
                count++;
            }
            
            measures.speedRate = speed.rate;
            prev.loaded = measures.loaded;
        }
        function start(){
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
                rate: 0,
                rateMax: 0
            };
            buffer = {
                items: [{loaded: 0, time: measures.loadStartTime}],
                sizeTime: 30000,
                speed: 0
            };
            prev = {
                loaded: 0
            };
            count = 0;
            resultsPrecision = _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].resultsPrecision;
            
            intervalId = setInterval(callback, 100);
            interval.started = true;
        }
        function stop(){
            if(interval.started){
                callback(true);
                clearInterval(intervalId);
                
                interval.started = false;
            }
        }
        
        return {
            started: false,
            start: start,
            stop: stop
        }
    })();
    function preconnectRequests(requests, callback){
        var count = 0,
            first = true;
        
        requests.forEach(function(item){
            var xhr = new XMLHttpRequest();

            xhr.open("HEAD", item.url + item.prefix + random(), true);
            
            function done(){
                count += 1;
                if(xhr.status == 0){
                    return stopMeasures();
                }
                if(first){
                    mconsole.state("Preconnect start...");
                    first = false;
                }
                if(count == requests.length){
                    if(measures.uploadMode){
                        measures.loadStartTime = getTime();
                    }
                    preconnectTimeout = setTimeout(callback, 1);
                }
            }

            xhr.onload  = done;
            xhr.onerror = done;
            xhr.ontimeout = done;

            xhr.send();

            measures.preconnectRequests.push(xhr);
        });
    }
    function request(props, isInitial){
        var xhr = new XMLHttpRequest(),
            prevLoaded  = 0,
            first       = true,
            transferred = 0,
            loaded = 0,
            post   = measures.uploadMode ? _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].uploadData.$99 : null,
            target = measures.uploadMode ? xhr.upload : xhr;
        
        xhr._id = "_" + (reqId += 1);
        
        xhr.open(post ? "POST" : "GET", props.url + props.prefix + random(), true);
        
        target.onprogress = function(e){
            loaded = e.loaded;
            transferred = loaded - prevLoaded;
        
            if(isInitial && first){
                if(!measures.loadStartTime) measures.loadStartTime = getTime();
                if(!interval.started) mconsole.state("Load start..."), interval.start();
            }
            
            measures.loaded += transferred;
            
            measures.urls[props.urlId].loaded += transferred;
            measures.requestsUrls[props.requestId].loaded += transferred;
            prevLoaded = e.loaded;
            
            if(first) measures.activeRequests += 1, first = false;
        }
        function done(){
            measures.doneRequests   += 1;
            measures.activeRequests -= first ? 0 : 1;
            
            elem.doneRequests.textContent(measures.doneRequests);
            
            delete currentRequests[xhr._id];
                   currentRequestsCount -= 1;
            
            if(measures.persistentMode && loaded > 50000){ // > 50KB
                request(props).sendRequest();
            }
            
            if(currentRequestsCount == 0){
                stopMeasures();
            }
        }
        
        if(measures.uploadMode){
            xhr.onload = done;
        }else{
            target.onload  = done;
        }
        target.onerror = done;
        target.ontimeout = done;
        
        currentRequests[xhr._id] = xhr;
        currentRequestsCount += 1;
        
        xhr.sendRequest = function(){
            xhr.send(post);
        };
        
        return xhr;
    }
    function startMeasures(){
        if(measures.actionTime && (getTime() - measures.actionTime) < 500){
            return;
        }
        
        measures.actionTime = getTime();
        
        if(measures.started){
            return stopMeasures();
        }
        
        measures.loaded         = 0;
        measures.loadStartTime  = 0;
        measures.speedRate      = 0;
        measures.activeRequests = 0;
        measures.doneRequests   = 0;
        measures.preconnectRequests = [];
        
        measures.persistentMode = elem.persistentMode.checked();
        measures.uploadMode     = elem.uploadMode.checked();
        
        measures.urls = [];
        measures.requestsUrls = [];
        
        var inputUrl = elem.urlInput.value().trim(),
            requestsCount = _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].parseInt(elem.requestsCount.value(), {min: 1, max: 100, default: 0}),
            index, item, len, urlsLen;
        
        currentRequests = {};
        currentRequestsCount = 0;
        
        _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].servers[0].download = _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].servers[0].upload = inputUrl;
        
        _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].network.selectedServers.forEach(function(id, node, nodeUrl){
            node = _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].servers[id];
            nodeUrl = node[measures.uploadMode ? "upload" : "download"];
            if(nodeUrl){
                measures.urls.push({
                    url: nodeUrl,
                    id: measures.urls.length,
                    prefix: nodeUrl.indexOf("?") == -1 ? "?" : "&",
                    preconnect: node.preconnect,
                    requestsCount: _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"].parseInt(node.requestsCount, {min: 1, default: 6}),
                    loaded: 0
                });
            }
        });
        
        if(measures.urls.length == 0){
            return;
        }else if(requestsCount != 0 && measures.urls.length > requestsCount){
            measures.urls.splice((measures.urls.length - requestsCount) * -1);
        }
        
        urlsLen = Math.ceil(requestsCount / measures.urls.length);
            
        measures.urls.forEach(function(url){
            if(requestsCount == 0) urlsLen = url.requestsCount;
            for(index = 0; index < urlsLen; index++){
                if(requestsCount != 0 && measures.requestsUrls.length >= requestsCount) return;
                item = {
                    url: url.url,
                    urlId: url.id,
                    requestId: measures.requestsUrls.length,
                    prefix: url.prefix,
                    preconnect: url.preconnect,
                    requestsCount: url.requestsCount,
                    loaded: 0
                };
                request(item, true);
                measures.requestsUrls.push(item);
            }
        });

        function sendRequests(){
            for(item in currentRequests){
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
    function toggleUrlMenu(){
        elem.selectUrlMenu.style({display: elem.selectUrlMenu.style("display") == "none" ? "block" : "none"});
    }
    function toggleDoneRequestsMenu(){
        elem.doneRequestsMenu.style({display: elem.doneRequestsMenu.style("display") == "none" ? "block" : "none"});
    }
    function selectedServersText(){
        var selected = [];
        _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].network.selectedServers.forEach(function(id){
            selected.push(_TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].servers[id].name);
        });
        elem.selectedServersText.textContent(selected.join(", ") + " ");
    }
    function selectUrl(props){
        props.elem = (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.$)(props.elem).closest("menuItem-jrbk");
        props.isSelected = props.elem.hasClass("selected-wrpb");
        props.select = !props.isSelected;
        
        if(props.multi == false){
            _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].network.selectedServers = [];
            props.elem.closest("itemsContainer-tpvb").childs().forEach(function(item){
                item.removeClass("selected-wrpb");
            });
        }
        
        if(props.isSelected && _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].network.selectedServers.length <= 1){
            props.select = true;
        }
        
        if(props.select){
            _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].network.selectedServers.push(props.index);
        }else{
            _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].network.selectedServers.splice(props.index, 1);
        }
        props.elem[props.select ? "addClass" : "removeClass"]("selected-wrpb");
        
        selectedServersText();
    }
    function clearUrlInput(){
        elem.urlInput.value("");
    }
    
    elem.uploadMode.handleClick = function(){
        elem.gauge.method("loadType", {type: elem.uploadMode.checked() ? "upload" : "download"});
    }
    elem.preventClose.handleClick = function(){
        function prevent(){
            return "Dude, are you sure you want to leave? Think of the kittens!";
        }
        window.onbeforeunload = elem.preventClose.checked() ? prevent : null;
    }
    
    this.events = {
        closestServer: function(){
            elem.selectUrlMenu.find(".itemsContainer-tpvb").render(
                _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].servers.map(function(item, index, isSelected){
                    if(index > 0 && ((index == 1 && !isLocal) || (!item.download && !item.upload))){
                        return null;
                    }
                    isSelected = _TestConfig__WEBPACK_IMPORTED_MODULE_1__["default"].network.selectedServers.indexOf(index) > -1;
                    return (
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuItem-jrbk" + (isSelected ? " selected-wrpb" : ""), "data-id": index},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "itemInner-ghrt", onclick: index == 0 ? null : function(){ selectUrl({index: index, elem: this, multi: false}) }},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "selectedIcon-wrpb", onclick: index == 0 ? function(){ selectUrl({index: index, elem: this, multi: false}) } : null}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("checked")),
                                    index == 0 ?
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "inputWrapper-ghjk"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.urlInput, {className: "inputUrl-sdsf", type: "text", name: "__url", placeholder: "Enter custom url..."}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "clearButton-artp", onclick: clearUrlInput}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("close2"))
                                )
                                    :
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "textUrl-sdsf", textContent: item.name})
                            ),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "multiSelect-cbgh", onclick: function(){ selectUrl({index: index, elem: this, multi: true}) }}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("radioButtonOn"))
                        )
                    );
                })
            );
            selectedServersText();
        }
    }
    this.onMount = function(){
        setTimeout(function(){
            elem.console.value("");
            elem.uploadMode.handleClick();
            elem.preventClose.handleClick();
            doneRequests.update();
        }, 1);
    }
    this.render = function(){
    return (
        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.networkStage, {className: "stage-Kbsc8 networkStage"},
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.start, {className: "start-inBnq"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "contents-vr4n"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "buttonWrapper-jM8zj"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "startButton-x4Jsv", onclick: startMeasures},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "start"}),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {textContent: "stop"})
                        )
                    ),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "configOptions-cs8qH"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "group-bjFqx option-dfsj"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.selectUrlMenu, {className: "menu-jrbk menu-fgcv" , style: "display: none;"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuInner-jrbk"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "itemsContainer-tpvb"})
                                ),
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuOverlay-jrbk", onclick: toggleUrlMenu})
                            ),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "item-Z9hxm"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "urlButton-rdhw", onclick: toggleUrlMenu},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "text-cghl", textContent: "Select Servers Or Url... "}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "selectButton-zGsn"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("arrowDown"))
                                )
                            ),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "item-Z9hxm"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.requestsCount, {className: "select-crth"}, 
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "", textContent: "", selected: true}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "1", textContent: "1"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "2", textContent: "2"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "3", textContent: "3"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "4", textContent: "4"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "5", textContent: "5"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "6", textContent: "6"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "10", textContent: "10"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "20", textContent: "20"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "30", textContent: "30"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "50", textContent: "50"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "60", textContent: "60"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "80", textContent: "80"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {value: "100", textContent: "100"})
                                )
                            )
                        ),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "group-bjFqx"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "item-Z9hxm option-dfsj"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {className: "switch-dU4km"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.persistentMode, {className: "input-dU4km", type: "checkbox", checked: true}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "slider-dU4km"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "text-dU4km", textContent: "Persistent measures"})
                                )
                            ),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "item-Z9hxm option-dfsj"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {className: "switch-dU4km"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.uploadMode, {className: "input-dU4km", type: "checkbox", onclick: elem.uploadMode.handleClick}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "slider-dU4km"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "text-dU4km", textContent: "Upload mode"})
                                )
                            ),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "item-Z9hxm"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {className: "switch-dU4km"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.preventClose, {className: "input-dU4km", type: "checkbox", onclick: elem.preventClose.handleClick}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "slider-dU4km"}),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "text-dU4km", textContent: "Prevent close"})
                                )
                            )
                        ),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "group-bjFqx selectedServers-jgc"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "item-Z9hxm"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.svgIcon)("info"), (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.selectedServersText, {className: "text-fgh", textContent: " "})
                            )
                        )
                    )
                ),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "selectingServer-ghtk"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "selectingServer_loader-ghtk loader"}),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "selectingServer_text-ghtk", textContent: "Finding closest server..."})
                )
            ),
            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "content-LJepA"},
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "engine-d3WGk "},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "header-cSqe2"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "measuresDetails-Cs7YH"},
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.doneRequestsMenu, {className: "menu-jrbk doneRequestsMenu-rsgl", style: "display: none;"},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuInner-jrbk"},
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "optionWrapper-ktwf item-Z9hxm"},
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {className: "switch-dU4km"},
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.doneRequestsSwitch, {className: "input-dU4km", type: "checkbox", checked: true, onclick: doneRequests.switch}),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "slider-dU4km"}),
                                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {className: "text-dU4km", textContent: "Group requests"})
                                        )
                                    ),
                                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "requests-bvzp"},
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.doneRequestsUrls, {className: "requestsUrls-bvzp"}),
                                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.doneRequestsLoaded, {className: "requestsLoaded-bvzp", readonly: "", value: ""})
                                    )
                                ),
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "menuOverlay-jrbk", onclick: toggleDoneRequestsMenu})
                            ),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "item-Cs7YH", textContent: "Done requests: ", onclick: toggleDoneRequestsMenu},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.doneRequests, {textContent: 0})
                            ),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "item-Cs7YH", textContent: "Current requests: "},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.currentRequests, {textContent: 0})
                            ),
                            (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "item-Cs7YH", textContent: "Active requests: "},
                                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.activeRequests, {textContent: 0})
                            )
                        )
                    ),
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "consoleWrapper-rWFEZ console-e2Lfg"},
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {className: "consoleButton-mHsq", onclick: mconsole.scroll}),
                        (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.console, {className: "console-r4XGp console-Sq3NP", readonly: "", value: ""})
                    )
                ),
                (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "wrapper-tKbg"},
                    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {className: "gauge-dJ3hc"}, (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.createElement)(elem.gauge))
                )
            )
        )
    )
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NetworkStage);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_MainHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_MainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





(function(w, d, app){
    var $html = (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.$)("html"),
        maxWidth = 850,
        fontSize = 15,
        num, width;
    
    function resize(){
        width = window.innerWidth;
        num = width / maxWidth;
        num = num < 1 ? num : 1;
        num = num + ((1 - num) / 1.5);
        if(width < 350){
            num = num * (width / 350);
        }
        $html.style({fontSize: (fontSize * num) + "px"});
    }
    
    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.$)(window).on("resize", resize);
    resize();
    
    $html.addClass(app.isMobile ? "mobile" : "desktop");
    
    
    // ========= Page Output - Render Page ===========
    (0,_assets_js_App__WEBPACK_IMPORTED_MODULE_0__.$)("#app-render").render(app.createElement("div", {}, app.createElement(_components_MainHeader__WEBPACK_IMPORTED_MODULE_1__["default"]), app.createElement(_components_MainContent__WEBPACK_IMPORTED_MODULE_2__["default"])));

})(window, document, _assets_js_App__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;