///<amd-module name='Mudde/Form/InputAbstract'/>

import ConfigurableAbstract from "Mudde/Core/ConfigurableAbstract";
import HandlerInterface from "Mudde/Core/HandlerInterface";
import Node from "mudde-node/src/Mudde/Core/Node"
import GuidHelper from "Mudde/Form/Helper/GuidHelper";
import Form from "Mudde/Form/Form";

export default abstract class InputAbstract extends ConfigurableAbstract {

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
   private _coreIds: Node[] = [];

   constructor(form: Form) {
      super()
      this._form = form
   }

   abstract coreHTMLInput(id: string, name: string, language: string): Node
   protected preCoreHTMLInput(): Node | null { return null }
   protected preHTMLInput(): Node | null { return null }
   protected postCoreHTMLInput(): Node | null { return null }
   protected postHTMLInput(): Node | null { return null }
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
      let main = this

      rawFields.unshift('GeneralBuilder')
      rawFields.forEach(builder => {
         requirejs(['Mudde/Form/Input/Builder/' + builder], (className) => {
            let handler = new className.default(this)

            if (!main._handler) {
               main._handler = main._handlerCurrent = handler
            } else {
               main._handlerCurrent?.setNext(handler)
               main._handlerCurrent = handler
            }
         });
      })
   }

   private configureValidations(rawFields: Object[]): void {
      let main = this

      rawFields.forEach((config, index) => {
         let type = config['_type']
         requirejs(['Mudde/Form/Validation/' + type], (className) => {
            let handler = new className.default(this, config)

            if (!main._handler) {
               main._handler = main._handlerCurrent = handler
            } else {
               main._handlerCurrent?.setNext(handler)
               main._handlerCurrent = handler
            }
         });
      })
   }

   render(): Node {
      let mainId = this.id
      let isMultilingual: boolean = this.isMultilingual
      let languages: string[] = isMultilingual ? this.form.languages : [this.form.languages[0]]
      let output = new Node('div', {})
      let ids: Node[] = this.coreIds = []

      output.appendElement(this.preCoreHTMLInput())

      languages.forEach(language => {
         let id: string = isMultilingual ? `${mainId}_${language}` : mainId
         let name: string = isMultilingual ? `${mainId}[${language}]` : mainId
         let object: Node = this.coreHTMLInput(id, name, language)

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

   get coreIds(): Node[] {
      return this._coreIds;
   }

   set coreIds(value: Node[]) {
      this._coreIds = value;
   }
}