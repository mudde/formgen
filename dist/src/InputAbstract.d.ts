import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/ObserverPattern/SubjectAbstract";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverPattern/ObserverAbstract";
import { HandlerInterface } from "mudde-core/src/Core/ChainOfResponsibility/HandlerInterface";
import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { Form } from "./Form";
import { Event } from 'mudde-core/src/Core/ObserverPattern/Event';
import { ValidationAbstract } from './ValidationAbstract';
import { DataAbstract } from './DataAbstract';
declare const InputAbstract_base: import("ts-mixer/dist/types/types").Class<any[], ConfigurableAbstract & SubjectAbstract & ObserverAbstract, typeof ConfigurableAbstract & typeof SubjectAbstract & typeof ObserverAbstract, false>;
export declare abstract class InputAbstract extends InputAbstract_base {
    static readonly EVENT_INPUT_PRE_CONFIGURE = 1;
    static readonly EVENT_INPUT_POST_CONFIGURE = 2;
    static readonly EVENT_INPUT_FINISHED = 4;
    static readonly EVENT_INPUT_PRE_CHANGE = 8;
    static readonly EVENT_INPUT_POST_CHANGE = 16;
    private __type;
    private _id;
    private _label;
    private _help;
    private _placeholder;
    private _panel;
    private _unique;
    private _input;
    private _autofocus;
    private _hidden;
    private _require;
    private _readonly;
    private _multilingual;
    private _handlerBuilders?;
    private _handlerValidations?;
    private _form?;
    private _data?;
    private _coreHTMLElements;
    private _extraJs;
    private _handleDataEvent;
    private _updateDataEvent;
    constructor(form: Form, data: DataAbstract);
    configuring(config: any): void;
    private init;
    abstract coreHTMLInput(id: string, name: string, language: string): NodeCore<HTMLInputElement>;
    abstract setValue(value: any): void;
    abstract getValue(): any;
    abstract addValue(key: string, value: any): void;
    protected preCoreHTMLInput(): NodeCore | null;
    protected preHTMLInput(): NodeCore | null;
    protected postCoreHTMLInput(): NodeCore | null;
    protected postHTMLInput(): NodeCore | null;
    protected javascript(): void;
    protected canBeMultilingual(): boolean;
    update(event: Event): void;
    getDefaultConfig(): {
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
    private configureId;
    private configureBuilders;
    private configureValidations;
    appendNode(tagName: string, attributes: any, text?: string): void;
    setAttributes(value: any): void;
    render(): NodeCore;
    get isMultilingual(): boolean;
    get extraJs(): CallableFunction;
    set extraJs(extraJs: CallableFunction);
    set id(value: string);
    get id(): string;
    set input(value: boolean);
    get input(): boolean;
    set _type(value: string);
    get _type(): string;
    set label(value: string);
    get label(): string;
    set help(value: string);
    get help(): string;
    set unique(value: boolean);
    get unique(): boolean;
    set handler(value: HandlerInterface);
    get handler(): HandlerInterface;
    set autofocus(value: boolean);
    get autofocus(): boolean;
    set hidden(value: boolean);
    get hidden(): boolean;
    set require(value: boolean);
    get require(): boolean;
    set readonly(value: boolean);
    get readonly(): boolean;
    set multilingual(value: boolean);
    get multilingual(): boolean;
    set form(value: Form);
    get form(): Form;
    set placeholder(value: string);
    get placeholder(): string;
    set panel(value: string);
    get panel(): string;
    get coreHTMLElements(): NodeCore[];
    set coreHTMLElements(value: NodeCore[]);
    get hasValidations(): boolean;
    get validations(): ValidationAbstract;
}
export {};
