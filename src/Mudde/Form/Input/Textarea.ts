///<amd-module name='Mudde/Form/Input/Textarea'/>

import Node from 'mudde-node/src/Mudde/Core/Node'
import Form from 'Mudde/Form/Form'
import InputAbstract from 'Mudde/Form/InputAbstract'

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

   coreHTMLInput(id: string, name: string, language: string): Node {
      let element: Node = new Node('textarea', {
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