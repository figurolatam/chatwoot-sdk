"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CannedResponses = void 0;
const request_1 = require("../core/request");
class CannedResponses {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all Canned Responses in an Account
     * Get Details of Canned Responses in an Account
     * @returns canned_response Success
     * @throws ApiError
     */
    list({ accountId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/canned_responses",
            path: {
                account_id: accountId,
            },
            errors: {
                403: `Access denied`,
            },
        });
    }
    /**
     * Add a New Canned Response
     * Add a new Canned Response to Account
     * @returns canned_response Success
     * @throws ApiError
     */
    create({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/canned_responses",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
            },
        });
    }
    /**
     * Update Canned Response in Account
     * Update a Canned Response in Account
     * @returns canned_response Success
     * @throws ApiError
     */
    update({ accountId, id, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/canned_responses/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Agent not found`,
            },
        });
    }
    /**
     * Remove a Canned Response from Account
     * Remove a Canned Response from Account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/canned_responses/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Canned Response not found`,
            },
        });
    }
}
exports.CannedResponses = CannedResponses;
//# sourceMappingURL=CannedResponses.js.map