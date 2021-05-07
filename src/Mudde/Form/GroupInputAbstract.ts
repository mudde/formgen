///<amd-module name='Mudde/Form/GroupInputAbstract'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import InputBuilderAbstract from "Mudde/Form/InputBuilderAbstract";
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
      let main = this
      let elements: Node[] = []
      let builders: InputBuilderAbstract[] = this.builders
      let isMultilingual: boolean = this.isMultilingual
      let languages: string[] = isMultilingual ? this.form.languages : [this.form.languages[0]]
      let output = new Node('div', {})

      this.ids = []

      this._data.forEach(data => {
         this.currentData = data
         
         languages.forEach(language => {
            let id: string = isMultilingual ? `${main.id}_${data.id}_${language}` : main.id
            let name: string = isMultilingual ? `${main.id}[${language}]` : main.id
            let object: Node = main.renderBuild(id, name, language)

            elements.push(object)
         })
      })

      builders.forEach(builder => {
         builder.finalBuild(elements, main, output)
      })

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