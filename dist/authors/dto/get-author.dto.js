"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAuthorsOrderByColumn = exports.GetAuthorDto = exports.AuthorPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class AuthorPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/author.entity").Author] } };
    }
}
exports.AuthorPaginator = AuthorPaginator;
class GetAuthorDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-author.dto").QueryAuthorsOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, language: { required: false, type: () => String } };
    }
}
exports.GetAuthorDto = GetAuthorDto;
var QueryAuthorsOrderByColumn;
(function (QueryAuthorsOrderByColumn) {
    QueryAuthorsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryAuthorsOrderByColumn["NAME"] = "NAME";
    QueryAuthorsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryAuthorsOrderByColumn = exports.QueryAuthorsOrderByColumn || (exports.QueryAuthorsOrderByColumn = {}));
//# sourceMappingURL=get-author.dto.js.map