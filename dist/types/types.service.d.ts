import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './entities/type.entity';
import { GetTypesDto } from './dto/get-types.dto';
export declare class TypesService {
    private types;
    getTypes({ text, search }: GetTypesDto): Type[];
    getTypeBySlug(slug: string): Type;
    create(createTypeDto: CreateTypeDto): Type;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTypeDto: UpdateTypeDto): Type;
    remove(id: number): string;
}
