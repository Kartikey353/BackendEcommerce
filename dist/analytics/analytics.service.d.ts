import { Analytics } from './entities/analytics.entity';
import { CategoryWiseProduct } from './entities/category-wise-product.entity';
import { Product } from 'src/products/entities/product.entity';
import { TopRateProduct } from './entities/top-rate-product.entity';
export declare class AnalyticsService {
    private analytics;
    private categoryWiseProduct;
    private lowStockProducts;
    private topRateProduct;
    findAll(): Analytics;
    findAllCategoryWiseProduct(): CategoryWiseProduct[];
    findAllLowStockProducts(): Product[];
    findAllTopRateProduct(): TopRateProduct[];
}
