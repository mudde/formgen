import NodeCore from "mudde-node/src/NodeCore"
import IconHelper from "Mudde/Form/Helper/IconHelper";
import InputBuilderAbstract from "Mudde/Form/InputBuilderAbstract";

export default class GeneralBuilder extends InputBuilderAbstract {

   coreBuild(output: NodeCore): void {
      let input = this.input
      let elements = input.coreIds
      let labelText = input.label + (input.require ? IconHelper.starFill('9px') : '')
      let label: NodeCore = new NodeCore('label', { for: elements[0].id, class: 'myLabel' })
      let help: NodeCore = new NodeCore('span', { class: 'help', id: 'help_' + input.id })
     
      label.innerHTML = labelText

      output
         .gotoRoot()
         .setAttributes({ 'style': 'margin-bottom: 10px;' })
         .prependElement_(label)
         .appendElement_(help)
   }
}
