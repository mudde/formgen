import NodeCore from "../../node_modules/mudde-core/src/Mudde/Core/NodeCore"
import {Form} from "../Form"
import {InputAbstract} from "../InputAbstract"
import {DataAbstract} from "../DataAbstract"
import { Array } from "../Data/Array"
import StringHelper from "../../node_modules/mudde-core/src/Mudde/Helper/StringHelper"

export class Combobox extends InputAbstract {

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

   configureData(config: Object[]): void {
      let main = this
      let type = StringHelper.ucfirst(config['_type'])

      // requirejs(['Mudde/Form/Data/' + type], (className) => {
      //    let object: DataAbstract = new className.default(config, main)

      //    main._data = object
      // });
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = new NodeCore('select', {
         id: id,
         name: name,
         ...this.placeholder ? { placeholder: this.placeholder } : {},
         ...this.multiple === true ? { 'multiple': '' } : {}
      })

      if (this.multiple !== true) {
         element.appendNode('option', { value: null }, '')
      }

      this._data.forEach(dataitem => {
         element.appendNode('option', { value: dataitem.id }, dataitem.value)
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