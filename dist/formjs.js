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
            var defaultConfig = this.getDefaultConfig();
            for (let key in defaultConfig) {
                var methodName = 'configure' + StringHelper_1.default.ucfirst(key);
                var hasMethod = this[methodName] !== undefined;
                var value = config[key] ? config[key] : defaultConfig[key];
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
            var output = this.coreHTMLInput(GuidHelper_1.default.create().toString(), 'x', 'nl');
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
define("Mudde/Form/Event", ["require", "exports"], function (require, exports) {
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
            var builders = this.builders = [];
            rawFields.unshift('GeneralBuilder');
            rawFields.forEach(builder => {
                requirejs(['Mudde/Form/Input/Builder/' + builder], (className) => {
                    builders.push(new className.default());
                });
            });
        }
        configureValidations(rawFields) {
            var main = this;
            this.validations = [];
            rawFields.forEach((config, index) => {
                var type = config['_type'];
                requirejs(['Mudde/Form/Validation/' + type], (className) => {
                    main.validations[index] = new className.default(config);
                });
            });
        }
        render() {
            var main = this;
            var elements = [];
            var builders = this.builders;
            var isMultilingual = this.isMultilingual;
            var languages = isMultilingual ? this.form.languages : [this.form.languages[0]];
            var output = new Node_1.default('div', {});
            this.ids = [];
            languages.forEach(language => {
                var id = isMultilingual ? `${main.id}_${language}` : main.id;
                var name = isMultilingual ? `${main.id}[${language}]` : main.id;
                main.renderBuild(id, name, language, elements);
            });
            builders.forEach(builder => {
                builder.finalBuild(elements, main, output);
            });
            return output;
        }
        renderBuild(id, name, language, elements) {
            var main = this;
            var validations = this.validations;
            var builders = this.builders;
            var isMultilingual = this.isMultilingual;
            var object = this.coreHTMLInput(id, name, language);
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
            var main = this;
            var fields = this.fields = [];
            rawFields.forEach(config => {
                var type = config['_type'];
                main.count++;
                requirejs(['Mudde/Form/Input/' + type], (className) => {
                    var object = new className.default(config, main);
                    fields.push(object);
                    main.count--;
                });
            });
        }
        configureButtons(rawFields) {
            var main = this;
            var buttons = this.buttons = [];
            rawFields.forEach(config => {
                var type = config['_type'];
                main.count++;
                requirejs(['Mudde/Form/Buttom/' + type], (className) => {
                    var object = new className.default(config, main);
                    buttons.push(object);
                    main.count--;
                });
            });
        }
        configureBuilders(rawFields) {
            var main = this;
            var builders = this.builders = [];
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
            var main = this;
            var type = StringHelper_2.default.ucfirst(config['_type']);
            main.count++;
            requirejs(['Mudde/Form/Data/' + type], (className) => {
                var object = new className.default(config, main);
                main._data = object;
                main.count--;
            });
        }
        static getFormById(id) {
            var filterFunction = form => { return form.id === id; };
            var form = Form._forms.filter(filterFunction);
            return form.length === 0 ? null : form[0];
        }
        render() {
            var form = this._form;
            if (form === undefined)
                throw new Error('Form not set!');
            form.root().innerHTML = '';
            this.fields.forEach(element => {
                if (form === undefined)
                    throw new Error('Form not set!');
                var renderedElement = element.render();
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
define("Mudde/Form/ObserverInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Mudde/Form/SubjectInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Mudde/Form/DataAbstract", ["require", "exports", "Mudde/Core/ConfigurableAbstract"], function (require, exports, ConfigurableAbstract_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DataAbstract extends ConfigurableAbstract_5.default {
        constructor(form) {
            super();
            this._observers = {};
            this.form = form;
        }
        attach(observer) {
            var observerList = this._observers;
            if (observerList[observer.eventNumber] === undefined) {
                observerList[observer.eventNumber] = [];
            }
            observerList[observer.eventNumber].push(observer);
        }
        detach(observer) {
            var observerList = this._observers[observer.eventNumber];
            if (observerList) {
                observerList.filter(ownObserver => {
                    return ownObserver === observer;
                });
            }
        }
        notify(event) {
            var eventNumber = event.eventNumber;
            var observerList = this._observers[eventNumber];
            if (observerList) {
                observerList.forEach(observer => {
                    observer.update(event);
                });
            }
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
    exports.default = DataAbstract;
    DataAbstract.DATA_PRE_SET = 1;
    DataAbstract.DATA_POST_SET = 2;
    DataAbstract.DATA_PRE_GET = 4;
    DataAbstract.DATA_POST_GET = 8;
});
define("Mudde/Form/DataEvent", ["require", "exports", "Mudde/Form/Event"], function (require, exports, Event_1) {
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
            var htmlForm = form.form.root();
            var panels = htmlForm.getElementsByClassName('panel');
            var tabs = new Node_3.default('ul', { class: "nav nav-tabs" });
            for (let key = 0; key < panels.length; key++) {
                var panelLabel = panels.item(key).id;
                var javascript = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`;
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
            var attributes = {
                type: 'submit',
                class: 'btn btn-primary',
                onclick: `javascript:
         b var data = {};
         Array.from(document.forms[0].elements).forEach(element => {
             if (element.name) {
                 if (element.type === 'file') {
                     tmpData = [];
                     Array.from(element.files).forEach(element => {
                         tmpData.push(element.name)
                     });
                     data[element.name] = tmpData
                 } else {
                     data[element.name] = element.value
                 }
             }
         });
         alert(JSON.stringify({valid: document.forms[0].checkValidity(),...data}, null, 4));
         return false`,
                value: this.label
            };
            var element = new Node_4.default('input', attributes);
            return element;
        }
    }
    exports.default = Submit;
});
define("Mudde/Form/Data/Array", ["require", "exports", "Mudde/Form/DataAbstract", "Mudde/Form/DataEvent"], function (require, exports, DataAbstract_1, DataEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Array extends DataAbstract_1.default {
        constructor(config, form) {
            super(form);
            this._data = {};
            this._currentData = {};
            this.configuring(config);
        }
        getDefaultConfig() {
            return {
                data: {}
            };
        }
        update() {
        }
        connect() {
        }
        restore(id) {
            this._currentData[id] = this._data[id];
        }
        get(id) {
            var event = new DataEvent_1.default(this, DataAbstract_1.default.DATA_PRE_GET, id);
            this.notify(event);
            var value = this._currentData[id] ? this._currentData[id] : this._data[id];
            var event = new DataEvent_1.default(this, DataAbstract_1.default.DATA_POST_GET, id);
            this.notify(event);
            return value;
        }
        set(id, value) {
            var event = new DataEvent_1.default(this, DataAbstract_1.default.DATA_PRE_SET, id);
            this.notify(event);
            this._currentData[id] = value;
            var event = new DataEvent_1.default(this, DataAbstract_1.default.DATA_POST_SET, id);
            this.notify(event);
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
define("Mudde/Form/Input/Email", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_5, InputAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Email extends InputAbstract_1.default {
        constructor(config, form) {
            super(form);
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign({}, super.getDefaultConfig());
        }
        coreHTMLInput(id, name, language) {
            var element = new Node_5.default('input', {
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
define("Mudde/Form/Input/File", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_6, InputAbstract_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class File extends InputAbstract_2.default {
        constructor(config, form) {
            super(form);
            this._multiple = false;
            this.configuring(config);
        }
        getDefaultConfig() {
            return Object.assign(Object.assign({}, super.getDefaultConfig()), { multiple: false });
        }
        coreHTMLInput(id, name, language) {
            var attributes = {
                id: id,
                name: name,
                type: 'file',
            };
            if (this.multiple) {
                attributes = Object.assign(Object.assign({}, attributes), { multiple: '' });
            }
            var element = new Node_6.default('input', attributes);
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
define("Mudde/Form/Input/Text", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputAbstract"], function (require, exports, Node_7, InputAbstract_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Text extends InputAbstract_3.default {
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
            var element = new Node_7.default('input', {
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
define("Mudde/Form/Input/Builder/BootstrapBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputBuilderAbstract"], function (require, exports, Node_8, InputBuilderAbstract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BootstrapBuilder extends InputBuilderAbstract_1.default {
        coreBuild(output, input) {
            var attributes = {
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
            var newNode = new Node_8.default('div', { class: 'input-group mb-1' })
                .appendNode_('span', { class: 'input-group-text' })
                .appendNode('i', { class: `${language} flag mr-0` })
                ._()
                .appendElement_(output.root());
            return newNode;
        }
        finalBuild(elements, input, output) {
            output.setAttributes({ class: 'mb-1' });
            var label = output.getElementByTagName('label').item(0);
            if (!label)
                throw new Error('label element not found!');
            label.classList.add('form-label');
            var help = output.getElementByClass(input.id).item(0);
            if (!help)
                throw new Error('help element not found!');
            if (input.help !== '') {
                help.classList.add('form-text');
            }
        }
        postBuild(form) {
            var htmlForm = form.form.root();
            var panels = htmlForm.getElementsByClassName('panel');
            var tabs = new Node_8.default('ul', { class: "nav nav-tabs" });
            for (let key = 0; key < panels.length; key++) {
                var panelLabel = panels.item(key).id;
                var javascript = `javascript:var panelName='${panelLabel}'; Array.from(document.getElementById('main').firstChild.getElementsByClassName('panel')).forEach(element=>{ if(element.id === panelName){ element.removeAttribute('hidden')} else { element.setAttribute('hidden', '') } });Array.from(document.getElementById('main').firstChild.getElementsByClassName('nav-link')).forEach(element=>{ if(element.innerText === panelName){ element.classList.add('active') } else { element.classList.remove('active')} })`;
                tabs
                    .appendElement(new Node_8.default('li', { class: 'nav-item' }))
                    .appendElement(new Node_8.default('a', { class: 'nav-link ', href: javascript }, panelLabel));
                if (key === 0) {
                    tabs.addClass('active');
                }
            }
            htmlForm.insertBefore(tabs.root(), htmlForm.firstChild);
        }
    }
    exports.default = BootstrapBuilder;
});
define("Mudde/Form/Input/Builder/GeneralBuilder", ["require", "exports", "Mudde/Core/Node", "Mudde/Form/InputBuilderAbstract", "Mudde/Form/Helper/IconHelper"], function (require, exports, Node_9, InputBuilderAbstract_2, IconHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GeneralBuilder extends InputBuilderAbstract_2.default {
        setPanels(input) {
            var form = input.form.form;
            var panelId = `panel-${input.panel}`;
            if (form.hasElementByClass(panelId)) {
                form.getElementById(panelId);
            }
            else {
                form.gotoRoot();
                if (panelId !== null) {
                    var firstPanel = form.getElementByClass('panel').length === 0;
                    var panelNode = new Node_9.default('div', { id: panelId, class: `panel ${panelId}` });
                    if (!firstPanel) {
                        panelNode.setAttributes({ hidden: '' });
                    }
                    form.appendElement(panelNode);
                }
            }
        }
        coreBuild(output, input) {
            this.setPanels(input);
            var attributes = {
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
            var attributes = {
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
            var label = new Node_9.default('label', { for: elements[0].id });
            label.innerHTML = input.label + (input.require ? IconHelper_1.default.starFill('9px') : '');
            output.appendElement_(label);
            elements.forEach(element => {
                output.appendElement_(element.root());
            });
            if (input.help !== '') {
                output.appendElement_(new Node_9.default('span', { id: input.id + 'Help', class: input.id }, input.help));
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
            var attributes = {};
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
            var attributes = {
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
            var attributes = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL1N0cmluZ0hlbHBlci50cyIsIi4uL3NyYy9NdWRkZS9Db3JlL0NvbmZpZ3VyYWJsZUFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vQnVpbGRlckFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL0d1aWRIZWxwZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdXR0b25BYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0V2ZW50LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vRm9ybUJ1aWxkZXJBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0QnVpbGRlckFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbkFic3RyYWN0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXRBYnN0cmFjdC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0Zvcm0udHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9PYnNlcnZlckludGVyZmFjZS50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL1N1YmplY3RJbnRlcmZhY2UudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhQWJzdHJhY3QudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhRXZlbnQudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9CdWlsZGVyL0dlbmVyYWxCdWlsZGVyLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vQnVpbGRlci9UYWJzQnVpbGRlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0J1dHRvbi9TdWJtaXQudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9EYXRhL0FycmF5LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSGVscGVyL0ljb25IZWxwZXIudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9FbWFpbC50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L0ZpbGUudHMiLCIuLi9zcmMvTXVkZGUvRm9ybS9JbnB1dC9UZXh0LnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvQnVpbGRlci9Cb290c3RyYXBCdWlsZGVyLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vSW5wdXQvQnVpbGRlci9HZW5lcmFsQnVpbGRlci50cyIsIi4uL3NyYy9NdWRkZS9Gb3JtL1ZhbGlkYXRpb24vTGVuZ3RoLnRzIiwiLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbi9Ob3RFbXB0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxNQUFxQixZQUFZO1FBRS9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBYTtZQUMxQixJQUFJLEtBQUssS0FBSyxTQUFTO2dCQUFFLE9BQU07WUFFL0IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUVGO0lBUkQsK0JBUUM7Ozs7O0lDTkQsTUFBOEIsb0JBQW9CO1FBRS9DLFdBQVcsQ0FBQyxNQUFXO1lBQ3BCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBRTNDLEtBQUssSUFBSSxHQUFHLElBQUksYUFBYSxFQUFFO2dCQUM1QixJQUFJLFVBQVUsR0FBRyxXQUFXLEdBQUcsc0JBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ3hELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLENBQUE7Z0JBQzlDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBRTFELElBQUksU0FBUyxFQUFFO29CQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FB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