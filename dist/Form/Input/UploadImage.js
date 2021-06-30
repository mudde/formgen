"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const InputAbstract_1 = require("Mudde/Form/InputAbstract");
class UploadImage extends InputAbstract_1.default {
    constructor(config, form) {
        super(form);
        this._multiple = false;
        this._accept = '';
        this.configuring(config);
    }
    getDefaultConfig() {
        return Object.assign(Object.assign({}, super.getDefaultConfig()), { accept: 'image/x-png, image/gif, image/jpeg', multiple: false });
    }
    postCoreHTMLInput() {
        return new NodeCore_1.default('b', {}, 'Hello');
    }
    coreHTMLInput(id, name, language) {
        let attributes = Object.assign({ id: id, name: name, type: 'file', accept: this.accept }, this.multiple ? { multiple: '' } : {});
        let element = new NodeCore_1.default('input', attributes);
        return element;
    }
    set multiple(value) {
        this._multiple = value;
    }
    get multiple() {
        return this._multiple;
    }
    set accept(value) {
        this._accept = value;
    }
    get accept() {
        return this._accept;
    }
}
exports.default = UploadImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9VcGxvYWRJbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUE4QztBQUU5Qyw0REFBb0Q7QUFFcEQsTUFBcUIsV0FBWSxTQUFRLHVCQUFhO0lBS25ELFlBQVksTUFBVyxFQUFFLElBQVU7UUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBSk4sY0FBUyxHQUFZLEtBQUssQ0FBQTtRQUMxQixZQUFPLEdBQVcsRUFBRSxDQUFBO1FBSXpCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNiLHVDQUNNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxLQUMzQixNQUFNLEVBQUUsb0NBQW9DLEVBQzVDLFFBQVEsRUFBRSxLQUFLLElBQ2pCO0lBQ0osQ0FBQztJQUVTLGlCQUFpQjtRQUN4QixPQUFPLElBQUksa0JBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxhQUFhLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUNyRCxJQUFJLFVBQVUsbUJBQ1gsRUFBRSxFQUFFLEVBQUUsRUFDTixJQUFJLEVBQUUsSUFBSSxFQUNWLElBQUksRUFBRSxNQUFNLEVBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDM0MsQ0FBQTtRQU9ELElBQUksT0FBTyxHQUFhLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFFekQsT0FBTyxPQUFPLENBQUE7SUFDakIsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7SUFDekIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN4QixDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN2QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3RCLENBQUM7Q0FDSDtBQXhERCw4QkF3REMifQ==