import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { DataAbstract } from "./DataAbstract";
import { Array } from "./Data/Array";
import { InputAbstract } from "./InputAbstract";
export declare abstract class GroupInputAbstract extends InputAbstract {
    private _buildData;
    private _currentData;
    abstract coreHTMLInput(id: string, name: string, language: string): NodeCore;
    getDefaultConfig(): {
        data: Array;
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
    configureInputData(config: Object[]): void;
    render(): NodeCore;
    set buildData(value: DataAbstract);
    get buildData(): DataAbstract;
    set currentData(value: any);
    get currentData(): any;
}
