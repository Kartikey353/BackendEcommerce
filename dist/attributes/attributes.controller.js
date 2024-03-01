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
exports.AttributesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const attributes_service_1 = require("./attributes.service");
const create_attribute_dto_1 = require("./dto/create-attribute.dto");
const update_attribute_dto_1 = require("./dto/update-attribute.dto");
let AttributesController = class AttributesController {
    constructor(attributesService) {
        this.attributesService = attributesService;
    }
    create(createAttributeDto) {
        return this.attributesService.create(createAttributeDto);
    }
    findAll() {
        return this.attributesService.findAll();
    }
    findOne(param) {
        return this.attributesService.findOne(param);
    }
    update(id, updateAttributeDto) {
        return this.attributesService.update(+id, updateAttributeDto);
    }
    remove(id) {
        return this.attributesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/attribute.entity").Attribute }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attribute_dto_1.CreateAttributeDto]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/attribute.entity").Attribute] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':param'),
    openapi.ApiResponse({ status: 200, type: require("./entities/attribute.entity").Attribute }),
    __param(0, (0, common_1.Param)('param')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/attribute.entity").Attribute }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_attribute_dto_1.UpdateAttributeDto]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "remove", null);
AttributesController = __decorate([
    (0, common_1.Controller)('attributes'),
    __metadata("design:paramtypes", [attributes_service_1.AttributesService])
], AttributesController);
exports.AttributesController = AttributesController;
//# sourceMappingURL=attributes.controller.js.map