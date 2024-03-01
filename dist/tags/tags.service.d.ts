import { CreateTagDto } from './dto/create-tag.dto';
import { GetTagsDto } from './dto/get-tags.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';
export declare class TagsService {
    private tags;
    create(createTagDto: CreateTagDto): {
        language: string;
        type: import("../types/entities/type.entity").Type;
        name: string;
        image: import("../common/entities/attachment.entity").Attachment;
        details: string;
        icon: string;
        id: number;
    };
    findAll({ page, limit, search }: GetTagsDto): {
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
        data: Tag[];
    };
    findOne(param: string, language: string): Tag;
    update(id: number, updateTagDto: UpdateTagDto): Tag;
    remove(id: number): string;
}
