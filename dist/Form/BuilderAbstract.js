"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseHandler_1 = require("Mudde/Core/BaseHandler");
class BuilderAbstract extends BaseHandler_1.default {
    constructor(input) {
        super();
        this._input = input;
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
exports.default = BuilderAbstract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVpbGRlckFic3RyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL011ZGRlL0Zvcm0vQnVpbGRlckFic3RyYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQWdEO0FBR2hELE1BQThCLGVBQWdCLFNBQVEscUJBQVc7SUFJL0QsWUFBWSxLQUFtQjtRQUM3QixLQUFLLEVBQUUsQ0FBQTtRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFvQjtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFaEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3BCLENBQUM7Q0FHRjtBQXBCRCxrQ0FvQkMifQ==