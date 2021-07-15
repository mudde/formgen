import NodeCore from "../../../../node_modules/mudde-core/src/Mudde/Core/NodeCore"
import ValidationAbstract from "Mudde/Form/ValidationAbstract";

export default class NotEmpty extends ValidationAbstract {

   constructor(config: any) {
      super(config)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {}
   }

   coreBuild(output: NodeCore): void {
      let attributes: any = {
         required: ''
      }

      this.input.coreIds.forEach(element => {
         element.setAttributes(attributes)
      })
   }
}