/// <reference types="jquery.validation" />
import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { HandlerInterface } from "mudde-core/src/Core/ChainOfResponsibility/HandlerInterface";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverPattern/ObserverAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/ObserverPattern/SubjectAbstract";
import { Event } from "mudde-core/src/Core/ObserverPattern/Event";
import { ButtonAbstract } from "./ButtonAbstract";
import { DataAbstract } from "./DataAbstract";
import { StorableInterface } from "./StorableInterface";
declare const Form_base: import("ts-mixer/dist/types/types").Class<any[], ConfigurableAbstract & SubjectAbstract & ObserverAbstract, typeof ConfigurableAbstract & typeof SubjectAbstract & typeof ObserverAbstract, false>;
export declare class Form extends Form_base implements StorableInterface {
    static readonly EVENT_FORM_POST_CONFIGURE = 2;
    static readonly EVENT_FORM_PRE_RENDER = 4;
    static readonly EVENT_FORM_POST_RENDER = 8;
    static readonly EVENT_FORM_FINISHED = 16;
    private _id;
    private _data;
    private _languages;
    private _buttons;
    private _builder;
    private _panels;
    private _method;
    private _action;
    private _fields;
    private _form;
    private _rootForm;
    private _validations;
    private _formValidation;
    private _additionalJs;
    static forms: {};
    static validatorDefaults: any;
    getDefaultConfig(): any;
    constructor(config: any);
    private updateForm;
    private configureFields;
    private configureButtons;
    private configureBuilder;
    private configureData;
    static getFormById(id: string): Form | null;
    getFieldById(id: string): any;
    showValidationErrors(): JQueryValidation.ErrorDictionary;
    validate(): boolean;
    post(): Promise<any>;
    getFormData(): any;
    put(): Promise<any>;
    delete(): Promise<any>;
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
    set fields(value: {});
    get fields(): {};
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