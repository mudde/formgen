///<amd-module name='Mudde/Form/Input/Checkbox'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import Form from "Mudde/Form/Form"
import GroupInputAbstract from "../GroupInputAbstract"

export default class Checkbox extends GroupInputAbstract {

   constructor(config: any, form: Form) {
      super(form)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
      }
   }

   coreHTMLInput(id: string, name: string, language: string): Node {
      let currentData = this.currentData
      let element: Node = new Node('div', { 'class': 'form-check', style: 'display: table-cell;' })
      let newId = id + '_' + currentData.id

      element
         .appendNode('input', {
            id: newId,
            name: name,
            class: 'form-check-input',
            type: 'checkbox',
            value: currentData.id
         })
         .appendNode('label', {
            'for': newId,
            'class': 'form-check-label'
         }, currentData.value)

      return element
   }

}