"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const InputAbstract_1 = require("Mudde/Form/InputAbstract");
class Email extends InputAbstract_1.default {
    constructor(config, form) {
        super(form);
        this.configuring(config);
    }
    getDefaultConfig() {
        return Object.assign({}, super.getDefaultConfig());
    }
    coreHTMLInput(id, name, language) {
        let element = new NodeCore_1.default('input', {
            id: id,
            name: name,
            type: 'email',
            'aria-label': this.label,
            'data-language': language
        });
        return element;
    }
}
exports.default = Email;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9FbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUE4QztBQUU5Qyw0REFBcUQ7QUFFckQsTUFBcUIsS0FBTSxTQUFRLHVCQUFhO0lBRTdDLFlBQVksTUFBVyxFQUFFLElBQVU7UUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2IseUJBQ00sS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQzdCO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCO1FBQ3JELElBQUksT0FBTyxHQUFhLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDM0MsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxPQUFPO1lBQ2IsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3hCLGVBQWUsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQTtRQUVGLE9BQU8sT0FBTyxDQUFBO0lBQ2pCLENBQUM7Q0FFSDtBQXpCRCx3QkF5QkMifQ==