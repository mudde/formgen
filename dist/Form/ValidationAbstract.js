"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigurableAbstract_1 = require("Mudde/Core/ConfigurableAbstract");
class ValidationAbstract extends ConfigurableAbstract_1.default {
    constructor(input) {
        super();
        this._input = input;
    }
    setNext(event) {
        this._nextEvent = event;
        return event;
    }
    handle(data) {
        if (this._nextEvent) {
            this._nextEvent.handle(data);
        }
        this.coreBuild(data);
        return data;
    }
    set input(value) {
        this._input = value;
    }
    get input() {
        if (this._input === undefined)
            throw new Error('Input not set!');
        return this._input;
    }
}
exports.default = ValidationAbstract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbkFic3RyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbkFic3RyYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMEVBQW1FO0FBS25FLE1BQThCLGtCQUFtQixTQUFRLDhCQUFvQjtJQXlCM0UsWUFBWSxLQUFvQjtRQUM5QixLQUFLLEVBQUUsQ0FBQTtRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUF0QkQsT0FBTyxDQUFDLEtBQXVCO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1FBRXZCLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFTO1FBQ2QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzdCO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVwQixPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFVRCxJQUFJLEtBQUssQ0FBQyxLQUFvQjtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFakUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3BCLENBQUM7Q0FFRjtBQXhDRCxxQ0F3Q0MifQ==