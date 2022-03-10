import { InputAbstract } from "../InputAbstract";
import { ValidationAbstract } from "../ValidationAbstract";
export declare class Length extends ValidationAbstract {
    private _min;
    private _max;
    constructor(input: InputAbstract, config: any);
    getDefaultConfig(): {
        min: number;
        max: number;
    };
    handler(output: any): {};
    get min(): number;
    set min(value: number);
    get max(): number;
    set max(value: number);
}
