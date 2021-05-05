///<amd-module name='Mudde/Form/DataAbstract'/>

import ConfigurableAbstract from "Mudde/Core/ConfigurableAbstract";
import Event from "Mudde/Core/Event";
import DataEvent from "Mudde/Form/DataEvent";
import Form from "Mudde/Form/Form";
import ObserverInterface from "Mudde/Core/ObserverInterface";
import SubjectInterface from "Mudde/Core/SubjectInterface";

export default abstract class DataAbstract extends ConfigurableAbstract implements SubjectInterface {

   static readonly DATA_PRE_SET = 1;
   static readonly DATA_POST_SET = 2;

   static readonly DATA_PRE_GET = 4;
   static readonly DATA_POST_GET = 8;

   private _form?: Form
   private _observers: any = {}
   protected _data: [] = []
   protected _originalData: [] = []

   constructor(form?: Form) {
      super()
      this._form = form
   }

   getDefaultConfig(): {} {
      return {
         data: [],
         originalData: []
      };
   }

   abstract init()
   abstract process()

   get(id: string): any {
      var event = new DataEvent(this, DataAbstract.DATA_PRE_GET, id)
      this.notify(event)

      let value = this._data[id]

      var event = new DataEvent(this, DataAbstract.DATA_POST_GET, id)
      this.notify(event)

      return value;
   }

   set(id: string, value: any): void {
      var event = new DataEvent(this, DataAbstract.DATA_PRE_SET, id)
      this.notify(event)

      this._data[id] = value

      var event = new DataEvent(this, DataAbstract.DATA_POST_SET, id)
      this.notify(event)
   }

   restore(id: string): any {
      this._data[id] = this._originalData[id]
   }

   attach(observer: ObserverInterface): void {
      let observerList = this._observers;

      if (observerList[observer.eventNumber] === undefined) {
         observerList[observer.eventNumber] = []
      }

      observerList[observer.eventNumber].push(observer)
   }

   detach(observer: ObserverInterface): void {
      let observerList = this._observers[observer.eventNumber];

      if (observerList) {
         observerList.filter(ownObserver => {
            return ownObserver === observer
         })
      }
   }

   notify(event: Event): void {
      let eventNumber = event.eventNumber
      let observerList = this._observers[eventNumber]

      if (observerList) {
         observerList.forEach(observer => {
            observer.update(event)
         })
      }
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

   set data(value: []) {
      this._data = this._originalData = value
   }

   get data(): [] {
      if (this._data === undefined) throw new Error('Data not set!')

      return this._data
   }

}