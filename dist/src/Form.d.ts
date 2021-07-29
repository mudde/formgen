import { ConfigurableAbstract } from "../node_modules/mudde-core/src/Mudde/Core/ConfigurableAbstract";
import NodeCore from "../node_modules/mudde-core/src/Mudde/Core/NodeCore";
import { ButtonAbstract } from "./ButtonAbstract";
import { InputAbstract } from "./InputAbstract";
import HandlerInterface from "../node_modules/mudde-core/src/Mudde/Core/HandlerInterface";
export declare class Form extends ConfigurableAbstract {
    private _id;
    private _languages;
    private _fields;
    private _buttons;
    private _form?;
    private _data?;
    private _count;
    private _handler?;
    private _handlerCurrent?;
    private _loaded;
    static _forms: Form[];
    constructor(config: any);
    getDefaultConfig(): any;
    private configureFields;
    private configureButtons;
    private configureBuilders;
    private configureData;
    static getFormById(id: string): Form | null;
    render(): NodeCore;
    set id(value: string);
    get id(): string;
    private set count(value);
    private get count();
    get loaded(): boolean;
    set languages(value: string[]);
    get languages(): string[];
    set fields(value: InputAbstract[]);
    get fields(): InputAbstract[];
    set buttons(value: ButtonAbstract[]);
    get buttons(): ButtonAbstract[];
    set form(value: NodeCore);
    get form(): NodeCore;
    set handler(value: HandlerInterface);
    get handler(): HandlerInterface;
}