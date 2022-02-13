import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { ValidationAbstract } from "../ValidationAbstract";
export declare class Length extends ValidationAbstract {
    private _min;
    private _max;
    constructor(config: any);
    getDefaultConfig(): {
        min: number;
        max: number;
    };
    coreBuild(output: NodeCore): void;
    onchange(event: Event): void;
    get min(): number;
    set min(value: number);
    get max(): number;
    set max(value: number);
}
