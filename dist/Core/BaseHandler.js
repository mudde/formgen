"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseHandler {
    setNext(event) {
        this._nextEvent = event;
        return event;
    }
    handle(data) {
        if (this._nextEvent) {
            this._nextEvent.handle(data);
        }
        return data;
    }
    get nextEvent() {
        return this._nextEvent;
    }
}
exports.default = BaseHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTXVkZGUvQ29yZS9CYXNlSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQThCLFdBQVc7SUFJdkMsT0FBTyxDQUFDLEtBQXVCO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1FBRXZCLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFTO1FBQ2QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzdCO1FBRUQsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN4QixDQUFDO0NBQ0Y7QUFyQkQsOEJBcUJDIn0=