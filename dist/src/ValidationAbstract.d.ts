import { HandlerInterface } from "mudde-core/src/Core/HandlerInterface";
import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { InputAbstract } from "./InputAbstract";
export declare abstract class ValidationAbstract extends ConfigurableAbstract implements HandlerInterface {
    protected _input: InputAbstract;
    private _handler;
    constructor(input: InputAbstract, config: any);
    abstract handler(data: any): any;
    setNext(event: HandlerInterface): HandlerInterface;
    handle(data?: any): any;
}
