///<amd-module name='Mudde/Form/ValidationAbstract'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import ConfigurableAbstract from "Mudde/Core/ConfigurableAbstract";
import InputAbstract from "Mudde/Form/InputAbstract";

export default abstract class ValidationAbstract extends ConfigurableAbstract {

   abstract coreBuild(output: Node, input: InputAbstract): Node
   abstract coreMultilingualBuild(output: Node, input: InputAbstract, language:string): Node

}