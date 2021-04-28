import Node from "../../node_modules/mudde-node/src/node"
import BuilderAbstract from "./BuilderAbstract";
import InputAbstract from "./InputAbstract";

export default abstract class InputBuilderAbstract extends BuilderAbstract {

   abstract coreBuild(output: Node, input: InputAbstract): Node
   abstract coreMultilingualBuild(output: Node, input: InputAbstract, language:string): Node
   abstract finalBuild(elements: Node[], input: InputAbstract, output:Node): void

}