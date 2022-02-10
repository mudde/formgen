import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { Form } from "../Form";
import { GroupInputAbstract } from "../GroupInputAbstract";
export declare class RadioOrElse extends GroupInputAbstract {
    constructor(config: any, form: Form);
    getDefaultConfig(): {
        data: import("../Data").Array;
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
}
