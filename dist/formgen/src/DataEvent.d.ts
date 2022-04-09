import { Event } from "mudde-core/src/Core/ObserverPattern/Event";
export declare class DataEvent extends Event {
    private _id?;
    private _data?;
    constructor(source: any, event: number, id: string, data?: any);
    get id(): string;
    get data(): string;
}
