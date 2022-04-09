import { DataAbstract } from "../DataAbstract";

export class Array extends DataAbstract {

   constructor(config: any) {
      super()
      this.configuring(config)
   }

   post(): Promise<any> {
      return new Promise((resolve, reject) => {
         resolve
      })
   }

   put(): Promise<any> {
      return new Promise((resolve, reject) => {
         resolve
      })
   }

   delete(): Promise<any> {
      let main = this
      
      return new Promise((resolve, reject) => {
         main._data = []
         resolve
      })
   }

}