import { Event } from "mudde-core/src/Core/ObserverPattern/Event";
import { NodeCore } from "mudde-core/src/Core/NodeCore";
import { Combobox } from "./Combobox";
export declare class Select2Relation extends Combobox {
    coreHTMLInput(id: string, name: string, language: string): NodeCore;
    update(event: Event): void;
}
