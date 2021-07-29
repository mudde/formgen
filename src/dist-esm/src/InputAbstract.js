System.register(["../node_modules/mudde-core/src/Core/ConfigurableAbstract", "../node_modules/mudde-core/src/Core/NodeCore", "../node_modules/mudde-core/src/Helper/GuidHelper"], function (exports_1, context_1) {
    "use strict";
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
    var ConfigurableAbstract_1, NodeCore_1, GuidHelper_1, InputAbstract;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ConfigurableAbstract_1_1) {
                ConfigurableAbstract_1 = ConfigurableAbstract_1_1;
            },
            function (NodeCore_1_1) {
                NodeCore_1 = NodeCore_1_1;
            },
            function (GuidHelper_1_1) {
                GuidHelper_1 = GuidHelper_1_1;
            }
        ],
        execute: function () {
            InputAbstract = /** @class */ (function (_super) {
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
                        id: GuidHelper_1.default.raw(),
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
                    var main = this;
                    rawFields.unshift('GeneralBuilder');
                    rawFields.forEach(function (builder) {
                        // requirejs(['Mudde/Form/Input/Builder/' + builder], (className) => {
                        //    let handler = new className.default(this)
                        //    if (!main._handler) {
                        //       main._handler = main._handlerCurrent = handler
                        //    } else {
                        //       main._handlerCurrent?.setNext(handler)
                        //       main._handlerCurrent = handler
                        //    }
                        // });
                    });
                };
                InputAbstract.prototype.configureValidations = function (rawFields) {
                    var main = this;
                    rawFields.forEach(function (config) {
                        var type = config['_type'];
                        // requirejs(['Mudde/Form/Validation/' + type], (className) => {
                        //    let handler = new className.default(main, config)
                        //    if (!main._handler) {
                        //       main._handler = main._handlerCurrent = handler
                        //    } else {
                        //       main._handlerCurrent?.setNext(handler)
                        //       main._handlerCurrent = handler
                        //    }
                        // });
                    });
                };
                InputAbstract.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var mainId = this.id;
                    var isMultilingual = this.isMultilingual;
                    var languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
                    var output = new NodeCore_1.default('div', {});
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
                    (_a = this.handler) === null || _a === void 0 ? void 0 : _a.handle(output);
                    return output;
                };
                Object.defineProperty(InputAbstract.prototype, "isMultilingual", {
                    get: function () {
                        var isMultilingualRequested = this.form.languages.length > 1 && this.multilingual;
                        return this.canBeMultilingual() && isMultilingualRequested;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    set: function (value) {
                        this._id = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "input", {
                    get: function () {
                        return this._input;
                    },
                    set: function (value) {
                        this._input = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "_type", {
                    get: function () {
                        return this.__type;
                    },
                    set: function (value) {
                        this.__type = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "label", {
                    get: function () {
                        return this._label;
                    },
                    set: function (value) {
                        this._label = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "help", {
                    get: function () {
                        return this._help;
                    },
                    set: function (value) {
                        this._help = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "unique", {
                    get: function () {
                        return this._unique;
                    },
                    set: function (value) {
                        this._unique = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "handler", {
                    get: function () {
                        if (this._handler === undefined)
                            throw new Error('Handler not set!');
                        return this._handler;
                    },
                    set: function (value) {
                        this._handler = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "autofocus", {
                    get: function () {
                        return this._autofocus;
                    },
                    set: function (value) {
                        this._autofocus = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "hidden", {
                    get: function () {
                        return this._hidden;
                    },
                    set: function (value) {
                        this._hidden = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "require", {
                    get: function () {
                        return this._require;
                    },
                    set: function (value) {
                        this._require = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "multilingual", {
                    get: function () {
                        return this._multilingual;
                    },
                    set: function (value) {
                        this._multilingual = value;
                    },
                    enumerable: true,
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
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "placeholder", {
                    get: function () {
                        return this._placeholder;
                    },
                    set: function (value) {
                        this._placeholder = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "panel", {
                    get: function () {
                        return this._panel;
                    },
                    set: function (value) {
                        this._panel = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputAbstract.prototype, "coreIds", {
                    get: function () {
                        return this._coreIds;
                    },
                    set: function (value) {
                        this._coreIds = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return InputAbstract;
            }(ConfigurableAbstract_1.default));
            exports_1("default", InputAbstract);
        }
    };
});
//# sourceMappingURL=InputAbstract.js.map