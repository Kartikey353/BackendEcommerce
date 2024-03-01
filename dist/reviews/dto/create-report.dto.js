"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReportDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const reports_entity_1 = require("../entities/reports.entity");
class CreateReportDto extends (0, swagger_1.OmitType)(reports_entity_1.Report, [
    'id',
    'created_at',
    'updated_at',
    'user',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateReportDto = CreateReportDto;
//# sourceMappingURL=create-report.dto.js.map