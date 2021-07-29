System.register(["../node_modules/mudde-core/src/Mudde/Core/ConfigurableAbstract"], function (exports_1, context_1) {
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
    var ConfigurableAbstract_1, ValidationAbstract;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ConfigurableAbstract_1_1) {
                ConfigurableAbstract_1 = ConfigurableAbstract_1_1;
            }
        ],
        execute: function () {
            ValidationAbstract = /** @class */ (function (_super) {
                __extends(ValidationAbstract, _super);
                function ValidationAbstract(input) {
                    var _this = _super.call(this) || this;
                    _this._input = input;
                    return _this;
                }
                ValidationAbstract.prototype.setNext = function (event) {
                    this._nextEvent = event;
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
                    enumerable: true,
                    configurable: true
                });
                return ValidationAbstract;
            }(ConfigurableAbstract_1.default));
            exports_1("default", ValidationAbstract);
        }
    };
});
//# sourceMappingURL=ValidationAbstract.js.map