///<amd-module name='Mudde/Form/InputAbstract'/>

import ConfigurableAbstract from "Mudde/Core/ConfigurableAbstract";
import Node from "mudde-node/src/Mudde/Core/Node"
import GuidHelper from "Mudde/Form/Helper/GuidHelper";
import Form from "Mudde/Form/Form";
import InputBuilderAbstract from "Mudde/Form/InputBuilderAbstract";
import ValidationAbstract from "Mudde/Form/ValidationAbstract";

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
      let builders: InputBuilderAbstract[] = this.builders = []

      rawFields.unshift('GeneralBuilder')
      rawFields.forEach(builder => {
         requirejs(['Mudde/Form/Input/Builder/' + builder], (className) => {
            builders.push(new className.default())
         });

      })
   }

   private configureValidations(rawFields: Object[]): void {
      let main = this
      this.validations = []

      rawFields.forEach((config, index) => {
         let type = config['_type']
         requirejs(['Mudde/Form/Validation/' + type], (className) => {
            main.validations[index] = new className.default(config)
         });
      })
   }

   render(): Node {
      let main = this
      let elements: Node[] = []
      let builders: InputBuilderAbstract[] = this.builders
      let isMultilingual: boolean = this.isMultilingual
      let languages: string[] = isMultilingual ? this.form.languages : [this.form.languages[0]]
      let output = new Node('div', {})

      this.ids = []

      languages.forEach(language => {
         let id: string = isMultilingual ? `${main.id}_${language}` : main.id
         let name: string = isMultilingual ? `${main.id}[${language}]` : main.id
         let object = main.renderBuild(id, name, language)

         elements.push(object)
      })

      builders.forEach(builder => {
         builder.finalBuild(elements, main, output)
      })

      return output
   }

   protected renderBuild(id: string, name: string, language: string): Node {
      let main = this
      let validations: ValidationAbstract[] = this.validations
      let builders: InputBuilderAbstract[] = this.builders
      let isMultilingual: boolean = this.isMultilingual
      let object: Node = this.coreHTMLInput(id, name, language)

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

      return object;
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