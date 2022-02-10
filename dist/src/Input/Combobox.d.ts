import { NodeCore } from "../../node_modules/mudde-core/src/Core/NodeCore";
import { Form } from "../Form";
import { InputAbstract } from "../InputAbstract";
import { DataAbstract } from "../DataAbstract";
import { Array } from "../Data/Array";
export declare class Combobox extends InputAbstract {
    private _multiple;
    private _data;
    constructor(config: any, form: Form);
    getDefaultConfig(): {
        multiple: boolean;
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
    configureData(config: Object[]): void;
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
    set multiple(value: boolean);
    get multiple(): boolean;
    set data(value: DataAbstract);
    get data(): DataAbstract;
}
