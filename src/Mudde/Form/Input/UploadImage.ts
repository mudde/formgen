///<amd-module name='Mudde/Form/Input/UploadImage'/>

import Node from "mudde-node/src/Mudde/Core/Node"
import Form from "Mudde/Form/Form"
import InputAbstract from "Mudde/Form/InputAbstract"

export default class UploadImage extends InputAbstract {

   private _multiple: boolean = false
   private _accept: string = ''

   constructor(config: any, form: Form) {
      super(form)
      this.configuring(config)
   }

   getDefaultConfig() {
      return {
         ...super.getDefaultConfig(),
         accept: 'image/x-png, image/gif, image/jpeg',
         multiple: false,
      }
   }

   protected postCoreHTMLInput(item: Node): Node {
      return new Node('b', {},'Hello')
   }

   coreHTMLInput(id: string, name: string, language: string): Node {
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

      let element: Node = new Node('input', attributes)

      return element
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