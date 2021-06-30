"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor(source, event) {
        this._source = source;
        this._eventNumber = event;
    }
    get source() {
        if (this._source === undefined)
            throw new Error('Source not set!');
        return this._source;
    }
    get eventNumber() {
        if (this._eventNumber === undefined)
            throw new Error('Event number not set!');
        return this._eventNumber;
    }
}
exports.default = Event;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTXVkZGUvQ29yZS9FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQXFCLEtBQUs7SUFLdkIsWUFBWSxNQUFVLEVBQUUsS0FBWTtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQTtJQUM1QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1AsSUFBRyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFFakUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDWixJQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUU1RSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDM0IsQ0FBQztDQUVIO0FBdEJELHdCQXNCQyJ9