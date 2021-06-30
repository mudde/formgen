"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigurableAbstract_1 = require("Mudde/Core/ConfigurableAbstract");
const NodeCore_1 = require("mudde-node/src/NodeCore");
const GuidHelper_1 = require("Mudde/Form/Helper/GuidHelper");
class InputAbstract extends ConfigurableAbstract_1.default {
    constructor(form) {
        super();
        this.__type = '';
        this._id = '';
        this._label = '';
        this._help = '';
        this._placeholder = '';
        this._panel = '';
        this._unique = false;
        this._input = false;
        this._autofocus = false;
        this._hidden = false;
        this._require = false;
        this._multilingual = false;
        this._coreIds = [];
        this._form = form;
    }
    preCoreHTMLInput() { return null; }
    preHTMLInput() { return null; }
    postCoreHTMLInput() { return null; }
    postHTMLInput() { return null; }
    javascript() { return ''; }
    canBeMultilingual() { return false; }
    getDefaultConfig() {
        return {
            _type: 'Text',
            id: GuidHelper_1.default.raw(),
            input: true,
            label: '',
            help: '',
            unique: false,
            validations: [],
            placeholder: '',
            panel: null,
            autofocus: false,
            require: false,
            hidden: false,
            multilingual: false,
            builders: []
        };
    }
    configureBuilders(rawFields) {
        let main = this;
        rawFields.unshift('GeneralBuilder');
        rawFields.forEach(builder => {
            requirejs(['Mudde/Form/Input/Builder/' + builder], (className) => {
                var _a;
                let handler = new className.default(this);
                if (!main._handler) {
                    main._handler = main._handlerCurrent = handler;
                }
                else {
                    (_a = main._handlerCurrent) === null || _a === void 0 ? void 0 : _a.setNext(handler);
                    main._handlerCurrent = handler;
                }
            });
        });
    }
    configureValidations(rawFields) {
        let main = this;
        rawFields.forEach(config => {
            let type = config['_type'];
            requirejs(['Mudde/Form/Validation/' + type], (className) => {
                var _a;
                let handler = new className.default(main, config);
                if (!main._handler) {
                    main._handler = main._handlerCurrent = handler;
                }
                else {
                    (_a = main._handlerCurrent) === null || _a === void 0 ? void 0 : _a.setNext(handler);
                    main._handlerCurrent = handler;
                }
            });
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
        languages.forEach(language => {
            let id = isMultilingual ? `${mainId}_${language}` : mainId;
            let name = isMultilingual ? `${mainId}[${language}]` : mainId;
            let object = this.coreHTMLInput(id, name, language);
            ids.push(object);
            output.appendElement_(object);
        });
        output
            .appendElement_(this.postCoreHTMLInput())
            .prependElement_(this.preHTMLInput())
            .appendElement_(this.postHTMLInput());
        (_a = this.handler) === null || _a === void 0 ? void 0 : _a.handle(output);
        return output;
    }
    get isMultilingual() {
        let isMultilingualRequested = this.form.languages.length > 1 && this.multilingual;
        return this.canBeMultilingual() && isMultilingualRequested;
    }
    set id(value) {
        this._id = value;
    }
    get id() {
        return this._id;
    }
    set input(value) {
        this._input = value;
    }
    get input() {
        return this._input;
    }
    set _type(value) {
        this.__type = value;
    }
    get _type() {
        return this.__type;
    }
    set label(value) {
        this._label = value;
    }
    get label() {
        return this._label;
    }
    set help(value) {
        this._help = value;
    }
    get help() {
        return this._help;
    }
    set unique(value) {
        this._unique = value;
    }
    get unique() {
        return this._unique;
    }
    set handler(value) {
        this._handler = value;
    }
    get handler() {
        if (this._handler === undefined)
            throw new Error('Handler not set!');
        return this._handler;
    }
    set autofocus(value) {
        this._autofocus = value;
    }
    get autofocus() {
        return this._autofocus;
    }
    set hidden(value) {
        this._hidden = value;
    }
    get hidden() {
        return this._hidden;
    }
    set require(value) {
        this._require = value;
    }
    get require() {
        return this._require;
    }
    set multilingual(value) {
        this._multilingual = value;
    }
    get multilingual() {
        return this._multilingual;
    }
    set form(value) {
        this._form = value;
    }
    get form() {
        if (this._form === undefined)
            throw new Error('Input not properly initialized!');
        return this._form;
    }
    set placeholder(value) {
        this._placeholder = value;
    }
    get placeholder() {
        return this._placeholder;
    }
    set panel(value) {
        this._panel = value;
    }
    get panel() {
        return this._panel;
    }
    get coreIds() {
        return this._coreIds;
    }
    set coreIds(value) {
        this._coreIds = value;
    }
}
exports.default = InputAbstract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXRBYnN0cmFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0QWJzdHJhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBbUU7QUFFbkUsc0RBQThDO0FBQzlDLDZEQUFzRDtBQUd0RCxNQUE4QixhQUFjLFNBQVEsOEJBQW9CO0lBbUJyRSxZQUFZLElBQVU7UUFDbkIsS0FBSyxFQUFFLENBQUE7UUFsQkYsV0FBTSxHQUFXLEVBQUUsQ0FBQTtRQUNuQixRQUFHLEdBQVcsRUFBRSxDQUFBO1FBQ2hCLFdBQU0sR0FBVyxFQUFFLENBQUE7UUFDbkIsVUFBSyxHQUFXLEVBQUUsQ0FBQTtRQUNsQixpQkFBWSxHQUFXLEVBQUUsQ0FBQTtRQUN6QixXQUFNLEdBQVcsRUFBRSxDQUFBO1FBQ25CLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsV0FBTSxHQUFZLEtBQUssQ0FBQTtRQUN2QixlQUFVLEdBQVksS0FBSyxDQUFBO1FBQzNCLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsYUFBUSxHQUFZLEtBQUssQ0FBQTtRQUN6QixrQkFBYSxHQUFZLEtBQUssQ0FBQTtRQUk5QixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBSS9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO0lBQ3BCLENBQUM7SUFHUyxnQkFBZ0IsS0FBc0IsT0FBTyxJQUFJLENBQUEsQ0FBQyxDQUFDO0lBQ25ELFlBQVksS0FBc0IsT0FBTyxJQUFJLENBQUEsQ0FBQyxDQUFDO0lBQy9DLGlCQUFpQixLQUFzQixPQUFPLElBQUksQ0FBQSxDQUFDLENBQUM7SUFDcEQsYUFBYSxLQUFzQixPQUFPLElBQUksQ0FBQSxDQUFDLENBQUM7SUFDaEQsVUFBVSxLQUFhLE9BQU8sRUFBRSxDQUFBLENBQUMsQ0FBQztJQUNsQyxpQkFBaUIsS0FBYyxPQUFPLEtBQUssQ0FBQSxDQUFDLENBQUM7SUFFdkQsZ0JBQWdCO1FBQ2IsT0FB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