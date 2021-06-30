"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const FormBuilderAbstract_1 = require("../FormBuilderAbstract");
class TabsBuilder extends FormBuilderAbstract_1.default {
    coreBuild(output) {
        let htmlForm = output.root;
        let panels = htmlForm.getElementsByClassName('panel');
        let tabs = new NodeCore_1.default('ul', { class: "nav nav-tabs" });
        for (let key = 0; key < panels.length; key++) {
            let panelLabel = panels.item(key).id;
            let javascript = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`;
            tabs
                .appendElement(new NodeCore_1.default('li', { class: 'nav-item' }))
                .appendElement(new NodeCore_1.default('a', { class: 'nav-link ', href: javascript }, panelLabel));
            if (key === 0) {
                tabs.addClass('active');
            }
            else {
                panels[key].setAttribute('hidden', '');
            }
        }
        output
            .gotoRoot()
            .prependElement_(tabs);
    }
}
exports.default = TabsBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFic0J1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTXVkZGUvRm9ybS9CdWlsZGVyL1RhYnNCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQThDO0FBQzlDLGdFQUF5RDtBQUV6RCxNQUFxQixXQUFZLFNBQVEsNkJBQW1CO0lBRXpELFNBQVMsQ0FBQyxNQUFnQjtRQUN2QixJQUFJLFFBQVEsR0FBZ0IsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUN2QyxJQUFJLE1BQU0sR0FBOEIsUUFBUSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hGLElBQUksSUFBSSxHQUFhLElBQUksa0JBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQTtRQUVsRSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMzQyxJQUFJLFVBQVUsR0FBeUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxFQUFFLENBQUE7WUFDM0QsSUFBSSxVQUFVLEdBQVcsNkJBQTZCLFVBQVUsZ2NBQWdjLENBQUE7WUFFaGdCLElBQUk7aUJBQ0EsYUFBYSxDQUFDLElBQUksa0JBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDeEQsYUFBYSxDQUFDLElBQUksa0JBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFBO1lBRTFGLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ3pCO2lCQUFNO2dCQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFBO2FBQ3hDO1NBQ0g7UUFFRCxNQUFNO2FBQ0YsUUFBUSxFQUFFO2FBQ1YsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzVCLENBQUM7Q0FDSDtBQTFCRCw4QkEwQkMifQ==