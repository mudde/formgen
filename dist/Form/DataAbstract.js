"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigurableAbstract_1 = require("Mudde/Core/ConfigurableAbstract");
const DataEvent_1 = require("Mudde/Form/DataEvent");
class DataAbstract extends ConfigurableAbstract_1.default {
    constructor(form) {
        super();
        this._observers = {};
        this._data = [];
        this._originalData = [];
        if (form) {
            this._form = form;
        }
    }
    getDefaultConfig() {
        return {
            data: [],
            originalData: []
        };
    }
    get(id) {
        var event = new DataEvent_1.default(this, DataAbstract.DATA_PRE_GET, id);
        this.notify(event);
        let value = this._data[id];
        var event = new DataEvent_1.default(this, DataAbstract.DATA_POST_GET, id);
        this.notify(event);
        return value;
    }
    set(id, value) {
        var event = new DataEvent_1.default(this, DataAbstract.DATA_PRE_SET, id);
        this.notify(event);
        this._data[id] = value;
        var event = new DataEvent_1.default(this, DataAbstract.DATA_POST_SET, id);
        this.notify(event);
    }
    restore(id) {
        this._data[id] = this._originalData[id];
    }
    attach(observer) {
        let observerList = this._observers;
        if (observerList[observer.eventNumber] === undefined) {
            observerList[observer.eventNumber] = [];
        }
        observerList[observer.eventNumber].push(observer);
    }
    detach(observer) {
        let observerList = this._observers[observer.eventNumber];
        if (observerList) {
            observerList.filter(ownObserver => {
                return ownObserver === observer;
            });
        }
    }
    notify(event) {
        let eventNumber = event.eventNumber;
        let observerList = this._observers[eventNumber];
        if (observerList) {
            observerList.forEach(observer => {
                observer.update(event);
            });
        }
    }
    forEach(callable) {
        this._data.forEach(callable);
        return this;
    }
    set form(value) {
        this._form = value;
    }
    get form() {
        if (this._form === undefined)
            throw new Error('Form not set!');
        return this._form;
    }
    set data(value) {
        this._data = this._originalData = value;
    }
    get data() {
        if (this._data === undefined)
            throw new Error('Data not set!');
        return this._data;
    }
}
exports.default = DataAbstract;
DataAbstract.DATA_PRE_SET = 1;
DataAbstract.DATA_POST_SET = 2;
DataAbstract.DATA_PRE_GET = 4;
DataAbstract.DATA_POST_GET = 8;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUFic3RyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL011ZGRlL0Zvcm0vRGF0YUFic3RyYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEVBQW1FO0FBRW5FLG9EQUE2QztBQUs3QyxNQUE4QixZQUFhLFNBQVEsOEJBQW9CO0lBYXBFLFlBQVksSUFBVztRQUNwQixLQUFLLEVBQUUsQ0FBQTtRQUxGLGVBQVUsR0FBUSxFQUFFLENBQUE7UUFDbEIsVUFBSyxHQUFPLEVBQUUsQ0FBQTtRQUNkLGtCQUFhLEdBQU8sRUFBRSxDQUFBO1FBSTdCLElBQUksSUFBSSxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDbkI7SUFDSixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2IsT0FBTztZQUNKLElBQUksRUFBRSxFQUFFO1lBQ1IsWUFBWSxFQUFFLEVBQUU7U0FDbEIsQ0FBQztJQUNMLENBQUM7SUFLRCxHQUFHLENBQUMsRUFBVTtRQUNYLElBQUksS0FBSyxHQUFHLElBQUksbUJBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRWxCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7UUFFMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxtQkFBUyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFbEIsT0FBTyxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVELEdBQUcsQ0FBQyxFQUFVLEVBQUUsS0FBVTtRQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLG1CQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUVsQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUV0QixJQUFJLEtBQUssR0FBRyxJQUFJLG1CQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQsT0FBTyxDQUFDLEVBQVU7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUEyQjtRQUMvQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRW5DLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDbkQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUE7U0FDekM7UUFFRCxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQTJCO1FBQy9CLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpELElBQUksWUFBWSxFQUFFO1lBQ2YsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxXQUFXLEtBQUssUUFBUSxDQUFBO1lBQ2xDLENBQUMsQ0FBQyxDQUFBO1NBQ0o7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVk7UUFDaEIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQTtRQUNuQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRS9DLElBQUksWUFBWSxFQUFFO1lBQ2YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN6QixDQUFDLENBQUMsQ0FBQTtTQUNKO0lBQ0osQ0FBQztJQUVELE9BQU8sQ0FBQyxRQUFhO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRTVCLE9BQU8sSUFBSSxDQUFBO0lBQ2QsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNMLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUU5RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQVM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBO0lBQzFDLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUE7UUFFOUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3BCLENBQUM7O0FBL0dKLCtCQWlIQztBQS9Ha0IseUJBQVksR0FBRyxDQUFDLENBQUM7QUFDakIsMEJBQWEsR0FBRyxDQUFDLENBQUM7QUFFbEIseUJBQVksR0FBRyxDQUFDLENBQUM7QUFDakIsMEJBQWEsR0FBRyxDQUFDLENBQUMifQ==