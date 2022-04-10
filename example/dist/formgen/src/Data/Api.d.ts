import { DataAbstract } from "../DataAbstract";
export declare class Api extends DataAbstract {
    private _url;
    private _type;
    private _contentType;
    private _charset;
    private _id;
    constructor(config: any);
    getDefaultConfig(): {};
    private ajaxSettings;
    private ajax;
    post(): Promise<any>;
    put(): Promise<any>;
    delete(): Promise<any>;
    init(): Promise<any>;
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
}
