/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export declare class ProductModel extends Document {
    id: number;
    name: string;
    slug: string;
    description: string;
    type_id: string;
    price: number;
    sale_price: number;
    language: string;
    min_price: number;
    max_price: number;
    sku: string;
    quantity: number;
    in_stock: number;
    is_taxable: number;
    shipping_class_id: number;
    status: string;
    product_type: string;
    unit: string;
    height: number;
    width: number;
    length: number;
    image: {
        id: string;
        original: string;
        thumbnail: string;
    };
    video: string;
    gallery: {
        id: string;
        original: string;
        thumbnail: string;
    }[];
    deleted_at: Date;
    author_id: number;
    manufacturer_id: number;
    is_digital: number;
    is_external: number;
    external_product_url: string;
    external_product_button_text: string;
    ratings: number;
    total_reviews: number;
    my_review: string;
    in_wishlist: boolean;
    blocked_dates: Date[];
    translated_languages: string[];
    categories: {
        id: number;
        name: string;
        slug: string;
        language: string;
        icon: string;
        image: string[];
        details: string;
        parent: string;
        type_id: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        parent_id: string;
        translated_languages: string[];
        pivot: {
            product_id: number;
            category_id: number;
        };
    }[];
    shop: {
        id: number;
        owner_id: number;
        name: string;
        slug: string;
        description: string;
        cover_image: {
            id: string;
            original: string;
            thumbnail: string;
        };
        logo: {
            id: string;
            original: string;
            thumbnail: string;
        };
        is_active: number;
        address: {
            zip: string;
            city: string;
            state: string;
            country: string;
            street_address: string;
        };
        settings: {
            contact: string;
            socials: {
                url: string;
                icon: string;
            }[];
            website: string;
            location: {
                lat: number;
                lng: number;
                city: string;
                state: string;
                country: string;
                formattedAddress: string;
            };
        };
        created_at: Date;
        updated_at: Date;
    };
    type: {
        id: number;
        name: string;
        settings: {
            isHome: boolean;
            layoutType: string;
            productCard: string;
        };
        slug: string;
        language: string;
        icon: string;
        promotional_sliders: {
            id: string;
            original: string;
            thumbnail: string;
        }[];
        created_at: Date;
        updated_at: Date;
        translated_languages: string[];
    };
    variations: string[];
    metas: string[];
    manufacturer: string;
    variation_options: string[];
    tags: string[];
    author: string;
}
export declare const ProductSchema: import("mongoose").Schema<ProductModel, import("mongoose").Model<ProductModel, any, any, any, Document<unknown, any, ProductModel> & ProductModel & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ProductModel, Document<unknown, {}, import("mongoose").FlatRecord<ProductModel>> & import("mongoose").FlatRecord<ProductModel> & {
    _id: import("mongoose").Types.ObjectId;
}>;
