import { DataAbstract } from "../DataAbstract";
import { Form } from "../Form";
export declare class Api extends DataAbstract {
    private _url;
    private _type;
    private _contentType;
    private _charset;
    private _id;
    private _processItem;
    private _done;
    private _fail;
    constructor(config: any, form?: Form);
    getDefaultConfig(): {};
    init(): boolean;
    process(): void;
    get url(): string;
    set url(value: string);
    get contentType(): string;
    set contentType(value: string);
    get charset(): string;
    set charset(value: string);
    get type(): string;
    set type(value: string);
    get id(): string;
    set id(value: string);
    get processItem(): any;
    set processItem(value: any);
    get fail(): any;
    set fail(value: any);
    get done(): any;
    set done(value: any);
}
