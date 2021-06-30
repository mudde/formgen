import DataAbstract from "Mudde/Form/DataAbstract";
import Form from "Mudde/Form/Form";

export default class Array extends DataAbstract {

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