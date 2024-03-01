"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refund = exports.RefundStatus = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
var RefundStatus;
(function (RefundStatus) {
    RefundStatus["APPROVED"] = "Approved";
    RefundStatus["PENDING"] = "Pending";
    RefundStatus["REJECTED"] = "Rejected";
    RefundStatus["PROCESSING"] = "Processing";
})(RefundStatus = exports.RefundStatus || (exports.RefundStatus = {}));
class Refund extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => String }, status: { required: true, enum: require("./refund.entity").RefundStatus }, shop: { required: true, type: () => require("../../shops/entities/shop.entity").Shop }, order: { required: true, type: () => require("../../orders/entities/order.entity").Order }, customer: { required: true, type: () => require("../../users/entities/user.entity").User } };
    }
}
exports.Refund = Refund;
//# sourceMappingURL=refund.entity.js.map