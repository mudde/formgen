import { NodeCore } from "../../node_modules/mudde-core/src/Core/NodeCore"
import {ValidationAbstract} from "../ValidationAbstract";

export class Length extends ValidationAbstract {

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

   coreBuild(output: NodeCore): void {
      let attributes: any = {
         ... this.min > 0 ? { minlength: this.min } : {},
         ... this.max > 0 ? { maxlength: this.max } : {}
      }

      this.input.rules = {
         ...this.input.rules,
         ...attributes
      }
   }

   onchange(event: Event) {

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