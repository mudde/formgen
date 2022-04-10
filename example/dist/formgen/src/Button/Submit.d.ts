import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { ButtonAbstract } from "../ButtonAbstract";
import { Form } from "../Form";
export declare class Submit extends ButtonAbstract {
    constructor(config: any, form: Form);
    getDefaultConfig(): {
        label: string;
    };
    click(event: Event): void;
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
}
