"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integrations = void 0;
const request_1 = require("../core/request");
class Integrations {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all the Integrations
     * Get the details of all Integrations available for the account
     * @returns integrations_app Success
     * @throws ApiError
     */
    list({ accountId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/integrations/apps",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Url not found`,
            },
        });
    }
    /**
     * Create an integration hook
     * Create an integration hook
     * @returns integrations_hook Success
     * @throws ApiError
     */
    create({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/integrations/hooks",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Update an Integration Hook
     * Update an Integration Hook
     * @returns integrations_hook Success
     * @throws ApiError
     */
    update({ accountId, hookId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/integrations/hooks/{hook_id}",
            path: {
                account_id: accountId,
                hook_id: hookId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Delete an Integration Hook
     * Delete an Integration Hook
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, hookId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/integrations/hooks/{hook_id}",
            path: {
                account_id: accountId,
                hook_id: hookId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The hook does not exist in the account`,
            },
        });
    }
}
exports.Integrations = Integrations;
//# sourceMappingURL=Integrations.js.map