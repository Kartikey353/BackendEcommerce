"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTaxClassesOrderByColumn = exports.GetTaxesDto = void 0;
const openapi = require("@nestjs/swagger");
class GetTaxesDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { text: { required: false, type: () => String }, orderBy: { required: false, enum: require("./get-taxes.dto").QueryTaxClassesOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder } };
    }
}
exports.GetTaxesDto = GetTaxesDto;
var QueryTaxClassesOrderByColumn;
(function (QueryTaxClassesOrderByColumn) {
    QueryTaxClassesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryTaxClassesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryTaxClassesOrderByColumn["NAME"] = "NAME";
    QueryTaxClassesOrderByColumn["RATE"] = "RATE";
    QueryTaxClassesOrderByColumn["COUNTRY"] = "COUNTRY";
    QueryTaxClassesOrderByColumn["STATE"] = "STATE";
})(QueryTaxClassesOrderByColumn = exports.QueryTaxClassesOrderByColumn || (exports.QueryTaxClassesOrderByColumn = {}));
//# sourceMappingURL=get-taxes.dto.js.map