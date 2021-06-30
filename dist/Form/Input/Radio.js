"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const GroupInputAbstract_1 = require("../GroupInputAbstract");
class Radio extends GroupInputAbstract_1.default {
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
            type: 'radio',
            value: currentData.id
        })
            .appendNode('label', {
            'for': newId,
            'class': 'form-check-label'
        }, currentData.value);
        return element;
    }
}
exports.default = Radio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9SYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUE4QztBQUU5Qyw4REFBc0Q7QUFFdEQsTUFBcUIsS0FBTSxTQUFRLDRCQUFrQjtJQUVsRCxZQUFZLE1BQVcsRUFBRSxJQUFVO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNiLHlCQUNNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUM3QjtJQUNKLENBQUM7SUFFRCxhQUFhLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUNyRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFBO1FBQ2xDLElBQUksT0FBTyxHQUFhLElBQUksa0JBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFHLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxDQUFDLENBQUE7UUFDdEcsSUFBSSxLQUFLLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFBO1FBRXJDLE9BQU87YUFDSCxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ2xCLEVBQUUsRUFBRSxLQUFLO1lBQ1QsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFO1NBQ3ZCLENBQUM7YUFDRCxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ2xCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLGtCQUFrQjtTQUM3QixFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUV4QixPQUFPLE9BQU8sQ0FBQTtJQUNqQixDQUFDO0NBRUg7QUFsQ0Qsd0JBa0NDIn0=