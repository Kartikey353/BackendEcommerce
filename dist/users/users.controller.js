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
exports.AllCustomerController = exports.AllStaffsController = exports.MyStaffsController = exports.VendorController = exports.AdminController = exports.ProfilesController = exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const create_profile_dto_1 = require("./dto/create-profile.dto");
const update_profile_dto_1 = require("./dto/update-profile.dto");
const get_users_dto_1 = require("./dto/get-users.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createUser(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    getAllUsers(query) {
        return this.usersService.getUsers(query);
    }
    getUser(id) {
        return this.usersService.findOne(+id);
    }
    updateUser(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    removeUser(id) {
        return this.usersService.remove(+id);
    }
    activeUser(id) {
        return this.usersService.activeUser(+id);
    }
    banUser(id) {
        return this.usersService.banUser(+id);
    }
    makeAdmin(id) {
        return this.usersService.makeAdmin(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-users.dto").UserPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_dto_1.GetUsersDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeUser", null);
__decorate([
    (0, common_1.Post)('unblock-user'),
    openapi.ApiResponse({ status: 201, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "activeUser", null);
__decorate([
    (0, common_1.Post)('block-user'),
    openapi.ApiResponse({ status: 201, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "banUser", null);
__decorate([
    (0, common_1.Post)('make-admin'),
    openapi.ApiResponse({ status: 201, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "makeAdmin", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
let ProfilesController = class ProfilesController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createProfile(createProfileDto) {
        console.log(createProfileDto);
    }
    updateProfile(updateProfileDto) {
        console.log(updateProfileDto);
    }
    deleteProfile(id) {
        return this.usersService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "createProfile", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_profile_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "deleteProfile", null);
ProfilesController = __decorate([
    (0, common_1.Controller)('profiles'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], ProfilesController);
exports.ProfilesController = ProfilesController;
let AdminController = class AdminController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAllAdmin(query) {
        return this.usersService.getAdmin(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-users.dto").UserPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_dto_1.GetUsersDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getAllAdmin", null);
AdminController = __decorate([
    (0, common_1.Controller)('admin/list'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AdminController);
exports.AdminController = AdminController;
let VendorController = class VendorController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAllVendor(query) {
        return this.usersService.getVendors(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-users.dto").UserPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_dto_1.GetUsersDto]),
    __metadata("design:returntype", void 0)
], VendorController.prototype, "getAllVendor", null);
VendorController = __decorate([
    (0, common_1.Controller)('vendors/list'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], VendorController);
exports.VendorController = VendorController;
let MyStaffsController = class MyStaffsController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAllMyStaffs(query) {
        return this.usersService.getMyStaffs(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-users.dto").UserPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_dto_1.GetUsersDto]),
    __metadata("design:returntype", void 0)
], MyStaffsController.prototype, "getAllMyStaffs", null);
MyStaffsController = __decorate([
    (0, common_1.Controller)('my-staffs'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], MyStaffsController);
exports.MyStaffsController = MyStaffsController;
let AllStaffsController = class AllStaffsController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAllStaffs(query) {
        return this.usersService.getAllStaffs(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-users.dto").UserPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_dto_1.GetUsersDto]),
    __metadata("design:returntype", void 0)
], AllStaffsController.prototype, "getAllStaffs", null);
AllStaffsController = __decorate([
    (0, common_1.Controller)('all-staffs'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AllStaffsController);
exports.AllStaffsController = AllStaffsController;
let AllCustomerController = class AllCustomerController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAllCustomers(query) {
        return this.usersService.getAllCustomers(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-users.dto").UserPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_dto_1.GetUsersDto]),
    __metadata("design:returntype", void 0)
], AllCustomerController.prototype, "getAllCustomers", null);
AllCustomerController = __decorate([
    (0, common_1.Controller)('customers/list'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AllCustomerController);
exports.AllCustomerController = AllCustomerController;
//# sourceMappingURL=users.controller.js.map