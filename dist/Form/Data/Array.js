"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAbstract_1 = require("Mudde/Form/DataAbstract");
class Array extends DataAbstract_1.default {
    constructor(config, form) {
        form ? super(form) : super();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTXVkZGUvRm9ybS9EYXRhL0FycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMERBQW1EO0FBR25ELE1BQXFCLEtBQU0sU0FBUSxzQkFBWTtJQUU1QyxZQUFZLE1BQVcsRUFBRSxJQUFXO1FBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0I7UUFDYix5QkFDTSxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsRUFDN0I7SUFDSixDQUFDO0lBRUQsSUFBSTtJQUNKLENBQUM7SUFFRCxPQUFPO0lBQ1AsQ0FBQztDQUNIO0FBbEJELHdCQWtCQyJ9