///<amd-module name='Mudde/Form/Buttom/Submit'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import ButtonAbstract from "Mudde/Form/ButtonAbstract"

export default class Submit extends ButtonAbstract {

   constructor(config: any) {
      super()
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
      }
   }

   coreHTMLInput(id: string, name: string, language: string): Node {
      var attributes: any = {
         type: 'submit',
         class: 'btn btn-primary',
         onclick: `javascript:
         b var data = {};
         Array.from(document.forms[0].elements).forEach(element => {
             if (element.name) {
                 if (element.type === 'file') {
                     tmpData = [];
                     Array.from(element.files).forEach(element => {
                         tmpData.push(element.name)
                     });
                     data[element.name] = tmpData
                 } else {
                     data[element.name] = element.value
                 }
             }
         });
         alert(JSON.stringify({valid: document.forms[0].checkValidity(),...data}, null, 4));
         return false`,
         value: this.label
      }

      var element: Node = new Node('input', attributes)

      return element
   }

}