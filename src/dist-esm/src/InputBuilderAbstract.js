System.register(["./BuilderAbstract"], function (exports_1, context_1) {
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
    var BuilderAbstract_1, InputBuilderAbstract;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (BuilderAbstract_1_1) {
                BuilderAbstract_1 = BuilderAbstract_1_1;
            }
        ],
        execute: function () {
            InputBuilderAbstract = /** @class */ (function (_super) {
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
            }(BuilderAbstract_1.default));
            exports_1("default", InputBuilderAbstract);
        }
    };
});
//# sourceMappingURL=InputBuilderAbstract.js.map