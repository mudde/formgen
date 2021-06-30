"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringHelper_1 = require("Mudde/Form/Helper/StringHelper");
class ConfigurableAbstract {
    configuring(config) {
        let defaultConfig = this.getDefaultConfig();
        for (let key in defaultConfig) {
            let methodName = 'configure' + StringHelper_1.default.ucfirst(key);
            let hasMethod = this[methodName] !== undefined;
            let value = config[key] ? config[key] : defaultConfig[key];
            if (hasMethod) {
                this[methodName](value);
            }
            else {
                this[key] = value;
            }
        }
    }
}
exports.default = ConfigurableAbstract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhYmxlQWJzdHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTXVkZGUvQ29yZS9Db25maWd1cmFibGVBYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUF5RDtBQUV6RCxNQUE4QixvQkFBb0I7SUFFL0MsV0FBVyxDQUFDLE1BQVc7UUFDcEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFFM0MsS0FBSyxJQUFJLEdBQUcsSUFBSSxhQUFhLEVBQUU7WUFDNUIsSUFBSSxVQUFVLEdBQUcsV0FBVyxHQUFHLHNCQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLENBQUE7WUFDOUMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUUxRCxJQUFJLFNBQVMsRUFBRTtnQkFDWixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDekI7aUJBQU07Z0JBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQTthQUNuQjtTQUNIO0lBQ0osQ0FBQztDQUdIO0FBbkJELHVDQW1CQyJ9