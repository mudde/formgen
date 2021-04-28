import StringHelper from "../Helper/StringHelper"

export default abstract class ConfigurableAbstract {

   configuring(config: any) {
      var defaultConfig = this.getDefaultConfig()

      for (let key in defaultConfig) {
         var methodName = 'configure' + StringHelper.ucfirst(key)
         var hasMethod = this[methodName] !== undefined
         var value = config[key] ? config[key] : defaultConfig[key]

         if (hasMethod) {
            this[methodName](value)
         } else {
            this[key] = value
         }
      }
   }

   abstract getDefaultConfig(): any

}