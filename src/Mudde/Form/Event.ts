///<amd-module name='Mudde/Form/Event'/>

export default class Event {
   
   private _source?:any
   private _eventNumber?:number

   constructor(source:any, event:number){
      this._source = source
      this._eventNumber = event
   }

   get source():any{
      if(this._source === undefined) throw new Error('Source not set!')

      return this._source
   }

   get eventNumber():number{
      if(this._eventNumber === undefined) throw new Error('Event number not set!')
      
      return this._eventNumber
   }

}