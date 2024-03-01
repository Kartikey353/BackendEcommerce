"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTypesOrderByColumn = exports.QueryTypesOrderByOrderByClause = exports.GetTypesDto = void 0;
const openapi = require("@nestjs/swagger");
class GetTypesDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, type: () => [require("./get-types.dto").QueryTypesOrderByOrderByClause] }, text: { required: false, type: () => String }, language: { required: false, type: () => String }, search: { required: false, type: () => String } };
    }
}
exports.GetTypesDto = GetTypesDto;
class QueryTypesOrderByOrderByClause {
    static _OPENAPI_METADATA_FACTORY() {
        return { column: { required: true, enum: require("./get-types.dto").QueryTypesOrderByColumn }, order: { required: true, enum: require("../../common/dto/generic-conditions.dto").SortOrder } };
    }
}
exports.QueryTypesOrderByOrderByClause = QueryTypesOrderByOrderByClause;
var QueryTypesOrderByColumn;
(function (QueryTypesOrderByColumn) {
    QueryTypesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryTypesOrderByColumn["NAME"] = "NAME";
    QueryTypesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryTypesOrderByColumn = exports.QueryTypesOrderByColumn || (exports.QueryTypesOrderByColumn = {}));
//# sourceMappingURL=get-types.dto.js.map