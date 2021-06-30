import NodeCore from "mudde-node/src/NodeCore"
import BuilderAbstract from "Mudde/Form/BuilderAbstract";
import CoreBuildInterface from "./CoreBuildInterface";

export default abstract class InputBuilderAbstract extends BuilderAbstract implements CoreBuildInterface {

   abstract coreBuild(output: NodeCore): void
   
   handle(data: any) {
      if (this.nextEvent) {
        this.nextEvent.handle(data)
      }
  
      this.coreBuild(data)

      return data
    }   

}