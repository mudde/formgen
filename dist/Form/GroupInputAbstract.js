"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const StringHelper_1 = require("./Helper/StringHelper");
const Array_1 = require("./Data/Array");
const InputAbstract_1 = require("./InputAbstract");
class GroupInputAbstract extends InputAbstract_1.default {
    constructor() {
        super(...arguments);
        this._data = new Array_1.default({ data: [] });
        this._currentData = {};
    }
    getDefaultConfig() {
        return Object.assign(Object.assign({}, super.getDefaultConfig()), { data: new Array_1.default({ data: [] }) });
    }
    configureData(config) {
        let main = this;
        let type = StringHelper_1.default.ucfirst(config['_type']);
        requirejs(['Mudde/Form/Data/' + type], (className) => {
            let object = new className.default(config, main);
            main._data = object;
        });
    }
    render() {
        var _a;
        let mainId = this.id;
        let isMultilingual = this.isMultilingual;
        let languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
        let output = new NodeCore_1.default('div', {});
        let ids = this.coreIds = [];
        output.appendElement(this.preCoreHTMLInput());
        this._data.forEach(data => {
            this.currentData = data;
            languages.forEach(language => {
                let id = isMultilingual ? `${mainId}_${language}` : mainId;
                let name = isMultilingual ? `${mainId}[${language}]` : mainId;
                let object = this.coreHTMLInput(id, name, language);
                ids.push(object);
                output.appendElement_(object);
            });
            output.appendElement(this.postCoreHTMLInput());
        });
        output
            .prependElement(this.preHTMLInput())
            .appendElement(this.postHTMLInput());
        (_a = this.handler) === null || _a === void 0 ? void 0 : _a.handle(output);
        return output;
    }
    set data(value) {
        this._data = value;
    }
    get data() {
        return this._data;
    }
    set currentData(value) {
        this._currentData = value;
    }
    get currentData() {
        return this._currentData;
    }
}
exports.default = GroupInputAbstract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBJbnB1dEFic3RyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL011ZGRlL0Zvcm0vR3JvdXBJbnB1dEFic3RyYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQThDO0FBRTlDLHdEQUFnRDtBQUNoRCx3Q0FBaUM7QUFDakMsbURBQTRDO0FBRTVDLE1BQThCLGtCQUFtQixTQUFRLHVCQUFhO0lBQXRFOztRQUVXLFVBQUssR0FBaUIsSUFBSSxlQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUM3QyxpQkFBWSxHQUFRLEVBQUUsQ0FBQTtJQXNFakMsQ0FBQztJQWxFRSxnQkFBZ0I7UUFDYix1Q0FDTSxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FDM0IsSUFBSSxFQUFFLElBQUksZUFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQy9CO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUFnQjtRQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixJQUFJLElBQUksR0FBRyxzQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUVoRCxTQUFTLENBQUMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2xELElBQUksTUFBTSxHQUFpQixJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBRTlELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU07O1FBQ0gsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQTtRQUNwQixJQUFJLGNBQWMsR0FBWSxJQUFJLENBQUMsY0FBYyxDQUFBO1FBQ2pELElBQUksU0FBUyxHQUFhLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN6RixJQUFJLE1BQU0sR0FBRyxJQUFJLGtCQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3BDLElBQUksR0FBRyxHQUFlLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFBO1FBRXZDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtRQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtZQUV2QixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLEVBQUUsR0FBVyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUE7Z0JBQ2xFLElBQUksSUFBSSxHQUFXLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtnQkFDckUsSUFBSSxNQUFNLEdBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO2dCQUU3RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNoQixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2hDLENBQUMsQ0FBQyxDQUFBO1lBRUYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBO1FBQ2pELENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTTthQUNGLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDbkMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO1FBRXZDLE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQztRQUU1QixPQUFPLE1BQU0sQ0FBQTtJQUNoQixDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBbUI7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBRUQsSUFBSSxXQUFXLENBQUMsS0FBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQTtJQUM1QixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzNCLENBQUM7Q0FDSDtBQXpFRCxxQ0F5RUMifQ==