import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { Form } from "../Form"
import { GroupInputAbstract } from "../GroupInputAbstract"

export class Radio extends GroupInputAbstract {

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
      let element: NodeCore = new NodeCore('div', { 'class': 'form-check table-cell' })
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
   setValue(value:any): void {
      throw new Error('No value to manipulate!')
   }
   getValue(): any{
      throw new Error('No value to manipulate!')
   }
   addValue(key: string, value: any): void {
      throw new Error('No value to manipulate!')
   }

}