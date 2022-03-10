import { NodeCore } from "mudde-core/src/Core/NodeCore"
import {Form} from "../Form"
import {InputAbstract} from "../InputAbstract"

export class Textarea extends InputAbstract {

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
   setValue(value:any): void {
      this.coreHTMLElements.forEach(item => {
         item.innerHTML = value
      })
   }
   getValue(): any{
      return this.coreHTMLElements.every(item => {
         return item.innerHTML
      })
   }
   addValue(key: string, value: any): void {
      this.coreHTMLElements.forEach(item => {
         item.root.append(value)
      })
   }

   set spellcheck(value: boolean) {
      this._spellcheck = value
   }

   get spellcheck(): boolean {
      return this._spellcheck
   }

}