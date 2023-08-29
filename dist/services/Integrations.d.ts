import type { integrations_app } from "../models/integrations_app";
import type { integrations_hook } from "../models/integrations_hook";
import type { integrations_hook_create_payload } from "../models/integrations_hook_create_payload";
import type { integrations_hook_update_payload } from "../models/integrations_hook_update_payload";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class Integrations {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all the Integrations
     * Get the details of all Integrations available for the account
     * @returns integrations_app Success
     * @throws ApiError
     */
    list({ accountId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<integrations_app>>;
    /**
     * Create an integration hook
     * Create an integration hook
     * @returns integrations_hook Success
     * @throws ApiError
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: integrations_hook_create_payload;
    }): CancelablePromise<integrations_hook>;
    /**
     * Update an Integration Hook
     * Update an Integration Hook
     * @returns integrations_hook Success
     * @throws ApiError
     */
    update({ accountId, hookId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the integration hook
         */
        hookId: number;
        data: integrations_hook_update_payload;
    }): CancelablePromise<integrations_hook>;
    /**
     * Delete an Integration Hook
     * Delete an Integration Hook
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, hookId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the integration hook
         */
        hookId: number;
    }): CancelablePromise<any>;
}
