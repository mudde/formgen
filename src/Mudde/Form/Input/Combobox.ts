///<amd-module name='Mudde/Form/Input/Combobox'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import Form from "Mudde/Form/Form"
import InputAbstract from "Mudde/Form/InputAbstract"
import DataAbstract from "Mudde/Form/DataAbstract"
import Array from "../Data/Array"

export default class Combobox extends InputAbstract {

   private _multiple: boolean = false
   private _data: DataAbstract = new Array({ data: [] })

   constructor(config: any, form: Form) {
      super(form)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
         multiple: false,
         data: new Array({ data: [] })
      }
   }

   coreHTMLInput(id: string, name: string, language: string): Node {
      let element: Node = new Node('select', {
         id: id,
         name: name,
         type: 'text',
         placeholder: this.placeholder,
      })

      this._data.forEach(x => {
         element.appendNode('li', { value: x.id }, x.value)
      });

      return element
   }

   set multiple(value: boolean) {
      this._multiple = value
   }

   get multiple(): boolean {
      return this._multiple
   }

   set data(value: DataAbstract) {
      this._data = value
   }

   get data(): DataAbstract {
      return this._data
   }
}