import { DataAbstract } from "../DataAbstract";
import { Form } from "../Form";
export declare class Api extends DataAbstract {
    private _url;
    private _type;
    private _contentType;
    private _charset;
    constructor(config: any, form?: Form);
    getDefaultConfig(): {};
    init(): void;
    process(): void;
    get url(): string;
    set url(value: string);
    get contentType(): string;
    set contentType(value: string);
    get charset(): string;
    set charset(value: string);
    get type(): string;
    set type(value: string);
}
