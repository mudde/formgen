"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const InputAbstract_1 = require("Mudde/Form/InputAbstract");
const Array_1 = require("../Data/Array");
const StringHelper_1 = require("../Helper/StringHelper");
class Combobox extends InputAbstract_1.default {
    constructor(config, form) {
        super(form);
        this._multiple = false;
        this._data = new Array_1.default({ data: [] });
        this.configuring(config);
    }
    getDefaultConfig() {
        return Object.assign(Object.assign({}, super.getDefaultConfig()), { multiple: false, data: new Array_1.default({ data: [] }) });
    }
    configureData(config) {
        let main = this;
        let type = StringHelper_1.default.ucfirst(config['_type']);
        requirejs(['Mudde/Form/Data/' + type], (className) => {
            let object = new className.default(config, main);
            main._data = object;
        });
    }
    coreHTMLInput(id, name, language) {
        let element = new NodeCore_1.default('select', Object.assign(Object.assign({ id: id, name: name }, this.placeholder ? { placeholder: this.placeholder } : {}), this.multiple === true ? { 'multiple': '' } : {}));
        if (this.multiple !== true) {
            element.appendNode('option', { value: null }, '');
        }
        this._data.forEach(dataitem => {
            element.appendNode('option', { value: dataitem.id }, dataitem.value);
        });
        return element;
    }
    set multiple(value) {
        this._multiple = value;
    }
    get multiple() {
        return this._multiple;
    }
    set data(value) {
        this._data = value;
    }
    get data() {
        return this._data;
    }
}
exports.default = Combobox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tYm9ib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9Db21ib2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUE4QztBQUU5Qyw0REFBb0Q7QUFFcEQseUNBQWlDO0FBQ2pDLHlEQUFpRDtBQUVqRCxNQUFxQixRQUFTLFNBQVEsdUJBQWE7SUFLaEQsWUFBWSxNQUFXLEVBQUUsSUFBVTtRQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFKTixjQUFTLEdBQVksS0FBSyxDQUFBO1FBQzFCLFVBQUssR0FBaUIsSUFBSSxlQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUlsRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0I7UUFDYix1Q0FDTSxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FDM0IsUUFBUSxFQUFFLEtBQUssRUFDZixJQUFJLEVBQUUsSUFBSSxlQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFDL0I7SUFDSixDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQWdCO1FBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksSUFBSSxHQUFHLHNCQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBRWhELFNBQVMsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxNQUFNLEdBQWlCLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFFOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsYUFBYSxDQUFDLEVBQVUsRUFBRSxJQUFZLEVBQUUsUUFBZ0I7UUFDckQsSUFBSSxPQUFPLEdBQWEsSUFBSSxrQkFBUSxDQUFDLFFBQVEsZ0NBQzFDLEVBQUUsRUFBRSxFQUFFLEVBQ04sSUFBSSxFQUFFLElBQUksSUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FDekQsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3BELENBQUE7UUFFRixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1NBQ25EO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN2RSxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDeEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQW1CO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDcEIsQ0FBQztDQUNIO0FBL0RELDJCQStEQyJ9