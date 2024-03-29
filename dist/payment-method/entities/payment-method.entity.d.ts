import { CoreEntity } from 'src/common/entities/core.entity';
import { PaymentGateWay } from './payment-gateway.entity';
export declare class PaymentMethod extends CoreEntity {
    method_key: string;
    default_card: boolean;
    payment_gateway_id?: number;
    fingerprint?: string;
    owner_name?: string;
    network?: string;
    type?: string;
    last4?: string;
    expires?: string;
    origin?: string;
    verification_check?: string;
    payment_gateways?: PaymentGateWay;
}
