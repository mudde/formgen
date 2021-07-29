import NodeCore from "../../node_modules/mudde-core/src/Mudde/Core/NodeCore";
import { ValidationAbstract } from "../ValidationAbstract";
export declare class NotEmpty extends ValidationAbstract {
    constructor(config: any);
    getDefaultConfig(): {};
    coreBuild(output: NodeCore): void;
}
