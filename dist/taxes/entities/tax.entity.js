"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Tax extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, rate: { required: true, type: () => Number }, is_global: { required: true, type: () => Boolean }, country: { required: false, type: () => String }, state: { required: false, type: () => String }, zip: { required: false, type: () => String }, city: { required: false, type: () => String }, priority: { required: false, type: () => Number }, on_shipping: { required: true, type: () => Boolean } };
    }
}
exports.Tax = Tax;
//# sourceMappingURL=tax.entity.js.map