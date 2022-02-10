import { NodeCore } from "../../node_modules/mudde-core/src/Core/NodeCore";
import { ButtonAbstract } from "../ButtonAbstract";
import { Form } from "../Form";
export declare class Submit extends ButtonAbstract {
    constructor(config: any, form: Form);
    getDefaultConfig(): {
        label: string;
    };
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
}
