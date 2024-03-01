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
exports.TopManufacturersController = exports.ManufacturersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const manufacturers_service_1 = require("./manufacturers.service");
const get_top_manufacturers_dto_1 = require("./dto/get-top-manufacturers.dto");
const get_manufactures_dto_1 = require("./dto/get-manufactures.dto");
const create_manufacturer_dto_1 = require("./dto/create-manufacturer.dto");
const update_manufacturer_dto_1 = require("./dto/update-manufacturer.dto");
let ManufacturersController = class ManufacturersController {
    constructor(manufacturersService) {
        this.manufacturersService = manufacturersService;
    }
    createProduct(createManufactureDto) {
        return this.manufacturersService.create(createManufactureDto);
    }
    async getManufactures(query) {
        return this.manufacturersService.getManufactures(query);
    }
    async getManufactureBySlug(slug) {
        return this.manufacturersService.getManufacturesBySlug(slug);
    }
    update(id, updateManufacturerDto) {
        return this.manufacturersService.update(+id, updateManufacturerDto);
    }
    remove(id) {
        return this.manufacturersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/manufacturer.entity").Manufacturer }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_manufacturer_dto_1.CreateManufacturerDto]),
    __metadata("design:returntype", void 0)
], ManufacturersController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-manufactures.dto").ManufacturerPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_manufactures_dto_1.GetManufacturersDto]),
    __metadata("design:returntype", Promise)
], ManufacturersController.prototype, "getManufactures", null);
__decorate([
    (0, common_1.Get)(':slug'),
    openapi.ApiResponse({ status: 200, type: require("./entities/manufacturer.entity").Manufacturer }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManufacturersController.prototype, "getManufactureBySlug", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/manufacturer.entity").Manufacturer }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_manufacturer_dto_1.UpdateManufacturerDto]),
    __metadata("design:returntype", void 0)
], ManufacturersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManufacturersController.prototype, "remove", null);
ManufacturersController = __decorate([
    (0, common_1.Controller)('manufacturers'),
    __metadata("design:paramtypes", [manufacturers_service_1.ManufacturersService])
], ManufacturersController);
exports.ManufacturersController = ManufacturersController;
let TopManufacturersController = class TopManufacturersController {
    constructor(manufacturersService) {
        this.manufacturersService = manufacturersService;
    }
    async getTopManufactures(query) {
        return this.manufacturersService.getTopManufactures(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/manufacturer.entity").Manufacturer] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_top_manufacturers_dto_1.GetTopManufacturersDto]),
    __metadata("design:returntype", Promise)
], TopManufacturersController.prototype, "getTopManufactures", null);
TopManufacturersController = __decorate([
    (0, common_1.Controller)('top-manufacturers'),
    __metadata("design:paramtypes", [manufacturers_service_1.ManufacturersService])
], TopManufacturersController);
exports.TopManufacturersController = TopManufacturersController;
//# sourceMappingURL=manufacturers.controller.js.map