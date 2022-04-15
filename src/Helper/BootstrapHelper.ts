import { NodeCore } from "mudde-core/src/Core/NodeCore"

export class BootstrapHelper {

   static modal(id: string): NodeCore {
      let modelId = BootstrapHelper.getModelId(id)
      let modelLabelId = 'model_label_' + id
      let modelBodyId = 'model_body_' + id

      return new NodeCore('div', { class: 'width-100' })
         .appendNode_('div', { class: "modal fade", id: modelId, tabindex: "-1", "aria-labelledby": modelLabelId, "aria-hidden": "true" })
         .appendNode_('div', { class: "modal-dialog" })
         .appendNode_('div', { class: "modal-content" })
         .appendNode_('div', { class: "modal-header" })
         .appendNode('h5', { id: modelLabelId, class: "modal-title" }, 'Form')
         .appendNode('button', { type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })
         ._()
         .appendNode_('div', { class: "modal-body", id: modelBodyId })
   }

   static getModelId(id: string): string {
      return 'model_' + id
   }

}