import { InputAbstract } from "../InputAbstract";
import { ValidationAbstract } from "../ValidationAbstract";
export declare class NotEmpty extends ValidationAbstract {
    constructor(input: InputAbstract, config: any);
    getDefaultConfig(): {};
    handler(output: any): {};
}
