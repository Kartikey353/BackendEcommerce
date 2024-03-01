import { GetUsersDto } from 'src/users/dto/get-users.dto';
import { UsersService } from 'src/users/users.service';
import { CreateStoreNoticeDto } from './dto/create-store-notice.dto';
import { GetStoreNoticesDto } from './dto/get-store-notices.dto';
import { UpdateStoreNoticeDto } from './dto/update-store-notice.dto';
import { StoreNoticesService } from './store-notices.service';
export declare class StoreNoticesController {
    private readonly storeNoticesService;
    private readonly usersService;
    constructor(storeNoticesService: StoreNoticesService, usersService: UsersService);
    createStoreNotice(createStoreNoticeDto: CreateStoreNoticeDto): import("./entities/store-notices.entity").StoreNotice;
    getStoreNotices(query: GetStoreNoticesDto): {
        count: number;
        current_page: number;
        firstItem: number;
        lastItem: number;
        last_page: number;
        per_page: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: import("./entities/store-notices.entity").StoreNotice[];
    };
    getAllUsers(query: GetUsersDto): import("../users/entities/user.entity").User[];
    getStoreNotice(param: string, language: string): import("./entities/store-notices.entity").StoreNotice;
    update(id: string, updateStoreNoticeDto: UpdateStoreNoticeDto): import("./entities/store-notices.entity").StoreNotice;
    deleteStoreNotice(id: string): string;
}
