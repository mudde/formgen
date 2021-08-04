import { NodeCore } from "../../../node_modules/mudde-core/src/Core/NodeCore"
import { IconHelper } from "../../Helper/IconHelper";
import { InputBuilderAbstract } from "../../InputBuilderAbstract";

export class GeneralBuilder extends InputBuilderAbstract {

   coreBuild(output: NodeCore): void {
      let input = this.input
      let elements = input.coreIds
      let labelText = input.label + (input.require ? IconHelper.starFill('9px') : '')
      let label: NodeCore = new NodeCore('label', { for: elements[0].id, class: 'myLabel' })
      let help: NodeCore = new NodeCore('span', { class: 'help', id: 'help_' + input.id })
      let extraJs: string = input.extraJs

      label.innerHTML = labelText

      output
         .gotoRoot()
         .setAttributes({ 'style': 'margin-bottom: 10px;' })
         .prependElement_(label)
         .appendElement_(help)
   }
}
