///<amd-module name='Mudde/Form/FormBuilderAbstract'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import BuilderAbstract from "Mudde/Form/BuilderAbstract";
import CoreBuildInterface from "./CoreBuildInterface";

export default abstract class FormBuilderAbstract extends BuilderAbstract implements CoreBuildInterface {

   abstract coreBuild(output: Node): void
   
   handle(data: any) {
      if (this.nextEvent) {
        this.nextEvent.handle(data)
      }
  
      this.coreBuild(data)

      return data
    }   

}