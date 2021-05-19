///<amd-module name='Mudde/Form/GroupInputAbstract'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import DataAbstract from "./DataAbstract";
import StringHelper from "./Helper/StringHelper"
import Array from "./Data/Array";
import InputAbstract from "./InputAbstract";

export default abstract class GroupInputAbstract extends InputAbstract {

   private _data: DataAbstract = new Array({ data: [] })
   private _currentData: any = {}

   abstract coreHTMLInput(id: string, name: string, language: string): Node

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
         data: new Array({ data: [] })
      }
   }

   configureData(config: Object[]): void {
      let main = this
      let type = StringHelper.ucfirst(config['_type'])

      requirejs(['Mudde/Form/Data/' + type], (className) => {
         let object: DataAbstract = new className.default(config, main)

         main._data = object
      });
   }

   render(): Node {
      let mainId = this.id
      let isMultilingual: boolean = this.isMultilingual
      let languages: string[] = isMultilingual ? this.form.languages : [this.form.languages[0]]
      let output = new Node('div', {})
      let ids: Node[] = this.coreIds = []

      output.appendElement(this.preCoreHTMLInput())

      this._data.forEach(data => {
         this.currentData = data

         languages.forEach(language => {
            let id: string = isMultilingual ? `${mainId}_${language}` : mainId
            let name: string = isMultilingual ? `${mainId}[${language}]` : mainId
            let object: Node = this.coreHTMLInput(id, name, language)

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