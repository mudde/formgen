///<amd-module name='Mudde/Form/Input/Builder/GeneralBuilder'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import IconHelper from "Mudde/Form/Helper/IconHelper";
import InputBuilderAbstract from "Mudde/Form/InputBuilderAbstract";

export default class GeneralBuilder extends InputBuilderAbstract {

   coreBuild(output: Node): void {
      let input = this.input
      let elements = input.coreIds
      let labelText = input.label + (input.require ? IconHelper.starFill('9px') : '')
      let label: Node = new Node('label', { for: elements[0].id })
      label.innerHTML = labelText

      output
         .gotoRoot()
         .setAttributes({ 'style': 'border:1px solid red; margin-bottom: 10px;' })
         .prependElement_(label)
   }
}
