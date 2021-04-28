import Node from "../../node_modules/mudde-node/src/node"
import InputAbstract from "../Form/InputAbstract";
import ValidationAbstract from "../Form/ValidationAbstract";

export default class NotEmpty extends ValidationAbstract {

   constructor(config: any) {
      super()
      this.configuring(config)
   }

   coreBuild(output: Node, input: InputAbstract): Node {
      if (!input.require) return output

      var attributes: any = {
         required: ''
      }

      output
         .getElementById(input.id)
         .setAttributes(attributes)

      return output
   }

   coreMultilingualBuild(output: Node, input: InputAbstract, language: string): Node {
      if (!input.require) return output

      var attributes: any = {
         required: ''
      }

      output
         .getElementById(`${input.id}[${language}]`)
         .setAttributes(attributes)

      return output
   }

   getDefaultConfig() {
      return {}
   }

}