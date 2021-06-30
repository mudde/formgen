import ConfigurableAbstract from "Mudde/Core/ConfigurableAbstract"
import NodeCore from "mudde-node/src/NodeCore"
import GuidHelper from "Mudde/Form/Helper/GuidHelper"
import StringHelper from "Mudde/Form/Helper/StringHelper"
import ButtonAbstract from "Mudde/Form/ButtonAbstract"
import DataAbstract from "Mudde/Form/DataAbstract"
import InputAbstract from "Mudde/Form/InputAbstract"
import HandlerInterface from "Mudde/Core/HandlerInterface"

export default class Form extends ConfigurableAbstract {

   private _id: string = ''
   private _languages: string[] = []
   private _fields: InputAbstract[] = []
   private _buttons: ButtonAbstract[] = []
   private _form?: NodeCore
   private _data?: DataAbstract
   private _count: number = 0
   private _handler?: HandlerInterface
   private _handlerCurrent?: HandlerInterface
   private _loaded: boolean = false
   static _forms: Form[] = []

   constructor(config: any) {
      super()

      this.configuring(config)
      this.form = new NodeCore('form', { method: 'POST', action: '.', id: this.id })

      Form._forms.push(this)
   }

   getDefaultConfig(): any {
      return {
         id: GuidHelper.raw(),
         languages: ['nl'],
         fields: [],
         buttons: [],
         layout: [],
         builders: [],
         data: {}
      }
   }

   private configureFields(rawFields: Object[]): void {
      let main = this
      let fields: InputAbstract[] = this.fields = []

      rawFields.forEach(config => {
         let type = config['_type']
         main.count++
         requirejs(['Mudde/Form/Input/' + type], (className) => {
            let object = new className.default(config, main)

            fields.push(object)
            main.count--
         });
      })
   }

   private configureButtons(rawFields: Object[]): void {
      let main = this
      let buttons: ButtonAbstract[] = this.buttons = []

      rawFields.forEach(config => {
         let type = config['_type']
         main.count++

         requirejs(['Mudde/Form/Buttom/' + type], (className) => {
            let object = new className.default(config, main)

            buttons.push(object)
            main.count--
         });
      })
   }

   private configureBuilders(rawFields: Object[]): void {
      let main = this

      rawFields.unshift('GeneralBuilder')
      rawFields.forEach(builder => {
         requirejs(['Mudde/Form/Builder/' + builder], (className) => {
            let handler = new className.default(this)
            if (!main._handler) {
               main._handler = main._handlerCurrent = handler
            } else {
               main._handlerCurrent = main._handlerCurrent?.setNext(handler)
            }

         });
      })
   }

   private configureData(config: Object[]): void {
      let main = this
      let type = StringHelper.ucfirst(config['_type'])

      main.count++
      requirejs(['Mudde/Form/Data/' + type], (className) => {
         let object: DataAbstract = new className.default(config, main)

         main._data = object
         main.count--
      });
   }

   static getFormById(id: string): Form | null {
      let filterFunction = form => { return form.id === id }
      let form = Form._forms.filter(filterFunction)

      return form.length === 0 ? null : form[0]
   }

   render(): NodeCore {
      let form = this._form
      if (form === undefined) throw new Error('Form not set!')

      form.clear()

      this.fields.forEach(field => {
         let renderedElement: NodeCore = field.render();
         let panelId = 'panel_' + field.panel

         if (!form?.hasElementById(panelId)) {
            form
               ?.gotoRoot()
               .appendNode_('div', { id: panelId , class:'panel'})
         }

         form
            ?.getElementById(panelId)
            .appendElement_(renderedElement)
      });

      this._handler?.handle(form)

      form.gotoRoot()

      this.buttons.forEach(element => {
         form?.appendElement_(element.render())
      });

      return form
   }

   set id(value: string) {
      this._id = value
   }

   get id(): string {
      return this._id
   }

   private set count(value: number) {
      this._count = value
      if (this._count === 0) {
         this._loaded = true
      }
   }

   private get count(): number {
      return this._count
   }

   get loaded(): boolean {
      return this._loaded
   }

   set languages(value: string[]) {
      this._languages = value
   }

   get languages(): string[] {
      return this._languages
   }

   set fields(value: InputAbstract[]) {
      this._fields = value
   }

   get fields(): InputAbstract[] {
      return this._fields
   }

   set buttons(value: ButtonAbstract[]) {
      this._buttons = value
   }

   get buttons(): ButtonAbstract[] {
      return this._buttons
   }

   set form(value: NodeCore) {
      this._form = value
   }

   get form(): NodeCore {
      if (this._form === undefined) throw new Error('Form not set!')

      return this._form
   }

   set handler(value: HandlerInterface) {
      this._handler = value
   }

   get handler(): HandlerInterface {
      if (this._handler === undefined) throw new Error('Handler not set!');

      return this._handler
   }
}