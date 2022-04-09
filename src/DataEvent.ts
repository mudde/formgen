import {Event} from "mudde-core/src/Core/ObserverPattern/Event";

export class DataEvent extends Event {
   
   private _id?:string
   private _data?:any = undefined

   constructor(source:any, event:number, id:string, data: any = {}){
      super(source, event)
      
      this._id = id
      this._data = data
   }

   get id():string{
      if(this._id === undefined) throw new Error('Id not set!')

      return this._id
   }

   get data(): string{
      if(this._data === undefined) throw new Error('DAta not set!')

      return this._data
   }

}