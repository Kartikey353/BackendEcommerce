import { OrderStatus } from '../entities/order-status.entity';
declare const CreateOrderStatusDto_base: import("@nestjs/common").Type<Pick<OrderStatus, "language" | "name" | "color" | "serial">>;
export declare class CreateOrderStatusDto extends CreateOrderStatusDto_base {
}
declare const UpdateOrderStatusDto_base: import("@nestjs/common").Type<Partial<CreateOrderStatusDto>>;
export declare class UpdateOrderStatusDto extends UpdateOrderStatusDto_base {
}
export {};
