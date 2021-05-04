///<amd-module name='Mudde/Form/Validation/NotEmpty'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import InputAbstract from "Mudde/Form/InputAbstract";
import ValidationAbstract from "Mudde/Form/ValidationAbstract";

export default class NotEmpty extends ValidationAbstract {

   constructor(config: any) {
      super()
      this.configuring(config)
   }

   coreBuild(output: Node, input: InputAbstract): Node {
      if (!input.require) return output

      let attributes: any = {
         required: ''
      }

      output
         .getElementById(input.id)
         .setAttributes(attributes)

      return output
   }

   coreMultilingualBuild(output: Node, input: InputAbstract, language: string): Node {
      if (!input.require) return output

      let attributes: any = {
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