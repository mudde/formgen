import Node from "../../node_modules/mudde-node/src/node"
import Form from "../Form/Form";
import InputAbstract from "../Form/InputAbstract";

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
      var element: Node = new Node('input', {
         id: id,
         name: name,
         type: 'email',
         class: 'form-control',
         'aria-label': this.label,
         'data-language': language
      })

      return element
   }

}