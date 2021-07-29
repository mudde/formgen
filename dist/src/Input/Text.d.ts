import { NodeCore } from "../../node_modules/mudde-core/src/Core/NodeCore";
import { Form } from "../Form";
import { InputAbstract } from "../InputAbstract";
export declare class Text extends InputAbstract {
    private _mask;
    private _format;
    private _prefix;
    private _suffix;
    private _multiple;
    private _spellcheck;
    constructor(config: any, form: Form);
    protected canBeMultilingual(): boolean;
    getDefaultConfig(): {
        mask: string;
        format: string;
        prefix: string;
        suffix: string;
        multiple: boolean;
        spellcheck: boolean;
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
    set mask(value: string);
    get mask(): string;
    set format(value: string);
    get format(): string;
    set prefix(value: string);
    get prefix(): string;
    set suffix(value: string);
    get suffix(): string;
    set multiple(value: boolean);
    get multiple(): boolean;
    set spellcheck(value: boolean);
    get spellcheck(): boolean;
}
