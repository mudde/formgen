var requirejs = require("../../node_modules/requirejs/requirejs")
import ConfigurableAbstract from "../Core/ConfigurableAbstract";
import Node from "../../node_modules/mudde-node/src/node"
import GuidHelper from "../Helper/GuidHelper";
import Form from "./Form";
import InputBuilderAbstract from "./InputBuilderAbstract";
import ValidationAbstract from "./ValidationAbstract";

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
   private _ids: string[] = []
   private _builders: InputBuilderAbstract[] = []
   private _validations: ValidationAbstract[] = []
   private _form?: Form

   constructor(form: Form) {
      super()
      this._form = form
   }

   abstract coreHTMLInput(id: string, name: string, language: string): Node

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
      var builders: InputBuilderAbstract[] = this.builders = []

      rawFields.unshift('GeneralBuilder')
      rawFields.forEach(builder => {
         requirejs(['input/builder/' + builder], (className) => {
            builders.push(new className.default())
         });

      })
   }

   private configureValidations(rawFields: Object[]): void {
      var main = this
      this.validations = []

      rawFields.forEach((config, index) => {
         var type = config['_type']
         requirejs(['validation/' + type], (className) => {
            main.validations[index] = new className.default(config)
         });
      })
   }

   render(): Node {
      var main = this
      var elements: Node[] = []
      var builders: InputBuilderAbstract[] = this.builders
      var isMultilingual: boolean = this.isMultilingual
      var languages: string[] = isMultilingual ? this.form.languages : [this.form.languages[0]]
      var output = new Node('div', {})

      this.ids = []

      languages.forEach(language => {
         var id: string = isMultilingual ? `${main.id}_${language}` : main.id
         var name: string = isMultilingual ? `${main.id}[${language}]` : main.id
         main.renderBuild(id, name, language, elements)
      })

      builders.forEach(builder => {
         builder.finalBuild(elements, main, output)
      })

      return output
   }

   private renderBuild(id: string, name: string, language: string, elements: Node[]) {
      var main = this
      var validations: ValidationAbstract[] = this.validations
      var builders: InputBuilderAbstract[] = this.builders
      var isMultilingual: boolean = this.isMultilingual
      var object: Node = this.coreHTMLInput(id, name, language)

      validations.forEach(validation => {
         object = isMultilingual
            ? validation.coreMultilingualBuild(object, main, language)
            : validation.coreBuild(object, main)
      })

      builders.forEach(builder => {
         object = isMultilingual
            ? builder.coreMultilingualBuild(object, main, language)
            : builder.coreBuild(object, main)
      })

      this.ids.push(id)
      elements.push(object)
   }

   get isMultilingual(): boolean {
      return this.form.languages.length > 1 && this.multilingual
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

   set validations(value: ValidationAbstract[]) {
      this._validations = value
   }

   get validations(): ValidationAbstract[] {
      return this._validations
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

   set ids(value: string[]) {
      this._ids = value
   }

   get ids(): string[] {
      return this._ids
   }

   set builders(value: InputBuilderAbstract[]) {
      this._builders = value
   }

   get builders(): InputBuilderAbstract[] {
      return this._builders
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

}