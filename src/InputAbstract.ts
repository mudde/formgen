import { Mixin } from 'ts-mixer';
import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/ObserverPattern/SubjectAbstract";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverPattern/ObserverAbstract";
import { HandlerInterface } from "mudde-core/src/Core/ChainOfResponsibility/HandlerInterface";
import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { GuidHelper } from "mudde-core/src/Helper/GuidHelper";
import { Form } from "./Form";
import { Event } from 'mudde-core/src/Core/ObserverPattern/Event';
import { ValidationAbstract } from './ValidationAbstract';
import { DataAbstract } from './DataAbstract';
import { DataEvent } from './DataEvent';

export abstract class InputAbstract
   extends Mixin(ConfigurableAbstract, SubjectAbstract, ObserverAbstract) {

   static readonly EVENT_INPUT_PRE_CONFIGURE = 1
   static readonly EVENT_INPUT_POST_CONFIGURE = 2
   static readonly EVENT_INPUT_FINISHED = 4
   static readonly EVENT_INPUT_PRE_CHANGE = 8
   static readonly EVENT_INPUT_POST_CHANGE = 16

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
   private _data?: DataAbstract
   private _coreHTMLElements: NodeCore[] = []
   private _extraJs: CallableFunction
   private _handleDataEvent: CallableFunction = (event) => {
      let id = event.id
      let dataSource: DataAbstract = event.source
      let data = dataSource.get(id)

      this.addValue(id, data)
   }
   private _updateDataEvent: CallableFunction = (event) => {
      let input: InputAbstract = event.source
      let dataSource: DataAbstract = input._data

      dataSource.pauseAttach(this._handleDataEvent)
      console.debug('------------------------------------- pause -------------------------------------')
      dataSource.set(input.id, input.getValue())
      dataSource.pauseDetach(this._handleDataEvent)
      console.debug('------------------------------------ unpause ------------------------------------')
   }

   constructor(form: Form, data: DataAbstract) {
      super()
      this.notify(this, InputAbstract.EVENT_INPUT_PRE_CONFIGURE)

      this._form = form
      this._data = data
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

      for (const key in languages) {
         let language = languages[key];
         let id: string = isMultilingual ? `${mainId}_${language}` : mainId
         let name: string = isMultilingual ? `${mainId}[${language}]` : mainId
         let object: NodeCore<HTMLInputElement> = this.coreHTMLInput(id, name, language)

         coreHTMLElements.push(object)
      }
   }

   abstract coreHTMLInput(id: string, name: string, language: string): NodeCore<HTMLInputElement>
   abstract setValue(value: any): void
   abstract getValue(): any
   abstract addValue(key: string, value: any): void

   protected preCoreHTMLInput(): NodeCore | null { return null }
   protected preHTMLInput(): NodeCore | null { return null }
   protected postCoreHTMLInput(): NodeCore | null { return null }
   protected postHTMLInput(): NodeCore | null { return null }
   protected javascript(): void { }
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

   private configureId(rawFields: Object[]): void {
      let formId = this.form.id
      let id = formId + '_' + rawFields;

      this.id = id
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

   appendNode(tagName: string, attributes: any, text: string = null): void {
      this.coreHTMLElements.forEach((element: NodeCore) => {
         element.appendNode(tagName, attributes, text)
      })
   }

   setAttributes(value: any): void {
      this.coreHTMLElements.forEach(item => {
         item.setAttributes(value)
      })
   }

   render(): NodeCore {
      let coreElements = this.coreHTMLElements
      let output = new NodeCore('div', {})

      output.appendElement(this.preCoreHTMLInput())

      for (const key in coreElements) {
         let element = coreElements[key]

         output.appendElement_(element)
      }

      output
         .appendElement_(this.postCoreHTMLInput())
         .prependElement_(this.preHTMLInput())
         .appendElement_(this.postHTMLInput())

      this._handlerBuilders?.handle(output)

      return output
   }

   get isMultilingual(): boolean {
      let isMultilingualRequested = this.form?.languages?.length > 1 && this.multilingual

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