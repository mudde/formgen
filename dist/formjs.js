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
define("Mudde/Form/Input/Combobox", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract", "Mudde/Form/Data/Array", "Mudde/Form/Helper/StringHelper"], function (require, exports, Node_6, InputAbstract_2, Array_2, StringHelper_4) {
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
            let element = new Node_6.default('select', Object.assign(Object.assign({ id: id, name: name }, this.placeholder ? { placeholder: this.placeholder } : {}), this.multiple === true ? { 'multiple': '' } : {}));
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
define("Mudde/Form/Input/Email", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_7, InputAbstract_3) {
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
            let element = new Node_7.default('input', {
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
define("Mudde/Form/Input/File", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_8, InputAbstract_4) {
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
            let element = new Node_8.default('input', attributes);
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
define("Mudde/Form/Input/Radio", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/GroupInputAbstract"], function (require, exports, Node_9, GroupInputAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Radio extends GroupInputAbstract_1.default {
        constructor(config, form) {
            super(form);
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign({}, super.getDefaultConfig());
        }
        coreHTMLInput(id, name, language) {
            let currentData = this.currentData;
            let element = new Node_9.default('div', { 'class': 'form-check', 'no-bootstrap': '', style: 'display: table-cell;' });
            let newId = id + '_' + currentData.id;
            element
                .appendNode('input', {
                id: newId,
                name: name,
                type: 'radio',
                value: currentData.id
            })
                .appendNode('label', { 'for': newId }, currentData.value);
            return element;
        }
    }
    exports.default = Radio;
});
define("Mudde/Form/Input/Text", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_10, InputAbstract_5) {
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
define("Mudde/Form/Input/Textarea", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_11, InputAbstract_6) {
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
define("Mudde/Form/Input/Builder/BootstrapBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputBuilderAbstract"], function (require, exports, Node_12, InputBuilderAbstract_1) {
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
            let newNode = new Node_12.default('div', { class: 'input-group mb-1' })
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
            let tabs = new Node_12.default('ul', { class: "nav nav-tabs" });
            for (let key = 0; key < panels.length; key++) {
                let panelLabel = panels.item(key).id;
                let javascript = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`;
                tabs
                    .appendElement(new Node_12.default('li', { class: 'nav-item' }))
                    .appendElement(new Node_12.default('a', { class: 'nav-link ', href: javascript }, panelLabel));
                if (key === 0) {
                    tabs.addClass('active');
                }
            }
            htmlForm.insertBefore(tabs.root(), htmlForm.firstChild);
        }
    }
    exports.default = BootstrapBuilder;
});
define("Mudde/Form/Input/Builder/GeneralBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputBuilderAbstract", "Mudde/Form/Helper/IconHelper"], function (require, exports, Node_13, InputBuilderAbstract_2, IconHelper_1) {
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
                    let panelNode = new Node_13.default('div', { id: panelId, class: `panel ${panelId}` });
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
            let label = new Node_13.default('label', { for: elements[0].id });
            label.innerHTML = input.label + (input.require ? IconHelper_1.default.starFill('9px') : '');
            output.appendElement_(label);
            elements.forEach(element => {
                output.appendElement_(element.root());
            });
            if (input.help !== '') {
                output.appendElement_(new Node_13.default('span', { id: input.id + 'Help', class: input.id }, input.help));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL1N0cmluZ0hlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL0NvbmZpZ3VyYWJsZUFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0NvcmUvRXZlbnQudHMiLCIuLi9zcmMvTXVkZGUvQ29yZS9PYnNlcnZlckludGVyZmFjZS50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL1N1YmplY3RJbnRlcmZhY2UudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdWlsZGVyQWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9IZWxwZXIvR3VpZEhlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1dHRvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRGF0YUV2ZW50LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRm9ybUJ1aWxkZXJBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0QnVpbGRlckFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXRBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0Zvcm0udHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhQWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhL0FycmF5LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vR3JvdXBJbnB1dEFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vQnVpbGRlci9HZW5lcmFsQnVpbGRlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1aWxkZXIvVGFic0J1aWxkZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdXR0b24vU3VibWl0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL0ljb25IZWxwZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9Db21ib2JveC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0VtYWlsLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvRmlsZS50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L1JhZGlvLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvVGV4dC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L1RleHRhcmVhLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvQnVpbGRlci9Cb290c3RyYXBCdWlsZGVyLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvQnVpbGRlci9HZW5lcmFsQnVpbGRlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL1ZhbGlkYXRpb24vTGVuZ3RoLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbi9Ob3RFbXB0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxNQUFxQixZQUFZO1FBRS9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBYTtZQUMxQixJQUFJLEtBQUssS0FBSyxTQUFTO2dCQUFFLE9BQU07WUFFL0IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUVGO0lBUkQsK0JBUUM7Ozs7O0lDTkQsTUFBOEIsb0JBQW9CO1FBRS9DLFdBQVcsQ0FBQyxNQUFXO1lBQ3BCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBRTNDLEtBQUssSUFBSSxHQUFHLElBQUksYUFBYSxFQUFFO2dCQUM1QixJQUFJLFVBQVUsR0FBRyxXQUFXLEdBQUcsc0JBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ3hELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLENBQUE7Z0JBQzlDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FB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