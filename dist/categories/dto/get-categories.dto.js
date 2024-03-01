"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCategoriesOrderByColumn = exports.GetCategoriesDto = exports.CategoryPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class CategoryPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/category.entity").Category] } };
    }
}
exports.CategoryPaginator = CategoryPaginator;
class GetCategoriesDto extends pagination_args_dto_1.PaginationArgs {
    constructor() {
        super(...arguments);
        this.parent = 'null';
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-categories.dto").QueryCategoriesOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, parent: { required: false, type: () => Object, default: 'null' }, language: { required: false, type: () => String } };
    }
}
exports.GetCategoriesDto = GetCategoriesDto;
var QueryCategoriesOrderByColumn;
(function (QueryCategoriesOrderByColumn) {
    QueryCategoriesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryCategoriesOrderByColumn["NAME"] = "NAME";
    QueryCategoriesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryCategoriesOrderByColumn = exports.QueryCategoriesOrderByColumn || (exports.QueryCategoriesOrderByColumn = {}));
//# sourceMappingURL=get-categories.dto.js.map