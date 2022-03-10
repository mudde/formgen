import { Mixin } from 'ts-mixer';
import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/SubjectAbstract";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverAbstract";
import { HandlerInterface } from "mudde-core/src/Core/HandlerInterface";
import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { GuidHelper } from "mudde-core/src/Helper/GuidHelper";
import { Form } from "./Form";
import { Event } from 'mudde-core/src/Core/Event';
import { ValidationAbstract } from './ValidationAbstract';

export abstract class InputAbstract extends Mixin(ConfigurableAbstract, SubjectAbstract, ObserverAbstract) {

   public EVENT_INPUT_PRE_CONFIGURE = 1
   public EVENT_INPUT_POST_CONFIGURE = 2
   public EVENT_INPUT_FINISHED = 3

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
   private _readonly: boolean = false
   private _multilingual: boolean = false
   private _handlerBuilders?: HandlerInterface
   private _handlerValidations?: ValidationAbstract
   private _form?: Form
   private _coreHTMLElements: NodeCore[] = []
   private _extraJs: CallableFunction

   constructor(form: Form) {
      super()

      this.notify(this, this.EVENT_INPUT_PRE_CONFIGURE)

      this._form = form
   }

   configuring(config: any): void {
      super.configuring(config)
      this.init()
   }

   private init() {
      let mainId = this.id
      let isMultilingual: boolean = this.isMultilingual
      let languages: string[] = isMultilingual ? this.form.languages : [this.form.languages[0]]
      let coreHTMLElements: NodeCore[] = this.coreHTMLElements = []

      languages.forEach(language => {
         let id: string = isMultilingual ? `${mainId}_${language}` : mainId
         let name: string = isMultilingual ? `${mainId}[${language}]` : mainId
         let object: NodeCore = this.coreHTMLInput(id, name, language)

         coreHTMLElements.push(object)
      })
   }

   abstract coreHTMLInput(id: string, name: string, language: string): NodeCore
   abstract setValue(value: any): void
   abstract getValue(): any
   abstract addValue(key: string, value: any): void

   protected preCoreHTMLInput(): NodeCore | null { return null }
   protected preHTMLInput(): NodeCore | null { return null }
   protected postCoreHTMLInput(): NodeCore | null { return null }
   protected postHTMLInput(): NodeCore | null { return null }
   protected javascript(): string { return '' }
   protected canBeMultilingual(): boolean { return false }
   update(event: Event) { }

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
         readonly: false,
         hidden: false,
         multilingual: false,
         builders: []
      }
   }

   private configureBuilders(rawFields: Object[]): void {
      let main = this

      rawFields.unshift('GeneralBuilder')
      rawFields.forEach(builder => {
         let className = window['MuddeFormgen'].Input.Builder[builder]
         let handler = new className(main)

         if (!main._handlerBuilders) {
            main._handlerBuilders = handler
         } else {
            main._handlerBuilders.setNext(handler)
         }
      })
   }

   private configureValidations(rawFields: Object[]): void {
      let main = this

      rawFields.forEach(config => {
         let type = config['_type']
         let className = window['MuddeFormgen'].Validation[type]
         let handler = new className(main, config)

         if (!this._handlerValidations) {
            main._handlerValidations = handler
         } else {
            main._handlerValidations.setNext(handler);
         }
      })
   }

   render(): NodeCore {
      let coreElements = this.coreHTMLElements
      let output = new NodeCore('div', {})

      output.appendElement(this.preCoreHTMLInput())

      for (const key in coreElements) {
         output.appendElement_(coreElements[key])
      } 

      output
         .appendElement_(this.postCoreHTMLInput())
         .prependElement_(this.preHTMLInput())
         .appendElement_(this.postHTMLInput())

      this._handlerBuilders?.handle(output)

      return output
   }

   get isMultilingual(): boolean {
      let isMultilingualRequested = this.form && this.form.languages && this.form.languages.length > 1 && this.multilingual

      return this.canBeMultilingual() && isMultilingualRequested
   }

   get extraJs(): CallableFunction {
      return this._extraJs;
   }

   set extraJs(extraJs: CallableFunction) {
      let currentJs = this._extraJs
      this._extraJs = () => {
         !currentJs || currentJs()
         extraJs()
      }
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
      this._handlerBuilders = value
   }

   get handler(): HandlerInterface {
      if (this._handlerBuilders === undefined) throw new Error('Handler not set!');

      return this._handlerBuilders
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

   set readonly(value: boolean) {
      this._readonly = value
   }

   get readonly(): boolean {
      return this._readonly
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

   get coreHTMLElements(): NodeCore[] {
      return this._coreHTMLElements;
   }

   set coreHTMLElements(value: NodeCore[]) {
      this._coreHTMLElements = value;
   }

   get hasValidations(): boolean {
      return this._handlerValidations !== undefined
   }

   get validations(): ValidationAbstract {
      return this._handlerValidations;
   }

}