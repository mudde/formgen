import { DataAbstract } from "../DataAbstract";
import { Form } from "../Form";
export declare class Array extends DataAbstract {
    constructor(config: any, form?: Form);
    getDefaultConfig(): {};
    init(): void;
    process(): void;
}
