import NodeCore from "mudde-node/src/NodeCore"
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

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let currentData = this.currentData
      let element: NodeCore = new NodeCore('div', { 'class': 'form-check',  style: 'display: table-cell;' })
      let newId = id + '_' + currentData.id

      element
         .appendNode('input', {
            id: newId,
            name: name,
            class: 'form-check-input',
            type: 'radio',
            value: currentData.id
         })
         .appendNode('label', {
            'for': newId,
            'class': 'form-check-label'
         }, currentData.value)

      return element
   }

}