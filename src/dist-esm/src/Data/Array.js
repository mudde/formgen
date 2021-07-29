System.register(["../DataAbstract"], function (exports_1, context_1) {
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
    var DataAbstract_1, Array;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DataAbstract_1_1) {
                DataAbstract_1 = DataAbstract_1_1;
            }
        ],
        execute: function () {
            Array = /** @class */ (function (_super) {
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
            }(DataAbstract_1.default));
            exports_1("default", Array);
        }
    };
});
//# sourceMappingURL=Array.js.map