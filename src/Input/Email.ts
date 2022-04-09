import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { DataAbstract } from "../DataAbstract";
import {Form} from "../Form";
import {InputAbstract} from "../InputAbstract";

export class Email extends InputAbstract {

   constructor(config: any, form: Form, data: DataAbstract) {
      super(form,data)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
      }
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = new NodeCore('input', {
         id: id,
         name: name,
         type: 'email',
         'aria-label': this.label,
         'data-language': language
      })

      return element
   }
   setValue(value:any): void {
      this.coreHTMLElements.forEach(item => {
         item.setAttributes({value: value})
      })
   }

   getValue(): any{
      return this.coreHTMLElements.map(item => {
         return item.getAttribute('value')
      })
   }

   addValue(key: string, value: any): void {
      this.coreHTMLElements.forEach(item => {
         var newValue = item.getAttribute('value') + value
         
         item.setAttributes({value: newValue })
      })
   }

}