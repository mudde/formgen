import {NodeCore} from "mudde-core/src/Core/NodeCore"
import {FormBuilderAbstract} from "../FormBuilderAbstract";

export class TabsBuilder extends FormBuilderAbstract {

   coreBuild(output: NodeCore): void {
      let htmlForm: HTMLElement = output.root
      let panels: HTMLCollectionOf<Element> = htmlForm.getElementsByClassName('panel')
      let tabs: NodeCore = new NodeCore('ul', { class: "nav nav-tabs" })

      for (let key = 0; key < panels.length; key++) {
         let x = <HTMLElement>panels.item(key)
         let panelId: string = x.id
         let panelLabel: string = x.getAttribute('data-formgen-name');
         let javascript: string = `javascript:var panelName='${panelId}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`

         tabs
            .appendElement(new NodeCore('li', { class: 'nav-item' }))
            .appendElement(new NodeCore('a', { class: 'nav-link ', href: javascript }, panelLabel))

         if (key === 0) {
            tabs.addClass('active')
         } else {
            panels[key].setAttribute('hidden', '')
         }
      }

      output
         .gotoRoot()
         .prependElement_(tabs)
   }
}
