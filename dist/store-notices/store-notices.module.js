"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreNoticesModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const store_notices_controller_1 = require("./store-notices.controller");
const store_notices_service_1 = require("./store-notices.service");
let StoreNoticesModule = class StoreNoticesModule {
};
StoreNoticesModule = __decorate([
    (0, common_1.Module)({
        controllers: [store_notices_controller_1.StoreNoticesController],
        providers: [store_notices_service_1.StoreNoticesService, users_service_1.UsersService],
    })
], StoreNoticesModule);
exports.StoreNoticesModule = StoreNoticesModule;
//# sourceMappingURL=store-notices.module.js.map