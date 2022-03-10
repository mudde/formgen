import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { InputBuilderAbstract } from "../../InputBuilderAbstract";

export class BootstrapBuilder extends InputBuilderAbstract {

   handler(output: NodeCore): void {
      let input = this.input
      let label = output.getElementByTagName('label').item(0)
      label?.classList.add('form-label')

      let help = output.getElementByClass('help').item(0)
      if (help) {
         help.classList.add('form-text')
         help.innerHTML = input.help
      }

      input.coreHTMLElements.forEach(item => {
         let classes = '' + item.getAttribute('class')
         if (classes.indexOf('form-check') === - 1) {
            item.gotoRoot().addClass('form-control')
         }
      })

      if (input.isMultilingual) {
         input.form.languages.forEach(language => {
            let id = input.id + '_' + language

            output
               .getElementById(id)
               .moveInNode(function (oldNode: NodeCore) {
                  return new NodeCore('div', { class: 'input-group mb-1' })
                     .appendNode_('span', { class: 'input-group-text' })
                     .appendNode('i', { class: `${language} flag mr-0` })
                     ._()
                     .appendElement_(oldNode)
               })

         })
      }
   }
}