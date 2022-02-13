import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/SubjectAbstract";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverAbstract";
import { Form } from "./Form";
import { Event } from 'mudde-core/src/Core/Event';
declare const DataAbstract_base: import("ts-mixer/dist/types/types").Class<any[], ConfigurableAbstract & SubjectAbstract & ObserverAbstract, typeof ConfigurableAbstract & typeof SubjectAbstract & typeof ObserverAbstract, false>;
export declare abstract class DataAbstract extends DataAbstract_base {
    static readonly DATA_PRE_SET = 1;
    static readonly DATA_POST_SET = 2;
    static readonly DATA_PRE_GET = 4;
    static readonly DATA_POST_GET = 8;
    static readonly DATA_FINALLY = 16;
    private _form?;
    protected _data: any[];
    protected _originalData: any[];
    constructor(form?: Form);
    getDefaultConfig(): {};
    abstract init(): any;
    abstract process(data: any): any;
    /** @override */
    update(event: Event): void;
    get(id: string): any;
    set(id: string, value: any): void;
    restore(id: string): any;
    forEach(callable: any): DataAbstract;
    set form(value: Form);
    get form(): Form;
    set data(value: any[]);
    get data(): any[];
}
export {};
