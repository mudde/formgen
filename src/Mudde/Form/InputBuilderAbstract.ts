///<amd-module name='Mudde/Form/InputBuilderAbstract'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import BuilderAbstract from "Mudde/Form/BuilderAbstract";
import InputAbstract from "Mudde/Form/InputAbstract";

export default abstract class InputBuilderAbstract extends BuilderAbstract {

   abstract coreBuild(output: Node, input: InputAbstract): Node
   abstract coreMultilingualBuild(output: Node, input: InputAbstract, language:string): Node
   abstract finalBuild(elements: Node[], input: InputAbstract, output:Node): void

}