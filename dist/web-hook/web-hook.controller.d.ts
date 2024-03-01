import { WebHookService } from './web-hook.service';
export declare class WebHookController {
    private readonly webHookServices;
    constructor(webHookServices: WebHookService);
    razorPay(): string;
    stripe(): string;
    paypal(): string;
}
