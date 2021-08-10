import { DataAbstract } from "../DataAbstract";
import { Form } from "../Form";
import $ from "jquery";

export class Api extends DataAbstract {

   private _url: string = ''
   private _type: string = '';
   private _contentType: string = '';
   private _charset: string = '';

   constructor(config: any, form?: Form) {
      super(form)
      this.configuring(config)
   }

   getDefaultConfig(): {} {
      return {
         url: '',
         type: 'get',
         contentType: 'application/json',
         charset: 'utf-8',
         ...super.getDefaultConfig()
      }
   }

   init() {
      $.ajax({
         url: this.url,
         type: this.type,
         contentType: this.contentType + '; charset=' + this.charset,
       }).then(
         function fulfillHandler(data) {
           alert(data)
         },
         function rejectHandler(jqXHR, textStatus, errorThrown) {
            alert(textStatus)
         }
       ).catch(function errorHandler(error) {
         alert(error)
       });
   }

   process() {
   }

   get url(): string {
      return this._url;
   }

   set url(value: string) {
      this._url = value;
   }

   get contentType(): string {
      return this._contentType;
   }

   set contentType(value: string) {
      this._contentType = value;
   }

   get charset(): string {
      return this._charset;
   }

   set charset(value: string) {
      this._charset = value;
   }

   get type(): string {
      return this._type;
   }

   set type(value: string) {
      this._type = value;
   }
}