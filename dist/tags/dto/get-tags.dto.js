"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTagsOrderByColumn = exports.GetTagsDto = exports.TagPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class TagPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/tag.entity").Tag] } };
    }
}
exports.TagPaginator = TagPaginator;
class GetTagsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-tags.dto").QueryTagsOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, text: { required: false, type: () => String }, name: { required: false, type: () => String }, hasType: { required: false, type: () => String }, language: { required: false, type: () => String }, search: { required: false, type: () => String } };
    }
}
exports.GetTagsDto = GetTagsDto;
var QueryTagsOrderByColumn;
(function (QueryTagsOrderByColumn) {
    QueryTagsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryTagsOrderByColumn["NAME"] = "NAME";
    QueryTagsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryTagsOrderByColumn = exports.QueryTagsOrderByColumn || (exports.QueryTagsOrderByColumn = {}));
//# sourceMappingURL=get-tags.dto.js.map