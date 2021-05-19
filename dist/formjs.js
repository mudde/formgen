define("Mudde/Core/HandlerInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Mudde/Core/BaseHandler", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BaseHandler {
        setNext(event) {
            this._nextEvent = event;
            return event;
        }
        handle(data) {
            if (this._nextEvent) {
                this._nextEvent.handle(data);
            }
            return data;
        }
        get nextEvent() {
            return this._nextEvent;
        }
    }
    exports.default = BaseHandler;
});
define("Mudde/Form/Helper/StringHelper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class StringHelper {
        static ucfirst(value) {
            if (value === undefined)
                return;
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
    exports.default = StringHelper;
});
define("Mudde/Core/ConfigurableAbstract", ["require", "exports", "Mudde/Form/Helper/StringHelper"], function (require, exports, StringHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("Mudde/Core/Event", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Event {
        constructor(source, event) {
            this._source = source;
            this._eventNumber = event;
        }
        get source() {
            if (this._source === undefined)
                throw new Error('Source not set!');
            return this._source;
        }
        get eventNumber() {
            if (this._eventNumber === undefined)
                throw new Error('Event number not set!');
            return this._eventNumber;
        }
    }
    exports.default = Event;
});
define("Mudde/Core/ObserverInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Mudde/Form/SubjectInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Mudde/Form/Helper/GuidHelper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GuidHelper {
        constructor(guid) {
            if (!guid) {
                throw new TypeError("Invalid argument; `value` has no value.");
            }
            this.value = GuidHelper.EMPTY;
            if (guid && GuidHelper.isGuid(guid)) {
                this.value = guid;
            }
        }
        static isGuid(guid) {
            const value = guid.toString();
            return guid && (guid instanceof GuidHelper || GuidHelper.validator.test(value));
        }
        static create() {
            return new GuidHelper([GuidHelper.gen(2), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(3)].join("-"));
        }
        static createEmpty() {
            return new GuidHelper("emptyGuid");
        }
        static parse(guid) {
            return new GuidHelper(guid);
        }
        static raw() {
            return [GuidHelper.gen(2), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(1), GuidHelper.gen(3)].join("-");
        }
        static gen(count) {
            let out = "";
            for (let i = 0; i < count; i++) {
                out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }
            return out;
        }
        equals(other) {
            return GuidHelper.isGuid(other) && this.value === other.toString();
        }
        isEmpty() {
            return this.value === GuidHelper.EMPTY;
        }
        toString() {
            return this.value;
        }
        toJSON() {
            return {
                value: this.value,
            };
        }
    }
    exports.default = GuidHelper;
    GuidHelper.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
    GuidHelper.EMPTY = "00000000-0000-0000-0000-000000000000";
});
define("Mudde/Form/ButtonAbstract", ["require", "exports", "Mudde/Core/ConfigurableAbstract", "Mudde/Form/Helper/GuidHelper"], function (require, exports, ConfigurableAbstract_1, GuidHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ButtonAbstract extends ConfigurableAbstract_1.default {
        constructor() {
            super(...arguments);
            this.__type = '';
            this._label = '';
        }
        getDefaultConfig() {
            return {
                label: '',
            };
        }
        render() {
            let output = this.coreHTMLInput(GuidHelper_1.default.create().toString(), 'x', 'nl');
            return output;
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
    }
    exports.default = ButtonAbstract;
});
define("Mudde/Form/DataEvent", ["require", "exports", "Mudde/Core/Event"], function (require, exports, Event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DataEvent extends Event_1.default {
        constructor(source, event, id) {
            super(source, event);
            this._id = id;
        }
        get id() {
            if (this._id === undefined)
                throw new Error('Id not set!');
            return this._id;
        }
    }
    exports.default = DataEvent;
});
define("Mudde/Form/DataAbstract", ["require", "exports", "Mudde/Core/ConfigurableAbstract", "Mudde/Form/DataEvent"], function (require, exports, ConfigurableAbstract_2, DataEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DataAbstract extends ConfigurableAbstract_2.default {
        constructor(form) {
            super();
            this._observers = {};
            this._data = [];
            this._originalData = [];
            this._form = form;
        }
        getDefaultConfig() {
            return {
                data: [],
                originalData: []
            };
        }
        get(id) {
            var event = new DataEvent_1.default(this, DataAbstract.DATA_PRE_GET, id);
            this.notify(event);
            let value = this._data[id];
            var event = new DataEvent_1.default(this, DataAbstract.DATA_POST_GET, id);
            this.notify(event);
            return value;
        }
        set(id, value) {
            var event = new DataEvent_1.default(this, DataAbstract.DATA_PRE_SET, id);
            this.notify(event);
            this._data[id] = value;
            var event = new DataEvent_1.default(this, DataAbstract.DATA_POST_SET, id);
            this.notify(event);
        }
        restore(id) {
            this._data[id] = this._originalData[id];
        }
        attach(observer) {
            let observerList = this._observers;
            if (observerList[observer.eventNumber] === undefined) {
                observerList[observer.eventNumber] = [];
            }
            observerList[observer.eventNumber].push(observer);
        }
        detach(observer) {
            let observerList = this._observers[observer.eventNumber];
            if (observerList) {
                observerList.filter(ownObserver => {
                    return ownObserver === observer;
                });
            }
        }
        notify(event) {
            let eventNumber = event.eventNumber;
            let observerList = this._observers[eventNumber];
            if (observerList) {
                observerList.forEach(observer => {
                    observer.update(event);
                });
            }
        }
        forEach(callable) {
            this._data.forEach(callable);
            return this;
        }
        set form(value) {
            this._form = value;
        }
        get form() {
            if (this._form === undefined)
                throw new Error('Form not set!');
            return this._form;
        }
        set data(value) {
            this._data = this._originalData = value;
        }
        get data() {
            if (this._data === undefined)
                throw new Error('Data not set!');
            return this._data;
        }
    }
    exports.default = DataAbstract;
    DataAbstract.DATA_PRE_SET = 1;
    DataAbstract.DATA_POST_SET = 2;
    DataAbstract.DATA_PRE_GET = 4;
    DataAbstract.DATA_POST_GET = 8;
});
define("Mudde/Form/Form", ["require", "exports", "Mudde/Core/ConfigurableAbstract", "Mudde/Core/Node", "Mudde/Form/Helper/GuidHelper", "Mudde/Form/Helper/StringHelper"], function (require, exports, ConfigurableAbstract_3, Node_1, GuidHelper_2, StringHelper_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Form extends ConfigurableAbstract_3.default {
        constructor(config) {
            super();
            this._id = '';
            this._languages = [];
            this._fields = [];
            this._buttons = [];
            this._count = 0;
            this._loaded = false;
            this.configuring(config);
            this.form = new Node_1.default('form', { method: 'POST', action: '.', id: this.id });
            Form._forms.push(this);
        }
        getDefaultConfig() {
            return {
                id: GuidHelper_2.default.raw(),
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
            let type = StringHelper_2.default.ucfirst(config['_type']);
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
});
define("Mudde/Form/InputAbstract", ["require", "exports", "Mudde/Core/ConfigurableAbstract", "Mudde/Core/Node", "Mudde/Form/Helper/GuidHelper"], function (require, exports, ConfigurableAbstract_4, Node_2, GuidHelper_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InputAbstract extends ConfigurableAbstract_4.default {
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
                id: GuidHelper_3.default.raw(),
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
            let output = new Node_2.default('div', {});
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
});
define("Mudde/Form/BuilderAbstract", ["require", "exports", "Mudde/Core/BaseHandler"], function (require, exports, BaseHandler_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BuilderAbstract extends BaseHandler_1.default {
        constructor(input) {
            super();
            this._input = input;
        }
        set input(value) {
            this._input = value;
        }
        get input() {
            if (this._input === undefined)
                throw new Error('Input not set!');
            return this._input;
        }
    }
    exports.default = BuilderAbstract;
});
define("Mudde/Core/CoreBuildInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Mudde/Form/FormBuilderAbstract", ["require", "exports", "Mudde/Form/BuilderAbstract"], function (require, exports, BuilderAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FormBuilderAbstract extends BuilderAbstract_1.default {
        handle(data) {
            if (this.nextEvent) {
                this.nextEvent.handle(data);
            }
            this.coreBuild(data);
            return data;
        }
    }
    exports.default = FormBuilderAbstract;
});
define("Mudde/Form/Data/Array", ["require", "exports", "Mudde/Form/DataAbstract"], function (require, exports, DataAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Array extends DataAbstract_1.default {
        constructor(config, form) {
            super(form);
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign({}, super.getDefaultConfig());
        }
        init() {
        }
        process() {
        }
    }
    exports.default = Array;
});
define("Mudde/Form/GroupInputAbstract", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/Helper/StringHelper", "Mudde/Form/Data/Array", "Mudde/Form/InputAbstract"], function (require, exports, Node_3, StringHelper_3, Array_1, InputAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            let type = StringHelper_3.default.ucfirst(config['_type']);
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
            let output = new Node_3.default('div', {});
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
});
define("Mudde/Form/InputBuilderAbstract", ["require", "exports", "Mudde/Form/BuilderAbstract"], function (require, exports, BuilderAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InputBuilderAbstract extends BuilderAbstract_2.default {
        handle(data) {
            if (this.nextEvent) {
                this.nextEvent.handle(data);
            }
            this.coreBuild(data);
            return data;
        }
    }
    exports.default = InputBuilderAbstract;
});
define("Mudde/Form/ValidationAbstract", ["require", "exports", "Mudde/Core/ConfigurableAbstract"], function (require, exports, ConfigurableAbstract_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ValidationAbstract extends ConfigurableAbstract_5.default {
        constructor(input) {
            super();
            this._input = input;
        }
        setNext(event) {
            this._nextEvent = event;
            return event;
        }
        handle(data) {
            if (this._nextEvent) {
                this._nextEvent.handle(data);
            }
            this.coreBuild(data);
            return data;
        }
        set input(value) {
            this._input = value;
        }
        get input() {
            if (this._input === undefined)
                throw new Error('Input not set!');
            return this._input;
        }
    }
    exports.default = ValidationAbstract;
});
define("Mudde/Form/Builder/GeneralBuilder", ["require", "exports", "Mudde/Form/BuilderAbstract"], function (require, exports, BuilderAbstract_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GeneralBuilder extends BuilderAbstract_3.default {
        coreBuild(output) {
        }
    }
    exports.default = GeneralBuilder;
});
define("Mudde/Form/Builder/TabsBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/FormBuilderAbstract"], function (require, exports, Node_4, FormBuilderAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TabsBuilder extends FormBuilderAbstract_1.default {
        coreBuild(output) {
            let htmlForm = output.root();
            let panels = htmlForm.getElementsByClassName('panel');
            let tabs = new Node_4.default('ul', { class: "nav nav-tabs" });
            for (let key = 0; key < panels.length; key++) {
                let panelLabel = panels.item(key).id;
                let javascript = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`;
                tabs
                    .appendElement(new Node_4.default('li', { class: 'nav-item' }))
                    .appendElement(new Node_4.default('a', { class: 'nav-link ', href: javascript }, panelLabel));
                if (key === 0) {
                    tabs.addClass('active');
                }
                else {
                    panels[key].setAttribute('hidden', '');
                }
            }
            output
                .gotoRoot()
                .prependElement_(tabs);
        }
    }
    exports.default = TabsBuilder;
});
define("Mudde/Form/Buttom/Submit", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/ButtonAbstract"], function (require, exports, Node_5, ButtonAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Submit extends ButtonAbstract_1.default {
        constructor(config) {
            super();
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign({}, super.getDefaultConfig());
        }
        coreHTMLInput(id, name, language) {
            let attributes = {
                type: 'button',
                class: 'btn btn-primary',
                onclick: `javascript:
         var data = {};
         Array.from(document.forms[0].elements).forEach(element => {
             if (element.name) {
                console.debug(element.type)
                 if (element.type === 'file') {
                     data[element.name] = Array.from(element.files).flatMap(x => { return x.name });
                 } else if(element.type === 'select-multiple') {
                     data[element.name] = Array.from(element.selectedOptions).flatMap(x=>{ return x.value  })
                 } else {
                     data[element.name] = element.value
                 }
             }
         });
         alert(JSON.stringify({valid: document.forms[0].checkValidity(),...data}, null, 4));
         return false`,
                value: this.label
            };
            let element = new Node_5.default('input', attributes);
            return element;
        }
    }
    exports.default = Submit;
});
define("Mudde/Form/Helper/IconHelper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class IconHelper {
        static suitHeart(size = '1em') {
            return `<svg width="${size}" height="${size}" viewBox="0 0 16 16" class="bi bi-suit-heart ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
      </svg>`;
        }
        static starFill(size = '1em') {
            return `<svg width="${size}" height="${size}" viewBox="0 0 16 16" class="bi bi-star-fill ml-1 mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`;
        }
    }
    exports.default = IconHelper;
});
define("Mudde/Form/Input/Checkbox", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/GroupInputAbstract"], function (require, exports, Node_6, GroupInputAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Checkbox extends GroupInputAbstract_1.default {
        constructor(config, form) {
            super(form);
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign({}, super.getDefaultConfig());
        }
        coreHTMLInput(id, name, language) {
            let currentData = this.currentData;
            let element = new Node_6.default('div', { 'class': 'form-check', style: 'display: table-cell;' });
            let newId = id + '_' + currentData.id;
            element
                .appendNode('input', {
                id: newId,
                name: name,
                class: 'form-check-input',
                type: 'checkbox',
                value: currentData.id
            })
                .appendNode_('label', {
                'for': newId,
                'class': 'form-check-label'
            }, currentData.value);
            return element;
        }
    }
    exports.default = Checkbox;
});
define("Mudde/Form/Input/Combobox", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract", "Mudde/Form/Data/Array", "Mudde/Form/Helper/StringHelper"], function (require, exports, Node_7, InputAbstract_2, Array_2, StringHelper_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Combobox extends InputAbstract_2.default {
        constructor(config, form) {
            super(form);
            this._multiple = false;
            this._data = new Array_2.default({ data: [] });
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { multiple: false, data: new Array_2.default({ data: [] }) });
        }
        configureData(config) {
            let main = this;
            let type = StringHelper_4.default.ucfirst(config['_type']);
            requirejs(['Mudde/Form/Data/' + type], (className) => {
                let object = new className.default(config, main);
                main._data = object;
            });
        }
        coreHTMLInput(id, name, language) {
            let element = new Node_7.default('select', Object.assign(Object.assign({ id: id, name: name }, this.placeholder ? { placeholder: this.placeholder } : {}), this.multiple === true ? { 'multiple': '' } : {}));
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
});
define("Mudde/Form/Input/Email", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_8, InputAbstract_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Email extends InputAbstract_3.default {
        constructor(config, form) {
            super(form);
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign({}, super.getDefaultConfig());
        }
        coreHTMLInput(id, name, language) {
            let element = new Node_8.default('input', {
                id: id,
                name: name,
                type: 'email',
                'aria-label': this.label,
                'data-language': language
            });
            return element;
        }
    }
    exports.default = Email;
});
define("Mudde/Form/Input/Radio", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/GroupInputAbstract"], function (require, exports, Node_9, GroupInputAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Radio extends GroupInputAbstract_2.default {
        constructor(config, form) {
            super(form);
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign({}, super.getDefaultConfig());
        }
        coreHTMLInput(id, name, language) {
            let currentData = this.currentData;
            let element = new Node_9.default('div', { 'class': 'form-check', style: 'display: table-cell;' });
            let newId = id + '_' + currentData.id;
            element
                .appendNode('input', {
                id: newId,
                name: name,
                class: 'form-check-input',
                type: 'radio',
                value: currentData.id
            })
                .appendNode('label', {
                'for': newId,
                'class': 'form-check-label'
            }, currentData.value);
            return element;
        }
    }
    exports.default = Radio;
});
define("Mudde/Form/Input/Text", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_10, InputAbstract_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Text extends InputAbstract_4.default {
        constructor(config, form) {
            super(form);
            this._mask = '';
            this._format = '';
            this._prefix = '';
            this._suffix = '';
            this._multiple = false;
            this._spellcheck = false;
            this.configuring(config);
        }
        canBeMultilingual() { return true; }
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { mask: '', format: '', prefix: '', suffix: '', multiple: false, spellcheck: false });
        }
        coreHTMLInput(id, name, language) {
            let element = new Node_10.default('input', {
                id: id,
                name: name,
                type: 'text',
                placeholder: this.placeholder,
                spellcheck: this.spellcheck
            });
            return element;
        }
        set mask(value) {
            this._mask = value;
        }
        get mask() {
            return this._mask;
        }
        set format(value) {
            this._format = value;
        }
        get format() {
            return this._format;
        }
        set prefix(value) {
            this._prefix = value;
        }
        get prefix() {
            return this._prefix;
        }
        set suffix(value) {
            this._suffix = value;
        }
        get suffix() {
            return this._suffix;
        }
        set multiple(value) {
            this._multiple = value;
        }
        get multiple() {
            return this._multiple;
        }
        set spellcheck(value) {
            this._spellcheck = value;
        }
        get spellcheck() {
            return this._spellcheck;
        }
    }
    exports.default = Text;
});
define("Mudde/Form/Input/Textarea", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_11, InputAbstract_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Textarea extends InputAbstract_5.default {
        constructor(config, form) {
            super(form);
            this._spellcheck = false;
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { spellcheck: false });
        }
        coreHTMLInput(id, name, language) {
            let element = new Node_11.default('textarea', {
                id: id,
                name: name,
                spellcheck: this.spellcheck
            });
            return element;
        }
        set spellcheck(value) {
            this._spellcheck = value;
        }
        get spellcheck() {
            return this._spellcheck;
        }
    }
    exports.default = Textarea;
});
define("Mudde/Form/Input/UploadFile", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_12, InputAbstract_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class UploadFile extends InputAbstract_6.default {
        constructor(config, form) {
            super(form);
            this._multiple = false;
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { multiple: false });
        }
        coreHTMLInput(id, name, language) {
            let attributes = Object.assign({ id: id, name: name, type: 'file' }, this.multiple ? { multiple: '' } : {});
            let element = new Node_12.default('input', attributes);
            return element;
        }
        set multiple(value) {
            this._multiple = value;
        }
        get multiple() {
            return this._multiple;
        }
    }
    exports.default = UploadFile;
});
define("Mudde/Form/Input/UploadImage", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_13, InputAbstract_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class UploadImage extends InputAbstract_7.default {
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
            return new Node_13.default('b', {}, 'Hello');
        }
        coreHTMLInput(id, name, language) {
            let attributes = Object.assign({ id: id, name: name, type: 'file', accept: this.accept }, this.multiple ? { multiple: '' } : {});
            let element = new Node_13.default('input', attributes);
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
});
define("Mudde/Form/Input/Builder/BootstrapBuilder", ["require", "exports", "Mudde/Form/InputBuilderAbstract"], function (require, exports, InputBuilderAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BootstrapBuilder extends InputBuilderAbstract_1.default {
        coreBuild(output) {
            output
                .gotoRoot()
                .addClass('mb-1');
            let label = output.getElementByTagName('label').item(0);
            label === null || label === void 0 ? void 0 : label.classList.add('form-label');
            let help = output.getElementByClass('help').item(0);
            if (help) {
                help.innerHTML = this.input.help;
                help.classList.add('form-text');
            }
            this.input.coreIds.forEach(item => {
                let classes = '' + item.getAttribute('class');
                if (classes.indexOf('form-check') === -1) {
                    item.gotoRoot().addClass('form-control');
                }
            });
        }
    }
    exports.default = BootstrapBuilder;
});
define("Mudde/Form/Input/Builder/GeneralBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/Helper/IconHelper", "Mudde/Form/InputBuilderAbstract"], function (require, exports, Node_14, IconHelper_1, InputBuilderAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GeneralBuilder extends InputBuilderAbstract_2.default {
        coreBuild(output) {
            let input = this.input;
            let elements = input.coreIds;
            let labelText = input.label + (input.require ? IconHelper_1.default.starFill('9px') : '');
            let label = new Node_14.default('label', { for: elements[0].id, class: 'myLabel' });
            let help = new Node_14.default('span', { class: 'help', id: 'help_' + input.id });
            label.innerHTML = labelText;
            output
                .gotoRoot()
                .setAttributes({ 'style': 'margin-bottom: 10px;' })
                .prependElement_(label)
                .appendElement_(help);
        }
    }
    exports.default = GeneralBuilder;
});
define("Mudde/Form/Validation/Length", ["require", "exports", "Mudde/Form/ValidationAbstract"], function (require, exports, ValidationAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Length extends ValidationAbstract_1.default {
        constructor(config) {
            super(config);
            this._min = 0;
            this._max = 0;
            this.configuring(config);
        }
        getDefaultConfig() {
            return {
                min: 0,
                max: 0
            };
        }
        coreBuild(output) {
            let attributes = Object.assign(Object.assign({}, this.min > 0 ? { min: this.min } : {}), this.max > 0 ? { max: this.max } : {});
            this.input.coreIds.forEach(element => {
                element.setAttributes(attributes);
            });
        }
        get min() {
            return this._min;
        }
        set min(value) {
            this._min = value;
        }
        get max() {
            return this._max;
        }
        set max(value) {
            this._max = value;
        }
    }
    exports.default = Length;
});
define("Mudde/Form/Validation/NotEmpty", ["require", "exports", "Mudde/Form/ValidationAbstract"], function (require, exports, ValidationAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class NotEmpty extends ValidationAbstract_2.default {
        constructor(config) {
            super(config);
            this.configuring(config);
        }
        getDefaultConfig() {
            return {};
        }
        coreBuild(output) {
            let attributes = {
                required: ''
            };
            this.input.coreIds.forEach(element => {
                element.setAttributes(attributes);
            });
        }
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL011ZGRlL0NvcmUvSGFuZGxlckludGVyZmFjZS50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL0Jhc2VIYW5kbGVyLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL1N0cmluZ0hlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL0NvbmZpZ3VyYWJsZUFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0NvcmUvRXZlbnQudHMiLCIuLi9zcmMvTXVkZGUvQ29yZS9PYnNlcnZlckludGVyZmFjZS50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL1N1YmplY3RJbnRlcmZhY2UudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9IZWxwZXIvR3VpZEhlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1dHRvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRGF0YUV2ZW50LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRGF0YUFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRm9ybS50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0QWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdWlsZGVyQWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9Db3JlQnVpbGRJbnRlcmZhY2UudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9Gb3JtQnVpbGRlckFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRGF0YS9BcnJheS50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0dyb3VwSW5wdXRBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0QnVpbGRlckFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vQnVpbGRlci9HZW5lcmFsQnVpbGRlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1aWxkZXIvVGFic0J1aWxkZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdXR0b24vU3VibWl0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL0ljb25IZWxwZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9DaGVja2JveC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0NvbWJvYm94LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvRW1haWwudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9SYWRpby50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L1RleHQudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9UZXh0YXJlYS50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L1VwbG9hZEZpbGUudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9VcGxvYWRJbWFnZS50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0J1aWxkZXIvQm9vdHN0cmFwQnVpbGRlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0J1aWxkZXIvR2VuZXJhbEJ1aWxkZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9WYWxpZGF0aW9uL0xlbmd0aC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL1ZhbGlkYXRpb24vTm90RW1wdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQ0lBLE1BQThCLFdBQVc7UUFJdkMsT0FBTyxDQUFDLEtBQXVCO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBRXZCLE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFTO1lBQ2QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUM3QjtZQUVELE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQztRQUVELElBQVcsU0FBUztZQUNsQixPQUFPLElBQUksQ0FBQyxVQUFV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