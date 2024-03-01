"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryStoreNoticesOrderByColumn = exports.GetStoreNoticesDto = exports.StoreNoticePaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class StoreNoticePaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/store-notices.entity").StoreNotice] } };
    }
}
exports.StoreNoticePaginator = StoreNoticePaginator;
class GetStoreNoticesDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-store-notices.dto").QueryStoreNoticesOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, language: { required: false, type: () => String } };
    }
}
exports.GetStoreNoticesDto = GetStoreNoticesDto;
var QueryStoreNoticesOrderByColumn;
(function (QueryStoreNoticesOrderByColumn) {
    QueryStoreNoticesOrderByColumn["NOTICE"] = "NOTICE";
    QueryStoreNoticesOrderByColumn["DESCRIPTION"] = "DESCRIPTION";
    QueryStoreNoticesOrderByColumn["TYPE"] = "TYPE";
    QueryStoreNoticesOrderByColumn["PRIORITY"] = "PRIORITY";
    QueryStoreNoticesOrderByColumn["EXPIRE_AT"] = "EXPIRE_AT";
})(QueryStoreNoticesOrderByColumn = exports.QueryStoreNoticesOrderByColumn || (exports.QueryStoreNoticesOrderByColumn = {}));
//# sourceMappingURL=get-store-notices.dto.js.map