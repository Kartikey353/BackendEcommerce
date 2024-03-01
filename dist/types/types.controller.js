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
exports.TypesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const types_service_1 = require("./types.service");
const create_type_dto_1 = require("./dto/create-type.dto");
const update_type_dto_1 = require("./dto/update-type.dto");
const get_types_dto_1 = require("./dto/get-types.dto");
let TypesController = class TypesController {
    constructor(typesService) {
        this.typesService = typesService;
    }
    create(createTypeDto) {
        return this.typesService.create(createTypeDto);
    }
    findAll(query) {
        return this.typesService.getTypes(query);
    }
    getTypeBySlug(slug) {
        return this.typesService.getTypeBySlug(slug);
    }
    update(id, updateTypeDto) {
        return this.typesService.update(+id, updateTypeDto);
    }
    remove(id) {
        return this.typesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/type.entity").Type }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_type_dto_1.CreateTypeDto]),
    __metadata("design:returntype", void 0)
], TypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/type.entity").Type] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_types_dto_1.GetTypesDto]),
    __metadata("design:returntype", void 0)
], TypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':slug'),
    openapi.ApiResponse({ status: 200, type: require("./entities/type.entity").Type }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypesController.prototype, "getTypeBySlug", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/type.entity").Type }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_type_dto_1.UpdateTypeDto]),
    __metadata("design:returntype", void 0)
], TypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypesController.prototype, "remove", null);
TypesController = __decorate([
    (0, common_1.Controller)('types'),
    __metadata("design:paramtypes", [types_service_1.TypesService])
], TypesController);
exports.TypesController = TypesController;
//# sourceMappingURL=types.controller.js.map