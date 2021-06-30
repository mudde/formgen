"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeCore_1 = require("mudde-node/src/NodeCore");
const InputAbstract_1 = require("Mudde/Form/InputAbstract");
class UploadFile extends InputAbstract_1.default {
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
        let element = new NodeCore_1.default('input', attributes);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9NdWRkZS9Gb3JtL0lucHV0L1VwbG9hZEZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBOEM7QUFFOUMsNERBQW9EO0FBRXBELE1BQXFCLFVBQVcsU0FBUSx1QkFBYTtJQUlsRCxZQUFZLE1BQVcsRUFBRSxJQUFVO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUhOLGNBQVMsR0FBWSxLQUFLLENBQUE7UUFJL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2IsdUNBQ00sS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQzNCLFFBQVEsRUFBRSxLQUFLLElBQ2pCO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCO1FBQ3JELElBQUksVUFBVSxtQkFDWCxFQUFFLEVBQUUsRUFBRSxFQUNOLElBQUksRUFBRSxJQUFJLEVBQ1YsSUFBSSxFQUFFLE1BQU0sSUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUMzQyxDQUFBO1FBRUQsSUFBSSxPQUFPLEdBQWEsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUV6RCxPQUFPLE9BQU8sQ0FBQTtJQUNqQixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3hCLENBQUM7Q0FFSDtBQXJDRCw2QkFxQ0MifQ==