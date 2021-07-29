System.register(["../node_modules/mudde-core/src/Mudde/Core/ConfigurableAbstract", "../node_modules/mudde-core/src/Mudde/Core/NodeCore", "../node_modules/mudde-core/src/Mudde/Helper/GuidHelper", "../node_modules/mudde-core/src/Mudde/Helper/StringHelper"], function (exports_1, context_1) {
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
    var ConfigurableAbstract_1, NodeCore_1, GuidHelper_1, StringHelper_1, Form;
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
            },
            function (StringHelper_1_1) {
                StringHelper_1 = StringHelper_1_1;
            }
        ],
        execute: function () {
            Form = /** @class */ (function (_super) {
                __extends(Form, _super);
                function Form(config) {
                    var _this = _super.call(this) || this;
                    _this._id = '';
                    _this._languages = [];
                    _this._fields = [];
                    _this._buttons = [];
                    _this._count = 0;
                    _this._loaded = false;
                    _this.configuring(config);
                    _this.form = new NodeCore_1.default('form', { method: 'POST', action: '.', id: _this.id });
                    Form._forms.push(_this);
                    return _this;
                }
                Form.prototype.getDefaultConfig = function () {
                    return {
                        id: GuidHelper_1.default.raw(),
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
                        // requirejs(['Mudde/Form/Input/' + type], (className) => {
                        //    let object = new className.default(config, main)
                        //    fields.push(object)
                        //    main.count--
                        // });
                    });
                };
                Form.prototype.configureButtons = function (rawFields) {
                    var main = this;
                    var buttons = this.buttons = [];
                    rawFields.forEach(function (config) {
                        var type = config['_type'];
                        main.count++;
                        // requirejs(['Mudde/Form/Buttom/' + type], (className) => {
                        //    let object = new className.default(config, main)
                        //    buttons.push(object)
                        //    main.count--
                        // });
                    });
                };
                Form.prototype.configureBuilders = function (rawFields) {
                    var main = this;
                    rawFields.unshift('GeneralBuilder');
                    rawFields.forEach(function (builder) {
                        // requirejs(['Mudde/Form/Builder/' + builder], (className) => {
                        //    let handler = new className.default(this)
                        //    if (!main._handler) {
                        //       main._handler = main._handlerCurrent = handler
                        //    } else {
                        //       main._handlerCurrent = main._handlerCurrent?.setNext(handler)
                        //    }
                        // });
                    });
                };
                Form.prototype.configureData = function (config) {
                    var main = this;
                    var type = StringHelper_1.default.ucfirst(config['_type']);
                    main.count++;
                    // requirejs(['Mudde/Form/Data/' + type], (className) => {
                    //    let object: DataAbstract = new className.default(config, main)
                    //    main._data = object
                    //    main.count--
                    // });
                };
                Form.getFormById = function (id) {
                    var filterFunction = function (form) { return form.id === id; };
                    var form = Form._forms.filter(filterFunction);
                    return form.length === 0 ? null : form[0];
                };
                Form.prototype.render = function () {
                    var _a;
                    var form = this._form;
                    if (form === undefined)
                        throw new Error('Form not set!');
                    form.clear();
                    this.fields.forEach(function (field) {
                        var renderedElement = field.render();
                        var panelId = 'panel_' + field.panel;
                        if (!(form === null || form === void 0 ? void 0 : form.hasElementById(panelId))) {
                            form === null || form === void 0 ? void 0 : form.gotoRoot().appendNode_('div', { id: panelId, class: 'panel' });
                        }
                        form === null || form === void 0 ? void 0 : form.getElementById(panelId).appendElement_(renderedElement);
                    });
                    (_a = this._handler) === null || _a === void 0 ? void 0 : _a.handle(form);
                    form.gotoRoot();
                    this.buttons.forEach(function (element) {
                        form === null || form === void 0 ? void 0 : form.appendElement_(element.render());
                    });
                    return form;
                };
                Object.defineProperty(Form.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    set: function (value) {
                        this._id = value;
                    },
                    enumerable: true,
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
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Form.prototype, "loaded", {
                    get: function () {
                        return this._loaded;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Form.prototype, "languages", {
                    get: function () {
                        return this._languages;
                    },
                    set: function (value) {
                        this._languages = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Form.prototype, "fields", {
                    get: function () {
                        return this._fields;
                    },
                    set: function (value) {
                        this._fields = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Form.prototype, "buttons", {
                    get: function () {
                        return this._buttons;
                    },
                    set: function (value) {
                        this._buttons = value;
                    },
                    enumerable: true,
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
                    enumerable: true,
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
                    enumerable: true,
                    configurable: true
                });
                Form._forms = [];
                return Form;
            }(ConfigurableAbstract_1.default));
            exports_1("default", Form);
        }
    };
});
//# sourceMappingURL=Form.js.map