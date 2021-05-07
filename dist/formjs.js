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
define("Mudde/Form/BuilderAbstract", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BuilderAbstract {
    }
    exports.default = BuilderAbstract;
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
define("Mudde/Form/FormBuilderAbstract", ["require", "exports", "Mudde/Form/BuilderAbstract"], function (require, exports, BuilderAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FormBuilderAbstract extends BuilderAbstract_1.default {
    }
    exports.default = FormBuilderAbstract;
});
define("Mudde/Form/InputBuilderAbstract", ["require", "exports", "Mudde/Form/BuilderAbstract"], function (require, exports, BuilderAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InputBuilderAbstract extends BuilderAbstract_2.default {
    }
    exports.default = InputBuilderAbstract;
});
define("Mudde/Form/ValidationAbstract", ["require", "exports", "Mudde/Core/ConfigurableAbstract"], function (require, exports, ConfigurableAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ValidationAbstract extends ConfigurableAbstract_2.default {
    }
    exports.default = ValidationAbstract;
});
define("Mudde/Form/InputAbstract", ["require", "exports", "Mudde/Core/ConfigurableAbstract", "Mudde/Core/Node", "Mudde/Form/Helper/GuidHelper"], function (require, exports, ConfigurableAbstract_3, Node_1, GuidHelper_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InputAbstract extends ConfigurableAbstract_3.default {
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
            this._ids = [];
            this._builders = [];
            this._validations = [];
            this._form = form;
        }
        getDefaultConfig() {
            return {
                _type: 'Text',
                id: GuidHelper_2.default.raw(),
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
            let builders = this.builders = [];
            rawFields.unshift('GeneralBuilder');
            rawFields.forEach(builder => {
                requirejs(['Mudde/Form/Input/Builder/' + builder], (className) => {
                    builders.push(new className.default());
                });
            });
        }
        configureValidations(rawFields) {
            let main = this;
            this.validations = [];
            rawFields.forEach((config, index) => {
                let type = config['_type'];
                requirejs(['Mudde/Form/Validation/' + type], (className) => {
                    main.validations[index] = new className.default(config);
                });
            });
        }
        render() {
            let main = this;
            let elements = [];
            let builders = this.builders;
            let isMultilingual = this.isMultilingual;
            let languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
            let output = new Node_1.default('div', {});
            this.ids = [];
            languages.forEach(language => {
                let id = isMultilingual ? `${main.id}_${language}` : main.id;
                let name = isMultilingual ? `${main.id}[${language}]` : main.id;
                let object = main.renderBuild(id, name, language);
                elements.push(object);
            });
            builders.forEach(builder => {
                builder.finalBuild(elements, main, output);
            });
            return output;
        }
        renderBuild(id, name, language) {
            let main = this;
            let validations = this.validations;
            let builders = this.builders;
            let isMultilingual = this.isMultilingual;
            let object = this.coreHTMLInput(id, name, language);
            validations.forEach(validation => {
                object = isMultilingual
                    ? validation.coreMultilingualBuild(object, main, language)
                    : validation.coreBuild(object, main);
            });
            builders.forEach(builder => {
                object = isMultilingual
                    ? builder.coreMultilingualBuild(object, main, language)
                    : builder.coreBuild(object, main);
            });
            this.ids.push(id);
            return object;
        }
        get isMultilingual() {
            return this.form.languages.length > 1 && this.multilingual;
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
        set validations(value) {
            this._validations = value;
        }
        get validations() {
            return this._validations;
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
        set ids(value) {
            this._ids = value;
        }
        get ids() {
            return this._ids;
        }
        set builders(value) {
            this._builders = value;
        }
        get builders() {
            return this._builders;
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
    }
    exports.default = InputAbstract;
});
define("Mudde/Form/Form", ["require", "exports", "Mudde/Core/ConfigurableAbstract", "Mudde/Core/Node", "Mudde/Form/Helper/GuidHelper", "Mudde/Form/Helper/StringHelper"], function (require, exports, ConfigurableAbstract_4, Node_2, GuidHelper_3, StringHelper_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Form extends ConfigurableAbstract_4.default {
        constructor(config) {
            super();
            this._id = '';
            this._languages = [];
            this._fields = [];
            this._buttons = [];
            this._builders = [];
            this._count = 0;
            this._loaded = false;
            this.configuring(config);
            this.form = new Node_2.default('form', { method: 'POST', action: '.', id: this.id });
            Form._forms.push(this);
        }
        getDefaultConfig() {
            return {
                id: GuidHelper_3.default.raw(),
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
            let builders = this.builders = [];
            rawFields.unshift('GeneralBuilder');
            rawFields.forEach(builder => {
                main.count++;
                requirejs(['Mudde/Form/Builder/' + builder], (className) => {
                    builders.push(new className.default());
                    main.count--;
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
            let form = this._form;
            if (form === undefined)
                throw new Error('Form not set!');
            form.root().innerHTML = '';
            this.fields.forEach(element => {
                if (form === undefined)
                    throw new Error('Form not set!');
                let renderedElement = element.render();
                form.appendElement_(renderedElement.root());
            });
            this.builders.forEach(builder => {
                builder.postBuild(this);
            });
            form.gotoRoot();
            this.buttons.forEach(element => {
                if (form === undefined)
                    throw new Error('Form not set!');
                form.appendElement_(element.render().root());
            });
            return form.root();
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
        set builders(value) {
            this._builders = value;
        }
        get builders() {
            return this._builders;
        }
        set form(value) {
            this._form = value;
        }
        get form() {
            if (this._form === undefined)
                throw new Error('Form not set!');
            return this._form;
        }
    }
    exports.default = Form;
    Form._forms = [];
});
define("Mudde/Form/DataAbstract", ["require", "exports", "Mudde/Core/ConfigurableAbstract", "Mudde/Form/DataEvent"], function (require, exports, ConfigurableAbstract_5, DataEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DataAbstract extends ConfigurableAbstract_5.default {
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
            let main = this;
            let elements = [];
            let builders = this.builders;
            let isMultilingual = this.isMultilingual;
            let languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
            let output = new Node_3.default('div', {});
            this.ids = [];
            this._data.forEach(data => {
                this.currentData = data;
                languages.forEach(language => {
                    let id = isMultilingual ? `${main.id}_${data.id}_${language}` : main.id;
                    let name = isMultilingual ? `${main.id}[${language}]` : main.id;
                    let object = main.renderBuild(id, name, language);
                    elements.push(object);
                });
            });
            builders.forEach(builder => {
                builder.finalBuild(elements, main, output);
            });
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
define("Mudde/Form/Builder/GeneralBuilder", ["require", "exports", "Mudde/Form/BuilderAbstract"], function (require, exports, BuilderAbstract_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GeneralBuilder extends BuilderAbstract_3.default {
        postBuild(form) {
        }
    }
    exports.default = GeneralBuilder;
});
define("Mudde/Form/Builder/TabsBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/BuilderAbstract"], function (require, exports, Node_4, BuilderAbstract_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TabsBuilder extends BuilderAbstract_4.default {
        postBuild(form) {
            let htmlForm = form.form.root();
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
            }
            htmlForm.insertBefore(tabs.root(), htmlForm.firstChild);
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
            let element = new Node_6.default('div', { 'class': 'form-check', 'no-bootstrap': '', style: 'display: table-cell;' });
            let newId = id + '_' + currentData.id;
            element
                .appendNode('input', {
                id: newId,
                name: name,
                class: 'form-check-input',
                type: 'checkbox',
                value: currentData.id
            })
                .appendNode('label', {
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
        configureData(config) {
            let main = this;
            let type = StringHelper_4.default.ucfirst(config['_type']);
            requirejs(['Mudde/Form/Data/' + type], (className) => {
                let object = new className.default(config, main);
                main._data = object;
            });
        }
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { multiple: false, data: new Array_2.default({ data: [] }) });
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
                class: 'form-control',
                'aria-label': this.label,
                'data-language': language
            });
            return element;
        }
    }
    exports.default = Email;
});
define("Mudde/Form/Input/File", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_9, InputAbstract_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class File extends InputAbstract_4.default {
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
            let element = new Node_9.default('input', attributes);
            return element;
        }
        set multiple(value) {
            this._multiple = value;
        }
        get multiple() {
            return this._multiple;
        }
    }
    exports.default = File;
});
define("Mudde/Form/Input/Radio", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/GroupInputAbstract"], function (require, exports, Node_10, GroupInputAbstract_2) {
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
            let element = new Node_10.default('div', { 'class': 'form-check', 'no-bootstrap': '', style: 'display: table-cell;' });
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
define("Mudde/Form/Input/Text", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_11, InputAbstract_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Text extends InputAbstract_5.default {
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
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { mask: '', format: '', prefix: '', suffix: '', multiple: false, spellcheck: false });
        }
        coreHTMLInput(id, name, language) {
            let element = new Node_11.default('input', {
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
define("Mudde/Form/Input/Textarea", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_12, InputAbstract_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Textarea extends InputAbstract_6.default {
        constructor(config, form) {
            super(form);
            this._spellcheck = false;
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { spellcheck: false });
        }
        coreHTMLInput(id, name, language) {
            let element = new Node_12.default('textarea', {
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
define("Mudde/Form/Input/Builder/BootstrapBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputBuilderAbstract"], function (require, exports, Node_13, InputBuilderAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BootstrapBuilder extends InputBuilderAbstract_1.default {
        coreBuild(output, input) {
            if (output.hasAttribute('no-bootstrap')) {
                return output;
            }
            let attributes = Object.assign({ class: 'form-control' }, input.help !== '' ? { 'aria-describedby': input.id + 'Help' } : {});
            output
                .getElementById(input.id)
                .setAttributes(attributes);
            return output;
        }
        coreMultilingualBuild(output, input, language) {
            if (output.hasAttribute('no-bootstrap')) {
                return output;
            }
            output = this.coreBuild(output, input);
            let newNode = new Node_13.default('div', { class: 'input-group mb-1' })
                .appendNode_('span', { class: 'input-group-text' })
                .appendNode('i', { class: `${language} flag mr-0` })
                ._()
                .appendElement_(output.root());
            return newNode;
        }
        finalBuild(elements, input, output) {
            output.setAttributes({ class: 'mb-1' });
            let label = output.getElementByTagName('label').item(0);
            if (!label)
                throw new Error('label element not found!');
            label.classList.add('form-label');
            let help = output.getElementByClass(input.id).item(0);
            if (!help)
                throw new Error('help element not found!');
            if (input.help !== '') {
                help.classList.add('form-text');
            }
        }
        postBuild(form) {
            let htmlForm = form.form.root();
            let panels = htmlForm.getElementsByClassName('panel');
            let tabs = new Node_13.default('ul', { class: "nav nav-tabs" });
            for (let key = 0; key < panels.length; key++) {
                let panelLabel = panels.item(key).id;
                let javascript = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`;
                tabs
                    .appendElement(new Node_13.default('li', { class: 'nav-item' }))
                    .appendElement(new Node_13.default('a', { class: 'nav-link ', href: javascript }, panelLabel));
                if (key === 0) {
                    tabs.addClass('active');
                }
            }
            htmlForm.insertBefore(tabs.root(), htmlForm.firstChild);
        }
    }
    exports.default = BootstrapBuilder;
});
define("Mudde/Form/Input/Builder/GeneralBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputBuilderAbstract", "Mudde/Form/Helper/IconHelper"], function (require, exports, Node_14, InputBuilderAbstract_2, IconHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GeneralBuilder extends InputBuilderAbstract_2.default {
        setPanels(input) {
            let form = input.form.form;
            let panelId = `panel-${input.panel}`;
            if (form.hasElementByClass(panelId)) {
                form.getElementById(panelId);
            }
            else {
                form.gotoRoot();
                if (panelId !== null) {
                    let firstPanel = form.getElementByClass('panel').length === 0;
                    let panelNode = new Node_14.default('div', { id: panelId, class: `panel ${panelId}` });
                    if (!firstPanel) {
                        panelNode.setAttributes({ hidden: '' });
                    }
                    form.appendElement(panelNode);
                }
            }
        }
        coreBuild(output, input) {
            this.setPanels(input);
            let attributes = Object.assign({ id: input.id, name: input.id, 'data-language': input.form.languages[0], autofocus: input.autofocus }, input.hidden ? { hidden: '' } : {});
            output.setAttributes(attributes);
            return output;
        }
        coreMultilingualBuild(output, input, language) {
            this.setPanels(input);
            let attributes = Object.assign({ id: `${input.id}_${language}`, name: `${input.id}[${language}]`, 'data-language': language, autofocus: input.autofocus && input.form.languages[0] === language ? true : false, onchange: `javascript:` }, input.hidden ? { hidden: '' } : {});
            output.setAttributes(attributes);
            return output;
        }
        finalBuild(elements, input, output) {
            let label = new Node_14.default('label', { for: elements[0].id });
            label.innerHTML = input.label + (input.require ? IconHelper_1.default.starFill('9px') : '');
            output.appendElement_(label);
            elements.forEach(element => {
                output.appendElement_(element.root());
            });
            if (input.help !== '') {
                output.appendElement_(new Node_14.default('span', { id: input.id + 'Help', class: input.id }, input.help));
            }
        }
        postBuild(form) {
        }
    }
    exports.default = GeneralBuilder;
});
define("Mudde/Form/Validation/Length", ["require", "exports", "Mudde/Form/ValidationAbstract"], function (require, exports, ValidationAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Length extends ValidationAbstract_1.default {
        constructor(config) {
            super();
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
        coreBuild(output, input) {
            let attributes = Object.assign(Object.assign({}, this.min > 0 ? { min: this.min } : {}), this.max > 0 ? { max: this.max } : {});
            output
                .getElementById(input.id)
                .setAttributes(attributes);
            return output;
        }
        coreMultilingualBuild(output, input, language) {
            return this.coreBuild(output, input);
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
            super();
            this.configuring(config);
        }
        coreBuild(output, input) {
            if (!input.require)
                return output;
            let attributes = {
                required: ''
            };
            output
                .getElementById(input.id)
                .setAttributes(attributes);
            return output;
        }
        coreMultilingualBuild(output, input, language) {
            if (!input.require)
                return output;
            let attributes = {
                required: ''
            };
            output
                .getElementById(`${input.id}[${language}]`)
                .setAttributes(attributes);
            return output;
        }
        getDefaultConfig() {
            return {};
        }
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL1N0cmluZ0hlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL0NvbmZpZ3VyYWJsZUFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0NvcmUvRXZlbnQudHMiLCIuLi9zcmMvTXVkZGUvQ29yZS9PYnNlcnZlckludGVyZmFjZS50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL1N1YmplY3RJbnRlcmZhY2UudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdWlsZGVyQWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9IZWxwZXIvR3VpZEhlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1dHRvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRGF0YUV2ZW50LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRm9ybUJ1aWxkZXJBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0QnVpbGRlckFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXRBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0Zvcm0udHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhQWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhL0FycmF5LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vR3JvdXBJbnB1dEFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vQnVpbGRlci9HZW5lcmFsQnVpbGRlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1aWxkZXIvVGFic0J1aWxkZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdXR0b24vU3VibWl0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL0ljb25IZWxwZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9DaGVja2JveC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0NvbWJvYm94LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvRW1haWwudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9GaWxlLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvUmFkaW8udHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9UZXh0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvVGV4dGFyZWEudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9CdWlsZGVyL0Jvb3RzdHJhcEJ1aWxkZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9CdWlsZGVyL0dlbmVyYWxCdWlsZGVyLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbi9MZW5ndGgudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9WYWxpZGF0aW9uL05vdEVtcHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBLE1BQXFCLFlBQVk7UUFFL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFhO1lBQzFCLElBQUksS0FBSyxLQUFLLFNBQVM7Z0JBQUUsT0FBTTtZQUUvQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBRUY7SUFSRCwrQkFRQzs7Ozs7SUNORCxNQUE4QixvQkFBb0I7UUFFL0MsV0FBVyxDQUFDLE1BQVc7WUFDcEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFFM0MsS0FBSyxJQUFJLEdBQUcsSUFBSSxhQUFhLEVBQUU7Z0JBQzVCLElBQUksVUFBVSxHQUFHLFdBQVcsR0FBRyxzQkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDeEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFNB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