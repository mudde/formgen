import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { ButtonAbstract } from "../ButtonAbstract"
import { Form } from "../Form"

export class Submit extends ButtonAbstract {

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
      let formId = this.form.id
      //  todo  Onclick naar andere functie!  Gr.O.M.
      let attributes: any = {
         type: 'button',
         class: 'btn btn-primary',
         onclick: `javascript:
         var data = {};
         var form = document.forms['${formId}'];
         Array.from(form.elements).forEach(element => {
             if (element.name && element.name !== "id") {
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
         console.debug(data);
         $.ajax({
            url:'./api/taxes',
            type:"POST",
            data: JSON.stringify(data),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: function(data){
               console.debug(data); 
            },
            fail: function (error) {
               console.debug(error); 
            }
          })
         return false`,
         value: this.label
      }

      let element: NodeCore = new NodeCore('input', attributes)

      return element
   }

}