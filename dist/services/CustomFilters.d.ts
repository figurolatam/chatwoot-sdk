import type { custom_filter } from "../models/custom_filter";
import type { custom_filter_create_update_payload } from "../models/custom_filter_create_update_payload";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class CustomFilters {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all custom filters
     * List all custom filters in a category of a user
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/list-all-filters}
     */
    list({ accountId, filterType, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The type of custom filter
         */
        filterType?: "conversation" | "contact" | "report";
    }): CancelablePromise<Array<custom_filter>>;
    /**
     * Create a custom filter
     * Create a custom filter in the account
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/create-a-custom-filter}
     */
    create({ accountId, data, filterType, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: custom_filter_create_update_payload;
        /**
         * The type of custom filter
         */
        filterType?: "conversation" | "contact" | "report";
    }): CancelablePromise<custom_filter>;
    /**
     * Get a custom filter details
     * Get the details of a custom filter in the account
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/get-details-of-a-single-custom-filter}
     */
    get({ accountId, customFilterId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the custom filter
         */
        customFilterId: number;
    }): CancelablePromise<custom_filter>;
    /**
     * Update a custom filter
     * Update a custom filter's attributes
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/update-a-custom-filter}
     */
    update({ accountId, customFilterId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the custom filter
         */
        customFilterId: number;
        data: custom_filter_create_update_payload;
    }): CancelablePromise<custom_filter>;
    /**
     * Delete a custom filter
     * Delete a custom filter from the account
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/delete-a-custom-filter}
     */
    delete({ accountId, customFilterId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the custom filter
         */
        customFilterId: number;
    }): CancelablePromise<any>;
}
