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
                main.renderBuild(id, name, language, elements);
            });
            builders.forEach(builder => {
                builder.finalBuild(elements, main, output);
            });
            return output;
        }
        renderBuild(id, name, language, elements) {
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
            elements.push(object);
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
define("Mudde/Form/Builder/GeneralBuilder", ["require", "exports", "Mudde/Form/BuilderAbstract"], function (require, exports, BuilderAbstract_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GeneralBuilder extends BuilderAbstract_3.default {
        postBuild(form) {
        }
    }
    exports.default = GeneralBuilder;
});
define("Mudde/Form/Builder/TabsBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/BuilderAbstract"], function (require, exports, Node_3, BuilderAbstract_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TabsBuilder extends BuilderAbstract_4.default {
        postBuild(form) {
            let htmlForm = form.form.root();
            let panels = htmlForm.getElementsByClassName('panel');
            let tabs = new Node_3.default('ul', { class: "nav nav-tabs" });
            for (let key = 0; key < panels.length; key++) {
                let panelLabel = panels.item(key).id;
                let javascript = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`;
                tabs
                    .appendElement(new Node_3.default('li', { class: 'nav-item' }))
                    .appendElement(new Node_3.default('a', { class: 'nav-link ', href: javascript }, panelLabel));
                if (key === 0) {
                    tabs.addClass('active');
                }
            }
            htmlForm.insertBefore(tabs.root(), htmlForm.firstChild);
        }
    }
    exports.default = TabsBuilder;
});
define("Mudde/Form/Buttom/Submit", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/ButtonAbstract"], function (require, exports, Node_4, ButtonAbstract_1) {
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
            let element = new Node_4.default('input', attributes);
            return element;
        }
    }
    exports.default = Submit;
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
define("Mudde/Form/Input/Combobox", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract", "Mudde/Form/Data/Array", "Mudde/Form/Helper/StringHelper"], function (require, exports, Node_5, InputAbstract_1, Array_1, StringHelper_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Combobox extends InputAbstract_1.default {
        constructor(config, form) {
            super(form);
            this._multiple = false;
            this._data = new Array_1.default({ data: [] });
            this.configuring(config);
        }
        configureData(config) {
            let main = this;
            let type = StringHelper_3.default.ucfirst(config['_type']);
            requirejs(['Mudde/Form/Data/' + type], (className) => {
                let object = new className.default(config, main);
                main._data = object;
            });
        }
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { multiple: false, data: new Array_1.default({ data: [] }) });
        }
        coreHTMLInput(id, name, language) {
            let element = new Node_5.default('select', Object.assign({ id: id, name: name, placeholder: this.placeholder }, this.multiple === true ? { 'multiple': '' } : {}));
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
define("Mudde/Form/Input/Email", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_6, InputAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Email extends InputAbstract_2.default {
        constructor(config, form) {
            super(form);
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign({}, super.getDefaultConfig());
        }
        coreHTMLInput(id, name, language) {
            let element = new Node_6.default('input', {
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
define("Mudde/Form/Input/File", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_7, InputAbstract_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class File extends InputAbstract_3.default {
        constructor(config, form) {
            super(form);
            this._multiple = false;
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { multiple: false });
        }
        coreHTMLInput(id, name, language) {
            let attributes = {
                id: id,
                name: name,
                type: 'file',
            };
            if (this.multiple) {
                attributes = Object.assign(Object.assign({}, attributes), { multiple: '' });
            }
            let element = new Node_7.default('input', attributes);
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
define("Mudde/Form/Input/Text", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_8, InputAbstract_4) {
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
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { mask: '', format: '', prefix: '', suffix: '', multiple: false, spellcheck: false });
        }
        coreHTMLInput(id, name, language) {
            let element = new Node_8.default('input', {
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
define("Mudde/Form/Input/Textarea", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_9, InputAbstract_5) {
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
            let element = new Node_9.default('textarea', {
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
define("Mudde/Form/Input/Builder/BootstrapBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputBuilderAbstract"], function (require, exports, Node_10, InputBuilderAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BootstrapBuilder extends InputBuilderAbstract_1.default {
        coreBuild(output, input) {
            let attributes = {
                class: 'form-control',
            };
            if (input.help !== '') {
                attributes = Object.assign(Object.assign({}, attributes), { 'aria-describedby': input.id + 'Help' });
            }
            output
                .getElementById(input.id)
                .setAttributes(attributes);
            return output;
        }
        coreMultilingualBuild(output, input, language) {
            output = this.coreBuild(output, input);
            let newNode = new Node_10.default('div', { class: 'input-group mb-1' })
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
            let tabs = new Node_10.default('ul', { class: "nav nav-tabs" });
            for (let key = 0; key < panels.length; key++) {
                let panelLabel = panels.item(key).id;
                let javascript = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`;
                tabs
                    .appendElement(new Node_10.default('li', { class: 'nav-item' }))
                    .appendElement(new Node_10.default('a', { class: 'nav-link ', href: javascript }, panelLabel));
                if (key === 0) {
                    tabs.addClass('active');
                }
            }
            htmlForm.insertBefore(tabs.root(), htmlForm.firstChild);
        }
    }
    exports.default = BootstrapBuilder;
});
define("Mudde/Form/Input/Builder/GeneralBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputBuilderAbstract", "Mudde/Form/Helper/IconHelper"], function (require, exports, Node_11, InputBuilderAbstract_2, IconHelper_1) {
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
                    let panelNode = new Node_11.default('div', { id: panelId, class: `panel ${panelId}` });
                    if (!firstPanel) {
                        panelNode.setAttributes({ hidden: '' });
                    }
                    form.appendElement(panelNode);
                }
            }
        }
        coreBuild(output, input) {
            this.setPanels(input);
            let attributes = {
                id: input.id,
                name: input.id,
                'data-language': input.form.languages[0],
                autofocus: input.autofocus,
            };
            if (input.hidden) {
                attributes = Object.assign(Object.assign({}, attributes), { hidden: '' });
            }
            output.setAttributes(attributes);
            return output;
        }
        coreMultilingualBuild(output, input, language) {
            this.setPanels(input);
            let attributes = {
                id: `${input.id}_${language}`,
                name: `${input.id}[${language}]`,
                'data-language': language,
                autofocus: input.autofocus && input.form.languages[0] === language ? true : false,
                onchange: `javascript:`
            };
            if (input.hidden) {
                attributes = Object.assign(Object.assign({}, attributes), { hidden: '' });
            }
            output.setAttributes(attributes);
            return output;
        }
        finalBuild(elements, input, output) {
            let label = new Node_11.default('label', { for: elements[0].id });
            label.innerHTML = input.label + (input.require ? IconHelper_1.default.starFill('9px') : '');
            output.appendElement_(label);
            elements.forEach(element => {
                output.appendElement_(element.root());
            });
            if (input.help !== '') {
                output.appendElement_(new Node_11.default('span', { id: input.id + 'Help', class: input.id }, input.help));
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
            let attributes = {};
            if (this.min > 0) {
                attributes = Object.assign(Object.assign({}, attributes), { min: this.min });
            }
            if (this.max > 0) {
                attributes = Object.assign(Object.assign({}, attributes), { max: this.max });
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL1N0cmluZ0hlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL0NvbmZpZ3VyYWJsZUFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0NvcmUvRXZlbnQudHMiLCIuLi9zcmMvTXVkZGUvQ29yZS9PYnNlcnZlckludGVyZmFjZS50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL1N1YmplY3RJbnRlcmZhY2UudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdWlsZGVyQWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9IZWxwZXIvR3VpZEhlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1dHRvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRGF0YUV2ZW50LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRm9ybUJ1aWxkZXJBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0QnVpbGRlckFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXRBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0Zvcm0udHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhQWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdWlsZGVyL0dlbmVyYWxCdWlsZGVyLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vQnVpbGRlci9UYWJzQnVpbGRlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1dHRvbi9TdWJtaXQudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhL0FycmF5LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL0ljb25IZWxwZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9Db21ib2JveC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0VtYWlsLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvRmlsZS50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L1RleHQudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9UZXh0YXJlYS50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0J1aWxkZXIvQm9vdHN0cmFwQnVpbGRlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0J1aWxkZXIvR2VuZXJhbEJ1aWxkZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9WYWxpZGF0aW9uL0xlbmd0aC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL1ZhbGlkYXRpb24vTm90RW1wdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUEsTUFBcUIsWUFBWTtRQUUvQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWE7WUFDMUIsSUFBSSxLQUFLLEtBQUssU0FBUztnQkFBRSxPQUFNO1lBRS9CLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7S0FFRjtJQVJELCtCQVFDOzs7OztJQ05ELE1BQThCLG9CQUFvQjtRQUUvQyxXQUFXLENBQUMsTUFBVztZQUNwQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUUzQyxLQUFLLElBQUksR0FBRyxJQUFJLGFBQWEsRUFBRTtnQkFDNUIsSUFBSSxVQUFVLEdBQUcsV0FBVyxHQUFHLHNCQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUN4RCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssU0FBUyxDQUFBO2dCQUM5QyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcs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