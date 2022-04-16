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
      let main = this
      let formId = this.form.id
      let attributes: any = {
         type: 'button',
         name: `submit-${formId}`,
         class: 'btn btn-primary',
         value: this.label
      }
      let element: NodeCore = new NodeCore('input', attributes)

      element.click((event) => { event.preventDefault(); main.click(event) })

      return element
   }

   click(event: Event) {
      let form: Form = this.form
      if (!this.formValidate()) return

      form
         .save()
         .then(data => {
            form.getFieldById(form.id + '_id').setValue(data['id'])
         })
         .catch(error => {
            console.debug(error)
         })
   }




}