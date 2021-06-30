"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const IconHelper_1 = require("Mudde/Form/Helper/IconHelper");
const InputBuilderAbstract_1 = require("Mudde/Form/InputBuilderAbstract");
class GeneralBuilder extends InputBuilderAbstract_1.default {
    coreBuild(output) {
        let input = this.input;
        let elements = input.coreIds;
        let labelText = input.label + (input.require ? IconHelper_1.default.starFill('9px') : '');
        let label = new NodeCore_1.default('label', { for: elements[0].id, class: 'myLabel' });
        let help = new NodeCore_1.default('span', { class: 'help', id: 'help_' + input.id });
        label.innerHTML = labelText;
        output
            .gotoRoot()
            .setAttributes({ 'style': 'margin-bottom: 10px;' })
            .prependElement_(label)
            .appendElement_(help);
    }
}
exports.default = GeneralBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhbEJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9CdWlsZGVyL0dlbmVyYWxCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQThDO0FBQzlDLDZEQUFzRDtBQUN0RCwwRUFBbUU7QUFFbkUsTUFBcUIsY0FBZSxTQUFRLDhCQUFvQjtJQUU3RCxTQUFTLENBQUMsTUFBZ0I7UUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUN0QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzVCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDL0UsSUFBSSxLQUFLLEdBQWEsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO1FBQ3RGLElBQUksSUFBSSxHQUFhLElBQUksa0JBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFcEYsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7UUFFM0IsTUFBTTthQUNGLFFBQVEsRUFBRTthQUNWLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxDQUFDO2FBQ2xELGVBQWUsQ0FBQyxLQUFLLENBQUM7YUFDdEIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FDSDtBQWpCRCxpQ0FpQkMifQ==