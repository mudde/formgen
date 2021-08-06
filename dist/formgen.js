(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MuddeFormgen"] = factory();
	else
		root["MuddeFormgen"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mudde-core/src/Core/BaseHandler.ts":
/*!*********************************************************!*\
  !*** ./node_modules/mudde-core/src/Core/BaseHandler.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseHandler = void 0;
var BaseHandler = /** @class */ (function () {
    function BaseHandler() {
    }
    BaseHandler.prototype.setNext = function (event) {
        if (this._nextEvent) {
            this._nextEvent.setNext(event);
        }
        else {
            this._nextEvent = event;
        }
        return event;
    };
    BaseHandler.prototype.handle = function (data) {
        if (this._nextEvent) {
            this._nextEvent.handle(data);
        }
        return data;
    };
    Object.defineProperty(BaseHandler.prototype, "nextEvent", {
        get: function () {
            return this._nextEvent;
        },
        enumerable: false,
        configurable: true
    });
    return BaseHandler;
}());
exports.BaseHandler = BaseHandler;


/***/ }),

/***/ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts":
/*!******************************************************************!*\
  !*** ./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigurableAbstract = void 0;
var StringHelper_1 = __webpack_require__(/*! ../Helper/StringHelper */ "./node_modules/mudde-core/src/Helper/StringHelper.ts");
var ConfigurableAbstract = /** @class */ (function () {
    function ConfigurableAbstract() {
    }
    ConfigurableAbstract.prototype.configuring = function (config) {
        var defaultConfig = this.getDefaultConfig();
        for (var key in defaultConfig) {
            var methodName = 'configure' + StringHelper_1.StringHelper.ucfirst(key);
            var hasMethod = this[methodName] !== undefined;
            var value = config[key] ? config[key] : defaultConfig[key];
            if (hasMethod) {
                this[methodName](value);
            }
            else {
                this[key] = value;
            }
        }
    };
    return ConfigurableAbstract;
}());
exports.ConfigurableAbstract = ConfigurableAbstract;


/***/ }),

/***/ "./node_modules/mudde-core/src/Core/Event.ts":
/*!***************************************************!*\
  !*** ./node_modules/mudde-core/src/Core/Event.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Event = void 0;
var Event = /** @class */ (function () {
    function Event(source, event) {
        this._source = source;
        this._eventNumber = event;
    }
    Object.defineProperty(Event.prototype, "source", {
        get: function () {
            if (this._source === undefined)
                throw new Error('Source not set!');
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "eventNumber", {
        get: function () {
            if (this._eventNumber === undefined)
                throw new Error('Event number not set!');
            return this._eventNumber;
        },
        enumerable: false,
        configurable: true
    });
    return Event;
}());
exports.Event = Event;


/***/ }),

/***/ "./node_modules/mudde-core/src/Core/NodeCore.ts":
/*!******************************************************!*\
  !*** ./node_modules/mudde-core/src/Core/NodeCore.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeCore = void 0;
var NodeCore = /** @class */ (function () {
    function NodeCore(tagName, attributes, text, documentX) {
        this._idSearch = [];
        this._document = documentX !== null && documentX !== void 0 ? documentX : document;
        this._root = this._current = tagName[0] === '#'
            ? this.getNodeById(tagName.substr(1))
            : this.createNode(tagName, attributes, text);
    }
    NodeCore.prototype.getNodeById = function (nodeId) {
        var document = this.document;
        var element = document.getElementById(nodeId);
        if (!element)
            throw new Error('Element not found by id!');
        return element;
    };
    NodeCore.prototype.createNode = function (tagName, attributes, text) {
        var document = this.document;
        var node = document.createElement(tagName);
        if (attributes) {
            for (var key in attributes) {
                var value = attributes[key];
                if (key === 'id') {
                    this._idSearch[value] = node;
                }
                node.setAttribute(key, value);
            }
        }
        if (text) {
            node.innerText = text;
        }
        return node;
    };
    NodeCore.prototype.moveInNode = function (callable) {
        var current = this.current;
        var tmpNode = this.document.createElement('div');
        current.replaceWith(tmpNode);
        var newNodeRaw = callable(current);
        var newNode = this.importElement(newNodeRaw);
        tmpNode.replaceWith(newNode);
        return this;
    };
    NodeCore.prototype.removeChild = function (node) {
        var nodeX = node instanceof NodeCore ? node.root : node;
        this.current.removeChild(nodeX);
        return this;
    };
    NodeCore.prototype.addSibling_ = function (tagName, attributes, text) {
        return this.addSibling(tagName, attributes, text, true);
    };
    NodeCore.prototype.addSibling = function (tagName, attributes, text, setCurrent) {
        if (setCurrent === void 0) { setCurrent = false; }
        var newNode = this.createNode(tagName, attributes, text);
        var parent = this.current.parentNode;
        parent === null || parent === void 0 ? void 0 : parent.insertBefore(newNode, this.current);
        if (setCurrent) {
            this._current = newNode;
        }
        return this;
    };
    NodeCore.prototype.addSiblingNode_ = function (node) {
        return this.addSiblingNode(node, true);
    };
    NodeCore.prototype.addSiblingNode = function (node, setCurrent) {
        if (setCurrent === void 0) { setCurrent = false; }
        var newNode = this.importElement(node);
        var current = this.current;
        var parent = current.parentElement;
        parent === null || parent === void 0 ? void 0 : parent.insertBefore(newNode, current);
        if (setCurrent) {
            this._current = newNode;
        }
        return this;
    };
    NodeCore.prototype.addClass = function (className) {
        var currentClass = this.current.className;
        this.current.setAttribute('class', (currentClass + " " + className).trimLeft());
        return this;
    };
    NodeCore.prototype.removeClass = function (className) {
        var currentClass = ' ' + this.current.className + ' ';
        this.current.setAttribute('class', currentClass.replace(' ' + className + ' ', ' ').trim());
        return this;
    };
    NodeCore.prototype.clear = function () {
        var root = this._current = this.root;
        root.innerHTML = '';
    };
    NodeCore.prototype.getAttribute = function (name) {
        return this.current.getAttribute(name);
    };
    NodeCore.prototype.getElementById = function (id) {
        if (id in this._idSearch) {
            this._current = this._idSearch[id];
        }
        return this;
    };
    NodeCore.prototype.getElementByTagName = function (tagName) {
        var element = this.root.getElementsByTagName(tagName);
        return element;
    };
    NodeCore.prototype.getElementByClass = function (className) {
        var element = this.root.getElementsByClassName(className);
        return element;
    };
    NodeCore.prototype.hasAttribute = function (name) {
        return this.current.hasAttribute(name);
    };
    NodeCore.prototype.hasElementById = function (id) {
        return id in this._idSearch;
    };
    NodeCore.prototype.hasElementByClass = function (className) {
        return this.root.getElementsByClassName(className).length !== 0;
    };
    NodeCore.prototype.a = function (tagName, attributes, text, setCurrent) {
        return this.appendNode(tagName, attributes, text, setCurrent);
    };
    NodeCore.prototype.prependNode_ = function (tagName, attributes, text) {
        return this.prependNode(tagName, attributes, text, true);
    };
    NodeCore.prototype.prependNode = function (tagName, attributes, text, setCurrent) {
        var firstChild = this.current.firstChild;
        if (firstChild) {
            var HTMLElement_1 = this.current.insertBefore(this.createNode(tagName, attributes, text), firstChild);
            if (setCurrent === true) {
                this._current = HTMLElement_1;
            }
        }
        return this;
    };
    NodeCore.prototype.appendNode = function (tagName, attributes, text, setCurrent) {
        if (setCurrent === void 0) { setCurrent = false; }
        var newNode = this.createNode(tagName, attributes, text);
        var HTMLElement = this.current.appendChild(newNode);
        HTMLElement.innerText = text ? text : '';
        if (setCurrent === true) {
            this._current = HTMLElement;
        }
        return this;
    };
    NodeCore.prototype.a_ = function (tagName, attributes, text) {
        return this.appendNode(tagName, attributes, text, true);
    };
    NodeCore.prototype.appendNode_ = function (tagName, attributes, text) {
        return this.appendNode(tagName, attributes, text, true);
    };
    NodeCore.prototype.toHTML = function (outerHTML) {
        if (outerHTML === void 0) { outerHTML = true; }
        var root = this.root;
        return outerHTML ? root.outerHTML : root.innerHTML;
    };
    NodeCore.prototype.setAttributes = function (attributes) {
        var node = this.current;
        for (var key in attributes) {
            var value = attributes[key];
            if (key === 'id') {
                this._idSearch[value] = node;
            }
            node.setAttribute(key, value);
        }
        return this;
    };
    NodeCore.prototype.parent = function () {
        var parent = this.current.parentElement;
        this._current = parent === null ? this.current : parent;
        return this;
    };
    NodeCore.prototype._ = function () {
        return this.parent();
    };
    NodeCore.prototype.prependElement = function (node) {
        if (node === null)
            return this;
        var childNode = this.importElement(node);
        var firstChild = this.current.firstChild;
        if (firstChild) {
            this.current.insertBefore(childNode, firstChild);
        }
        this._current = childNode;
        return this;
    };
    NodeCore.prototype.prependElement_ = function (node) {
        if (node === null)
            return this;
        var childNode = this.importElement(node);
        var firstChild = this.current.firstChild;
        if (firstChild) {
            this.current.insertBefore(childNode, firstChild);
        }
        return this;
    };
    NodeCore.prototype.appendElement = function (node) {
        if (node === null)
            return this;
        var childNode = this.importElement(node);
        this._current = this.current.appendChild(childNode);
        return this;
    };
    NodeCore.prototype.importElement = function (node) {
        if (!(node instanceof NodeCore)) {
            return node;
        }
        var childIdNodes = node._idSearch;
        for (var key in childIdNodes) {
            this._idSearch[key] = childIdNodes[key];
        }
        return node.root;
    };
    NodeCore.prototype.appendElement_ = function (node) {
        if (node === null)
            return this;
        var childNode = this.importElement(node);
        this.current.appendChild(childNode);
        return this;
    };
    NodeCore.prototype.gotoRoot = function () {
        this._current = this.root;
        return this;
    };
    Object.defineProperty(NodeCore.prototype, "root", {
        get: function () {
            if (this._root === undefined)
                throw new Error('Root node not defined!');
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeCore.prototype, "id", {
        get: function () {
            return this.current.getAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeCore.prototype, "innerHTML", {
        set: function (html) {
            this.current.innerHTML = html;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeCore.prototype, "idSearch", {
        get: function () {
            return this._idSearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeCore.prototype, "current", {
        get: function () {
            if (this._current === undefined)
                throw new Error('Current not set!');
            return this._current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeCore.prototype, "document", {
        get: function () {
            if (this._document === undefined)
                throw new Error('Document not set!');
            return this._document;
        },
        enumerable: false,
        configurable: true
    });
    return NodeCore;
}());
exports.NodeCore = NodeCore;


/***/ }),

/***/ "./node_modules/mudde-core/src/Helper/GuidHelper.ts":
/*!**********************************************************!*\
  !*** ./node_modules/mudde-core/src/Helper/GuidHelper.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuidHelper = void 0;
// https://raw.githubusercontent.com/NicolasDeveloper/guid-typescript/master/lib/guid.ts
var GuidHelper = /** @class */ (function () {
    function GuidHelper(guid) {
        if (!guid) {
            throw new TypeError("Invalid argument; `value` has no value.");
        }
        this.value = GuidHelper.EMPTY;
        if (guid && GuidHelper.isGuid(guid)) {
            this.value = guid;
        }
    }
    GuidHelper.isGuid = function (guid) {
        var value = guid.toString();
        return guid && (guid instanceof GuidHelper || GuidHelper.validator.test(value));
    };
    GuidHelper.create = function () {
        return new GuidHelper([GuidHelper.gen(2), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(3)].join("-"));
    };
    GuidHelper.createEmpty = function () {
        return new GuidHelper("emptyGuid");
    };
    GuidHelper.parse = function (guid) {
        return new GuidHelper(guid);
    };
    GuidHelper.raw = function () {
        return [GuidHelper.gen(2), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(3)].join("-");
    };
    GuidHelper.gen = function (count) {
        var out = "";
        for (var i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    };
    GuidHelper.prototype.equals = function (other) {
        return GuidHelper.isGuid(other) && this.value === other.toString();
    };
    GuidHelper.prototype.isEmpty = function () {
        return this.value === GuidHelper.EMPTY;
    };
    GuidHelper.prototype.toString = function () {
        return this.value;
    };
    GuidHelper.prototype.toJSON = function () {
        return {
            value: this.value,
        };
    };
    GuidHelper.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
    GuidHelper.EMPTY = "00000000-0000-0000-0000-000000000000";
    return GuidHelper;
}());
exports.GuidHelper = GuidHelper;


/***/ }),

/***/ "./node_modules/mudde-core/src/Helper/StringHelper.ts":
/*!************************************************************!*\
  !*** ./node_modules/mudde-core/src/Helper/StringHelper.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringHelper = void 0;
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    StringHelper.ucfirst = function (value) {
        if (value === undefined)
            return;
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    return StringHelper;
}());
exports.StringHelper = StringHelper;


/***/ }),

/***/ "./src/Builder/GeneralBuilder.ts":
/*!***************************************!*\
  !*** ./src/Builder/GeneralBuilder.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneralBuilder = void 0;
var BuilderAbstract_1 = __webpack_require__(/*! ../BuilderAbstract */ "./src/BuilderAbstract.ts");
var GeneralBuilder = /** @class */ (function (_super) {
    __extends(GeneralBuilder, _super);
    function GeneralBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralBuilder.prototype.coreBuild = function (output) {
    };
    return GeneralBuilder;
}(BuilderAbstract_1.BuilderAbstract));
exports.GeneralBuilder = GeneralBuilder;


/***/ }),

/***/ "./src/Builder/TabsBuilder.ts":
/*!************************************!*\
  !*** ./src/Builder/TabsBuilder.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TabsBuilder = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var FormBuilderAbstract_1 = __webpack_require__(/*! ../FormBuilderAbstract */ "./src/FormBuilderAbstract.ts");
var TabsBuilder = /** @class */ (function (_super) {
    __extends(TabsBuilder, _super);
    function TabsBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabsBuilder.prototype.coreBuild = function (output) {
        var htmlForm = output.root;
        var panels = htmlForm.getElementsByClassName('panel');
        var tabs = new NodeCore_1.NodeCore('ul', { class: "nav nav-tabs" });
        for (var key = 0; key < panels.length; key++) {
            var x = panels.item(key);
            var panelId = x.id;
            var panelLabel = x.getAttribute('data-formgen-name');
            var javascript = "javascript:var panelName='" + panelId + "'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })";
            tabs
                .appendElement(new NodeCore_1.NodeCore('li', { class: 'nav-item' }))
                .appendElement(new NodeCore_1.NodeCore('a', { class: 'nav-link ', href: javascript }, panelLabel));
            if (key === 0) {
                tabs.addClass('active');
            }
            else {
                panels[key].setAttribute('hidden', '');
            }
        }
        output
            .gotoRoot()
            .prependElement_(tabs);
    };
    return TabsBuilder;
}(FormBuilderAbstract_1.FormBuilderAbstract));
exports.TabsBuilder = TabsBuilder;


/***/ }),

/***/ "./src/Builder/index.ts":
/*!******************************!*\
  !*** ./src/Builder/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./GeneralBuilder */ "./src/Builder/GeneralBuilder.ts"), exports);
__exportStar(__webpack_require__(/*! ./TabsBuilder */ "./src/Builder/TabsBuilder.ts"), exports);


/***/ }),

/***/ "./src/BuilderAbstract.ts":
/*!********************************!*\
  !*** ./src/BuilderAbstract.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BuilderAbstract = void 0;
var BaseHandler_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Core/BaseHandler */ "./node_modules/mudde-core/src/Core/BaseHandler.ts");
var BuilderAbstract = /** @class */ (function (_super) {
    __extends(BuilderAbstract, _super);
    function BuilderAbstract(input) {
        var _this = _super.call(this) || this;
        _this._input = input;
        return _this;
    }
    Object.defineProperty(BuilderAbstract.prototype, "input", {
        get: function () {
            if (this._input === undefined)
                throw new Error('Input not set!');
            return this._input;
        },
        set: function (value) {
            this._input = value;
        },
        enumerable: false,
        configurable: true
    });
    return BuilderAbstract;
}(BaseHandler_1.BaseHandler));
exports.BuilderAbstract = BuilderAbstract;


/***/ }),

/***/ "./src/Button/Submit.ts":
/*!******************************!*\
  !*** ./src/Button/Submit.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Submit = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var ButtonAbstract_1 = __webpack_require__(/*! ../ButtonAbstract */ "./src/ButtonAbstract.ts");
var Submit = /** @class */ (function (_super) {
    __extends(Submit, _super);
    function Submit(config) {
        var _this = _super.call(this) || this;
        _this.configuring(config);
        return _this;
    }
    Submit.prototype.getDefaultConfig = function () {
        return __assign({}, _super.prototype.getDefaultConfig.call(this));
    };
    Submit.prototype.coreHTMLInput = function (id, name, language) {
        //  todo  Onclick naar andere functie!  Gr.O.M.
        var attributes = {
            type: 'button',
            class: 'btn btn-primary',
            onclick: "javascript:\n         var data = {};\n         Array.from(document.forms[0].elements).forEach(element => {\n             if (element.name) {\n                console.debug(element.type)\n                 if (element.type === 'file') {\n                     data[element.name] = Array.from(element.files).flatMap(x => { return x.name });\n                 } else if(element.type === 'select-multiple') {\n                     data[element.name] = Array.from(element.selectedOptions).flatMap(x=>{ return x.value  })\n                 } else {\n                     data[element.name] = element.value\n                 }\n             }\n         });\n         alert(JSON.stringify({valid: document.forms[0].checkValidity(),...data}, null, 4));\n         return false",
            value: this.label
        };
        var element = new NodeCore_1.NodeCore('input', attributes);
        return element;
    };
    return Submit;
}(ButtonAbstract_1.ButtonAbstract));
exports.Submit = Submit;


/***/ }),

/***/ "./src/Button/index.ts":
/*!*****************************!*\
  !*** ./src/Button/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Submit */ "./src/Button/Submit.ts"), exports);


/***/ }),

/***/ "./src/ButtonAbstract.ts":
/*!*******************************!*\
  !*** ./src/ButtonAbstract.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ButtonAbstract = void 0;
var ConfigurableAbstract_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Core/ConfigurableAbstract */ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts");
var GuidHelper_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Helper/GuidHelper */ "./node_modules/mudde-core/src/Helper/GuidHelper.ts");
var ButtonAbstract = /** @class */ (function (_super) {
    __extends(ButtonAbstract, _super);
    function ButtonAbstract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__type = '';
        _this._label = '';
        return _this;
    }
    ButtonAbstract.prototype.getDefaultConfig = function () {
        return {
            label: '',
        };
    };
    ButtonAbstract.prototype.render = function () {
        var output = this.coreHTMLInput(GuidHelper_1.GuidHelper.create().toString(), 'x', 'nl');
        return output;
    };
    Object.defineProperty(ButtonAbstract.prototype, "_type", {
        get: function () {
            return this.__type;
        },
        set: function (value) {
            this.__type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonAbstract.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    return ButtonAbstract;
}(ConfigurableAbstract_1.ConfigurableAbstract));
exports.ButtonAbstract = ButtonAbstract;


/***/ }),

/***/ "./src/CoreBuildInterface.ts":
/*!***********************************!*\
  !*** ./src/CoreBuildInterface.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/Data/Array.ts":
/*!***************************!*\
  !*** ./src/Data/Array.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Array = void 0;
var DataAbstract_1 = __webpack_require__(/*! ../DataAbstract */ "./src/DataAbstract.ts");
var Array = /** @class */ (function (_super) {
    __extends(Array, _super);
    function Array(config, form) {
        var _this = this;
        form ? _this = _super.call(this, form) || this : _this = _super.call(this) || this;
        _this.configuring(config);
        return _this;
    }
    Array.prototype.getDefaultConfig = function () {
        return __assign({}, _super.prototype.getDefaultConfig.call(this));
    };
    Array.prototype.init = function () {
    };
    Array.prototype.process = function () {
    };
    return Array;
}(DataAbstract_1.DataAbstract));
exports.Array = Array;


/***/ }),

/***/ "./src/Data/index.ts":
/*!***************************!*\
  !*** ./src/Data/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Array */ "./src/Data/Array.ts"), exports);


/***/ }),

/***/ "./src/DataAbstract.ts":
/*!*****************************!*\
  !*** ./src/DataAbstract.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataAbstract = void 0;
var ConfigurableAbstract_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Core/ConfigurableAbstract */ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts");
var DataEvent_1 = __webpack_require__(/*! ./DataEvent */ "./src/DataEvent.ts");
var DataAbstract = /** @class */ (function (_super) {
    __extends(DataAbstract, _super);
    function DataAbstract(form) {
        var _this = _super.call(this) || this;
        _this._observers = {};
        _this._data = [];
        _this._originalData = [];
        if (form) {
            _this._form = form;
        }
        return _this;
    }
    DataAbstract.prototype.getDefaultConfig = function () {
        return {
            data: [],
            originalData: []
        };
    };
    DataAbstract.prototype.get = function (id) {
        var event = new DataEvent_1.DataEvent(this, DataAbstract.DATA_PRE_GET, id);
        this.notify(event);
        var value = this._data[id];
        var event = new DataEvent_1.DataEvent(this, DataAbstract.DATA_POST_GET, id);
        this.notify(event);
        return value;
    };
    DataAbstract.prototype.set = function (id, value) {
        var event = new DataEvent_1.DataEvent(this, DataAbstract.DATA_PRE_SET, id);
        this.notify(event);
        this._data[id] = value;
        var event = new DataEvent_1.DataEvent(this, DataAbstract.DATA_POST_SET, id);
        this.notify(event);
    };
    DataAbstract.prototype.restore = function (id) {
        this._data[id] = this._originalData[id];
    };
    DataAbstract.prototype.attach = function (observer) {
        var observerList = this._observers;
        if (observerList[observer.eventNumber] === undefined) {
            observerList[observer.eventNumber] = [];
        }
        observerList[observer.eventNumber].push(observer);
    };
    DataAbstract.prototype.detach = function (observer) {
        var observerList = this._observers[observer.eventNumber];
        if (observerList) {
            observerList.filter(function (ownObserver) {
                return ownObserver === observer;
            });
        }
    };
    DataAbstract.prototype.notify = function (event) {
        var eventNumber = event.eventNumber;
        var observerList = this._observers[eventNumber];
        if (observerList) {
            observerList.forEach(function (observer) {
                observer.update(event);
            });
        }
    };
    DataAbstract.prototype.forEach = function (callable) {
        this._data.forEach(callable);
        return this;
    };
    Object.defineProperty(DataAbstract.prototype, "form", {
        get: function () {
            if (this._form === undefined)
                throw new Error('Form not set!');
            return this._form;
        },
        set: function (value) {
            this._form = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAbstract.prototype, "data", {
        get: function () {
            if (this._data === undefined)
                throw new Error('Data not set!');
            return this._data;
        },
        set: function (value) {
            this._data = this._originalData = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAbstract.DATA_PRE_SET = 1;
    DataAbstract.DATA_POST_SET = 2;
    DataAbstract.DATA_PRE_GET = 4;
    DataAbstract.DATA_POST_GET = 8;
    return DataAbstract;
}(ConfigurableAbstract_1.ConfigurableAbstract));
exports.DataAbstract = DataAbstract;


/***/ }),

/***/ "./src/DataEvent.ts":
/*!**************************!*\
  !*** ./src/DataEvent.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataEvent = void 0;
var Event_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Core/Event */ "./node_modules/mudde-core/src/Core/Event.ts");
var DataEvent = /** @class */ (function (_super) {
    __extends(DataEvent, _super);
    function DataEvent(source, event, id) {
        var _this = _super.call(this, source, event) || this;
        _this._id = id;
        return _this;
    }
    Object.defineProperty(DataEvent.prototype, "id", {
        get: function () {
            if (this._id === undefined)
                throw new Error('Id not set!');
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return DataEvent;
}(Event_1.Event));
exports.DataEvent = DataEvent;


/***/ }),

/***/ "./src/Form.ts":
/*!*********************!*\
  !*** ./src/Form.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Form = void 0;
var ConfigurableAbstract_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Core/ConfigurableAbstract */ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts");
var NodeCore_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var GuidHelper_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Helper/GuidHelper */ "./node_modules/mudde-core/src/Helper/GuidHelper.ts");
var StringHelper_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Helper/StringHelper */ "./node_modules/mudde-core/src/Helper/StringHelper.ts");
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(config) {
        var _this = _super.call(this) || this;
        _this._id = '';
        _this._languages = [];
        _this._fields = [];
        _this._buttons = [];
        _this._loaded = false;
        _this._panels = {};
        _this._additionalJs = [];
        _this._rules = {};
        _this.configuring(config);
        _this.form = new NodeCore_1.NodeCore('form', { method: 'POST', action: '.', id: _this.id });
        Form._forms.push(_this);
        return _this;
    }
    Form.prototype.getDefaultConfig = function () {
        return {
            id: GuidHelper_1.GuidHelper.raw(),
            languages: ['nl'],
            fields: [],
            buttons: [],
            layout: [],
            builders: [],
            data: {},
            panels: {}
        };
    };
    Form.prototype.configureFields = function (rawFields) {
        var main = this;
        var fields = this.fields = [];
        rawFields.forEach(function (config) {
            var type = config['_type'];
            var className = window['MuddeFormgen'].Input[type];
            var object = new className(config, main);
            fields.push(object);
        });
    };
    Form.prototype.configureButtons = function (rawFields) {
        var main = this;
        var buttons = this.buttons = [];
        rawFields.forEach(function (config) {
            var type = config['_type'];
            var className = window['MuddeFormgen'].Button[type];
            var object = new className(config, main);
            buttons.push(object);
        });
    };
    Form.prototype.configureBuilders = function (rawFields) {
        var _this = this;
        rawFields.unshift('GeneralBuilder');
        rawFields.forEach(function (builder) {
            var className = window['MuddeFormgen'].Builder[builder];
            var handler = new className(_this);
            if (!_this._handler) {
                _this._handler = handler;
            }
            else {
                _this._handler.setNext(handler);
            }
        });
    };
    Form.prototype.configureData = function (config) {
        var object = null;
        var type = StringHelper_1.StringHelper.ucfirst(config['_type']);
        if (type) {
            var className = window['MuddeFormgen'].Data[type];
            object = new className(config, this);
        }
        this._data = object;
    };
    Form.getFormById = function (id) {
        var filterFunction = function (form) { return form.id === id; };
        var form = Form._forms.filter(filterFunction);
        return form.length === 0 ? null : form[0];
    };
    Form.prototype.render = function () {
        var _this = this;
        var _a;
        if (this._form === undefined)
            throw new Error('Form not set!');
        var main = this;
        var form = this._form;
        form.clear();
        this.addFields();
        this.addButtons();
        (_a = this._handler) === null || _a === void 0 ? void 0 : _a.handle(form);
        window.onload = function () {
            var jsCode = '$.validator.setDefaults({ ignore: ".ck-hidden, .ck, .select2-search__field, .btn", debug: true }); var formgenValidator = $( "#' + _this.id + '" ).validate({ rules: ' + JSON.stringify(_this._rules) + '});formgenValidator.checkForm();formgenValidator.showErrors()';
            var s = document.createElement('script');
            main._additionalJs.push(jsCode);
            s.text = main._additionalJs.join(';');
            document.body.appendChild(s);
        };
        return form;
    };
    Form.prototype.initPanel = function (panelId, panelLabel) {
        var form = this._form;
        if (!(form === null || form === void 0 ? void 0 : form.hasElementById(panelId))) {
            form === null || form === void 0 ? void 0 : form.gotoRoot().appendNode_('div', { id: panelId, class: 'panel', 'data-formgen-name': panelLabel });
        }
    };
    Form.prototype.addButtons = function () {
        var form = this._form;
        form.gotoRoot();
        this.buttons.forEach(function (element) {
            form === null || form === void 0 ? void 0 : form.appendElement_(element.render());
        });
    };
    Form.prototype.addFields = function () {
        var _this = this;
        var form = this._form;
        var main = this;
        this.fields.forEach(function (field) {
            var _a;
            var panelId = 'panel_' + field.panel;
            var panelLabel = (_a = _this._panels[field.panel]) !== null && _a !== void 0 ? _a : panelId;
            var renderedElement = field.render();
            _this.initPanel(panelId, panelLabel);
            !field.extraJs || _this._additionalJs.push(field.extraJs);
            !field.hasRules || (main._rules = __assign(__assign({}, main._rules), field.rulesComplete));
            form === null || form === void 0 ? void 0 : form.getElementById(panelId).appendElement_(renderedElement);
        });
    };
    Object.defineProperty(Form.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "panels", {
        get: function () {
            return this._panels;
        },
        set: function (value) {
            this._panels = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "loaded", {
        get: function () {
            return this._loaded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "languages", {
        get: function () {
            return this._languages;
        },
        set: function (value) {
            this._languages = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        set: function (value) {
            this._fields = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "buttons", {
        get: function () {
            return this._buttons;
        },
        set: function (value) {
            this._buttons = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "form", {
        get: function () {
            if (this._form === undefined)
                throw new Error('Form not set!');
            return this._form;
        },
        set: function (value) {
            this._form = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "handler", {
        get: function () {
            if (this._handler === undefined)
                throw new Error('Handler not set!');
            return this._handler;
        },
        set: function (value) {
            this._handler = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "additionalJs", {
        get: function () {
            return this._additionalJs;
        },
        set: function (value) {
            this._additionalJs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Form._forms = [];
    return Form;
}(ConfigurableAbstract_1.ConfigurableAbstract));
exports.Form = Form;


/***/ }),

/***/ "./src/FormBuilderAbstract.ts":
/*!************************************!*\
  !*** ./src/FormBuilderAbstract.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormBuilderAbstract = void 0;
var BuilderAbstract_1 = __webpack_require__(/*! ./BuilderAbstract */ "./src/BuilderAbstract.ts");
var FormBuilderAbstract = /** @class */ (function (_super) {
    __extends(FormBuilderAbstract, _super);
    function FormBuilderAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormBuilderAbstract.prototype.handle = function (data) {
        if (this.nextEvent) {
            this.nextEvent.handle(data);
        }
        this.coreBuild(data);
        return data;
    };
    return FormBuilderAbstract;
}(BuilderAbstract_1.BuilderAbstract));
exports.FormBuilderAbstract = FormBuilderAbstract;


/***/ }),

/***/ "./src/GroupInputAbstract.ts":
/*!***********************************!*\
  !*** ./src/GroupInputAbstract.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupInputAbstract = void 0;
var NodeCore_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var StringHelper_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Helper/StringHelper */ "./node_modules/mudde-core/src/Helper/StringHelper.ts");
var Array_1 = __webpack_require__(/*! ./Data/Array */ "./src/Data/Array.ts");
var InputAbstract_1 = __webpack_require__(/*! ./InputAbstract */ "./src/InputAbstract.ts");
var GroupInputAbstract = /** @class */ (function (_super) {
    __extends(GroupInputAbstract, _super);
    function GroupInputAbstract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = new Array_1.Array({ data: [] });
        _this._currentData = {};
        return _this;
    }
    GroupInputAbstract.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { data: new Array_1.Array({ data: [] }) });
    };
    GroupInputAbstract.prototype.configureData = function (config) {
        var type = StringHelper_1.StringHelper.ucfirst(config['_type']);
        var className = window['MuddeFormgen'].Data[type];
        var object = new className(config, this);
        this._data = object;
    };
    GroupInputAbstract.prototype.render = function () {
        var _this = this;
        var _a;
        var mainId = this.id;
        var isMultilingual = this.isMultilingual;
        var languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
        var output = new NodeCore_1.NodeCore('div', {});
        var ids = this.coreIds = [];
        output.appendElement(this.preCoreHTMLInput());
        this._data.forEach(function (data) {
            _this.currentData = data;
            languages.forEach(function (language) {
                var id = isMultilingual ? mainId + "_" + language : mainId;
                var name = isMultilingual ? mainId + "[" + language + "]" : mainId;
                var object = _this.coreHTMLInput(id, name, language);
                ids.push(object);
                output.appendElement_(object);
            });
            output.appendElement(_this.postCoreHTMLInput());
        });
        output
            .prependElement(this.preHTMLInput())
            .appendElement(this.postHTMLInput());
        (_a = this.handler) === null || _a === void 0 ? void 0 : _a.handle(output);
        return output;
    };
    Object.defineProperty(GroupInputAbstract.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupInputAbstract.prototype, "currentData", {
        get: function () {
            return this._currentData;
        },
        set: function (value) {
            this._currentData = value;
        },
        enumerable: false,
        configurable: true
    });
    return GroupInputAbstract;
}(InputAbstract_1.InputAbstract));
exports.GroupInputAbstract = GroupInputAbstract;


/***/ }),

/***/ "./src/Helper/IconHelper.ts":
/*!**********************************!*\
  !*** ./src/Helper/IconHelper.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconHelper = void 0;
var IconHelper = /** @class */ (function () {
    function IconHelper() {
    }
    IconHelper.suitHeart = function (size) {
        if (size === void 0) { size = '1em'; }
        return "<svg width=\"" + size + "\" height=\"" + size + "\" viewBox=\"0 0 16 16\" class=\"bi bi-suit-heart ml-1\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path fill-rule=\"evenodd\" d=\"M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z\"/>\n      </svg>";
    };
    IconHelper.starFill = function (size) {
        if (size === void 0) { size = '1em'; }
        return "<svg width=\"" + size + "\" height=\"" + size + "\" viewBox=\"0 0 16 16\" class=\"bi bi-star-fill ml-1 mb-2\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z\"/>\n    </svg>";
    };
    return IconHelper;
}());
exports.IconHelper = IconHelper;


/***/ }),

/***/ "./src/Helper/index.ts":
/*!*****************************!*\
  !*** ./src/Helper/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./IconHelper */ "./src/Helper/IconHelper.ts"), exports);


/***/ }),

/***/ "./src/Input/Builder/BootstrapBuilder.ts":
/*!***********************************************!*\
  !*** ./src/Input/Builder/BootstrapBuilder.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BootstrapBuilder = void 0;
var NodeCore_1 = __webpack_require__(/*! mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputBuilderAbstract_1 = __webpack_require__(/*! ../../InputBuilderAbstract */ "./src/InputBuilderAbstract.ts");
var BootstrapBuilder = /** @class */ (function (_super) {
    __extends(BootstrapBuilder, _super);
    function BootstrapBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BootstrapBuilder.prototype.coreBuild = function (output) {
        output
            .gotoRoot()
            .addClass('mb-1');
        var label = output.getElementByTagName('label').item(0);
        label === null || label === void 0 ? void 0 : label.classList.add('form-label');
        var input = this.input;
        var help = output.getElementByClass('help').item(0);
        if (help) {
            help.classList.add('form-text');
            help.innerHTML = input.help;
        }
        input.coreIds.forEach(function (item) {
            var classes = '' + item.getAttribute('class');
            if (classes.indexOf('form-check') === -1) {
                item.gotoRoot().addClass('form-control');
            }
        });
        if (input.isMultilingual) {
            input.form.languages.forEach(function (language) {
                var id = input.id + '_' + language;
                output
                    .getElementById(id)
                    .moveInNode(function (oldNode) {
                    return new NodeCore_1.NodeCore('div', { class: 'input-group mb-1' })
                        .appendNode_('span', { class: 'input-group-text' })
                        .appendNode('i', { class: language + " flag mr-0" })
                        ._()
                        .appendElement_(oldNode);
                });
            });
        }
    };
    return BootstrapBuilder;
}(InputBuilderAbstract_1.InputBuilderAbstract));
exports.BootstrapBuilder = BootstrapBuilder;


/***/ }),

/***/ "./src/Input/Builder/GeneralBuilder.ts":
/*!*********************************************!*\
  !*** ./src/Input/Builder/GeneralBuilder.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneralBuilder = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var IconHelper_1 = __webpack_require__(/*! ../../Helper/IconHelper */ "./src/Helper/IconHelper.ts");
var InputBuilderAbstract_1 = __webpack_require__(/*! ../../InputBuilderAbstract */ "./src/InputBuilderAbstract.ts");
var GeneralBuilder = /** @class */ (function (_super) {
    __extends(GeneralBuilder, _super);
    function GeneralBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralBuilder.prototype.coreBuild = function (output) {
        var input = this.input;
        var elements = input.coreIds;
        var labelText = input.label + (input.require ? IconHelper_1.IconHelper.starFill('9px') : '');
        var label = new NodeCore_1.NodeCore('label', { for: elements[0].id, class: 'myLabel' });
        var help = new NodeCore_1.NodeCore('span', { class: 'help', id: 'help_' + input.id });
        label.innerHTML = labelText;
        output
            .gotoRoot()
            .setAttributes({ 'style': 'margin-bottom: 10px;' })
            .prependElement_(label)
            .appendElement_(help);
    };
    return GeneralBuilder;
}(InputBuilderAbstract_1.InputBuilderAbstract));
exports.GeneralBuilder = GeneralBuilder;


/***/ }),

/***/ "./src/Input/Builder/index.ts":
/*!************************************!*\
  !*** ./src/Input/Builder/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BootstrapBuilder */ "./src/Input/Builder/BootstrapBuilder.ts"), exports);
__exportStar(__webpack_require__(/*! ./GeneralBuilder */ "./src/Input/Builder/GeneralBuilder.ts"), exports);


/***/ }),

/***/ "./src/Input/Checkbox.ts":
/*!*******************************!*\
  !*** ./src/Input/Checkbox.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Checkbox = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var GroupInputAbstract_1 = __webpack_require__(/*! ../GroupInputAbstract */ "./src/GroupInputAbstract.ts");
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(config, form) {
        var _this = _super.call(this, form) || this;
        _this.configuring(config);
        return _this;
    }
    Checkbox.prototype.getDefaultConfig = function () {
        return __assign({}, _super.prototype.getDefaultConfig.call(this));
    };
    Checkbox.prototype.coreHTMLInput = function (id, name, language) {
        var currentData = this.currentData;
        var element = new NodeCore_1.NodeCore('div', { 'class': 'form-check', style: 'display: table-cell;' });
        var newId = id + '_' + currentData.id;
        element
            .appendNode('input', {
            id: newId,
            name: name,
            class: 'form-check-input',
            type: 'checkbox',
            value: currentData.id
        })
            .appendNode_('label', {
            'for': newId,
            'class': 'form-check-label'
        }, currentData.value);
        return element;
    };
    return Checkbox;
}(GroupInputAbstract_1.GroupInputAbstract));
exports.Checkbox = Checkbox;


/***/ }),

/***/ "./src/Input/Ckeditor.ts":
/*!*******************************!*\
  !*** ./src/Input/Ckeditor.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ckeditor = void 0;
var Textarea_1 = __webpack_require__(/*! ./Textarea */ "./src/Input/Textarea.ts");
var Ckeditor = /** @class */ (function (_super) {
    __extends(Ckeditor, _super);
    function Ckeditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ckeditor.prototype.coreHTMLInput = function (id, name, language) {
        var element = _super.prototype.coreHTMLInput.call(this, id, name, language);
        this.extraJs = "ClassicEditor.create(" + name + ")";
        return element;
    };
    return Ckeditor;
}(Textarea_1.Textarea));
exports.Ckeditor = Ckeditor;


/***/ }),

/***/ "./src/Input/Combobox.ts":
/*!*******************************!*\
  !*** ./src/Input/Combobox.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Combobox = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var Array_1 = __webpack_require__(/*! ../Data/Array */ "./src/Data/Array.ts");
var StringHelper_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Helper/StringHelper */ "./node_modules/mudde-core/src/Helper/StringHelper.ts");
var Combobox = /** @class */ (function (_super) {
    __extends(Combobox, _super);
    function Combobox(config, form) {
        var _this = _super.call(this, form) || this;
        _this._multiple = false;
        _this._data = new Array_1.Array({ data: [] });
        _this.configuring(config);
        return _this;
    }
    Combobox.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { multiple: false, data: new Array_1.Array({ data: [] }) });
    };
    Combobox.prototype.configureData = function (config) {
        var type = StringHelper_1.StringHelper.ucfirst(config['_type']);
        var className = window['MuddeFormgen'].Data[type];
        var object = new className(config, this);
        this._data = object;
    };
    Combobox.prototype.coreHTMLInput = function (id, name, language) {
        var element = new NodeCore_1.NodeCore('select', __assign(__assign({ id: id, name: name }, this.placeholder ? { placeholder: this.placeholder } : {}), this.multiple === true ? { 'multiple': '' } : {}));
        if (this.multiple !== true) {
            element.appendNode('option', { value: null }, '');
        }
        this._data.forEach(function (dataitem) {
            element.appendNode('option', { value: dataitem.id }, dataitem.value);
        });
        return element;
    };
    Object.defineProperty(Combobox.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            this._multiple = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Combobox.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    return Combobox;
}(InputAbstract_1.InputAbstract));
exports.Combobox = Combobox;


/***/ }),

/***/ "./src/Input/Email.ts":
/*!****************************!*\
  !*** ./src/Input/Email.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Email = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var Email = /** @class */ (function (_super) {
    __extends(Email, _super);
    function Email(config, form) {
        var _this = _super.call(this, form) || this;
        _this.configuring(config);
        return _this;
    }
    Email.prototype.getDefaultConfig = function () {
        return __assign({}, _super.prototype.getDefaultConfig.call(this));
    };
    Email.prototype.coreHTMLInput = function (id, name, language) {
        var element = new NodeCore_1.NodeCore('input', {
            id: id,
            name: name,
            type: 'email',
            'aria-label': this.label,
            'data-language': language
        });
        return element;
    };
    return Email;
}(InputAbstract_1.InputAbstract));
exports.Email = Email;


/***/ }),

/***/ "./src/Input/Radio.ts":
/*!****************************!*\
  !*** ./src/Input/Radio.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Radio = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var GroupInputAbstract_1 = __webpack_require__(/*! ../GroupInputAbstract */ "./src/GroupInputAbstract.ts");
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(config, form) {
        var _this = _super.call(this, form) || this;
        _this.configuring(config);
        return _this;
    }
    Radio.prototype.getDefaultConfig = function () {
        return __assign({}, _super.prototype.getDefaultConfig.call(this));
    };
    Radio.prototype.coreHTMLInput = function (id, name, language) {
        var currentData = this.currentData;
        var element = new NodeCore_1.NodeCore('div', { 'class': 'form-check', style: 'display: table-cell;' });
        var newId = id + '_' + currentData.id;
        element
            .appendNode('input', {
            id: newId,
            name: name,
            class: 'form-check-input',
            type: 'radio',
            value: currentData.id
        })
            .appendNode('label', {
            'for': newId,
            'class': 'form-check-label'
        }, currentData.value);
        return element;
    };
    return Radio;
}(GroupInputAbstract_1.GroupInputAbstract));
exports.Radio = Radio;


/***/ }),

/***/ "./src/Input/Select2.ts":
/*!******************************!*\
  !*** ./src/Input/Select2.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Select2 = void 0;
var Combobox_1 = __webpack_require__(/*! ./Combobox */ "./src/Input/Combobox.ts");
var Select2 = /** @class */ (function (_super) {
    __extends(Select2, _super);
    function Select2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select2.prototype.coreHTMLInput = function (id, name, language) {
        var element = _super.prototype.coreHTMLInput.call(this, id, name, language);
        element.gotoRoot().setAttributes({ 'style': 'opacity: 0;' });
        this.extraJs = "$('#" + id + "').select2();";
        return element;
    };
    return Select2;
}(Combobox_1.Combobox));
exports.Select2 = Select2;


/***/ }),

/***/ "./src/Input/Text.ts":
/*!***************************!*\
  !*** ./src/Input/Text.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Text = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(config, form) {
        var _this = _super.call(this, form) || this;
        _this._mask = '';
        _this._format = '';
        _this._prefix = '';
        _this._suffix = '';
        _this._multiple = false;
        _this._spellcheck = false;
        _this.configuring(config);
        return _this;
    }
    Text.prototype.canBeMultilingual = function () { return true; };
    Text.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { mask: '', format: '', prefix: '', suffix: '', multiple: false, spellcheck: false });
    };
    Text.prototype.coreHTMLInput = function (id, name, language) {
        var element = new NodeCore_1.NodeCore('input', {
            id: id,
            name: name,
            type: 'text',
            placeholder: this.placeholder,
            spellcheck: this.spellcheck
        });
        return element;
    };
    Object.defineProperty(Text.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        set: function (value) {
            this._mask = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "prefix", {
        get: function () {
            return this._prefix;
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "suffix", {
        get: function () {
            return this._suffix;
        },
        set: function (value) {
            this._suffix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            this._multiple = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "spellcheck", {
        get: function () {
            return this._spellcheck;
        },
        set: function (value) {
            this._spellcheck = value;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(InputAbstract_1.InputAbstract));
exports.Text = Text;


/***/ }),

/***/ "./src/Input/Textarea.ts":
/*!*******************************!*\
  !*** ./src/Input/Textarea.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Textarea = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea(config, form) {
        var _this = _super.call(this, form) || this;
        _this._spellcheck = false;
        _this.configuring(config);
        return _this;
    }
    Textarea.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { spellcheck: false });
    };
    Textarea.prototype.coreHTMLInput = function (id, name, language) {
        var element = new NodeCore_1.NodeCore('textarea', {
            id: id,
            name: name,
            spellcheck: this.spellcheck
        });
        return element;
    };
    Object.defineProperty(Textarea.prototype, "spellcheck", {
        get: function () {
            return this._spellcheck;
        },
        set: function (value) {
            this._spellcheck = value;
        },
        enumerable: false,
        configurable: true
    });
    return Textarea;
}(InputAbstract_1.InputAbstract));
exports.Textarea = Textarea;


/***/ }),

/***/ "./src/Input/UploadFile.ts":
/*!*********************************!*\
  !*** ./src/Input/UploadFile.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadFile = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var UploadFile = /** @class */ (function (_super) {
    __extends(UploadFile, _super);
    function UploadFile(config, form) {
        var _this = _super.call(this, form) || this;
        _this._multiple = false;
        _this.configuring(config);
        return _this;
    }
    UploadFile.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { multiple: false });
    };
    UploadFile.prototype.coreHTMLInput = function (id, name, language) {
        var attributes = __assign({ id: id, name: name, type: 'file' }, this.multiple ? { multiple: '' } : {});
        var element = new NodeCore_1.NodeCore('input', attributes);
        return element;
    };
    Object.defineProperty(UploadFile.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            this._multiple = value;
        },
        enumerable: false,
        configurable: true
    });
    return UploadFile;
}(InputAbstract_1.InputAbstract));
exports.UploadFile = UploadFile;


/***/ }),

/***/ "./src/Input/UploadImage.ts":
/*!**********************************!*\
  !*** ./src/Input/UploadImage.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadImage = void 0;
var NodeCore_1 = __webpack_require__(/*! ../../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var InputAbstract_1 = __webpack_require__(/*! ../InputAbstract */ "./src/InputAbstract.ts");
var UploadImage = /** @class */ (function (_super) {
    __extends(UploadImage, _super);
    function UploadImage(config, form) {
        var _this = _super.call(this, form) || this;
        _this._multiple = false;
        _this._accept = '';
        _this.configuring(config);
        return _this;
    }
    UploadImage.prototype.getDefaultConfig = function () {
        return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { accept: 'image/x-png, image/gif, image/jpeg', multiple: false });
    };
    UploadImage.prototype.postCoreHTMLInput = function () {
        return new NodeCore_1.NodeCore('b', {}, 'Hello');
    };
    UploadImage.prototype.coreHTMLInput = function (id, name, language) {
        var attributes = __assign({ id: id, name: name, type: 'file', accept: this.accept }, this.multiple ? { multiple: '' } : {});
        // todo  Add JS to show and edit images!  Gr.O.M.
        //  var img = document.createElement('img'); 
        //  img.setAttribute('src', URL.createObjectURL(temp1.files[0])); 
        //  document.getElementById('fileimage').parentNode.appendChild(img)
        var element = new NodeCore_1.NodeCore('input', attributes);
        return element;
    };
    Object.defineProperty(UploadImage.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            this._multiple = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UploadImage.prototype, "accept", {
        get: function () {
            return this._accept;
        },
        set: function (value) {
            this._accept = value;
        },
        enumerable: false,
        configurable: true
    });
    return UploadImage;
}(InputAbstract_1.InputAbstract));
exports.UploadImage = UploadImage;


/***/ }),

/***/ "./src/Input/index.ts":
/*!****************************!*\
  !*** ./src/Input/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Builder = void 0;
// created from 'create-ts-index'
var BuilderImport = __webpack_require__(/*! ./Builder */ "./src/Input/Builder/index.ts");
exports.Builder = BuilderImport;
__exportStar(__webpack_require__(/*! ./Checkbox */ "./src/Input/Checkbox.ts"), exports);
__exportStar(__webpack_require__(/*! ./Combobox */ "./src/Input/Combobox.ts"), exports);
__exportStar(__webpack_require__(/*! ./Email */ "./src/Input/Email.ts"), exports);
__exportStar(__webpack_require__(/*! ./Radio */ "./src/Input/Radio.ts"), exports);
__exportStar(__webpack_require__(/*! ./Text */ "./src/Input/Text.ts"), exports);
__exportStar(__webpack_require__(/*! ./Textarea */ "./src/Input/Textarea.ts"), exports);
__exportStar(__webpack_require__(/*! ./UploadFile */ "./src/Input/UploadFile.ts"), exports);
__exportStar(__webpack_require__(/*! ./UploadImage */ "./src/Input/UploadImage.ts"), exports);
__exportStar(__webpack_require__(/*! ./Select2 */ "./src/Input/Select2.ts"), exports);
__exportStar(__webpack_require__(/*! ./Ckeditor */ "./src/Input/Ckeditor.ts"), exports);


/***/ }),

/***/ "./src/InputAbstract.ts":
/*!******************************!*\
  !*** ./src/InputAbstract.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputAbstract = void 0;
var ConfigurableAbstract_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Core/ConfigurableAbstract */ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts");
var NodeCore_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Core/NodeCore */ "./node_modules/mudde-core/src/Core/NodeCore.ts");
var GuidHelper_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Helper/GuidHelper */ "./node_modules/mudde-core/src/Helper/GuidHelper.ts");
var InputAbstract = /** @class */ (function (_super) {
    __extends(InputAbstract, _super);
    function InputAbstract(form) {
        var _this = _super.call(this) || this;
        _this.__type = '';
        _this._id = '';
        _this._label = '';
        _this._help = '';
        _this._placeholder = '';
        _this._panel = '';
        _this._unique = false;
        _this._input = false;
        _this._autofocus = false;
        _this._hidden = false;
        _this._require = false;
        _this._multilingual = false;
        _this._coreIds = [];
        _this._extraJs = '';
        _this._form = form;
        return _this;
    }
    InputAbstract.prototype.preCoreHTMLInput = function () { return null; };
    InputAbstract.prototype.preHTMLInput = function () { return null; };
    InputAbstract.prototype.postCoreHTMLInput = function () { return null; };
    InputAbstract.prototype.postHTMLInput = function () { return null; };
    InputAbstract.prototype.javascript = function () { return ''; };
    InputAbstract.prototype.canBeMultilingual = function () { return false; };
    InputAbstract.prototype.getDefaultConfig = function () {
        return {
            _type: 'Text',
            id: GuidHelper_1.GuidHelper.raw(),
            input: true,
            label: '',
            help: '',
            unique: false,
            validations: [],
            placeholder: '',
            panel: null,
            autofocus: false,
            require: false,
            hidden: false,
            multilingual: false,
            builders: []
        };
    };
    InputAbstract.prototype.configureBuilders = function (rawFields) {
        var _this = this;
        rawFields.unshift('GeneralBuilder');
        rawFields.forEach(function (builder) {
            var className = window['MuddeFormgen'].Input.Builder[builder];
            var handler = new className(_this);
            if (!_this._handlerBuilders) {
                _this._handlerBuilders = handler;
            }
            else {
                _this._handlerBuilders.setNext(handler);
            }
        });
    };
    InputAbstract.prototype.configureValidations = function (rawFields) {
        var _this = this;
        rawFields.forEach(function (config) {
            var type = config['_type'];
            var className = window['MuddeFormgen'].Validation[type];
            var handler = new className(_this, config);
            if (!_this._handlerValidations) {
                _this._handlerValidations = handler;
            }
            else {
                handler.setNext(_this._handlerValidations);
                _this._handlerValidations = handler;
            }
        });
    };
    InputAbstract.prototype.render = function () {
        var _this = this;
        var _a, _b;
        var mainId = this.id;
        var isMultilingual = this.isMultilingual;
        var languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
        var output = new NodeCore_1.NodeCore('div', {});
        var ids = this.coreIds = [];
        output.appendElement(this.preCoreHTMLInput());
        languages.forEach(function (language) {
            var id = isMultilingual ? mainId + "_" + language : mainId;
            var name = isMultilingual ? mainId + "[" + language + "]" : mainId;
            var object = _this.coreHTMLInput(id, name, language);
            ids.push(object);
            output.appendElement_(object);
        });
        output
            .appendElement_(this.postCoreHTMLInput())
            .prependElement_(this.preHTMLInput())
            .appendElement_(this.postHTMLInput());
        (_a = this._handlerValidations) === null || _a === void 0 ? void 0 : _a.handle(output);
        (_b = this._handlerBuilders) === null || _b === void 0 ? void 0 : _b.handle(output);
        return output;
    };
    Object.defineProperty(InputAbstract.prototype, "isMultilingual", {
        get: function () {
            var isMultilingualRequested = this.form.languages.length > 1 && this.multilingual;
            return this.canBeMultilingual() && isMultilingualRequested;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "extraJs", {
        get: function () {
            return this._extraJs;
        },
        set: function (value) {
            this._extraJs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "input", {
        get: function () {
            return this._input;
        },
        set: function (value) {
            this._input = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "_type", {
        get: function () {
            return this.__type;
        },
        set: function (value) {
            this.__type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "help", {
        get: function () {
            return this._help;
        },
        set: function (value) {
            this._help = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "unique", {
        get: function () {
            return this._unique;
        },
        set: function (value) {
            this._unique = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "handler", {
        get: function () {
            if (this._handlerBuilders === undefined)
                throw new Error('Handler not set!');
            return this._handlerBuilders;
        },
        set: function (value) {
            this._handlerBuilders = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "autofocus", {
        get: function () {
            return this._autofocus;
        },
        set: function (value) {
            this._autofocus = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "hidden", {
        get: function () {
            return this._hidden;
        },
        set: function (value) {
            this._hidden = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "require", {
        get: function () {
            return this._require;
        },
        set: function (value) {
            this._require = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "multilingual", {
        get: function () {
            return this._multilingual;
        },
        set: function (value) {
            this._multilingual = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "form", {
        get: function () {
            if (this._form === undefined)
                throw new Error('Input not properly initialized!');
            return this._form;
        },
        set: function (value) {
            this._form = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "panel", {
        get: function () {
            return this._panel;
        },
        set: function (value) {
            this._panel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "coreIds", {
        get: function () {
            return this._coreIds;
        },
        set: function (value) {
            this._coreIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "hasRules", {
        get: function () {
            return this._rules && Object.values(this._rules).length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "rulesComplete", {
        get: function () {
            var main = this;
            var completeRules = {};
            this.coreIds.forEach(function (item) {
                completeRules[item.getAttribute('name')] = main.rules;
            });
            return completeRules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputAbstract.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        set: function (value) {
            this._rules = value;
        },
        enumerable: false,
        configurable: true
    });
    return InputAbstract;
}(ConfigurableAbstract_1.ConfigurableAbstract));
exports.InputAbstract = InputAbstract;


/***/ }),

/***/ "./src/InputBuilderAbstract.ts":
/*!*************************************!*\
  !*** ./src/InputBuilderAbstract.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputBuilderAbstract = void 0;
var BuilderAbstract_1 = __webpack_require__(/*! ./BuilderAbstract */ "./src/BuilderAbstract.ts");
var InputBuilderAbstract = /** @class */ (function (_super) {
    __extends(InputBuilderAbstract, _super);
    function InputBuilderAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBuilderAbstract.prototype.handle = function (data) {
        if (this.nextEvent) {
            this.nextEvent.handle(data);
        }
        this.coreBuild(data);
        return data;
    };
    return InputBuilderAbstract;
}(BuilderAbstract_1.BuilderAbstract));
exports.InputBuilderAbstract = InputBuilderAbstract;


/***/ }),

/***/ "./src/Validation/Length.ts":
/*!**********************************!*\
  !*** ./src/Validation/Length.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Length = void 0;
var ValidationAbstract_1 = __webpack_require__(/*! ../ValidationAbstract */ "./src/ValidationAbstract.ts");
var Length = /** @class */ (function (_super) {
    __extends(Length, _super);
    function Length(config) {
        var _this = _super.call(this, config) || this;
        _this._min = 0;
        _this._max = 0;
        _this.configuring(config);
        return _this;
    }
    Length.prototype.getDefaultConfig = function () {
        return {
            min: 0,
            max: 0
        };
    };
    Length.prototype.coreBuild = function (output) {
        var attributes = __assign(__assign({}, this.min > 0 ? { minlength: this.min } : {}), this.max > 0 ? { maxlength: this.max } : {});
        this.input.rules = __assign(__assign({}, this.input.rules), attributes);
    };
    Length.prototype.onchange = function (event) {
    };
    Object.defineProperty(Length.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            this._min = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Length.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            this._max = value;
        },
        enumerable: false,
        configurable: true
    });
    return Length;
}(ValidationAbstract_1.ValidationAbstract));
exports.Length = Length;


/***/ }),

/***/ "./src/Validation/NotEmpty.ts":
/*!************************************!*\
  !*** ./src/Validation/NotEmpty.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotEmpty = void 0;
var ValidationAbstract_1 = __webpack_require__(/*! ../ValidationAbstract */ "./src/ValidationAbstract.ts");
var NotEmpty = /** @class */ (function (_super) {
    __extends(NotEmpty, _super);
    function NotEmpty(config) {
        var _this = _super.call(this, config) || this;
        _this.configuring(config);
        return _this;
    }
    NotEmpty.prototype.getDefaultConfig = function () {
        return {};
    };
    NotEmpty.prototype.coreBuild = function (output) {
        var attributes = {
            required: true
        };
        this.input.rules = __assign(__assign({}, this.input.rules), attributes);
    };
    return NotEmpty;
}(ValidationAbstract_1.ValidationAbstract));
exports.NotEmpty = NotEmpty;


/***/ }),

/***/ "./src/Validation/index.ts":
/*!*********************************!*\
  !*** ./src/Validation/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// created from 'create-ts-index'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Length */ "./src/Validation/Length.ts"), exports);
__exportStar(__webpack_require__(/*! ./NotEmpty */ "./src/Validation/NotEmpty.ts"), exports);


/***/ }),

/***/ "./src/ValidationAbstract.ts":
/*!***********************************!*\
  !*** ./src/ValidationAbstract.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationAbstract = void 0;
var ConfigurableAbstract_1 = __webpack_require__(/*! ../node_modules/mudde-core/src/Core/ConfigurableAbstract */ "./node_modules/mudde-core/src/Core/ConfigurableAbstract.ts");
var ValidationAbstract = /** @class */ (function (_super) {
    __extends(ValidationAbstract, _super);
    function ValidationAbstract(input) {
        var _this = _super.call(this) || this;
        _this._input = input;
        return _this;
    }
    ValidationAbstract.prototype.setNext = function (event) {
        if (this, this._nextEvent) {
            this._nextEvent.setNext(event);
        }
        else {
            this._nextEvent = event;
        }
        return event;
    };
    ValidationAbstract.prototype.handle = function (data) {
        if (this._nextEvent) {
            this._nextEvent.handle(data);
        }
        this.coreBuild(data);
        return data;
    };
    Object.defineProperty(ValidationAbstract.prototype, "input", {
        get: function () {
            if (this._input === undefined)
                throw new Error('Input not set!');
            return this._input;
        },
        set: function (value) {
            this._input = value;
        },
        enumerable: false,
        configurable: true
    });
    return ValidationAbstract;
}(ConfigurableAbstract_1.ConfigurableAbstract));
exports.ValidationAbstract = ValidationAbstract;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Validation = exports.Input = exports.Helper = exports.Data = exports.Button = exports.Builder = void 0;
// created from 'create-ts-index'
var BuilderImport = __webpack_require__(/*! ./Builder */ "./src/Builder/index.ts");
var ButtonImport = __webpack_require__(/*! ./Button */ "./src/Button/index.ts");
var DataImport = __webpack_require__(/*! ./Data */ "./src/Data/index.ts");
var HelperImport = __webpack_require__(/*! ./Helper */ "./src/Helper/index.ts");
var InputImport = __webpack_require__(/*! ./Input */ "./src/Input/index.ts");
var ValidationImport = __webpack_require__(/*! ./Validation */ "./src/Validation/index.ts");
exports.Builder = BuilderImport;
exports.Button = ButtonImport;
exports.Data = DataImport;
exports.Helper = HelperImport;
exports.Input = InputImport;
exports.Validation = ValidationImport;
__exportStar(__webpack_require__(/*! ./BuilderAbstract */ "./src/BuilderAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./ButtonAbstract */ "./src/ButtonAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./CoreBuildInterface */ "./src/CoreBuildInterface.ts"), exports);
__exportStar(__webpack_require__(/*! ./DataAbstract */ "./src/DataAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./DataEvent */ "./src/DataEvent.ts"), exports);
__exportStar(__webpack_require__(/*! ./Form */ "./src/Form.ts"), exports);
__exportStar(__webpack_require__(/*! ./FormBuilderAbstract */ "./src/FormBuilderAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./GroupInputAbstract */ "./src/GroupInputAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./InputAbstract */ "./src/InputAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./InputBuilderAbstract */ "./src/InputBuilderAbstract.ts"), exports);
__exportStar(__webpack_require__(/*! ./ValidationAbstract */ "./src/ValidationAbstract.ts"), exports);


/***/ })

/******/ 	});
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=formgen.js.map