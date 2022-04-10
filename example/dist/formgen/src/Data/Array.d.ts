import { DataAbstract } from "../DataAbstract";
export declare class Array extends DataAbstract {
    constructor(config: any);
    post(): Promise<any>;
    put(): Promise<any>;
    delete(): Promise<any>;
}
