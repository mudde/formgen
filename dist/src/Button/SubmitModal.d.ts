import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { ButtonAbstract } from "../ButtonAbstract";
import { Form } from "../Form";
export declare class SubmitModal extends ButtonAbstract {
    originalForm: Form;
    uri: string;
    fieldId: string;
    constructor(config: any, form: Form);
    getDefaultConfig(): {
        label: string;
        originalForm: any;
        uri: string;
        fieldId: string;
    };
    click(event: any): boolean;
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
}
