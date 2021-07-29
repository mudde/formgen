import { NodeCore } from "../node_modules/mudde-core/src/Core/NodeCore";
import { BuilderAbstract } from "./BuilderAbstract";
import { CoreBuildInterface } from "./CoreBuildInterface";
export declare abstract class FormBuilderAbstract extends BuilderAbstract implements CoreBuildInterface {
    abstract coreBuild(output: NodeCore): void;
    handle(data: any): any;
}
