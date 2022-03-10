import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { ButtonAbstract } from "../ButtonAbstract"
import { Form } from "../Form"
import { InputAbstract } from "../InputAbstract";

export class SubmitModal extends ButtonAbstract {

   originalForm: Form
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

   click(event) {
      //  todo  Form.save  Gr.O.M.
      let form = this.form
      let htmlForm = document.forms[form.id]
      let data = {}

      Array.from(htmlForm.elements).forEach((element: any) => {
         if (element.name && element.name == "id") return;
         if (element.type && element.type == "button") return;

         data[element.name] = element.type === 'file'
            ? Array.from(element.files).flatMap((file: any) => { return file.name })
            : element.type === 'select-multiple'
               ? Array.from(element.selectedOptions).flatMap((x: any) => { return x.value })
               : data[element.name] = element.value
      })

      let fieldId = this.fieldId
      let mainForm = this.originalForm
      let uri = this.uri

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
            function (data) {
               $('#model_' + fieldId).modal("hide")
               $('form#' + fieldId).trigger('reset')

               let id: string = form.id
               let mainField: InputAbstract = mainForm.fields.filter(field => { return field.id === id })[0]

               if (!mainField) throw new Error('Original field not found!')

               mainField.addValue(data['id'], data['name'])
               mainField.setValue(data['id'])
            },
            function (error) {
               throw new Error(error.statusText)
            }
         )

      return false
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let formId = this.form.id
      let attributes: any = {
         type: 'button',
         class: 'btn btn-default',
         name: `submit-${formId}`,
         value: this.label
      }
      let main = this
      let element: NodeCore = new NodeCore('input', attributes)

      element.click((event) => { return main.click(event) })

      return element
   }

}