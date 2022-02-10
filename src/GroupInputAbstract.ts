import { NodeCore } from "../node_modules/mudde-core/src/Core/NodeCore"
import {DataAbstract} from "./DataAbstract";
import {StringHelper} from "../node_modules/mudde-core/src/Helper/StringHelper"
import {Array} from "./Data/Array";
import {InputAbstract} from "./InputAbstract";

export abstract class GroupInputAbstract extends InputAbstract {

   private _data: DataAbstract = new Array({ data: [] })
   private _currentData: any = {}

   abstract coreHTMLInput(id: string, name: string, language: string): NodeCore

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
         data: new Array({ data: [] })
      }
   }

   configureData(config: Object[]): void {
      let type = StringHelper.ucfirst(config['_type'])
      let className = window['MuddeFormgen'].Data[type]
      let object: DataAbstract = new className(config, this)

      this._data = object
   }

   render(): NodeCore {
      let mainId = this.id
      let isMultilingual: boolean = this.isMultilingual
      let languages: string[] = isMultilingual ? this.form.languages : [this.form.languages[0]]
      let output = new NodeCore('div', {})
      let ids: NodeCore[] = this.coreIds = []

      output.appendElement(this.preCoreHTMLInput())

      this._data.forEach(data => {
         this.currentData = data

         languages.forEach(language => {
            let id: string = isMultilingual ? `${mainId}_${language}` : mainId
            let name: string = isMultilingual ? `${mainId}[${language}]` : mainId
            let object: NodeCore = this.coreHTMLInput(id, name, language)

            ids.push(object)
            output.appendElement_(object)
         })

         output.appendElement(this.postCoreHTMLInput())
      })

      output
         .prependElement(this.preHTMLInput())
         .appendElement(this.postHTMLInput())

      this.handler?.handle(output)

      return output
   }

   set data(value: DataAbstract) {
      this._data = value
   }

   get data(): DataAbstract {
      return this._data
   }

   set currentData(value: any) {
      this._currentData = value
   }

   get currentData(): any {
      return this._currentData
   }
}