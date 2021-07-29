System.register(["../node_modules/mudde-core/src/Core/BaseHandler"], function (exports_1, context_1) {
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
    var BaseHandler_1, BuilderAbstract;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (BaseHandler_1_1) {
                BaseHandler_1 = BaseHandler_1_1;
            }
        ],
        execute: function () {
            BuilderAbstract = /** @class */ (function (_super) {
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
                    enumerable: true,
                    configurable: true
                });
                return BuilderAbstract;
            }(BaseHandler_1.default));
            exports_1("default", BuilderAbstract);
        }
    };
});
//# sourceMappingURL=BuilderAbstract.js.map