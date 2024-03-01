"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalYearSaleByMonth = exports.Analytics = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Analytics extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { totalRevenue: { required: false, type: () => Number }, totalShops: { required: false, type: () => Number }, todaysRevenue: { required: false, type: () => Number }, totalOrders: { required: false, type: () => Number }, newCustomers: { required: false, type: () => Number }, totalYearSaleByMonth: { required: false, type: () => [require("./analytics.entity").TotalYearSaleByMonth] } };
    }
}
exports.Analytics = Analytics;
class TotalYearSaleByMonth {
    static _OPENAPI_METADATA_FACTORY() {
        return { total: { required: false, type: () => Number }, month: { required: false, type: () => String } };
    }
}
exports.TotalYearSaleByMonth = TotalYearSaleByMonth;
//# sourceMappingURL=analytics.entity.js.map