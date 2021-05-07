///<amd-module name='Mudde/Form/Input/Radio'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import Form from "Mudde/Form/Form"
import GroupInputAbstract from "../GroupInputAbstract"

export default class Radio extends GroupInputAbstract {

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
      let element: Node = new Node('div', { 'class': 'form-check', 'no-bootstrap': '', style: 'display: table-cell;' })
      let newId = id + '_' + currentData.id

      element
         .appendNode('input', {
            id: newId,
            name: name,
            type: 'radio',
            value: currentData.id
         })
         .appendNode('label', { 'for': newId }, currentData.value)

      return element
   }

}