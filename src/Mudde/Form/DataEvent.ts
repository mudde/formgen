import Event from "Mudde/Core/Event";

export default class DataEvent extends Event {
   
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