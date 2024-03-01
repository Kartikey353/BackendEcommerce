"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStaffsDto = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
class GetStaffsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, type: () => String }, sortedBy: { required: false, type: () => String }, shop_id: { required: false, type: () => Number } };
    }
}
exports.GetStaffsDto = GetStaffsDto;
//# sourceMappingURL=get-staffs.dto.js.map