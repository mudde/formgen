///<amd-module name='Mudde/Form/Builder/TabsBuilder'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import BuilderAbstract from "Mudde/Form/BuilderAbstract";
import Form from "Mudde/Form/Form";

export default class TabsBuilder extends BuilderAbstract {

   postBuild(form: Form): void {
      let htmlForm: HTMLElement = form.form.root()
      let panels: HTMLCollectionOf<Element> = htmlForm.getElementsByClassName('panel')
      let tabs: Node = new Node('ul', { class: "nav nav-tabs" })

      for (let key = 0; key < panels.length; key++) {
         let panelLabel: string = (<HTMLElement>panels.item(key)).id
         let javascript: string = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`
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
