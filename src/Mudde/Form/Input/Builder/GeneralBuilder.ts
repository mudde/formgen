///<amd-module name='Mudde/Form/Input/Builder/GeneralBuilder'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import Form from "Mudde/Form/Form";
import InputAbstract from "Mudde/Form/InputAbstract";
import InputBuilderAbstract from "Mudde/Form/InputBuilderAbstract";
import IconHelper from "Mudde/Form/Helper/IconHelper";

export default class GeneralBuilder extends InputBuilderAbstract {

   setPanels(input: InputAbstract) {
      var form: Node = input.form.form
      var panelId: string = `panel-${input.panel}`

      if (form.hasElementByClass(panelId)) {
         form.getElementById(panelId)
      } else {
         form.gotoRoot()

         if (panelId !== null) {
            var firstPanel = form.getElementByClass('panel').length === 0
            var panelNode: Node = new Node('div', { id: panelId, class: `panel ${panelId}` })

            if (!firstPanel) {
               panelNode.setAttributes({ hidden: '' })
            }

            form.appendElement(panelNode)
         }
      }
   }

   coreBuild(output: Node, input: InputAbstract): Node {
      this.setPanels(input)

      var attributes: any = {
         id: input.id,
         name: input.id,
         'data-language': input.form.languages[0],
         autofocus: input.autofocus,
      }

      if (input.hidden) {
         attributes = {
            ...attributes,
            hidden: ''
         }
      }

      output.setAttributes(attributes)

      return output
   }

   coreMultilingualBuild(output: Node, input: InputAbstract, language: string): Node {
      this.setPanels(input)

      var attributes: any = {
         id: `${input.id}_${language}`,
         name: `${input.id}[${language}]`,
         'data-language': language,
         autofocus: input.autofocus && input.form.languages[0] === language ? true : false,
         onchange: `javascript:`
      }

      if (input.hidden) {
         attributes = {
            ...attributes,
            hidden: ''
         }
      }

      output.setAttributes(attributes)

      return output
   }

   finalBuild(elements: Node[], input: InputAbstract, output: Node): void {
      var label: Node = new Node('label', { for: elements[0].id })

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
