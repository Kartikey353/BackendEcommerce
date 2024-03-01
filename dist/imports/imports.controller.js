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
exports.ImportsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const imports_service_1 = require("./imports.service");
const create_import_dto_1 = require("./dto/create-import.dto");
let ImportsController = class ImportsController {
    constructor(importsService) {
        this.importsService = importsService;
    }
    importAttributes(importAttributesDto) {
        console.log(importAttributesDto);
        return true;
    }
    importProducts(importProductsDto) {
        console.log(importProductsDto);
        return true;
    }
    importVariationOptions(importVariationOptionsDto) {
        console.log(importVariationOptionsDto);
        return true;
    }
};
__decorate([
    (0, common_1.Post)('import-attributes'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_import_dto_1.ImportDto]),
    __metadata("design:returntype", void 0)
], ImportsController.prototype, "importAttributes", null);
__decorate([
    (0, common_1.Post)('import-products'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_import_dto_1.ImportDto]),
    __metadata("design:returntype", void 0)
], ImportsController.prototype, "importProducts", null);
__decorate([
    (0, common_1.Post)('import-variation-options'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_import_dto_1.ImportDto]),
    __metadata("design:returntype", void 0)
], ImportsController.prototype, "importVariationOptions", null);
ImportsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [imports_service_1.ImportsService])
], ImportsController);
exports.ImportsController = ImportsController;
//# sourceMappingURL=imports.controller.js.map