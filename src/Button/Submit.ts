import NodeCore from "../../node_modules/mudde-core/src/Mudde/Core/NodeCore"
import {ButtonAbstract} from "../ButtonAbstract"

export class Submit extends ButtonAbstract {

   constructor(config: any) {
      super()
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
      }
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      //  todo  Onclick naar andere functie!  Gr.O.M.
      let attributes: any = {
         type: 'button',
         class: 'btn btn-primary',
         onclick: `javascript:
         var data = {};
         Array.from(document.forms[0].elements).forEach(element => {
             if (element.name) {
                console.debug(element.type)
                 if (element.type === 'file') {
                     data[element.name] = Array.from(element.files).flatMap(x => { return x.name });
                 } else if(element.type === 'select-multiple') {
                     data[element.name] = Array.from(element.selectedOptions).flatMap(x=>{ return x.value  })
                 } else {
                     data[element.name] = element.value
                 }
             }
         });
         alert(JSON.stringify({valid: document.forms[0].checkValidity(),...data}, null, 4));
         return false`,
         value: this.label
      }

      let element: NodeCore = new NodeCore('input', attributes)

      return element
   }

}