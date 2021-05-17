///<amd-module name='Mudde/Core/CoreBuildInterface'/>

import Node from "mudde-node/src/Mudde/Core/Node";

export default interface CoreBuildInterface {

  coreBuild(output: Node, id:string, name:string, language:string): Node
   
}