import { Event } from "mudde-core/src/Core/ObserverPattern/Event";
export declare class DataEvent extends Event {
    private _id?;
    constructor(source: any, event: number, id: string);
    get id(): string;
}
