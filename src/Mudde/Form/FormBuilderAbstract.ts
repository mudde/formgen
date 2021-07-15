import NodeCore from "../../../node_modules/mudde-core/src/Mudde/Core/NodeCore"
import BuilderAbstract from "Mudde/Form/BuilderAbstract";
import CoreBuildInterface from "./CoreBuildInterface";

export default abstract class FormBuilderAbstract extends BuilderAbstract implements CoreBuildInterface {

   abstract coreBuild(output: NodeCore): void
   
   handle(data: any) {
      if (this.nextEvent) {
        this.nextEvent.handle(data)
      }
  
      this.coreBuild(data)

      return data
    }   

}