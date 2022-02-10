import { ConfigurableAbstract } from "../node_modules/mudde-core/src/Core/ConfigurableAbstract";
import { NodeCore } from "../node_modules/mudde-core/src/Core/NodeCore"
import { GuidHelper } from "../node_modules/mudde-core/src/Helper/GuidHelper"
import { StringHelper } from "../node_modules/mudde-core/src/Helper/StringHelper"
import { ButtonAbstract } from "./ButtonAbstract"
import { DataAbstract } from "./DataAbstract"
import { InputAbstract } from "./InputAbstract"
import { HandlerInterface } from "../node_modules/mudde-core/src/Core/HandlerInterface"

export class Form extends ConfigurableAbstract {

   static readonly EVENT_FORM_PRE_CONFIGURE = 1
   static readonly EVENT_FORM_POST_CONFIGURE = 2
   static readonly EVENT_FORM_FINISHED = 3

   private _id: string = ''
   private _languages: string[] = []
   private _fields: InputAbstract[] = []
   private _buttons: ButtonAbstract[] = []
   private _form?: NodeCore
   private _data?: DataAbstract
   private _builder?: HandlerInterface
   private _panels: any = {}
   private _additionalJs: string[] = []
   private _rules: {} = {}
   private _method: string = ''
   private _action: string = ''

   static _forms: Form[] = []

   constructor(config: any) {
      super()

      Form._forms.push(this)

      this.form = new NodeCore('form', { method: this.method, action: this.action, id: this.id })

      this.configuring(config)
   }

   getDefaultConfig(): any {
      return {
         id: GuidHelper.raw(),
         languages: ['nl'],
         fields: [],
         buttons: [],
         layout: [],
         builder: [],
         data: {},
         panels: {},
         method: 'POST',
         action: '.'
      }
   }

   private configureFields(rawFields: Object[]): void {
      let main = this
      let fields: InputAbstract[] = this.fields = []

      rawFields.forEach(config => {
         let type = config['_type']
         let className = window['MuddeFormgen'].Input[type]
         let object = new className(config, main)
         fields.push(object)
      })
   }

   private configureButtons(rawFields: Object[]): void {
      let main = this
      let buttons: ButtonAbstract[] = this.buttons = []

      rawFields.forEach(config => {
         let type = config['_type']
         let className = window['MuddeFormgen'].Button[type]
         let object = new className(config, main)
         buttons.push(object)
      })
   }

   private configureBuilder(rawFields: Object[]): void {
      !(rawFields.indexOf('GeneralBuilder') === -1) || rawFields.unshift('GeneralBuilder')

      rawFields.forEach(builder => {
         let className = window['MuddeFormgen'].Builder[builder]
         let handler = new className(this)

         if (!this._builder) {
            this._builder = handler
         } else {
            this._builder.setNext(handler)
         }
      })
   }

   private configureData(config: Object[]) {
      var object = null
      let type = StringHelper.ucfirst(config['_type'])

      if (type) {
         let className = window['MuddeFormgen'].Data[type]

         object = new className(config, this)
         !object.init() || object.process()
      }

      this._data = object
   }

   static getFormById(id: string): Form | null {
      let filterFunction = form => { return form.id === id }
      let form = Form._forms.filter(filterFunction)

      return form && form.length === 0 ? null : form[0]
   }

   render(): NodeCore {
      if (this._form === undefined) throw new Error('Form not set!')

      let form = this._form

      this.addFields()
      this.addButtons()
      this._builder?.handle(form)
      this.handleXtraJs()

      return form
   }

   private handleXtraJs() {
      let additionalJs = this._additionalJs;

      //  todo  more descent js solution  Gr.O.M.
      additionalJs.push(`var formgenValidator;
            $.validator.setDefaults({ ignore: ".ck-hidden, .ck, .select2-search__field, .btn", debug: true });
            formgenValidator = $( "#${this.id}" ).validate({ rules: ${JSON.stringify(this._rules)}});
            formgenValidator.checkForm();
            formgenValidator.showErrors();`)

      let script: any = document.createElement('script')
      script.text = `function additionalScript() { ${additionalJs.join(';')} };
      $(document).ready( () => { additionalScript() } );`;

      document.body.appendChild(script);
   }

   private initPanel(panelId: string, panelLabel: string) {
      let form = this._form

      if (!form?.hasElementById(panelId)) {
         form
            ?.gotoRoot()
            .appendNode_('div', { id: panelId, class: 'panel', 'data-formgen-name': panelLabel })
      }
   }

   private addButtons() {
      let form = this._form

      form.gotoRoot()
      this.buttons.forEach(element => {
         form?.appendElement_(element.render())
      });
   }

   private addFields() {
      let form = this._form
      var main = this

      form.clear()

      this.fields.forEach(field => {
         let panelId = 'panel_' + field.panel
         let panelLabel = this._panels[field.panel] ?? panelId
         let renderedElement: NodeCore = field.render()

         this.initPanel(panelId, panelLabel)

         !field.extraJs || this._additionalJs.push(field.extraJs)
         !field.hasRules || (main._rules = { ...main._rules, ...field.rulesComplete })

         form
            ?.getElementById(panelId)
            .appendElement_(renderedElement)
      });
   }

   set id(value: string) {
      this._id = value
   }

   get id(): string {
      return this._id
   }

   get panels(): any {
      return this._panels;
   }
   set panels(value: any) {
      this._panels = value;
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

   set builder(value: HandlerInterface) {
      this._builder = value
   }

   get builder(): HandlerInterface {
      if (this._builder === undefined) throw new Error('Handler not set!');

      return this._builder
   }

   get additionalJs(): string[] {
      return this._additionalJs;
   }

   set additionalJs(value: string[]) {
      this._additionalJs = value;
   }

   get data(): DataAbstract {
      return this._data;
   }

   set data(value: DataAbstract) {
      this._data = value;
   }

   get method(): string {
      return this._method;
   }

   set method(value: string) {
      this._method = value;
   }

   get action(): string {
      return this._action;
   }

   set action(value: string) {
      this._action = value;
   }
}