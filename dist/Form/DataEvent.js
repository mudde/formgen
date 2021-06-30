"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("Mudde/Core/Event");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL011ZGRlL0Zvcm0vRGF0YUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQXFDO0FBRXJDLE1BQXFCLFNBQVUsU0FBUSxlQUFLO0lBSXpDLFlBQVksTUFBVSxFQUFFLEtBQVksRUFBRSxFQUFTO1FBQzVDLEtBQUssQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVELElBQUksRUFBRTtRQUNILElBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUV6RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDbEIsQ0FBQztDQUVIO0FBZkQsNEJBZUMifQ==