///<amd-module name='Mudde/Form/Validation/Length'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import ValidationAbstract from "Mudde/Form/ValidationAbstract";

export default class Length extends ValidationAbstract {

   private _min: number = 0
   private _max: number = 0

   constructor(config: any) {
      super(config)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         min: 0,
         max: 0
      }
   }

   coreBuild(output: Node, id: string, name: string, language: string): Node {
      let attributes: any = {
         ... this.min > 0 ? { min: this.min } : {},
         ... this.max > 0 ? { max: this.max } : {}
      }

      output
         .getElementById(id)
         .setAttributes(attributes)

      return output
   }

   get min(): number {
      return this._min
   }

   set min(value: number) {
      this._min = value
   }

   get max(): number {
      return this._max
   }

   set max(value: number) {
      this._max = value
   }

}