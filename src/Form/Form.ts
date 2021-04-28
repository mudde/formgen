var requirejs = require("../../node_modules/requirejs/requirejs")
import ConfigurableAbstract from "../Core/ConfigurableAbstract"
import Node from "../../node_modules/mudde-node/src/node"
import GuidHelper from "../Helper/GuidHelper"
import StringHelper from "../Helper/StringHelper"
import ButtonAbstract from "./ButtonAbstract"
import DataAbstract from "./DataAbstract"
import FormBuilderAbstract from "./FormBuilderAbstract"
import InputAbstract from "./InputAbstract"

export default class Form extends ConfigurableAbstract {

   private _id: string = ''
   private _languages: string[] = []
   private _fields: InputAbstract[] = []
   private _buttons: ButtonAbstract[] = []
   private _form?: Node
   private _builders: FormBuilderAbstract[] = []
   private _data?: DataAbstract
   private _count: number = 0
   private _loaded: boolean = false
   static _forms: Form[] = []

   constructor(config: any) {
      super()

      this.configuring(config)
      this.form = new Node('form', { method: 'POST', action: '.', id: this.id })

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
      var main = this
      var fields: InputAbstract[] = this.fields = []

      rawFields.forEach(config => {
         var type = config['_type']
         main.count++
         requirejs(['input/' + type], (className) => {
            var object = new className.default(config, main)

            fields.push(object)
            main.count--
         });
      })
   }

   private configureButtons(rawFields: Object[]): void {
      var main = this
      var buttons: ButtonAbstract[] = this.buttons = []

      rawFields.forEach(config => {
         var type = config['_type']
         main.count++

         requirejs(['button/' + type], (className) => {
            var object = new className.default(config, main)

            buttons.push(object)
            main.count--
         });
      })
   }

   private configureBuilders(rawFields: Object[]): void {
      var main = this
      var builders: FormBuilderAbstract[] = this.builders = []

      rawFields.unshift('GeneralBuilder')
      rawFields.forEach(builder => {
         main.count++
         requirejs(['form/builder/' + builder], (className) => {
            builders.push(new className.default())
            main.count--
         });
      })
   }

   private configureData(config: Object[]): void {
      var main = this
      var type = StringHelper.ucfirst(config['_type'])
      main.count++
      requirejs(['data/' + type], (className) => {
         var object: DataAbstract = new className.default(config, main)

         main._data = object
         main.count--
      });
   }

   static getFormById(id: string): Form | null {
      var filterFunction = form => { return form.id === id }
      var form = Form._forms.filter(filterFunction)

      return form.length === 0 ? null : form[0]
   }

   render(): HTMLElement {
      var form = this._form
      if (form === undefined) throw new Error('Form not set!')
      form.root().innerHTML = ''

      this.fields.forEach(element => {
         if (form === undefined) throw new Error('Form not set!')
         var renderedElement = element.render();
         form.appendElement_(renderedElement.root())
      });

      this.builders.forEach(builder => {
         builder.postBuild(this)
      })

      form.gotoRoot()

      this.buttons.forEach(element => {
         if (form === undefined) throw new Error('Form not set!')
         form.appendElement_(element.render().root())
      });

      return form.root()
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

   set builders(value: FormBuilderAbstract[]) {
      this._builders = value
   }

   get builders(): FormBuilderAbstract[] {
      return this._builders
   }

   set form(value: Node) {
      this._form = value
   }

   get form(): Node {
      if (this._form === undefined) throw new Error('Form not set!')

      return this._form
   }

}