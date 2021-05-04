///<amd-module name='Mudde/Form/ButtonAbstract'/>

import ConfigurableAbstract from "Mudde/Core/ConfigurableAbstract";
import Node from "mudde-node/src/Mudde/Core/Node"
import GuidHelper from "Mudde/Form/Helper/GuidHelper";

export default abstract class ButtonAbstract extends ConfigurableAbstract {

   private __type: string = ''
   private _label: string = ''

   abstract coreHTMLInput(id: string, name: string, language: string): Node

   getDefaultConfig() {
      return {
         label: '',
      }
   }

   render(): Node {
      let output = this.coreHTMLInput(GuidHelper.create().toString(), 'x', 'nl')
      
      return output
   }

   set _type(value: string) {
      this.__type = value
   }

   get _type(): string {
      return this.__type
   }

   set label(value: string) {
      this._label = value
   }

   get label(): string {
      return this._label
   }

}