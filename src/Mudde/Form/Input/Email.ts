///<amd-module name='Mudde/Form/Input/Email'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import Form from "Mudde/Form/Form";
import InputAbstract from "Mudde/Form/InputAbstract";

export default class Email extends InputAbstract {

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
      let element: Node = new Node('input', {
         id: id,
         name: name,
         type: 'email',
         'aria-label': this.label,
         'data-language': language
      })

      return element
   }

}