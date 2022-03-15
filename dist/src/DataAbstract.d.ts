import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/ObserverPattern/SubjectAbstract";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverPattern/ObserverAbstract";
import { Event } from 'mudde-core/src/Core/ObserverPattern/Event';
declare const DataAbstract_base: import("ts-mixer/dist/types/types").Class<any[], ConfigurableAbstract & SubjectAbstract & ObserverAbstract, typeof ConfigurableAbstract & typeof SubjectAbstract & typeof ObserverAbstract, false>;
export declare abstract class DataAbstract extends DataAbstract_base {
    static readonly DATA_PRE_SET = 1;
    static readonly DATA_POST_SET = 2;
    static readonly DATA_PRE_GET = 4;
    static readonly DATA_POST_GET = 8;
    static readonly DATA_FINALLY = 16;
    static readonly DATA_ERROR = 32;
    protected _data: any[];
    protected _originalData: any[];
    abstract post(): Promise<any>;
    abstract put(): Promise<any>;
    abstract delete(): Promise<any>;
    getDefaultConfig(): {};
    configuring(config: any): void;
    /** @override */
    init(): Promise<any>;
    /** @override */
    process(data: any): void;
    /** @override */
    error(error: any): void;
    /** @override */
    finished(): void;
    /** @override */
    update(event: Event): void;
    get(id: string): any;
    set(id: string, value: any): void;
    restore(id: string): any;
    forEach(callable: any): DataAbstract;
    set data(value: any[]);
    get data(): any[];
    set originalData(value: any[]);
    get originalData(): any[];
}
export {};
