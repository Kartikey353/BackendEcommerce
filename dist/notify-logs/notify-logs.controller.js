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
exports.NotifyLogsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const notify_logs_service_1 = require("./notify-logs.service");
const get_notify_logs_dto_1 = require("./dto/get-notify-logs.dto");
let NotifyLogsController = class NotifyLogsController {
    constructor(notifyLogsService) {
        this.notifyLogsService = notifyLogsService;
    }
    findAll(query) {
        return this.notifyLogsService.findAllNotifyLogs(query);
    }
    getNotifyLog(param, language) {
        return this.notifyLogsService.getNotifyLog(param, language);
    }
    readNotifyLogs(id) {
        return this.notifyLogsService.readNotifyLog(+id);
    }
    notifyLogAllRead(id) {
        return this.notifyLogsService.readAllNotifyLogs(+id);
    }
    deleteNotifyLog(id) {
        return this.notifyLogsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_notify_logs_dto_1.GetNotifyLogsDto]),
    __metadata("design:returntype", void 0)
], NotifyLogsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':param'),
    openapi.ApiResponse({ status: 200, type: require("./entities/notify-logs.entity").NotifyLogs }),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], NotifyLogsController.prototype, "getNotifyLog", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/notify-logs.entity").NotifyLogs }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotifyLogsController.prototype, "readNotifyLogs", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotifyLogsController.prototype, "notifyLogAllRead", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/notify-logs.entity").NotifyLogs }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotifyLogsController.prototype, "deleteNotifyLog", null);
NotifyLogsController = __decorate([
    (0, common_1.Controller)('notify-logs'),
    __metadata("design:paramtypes", [notify_logs_service_1.NotifyLogsService])
], NotifyLogsController);
exports.NotifyLogsController = NotifyLogsController;
//# sourceMappingURL=notify-logs.controller.js.map