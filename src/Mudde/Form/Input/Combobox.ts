///<amd-module name='Mudde/Form/Input/Combobox'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import Form from "Mudde/Form/Form"
import InputAbstract from "Mudde/Form/InputAbstract"
import DataAbstract from "Mudde/Form/DataAbstract"
import Array from "../Data/Array"
import FormBuilderAbstract from "../FormBuilderAbstract"
import StringHelper from "../Helper/StringHelper"

export default class Combobox extends InputAbstract {

   private _multiple: boolean = false
   private _data: DataAbstract = new Array({ data: [] })

   constructor(config: any, form: Form) {
      super(form)
      this.configuring(config)

      console.debug(this)
   }

   configureData(config: Object[]): void {
      let main = this
      let type = StringHelper.ucfirst(config['_type'])

      requirejs(['Mudde/Form/Data/' + type], (className) => {
         let object: DataAbstract = new className.default(config, main)

         main._data = object
      });
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
         placeholder: this.placeholder
      })

      element.appendNode('option', { value: null }, '')

      this._data.forEach(x => {
         element.appendNode('option', { value: x.id }, x.value)
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