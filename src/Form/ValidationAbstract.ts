import ConfigurableAbstract from "../Core/ConfigurableAbstract";
import Node from "../../node_modules/mudde-node/src/node"
import InputAbstract from "./InputAbstract";

export default abstract class ValidationAbstract extends ConfigurableAbstract {

   abstract coreBuild(output: Node, input: InputAbstract): Node
   abstract coreMultilingualBuild(output: Node, input: InputAbstract, language:string): Node

}