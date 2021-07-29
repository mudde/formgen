import { NodeCore } from "../node_modules/mudde-core/src/Core/NodeCore";
import { ConfigurableAbstract } from "../node_modules/mudde-core/src/Core/ConfigurableAbstract";
import { HandlerInterface } from "../node_modules/mudde-core/src/Core/HandlerInterface";
import { CoreBuildInterface } from "./CoreBuildInterface";
import { InputAbstract } from "./InputAbstract";
export declare abstract class ValidationAbstract extends ConfigurableAbstract implements HandlerInterface, CoreBuildInterface {
    private _nextEvent?;
    abstract coreBuild(output: NodeCore): void;
    setNext(event: HandlerInterface): HandlerInterface;
    handle(data: any): any;
    private _input?;
    constructor(input: InputAbstract);
    set input(value: InputAbstract);
    get input(): InputAbstract;
}
