import { ConfigurableAbstract } from "../node_modules/mudde-core/src/Core/ConfigurableAbstract";
import { HandlerInterface } from "../node_modules/mudde-core/src/Core/HandlerInterface";
import { NodeCore } from "../node_modules/mudde-core/src/Core/NodeCore"
import { GuidHelper } from "../node_modules/mudde-core/src/Helper/GuidHelper";
import { Form } from "./Form";

export abstract class InputAbstract extends ConfigurableAbstract {

   private __type: string = ''
   private _id: string = ''
   private _label: string = ''
   private _help: string = ''
   private _placeholder: string = ''
   private _panel: string = ''
   private _unique: boolean = false
   private _input: boolean = false
   private _autofocus: boolean = false
   private _hidden: boolean = false
   private _require: boolean = false
   private _multilingual: boolean = false
   private _handler?: HandlerInterface
   private _handlerCurrent?: HandlerInterface
   private _form?: Form
   private _coreIds: NodeCore[] = [];
   private _extraJs: string = '';

   constructor(form: Form) {
      super()
      this._form = form
   }

   abstract coreHTMLInput(id: string, name: string, language: string): NodeCore
   protected preCoreHTMLInput(): NodeCore | null { return null }
   protected preHTMLInput(): NodeCore | null { return null }
   protected postCoreHTMLInput(): NodeCore | null { return null }
   protected postHTMLInput(): NodeCore | null { return null }
   protected javascript(): string { return '' }
   protected canBeMultilingual(): boolean { return false }

   getDefaultConfig() {
      return {
         _type: 'Text',
         id: GuidHelper.raw(),
         input: true,
         label: '',
         help: '',
         unique: false,
         validations: [],
         placeholder: '',
         panel: null,
         autofocus: false,
         require: false,
         hidden: false,
         multilingual: false,
         builders: []
      }
   }

   private configureBuilders(rawFields: Object[]): void {
      rawFields.unshift('GeneralBuilder')
      rawFields.forEach(builder => {
         let className = window['MuddeFormgen'].Input.Builder[builder]
         let handler = new className(this)

         if (!this._handler) {
            this._handler = this._handlerCurrent = handler
         } else {
            this._handlerCurrent?.setNext(handler)
            this._handlerCurrent = handler
         }
      })
   }

   private configureValidations(rawFields: Object[]): void {
      rawFields.forEach(config => {
         let type = config['_type']
         let className = window['MuddeFormgen'].Validation[type]
         let handler = new className(this, config)

         if (!this._handler) {
            this._handler = this._handlerCurrent = handler
         } else {
            this._handlerCurrent?.setNext(handler)
            this._handlerCurrent = handler
         }
      })
   }

   render(): NodeCore {
      let mainId = this.id
      let isMultilingual: boolean = this.isMultilingual
      let languages: string[] = isMultilingual ? this.form.languages : [this.form.languages[0]]
      let output = new NodeCore('div', {})
      let ids: NodeCore[] = this.coreIds = []

      output.appendElement(this.preCoreHTMLInput())

      languages.forEach(language => {
         let id: string = isMultilingual ? `${mainId}_${language}` : mainId
         let name: string = isMultilingual ? `${mainId}[${language}]` : mainId
         let object: NodeCore = this.coreHTMLInput(id, name, language)

         ids.push(object)
         output.appendElement_(object)
      })

      output
         .appendElement_(this.postCoreHTMLInput())
         .prependElement_(this.preHTMLInput())
         .appendElement_(this.postHTMLInput())

      this.handler?.handle(output)

      return output
   }

   get isMultilingual(): boolean {
      let isMultilingualRequested = this.form.languages.length > 1 && this.multilingual

      return this.canBeMultilingual() && isMultilingualRequested
   }

   get extraJs(): string {
      return this._extraJs;
   }

   set extraJs(value: string) {
      this._extraJs = value;
   }

   set id(value: string) {
      this._id = value
   }

   get id(): string {
      return this._id
   }

   set input(value: boolean) {
      this._input = value
   }

   get input(): boolean {
      return this._input
   }

   set _type(value: string) {
      this.__type = value
   }

   get _type(): string {
      return this.__type
   }

   set label(value: string) {
      this._label = value
   }

   get label(): string {
      return this._label
   }

   set help(value: string) {
      this._help = value
   }

   get help(): string {
      return this._help
   }

   set unique(value: boolean) {
      this._unique = value
   }

   get unique(): boolean {
      return this._unique
   }

   set handler(value: HandlerInterface) {
      this._handler = value
   }

   get handler(): HandlerInterface {
      if (this._handler === undefined) throw new Error('Handler not set!');

      return this._handler
   }

   set autofocus(value: boolean) {
      this._autofocus = value
   }

   get autofocus(): boolean {
      return this._autofocus
   }

   set hidden(value: boolean) {
      this._hidden = value
   }

   get hidden(): boolean {
      return this._hidden
   }

   set require(value: boolean) {
      this._require = value
   }

   get require(): boolean {
      return this._require
   }

   set multilingual(value: boolean) {
      this._multilingual = value
   }

   get multilingual(): boolean {
      return this._multilingual
   }

   set form(value: Form) {
      this._form = value
   }

   get form(): Form {
      if (this._form === undefined) throw new Error('Input not properly initialized!')

      return this._form
   }

   set placeholder(value: string) {
      this._placeholder = value
   }

   get placeholder(): string {
      return this._placeholder
   }

   set panel(value: string) {
      this._panel = value
   }

   get panel(): string {
      return this._panel
   }

   get coreIds(): NodeCore[] {
      return this._coreIds;
   }

   set coreIds(value: NodeCore[]) {
      this._coreIds = value;
   }
}