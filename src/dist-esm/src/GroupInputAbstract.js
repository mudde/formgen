System.register(["../node_modules/mudde-core/src/Mudde/Core/NodeCore", "../node_modules/mudde-core/src/Mudde/Helper/StringHelper", "./Data/Array", "./InputAbstract"], function (exports_1, context_1) {
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
    var NodeCore_1, StringHelper_1, Array_1, InputAbstract_1, GroupInputAbstract;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NodeCore_1_1) {
                NodeCore_1 = NodeCore_1_1;
            },
            function (StringHelper_1_1) {
                StringHelper_1 = StringHelper_1_1;
            },
            function (Array_1_1) {
                Array_1 = Array_1_1;
            },
            function (InputAbstract_1_1) {
                InputAbstract_1 = InputAbstract_1_1;
            }
        ],
        execute: function () {
            GroupInputAbstract = /** @class */ (function (_super) {
                __extends(GroupInputAbstract, _super);
                function GroupInputAbstract() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this._data = new Array_1.default({ data: [] });
                    _this._currentData = {};
                    return _this;
                }
                GroupInputAbstract.prototype.getDefaultConfig = function () {
                    return __assign(__assign({}, _super.prototype.getDefaultConfig.call(this)), { data: new Array_1.default({ data: [] }) });
                };
                GroupInputAbstract.prototype.configureData = function (config) {
                    var main = this;
                    var type = StringHelper_1.default.ucfirst(config['_type']);
                    // requirejs(['Mudde/Form/Data/' + type], (className) => {
                    //    let object: DataAbstract = new className.default(config, main)
                    //    main._data = object
                    // });
                };
                GroupInputAbstract.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var mainId = this.id;
                    var isMultilingual = this.isMultilingual;
                    var languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
                    var output = new NodeCore_1.default('div', {});
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
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GroupInputAbstract.prototype, "currentData", {
                    get: function () {
                        return this._currentData;
                    },
                    set: function (value) {
                        this._currentData = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return GroupInputAbstract;
            }(InputAbstract_1.default));
            exports_1("default", GroupInputAbstract);
        }
    };
});
//# sourceMappingURL=GroupInputAbstract.js.map