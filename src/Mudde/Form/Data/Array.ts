///<amd-module name='Mudde/Form/Data/Array'/>

import DataAbstract from "Mudde/Form/DataAbstract";
import DataEvent from "Mudde/Form/DataEvent";
import Form from "Mudde/Form/Form";

export default class Array extends DataAbstract {

   private _data: any = {}
   private _currentData: any = {}

   constructor(config: any, form: Form) {
      super(form)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         data: {}
      }
   }

   update() {

   }

   connect(): void {
   }

   restore(id: string): any {
      this._currentData[id] = this._data[id]
   }

   get(id: string): any {
      var event = new DataEvent(this, DataAbstract.DATA_PRE_GET, id)
      this.notify(event)

      var value = this._currentData[id] ? this._currentData[id] : this._data[id]

      var event = new DataEvent(this, DataAbstract.DATA_POST_GET, id)
      this.notify(event)

      return value;
   }

   set(id: string, value: any): void {
      var event = new DataEvent(this, DataAbstract.DATA_PRE_SET, id)
      this.notify(event)

      this._currentData[id] = value

      var event = new DataEvent(this, DataAbstract.DATA_POST_SET, id)
      this.notify(event)
   }

}