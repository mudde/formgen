import { ConfigurableAbstract } from "../node_modules/mudde-core/src/Mudde/Core/ConfigurableAbstract";
import NodeCore from "../node_modules/mudde-core/src/Mudde/Core/NodeCore";
export abstract class ButtonAbstract extends ConfigurableAbstract {
    private __type;
    private _label;
    abstract coreHTMLInput(id: string, name: string, language: string): NodeCore;
    getDefaultConfig(): {
        label: string;
    };
    render(): NodeCore;
    set _type(value: string);
    get _type(): string;
    set label(value: string);
    get label(): string;
}
