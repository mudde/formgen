///<amd-module name='Mudde/Form/Data/Array'/>

import DataAbstract from "Mudde/Form/DataAbstract";
import Form from "Mudde/Form/Form";

export default class Array extends DataAbstract {

   constructor(config: any, form?: Form) {
      super(form)
      this.configuring(config)
   }

   getDefaultConfig(): {} {
      return {
         ...super.getDefaultConfig()
      }
   }

   update() {
   }

   connect() {
   }
}