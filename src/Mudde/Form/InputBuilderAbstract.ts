///<amd-module name='Mudde/Form/InputBuilderAbstract'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import BuilderAbstract from "Mudde/Form/BuilderAbstract";
import CoreBuildInterface from "./CoreBuildInterface";

export default abstract class InputBuilderAbstract extends BuilderAbstract implements CoreBuildInterface {

   abstract coreBuild(output: Node, id:string, name:string, language:string): Node

}