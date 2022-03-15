import { Event } from "mudde-core/src/Core/ObserverPattern/Event"
import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { Combobox } from "./Combobox"

export class Select2 extends Combobox {

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = super.coreHTMLInput(id, name, language)

      return element
   }

   update(event: Event) {
      let source: Select2 = event.source
      let id = source.id
      this.extraJs = () => {
         $('#'+ id).select2();
      }
   }
}