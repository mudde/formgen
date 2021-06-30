"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const InputAbstract_1 = require("Mudde/Form/InputAbstract");
class Textarea extends InputAbstract_1.default {
    constructor(config, form) {
        super(form);
        this._spellcheck = false;
        this.configuring(config);
    }
    getDefaultConfig() {
        return Object.assign(Object.assign({}, super.getDefaultConfig()), { spellcheck: false });
    }
    coreHTMLInput(id, name, language) {
        let element = new NodeCore_1.default('textarea', {
            id: id,
            name: name,
            spellcheck: this.spellcheck
        });
        return element;
    }
    set spellcheck(value) {
        this._spellcheck = value;
    }
    get spellcheck() {
        return this._spellcheck;
    }
}
exports.default = Textarea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dGFyZWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9UZXh0YXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUE4QztBQUU5Qyw0REFBb0Q7QUFFcEQsTUFBcUIsUUFBUyxTQUFRLHVCQUFhO0lBSWhELFlBQVksTUFBVyxFQUFFLElBQVU7UUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBSE4sZ0JBQVcsR0FBWSxLQUFLLENBQUE7UUFJakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2IsdUNBQ00sS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQzNCLFVBQVUsRUFBRSxLQUFLLElBQ25CO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCO1FBQ3JELElBQUksT0FBTyxHQUFhLElBQUksa0JBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDOUMsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM3QixDQUFDLENBQUE7UUFFRixPQUFPLE9BQU8sQ0FBQTtJQUNqQixDQUFDO0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQTtJQUMzQixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQzFCLENBQUM7Q0FFSDtBQWxDRCwyQkFrQ0MifQ==