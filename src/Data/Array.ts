import {DataAbstract} from "../DataAbstract";
import {Form} from "../Form";

export class Array extends DataAbstract {

   constructor(config: any, form?: Form) {
      form ? super(form) : super()
      this.configuring(config)
   }

   getDefaultConfig(): {} {
      return {
         ...super.getDefaultConfig()
      }
   }

   init() {
   }

   process() {
   }
}