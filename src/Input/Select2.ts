import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { Combobox } from "./Combobox"

export class Select2 extends Combobox {

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = super.coreHTMLInput(id, name, language)

      element.gotoRoot().setAttributes({'style':'opacity: 0;'})

      this.extraJs = "$('#" + id + "').select2();"

      return element
   }
}