import { DataAbstract } from "../DataAbstract";

export class Api extends DataAbstract {

   private _url: string = ''
   private _type: string = ''
   private _contentType: string = ''
   private _charset: string = ''
   private _id: string = ''

   constructor(config: any) {
      super()
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

   private ajaxSettings(method: string = 'get'): any {
      var settings = {
         contentType: this.contentType + (this.charset ? '; charset=' + this.charset : ''),
         url: this.url,
         type: method,
         dataType: "json"
      }

      if (method == 'post') {
         settings['data'] = JSON.stringify(this._data)
      }

      console.debug(settings)

      return settings
   }

   private ajax(method: string | any): Promise<any> {
      let settings = typeof method == 'string'
         ? this.ajaxSettings(method)
         : method

      return new Promise(function (resolve, reject) {
         jQuery.ajax(settings).done((data) => { resolve(data) }).fail((error) => { reject(error) });
      });
   }

   post(): Promise<any> {
      return this.ajax('post')
   }

   put(): Promise<any> {
      return this.ajax('put')
   }

   delete(): Promise<any> {
      return this.ajax('delete')
   }

   init(): Promise<any> {
      var settings = this.ajaxSettings(this.type);

      return this.ajax(settings)
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

   get id(): string {
      return this._id;
   }

   set id(value: string) {
      this._id = value;
   }

}