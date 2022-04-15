import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { DataAbstract } from "../DataAbstract"
import { Form } from "../Form"
import { GroupInputAbstract } from "../GroupInputAbstract"

export class RadioOrElse extends GroupInputAbstract {

   constructor(config: any, form: Form, data: DataAbstract) {
      super(form, data)
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

      this.addValue(currentData.id, currentData.value)

      return element
   }

   setValue(value: any): void {
      this.coreHTMLElements.forEach(element => {
         let root: any = element.root                //  todo  HTMLInputElement  Gr.O.M.
         if (root.value != value) {
            element.root.childNodes.forEach((item: HTMLInputElement) => {
               if (item.value == value) {
                  item.setAttribute('selected', null)
               } else {
                  item.removeAttribute('selected')
               }
            })
         }
      })
   }

   getValue(): any {
      let output = {}
      let coreHTMLElements = this.coreHTMLElements
      let lastRootValue = null

      coreHTMLElements.forEach(element => {
         let root: any = element.root                //  todo  HTMLInputElement  Gr.O.M.
         let value = root.value

         output[root.id] = lastRootValue = value
      })

      return coreHTMLElements.length == 1 ? lastRootValue : output
   }

   addValue(key: string, value: any): void {
      let id = this.id
      let newId = id + '_' + key

      this.appendNode('input', {
         id: newId,
         name: id,
         class: 'form-check-input',
         type: 'radio',
         value: key
      })
      this.appendNode('label', {
         'for': newId,
         'class': 'form-check-label'
      }, value)
   }

}