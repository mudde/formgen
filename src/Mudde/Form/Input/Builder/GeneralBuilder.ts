///<amd-module name='Mudde/Form/Input/Builder/GeneralBuilder'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import Form from "Mudde/Form/Form";
import InputAbstract from "Mudde/Form/InputAbstract";
import InputBuilderAbstract from "Mudde/Form/InputBuilderAbstract";
import IconHelper from "Mudde/Form/Helper/IconHelper";

export default class GeneralBuilder extends InputBuilderAbstract {

   setPanels(input: InputAbstract) {
      let form: Node = input.form.form
      let panelId: string = `panel-${input.panel}`

      if (form.hasElementByClass(panelId)) {
         form.getElementById(panelId)
      } else {
         form.gotoRoot()

         if (panelId) {
            let firstPanel = form.getElementByClass('panel').length === 0
            let panelNode: Node = new Node('div', { id: panelId, class: `panel ${panelId}` })

            if (!firstPanel) {
               panelNode.setAttributes({ hidden: '' })
            }

            form.appendElement(panelNode)
         }
      }
   }

   coreBuild(output: Node, id: string, name: string, language: string): Node {
      let input = this.input
      this.setPanels(input)

      let attributes: any = {
         id: id,
         name: name,
         'data-language': language,
         autofocus: input.autofocus,
         ...input.hidden ? { hidden: '' } : {}
      }

      output.setAttributes(attributes)

      return output
   }

   finalOutputBuild(elements: Node[], input: InputAbstract, output: Node): void {
      let label: Node = new Node('label', { for: elements[0].id })

      label.innerHTML = input.label + (input.require ? IconHelper.starFill('9px') : '')

      output.appendElement_(label)

      elements.forEach(element => {
         output.appendElement_(element.root())
      })

      if (input.help !== '') {
         output.appendElement_(new Node('span', { id: input.id + 'Help', class: input.id }, input.help))
      }
   }

   postBuild(form: Form): void {

   }

}
