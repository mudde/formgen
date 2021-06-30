"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BuilderAbstract_1 = require("Mudde/Form/BuilderAbstract");
class InputBuilderAbstract extends BuilderAbstract_1.default {
    handle(data) {
        if (this.nextEvent) {
            this.nextEvent.handle(data);
        }
        this.coreBuild(data);
        return data;
    }
}
exports.default = InputBuilderAbstract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXRCdWlsZGVyQWJzdHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTXVkZGUvRm9ybS9JbnB1dEJ1aWxkZXJBYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGdFQUF5RDtBQUd6RCxNQUE4QixvQkFBcUIsU0FBUSx5QkFBZTtJQUl2RSxNQUFNLENBQUMsSUFBUztRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUM1QjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFcEIsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0NBRUo7QUFkRCx1Q0FjQyJ9