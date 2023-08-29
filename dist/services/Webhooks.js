"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhooks = void 0;
const request_1 = require("../core/request");
class Webhooks {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all webhooks
     * List all webhooks in the account
     * @returns webhook Success
     * @throws ApiError
     */
    list({ accountId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/webhooks",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Add a webhook
     * Add a webhook subscription to the account
     * @returns webhook Success
     * @throws ApiError
     */
    create({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/webhooks",
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
     * Update a webhook object
     * Update a webhook object in the account
     * @returns webhook Success
     * @throws ApiError
     */
    update({ accountId, webhookId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/webhooks/{webhook_id}",
            path: {
                account_id: accountId,
                webhook_id: webhookId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Delete a webhook
     * Delete a webhook from the account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, webhookId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/webhooks/{webhook_id}",
            path: {
                account_id: accountId,
                webhook_id: webhookId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The webhook does not exist in the account`,
            },
        });
    }
}
exports.Webhooks = Webhooks;
//# sourceMappingURL=Webhooks.js.map