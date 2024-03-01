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
exports.RefundPoliciesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const refund_policies_service_1 = require("./refund-policies.service");
const create_refund_policy_dto_1 = require("./dto/create-refund-policy.dto");
const get_refund_policies_dto_1 = require("./dto/get-refund-policies.dto");
const update_refund_policy_dto_1 = require("./dto/update-refund-policy.dto");
let RefundPoliciesController = class RefundPoliciesController {
    constructor(refundPoliciesService) {
        this.refundPoliciesService = refundPoliciesService;
    }
    createRefund(createRefundPolicyDto) {
        return this.refundPoliciesService.create(createRefundPolicyDto);
    }
    findAll(query) {
        return this.refundPoliciesService.findAllRefundPolicies(query);
    }
    getRefund(param, language) {
        return this.refundPoliciesService.getRefundPolicy(param, language);
    }
    update(id, language, updateRefundDto) {
        return this.refundPoliciesService.update(+id, updateRefundDto);
    }
    deleteRefund(id) {
        return this.refundPoliciesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/refund-policies.entity").RefundPolicy }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_refund_policy_dto_1.CreateRefundPolicyDto]),
    __metadata("design:returntype", void 0)
], RefundPoliciesController.prototype, "createRefund", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_refund_policies_dto_1.GetRefundPolicyDto]),
    __metadata("design:returntype", void 0)
], RefundPoliciesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':param'),
    openapi.ApiResponse({ status: 200, type: require("./entities/refund-policies.entity").RefundPolicy }),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RefundPoliciesController.prototype, "getRefund", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/refund-policies.entity").RefundPolicy }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('language')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_refund_policy_dto_1.UpdateRefundPolicyDto]),
    __metadata("design:returntype", void 0)
], RefundPoliciesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RefundPoliciesController.prototype, "deleteRefund", null);
RefundPoliciesController = __decorate([
    (0, common_1.Controller)('refund-policies'),
    __metadata("design:paramtypes", [refund_policies_service_1.RefundPoliciesService])
], RefundPoliciesController);
exports.RefundPoliciesController = RefundPoliciesController;
//# sourceMappingURL=refund-policies.controller.js.map