import Node from "../../Core/Node";
import BuilderAbstract from "../BuilderAbstract";
import Form from "../Form";

export default class TabsBuilder extends BuilderAbstract {

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
