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
      let error: NodeCore = new NodeCore('label', { class: 'error', id: input.id + '-error', for: input.id })
      
      label.innerHTML = labelText

      output
         .gotoRoot()
         .prependElement_(label)
         .appendElement_(help)
         .appendElement_(error)
   }
}
