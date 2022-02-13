import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { ValidationAbstract } from "../ValidationAbstract";
export declare class NotEmpty extends ValidationAbstract {
    constructor(config: any);
    getDefaultConfig(): {};
    coreBuild(output: NodeCore): void;
}
