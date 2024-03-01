import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
export declare class Type extends CoreEntity {
    name: string;
    slug: string;
    image: Attachment;
    icon: string;
    banners?: Banner[];
    promotional_sliders?: Attachment[];
    settings?: TypeSettings;
    language: string;
    translated_languages: string[];
}
export declare class Banner {
    id: number;
    title?: string;
    description?: string;
    image: Attachment;
}
export declare class TypeSettings {
    isHome: boolean;
    layoutType: string;
    productCard: string;
}
