"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const InputBuilderAbstract_1 = require("Mudde/Form/InputBuilderAbstract");
class BootstrapBuilder extends InputBuilderAbstract_1.default {
    coreBuild(output) {
        output
            .gotoRoot()
            .addClass('mb-1');
        let label = output.getElementByTagName('label').item(0);
        label === null || label === void 0 ? void 0 : label.classList.add('form-label');
        let input = this.input;
        let help = output.getElementByClass('help').item(0);
        if (help) {
            help.classList.add('form-text');
            help.innerHTML = input.help;
        }
        input.coreIds.forEach(item => {
            let classes = '' + item.getAttribute('class');
            if (classes.indexOf('form-check') === -1) {
                item.gotoRoot().addClass('form-control');
            }
        });
        if (input.isMultilingual) {
            input.form.languages.forEach(language => {
                let id = input.id + '_' + language;
                output
                    .getElementById(id)
                    .moveInNode(function (oldNode) {
                    return new NodeCore_1.default('div', { class: 'input-group mb-1' })
                        .appendNode_('span', { class: 'input-group-text' })
                        .appendNode('i', { class: `${language} flag mr-0` })
                        ._()
                        .appendElement_(oldNode);
                });
            });
        }
    }
}
exports.default = BootstrapBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vdHN0cmFwQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0J1aWxkZXIvQm9vdHN0cmFwQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUE4QztBQUM5QywwRUFBbUU7QUFFbkUsTUFBcUIsZ0JBQWlCLFNBQVEsOEJBQW9CO0lBRS9ELFNBQVMsQ0FBQyxNQUFnQjtRQUN2QixNQUFNO2FBQ0YsUUFBUSxFQUFFO2FBQ1YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRXBCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkQsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDO1FBRWxDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDdEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNuRCxJQUFJLElBQUksRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQTtTQUM3QjtRQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQUksT0FBTyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzdDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFFLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQTthQUMxQztRQUNKLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFBO2dCQUVsQyxNQUFNO3FCQUNGLGNBQWMsQ0FBQyxFQUFFLENBQUM7cUJBQ2xCLFVBQVUsQ0FBQyxVQUFVLE9BQWlCO29CQUNwQyxPQUFPLElBQUksa0JBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzt5QkFDckQsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxDQUFDO3lCQUNsRCxVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsUUFBUSxZQUFZLEVBQUUsQ0FBQzt5QkFDbkQsQ0FBQyxFQUFFO3lCQUNILGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDOUIsQ0FBQyxDQUFDLENBQUE7WUFFUixDQUFDLENBQUMsQ0FBQTtTQUNKO0lBQ0osQ0FBQztDQUNIO0FBekNELG1DQXlDQyJ9