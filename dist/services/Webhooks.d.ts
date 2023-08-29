import type { webhook } from "../models/webhook";
import type { webhook_create_update_payload } from "../models/webhook_create_update_payload";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class Webhooks {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all webhooks
     * List all webhooks in the account
     * @returns webhook Success
     * @throws ApiError
     */
    list({ accountId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<webhook>>;
    /**
     * Add a webhook
     * Add a webhook subscription to the account
     * @returns webhook Success
     * @throws ApiError
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: webhook_create_update_payload;
    }): CancelablePromise<webhook>;
    /**
     * Update a webhook object
     * Update a webhook object in the account
     * @returns webhook Success
     * @throws ApiError
     */
    update({ accountId, webhookId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the webhook
         */
        webhookId: number;
        data: webhook_create_update_payload;
    }): CancelablePromise<webhook>;
    /**
     * Delete a webhook
     * Delete a webhook from the account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, webhookId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the webhook
         */
        webhookId: number;
    }): CancelablePromise<any>;
}
