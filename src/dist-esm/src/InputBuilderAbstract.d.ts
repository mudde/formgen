import NodeCore from "../node_modules/mudde-core/src/Mudde/Core/NodeCore";
import BuilderAbstract from "./BuilderAbstract";
import CoreBuildInterface from "./CoreBuildInterface";
export abstract class InputBuilderAbstract extends BuilderAbstract implements CoreBuildInterface {
    abstract coreBuild(output: NodeCore): void;
    handle(data: any): any;
}
