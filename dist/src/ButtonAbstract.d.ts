import { ConfigurableAbstract } from "../node_modules/mudde-core/src/Core/ConfigurableAbstract";
import { NodeCore } from "../node_modules/mudde-core/src/Core/NodeCore";
import { Form } from "./Form";
export declare abstract class ButtonAbstract extends ConfigurableAbstract {
    private __type;
    private _label;
    private _form?;
    abstract coreHTMLInput(id: string, name: string, language: string): NodeCore;
    constructor(form: Form);
    getDefaultConfig(): {
        label: string;
    };
    render(): NodeCore;
    set _type(value: string);
    get _type(): string;
    set label(value: string);
    get label(): string;
    set form(value: Form);
    get form(): Form;
}
