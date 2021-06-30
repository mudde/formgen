"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigurableAbstract_1 = require("Mudde/Core/ConfigurableAbstract");
const NodeCore_1 = require("mudde-node/src/NodeCore");
const GuidHelper_1 = require("Mudde/Form/Helper/GuidHelper");
const StringHelper_1 = require("Mudde/Form/Helper/StringHelper");
class Form extends ConfigurableAbstract_1.default {
    constructor(config) {
        super();
        this._id = '';
        this._languages = [];
        this._fields = [];
        this._buttons = [];
        this._count = 0;
        this._loaded = false;
        this.configuring(config);
        this.form = new NodeCore_1.default('form', { method: 'POST', action: '.', id: this.id });
        Form._forms.push(this);
    }
    getDefaultConfig() {
        return {
            id: GuidHelper_1.default.raw(),
            languages: ['nl'],
            fields: [],
            buttons: [],
            layout: [],
            builders: [],
            data: {}
        };
    }
    configureFields(rawFields) {
        let main = this;
        let fields = this.fields = [];
        rawFields.forEach(config => {
            let type = config['_type'];
            main.count++;
            requirejs(['Mudde/Form/Input/' + type], (className) => {
                let object = new className.default(config, main);
                fields.push(object);
                main.count--;
            });
        });
    }
    configureButtons(rawFields) {
        let main = this;
        let buttons = this.buttons = [];
        rawFields.forEach(config => {
            let type = config['_type'];
            main.count++;
            requirejs(['Mudde/Form/Buttom/' + type], (className) => {
                let object = new className.default(config, main);
                buttons.push(object);
                main.count--;
            });
        });
    }
    configureBuilders(rawFields) {
        let main = this;
        rawFields.unshift('GeneralBuilder');
        rawFields.forEach(builder => {
            requirejs(['Mudde/Form/Builder/' + builder], (className) => {
                var _a;
                let handler = new className.default(this);
                if (!main._handler) {
                    main._handler = main._handlerCurrent = handler;
                }
                else {
                    main._handlerCurrent = (_a = main._handlerCurrent) === null || _a === void 0 ? void 0 : _a.setNext(handler);
                }
            });
        });
    }
    configureData(config) {
        let main = this;
        let type = StringHelper_1.default.ucfirst(config['_type']);
        main.count++;
        requirejs(['Mudde/Form/Data/' + type], (className) => {
            let object = new className.default(config, main);
            main._data = object;
            main.count--;
        });
    }
    static getFormById(id) {
        let filterFunction = form => { return form.id === id; };
        let form = Form._forms.filter(filterFunction);
        return form.length === 0 ? null : form[0];
    }
    render() {
        var _a;
        let form = this._form;
        if (form === undefined)
            throw new Error('Form not set!');
        form.clear();
        this.fields.forEach(field => {
            let renderedElement = field.render();
            let panelId = 'panel_' + field.panel;
            if (!(form === null || form === void 0 ? void 0 : form.hasElementById(panelId))) {
                form === null || form === void 0 ? void 0 : form.gotoRoot().appendNode_('div', { id: panelId, class: 'panel' });
            }
            form === null || form === void 0 ? void 0 : form.getElementById(panelId).appendElement_(renderedElement);
        });
        (_a = this._handler) === null || _a === void 0 ? void 0 : _a.handle(form);
        form.gotoRoot();
        this.buttons.forEach(element => {
            form === null || form === void 0 ? void 0 : form.appendElement_(element.render());
        });
        return form;
    }
    set id(value) {
        this._id = value;
    }
    get id() {
        return this._id;
    }
    set count(value) {
        this._count = value;
        if (this._count === 0) {
            this._loaded = true;
        }
    }
    get count() {
        return this._count;
    }
    get loaded() {
        return this._loaded;
    }
    set languages(value) {
        this._languages = value;
    }
    get languages() {
        return this._languages;
    }
    set fields(value) {
        this._fields = value;
    }
    get fields() {
        return this._fields;
    }
    set buttons(value) {
        this._buttons = value;
    }
    get buttons() {
        return this._buttons;
    }
    set form(value) {
        this._form = value;
    }
    get form() {
        if (this._form === undefined)
            throw new Error('Form not set!');
        return this._form;
    }
    set handler(value) {
        this._handler = value;
    }
    get handler() {
        if (this._handler === undefined)
            throw new Error('Handler not set!');
        return this._handler;
    }
}
exports.default = Form;
Form._forms = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NdWRkZS9Gb3JtL0Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBa0U7QUFDbEUsc0RBQThDO0FBQzlDLDZEQUFxRDtBQUNyRCxpRUFBeUQ7QUFNekQsTUFBcUIsSUFBSyxTQUFRLDhCQUFvQjtJQWNuRCxZQUFZLE1BQVc7UUFDcEIsS0FBSyxFQUFFLENBQUE7UUFiRixRQUFHLEdBQVcsRUFBRSxDQUFBO1FBQ2hCLGVBQVUsR0FBYSxFQUFFLENBQUE7UUFDekIsWUFBTyxHQUFvQixFQUFFLENBQUE7UUFDN0IsYUFBUSxHQUFxQixFQUFFLENBQUE7UUFHL0IsV0FBTSxHQUFXLENBQUMsQ0FBQTtRQUdsQixZQUFPLEdBQVksS0FBSyxDQUFBO1FBTTdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUU5RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2IsT0FBTztZQUNKLEVBQUUsRUFBRSxvQkFBVSxDQUFDLEdBQUcsRUFBRTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDakIsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLEVBQUU7WUFDWixJQUFJLEVBQUUsRUFBRTtTQUNWLENBQUE7SUFDSixDQUFDO0lBRU8sZUFBZSxDQUFDLFNBQW1CO1FBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUks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