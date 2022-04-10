import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { DataAbstract } from "../DataAbstract";
import { Form } from "../Form";
import { InputAbstract } from "../InputAbstract";
export declare class UploadImage extends InputAbstract {
    private _multiple;
    private _accept;
    constructor(config: any, form: Form, data: DataAbstract);
    getDefaultConfig(): {
        accept: string;
        multiple: boolean;
        _type: string;
        id: string;
        input: boolean;
        label: string;
        help: string;
        unique: boolean;
        validations: any[];
        placeholder: string;
        panel: any;
        autofocus: boolean;
        require: boolean;
        readonly: boolean;
        hidden: boolean;
        multilingual: boolean;
        builders: any[];
    };
    protected postCoreHTMLInput(): NodeCore;
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
    setValue(value: any): void;
    getValue(): any;
    addValue(key: string, value: any): void;
    set multiple(value: boolean);
    get multiple(): boolean;
    set accept(value: string);
    get accept(): string;
}
