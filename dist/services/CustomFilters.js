"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFilters = void 0;
const request_1 = require("../core/request");
class CustomFilters {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all custom filters
     * List all custom filters in a category of a user
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/list-all-filters}
     */
    list({ accountId, filterType, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/custom_filters",
            path: {
                account_id: accountId,
            },
            query: {
                filter_type: filterType,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create a custom filter
     * Create a custom filter in the account
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/create-a-custom-filter}
     */
    create({ accountId, data, filterType, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/custom_filters",
            path: {
                account_id: accountId,
            },
            query: {
                filter_type: filterType,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get a custom filter details
     * Get the details of a custom filter in the account
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/get-details-of-a-single-custom-filter}
     */
    get({ accountId, customFilterId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
            path: {
                account_id: accountId,
                custom_filter_id: customFilterId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given team ID does not exist in the account`,
            },
        });
    }
    /**
     * Update a custom filter
     * Update a custom filter's attributes
     * @returns custom_filter Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/update-a-custom-filter}
     */
    update({ accountId, customFilterId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
            path: {
                account_id: accountId,
                custom_filter_id: customFilterId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Delete a custom filter
     * Delete a custom filter from the account
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Filters/operation/delete-a-custom-filter}
     */
    delete({ accountId, customFilterId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
            path: {
                account_id: accountId,
                custom_filter_id: customFilterId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The custom filter does not exist in the account`,
            },
        });
    }
}
exports.CustomFilters = CustomFilters;
//# sourceMappingURL=CustomFilters.js.map