import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { Textarea } from "./Textarea"

export class Ckeditor extends Textarea {

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = super.coreHTMLInput(id, name, language)

      this.extraJs = "ClassicEditor.create(" + name + ")";

      return element
   }

}