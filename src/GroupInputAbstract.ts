import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { DataAbstract } from "./DataAbstract";
import { StringHelper } from "mudde-core/src/Helper/StringHelper"
import { Array } from "./Data/Array";
import { InputAbstract } from "./InputAbstract";

export abstract class GroupInputAbstract extends InputAbstract {

   private _buildData: DataAbstract = new Array({ data: [] })
   private _currentData: any = {}

   abstract coreHTMLInput(id: string, name: string, language: string): NodeCore

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
         data: new Array({ data: [] })
      }
   }

   configureData(config: Object[]): void {
      let type = StringHelper.ucFirst(config['_type'])
      let className = window['MuddeFormgen'].Data[type]
      let object: DataAbstract = new className(config, this)

      this._buildData = object
   }

   render(): NodeCore {
      let mainId = this.id
      let isMultilingual: boolean = this.isMultilingual
      let languages: string[] = isMultilingual ? this.form.languages : [this.form.languages[0]]
      let output = new NodeCore('div', {})
      let ids: NodeCore[] = this.coreHTMLElements = []

      output.appendElement(this.preCoreHTMLInput())

      this._buildData.forEach(data => {
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

   set buildData(value: DataAbstract) {
      this._buildData = value
   }

   get buildData(): DataAbstract {
      return this._buildData
   }

   set currentData(value: any) {
      this._currentData = value
   }

   get currentData(): any {
      return this._currentData
   }
}