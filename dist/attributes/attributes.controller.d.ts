import { AttributesService } from './attributes.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
export declare class AttributesController {
    private readonly attributesService;
    constructor(attributesService: AttributesService);
    create(createAttributeDto: CreateAttributeDto): import("./entities/attribute.entity").Attribute;
    findAll(): import("./entities/attribute.entity").Attribute[];
    findOne(param: string): import("./entities/attribute.entity").Attribute;
    update(id: string, updateAttributeDto: UpdateAttributeDto): import("./entities/attribute.entity").Attribute;
    remove(id: string): string;
}
