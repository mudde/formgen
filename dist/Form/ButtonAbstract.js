"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigurableAbstract_1 = require("Mudde/Core/ConfigurableAbstract");
const GuidHelper_1 = require("Mudde/Form/Helper/GuidHelper");
class ButtonAbstract extends ConfigurableAbstract_1.default {
    constructor() {
        super(...arguments);
        this.__type = '';
        this._label = '';
    }
    getDefaultConfig() {
        return {
            label: '',
        };
    }
    render() {
        let output = this.coreHTMLInput(GuidHelper_1.default.create().toString(), 'x', 'nl');
        return output;
    }
    set _type(value) {
        this.__type = value;
    }
    get _type() {
        return this.__type;
    }
    set label(value) {
        this._label = value;
    }
    get label() {
        return this._label;
    }
}
exports.default = ButtonAbstract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uQWJzdHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTXVkZGUvRm9ybS9CdXR0b25BYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBFQUFtRTtBQUVuRSw2REFBc0Q7QUFFdEQsTUFBOEIsY0FBZSxTQUFRLDhCQUFvQjtJQUF6RTs7UUFFVyxXQUFNLEdBQVcsRUFBRSxDQUFBO1FBQ25CLFdBQU0sR0FBVyxFQUFFLENBQUE7SUFnQzlCLENBQUM7SUE1QkUsZ0JBQWdCO1FBQ2IsT0FBTztZQUNKLEtBQUssRUFBRSxFQUFFO1NBQ1gsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0gsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUUxRSxPQUFPLE1BQU0sQ0FBQTtJQUNoQixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDckIsQ0FBQztDQUVIO0FBbkNELGlDQW1DQyJ9