import { NodeCore } from "mudde-core/src/Core/NodeCore"
import {Form} from "../Form"
import {InputAbstract} from "../InputAbstract"

export class UploadFile extends InputAbstract {

   private _multiple: boolean = false

   constructor(config: any, form: Form) {
      super(form)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
         multiple: false,
      }
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let attributes: any = {
         id: id,
         name: name,
         type: 'file',
         ... this.multiple ? { multiple: '' } : {}
      }

      let element: NodeCore = new NodeCore('input', attributes)

      return element
   }

   set multiple(value: boolean) {
      this._multiple = value
   }

   get multiple(): boolean {
      return this._multiple
   }

}