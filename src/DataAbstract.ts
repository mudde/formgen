import { Mixin } from 'ts-mixer';
import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/ObserverPattern/SubjectAbstract";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverPattern/ObserverAbstract";
import { Event } from 'mudde-core/src/Core/ObserverPattern/Event';
import { DataEvent } from './DataEvent';
import { StorableInterface } from './StorableInterface';

export abstract class DataAbstract
   extends Mixin(ConfigurableAbstract, SubjectAbstract, ObserverAbstract)
   implements StorableInterface {

   static readonly DATA_PRE_SET = 1;
   static readonly DATA_POST_SET = 2;
   static readonly DATA_PRE_GET = 4;
   static readonly DATA_POST_GET = 8;
   static readonly DATA_FINALLY = 16;
   static readonly DATA_ERROR = 32;

   private _data: any
   private _originalData: any
   private _processItem: CallableFunction
   private _errorItem: CallableFunction
   private _finishedItem: CallableFunction

   abstract post(): Promise<any>
   abstract put(): Promise<any>
   abstract delete(): Promise<any>

   getDefaultConfig(): {} {
      return {
         data: [],
         originalData: [],
         processItem: (data) => {
            //console.debug(data)
         },
         errorItem: (error) => {
            console.debug(error)
         },
         finishedItem: () => {
         },
      };
   }

   init(): void {
      let data = this.data

      this.process(data)
      this.finished()
   }

   process(data: any) {
      let processItem = this._processItem

      this._originalData = data
      for (const item of data) {
         this.set(item.id, item)
         !processItem || processItem(item)
      }
   }

   error(error) {
      this._originalData = null
      this.notify(new DataEvent(this, DataAbstract.DATA_ERROR, null, null))

      !this._errorItem || this._errorItem(error)

      throw new Error(error)
   }

   finished() {
      this.notify(new DataEvent(this, DataAbstract.DATA_FINALLY, null, this._data))

      !this._finishedItem || this._finishedItem()
   }

   update(event: Event) {
   }

   /** @override */
   load(id: string) { 
      throw new Error('Method not implemented for this data structure.');
   }

   get(id: string): any {
      this.notify(new DataEvent(this, DataAbstract.DATA_PRE_GET, id))

      let value = this._data[id]

      this.notify(new DataEvent(this, DataAbstract.DATA_POST_GET, id))

      return value;
   }

   set(id: string, value: any): void {
      if (value === undefined) return

      this.notify(new DataEvent(this, DataAbstract.DATA_PRE_SET, id, value))

      this._data[id] = value

      this.notify(new DataEvent(this, DataAbstract.DATA_POST_SET, id, value))
   }

   restore(id: string): any {
      if (!this._originalData[id]) throw new Error('Id not found to restore!')

      this._data[id] = this._originalData[id]
   }

   set data(value: any) {
      this._data = value
   }

   get data(): any {
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

   get processItem(): CallableFunction {
      return this._processItem;
   }

   set processItem(value: CallableFunction) {
      this._processItem = value;
   }

   get errorItem(): CallableFunction {
      return this._errorItem;
   }

   set errorItem(value: CallableFunction) {
      this._errorItem = value;
   }

   get finishedItem(): CallableFunction {
      return this._finishedItem;
   }

   set finishedItem(value: CallableFunction) {
      this._finishedItem = value;
   }
}