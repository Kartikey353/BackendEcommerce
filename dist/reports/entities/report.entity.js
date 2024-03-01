"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReports = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class MyReports extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: true, type: () => String } };
    }
}
exports.MyReports = MyReports;
//# sourceMappingURL=report.entity.js.map