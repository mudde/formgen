import { BaseHandler } from "mudde-core/src/Core/ChainOfResponsibility/BaseHandler";
import { InputAbstract } from "./InputAbstract";
export declare abstract class BuilderAbstract extends BaseHandler {
    private _input?;
    constructor(input: InputAbstract);
    set input(value: InputAbstract);
    get input(): InputAbstract;
}
