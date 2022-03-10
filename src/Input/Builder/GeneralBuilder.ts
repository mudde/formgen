import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { IconHelper } from "../../Helper/IconHelper";
import { InputBuilderAbstract } from "../../InputBuilderAbstract";

export class GeneralBuilder extends InputBuilderAbstract {

   handler(output: NodeCore): void {
      let input = this.input
      let panelId = 'panel_' + input.panel
      let elements = input.coreHTMLElements
      let labelText = input.label + (input.require ? IconHelper.starFill('9px') : '')
      let label: NodeCore = new NodeCore('label', { for: elements[0].id, class: 'myLabel' })
      let help: NodeCore = new NodeCore('span', { class: 'help', id: 'help_' + input.id })
      let error: NodeCore = new NodeCore('label', { class: 'error', id: input.id + '-error', for: input.id })

      label.innerHTML = labelText
      input.coreHTMLElements.forEach(item => {
         item.setAttributes({
            panelId: panelId, 
         })
      })

      output
         .gotoRoot()
         .prependElement_(label)
         .appendElement_(help)
         .appendElement_(error)
   }
}
