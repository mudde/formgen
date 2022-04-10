import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { Form } from "../Form";
import { InputAbstract } from "../InputAbstract";
import { DataAbstract } from "../DataAbstract";
import { Array } from "../Data/Array";
export declare class Combobox extends InputAbstract {
    private _multiple;
    private _inputData;
    getDefaultConfig(): {
        inputData: Array;
        multiple: boolean;
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
    constructor(config: any, form: Form, data: DataAbstract);
    private configureInputData;
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
    setValue(values: any): void;
    getValue(): any;
    addValue(key: string, value: any): void;
    set multiple(value: boolean);
    get multiple(): boolean;
    set inputData(value: DataAbstract);
    get inputData(): DataAbstract;
}
