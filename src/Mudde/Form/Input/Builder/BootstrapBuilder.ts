///<amd-module name='Mudde/Form/Input/Builder/BootstrapBuilder'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import InputBuilderAbstract from "Mudde/Form/InputBuilderAbstract";

export default class BootstrapBuilder extends InputBuilderAbstract {

   coreBuild(output: Node): void {
      output
         .gotoRoot()
         .addClass('mb-1')

      let label = output.getElementByTagName('label').item(0)
      label?.classList.add('form-label')

      let help = output.getElementByClass('help').item(0)
      if (help) {
         help.innerHTML = this.input.help
         help.classList.add('form-text')
      }

      this.input.coreIds.forEach(item => {
         let classes = '' + item.getAttribute('class')
         if (classes.indexOf('form-check') === - 1) {
            item.gotoRoot().addClass('form-control')
         }
      })
   }
}