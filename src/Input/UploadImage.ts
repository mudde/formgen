import { NodeCore } from "mudde-core/src/Core/NodeCore"
import { DataAbstract } from "../DataAbstract"
import {Form} from "../Form"
import {InputAbstract} from "../InputAbstract"

export class UploadImage extends InputAbstract {

   private _multiple: boolean = false
   private _accept: string = ''

   constructor(config: any, form: Form, data: DataAbstract) {
      super(form,data)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
         accept: 'image/x-png, image/gif, image/jpeg',
         multiple: false,
      }
   }

   protected postCoreHTMLInput(): NodeCore {
      return new NodeCore('b', {},'Hello')
   }

   coreHTMLInput(id: string, name: string, language: string): NodeCore {
      let attributes: any = {
         id: id,
         name: name,
         type: 'file',
         accept: this.accept,
         ... this.multiple ? { multiple: '' } : {}
      }

      // todo  Add JS to show and edit images!  Gr.O.M.
      //  var img = document.createElement('img'); 
      //  img.setAttribute('src', URL.createObjectURL(temp1.files[0])); 
      //  document.getElementById('fileimage').parentNode.appendChild(img)

      let element: NodeCore = new NodeCore('input', attributes)

      return element
   }
   setValue(value:any): void {

   }
   getValue(): any{
      
   }
   addValue(key: string, value: any): void {
      
   }

   set multiple(value: boolean) {
      this._multiple = value
   }

   get multiple(): boolean {
      return this._multiple
   }

   set accept(value: string) {
      this._accept = value
   }

   get accept(): string {
      return this._accept
   }
}