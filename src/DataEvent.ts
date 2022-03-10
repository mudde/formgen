import {Event} from "mudde-core/src/Core/Event";

export class DataEvent extends Event {
   
   private _id?:string

   constructor(source:any, event:number, id:string){
      super(source,event)
      this._id = id
   }

   get id():string{
      if(this._id === undefined) throw new Error('Id not set!')

      return this._id
   }

}