import {ConfigurableAbstract} from "../node_modules/mudde-core/src/Core/ConfigurableAbstract";
import { NodeCore } from "../node_modules/mudde-core/src/Core/NodeCore"
import {GuidHelper} from "../node_modules/mudde-core/src/Helper/GuidHelper";

export abstract class ButtonAbstract extends ConfigurableAbstract {

   private __type: string = ''
   private _label: string = ''

   abstract coreHTMLInput(id: string, name: string, language: string): NodeCore

   getDefaultConfig() {
      return {
         label: '',
      }
   }

   render(): NodeCore {
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