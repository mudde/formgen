import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/SubjectAbstract";
import { Form } from "./Form";
declare const DataAbstract_base: import("ts-mixer/dist/types/types").Class<any[], ConfigurableAbstract & SubjectAbstract, typeof ConfigurableAbstract & typeof SubjectAbstract, false>;
export declare abstract class DataAbstract extends DataAbstract_base {
    static readonly DATA_PRE_SET = 1;
    static readonly DATA_POST_SET = 2;
    static readonly DATA_PRE_GET = 4;
    static readonly DATA_POST_GET = 8;
    private _form?;
    protected _data: any[];
    protected _originalData: any[];
    constructor(form?: Form);
    getDefaultConfig(): {};
    abstract init(): any;
    abstract process(): any;
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
