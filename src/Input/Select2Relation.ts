import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { Combobox } from "./Combobox"

export class Select2Relation extends Combobox {

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = super.coreHTMLInput(id, name, language)
      let modelId = 'model_' + id
      let modelLabelId = 'model_label_' + id
      let modelFormId = 'model_form_' + id

      element
         .gotoRoot()
         .setAttributes({ 'style': 'opacity: 0; max-width:97%;' })

      var x = new NodeCore('div', { style: 'width:100%' })
         .appendNode('button', { type: "button", class: "btn btn-primary", style: "padding: 3px 9px; float:right", "data-bs-toggle": "modal", "data-bs-target": "#" + modelId }, '+')
         .appendNode_('div', { class: "modal fade", id: modelId, tabindex: "-1", "aria-labelledby": modelLabelId, "aria-hidden": "true" })
         .appendNode_('div', { class: "modal-dialog" })
         .appendNode_('div', { class: "modal-content" })
         .appendNode_('div', { class: "modal-header" })
         .appendNode('h5', { id: modelLabelId, class: "modal-title" }, 'Form')
         .appendNode('button', { type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })
         ._()
         .appendNode_('div', { class: "modal-body" })
         .appendNode('div', { id: modelFormId })

      this.extraJs = "$('#" + id + "').select2();$(`"+x.toHTML()+"`).insertAfter('#" + id + "')"

      return element
   }
}