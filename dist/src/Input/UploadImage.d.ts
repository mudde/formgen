import { NodeCore } from "../../node_modules/mudde-core/src/Core/NodeCore";
import { Form } from "../Form";
import { InputAbstract } from "../InputAbstract";
export declare class UploadImage extends InputAbstract {
    private _multiple;
    private _accept;
    constructor(config: any, form: Form);
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
        hidden: boolean;
        multilingual: boolean;
        builders: any[];
    };
    protected postCoreHTMLInput(): NodeCore;
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
    set multiple(value: boolean);
    get multiple(): boolean;
    set accept(value: string);
    get accept(): string;
}
