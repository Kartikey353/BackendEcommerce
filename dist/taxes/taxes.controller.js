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
exports.TaxesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const taxes_service_1 = require("./taxes.service");
const create_tax_dto_1 = require("./dto/create-tax.dto");
const update_tax_dto_1 = require("./dto/update-tax.dto");
const get_taxes_dto_1 = require("./dto/get-taxes.dto");
let TaxesController = class TaxesController {
    constructor(taxesService) {
        this.taxesService = taxesService;
    }
    create(createTaxDto) {
        return this.taxesService.create(createTaxDto);
    }
    findAll(getTaxesDto) {
        return this.taxesService.findAll();
    }
    findOne(id) {
        return this.taxesService.findOne(+id);
    }
    update(id, updateTaxDto) {
        return this.taxesService.update(+id, updateTaxDto);
    }
    remove(id) {
        return this.taxesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/tax.entity").Tax }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tax_dto_1.CreateTaxDto]),
    __metadata("design:returntype", void 0)
], TaxesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/tax.entity").Tax] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_taxes_dto_1.GetTaxesDto]),
    __metadata("design:returntype", void 0)
], TaxesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/tax.entity").Tax }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaxesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/tax.entity").Tax }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tax_dto_1.UpdateTaxDto]),
    __metadata("design:returntype", void 0)
], TaxesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaxesController.prototype, "remove", null);
TaxesController = __decorate([
    (0, common_1.Controller)('taxes'),
    __metadata("design:paramtypes", [taxes_service_1.TaxesService])
], TaxesController);
exports.TaxesController = TaxesController;
//# sourceMappingURL=taxes.controller.js.map