///<amd-module name='Mudde/Form/Input/Builder/BootstrapBuilder'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import Form from "Mudde/Form/Form";
import InputAbstract from "Mudde/Form/InputAbstract";
import InputBuilderAbstract from "Mudde/Form/InputBuilderAbstract";

export default class BootstrapBuilder extends InputBuilderAbstract {

   coreBuild(output: Node, input: InputAbstract): Node {
      var attributes: any = {
         class: 'form-control',
      }

      if (input.help !== '') {
         attributes = {
            ...attributes,
            'aria-describedby': input.id + 'Help'
         }
      }

      output
         .getElementById(input.id)
         .setAttributes(attributes)

      return output
   }

   coreMultilingualBuild(output: Node, input: InputAbstract, language: string): Node {
      output = this.coreBuild(output, input)

      var newNode = new Node('div', { class: 'input-group mb-1' })
         .appendNode_('span', { class: 'input-group-text' })
         .appendNode('i', { class: `${language} flag mr-0` })
         ._()
         .appendElement_(output.root())

      return newNode
   }

   finalBuild(elements: Node[], input: InputAbstract, output: Node): void {
      output.setAttributes({ class: 'mb-1' })
      var label = output.getElementByTagName('label').item(0)
      if(!label) throw new Error('label element not found!')

      label.classList.add('form-label')

      var help = output.getElementByClass(input.id).item(0)
      if(!help) throw new Error('help element not found!')
      if (input.help !== '') {
         help.classList.add('form-text')
      }
   }

   postBuild(form: Form): void {
      var htmlForm: HTMLElement = form.form.root()
      var panels: HTMLCollectionOf<Element> = htmlForm.getElementsByClassName('panel')
      var tabs: Node = new Node('ul', { class: "nav nav-tabs" })

      for (let key = 0; key < panels.length; key++) {
         var panelLabel: string = (<HTMLElement>panels.item(key)).id
         var javascript: string = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`
         tabs
            .appendElement(new Node('li', { class: 'nav-item' }))
            .appendElement(new Node('a', { class: 'nav-link ', href: javascript }, panelLabel))

         if (key === 0) {
            tabs.addClass('active')
         }
      }

      htmlForm.insertBefore(tabs.root(), htmlForm.firstChild)
   }

}
