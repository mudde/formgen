import { DataAbstract } from "../DataAbstract";
import { Form } from "../Form";
import $ from "jquery";

export class Api extends DataAbstract {

   private _url: string = ''
   private _type: string = ''
   private _contentType: string = ''
   private _charset: string = ''
   private _id: string = ''
   private _processItem: CallableFunction
   private _done: any
   private _fail: any

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
         done: (data) => {
            this._originalData = this._data = data
         },
         fail: (error) => {
            throw new Error(error.statusText);
         },
         ...super.getDefaultConfig()
      }
   }

   init(): boolean {
      $.ajax({
         url: this.url,
         type: this.type,
         contentType: this.contentType + this.charset ? '; charset=' + this.charset : '',
      }).then(this.done, this.fail)
      console.debug('ascsadvklubnedftrblkinadfb')
      
      return false;
   }

   process(data) {
      
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

   get processItem(): any {
      return this._processItem;
   }

   set processItem(value: any) {
      this._processItem = value;
   }

   get fail(): any {
      return this._fail;
   }

   set fail(value: any) {
      this._fail = value;
   }

   get done(): any {
      return this._done;
   }

   set done(value: any) {
      this._done = value;
   }
}