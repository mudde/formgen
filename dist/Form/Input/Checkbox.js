"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const GroupInputAbstract_1 = require("../GroupInputAbstract");
class Checkbox extends GroupInputAbstract_1.default {
    constructor(config, form) {
        super(form);
        this.configuring(config);
    }
    getDefaultConfig() {
        return Object.assign({}, super.getDefaultConfig());
    }
    coreHTMLInput(id, name, language) {
        let currentData = this.currentData;
        let element = new NodeCore_1.default('div', { 'class': 'form-check', style: 'display: table-cell;' });
        let newId = id + '_' + currentData.id;
        element
            .appendNode('input', {
            id: newId,
            name: name,
            class: 'form-check-input',
            type: 'checkbox',
            value: currentData.id
        })
            .appendNode_('label', {
            'for': newId,
            'class': 'form-check-label'
        }, currentData.value);
        return element;
    }
}
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9DaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUE4QztBQUU5Qyw4REFBc0Q7QUFFdEQsTUFBcUIsUUFBUyxTQUFRLDRCQUFrQjtJQUVyRCxZQUFZLE1BQVcsRUFBRSxJQUFVO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNiLHlCQUNNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUM3QjtJQUNKLENBQUM7SUFFRCxhQUFhLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUNyRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFBO1FBQ2xDLElBQUksT0FBTyxHQUFhLElBQUksa0JBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxDQUFDLENBQUE7UUFDckcsSUFBSSxLQUFLLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFBO1FBRXJDLE9BQU87YUFDSCxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ2xCLEVBQUUsRUFBRSxLQUFLO1lBQ1QsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLElBQUksRUFBRSxVQUFVO1lBQ2hCLEtBQUssRUFBRSxXQUFXLENBQUMsRUFBRTtTQUN2QixDQUFDO2FBQ0QsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxrQkFBa0I7U0FDN0IsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFHeEIsT0FBTyxPQUFPLENBQUE7SUFDakIsQ0FBQztDQUVIO0FBbkNELDJCQW1DQyJ9