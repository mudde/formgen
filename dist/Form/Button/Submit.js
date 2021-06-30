"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const ButtonAbstract_1 = require("Mudde/Form/ButtonAbstract");
class Submit extends ButtonAbstract_1.default {
    constructor(config) {
        super();
        this.configuring(config);
    }
    getDefaultConfig() {
        return Object.assign({}, super.getDefaultConfig());
    }
    coreHTMLInput(id, name, language) {
        let attributes = {
            type: 'button',
            class: 'btn btn-primary',
            onclick: `javascript:
         var data = {};
         Array.from(document.forms[0].elements).forEach(element => {
             if (element.name) {
                console.debug(element.type)
                 if (element.type === 'file') {
                     data[element.name] = Array.from(element.files).flatMap(x => { return x.name });
                 } else if(element.type === 'select-multiple') {
                     data[element.name] = Array.from(element.selectedOptions).flatMap(x=>{ return x.value  })
                 } else {
                     data[element.name] = element.value
                 }
             }
         });
         alert(JSON.stringify({valid: document.forms[0].checkValidity(),...data}, null, 4));
         return false`,
            value: this.label
        };
        let element = new NodeCore_1.default('input', attributes);
        return element;
    }
}
exports.default = Submit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VibWl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL011ZGRlL0Zvcm0vQnV0dG9uL1N1Ym1pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUE4QztBQUM5Qyw4REFBc0Q7QUFFdEQsTUFBcUIsTUFBTyxTQUFRLHdCQUFjO0lBRS9DLFlBQVksTUFBVztRQUNwQixLQUFLLEVBQUUsQ0FBQTtRQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNiLHlCQUNNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUM3QjtJQUNKLENBQUM7SUFFRCxhQUFhLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUVyRCxJQUFJLFVBQVUsR0FBUTtZQUNuQixJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsT0FBTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7c0JBZUk7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbkIsQ0FBQTtRQUVELElBQUksT0FBTyxHQUFhLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFFekQsT0FBTyxPQUFPLENBQUE7SUFDakIsQ0FBQztDQUVIO0FBMUNELHlCQTBDQyJ9