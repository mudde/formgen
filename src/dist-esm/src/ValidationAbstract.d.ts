import NodeCore from "../node_modules/mudde-core/src/Mudde/Core/NodeCore";
import { ConfigurableAbstract } from "../node_modules/mudde-core/src/Mudde/Core/ConfigurableAbstract";
import HandlerInterface from "../node_modules/mudde-core/src/Mudde/Core/HandlerInterface";
import CoreBuildInterface from "./CoreBuildInterface";
import InputAbstract from "./InputAbstract";
export abstract class ValidationAbstract extends ConfigurableAbstract implements HandlerInterface, CoreBuildInterface {
    private _nextEvent?;
    abstract coreBuild(output: NodeCore): void;
    setNext(event: HandlerInterface): HandlerInterface;
    handle(data: any): any;
    private _input?;
    constructor(input: InputAbstract);
    set input(value: InputAbstract);
    get input(): InputAbstract;
}
