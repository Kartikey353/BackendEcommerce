"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyLogsService = void 0;
const common_1 = require("@nestjs/common");
const notify_logs_entity_1 = require("./entities/notify-logs.entity");
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const notifyLogs = (0, class_transformer_1.plainToClass)(notify_logs_entity_1.NotifyLogs, []);
const options = {
    keys: ['notify_type'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(notifyLogs, options);
let NotifyLogsService = class NotifyLogsService {
    constructor() {
        this.notifyLogs = notifyLogs;
    }
    findAllNotifyLogs({ search, limit, page }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.notifyLogs;
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/notify-logs?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getNotifyLog(param, language) {
        return this.notifyLogs.find((p) => p.id === Number(param));
    }
    readNotifyLog(id) {
        return this.notifyLogs[0];
    }
    readAllNotifyLogs(id) {
        return `This action receiver a  notices`;
    }
    remove(id) {
        return this.notifyLogs[0];
    }
};
NotifyLogsService = __decorate([
    (0, common_1.Injectable)()
], NotifyLogsService);
exports.NotifyLogsService = NotifyLogsService;
//# sourceMappingURL=notify-logs.service.js.map