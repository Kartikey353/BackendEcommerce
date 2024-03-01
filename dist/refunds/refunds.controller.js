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
exports.RefundsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const refunds_service_1 = require("./refunds.service");
const create_refund_dto_1 = require("./dto/create-refund.dto");
const update_refund_dto_1 = require("./dto/update-refund.dto");
let RefundsController = class RefundsController {
    constructor(refundsService) {
        this.refundsService = refundsService;
    }
    create(createRefundDto) {
        return this.refundsService.create(createRefundDto);
    }
    findAll() {
        return this.refundsService.findAll();
    }
    findOne(id) {
        return this.refundsService.findOne(+id);
    }
    update(id, updateRefundDto) {
        return this.refundsService.update(+id, updateRefundDto);
    }
    remove(id) {
        return this.refundsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_refund_dto_1.CreateRefundDto]),
    __metadata("design:returntype", void 0)
], RefundsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RefundsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RefundsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_refund_dto_1.UpdateRefundDto]),
    __metadata("design:returntype", void 0)
], RefundsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RefundsController.prototype, "remove", null);
RefundsController = __decorate([
    (0, common_1.Controller)('refunds'),
    __metadata("design:paramtypes", [refunds_service_1.RefundsService])
], RefundsController);
exports.RefundsController = RefundsController;
//# sourceMappingURL=refunds.controller.js.map