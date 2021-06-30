"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationAbstract_1 = require("Mudde/Form/ValidationAbstract");
class NotEmpty extends ValidationAbstract_1.default {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90RW1wdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTXVkZGUvRm9ybS9WYWxpZGF0aW9uL05vdEVtcHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0VBQStEO0FBRS9ELE1BQXFCLFFBQVMsU0FBUSw0QkFBa0I7SUFFckQsWUFBWSxNQUFXO1FBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNiLE9BQU8sRUFBRSxDQUFBO0lBQ1osQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFnQjtRQUN2QixJQUFJLFVBQVUsR0FBUTtZQUNuQixRQUFRLEVBQUUsRUFBRTtTQUNkLENBQUE7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNwQyxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7Q0FDSDtBQXBCRCwyQkFvQkMifQ==