import { HandlerInterface } from "mudde-core/src/Core/HandlerInterface";
import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { InputAbstract } from "./InputAbstract";

export abstract class ValidationAbstract extends ConfigurableAbstract implements HandlerInterface {

  protected _input: InputAbstract
  private _handler: HandlerInterface

  constructor(input: InputAbstract, config: any) {
    super()
    this._input = input
  }

  abstract handler(data: any)

  setNext(event: HandlerInterface): HandlerInterface {
    if (this._handler) {
      this._handler.setNext(event)
    } else {
      this._handler = event
    }

    return this._handler
  }

  handle(data: any = {}) {
    this.handler(data)

    if (this._handler) {
      this._handler.handle(data)
    }
    
    return data
  }

}