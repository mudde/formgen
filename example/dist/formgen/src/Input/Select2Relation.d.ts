import { Event } from "mudde-core/src/Core/ObserverPattern/Event";
import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { Combobox } from "./Combobox";
import { Form } from '../Form';
import { DataAbstract } from '../DataAbstract';
export declare class Select2Relation extends Combobox {
    constructor(config: any, form: Form, data: DataAbstract);
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
    update(event: Event): void;
}
