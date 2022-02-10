import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { Combobox } from "./Combobox"

export class Select2Relation extends Combobox {

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = super.coreHTMLInput(id, name, language)
      element.setAttributes({ 'style': 'width: 97%;' });
      let modelId = 'model_' + id
      let modelLabelId = 'model_label_' + id
      let modelFormId = 'model_form_' + id
      let uri = './api/taxes'
      let formId = this.form.id

      var x = new NodeCore('div', { class: 'width-100' })
         //  todo  move out of the form (postFormHtml)
         .appendNode_('div', { class: "modal fade", id: modelId, tabindex: "-1", "aria-labelledby": modelLabelId, "aria-hidden": "true" })
         .appendNode_('div', { class: "modal-dialog" })
         .appendNode_('div', { class: "modal-content"})
         .appendNode_('div', { class: "modal-header" })
         .appendNode('h5', { id: modelLabelId, class: "modal-title" }, 'Form')
         .appendNode('button', { type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })
         ._()
         .appendNode_('div', { class: "modal-body" })
         .appendNode('div', { id: modelFormId })

      var y = new NodeCore('button', { type: "button", class: "btn btn-primary btn-self", "data-bs-toggle": "modal", "data-bs-target": "#" + modelId }, '+')
      
      this.extraJs = `$(document).ready(()=>{
         $('#${id}').select2();\
         $('${y.toHTML()}').insertAfter('#${id}');\
         $('${x.toHTML()}').insertAfter('#${formId}');\
         
         $.ajax({ url: '${uri}' }).then((config) => {\
            let form = new MuddeFormgen.Form(config);\
            document.getElementById('${modelFormId}').innerHTML = form.render().root.outerHTML;\
         });
      })`;

      return element
   }
}