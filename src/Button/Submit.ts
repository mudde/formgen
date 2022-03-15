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

   click(event: Event) {
      event.preventDefault()

      let form:Form = jQuery(this.form).data('creator')

      if (!form.validate()) {
         form.showValidationErrors()

         return
      }

      form
         .post()
         .then(data => {
            alert('saved!')
         })
         .catch(error => {
            console.debug(error)
            alert('error')
         })
   }


   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let formId = this.form.id
      //  todo  Onclick to just a submit button onclick="Form.save()"  Gr.O.M.
      let attributes: any = {
         type: 'button',
         name: `submit-${formId}`,
         class: 'btn btn-primary',
         value: this.label
      }

      let element: NodeCore = new NodeCore('input', attributes)

      element.root.addEventListener('click', this.click)

      return element
   }

}