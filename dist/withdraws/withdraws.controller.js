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
exports.WithdrawsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const withdraws_service_1 = require("./withdraws.service");
const create_withdraw_dto_1 = require("./dto/create-withdraw.dto");
const approve_withdraw_dto_1 = require("./dto/approve-withdraw.dto");
const get_withdraw_dto_1 = require("./dto/get-withdraw.dto");
let WithdrawsController = class WithdrawsController {
    constructor(withdrawsService) {
        this.withdrawsService = withdrawsService;
    }
    createWithdraw(createWithdrawDto) {
        return this.withdrawsService.create(createWithdrawDto);
    }
    async withdraws(query) {
        return this.withdrawsService.getWithdraws(query);
    }
    withdraw(id) {
        return this.withdrawsService.findOne(+id);
    }
    approveWithdraw(id, updateWithdrawDto) {
        return this.withdrawsService.update(+id, updateWithdrawDto);
    }
    deleteWithdraw(id) {
        return this.withdrawsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_withdraw_dto_1.CreateWithdrawDto]),
    __metadata("design:returntype", void 0)
], WithdrawsController.prototype, "createWithdraw", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-withdraw.dto").WithdrawPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_withdraw_dto_1.GetWithdrawsDto]),
    __metadata("design:returntype", Promise)
], WithdrawsController.prototype, "withdraws", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WithdrawsController.prototype, "withdraw", null);
__decorate([
    (0, common_1.Post)(':id/approve'),
    openapi.ApiResponse({ status: 201, type: require("./entities/withdraw.entity").Withdraw }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, approve_withdraw_dto_1.ApproveWithdrawDto]),
    __metadata("design:returntype", void 0)
], WithdrawsController.prototype, "approveWithdraw", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WithdrawsController.prototype, "deleteWithdraw", null);
WithdrawsController = __decorate([
    (0, common_1.Controller)('withdraws'),
    __metadata("design:paramtypes", [withdraws_service_1.WithdrawsService])
], WithdrawsController);
exports.WithdrawsController = WithdrawsController;
//# sourceMappingURL=withdraws.controller.js.map