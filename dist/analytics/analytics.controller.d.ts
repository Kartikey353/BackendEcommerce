import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    analytics(): import("./entities/analytics.entity").Analytics;
}
export declare class CategoryWiseProductController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    analytics(): import("./entities/category-wise-product.entity").CategoryWiseProduct[];
}
export declare class LowStockProductsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    analytics(): import("../products/entities/product.entity").Product[];
}
export declare class TopRateProductController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    analytics(): import("./entities/top-rate-product.entity").TopRateProduct[];
}
