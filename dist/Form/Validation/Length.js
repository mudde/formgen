"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationAbstract_1 = require("Mudde/Form/ValidationAbstract");
class Length extends ValidationAbstract_1.default {
    constructor(config) {
        super(config);
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
    coreBuild(output) {
        let attributes = Object.assign(Object.assign({}, this.min > 0 ? { minlength: this.min } : {}), this.max > 0 ? { maxlength: this.max } : {});
        this.input.coreIds.forEach(element => {
            element.setAttributes(attributes);
        });
    }
    onchange(event) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVuZ3RoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL011ZGRlL0Zvcm0vVmFsaWRhdGlvbi9MZW5ndGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzRUFBK0Q7QUFFL0QsTUFBcUIsTUFBTyxTQUFRLDRCQUFrQjtJQUtuRCxZQUFZLE1BQVc7UUFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBSlIsU0FBSSxHQUFXLENBQUMsQ0FBQTtRQUNoQixTQUFJLEdBQVcsQ0FBQyxDQUFBO1FBSXJCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNiLE9BQU87WUFDSixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxDQUFDO1NBQ1IsQ0FBQTtJQUNKLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBZ0I7UUFDdkIsSUFBSSxVQUFVLG1DQUNQLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNqRCxDQUFBO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFcEMsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVk7SUFFckIsQ0FBQztJQUVELElBQUksR0FBRztRQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNuQixDQUFDO0lBRUQsSUFBSSxHQUFHLENBQUMsS0FBYTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ25CLENBQUM7SUFFRCxJQUFJLEdBQUcsQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7Q0FFSDtBQWpERCx5QkFpREMifQ==