"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryManufacturersOrderByColumn = exports.GetManufacturersDto = exports.ManufacturerPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class ManufacturerPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/manufacturer.entity").Manufacturer] } };
    }
}
exports.ManufacturerPaginator = ManufacturerPaginator;
class GetManufacturersDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-manufactures.dto").QueryManufacturersOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, language: { required: false, type: () => String } };
    }
}
exports.GetManufacturersDto = GetManufacturersDto;
var QueryManufacturersOrderByColumn;
(function (QueryManufacturersOrderByColumn) {
    QueryManufacturersOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryManufacturersOrderByColumn["NAME"] = "NAME";
    QueryManufacturersOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryManufacturersOrderByColumn = exports.QueryManufacturersOrderByColumn || (exports.QueryManufacturersOrderByColumn = {}));
//# sourceMappingURL=get-manufactures.dto.js.map