import Node from "../../node_modules/mudde-node/src/node"
import InputAbstract from "../Form/InputAbstract";
import ValidationAbstract from "../Form/ValidationAbstract";

export default class Length extends ValidationAbstract {

   private _min: number = 0
   private _max: number = 0

   constructor(config: any) {
      super()
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         min: 0,
         max: 0
      }
   }

   coreBuild(output: Node, input: InputAbstract): Node {
      var attributes: any = {}

      if (this.min > 0) {
         attributes = { ...attributes, min: this.min }
      }

      if (this.max > 0) {
         attributes = { ...attributes, max: this.max }
      }

      output
         .getElementById(input.id)
         .setAttributes(attributes)

      return output
   }

   coreMultilingualBuild(output: Node, input: InputAbstract, language: string): Node {
      return this.coreBuild(output, input)
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