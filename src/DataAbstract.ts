import { Mixin } from 'ts-mixer';
import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/ObserverPattern/SubjectAbstract";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverPattern/ObserverAbstract";
import { Event } from 'mudde-core/src/Core/ObserverPattern/Event';
import { DataEvent } from './DataEvent';

export abstract class DataAbstract extends Mixin(ConfigurableAbstract, SubjectAbstract, ObserverAbstract) {

   static readonly DATA_PRE_SET = 1;
   static readonly DATA_POST_SET = 2;
   static readonly DATA_PRE_GET = 4;
   static readonly DATA_POST_GET = 8;
   static readonly DATA_FINALLY = 16;
   static readonly DATA_ERROR = 32;

   protected _data: any[] = []
   protected _originalData: any[] = []

   abstract post():Promise<any>
   abstract put():Promise<any>
   abstract delete():Promise<any>

   getDefaultConfig(): {} {
      return {
         data: [],
         originalData: []
      };
   }

   configuring(config: any): void {
      super.configuring(config)
      this.init().then((data) => {
         this.notify(new DataEvent(this,DataAbstract.DATA_POST_GET,null))
         this.process(data)
         this.notify(new DataEvent(this,DataAbstract.DATA_POST_SET,null))
      }).catch((error)=>{
         this.notify(new DataEvent(this,DataAbstract.DATA_ERROR,null))
         this.error(error)
      }).finally(() => {
         this.notify(new DataEvent(this,DataAbstract.DATA_FINALLY,null))
         this.finished()
      })
   }

   /** @override */
   init(): Promise<any> {
      return new Promise((resolve, reject) => {
         resolve
      });
   }

   /** @override */
   process(data: any) {
      this._originalData = data
   }

   /** @override */
   error(error) {
      this._originalData = null
      throw new Error(error)
   }

   /** @override */
   finished() {
   }

   /** @override */
   update(event: Event) {
   }

   get(id: string): any {
      this.notify(new DataEvent(this,DataAbstract.DATA_PRE_GET,id))

      let value = this._data[id]

      this.notify(new DataEvent(this,DataAbstract.DATA_POST_GET,id))

      return value;
   }

   set(id: string, value: any): void {
      this.notify(new DataEvent(this,DataAbstract.DATA_PRE_SET,id))

      this._data[id] = value
      
      this.notify(new DataEvent(this,DataAbstract.DATA_POST_SET,id))
      this.notify(new DataEvent(this,DataAbstract.DATA_FINALLY,id))
   }

   restore(id: string): any {
      if (!this._originalData[id]) throw new Error('Id not found to restore!')

      this._data[id] = this._originalData[id]
   }

   forEach(callable: any): DataAbstract {
      this._data.forEach(callable)

      return this
   }

   set data(value: any[]) {
      this._data = this._originalData = value
   }

   get data(): any[] {
      if (this._data === undefined) throw new Error('Data not set!')

      return this._data
   }

   set originalData(value: any[]) {
      this._originalData = value
   }

   get originalData(): any[] {
      if (this._originalData === undefined) throw new Error('Original data not set!')

      return this._originalData
   }

}