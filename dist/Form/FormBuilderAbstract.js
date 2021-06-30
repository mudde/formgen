"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BuilderAbstract_1 = require("Mudde/Form/BuilderAbstract");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUJ1aWxkZXJBYnN0cmFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NdWRkZS9Gb3JtL0Zvcm1CdWlsZGVyQWJzdHJhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxnRUFBeUQ7QUFHekQsTUFBOEIsbUJBQW9CLFNBQVEseUJBQWU7SUFJdEUsTUFBTSxDQUFDLElBQVM7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDNUI7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXBCLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztDQUVKO0FBZEQsc0NBY0MifQ==