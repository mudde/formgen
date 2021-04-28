var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
define("node_modules/mudde-node/src/node", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var jsdom = require("../node_modules/jsdom");
    var Node = (function () {
        function Node(tagName, attributes, text) {
            this.setDocument();
            this._root = this._current = tagName[0] === '#'
                ? this.getNodeById(tagName)
                : this.createNode(tagName, attributes, text);
        }
        Node.prototype.setDocument = function () {
            if (typeof document === 'undefined') {
                var dom = new jsdom.JSDOM('<!DOCTYPE html><body></body>');
                if (!dom)
                    throw new Error('Dom not set!');
                var document = dom.window.document;
            }
            this._document = document;
        };
        Node.prototype.getNodeById = function (nodeId) {
            var document = this._document;
            if (!document)
                throw new Error("Document not set!");
            var element = document.getElementById(nodeId);
            if (!element)
                throw new Error('Element not found by id!');
            return element;
        };
        Node.prototype.createNode = function (tagName, attributes, text) {
            var document = this._document;
            if (!document)
                throw new Error("Document not set!");
            var node = document.createElement(tagName);
            if (attributes) {
                for (var key in attributes) {
                    var value = attributes[key];
                    node.setAttribute(key, value);
                }
            }
            if (text) {
                node.innerText = text;
            }
            return node;
        };
        Node.prototype.addClass = function (className) {
            if (this._current === undefined)
                throw new Error('Node not set!');
            var currentClass = this._current.className;
            this._current.setAttribute('class', (currentClass + " " + className).trimLeft());
            return this;
        };
        Node.prototype.getElementById = function (id) {
            var element = document.getElementById(id);
            if (element) {
                this._current = element;
            }
            return this;
        };
        Node.prototype.getElementByTagName = function (tagName) {
            if (this._root === undefined)
                throw new Error('Node not set!');
            var element = this._root.getElementsByTagName(tagName);
            return element;
        };
        Node.prototype.getElementByClass = function (className) {
            if (this._root === undefined)
                throw new Error('Node not set!');
            var element = this._root.getElementsByClassName(className);
            return element;
        };
        Node.prototype.hasElementByClass = function (className) {
            if (this._root === undefined)
                throw new Error('Node not set!');
            return this._root.getElementsByClassName(className).length !== 0;
        };
        Node.prototype.a = function (tagName, attributes, text, setCurrent) {
            return this.appendNode(tagName, attributes, text, setCurrent);
        };
        Node.prototype.prependNode_ = function (tagName, attributes, text) {
            return this.prependNode(tagName, attributes, text, true);
        };
        Node.prototype.prependNode = function (tagName, attributes, text, setCurrent) {
            if (this._current === undefined)
                throw new Error('Node not set!');
            var firstChild = this._current.firstChild;
            if (firstChild) {
                var HTMLElement_1 = this._current.insertBefore(this.createNode(tagName, attributes, text), firstChild);
                HTMLElement_1.innerText = text ? text : '';
                if (setCurrent === true) {
                    this._current = HTMLElement_1;
                }
            }
            return this;
        };
        Node.prototype.appendNode = function (tagName, attributes, text, setCurrent) {
            if (this._current === undefined)
                throw new Error('Node not set!');
            var HTMLElement = this._current.appendChild(this.createNode(tagName, attributes, text));
            HTMLElement.innerText = text ? text : '';
            if (setCurrent === true) {
                this._current = HTMLElement;
            }
            return this;
        };
        Node.prototype.a_ = function (tagName, attributes, text) {
            return this.appendNode(tagName, attributes, text, true);
        };
        Node.prototype.appendNode_ = function (tagName, attributes, text) {
            return this.appendNode(tagName, attributes, text, true);
        };
        Node.prototype.toHTML = function (outerHTML) {
            if (outerHTML === void 0) { outerHTML = true; }
            if (this._root === undefined)
                throw new Error('Node not set!');
            var root = this._root;
            return outerHTML ? root.outerHTML : root.innerHTML;
        };
        Node.prototype.setAttributes = function (attributes) {
            if (this._current === undefined)
                throw new Error('Node not set!');
            var node = this._current;
            for (var key in attributes) {
                var value = attributes[key];
                node.setAttribute(key, value);
            }
            return this;
        };
        Node.prototype.parent = function () {
            if (this._current === undefined)
                throw new Error('Node not set!');
            var parent = this._current.parentElement;
            this._current = parent === null ? this._current : parent;
            return this;
        };
        Node.prototype._ = function () {
            return this.parent();
        };
        Node.prototype.prependElement = function (node) {
            if (this._current === undefined)
                throw new Error('Node not set!');
            var childNode = node instanceof Node ? node.root() : node;
            var firstChild = this._current.firstChild;
            if (firstChild) {
                firstChild.insertBefore(childNode, null);
            }
            return this;
        };
        Node.prototype.prependElement_ = function (node) {
            if (this._current === undefined)
                throw new Error('Node not set!');
            var childNode = node instanceof Node ? node.root() : node;
            var firstChild = this._current.firstChild;
            if (firstChild) {
                this._current = firstChild.insertBefore(childNode, null);
            }
            return this;
        };
        Node.prototype.appendElement = function (node) {
            if (this._current === undefined)
                throw new Error('Node not set!');
            var childNode = node instanceof Node ? node.root() : node;
            this._current = this._current.appendChild(childNode);
            return this;
        };
        Node.prototype.appendElement_ = function (node) {
            if (this._current === undefined)
                throw new Error('Node not set!');
            var childNode = node instanceof Node ? node.root() : node;
            this._current.appendChild(childNode);
            return this;
        };
        Node.prototype.gotoRoot = function () {
            this._current = this._root;
            return this;
        };
        Node.prototype.root = function () {
            if (this._root === undefined)
                throw new Error('Root node not defined!');
            return this._root;
        };
        Object.defineProperty(Node.prototype, "id", {
            get: function () {
                if (this._current === undefined)
                    throw new Error('Node not set!');
                return this._current.getAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Node.prototype, "innerHTML", {
            set: function (html) {
                if (this._current === undefined)
                    throw new Error('Node not set!');
                this._current.innerHTML = html;
            },
            enumerable: false,
            configurable: true
        });
        return Node;
    }());
    exports.default = Node;
});
define("src/Helper/StringHelper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StringHelper = (function () {
        function StringHelper() {
        }
        StringHelper.ucfirst = function (value) {
            if (value === undefined)
                return;
            return value.charAt(0).toUpperCase() + value.slice(1);
        };
        return StringHelper;
    }());
    exports.default = StringHelper;
});
define("src/Core/ConfigurableAbstract", ["require", "exports", "src/Helper/StringHelper"], function (require, exports, StringHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    StringHelper_1 = __importDefault(StringHelper_1);
    var ConfigurableAbstract = (function () {
        function ConfigurableAbstract() {
        }
        ConfigurableAbstract.prototype.configuring = function (config) {
            var defaultConfig = this.getDefaultConfig();
            for (var key in defaultConfig) {
                var methodName = 'configure' + StringHelper_1.default.ucfirst(key);
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
    exports.default = ConfigurableAbstract;
});
define("src/Helper/GuidHelper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GuidHelper = (function () {
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
    exports.default = GuidHelper;
});
define("src/Form/ButtonAbstract", ["require", "exports", "src/Core/ConfigurableAbstract", "src/Helper/GuidHelper"], function (require, exports, ConfigurableAbstract_1, GuidHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ConfigurableAbstract_1 = __importDefault(ConfigurableAbstract_1);
    GuidHelper_1 = __importDefault(GuidHelper_1);
    var ButtonAbstract = (function (_super) {
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
            var output = this.coreHTMLInput(GuidHelper_1.default.create().toString(), 'x', 'nl');
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
    }(ConfigurableAbstract_1.default));
    exports.default = ButtonAbstract;
});
define("src/Button/Submit", ["require", "exports", "node_modules/mudde-node/src/node", "src/Form/ButtonAbstract"], function (require, exports, node_1, ButtonAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    node_1 = __importDefault(node_1);
    ButtonAbstract_1 = __importDefault(ButtonAbstract_1);
    var Submit = (function (_super) {
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
            var attributes = {
                type: 'submit',
                class: 'btn btn-primary',
                onclick: "javascript:\n         b var data = {};\n         Array.from(document.forms[0].elements).forEach(element => {\n             if (element.name) {\n                 if (element.type === 'file') {\n                     tmpData = [];\n                     Array.from(element.files).forEach(element => {\n                         tmpData.push(element.name)\n                     });\n                     data[element.name] = tmpData\n                 } else {\n                     data[element.name] = element.value\n                 }\n             }\n         });\n         alert(JSON.stringify({valid: document.forms[0].checkValidity(),...data}, null, 4));\n         return false",
                value: this.label
            };
            var element = new node_1.default('input', attributes);
            return element;
        };
        return Submit;
    }(ButtonAbstract_1.default));
    exports.default = Submit;
});
define("src/Form/Event", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Event = (function () {
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
    exports.default = Event;
});
define("src/Form/BuilderAbstract", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BuilderAbstract = (function () {
        function BuilderAbstract() {
        }
        return BuilderAbstract;
    }());
    exports.default = BuilderAbstract;
});
define("src/Form/FormBuilderAbstract", ["require", "exports", "src/Form/BuilderAbstract"], function (require, exports, BuilderAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    BuilderAbstract_1 = __importDefault(BuilderAbstract_1);
    var FormBuilderAbstract = (function (_super) {
        __extends(FormBuilderAbstract, _super);
        function FormBuilderAbstract() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FormBuilderAbstract;
    }(BuilderAbstract_1.default));
    exports.default = FormBuilderAbstract;
});
define("src/Form/InputBuilderAbstract", ["require", "exports", "src/Form/BuilderAbstract"], function (require, exports, BuilderAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    BuilderAbstract_2 = __importDefault(BuilderAbstract_2);
    var InputBuilderAbstract = (function (_super) {
        __extends(InputBuilderAbstract, _super);
        function InputBuilderAbstract() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return InputBuilderAbstract;
    }(BuilderAbstract_2.default));
    exports.default = InputBuilderAbstract;
});
define("src/Form/ValidationAbstract", ["require", "exports", "src/Core/ConfigurableAbstract"], function (require, exports, ConfigurableAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ConfigurableAbstract_2 = __importDefault(ConfigurableAbstract_2);
    var ValidationAbstract = (function (_super) {
        __extends(ValidationAbstract, _super);
        function ValidationAbstract() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ValidationAbstract;
    }(ConfigurableAbstract_2.default));
    exports.default = ValidationAbstract;
});
define("src/Form/InputAbstract", ["require", "exports", "src/Core/ConfigurableAbstract", "node_modules/mudde-node/src/node", "src/Helper/GuidHelper"], function (require, exports, ConfigurableAbstract_3, node_2, GuidHelper_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ConfigurableAbstract_3 = __importDefault(ConfigurableAbstract_3);
    node_2 = __importDefault(node_2);
    GuidHelper_2 = __importDefault(GuidHelper_2);
    var requirejs = require("../../node_modules/requirejs/requirejs");
    var InputAbstract = (function (_super) {
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
            _this._ids = [];
            _this._builders = [];
            _this._validations = [];
            _this._form = form;
            return _this;
        }
        InputAbstract.prototype.getDefaultConfig = function () {
            return {
                _type: 'Text',
                id: GuidHelper_2.default.raw(),
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
            var builders = this.builders = [];
            rawFields.unshift('GeneralBuilder');
            rawFields.forEach(function (builder) {
                requirejs(['input/builder/' + builder], function (className) {
                    builders.push(new className.default());
                });
            });
        };
        InputAbstract.prototype.configureValidations = function (rawFields) {
            var main = this;
            this.validations = [];
            rawFields.forEach(function (config, index) {
                var type = config['_type'];
                requirejs(['validation/' + type], function (className) {
                    main.validations[index] = new className.default(config);
                });
            });
        };
        InputAbstract.prototype.render = function () {
            var main = this;
            var elements = [];
            var builders = this.builders;
            var isMultilingual = this.isMultilingual;
            var languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
            var output = new node_2.default('div', {});
            this.ids = [];
            languages.forEach(function (language) {
                var id = isMultilingual ? main.id + "_" + language : main.id;
                var name = isMultilingual ? main.id + "[" + language + "]" : main.id;
                main.renderBuild(id, name, language, elements);
            });
            builders.forEach(function (builder) {
                builder.finalBuild(elements, main, output);
            });
            return output;
        };
        InputAbstract.prototype.renderBuild = function (id, name, language, elements) {
            var main = this;
            var validations = this.validations;
            var builders = this.builders;
            var isMultilingual = this.isMultilingual;
            var object = this.coreHTMLInput(id, name, language);
            validations.forEach(function (validation) {
                object = isMultilingual
                    ? validation.coreMultilingualBuild(object, main, language)
                    : validation.coreBuild(object, main);
            });
            builders.forEach(function (builder) {
                object = isMultilingual
                    ? builder.coreMultilingualBuild(object, main, language)
                    : builder.coreBuild(object, main);
            });
            this.ids.push(id);
            elements.push(object);
        };
        Object.defineProperty(InputAbstract.prototype, "isMultilingual", {
            get: function () {
                return this.form.languages.length > 1 && this.multilingual;
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
        Object.defineProperty(InputAbstract.prototype, "validations", {
            get: function () {
                return this._validations;
            },
            set: function (value) {
                this._validations = value;
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
        Object.defineProperty(InputAbstract.prototype, "ids", {
            get: function () {
                return this._ids;
            },
            set: function (value) {
                this._ids = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputAbstract.prototype, "builders", {
            get: function () {
                return this._builders;
            },
            set: function (value) {
                this._builders = value;
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
        return InputAbstract;
    }(ConfigurableAbstract_3.default));
    exports.default = InputAbstract;
});
define("src/Form/Form", ["require", "exports", "src/Core/ConfigurableAbstract", "node_modules/mudde-node/src/node", "src/Helper/GuidHelper", "src/Helper/StringHelper"], function (require, exports, ConfigurableAbstract_4, node_3, GuidHelper_3, StringHelper_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ConfigurableAbstract_4 = __importDefault(ConfigurableAbstract_4);
    node_3 = __importDefault(node_3);
    GuidHelper_3 = __importDefault(GuidHelper_3);
    StringHelper_2 = __importDefault(StringHelper_2);
    var requirejs = require("../../node_modules/requirejs/requirejs");
    var Form = (function (_super) {
        __extends(Form, _super);
        function Form(config) {
            var _this = _super.call(this) || this;
            _this._id = '';
            _this._languages = [];
            _this._fields = [];
            _this._buttons = [];
            _this._builders = [];
            _this._count = 0;
            _this._loaded = false;
            _this.configuring(config);
            _this.form = new node_3.default('form', { method: 'POST', action: '.', id: _this.id });
            Form._forms.push(_this);
            return _this;
        }
        Form.prototype.getDefaultConfig = function () {
            return {
                id: GuidHelper_3.default.raw(),
                languages: ['nl'],
                fields: [],
                buttons: [],
                layout: [],
                builders: [],
                data: {}
            };
        };
        Form.prototype.configureFields = function (rawFields) {
            var main = this;
            var fields = this.fields = [];
            rawFields.forEach(function (config) {
                var type = config['_type'];
                main.count++;
                requirejs(['input/' + type], function (className) {
                    var object = new className.default(config, main);
                    fields.push(object);
                    main.count--;
                });
            });
        };
        Form.prototype.configureButtons = function (rawFields) {
            var main = this;
            var buttons = this.buttons = [];
            rawFields.forEach(function (config) {
                var type = config['_type'];
                main.count++;
                requirejs(['button/' + type], function (className) {
                    var object = new className.default(config, main);
                    buttons.push(object);
                    main.count--;
                });
            });
        };
        Form.prototype.configureBuilders = function (rawFields) {
            var main = this;
            var builders = this.builders = [];
            rawFields.unshift('GeneralBuilder');
            rawFields.forEach(function (builder) {
                main.count++;
                requirejs(['form/builder/' + builder], function (className) {
                    builders.push(new className.default());
                    main.count--;
                });
            });
        };
        Form.prototype.configureData = function (config) {
            var main = this;
            var type = StringHelper_2.default.ucfirst(config['_type']);
            main.count++;
            requirejs(['data/' + type], function (className) {
                var object = new className.default(config, main);
                main._data = object;
                main.count--;
            });
        };
        Form.getFormById = function (id) {
            var filterFunction = function (form) { return form.id === id; };
            var form = Form._forms.filter(filterFunction);
            return form.length === 0 ? null : form[0];
        };
        Form.prototype.render = function () {
            var _this = this;
            var form = this._form;
            if (form === undefined)
                throw new Error('Form not set!');
            form.root().innerHTML = '';
            this.fields.forEach(function (element) {
                if (form === undefined)
                    throw new Error('Form not set!');
                var renderedElement = element.render();
                form.appendElement_(renderedElement.root());
            });
            this.builders.forEach(function (builder) {
                builder.postBuild(_this);
            });
            form.gotoRoot();
            this.buttons.forEach(function (element) {
                if (form === undefined)
                    throw new Error('Form not set!');
                form.appendElement_(element.render().root());
            });
            return form.root();
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
        Object.defineProperty(Form.prototype, "count", {
            get: function () {
                return this._count;
            },
            set: function (value) {
                this._count = value;
                if (this._count === 0) {
                    this._loaded = true;
                }
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
        Object.defineProperty(Form.prototype, "builders", {
            get: function () {
                return this._builders;
            },
            set: function (value) {
                this._builders = value;
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
        Form._forms = [];
        return Form;
    }(ConfigurableAbstract_4.default));
    exports.default = Form;
});
define("src/Form/ObserverInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/Form/SubjectInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/Form/DataAbstract", ["require", "exports", "src/Core/ConfigurableAbstract"], function (require, exports, ConfigurableAbstract_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ConfigurableAbstract_5 = __importDefault(ConfigurableAbstract_5);
    var DataAbstract = (function (_super) {
        __extends(DataAbstract, _super);
        function DataAbstract(form) {
            var _this = _super.call(this) || this;
            _this._observers = {};
            _this.form = form;
            return _this;
        }
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
        DataAbstract.DATA_PRE_SET = 1;
        DataAbstract.DATA_POST_SET = 2;
        DataAbstract.DATA_PRE_GET = 4;
        DataAbstract.DATA_POST_GET = 8;
        return DataAbstract;
    }(ConfigurableAbstract_5.default));
    exports.default = DataAbstract;
});
define("src/Form/DataEvent", ["require", "exports", "src/Form/Event"], function (require, exports, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Event_1 = __importDefault(Event_1);
    var DataEvent = (function (_super) {
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
    }(Event_1.default));
    exports.default = DataEvent;
});
define("src/Data/Array", ["require", "exports", "src/Form/DataAbstract", "src/Form/DataEvent"], function (require, exports, DataAbstract_1, DataEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DataAbstract_1 = __importDefault(DataAbstract_1);
    DataEvent_1 = __importDefault(DataEvent_1);
    var Array = (function (_super) {
        __extends(Array, _super);
        function Array(config, form) {
            var _this = _super.call(this, form) || this;
            _this._data = {};
            _this._currentData = {};
            _this.configuring(config);
            return _this;
        }
        Array.prototype.getDefaultConfig = function () {
            return {
                data: {}
            };
        };
        Array.prototype.update = function () {
        };
        Array.prototype.connect = function () {
        };
        Array.prototype.restore = function (id) {
            this._currentData[id] = this._data[id];
        };
        Array.prototype.get = function (id) {
            var event = new DataEvent_1.default(this, DataAbstract_1.default.DATA_PRE_GET, id);
            this.notify(event);
            var value = this._currentData[id] ? this._currentData[id] : this._data[id];
            var event = new DataEvent_1.default(this, DataAbstract_1.default.DATA_POST_GET, id);
            this.notify(event);
            return value;
        };
        Array.prototype.set = function (id, value) {
            var event = new DataEvent_1.default(this, DataAbstract_1.default.DATA_PRE_SET, id);
            this.notify(event);
            this._currentData[id] = value;
            var event = new DataEvent_1.default(this, DataAbstract_1.default.DATA_POST_SET, id);
            this.notify(event);
        };
        return Array;
    }(DataAbstract_1.default));
    exports.default = Array;
});
define("src/Form/builder/GeneralBuilder", ["require", "exports", "src/Form/BuilderAbstract"], function (require, exports, BuilderAbstract_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    BuilderAbstract_3 = __importDefault(BuilderAbstract_3);
    var GeneralBuilder = (function (_super) {
        __extends(GeneralBuilder, _super);
        function GeneralBuilder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GeneralBuilder.prototype.postBuild = function (form) {
        };
        return GeneralBuilder;
    }(BuilderAbstract_3.default));
    exports.default = GeneralBuilder;
});
define("src/Form/builder/TabsBuilder", ["require", "exports", "node_modules/mudde-node/src/node", "src/Form/BuilderAbstract"], function (require, exports, node_4, BuilderAbstract_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    node_4 = __importDefault(node_4);
    BuilderAbstract_4 = __importDefault(BuilderAbstract_4);
    var TabsBuilder = (function (_super) {
        __extends(TabsBuilder, _super);
        function TabsBuilder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TabsBuilder.prototype.postBuild = function (form) {
            var htmlForm = form.form.root();
            var panels = htmlForm.getElementsByClassName('panel');
            var tabs = new node_4.default('ul', { class: "nav nav-tabs" });
            for (var key = 0; key < panels.length; key++) {
                var panelLabel = panels.item(key).id;
                var javascript = "javascript:var panelName='" + panelLabel + "'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })";
                tabs
                    .appendElement(new node_4.default('li', { class: 'nav-item' }))
                    .appendElement(new node_4.default('a', { class: 'nav-link ', href: javascript }, panelLabel));
                if (key === 0) {
                    tabs.addClass('active');
                }
            }
            htmlForm.insertBefore(tabs.root(), htmlForm.firstChild);
        };
        return TabsBuilder;
    }(BuilderAbstract_4.default));
    exports.default = TabsBuilder;
});
define("src/Helper/IconHelper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IconHelper = (function () {
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
    exports.default = IconHelper;
});
define("src/Input/Email", ["require", "exports", "node_modules/mudde-node/src/node", "src/Form/InputAbstract"], function (require, exports, node_5, InputAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    node_5 = __importDefault(node_5);
    InputAbstract_1 = __importDefault(InputAbstract_1);
    var Email = (function (_super) {
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
            var element = new node_5.default('input', {
                id: id,
                name: name,
                type: 'email',
                class: 'form-control',
                'aria-label': this.label,
                'data-language': language
            });
            return element;
        };
        return Email;
    }(InputAbstract_1.default));
    exports.default = Email;
});
define("src/Input/File", ["require", "exports", "node_modules/mudde-node/src/node", "src/Form/InputAbstract"], function (require, exports, node_6, InputAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    node_6 = __importDefault(node_6);
    InputAbstract_2 = __importDefault(InputAbstract_2);
    var File = (function (_super) {
        __extends(File, _super);
        function File(config, form) {
            var _this = _super.call(this, form) || this;
            _this._multiple = false;
            _this.configuring(config);
            return _this;
        }
        File.prototype.getDefaultConfig = function () {
            return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { multiple: false });
        };
        File.prototype.coreHTMLInput = function (id, name, language) {
            var attributes = {
                id: id,
                name: name,
                type: 'file',
            };
            if (this.multiple) {
                attributes = __assign(__assign({}, attributes), { multiple: '' });
            }
            var element = new node_6.default('input', attributes);
            return element;
        };
        Object.defineProperty(File.prototype, "multiple", {
            get: function () {
                return this._multiple;
            },
            set: function (value) {
                this._multiple = value;
            },
            enumerable: false,
            configurable: true
        });
        return File;
    }(InputAbstract_2.default));
    exports.default = File;
});
define("src/Input/Text", ["require", "exports", "node_modules/mudde-node/src/node", "src/Form/InputAbstract"], function (require, exports, node_7, InputAbstract_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    node_7 = __importDefault(node_7);
    InputAbstract_3 = __importDefault(InputAbstract_3);
    var Text = (function (_super) {
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
        Text.prototype.getDefaultConfig = function () {
            return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { mask: '', format: '', prefix: '', suffix: '', multiple: false, spellcheck: false });
        };
        Text.prototype.coreHTMLInput = function (id, name, language) {
            var element = new node_7.default('input', {
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
    }(InputAbstract_3.default));
    exports.default = Text;
});
define("src/Input/builder/BootstrapBuilder", ["require", "exports", "node_modules/mudde-node/src/node", "src/Form/InputBuilderAbstract"], function (require, exports, node_8, InputBuilderAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    node_8 = __importDefault(node_8);
    InputBuilderAbstract_1 = __importDefault(InputBuilderAbstract_1);
    var BootstrapBuilder = (function (_super) {
        __extends(BootstrapBuilder, _super);
        function BootstrapBuilder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BootstrapBuilder.prototype.coreBuild = function (output, input) {
            var attributes = {
                class: 'form-control',
            };
            if (input.help !== '') {
                attributes = __assign(__assign({}, attributes), { 'aria-describedby': input.id + 'Help' });
            }
            output
                .getElementById(input.id)
                .setAttributes(attributes);
            return output;
        };
        BootstrapBuilder.prototype.coreMultilingualBuild = function (output, input, language) {
            output = this.coreBuild(output, input);
            var newNode = new node_8.default('div', { class: 'input-group mb-1' })
                .appendNode_('span', { class: 'input-group-text' })
                .appendNode('i', { class: language + " flag mr-0" })
                ._()
                .appendElement_(output.root());
            return newNode;
        };
        BootstrapBuilder.prototype.finalBuild = function (elements, input, output) {
            output.setAttributes({ class: 'mb-1' });
            var label = output.getElementByTagName('label').item(0);
            if (!label)
                throw new Error('label element not found!');
            label.classList.add('form-label');
            var help = output.getElementByClass(input.id).item(0);
            if (!help)
                throw new Error('help element not found!');
            if (input.help !== '') {
                help.classList.add('form-text');
            }
        };
        BootstrapBuilder.prototype.postBuild = function (form) {
            var htmlForm = form.form.root();
            var panels = htmlForm.getElementsByClassName('panel');
            var tabs = new node_8.default('ul', { class: "nav nav-tabs" });
            for (var key = 0; key < panels.length; key++) {
                var panelLabel = panels.item(key).id;
                var javascript = "javascript:var panelName='" + panelLabel + "'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })";
                tabs
                    .appendElement(new node_8.default('li', { class: 'nav-item' }))
                    .appendElement(new node_8.default('a', { class: 'nav-link ', href: javascript }, panelLabel));
                if (key === 0) {
                    tabs.addClass('active');
                }
            }
            htmlForm.insertBefore(tabs.root(), htmlForm.firstChild);
        };
        return BootstrapBuilder;
    }(InputBuilderAbstract_1.default));
    exports.default = BootstrapBuilder;
});
define("src/Input/builder/GeneralBuilder", ["require", "exports", "node_modules/mudde-node/src/node", "src/Form/InputBuilderAbstract", "src/Helper/IconHelper"], function (require, exports, node_9, InputBuilderAbstract_2, IconHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    node_9 = __importDefault(node_9);
    InputBuilderAbstract_2 = __importDefault(InputBuilderAbstract_2);
    IconHelper_1 = __importDefault(IconHelper_1);
    var GeneralBuilder = (function (_super) {
        __extends(GeneralBuilder, _super);
        function GeneralBuilder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GeneralBuilder.prototype.setPanels = function (input) {
            var form = input.form.form;
            var panelId = "panel-" + input.panel;
            if (form.hasElementByClass(panelId)) {
                form.getElementById(panelId);
            }
            else {
                form.gotoRoot();
                if (panelId !== null) {
                    var firstPanel = form.getElementByClass('panel').length === 0;
                    var panelNode = new node_9.default('div', { id: panelId, class: "panel " + panelId });
                    if (!firstPanel) {
                        panelNode.setAttributes({ hidden: '' });
                    }
                    form.appendElement(panelNode);
                }
            }
        };
        GeneralBuilder.prototype.coreBuild = function (output, input) {
            this.setPanels(input);
            var attributes = {
                id: input.id,
                name: input.id,
                'data-language': input.form.languages[0],
                autofocus: input.autofocus,
            };
            if (input.hidden) {
                attributes = __assign(__assign({}, attributes), { hidden: '' });
            }
            output.setAttributes(attributes);
            return output;
        };
        GeneralBuilder.prototype.coreMultilingualBuild = function (output, input, language) {
            this.setPanels(input);
            var attributes = {
                id: input.id + "_" + language,
                name: input.id + "[" + language + "]",
                'data-language': language,
                autofocus: input.autofocus && input.form.languages[0] === language ? true : false,
                onchange: "javascript:"
            };
            if (input.hidden) {
                attributes = __assign(__assign({}, attributes), { hidden: '' });
            }
            output.setAttributes(attributes);
            return output;
        };
        GeneralBuilder.prototype.finalBuild = function (elements, input, output) {
            var label = new node_9.default('label', { for: elements[0].id });
            label.innerHTML = input.label + (input.require ? IconHelper_1.default.starFill('9px') : '');
            output.appendElement_(label);
            elements.forEach(function (element) {
                output.appendElement_(element.root());
            });
            if (input.help !== '') {
                output.appendElement_(new node_9.default('span', { id: input.id + 'Help', class: input.id }, input.help));
            }
        };
        GeneralBuilder.prototype.postBuild = function (form) {
        };
        return GeneralBuilder;
    }(InputBuilderAbstract_2.default));
    exports.default = GeneralBuilder;
});
define("src/Validation/Length", ["require", "exports", "src/Form/ValidationAbstract"], function (require, exports, ValidationAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ValidationAbstract_1 = __importDefault(ValidationAbstract_1);
    var Length = (function (_super) {
        __extends(Length, _super);
        function Length(config) {
            var _this = _super.call(this) || this;
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
        Length.prototype.coreBuild = function (output, input) {
            var attributes = {};
            if (this.min > 0) {
                attributes = __assign(__assign({}, attributes), { min: this.min });
            }
            if (this.max > 0) {
                attributes = __assign(__assign({}, attributes), { max: this.max });
            }
            output
                .getElementById(input.id)
                .setAttributes(attributes);
            return output;
        };
        Length.prototype.coreMultilingualBuild = function (output, input, language) {
            return this.coreBuild(output, input);
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
    }(ValidationAbstract_1.default));
    exports.default = Length;
});
define("src/Validation/NotEmpty", ["require", "exports", "src/Form/ValidationAbstract"], function (require, exports, ValidationAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ValidationAbstract_2 = __importDefault(ValidationAbstract_2);
    var NotEmpty = (function (_super) {
        __extends(NotEmpty, _super);
        function NotEmpty(config) {
            var _this = _super.call(this) || this;
            _this.configuring(config);
            return _this;
        }
        NotEmpty.prototype.coreBuild = function (output, input) {
            if (!input.require)
                return output;
            var attributes = {
                required: ''
            };
            output
                .getElementById(input.id)
                .setAttributes(attributes);
            return output;
        };
        NotEmpty.prototype.coreMultilingualBuild = function (output, input, language) {
            if (!input.require)
                return output;
            var attributes = {
                required: ''
            };
            output
                .getElementById(input.id + "[" + language + "]")
                .setAttributes(attributes);
            return output;
        };
        NotEmpty.prototype.getDefaultConfig = function () {
            return {};
        };
        return NotEmpty;
    }(ValidationAbstract_2.default));
    exports.default = NotEmpty;
});
//# sourceMappingURL=formjs.js.map