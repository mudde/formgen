import Node from "../../node_modules/mudde-node/src/node"
import Form from "../Form/Form"
import InputAbstract from "../Form/InputAbstract"

export default class File extends InputAbstract {

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
      var attributes: any = {
         id: id,
         name: name,
         type: 'file',
      }

      if (this.multiple) {
         attributes = { ...attributes, multiple: '' }
      }

      var element: Node = new Node('input', attributes)

      return element
   }

   set multiple(value: boolean) {
      this._multiple = value
   }

   get multiple(): boolean {
      return this._multiple
   }

}