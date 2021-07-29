import Event from "../node_modules/mudde-core/src/Core/Event";
export class DataEvent extends Event {
    private _id?;
    constructor(source: any, event: number, id: string);
    get id(): string;
}
