System.register(["../node_modules/mudde-core/src/Core/ConfigurableAbstract", "../node_modules/mudde-core/src/Helper/GuidHelper"], function (exports_1, context_1) {
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
    var ConfigurableAbstract_1, GuidHelper_1, ButtonAbstract;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ConfigurableAbstract_1_1) {
                ConfigurableAbstract_1 = ConfigurableAbstract_1_1;
            },
            function (GuidHelper_1_1) {
                GuidHelper_1 = GuidHelper_1_1;
            }
        ],
        execute: function () {
            ButtonAbstract = /** @class */ (function (_super) {
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
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonAbstract.prototype, "label", {
                    get: function () {
                        return this._label;
                    },
                    set: function (value) {
                        this._label = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ButtonAbstract;
            }(ConfigurableAbstract_1.default));
            exports_1("default", ButtonAbstract);
        }
    };
});
//# sourceMappingURL=ButtonAbstract.js.map