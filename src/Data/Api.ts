import { DataAbstract } from "../DataAbstract";

export class Api extends DataAbstract {

   private _url: string = ''
   private _type: string = ''
   private _contentType: string = ''
   private _charset: string = ''
   private _id: string = ''
   private _recordOnly: boolean = false

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
         recordOnly: false,
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

      if (['post', 'put'].indexOf(method) !== -1) {
         settings['data'] = JSON.stringify(this.data)
      }
      if (['put', 'get'].indexOf(method) !== -1 && this.id) {
         settings['url'] = settings['url'] + '/' + this.id
      }

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
      this.id = this.data.id

      return this.ajax('put')
   }

   delete(): Promise<any> {
      return this.ajax('delete')
   }

   get(id: string): Promise<any> | any {
      return parseInt(id) === NaN ? super.get(id) : this.ajax('get')
   }

   load(id: string): void {
      if (parseInt(id) === NaN) throw new Error('Data load expects a number as id')

      this.id = id
      
      let main = this
      let settings = this.ajaxSettings('get')
      let promise = this.ajax(settings)

      Promise.resolve(promise).then((data) => {
         if (data instanceof Array && main.recordOnly == true) throw new Error('Record not found')

         for (const key in data) {
            main.set(key, data[key])
         }
      }).catch((error) => {
         this.error(error)
      }).finally(() => {
         this.finished()
      })
   }

   init(): void {
      let main = this
      let settings = this.ajaxSettings(this.type)
      let promise = this.ajax(settings)

      Promise.resolve(promise).then((data) => {
         if (data instanceof Array && main.recordOnly == true) throw new Error('Record not found')

         for (const key in data) {
            main.set(key, data[key])
         }
      }).catch((error) => {
         this.error(error)
      }).finally(() => {
         this.finished()
      })
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

   get recordOnly(): boolean {
      return this._recordOnly;
   }

   set recordOnly(value: boolean) {
      this._recordOnly = value;
   }

}