import { NodeCore } from "mudde-core/src/Core/NodeCore"
import {Form} from "../Form"
import {InputAbstract} from "../InputAbstract"

export class Readonly extends InputAbstract {

   private _mask: string = ''
   private _format: string = ''
   private _prefix: string = ''
   private _suffix: string = ''
   private _multiple: boolean = false
   private _spellcheck: boolean = false

   constructor(config: any, form: Form) {
      super(form)
      this.configuring(config)
   }

   protected canBeMultilingual(): boolean { return true }

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
         mask: '',
         format: '',
         prefix: '',
         suffix: '',
         multiple: false,
         spellcheck: false
      }
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = new NodeCore('input', {
         id: id,
         name: name,
         type: 'text',
         placeholder: this.placeholder,
         spellcheck: this.spellcheck,
         readonly: ''
      })

      return element
   }

   set mask(value: string) {
      this._mask = value
   }

   get mask(): string {
      return this._mask
   }

   set format(value: string) {
      this._format = value
   }

   get format(): string {
      return this._format
   }

   set prefix(value: string) {
      this._prefix = value
   }

   get prefix(): string {
      return this._prefix
   }

   set suffix(value: string) {
      this._suffix = value
   }

   get suffix(): string {
      return this._suffix
   }

   set multiple(value: boolean) {
      this._multiple = value
   }

   get multiple(): boolean {
      return this._multiple
   }

   set spellcheck(value: boolean) {
      this._spellcheck = value
   }

   get spellcheck(): boolean {
      return this._spellcheck
   }
}