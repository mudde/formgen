System.register(["../node_modules/mudde-core/src/Mudde/Core/Event"], function (exports_1, context_1) {
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
    var Event_1, DataEvent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Event_1_1) {
                Event_1 = Event_1_1;
            }
        ],
        execute: function () {
            DataEvent = /** @class */ (function (_super) {
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
                    enumerable: true,
                    configurable: true
                });
                return DataEvent;
            }(Event_1.default));
            exports_1("default", DataEvent);
        }
    };
});
//# sourceMappingURL=DataEvent.js.map