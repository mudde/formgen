System.register(["../node_modules/mudde-core/src/Mudde/Core/ConfigurableAbstract", "./DataEvent"], function (exports_1, context_1) {
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
    var ConfigurableAbstract_1, DataEvent_1, DataAbstract;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ConfigurableAbstract_1_1) {
                ConfigurableAbstract_1 = ConfigurableAbstract_1_1;
            },
            function (DataEvent_1_1) {
                DataEvent_1 = DataEvent_1_1;
            }
        ],
        execute: function () {
            DataAbstract = /** @class */ (function (_super) {
                __extends(DataAbstract, _super);
                function DataAbstract(form) {
                    var _this = _super.call(this) || this;
                    _this._observers = {};
                    _this._data = [];
                    _this._originalData = [];
                    if (form) {
                        _this._form = form;
                    }
                    return _this;
                }
                DataAbstract.prototype.getDefaultConfig = function () {
                    return {
                        data: [],
                        originalData: []
                    };
                };
                DataAbstract.prototype.get = function (id) {
                    var event = new DataEvent_1.default(this, DataAbstract.DATA_PRE_GET, id);
                    this.notify(event);
                    var value = this._data[id];
                    var event = new DataEvent_1.default(this, DataAbstract.DATA_POST_GET, id);
                    this.notify(event);
                    return value;
                };
                DataAbstract.prototype.set = function (id, value) {
                    var event = new DataEvent_1.default(this, DataAbstract.DATA_PRE_SET, id);
                    this.notify(event);
                    this._data[id] = value;
                    var event = new DataEvent_1.default(this, DataAbstract.DATA_POST_SET, id);
                    this.notify(event);
                };
                DataAbstract.prototype.restore = function (id) {
                    this._data[id] = this._originalData[id];
                };
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
                DataAbstract.prototype.forEach = function (callable) {
                    this._data.forEach(callable);
                    return this;
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
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DataAbstract.prototype, "data", {
                    get: function () {
                        if (this._data === undefined)
                            throw new Error('Data not set!');
                        return this._data;
                    },
                    set: function (value) {
                        this._data = this._originalData = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                DataAbstract.DATA_PRE_SET = 1;
                DataAbstract.DATA_POST_SET = 2;
                DataAbstract.DATA_PRE_GET = 4;
                DataAbstract.DATA_POST_GET = 8;
                return DataAbstract;
            }(ConfigurableAbstract_1.default));
            exports_1("default", DataAbstract);
        }
    };
});
//# sourceMappingURL=DataAbstract.js.map