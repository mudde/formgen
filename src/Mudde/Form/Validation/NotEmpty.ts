///<amd-module name='Mudde/Form/Validation/NotEmpty'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import ValidationAbstract from "Mudde/Form/ValidationAbstract";

export default class NotEmpty extends ValidationAbstract {

   constructor(config: any) {
      super(config)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {}
   }

   coreBuild(output: Node, id: string, name: string, language: string): Node {
      let attributes: any = {
         required: ''
      }

      output
         .getElementById(id)
         .setAttributes(attributes)

      return output
   }
}