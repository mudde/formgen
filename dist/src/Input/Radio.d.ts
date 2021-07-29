import NodeCore from "../../node_modules/mudde-core/src/Mudde/Core/NodeCore";
import { Form } from "../Form";
import { GroupInputAbstract } from "../GroupInputAbstract";
export declare class Radio extends GroupInputAbstract {
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
        hidden: boolean;
        multilingual: boolean;
        builders: any[];
    };
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
}
