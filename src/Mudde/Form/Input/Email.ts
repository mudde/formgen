import NodeCore from "../../../../node_modules/mudde-core/src/Mudde/Core/NodeCore"
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