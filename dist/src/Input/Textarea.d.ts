import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { Form } from "../Form";
import { InputAbstract } from "../InputAbstract";
export declare class Textarea extends InputAbstract {
    private _spellcheck;
    constructor(config: any, form: Form);
    getDefaultConfig(): {
        spellcheck: boolean;
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
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
    set spellcheck(value: boolean);
    get spellcheck(): boolean;
}
