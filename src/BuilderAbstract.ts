import { BaseHandler } from "mudde-core/src/Core/ChainOfResponsibility/BaseHandler"
import { InputAbstract } from "./InputAbstract"

export abstract class BuilderAbstract extends BaseHandler {

  private _input?: InputAbstract

  constructor(input: InputAbstract) {
    super()
    this._input = input
  }

  set input(value: InputAbstract) {
    this._input = value
  }

  get input(): InputAbstract {
    if (this._input === undefined) throw new Error('Input not set!');

    return this._input
  }


}