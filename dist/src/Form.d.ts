import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { HandlerInterface } from "mudde-core/src/Core/HandlerInterface";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/SubjectAbstract";
import { Event } from "mudde-core/src/Core/Event";
import { ButtonAbstract } from "./ButtonAbstract";
import { DataAbstract } from "./DataAbstract";
import { InputAbstract } from "./InputAbstract";
declare const Form_base: import("ts-mixer/dist/types/types").Class<any[], ConfigurableAbstract & SubjectAbstract & ObserverAbstract, typeof ConfigurableAbstract & typeof SubjectAbstract & typeof ObserverAbstract, false>;
export declare class Form extends Form_base {
    static readonly EVENT_FORM_PRE_CONFIGURE = 1;
    static readonly EVENT_FORM_POST_CONFIGURE = 2;
    static readonly EVENT_FORM_PRE_RENDER = 4;
    static readonly EVENT_FORM_POST_RENDER = 8;
    static readonly EVENT_FORM_FINISHED = 16;
    private _id;
    private _languages;
    private _fields;
    private _buttons;
    private _form?;
    private _rootForm?;
    private _data?;
    private _builder?;
    private _panels;
    private _additionalJs;
    private _validations;
    private _method;
    private _action;
    static _validatorDefaults: any;
    private _formValidation;
    static _forms: Form[];
    constructor(config: any);
    getDefaultConfig(): any;
    private configureFields;
    private configureButtons;
    private configureBuilder;
    private configureData;
    static getFormById(id: string): Form | null;
    render(): Promise<NodeCore>;
    private handleXtraJs;
    private formExtraJS;
    private initPanel;
    private addButtons;
    private addFields;
    update(event: Event): void;
    set id(value: string);
    get id(): string;
    get panels(): any;
    set panels(value: any);
    set languages(value: string[]);
    get languages(): string[];
    set fields(value: InputAbstract[]);
    get fields(): InputAbstract[];
    set buttons(value: ButtonAbstract[]);
    get buttons(): ButtonAbstract[];
    set form(value: NodeCore);
    get form(): NodeCore;
    set rootForm(value: Form);
    get rootForm(): Form;
    set builder(value: HandlerInterface);
    get builder(): HandlerInterface;
    get additionalJs(): Promise<void>[];
    set additionalJs(value: Promise<void>[]);
    get data(): DataAbstract;
    set data(value: DataAbstract);
    get method(): string;
    set method(value: string);
    get action(): string;
    set action(value: string);
}
export {};
