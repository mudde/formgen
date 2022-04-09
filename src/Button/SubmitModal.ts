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
         originalForm: null,
         uri: '',
         fieldId: '',
         ...super.getDefaultConfig(),
      }
   }

   click(event: Event) {
      event.preventDefault()

      let form:Form = jQuery(document.forms[this.form.id]).data('creator')

      if (!form.validate()) {
         form.showValidationErrors()

         return
      }

      form
         .post()
         .then(data => {
            console.debug(data)
         })
         .catch(error => {
            console.debug(error)
         })
   }

   x(event) {
      //  todo  Form.save  Gr.O.M.
      let form = this.form
      let htmlForm = document.forms[form.id]
      let data = {}

      Array.from(htmlForm.elements).forEach((element: any) => {
         let elementName = element.name.substring(element.name.lastIndexOf('_') + 1)

         if (elementName && elementName == "id") return;
         if (element.type && element.type == "button") return;

         data[elementName] = element.type === 'file'
            ? Array.from(element.files).flatMap((file: any) => { return file.name })
            : element.type === 'select-multiple'
               ? Array.from(element.selectedOptions).flatMap((x: any) => { return x.value })
               : data[elementName] = element.value
      })

      let fieldId = this.fieldId
      let mainForm = this.parentForm
      let uri = this.uri

      console.debug(data)

      //  todo  Form.save()  Gr.O.M.
      jQuery
         .ajax({
            url: uri,
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
         })
         .then(
            function (data2) {
               $('#model_' + fieldId).modal("hide")
               $('form#' + fieldId).trigger('reset')

               let mainField: InputAbstract = mainForm.fields[fieldId]

               if (!mainField) throw new Error('Original field not found!')

               mainField.addValue(data2['id'], data2['name'])
               mainField.setValue(data2['id'])
            },
            function (error) {
               throw new Error(error.statusText)
            }
         )

      return false
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

}