///<amd-module name='Mudde/Form/DataAbstract'/>

import ConfigurableAbstract from "Mudde/Core/ConfigurableAbstract";
import Event from "Mudde/Core/Event";
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

   constructor(form: Form) {
      super()
      this.form = form
   }

   abstract connect(): void
   abstract restore(id: string): void
   abstract update(): any
   abstract set(id: string, value: any): void

   attach(observer: ObserverInterface): void {
      var observerList = this._observers;
      
      if (observerList[observer.eventNumber] === undefined) {
         observerList[observer.eventNumber] = []
      }

      observerList[observer.eventNumber].push(observer)
   }

   detach(observer: ObserverInterface): void {
      var observerList = this._observers[observer.eventNumber];

      if (observerList) {
         observerList.filter(ownObserver => {
            return ownObserver === observer
         })
      }
   }

   notify(event:Event): void {
      var eventNumber = event.eventNumber
      var observerList = this._observers[eventNumber]
      
      if (observerList) {
         observerList.forEach(observer => {
            observer.update(event)
         })
      }
   }

   set form(value: Form) {
      this._form = value
   }

   get form(): Form {
      if (this._form === undefined) throw new Error('Form not set!')

      return this._form
   }

}