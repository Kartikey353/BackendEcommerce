"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreNotice = exports.StoreNoticePriorityType = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
var StoreNoticePriorityType;
(function (StoreNoticePriorityType) {
    StoreNoticePriorityType["High"] = "high";
    StoreNoticePriorityType["Medium"] = "medium";
    StoreNoticePriorityType["Low"] = "low";
})(StoreNoticePriorityType = exports.StoreNoticePriorityType || (exports.StoreNoticePriorityType = {}));
class StoreNotice extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { priority: { required: true, enum: require("./store-notices.entity").StoreNoticePriorityType }, notice: { required: true, type: () => String }, description: { required: false, type: () => String }, effective_from: { required: false, type: () => String }, expired_at: { required: true, type: () => String }, type: { required: false, type: () => String }, is_read: { required: false, type: () => Boolean }, shops: { required: false, type: () => [require("../../shops/entities/shop.entity").Shop] }, users: { required: false, type: () => [require("../../users/entities/user.entity").User] }, received_by: { required: false, type: () => String }, created_by: { required: true, type: () => String }, expire_at: { required: true, type: () => String }, deleted_at: { required: false, type: () => String }, creator: { required: false, type: () => Object }, translated_languages: { required: true, type: () => [String] } };
    }
}
exports.StoreNotice = StoreNotice;
//# sourceMappingURL=store-notices.entity.js.map