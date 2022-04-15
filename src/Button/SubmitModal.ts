import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { ButtonAbstract } from "../ButtonAbstract"
import { Form } from "../Form"
import { InputAbstract } from "../InputAbstract";

export class SubmitModal extends ButtonAbstract {

   parentForm: Form
   uri: string
   fieldId: string

   constructor(config: any, form: Form) {
      super(form)

      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         parentForm: null,
         uri: '',
         fieldId: '',
         ...super.getDefaultConfig(),
      }
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let main = this
      let form = this.form
      let formId = form.id
      let attributes: any = {
         id: id,
         type: 'button',
         class: 'btn btn-default',
         name: `submit-${formId}`,
         value: this.label
      }
      let element: NodeCore = new NodeCore('input', attributes)

      element.click((event) => { event.preventDefault(); main.click(event) })

      return element
   }

   click(event: Event) {
      let form: Form = this.form
      let formId = form.id

      if (!this.formValidate()) return

      let fieldId = this.fieldId
      let parentForm = this.parentForm

      form
         .post()
         .then(data => {
            $('#model_' + fieldId).modal("hide")
            $('form#' + formId).trigger('reset')

            let id = data.id
            let mainField: InputAbstract = parentForm.getFieldById(fieldId)
            if (!mainField) throw new Error('Original field not found!')

            mainField.addValue(id, data['name'] ?? data['title'] ?? 'No title found! :(')
            mainField.setValue(id)
         })
         .catch(error => {
            console.debug(error)
         })
   }



}