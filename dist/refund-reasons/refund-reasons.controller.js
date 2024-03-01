"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundReasonsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const refund_reasons_service_1 = require("./refund-reasons.service");
const create_refund_reasons_dto_1 = require("./dto/create-refund-reasons.dto");
const get_refund_reasons_dto_1 = require("./dto/get-refund-reasons.dto");
const update_refund_reasons_dto_1 = require("./dto/update-refund-reasons.dto");
let RefundReasonsController = class RefundReasonsController {
    constructor(refundReasonsService) {
        this.refundReasonsService = refundReasonsService;
    }
    createRefund(createRefundReasonDto) {
        return this.refundReasonsService.create(createRefundReasonDto);
    }
    findAll(query) {
        return this.refundReasonsService.findAllRefundPolicies(query);
    }
    getRefund(param, language) {
        return this.refundReasonsService.getRefundPolicy(param, language);
    }
    update(id, language, updateRefundReasonDto) {
        return this.refundReasonsService.update(+id, updateRefundReasonDto);
    }
    deleteRefund(id) {
        return this.refundReasonsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/refund-reasons.entity").RefundReason }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_refund_reasons_dto_1.CreateRefundReasonDto]),
    __metadata("design:returntype", void 0)
], RefundReasonsController.prototype, "createRefund", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_refund_reasons_dto_1.GetRefundReasonDto]),
    __metadata("design:returntype", void 0)
], RefundReasonsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':param'),
    openapi.ApiResponse({ status: 200, type: require("./entities/refund-reasons.entity").RefundReason }),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RefundReasonsController.prototype, "getRefund", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/refund-reasons.entity").RefundReason }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('language')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_refund_reasons_dto_1.UpdateRefundReasonDto]),
    __metadata("design:returntype", void 0)
], RefundReasonsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RefundReasonsController.prototype, "deleteRefund", null);
RefundReasonsController = __decorate([
    (0, common_1.Controller)('refund-reasons'),
    __metadata("design:paramtypes", [refund_reasons_service_1.RefundReasonsService])
], RefundReasonsController);
exports.RefundReasonsController = RefundReasonsController;
//# sourceMappingURL=refund-reasons.controller.js.map