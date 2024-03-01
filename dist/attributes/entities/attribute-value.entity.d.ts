import { CoreEntity } from 'src/common/entities/core.entity';
import { Attribute } from './attribute.entity';
export declare class AttributeValue extends CoreEntity {
    shop_id: number;
    value: string;
    meta?: string;
    attribute: Attribute;
}
