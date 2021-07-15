import NodeCore from "../../../../node_modules/mudde-core/src/Mudde/Core/NodeCore"
import Form from "Mudde/Form/Form"
import InputAbstract from "Mudde/Form/InputAbstract"

export default class Textarea extends InputAbstract {

   private _spellcheck: boolean = false

   constructor(config: any, form: Form) {
      super(form)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
         spellcheck: false
      }
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = new NodeCore('textarea', {
         id: id,
         name: name,
         spellcheck: this.spellcheck
      })

      return element
   }

   set spellcheck(value: boolean) {
      this._spellcheck = value
   }

   get spellcheck(): boolean {
      return this._spellcheck
   }

}