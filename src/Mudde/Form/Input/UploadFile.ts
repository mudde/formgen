///<amd-module name='Mudde/Form/Input/UploadFile'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import Form from "Mudde/Form/Form"
import InputAbstract from "Mudde/Form/InputAbstract"

export default class UploadFile extends InputAbstract {

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

   coreHTMLInput(id: string, name: string, language: string): Node {
      let attributes: any = {
         id: id,
         name: name,
         type: 'file',
         ... this.multiple ? { multiple: '' } : {}
      }

      let element: Node = new Node('input', attributes)

      return element
   }

   set multiple(value: boolean) {
      this._multiple = value
   }

   get multiple(): boolean {
      return this._multiple
   }

}