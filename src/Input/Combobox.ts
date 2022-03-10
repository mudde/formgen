import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { Form } from "../Form"
import { InputAbstract } from "../InputAbstract"
import { DataAbstract } from "../DataAbstract"
import { Array } from "../Data/Array"
import { StringHelper } from "mudde-core/src/Helper/StringHelper"
import { Event } from "mudde-core/src/Core/Event"

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
      let type: string = StringHelper.ucFirst(config['_type'])
      let className = window['MuddeFormgen'].Data[type]
      let object = this._data = new className(config, this)

      object.attach(DataAbstract.DATA_FINALLY, this)
      object.init()
   }

   update(event: Event): void {
       console.debug(event)
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

      return element
   }

   setValue(values: any): void {
      let setValueFunction = (typeof values == 'string' || typeof values == 'number')
         ? (element: NodeCore) => {
            $('#' + element.id).val(values)
         }
         : (element: NodeCore) => {
            element.removeChildren()
            for (let [key, value] of values) {
               element.appendNode('option', { value: key }, value)
            }
         }

      this.coreHTMLElements.forEach(setValueFunction)
   }

   getValue(): any {
      let values = {}
      let lastValue = null

      this.coreHTMLElements.forEach((value: NodeCore) => {
         lastValue = values[value.id] = value
      })

      return this.multiple ? values : lastValue
   }

   addValue(key: string, value: any): void {
      this.coreHTMLElements.forEach((element: NodeCore) => {
         element.appendNode('option', { value: key }, value)
      })
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