"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.VariationOption = exports.Variation = exports.OrderProductPivot = exports.Product = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["PUBLISH"] = "publish";
    ProductStatus["DRAFT"] = "draft";
})(ProductStatus || (ProductStatus = {}));
var ProductType;
(function (ProductType) {
    ProductType["SIMPLE"] = "simple";
    ProductType["VARIABLE"] = "variable";
})(ProductType || (ProductType = {}));
class Product extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, slug: { required: true, type: () => String }, type: { required: true, type: () => require("../../types/entities/type.entity").Type }, type_id: { required: true, type: () => Number }, product_type: { required: true, enum: ProductType }, categories: { required: true, type: () => [require("../../categories/entities/category.entity").Category] }, tags: { required: false, type: () => [require("../../tags/entities/tag.entity").Tag] }, variations: { required: false, type: () => [require("../../attributes/entities/attribute-value.entity").AttributeValue] }, variation_options: { required: false, type: () => [require("./product.entity").Variation] }, pivot: { required: false, type: () => require("./product.entity").OrderProductPivot }, orders: { required: false, type: () => [require("../../orders/entities/order.entity").Order] }, shop: { required: true, type: () => require("../../shops/entities/shop.entity").Shop }, shop_id: { required: true, type: () => Number }, related_products: { required: false, type: () => [require("./product.entity").Product] }, description: { required: true, type: () => String }, in_stock: { required: true, type: () => Boolean }, is_taxable: { required: true, type: () => Boolean }, sale_price: { required: false, type: () => Number }, max_price: { required: false, type: () => Number }, min_price: { required: false, type: () => Number }, sku: { required: false, type: () => String }, gallery: { required: false, type: () => [require("../../common/entities/attachment.entity").Attachment] }, image: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, status: { required: true, enum: ProductStatus }, height: { required: false, type: () => String }, length: { required: false, type: () => String }, width: { required: false, type: () => String }, price: { required: false, type: () => Number }, quantity: { required: true, type: () => Number }, unit: { required: true, type: () => String }, ratings: { required: true, type: () => Number }, in_wishlist: { required: true, type: () => Boolean }, my_review: { required: false, type: () => [require("../../reviews/entities/review.entity").Review] }, language: { required: false, type: () => String }, translated_languages: { required: false, type: () => [String] } };
    }
}
exports.Product = Product;
class OrderProductPivot {
    static _OPENAPI_METADATA_FACTORY() {
        return { variation_option_id: { required: false, type: () => Number }, order_quantity: { required: true, type: () => Number }, unit_price: { required: true, type: () => Number }, subtotal: { required: true, type: () => Number } };
    }
}
exports.OrderProductPivot = OrderProductPivot;
class Variation {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, price: { required: true, type: () => Number }, sku: { required: true, type: () => String }, is_disable: { required: true, type: () => Boolean }, sale_price: { required: false, type: () => Number }, quantity: { required: true, type: () => Number }, options: { required: true, type: () => [require("./product.entity").VariationOption] } };
    }
}
exports.Variation = Variation;
class VariationOption {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, value: { required: true, type: () => String } };
    }
}
exports.VariationOption = VariationOption;
class File extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { attachment_id: { required: true, type: () => Number }, url: { required: true, type: () => String }, fileable_id: { required: true, type: () => Number } };
    }
}
exports.File = File;
//# sourceMappingURL=product.entity.js.map