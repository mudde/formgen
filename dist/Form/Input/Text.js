"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const InputAbstract_1 = require("Mudde/Form/InputAbstract");
class Text extends InputAbstract_1.default {
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
        let element = new NodeCore_1.default('input', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L1RleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBOEM7QUFFOUMsNERBQW9EO0FBRXBELE1BQXFCLElBQUssU0FBUSx1QkFBYTtJQVM1QyxZQUFZLE1BQVcsRUFBRSxJQUFVO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQVJOLFVBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsWUFBTyxHQUFXLEVBQUUsQ0FBQTtRQUNwQixZQUFPLEdBQVcsRUFBRSxDQUFBO1FBQ3BCLFlBQU8sR0FBVyxFQUFFLENBQUE7UUFDcEIsY0FBUyxHQUFZLEtBQUssQ0FBQTtRQUMxQixnQkFBVyxHQUFZLEtBQUssQ0FBQTtRQUlqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFUyxpQkFBaUIsS0FBYyxPQUFPLElBQUksQ0FBQSxDQUFDLENBQUM7SUFFdEQsZ0JBQWdCO1FBQ2IsdUNBQ00sS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQzNCLElBQUksRUFBRSxFQUFFLEVBQ1IsTUFBTSxFQUFFLEVBQUUsRUFDVixNQUFNLEVBQUUsRUFBRSxFQUNWLE1BQU0sRUFBRSxFQUFFLEVBQ1YsUUFBUSxFQUFFLEtBQUssRUFDZixVQUFVLEVBQUUsS0FBSyxJQUNuQjtJQUNKLENBQUM7SUFFRCxhQUFhLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUNyRCxJQUFJLE9BQU8sR0FBYSxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFO1lBQzNDLEVBQUUsRUFBRSxFQUFFO1lBQ04sSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsTUFBTTtZQUNaLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDN0IsQ0FBQyxDQUFBO1FBRUYsT0FBTyxPQUFPLENBQUE7SUFDakIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN2QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdEIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7SUFDdkIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN0QixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFBO0lBQzNCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDMUIsQ0FBQztDQUNIO0FBdkZELHVCQXVGQyJ9