"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Report extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: false, type: () => Number }, user: { required: true, type: () => [require("../../users/entities/user.entity").User] }, model_id: { required: true, type: () => Number }, model_type: { required: true, type: () => String }, message: { required: true, type: () => String } };
    }
}
exports.Report = Report;
//# sourceMappingURL=reports.entity.js.map