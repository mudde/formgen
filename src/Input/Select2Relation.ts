import * as MuddeFormgen from '../index';
import { Event } from "mudde-core/src/Core/ObserverPattern/Event";
import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { Combobox } from "./Combobox"
import { BootstrapHelper } from '../Helper';
import { Form } from '../Form';
import { DataAbstract } from '../DataAbstract';

export class Select2Relation extends Combobox {

   constructor(config: any, form: Form, data: DataAbstract) {
      super(config, form, data)

      let main = this

      this.inputData.attach(DataAbstract.DATA_FINALLY, event => { main.update(event) })
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = super.coreHTMLInput(id, name, language)

      element.setAttributes({ 'style': 'width: 90%;' })

      return element
   }

   update(event: Event) {
      let main = this;
      let id = this.coreHTMLElements[0].id
      let formId = this.form.id
      let source = event.source;
      let uri = source.url + '/form'
      let modal = BootstrapHelper.modal(id);
      let addButton = new NodeCore('button', { type: "button", class: "btn btn-primary btn-self", "data-bs-toggle": "modal", "data-bs-target": "#model_" + id }, '+')

      $("#" + id).select2();
      $(addButton.root).insertBefore('#' + id + '-error')
      $(modal.root).insertAfter('#' + formId)

      jQuery
         .ajax({ url: uri })
         .then(
            (config) => {
               let replaceButton = config.buttons[0]
               replaceButton._type = 'SubmitModal'
               replaceButton.originalForm = main.form
               replaceButton.uri = source.url
               replaceButton.fieldId = id

               let form: Form = new MuddeFormgen.Form(config)

               form.render().then(value => {
                  $(value.root).appendTo('#model_body_' + id)
               })
            },
            (error) => {
               console.debug(error)
            })
   }
}