"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const request_1 = require("../../core/request");
class Users {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Create a User
     * Create a User
     * @returns user Success
     * @throws ApiError
     */
    create({ data }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/users",
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get an user details
     * Get the details of an user
     * @returns user Success
     * @throws ApiError
     */
    get({ id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/users/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given user does not exist`,
            },
        });
    }
    /**
     * Update a user
     * Update a user's attributes
     * @returns user Success
     * @throws ApiError
     */
    update({ id, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/platform/api/v1/users/{id}",
            path: {
                id: id,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Delete a User
     * Delete a User
     * @returns any Success
     * @throws ApiError
     */
    delete({ id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/users/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The user does not exist`,
            },
        });
    }
    /**
     * Get User SSO Link
     * Get the sso link of a user
     * @returns any Success
     * @throws ApiError
     */
    getSSOUrl({ id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/users/{id}/login",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given user does not exist`,
            },
        });
    }
}
exports.Users = Users;
//# sourceMappingURL=Users.js.map