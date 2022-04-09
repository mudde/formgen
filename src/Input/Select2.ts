import { Event } from "mudde-core/src/Core/ObserverPattern/Event"
import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { Combobox } from "./Combobox"
import { Form } from "../Form"
import { DataAbstract } from "../DataAbstract"

export class Select2 extends Combobox {

   constructor(config: any, form: Form, data: DataAbstract) {
      config['finishedItem'] = event => {
         let id = this.id
         let x = $('#' + id).select2()
      }
      super(config, form, data)
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = super.coreHTMLInput(id, name, language)

      return element
   }
}