import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategoriesDto } from './dto/get-categories.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): import("./entities/category.entity").Category;
    findAll(query: GetCategoriesDto): {
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
        data: import("./entities/category.entity").Category[];
    };
    findOne(param: string, language: string): import("./entities/category.entity").Category;
    update(id: string, updateCategoryDto: UpdateCategoryDto): import("./entities/category.entity").Category;
    remove(id: string): string;
}
