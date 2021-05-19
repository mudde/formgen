///<amd-module name='Mudde/Form/Builder/GeneralBuilder'/>

import BuilderAbstract from "Mudde/Form/BuilderAbstract";

export default class GeneralBuilder extends BuilderAbstract {
   // let form: Node = input.form.form
   // let panelId: string = `panel-${input.panel}`

   // if (form.hasElementByClass(panelId)) {
   //    form.getElementById(panelId)
   // } else {
   //    form.gotoRoot()

   //    if (panelId) {
   //       let firstPanel = form.getElementByClass('panel').length === 0
   //       let panelNode: Node = new Node('div', { id: panelId, class: `panel ${panelId}` })

   //       if (!firstPanel) {
   //          panelNode.setAttributes({ hidden: '' })
   //       }

   //       form.appendElement(panelNode)
   //    }
   // }

   coreBuild(output: Node): void {
      console.debug(output);
   }
}
