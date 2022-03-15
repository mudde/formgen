import { DataAbstract } from "../DataAbstract";

export class Api extends DataAbstract {

   private _url: string = ''
   private _type: string = ''
   private _contentType: string = ''
   private _charset: string = ''
   private _id: string = ''
   private _processItem: CallableFunction
   private _errorItem: CallableFunction
   private _finishedItem: CallableFunction

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
         processItem: (data) => { this._data = data },
         errorItem: (error) => { throw new Error(error.statusText); },
         finishedItem: () => { },
         ...super.getDefaultConfig()
      }
   }

   private ajaxSettings(method: string = 'get'): any {
      var settings = {
         url: this.url,
         method: method,
         type: this.type,
         contentType: this.contentType + (this.charset ? '; charset=' + this.charset : ''),
         data: method !== 'get' ? this.data : null
      }

      return settings
   }

   post(): Promise<any> {
      let settings = this.ajaxSettings('post')

      return new Promise(function (resolve, reject) {
         jQuery.ajax(settings).done(resolve).fail(reject);
      });
   }

   put(): Promise<any> {
      let settings = this.ajaxSettings('put')

      return new Promise(function (resolve, reject) {
         jQuery.ajax(settings).done(resolve).fail(reject);
      });
   }

   delete(): Promise<any> {
      let settings = this.ajaxSettings('delete')

      return new Promise(function (resolve, reject) {
         jQuery.ajax(settings).done(resolve).fail(reject);
      });
   }

   init(): Promise<any> {
      var main = this;
      var settings = {
         url: main.url,
         type: main.type,
         contentType: main.contentType + (main.charset ? '; charset=' + main.charset : ''),
      }

      return new Promise(function (resolve, reject) {
         jQuery.ajax(settings).done(resolve).fail(reject);
      });
   }

   process(data) {
      this._originalData = data
      !this.processItem || this.processItem(data)
   }

   error(error: any) {
      this._originalData = null
      !this.errorItem || this.errorItem(error)
   }

   finished() {
      !this.finishedItem || this.finishedItem()
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

   get processItem(): CallableFunction {
      return this._processItem;
   }

   set processItem(value: CallableFunction) {
      this._processItem = value;
   }

   get errorItem(): CallableFunction {
      return this._errorItem;
   }

   set errorItem(value: CallableFunction) {
      this._errorItem = value;
   }

   get finishedItem(): CallableFunction {
      return this._finishedItem;
   }

   set finishedItem(value: CallableFunction) {
      this._finishedItem = value;
   }

}