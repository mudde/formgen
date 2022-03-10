import { InputAbstract } from "../InputAbstract";
import { ValidationAbstract } from "../ValidationAbstract";

export class NotEmpty extends ValidationAbstract {

   constructor(input:InputAbstract, config: any) {
      super(input, config)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {}
   }

   handler(output:any): {} {
      let id = this._input.id
      let attributes: any = {
         required: true
      }

      output[id] = {
         ...output[id],
         ...attributes
      }

      return output;
   }
}