///<amd-module name='Mudde/Form/ObserverInterface'/>

import Event from "./Event";

export default interface ObserverInterface {

   eventNumber:number

   update(event: Event)
   
}