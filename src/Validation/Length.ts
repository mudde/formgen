import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { InputAbstract } from "../InputAbstract";
import { ValidationAbstract } from "../ValidationAbstract";

export class Length extends ValidationAbstract {

   private _min: number = 0
   private _max: number = 0

   constructor(input: InputAbstract, config: any) {
      super(input, config)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         min: 0,
         max: 0
      }
   }

   handler(output: any): {} {
      let id = this._input.id
      let attributes: any = {
         ...this.min > 0 ? { minlength: this.min } : {},
         ...this.max > 0 ? { maxlength: this.max } : {}
      }

      output[id] = {
         ...output[id],
         ...attributes
      }

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