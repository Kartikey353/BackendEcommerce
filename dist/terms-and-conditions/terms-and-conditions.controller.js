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
exports.ApproveTermsAndConditionController = exports.DisapproveTermsAndConditionController = exports.TermsAndConditionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const terms_and_conditions_service_1 = require("./terms-and-conditions.service");
const get_terms_and_conditions_dto_1 = require("./dto/get-terms-and-conditions.dto");
const create_terms_and_conditions_dto_1 = require("./dto/create-terms-and-conditions.dto");
const update_terms_and_conditions_dto_1 = require("./dto/update-terms-and-conditions.dto");
let TermsAndConditionsController = class TermsAndConditionsController {
    constructor(termsAndConditionsService) {
        this.termsAndConditionsService = termsAndConditionsService;
    }
    createTermsAndConditions(createTermsAndConditionsDto) {
        return this.termsAndConditionsService.create(createTermsAndConditionsDto);
    }
    getTermsAndConditions(query) {
        return this.termsAndConditionsService.findAllTermsAndConditions(query);
    }
    findOne(param, language) {
        return this.termsAndConditionsService.findOne(param, language);
    }
    updateTermsConditions(id, language, updateTermsAndConditionsDto) {
        return this.termsAndConditionsService.update(+id, updateTermsAndConditionsDto);
    }
    deleteTermsAndConditions(id) {
        return this.termsAndConditionsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/terms-and-conditions.entity").TermsAndConditions }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_terms_and_conditions_dto_1.CreateTermsAndConditionsDto]),
    __metadata("design:returntype", void 0)
], TermsAndConditionsController.prototype, "createTermsAndConditions", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_terms_and_conditions_dto_1.GetTermsAndConditionsDto]),
    __metadata("design:returntype", void 0)
], TermsAndConditionsController.prototype, "getTermsAndConditions", null);
__decorate([
    (0, common_1.Get)(':param'),
    openapi.ApiResponse({ status: 200, type: require("./entities/terms-and-conditions.entity").TermsAndConditions }),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TermsAndConditionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/terms-and-conditions.entity").TermsAndConditions }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('language')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_terms_and_conditions_dto_1.UpdateTermsAndConditionsDto]),
    __metadata("design:returntype", void 0)
], TermsAndConditionsController.prototype, "updateTermsConditions", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TermsAndConditionsController.prototype, "deleteTermsAndConditions", null);
TermsAndConditionsController = __decorate([
    (0, common_1.Controller)('terms-and-conditions'),
    __metadata("design:paramtypes", [terms_and_conditions_service_1.TermsAndConditionsService])
], TermsAndConditionsController);
exports.TermsAndConditionsController = TermsAndConditionsController;
let DisapproveTermsAndConditionController = class DisapproveTermsAndConditionController {
    constructor(termsAndConditionsService) {
        this.termsAndConditionsService = termsAndConditionsService;
    }
    async disapproveTermsAndCondition(id) {
        return this.termsAndConditionsService.disapproveTermsAndCondition(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/terms-and-conditions.entity").TermsAndConditions }),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DisapproveTermsAndConditionController.prototype, "disapproveTermsAndCondition", null);
DisapproveTermsAndConditionController = __decorate([
    (0, common_1.Controller)('disapprove-terms-and-conditions'),
    __metadata("design:paramtypes", [terms_and_conditions_service_1.TermsAndConditionsService])
], DisapproveTermsAndConditionController);
exports.DisapproveTermsAndConditionController = DisapproveTermsAndConditionController;
let ApproveTermsAndConditionController = class ApproveTermsAndConditionController {
    constructor(termsAndConditionsService) {
        this.termsAndConditionsService = termsAndConditionsService;
    }
    async approveTermsAndCondition(id) {
        return this.termsAndConditionsService.approveTermsAndCondition(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/terms-and-conditions.entity").TermsAndConditions }),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApproveTermsAndConditionController.prototype, "approveTermsAndCondition", null);
ApproveTermsAndConditionController = __decorate([
    (0, common_1.Controller)('approve-terms-and-conditions'),
    __metadata("design:paramtypes", [terms_and_conditions_service_1.TermsAndConditionsService])
], ApproveTermsAndConditionController);
exports.ApproveTermsAndConditionController = ApproveTermsAndConditionController;
//# sourceMappingURL=terms-and-conditions.controller.js.map