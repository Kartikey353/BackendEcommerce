"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawStatus = exports.Withdraw = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Withdraw extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number }, status: { required: true, enum: require("./withdraw.entity").WithdrawStatus }, shop_id: { required: true, type: () => Number }, shop: { required: true, type: () => require("../../shops/entities/shop.entity").Shop }, payment_method: { required: true, type: () => String }, details: { required: true, type: () => String }, note: { required: true, type: () => String } };
    }
}
exports.Withdraw = Withdraw;
var WithdrawStatus;
(function (WithdrawStatus) {
    WithdrawStatus["APPROVED"] = "Approved";
    WithdrawStatus["PENDING"] = "Pending";
    WithdrawStatus["ON_HOLD"] = "On hold";
    WithdrawStatus["REJECTED"] = "Rejected";
    WithdrawStatus["PROCESSING"] = "Processing";
})(WithdrawStatus = exports.WithdrawStatus || (exports.WithdrawStatus = {}));
//# sourceMappingURL=withdraw.entity.js.map