import { Mixin } from "ts-mixer";

import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { GuidHelper } from "mudde-core/src/Helper/GuidHelper"
import { StringHelper } from "mudde-core/src/Helper/StringHelper"
import { HandlerInterface } from "mudde-core/src/Core/ChainOfResponsibility/HandlerInterface"
import { ObserverAbstract } from "mudde-core/src/Core/ObserverPattern/ObserverAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/ObserverPattern/SubjectAbstract";
import { Event } from "mudde-core/src/Core/ObserverPattern/Event";

import { ButtonAbstract } from "./ButtonAbstract"
import { DataAbstract } from "./DataAbstract"
import { StorableInterface } from "./StorableInterface";

export class Form
   extends Mixin(ConfigurableAbstract, SubjectAbstract, ObserverAbstract)
   implements StorableInterface {

   static readonly EVENT_FORM_PRE_CONFIGURE = 1
   static readonly EVENT_FORM_POST_CONFIGURE = 2
   static readonly EVENT_FORM_PRE_RENDER = 4
   static readonly EVENT_FORM_POST_RENDER = 8
   static readonly EVENT_FORM_FINISHED = 16

   private _id: string = ''
   private _languages: string[] = []
   private _fields: {} = {}
   private _buttons: ButtonAbstract[] = []
   private _form?: NodeCore
   private _rootForm?: Form = null        //  For pop-up forms  Gr.O.M.
   private _data?: DataAbstract
   private _builder?: HandlerInterface
   private _panels: any = {}
   private _additionalJs: Promise<void>[] = []
   private _validations: any = {}
   private _method: string = ''
   private _action: string = ''
   static _validatorDefaults: any = {
      dynamic: {
         settings: {
            trigger: [
               "focusout", "keydown",
               "keypress", "keyup"
            ]
         }
      },
      showErrors: function (errorMap) {
         for (const key in errorMap) {
            let item = $(`#${key}-error`)
            let currentText = item.text()
            let errorText = errorMap[key] ? (errorMap[key] ? errorMap[key] : currentText) : ''

            item.text(errorText)
         }
      },
      debug: true,
      ignore: [".ck-hidden", ".ck, .select2-search__field", ".btn"]
   }
   private _formValidation: JQueryValidation.Validator
   static _forms: {} = {}

   constructor(config: any) {
      //  todo  var a='olaf'; var b='test ${a}'; let tpl = eval('`'+b+'`'); console.debug(tpl)  Gr.O.M.
      super()

      this.notify(this, Form.EVENT_FORM_PRE_CONFIGURE)

      this.form = new NodeCore('form')
      !jQuery.isEmptyObject(Form._forms) || $.validator.setDefaults(Form._validatorDefaults)

      this.configuring(config)
      this.updateForm()
      this.notify(this, Form.EVENT_FORM_POST_CONFIGURE)
   }

   private updateForm() {
      let form = this.form

      Form._forms[this.id] = this
      form.setAttributes({ method: this.method, action: this.action, id: this.id })
      jQuery(form.root).data('creator', this)
   }

   getDefaultConfig(): any {
      return {
         id: GuidHelper.raw(),
         data: {},
         languages: ['nl'],
         fields: {},
         buttons: [],
         layout: [],
         builder: [],
         panels: {},
         method: 'POST',
         action: '.'
      }
   }

   private configureFields(rawFields: Object[]): void {
      let main = this
      let fields: {} = this.fields = {}

      rawFields.forEach(config => {
         let type = config['_type']
         let className = window['MuddeFormgen'].Input[type]
         let object = new className(config, main)

         fields[object.id] = object
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
      let type = StringHelper.ucFirst(config['_type'])

      if (type) {
         let className = window['MuddeFormgen'].Data[type]

         object = new className(config, this)
         !object.init() || object.process()
      }

      this._data = object
   }

   static getFormById(id: string): Form | null {
      let form = Form._forms[id]

      return form
   }

   getFieldById(id: string) {
      return this.fields[id]
   }

   showValidationErrors() {
      let formValidation: JQueryValidation.Validator = this._formValidation

      formValidation.checkForm()
      formValidation.showErrors(formValidation.errorMap)

      return formValidation.errorMap
   }

   validate() {
      return this._formValidation.checkForm()
   }

   post() {
      return this.data.post()
   }

   put() {
      return this.data.put()
   }

   delete() {
      return this.data.delete()
   }

   render(): Promise<NodeCore> {
      if (this._form === undefined) throw new Error('Form not set!')

      this.notify(this, Form.EVENT_FORM_PRE_RENDER)

      let main: Form = this
      let form: NodeCore = this._form

      return new Promise((resolve, reject) => {
         let promises: any = main.addFields()

         form.clear()

         Promise
            .all(promises)
            .then(inputs => {
               inputs.forEach(input => {
                  form.appendElement_(input)
               })
               main._builder?.handle(form)
            })
            .catch((error) => {
               reject(error)
            })
            .finally(() => {
               main.addButtons()
               main.handleXtraJs()
            })

         main.notify(main, Form.EVENT_FORM_POST_RENDER)
         resolve(form)
         main.notify(main, Form.EVENT_FORM_FINISHED)
      })
   }

   private handleXtraJs() {
      let additionalJs: Promise<void>[] = this._additionalJs

      additionalJs.push(this.formExtraJS())

      Promise.all(additionalJs)
   }

   private formExtraJS(): Promise<void> {
      let main = this
      let rules = main._validations

      return new Promise((resolve, reject) => {
         var formgenValidator = $('#' + main.id).validate({ rules: rules })
         if (!formgenValidator) {
            return reject
         }

         main._formValidation = formgenValidator
         formgenValidator.checkForm()
         resolve
      })
   }

   private initPanel(panelId: string, panelLabel: string) {
      let form = this._form

      if (!form?.hasElementById(panelId)) {
         form
            .gotoRoot()
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

   private addFields(): Promise<NodeCore>[] {
      let main = this
      let promises: Promise<NodeCore>[] = []
      let fields = this.fields

      for (const key in fields) {
         const field = fields[key];
         let promise = new Promise<NodeCore>((resolve, reject) => {
            let panelId = 'panel_' + field.panel
            let panelLabel = main._panels[field.panel] ?? panelId
            let renderedElement: NodeCore = field.render()
            let rules = field.validations?.handle()

            main.initPanel(panelId, panelLabel)

            !field.extraJs || main._additionalJs.push(new Promise((resolve, reject) => { field.extraJs(); resolve }))
            !field.hasValidations || (main._validations = { ...main._validations, ...rules })

            resolve(renderedElement)
         })

         promises.push(promise)
      }

      return promises
   }

   update(event: Event) {
      throw new Error("Method not implemented.");
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

   set fields(value: {}) {
      this._fields = value
   }

   get fields(): {} {
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

   set rootForm(value: Form) {
      this._rootForm = value
   }

   get rootForm(): Form {
      if (this._rootForm === undefined) throw new Error('Form not set!')

      return this._rootForm
   }

   set builder(value: HandlerInterface) {
      this._builder = value
   }

   get builder(): HandlerInterface {
      if (this._builder === undefined) throw new Error('Handler not set!');

      return this._builder
   }

   get additionalJs(): Promise<void>[] {
      return this._additionalJs;
   }

   set additionalJs(value: Promise<void>[]) {
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