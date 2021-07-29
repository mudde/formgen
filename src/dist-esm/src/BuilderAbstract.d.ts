import BaseHandler from "../node_modules/mudde-core/src/Mudde/Core/BaseHandler";
import InputAbstract from "./InputAbstract";
export abstract class BuilderAbstract extends BaseHandler {
    private _input?;
    constructor(input: InputAbstract);
    set input(value: InputAbstract);
    get input(): InputAbstract;
}
