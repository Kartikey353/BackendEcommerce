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
exports.StoreNoticesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const get_users_dto_1 = require("../users/dto/get-users.dto");
const users_service_1 = require("../users/users.service");
const create_store_notice_dto_1 = require("./dto/create-store-notice.dto");
const get_store_notices_dto_1 = require("./dto/get-store-notices.dto");
const update_store_notice_dto_1 = require("./dto/update-store-notice.dto");
const store_notices_service_1 = require("./store-notices.service");
let StoreNoticesController = class StoreNoticesController {
    constructor(storeNoticesService, usersService) {
        this.storeNoticesService = storeNoticesService;
        this.usersService = usersService;
    }
    createStoreNotice(createStoreNoticeDto) {
        return this.storeNoticesService.create(createStoreNoticeDto);
    }
    getStoreNotices(query) {
        return this.storeNoticesService.getStoreNotices(query);
    }
    getAllUsers(query) {
        return this.usersService.getUsersNotify(query);
    }
    getStoreNotice(param, language) {
        return this.storeNoticesService.getStoreNotice(param, language);
    }
    update(id, updateStoreNoticeDto) {
        return this.storeNoticesService.update(+id, updateStoreNoticeDto);
    }
    deleteStoreNotice(id) {
        return this.storeNoticesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/store-notices.entity").StoreNotice }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_store_notice_dto_1.CreateStoreNoticeDto]),
    __metadata("design:returntype", void 0)
], StoreNoticesController.prototype, "createStoreNotice", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_store_notices_dto_1.GetStoreNoticesDto]),
    __metadata("design:returntype", void 0)
], StoreNoticesController.prototype, "getStoreNotices", null);
__decorate([
    (0, common_1.Get)('getUsersToNotify'),
    openapi.ApiResponse({ status: 200, type: [require("../users/entities/user.entity").User] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_dto_1.GetUsersDto]),
    __metadata("design:returntype", void 0)
], StoreNoticesController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':param'),
    openapi.ApiResponse({ status: 200, type: require("./entities/store-notices.entity").StoreNotice }),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StoreNoticesController.prototype, "getStoreNotice", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/store-notices.entity").StoreNotice }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_store_notice_dto_1.UpdateStoreNoticeDto]),
    __metadata("design:returntype", void 0)
], StoreNoticesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoreNoticesController.prototype, "deleteStoreNotice", null);
StoreNoticesController = __decorate([
    (0, common_1.Controller)('store-notices'),
    __metadata("design:paramtypes", [store_notices_service_1.StoreNoticesService,
        users_service_1.UsersService])
], StoreNoticesController);
exports.StoreNoticesController = StoreNoticesController;
//# sourceMappingURL=store-notices.controller.js.map