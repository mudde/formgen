///<amd-module name='Mudde/Core/HandlerInterface'/>

export default interface HandlerInterface {

  setNext(event: HandlerInterface):HandlerInterface
  handle(data: any):any

}