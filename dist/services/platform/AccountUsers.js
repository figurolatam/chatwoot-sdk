"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUsers = void 0;
const request_1 = require("../../core/request");
class AccountUsers {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all Account Users
     * List all account users
     * @returns any Success
     * @throws ApiError
     */
    list({ accountId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/accounts/{account_id}/account_users",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create an Account User
     * Create an Account User
     * @returns any Success
     * @throws ApiError
     */
    create({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/accounts/{account_id}/account_users",
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
     * Delete an Account User
     * Delete an Account User
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/accounts/{account_id}/account_users",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                404: `The account does not exist`,
            },
        });
    }
}
exports.AccountUsers = AccountUsers;
//# sourceMappingURL=AccountUsers.js.map