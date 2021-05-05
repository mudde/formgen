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
define("Mudde/Form/Input/Builder/BootstrapBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputBuilderAbstract"], function (require, exports, Node_9, InputBuilderAbstract_1) {
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
            let newNode = new Node_9.default('div', { class: 'input-group mb-1' })
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
            let tabs = new Node_9.default('ul', { class: "nav nav-tabs" });
            for (let key = 0; key < panels.length; key++) {
                let panelLabel = panels.item(key).id;
                let javascript = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`;
                tabs
                    .appendElement(new Node_9.default('li', { class: 'nav-item' }))
                    .appendElement(new Node_9.default('a', { class: 'nav-link ', href: javascript }, panelLabel));
                if (key === 0) {
                    tabs.addClass('active');
                }
            }
            htmlForm.insertBefore(tabs.root(), htmlForm.firstChild);
        }
    }
    exports.default = BootstrapBuilder;
});
define("Mudde/Form/Input/Builder/GeneralBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputBuilderAbstract", "Mudde/Form/Helper/IconHelper"], function (require, exports, Node_10, InputBuilderAbstract_2, IconHelper_1) {
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
                    let panelNode = new Node_10.default('div', { id: panelId, class: `panel ${panelId}` });
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
            let label = new Node_10.default('label', { for: elements[0].id });
            label.innerHTML = input.label + (input.require ? IconHelper_1.default.starFill('9px') : '');
            output.appendElement_(label);
            elements.forEach(element => {
                output.appendElement_(element.root());
            });
            if (input.help !== '') {
                output.appendElement_(new Node_10.default('span', { id: input.id + 'Help', class: input.id }, input.help));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL1N0cmluZ0hlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL0NvbmZpZ3VyYWJsZUFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0NvcmUvRXZlbnQudHMiLCIuLi9zcmMvTXVkZGUvQ29yZS9PYnNlcnZlckludGVyZmFjZS50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL1N1YmplY3RJbnRlcmZhY2UudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdWlsZGVyQWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9IZWxwZXIvR3VpZEhlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1dHRvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRGF0YUV2ZW50LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRm9ybUJ1aWxkZXJBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0QnVpbGRlckFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXRBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0Zvcm0udHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhQWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdWlsZGVyL0dlbmVyYWxCdWlsZGVyLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vQnVpbGRlci9UYWJzQnVpbGRlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1dHRvbi9TdWJtaXQudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhL0FycmF5LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL0ljb25IZWxwZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9Db21ib2JveC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0VtYWlsLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvRmlsZS50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L1RleHQudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9CdWlsZGVyL0Jvb3RzdHJhcEJ1aWxkZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9CdWlsZGVyL0dlbmVyYWxCdWlsZGVyLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbi9MZW5ndGgudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9WYWxpZGF0aW9uL05vdEVtcHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBLE1BQXFCLFlBQVk7UUFFL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFhO1lBQzFCLElBQUksS0FBSyxLQUFLLFNBQVM7Z0JBQUUsT0FBTTtZQUUvQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBRUY7SUFSRCwrQkFRQzs7Ozs7SUNORCxNQUE4QixvQkFBb0I7UUFFL0MsV0FBVyxDQUFDLE1BQVc7WUFDcEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7WUFFM0MsS0FBSyxJQUFJLEdBQUcsSUFBSSxhQUFhLEVBQUU7Z0JBQzVCLElBQUksVUFBVSxHQUFHLFdBQVcsR0FBRyxzQkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDeEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFNBQVMsQ0FBQTtnQkFDOUMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFFMUQsSUFBSSxTQUFTLEVBQUU7b0JBQ1os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