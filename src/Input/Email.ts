import { NodeCore } from "mudde-core/src/Core/NodeCore"
import {Form} from "../Form";
import {InputAbstract} from "../InputAbstract";

export class Email extends InputAbstract {

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
      let element: NodeCore = new NodeCore('input', {
         id: id,
         name: name,
         type: 'email',
         'aria-label': this.label,
         'data-language': language
      })

      return element
   }

}