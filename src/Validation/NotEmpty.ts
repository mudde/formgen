import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { ValidationAbstract } from "../ValidationAbstract";

export class NotEmpty extends ValidationAbstract {

   constructor(config: any) {
      super(config)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {}
   }

   coreBuild(output: NodeCore): void {
      let attributes: any = {
         required: true
      }

      this.input.rules = {
         ...this.input.rules,
         ...attributes
      }
   }
}