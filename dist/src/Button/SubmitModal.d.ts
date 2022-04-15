import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { ButtonAbstract } from "../ButtonAbstract";
import { Form } from "../Form";
export declare class SubmitModal extends ButtonAbstract {
    parentForm: Form;
    uri: string;
    fieldId: string;
    constructor(config: any, form: Form);
    getDefaultConfig(): {
        label: string;
        parentForm: any;
        uri: string;
        fieldId: string;
    };
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
    click(event: Event): void;
}
