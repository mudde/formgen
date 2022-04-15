import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { Form } from "../Form"
import { InputAbstract } from "../InputAbstract"
import { DataAbstract } from "../DataAbstract"
import { Array } from "../Data/Array"
import { StringHelper } from "mudde-core/src/Helper/StringHelper"
import { DataEvent } from "../DataEvent"
import { Api } from "../Data"

export class Combobox extends InputAbstract {

   private _multiple: boolean = false
   private _inputData: DataAbstract

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
         inputData: new Array({ data: [] }),
         multiple: false,
      }
   }

   constructor(config: any, form: Form, data: DataAbstract) {
      super(form, data)

      this.configuring(config)

      let inputData = this.inputData
      let id_prefix = inputData instanceof Api ? `/${inputData.url}/` : ''
      let id = this.id.split('_')[1]

      this.form.attach(Form.EVENT_FORM_PRE_POST, event => {
         let data2 = event.source

         data2[id] = id_prefix + data2[id]
      })
   }

   private configureInputData(rawData: any) {
      let main = this
      let type = StringHelper.ucFirst(rawData['_type'])
      let className = window['MuddeFormgen'].Data[type]
      let inputData = this._inputData = rawData instanceof DataAbstract ? rawData : new className(rawData, main)

      inputData.attach(DataAbstract.DATA_POST_SET, (event: DataEvent) => {
         let data: any = event.data
         main.addValue(data.id, data.name ?? data.title ?? 'No title :(')
      })
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let element: NodeCore = new NodeCore('select', {
         id: id,
         name: name,
         ...this.placeholder ? { placeholder: this.placeholder } : {},
         ...this.multiple === true ? { 'multiple': '' } : {}
      })

      this.multiple || element.appendNode('option', { value: '' }, '')

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
      let data = this.coreHTMLElements.map(item => {
         return $(item.root).find(':selected').val()
      })

      return this.multiple ? data : data[0]
   }

   addValue(key: string, value: any): void {
      this.appendNode('option', { value: key }, value)
   }

   set multiple(value: boolean) {
      this._multiple = value
   }

   get multiple(): boolean {
      return this._multiple
   }

   set inputData(value: DataAbstract) {
      this._inputData = value
   }

   get inputData(): DataAbstract {
      return this._inputData
   }
}