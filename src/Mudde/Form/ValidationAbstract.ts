import NodeCore from "../../../node_modules/mudde-core/src/Mudde/Core/NodeCore";
import ConfigurableAbstract from "../../../node_modules/mudde-core/src/Mudde/Core/ConfigurableAbstract";
import HandlerInterface from "../../../node_modules/mudde-core/src/Mudde/Core/HandlerInterface";
import CoreBuildInterface from "./CoreBuildInterface";
import InputAbstract from "./InputAbstract";

export default abstract class ValidationAbstract extends ConfigurableAbstract implements HandlerInterface, CoreBuildInterface {

  private _nextEvent?: HandlerInterface

  abstract coreBuild(output: NodeCore): void

  setNext(event: HandlerInterface): HandlerInterface {
    this._nextEvent = event

    return event
  }

  handle(data: any) {
    if (this._nextEvent) {
      this._nextEvent.handle(data)
    }

    this.coreBuild(data)

    return data
  }

  //  todo  mixin from BuilderAbstract  Gr.O.M.
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
  //  todo  end mixin from BuilderAbstract  Gr.O.M.
}