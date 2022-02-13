import { Mixin } from 'ts-mixer';
import { ConfigurableAbstract } from "mudde-core/src/Core/ConfigurableAbstract";
import { SubjectAbstract } from "mudde-core/src/Core/SubjectAbstract";
import { ObserverAbstract } from "mudde-core/src/Core/ObserverAbstract";
import { Form } from "./Form";
import { Event } from 'mudde-core/src/Core/Event';

export abstract class DataAbstract extends Mixin(ConfigurableAbstract, SubjectAbstract, ObserverAbstract) {

   static readonly DATA_PRE_SET = 1;
   static readonly DATA_POST_SET = 2;

   static readonly DATA_PRE_GET = 4;
   static readonly DATA_POST_GET = 8;
   static readonly DATA_FINALLY = 16;

   private _form?: Form
   protected _data: any[] = []
   protected _originalData: any[] = []

   constructor(form?: Form) {
      super()
      if (form) {
         this._form = form
      }
   }

   getDefaultConfig(): {} {
      return {
         data: [],
         originalData: []
      };
   }

   abstract init()
   abstract process(data)
   
   /** @override */
   update(event: Event) {
      
   }

   get(id: string): any {
      this.notify(this, DataAbstract.DATA_PRE_GET)

      let value = this._data[id]

      this.notify(this, DataAbstract.DATA_POST_GET)

      return value;
   }

   set(id: string, value: any): void {
      this.notify(this, DataAbstract.DATA_PRE_SET)

      this._data[id] = value

      this.notify(this, DataAbstract.DATA_POST_SET)
      this.notify(this, DataAbstract.DATA_FINALLY)
   }

   restore(id: string): any {
      this._data[id] = this._originalData[id]
   }

   forEach(callable: any): DataAbstract {
      this._data.forEach(callable)

      return this
   }

   set form(value: Form) {
      this._form = value
   }

   get form(): Form {
      if (this._form === undefined) throw new Error('Form not set!')

      return this._form
   }

   set data(value: any[]) {
      this._data = this._originalData = value
   }

   get data(): any[] {
      if (this._data === undefined) throw new Error('Data not set!')

      return this._data
   }

}