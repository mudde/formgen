import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/ObserverPattern/SubjectAbstract";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverPattern/ObserverAbstract";
import { Event } from 'mudde-core/src/Core/ObserverPattern/Event';
import { StorableInterface } from './StorableInterface';
declare const DataAbstract_base: import("ts-mixer/dist/types/types").Class<any[], ConfigurableAbstract & SubjectAbstract & ObserverAbstract, typeof ConfigurableAbstract & typeof SubjectAbstract & typeof ObserverAbstract, false>;
export declare abstract class DataAbstract extends DataAbstract_base implements StorableInterface {
    static readonly DATA_PRE_SET = 1;
    static readonly DATA_POST_SET = 2;
    static readonly DATA_PRE_GET = 4;
    static readonly DATA_POST_GET = 8;
    static readonly DATA_FINALLY = 16;
    static readonly DATA_ERROR = 32;
    private _data;
    private _originalData;
    private _processItem;
    private _errorItem;
    private _finishedItem;
    abstract post(): Promise<any>;
    abstract put(): Promise<any>;
    abstract delete(): Promise<any>;
    getDefaultConfig(): {};
    init(): void;
    process(data: any): void;
    error(error: any): void;
    finished(): void;
    update(event: Event): void;
    /** @override */
    load(id: string): void;
    get(id: string): any;
    set(id: string, value: any): void;
    restore(id: string): any;
    set data(value: any);
    get data(): any;
    set originalData(value: any[]);
    get originalData(): any[];
    get processItem(): CallableFunction;
    set processItem(value: CallableFunction);
    get errorItem(): CallableFunction;
    set errorItem(value: CallableFunction);
    get finishedItem(): CallableFunction;
    set finishedItem(value: CallableFunction);
}
export {};
