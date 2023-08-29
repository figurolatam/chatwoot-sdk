"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributes = void 0;
const request_1 = require("../core/request");
class CustomAttributes {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all custom attributes in an account
     * Get details of custom attributes in an Account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/get-account-custom-attribute}
     */
    list({ accountId, attributeModel, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/custom_attribute_definitions",
            path: {
                account_id: accountId,
            },
            query: {
                attribute_model: attributeModel,
            },
            errors: {
                403: `Access denied`,
            },
        });
    }
    /**
     * Add a new custom attribute
     * Add a new custom attribute to account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/add-new-custom-attribute-to-account}
     */
    create({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/custom_attribute_definitions",
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
     * Get a custom attribute details
     * Get the details of a custom attribute in the account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/get-details-of-a-single-custom-attribute}
     */
    get({ accountId, id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given attribute ID does not exist in the account`,
            },
        });
    }
    /**
     * Update custom attribute in Account
     * Update a custom attribute in account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/update-custom-attribute-in-account}
     */
    update({ accountId, id, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
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
     * Remove a custom attribute from account
     * Remove a custom attribute from account
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/delete-custom-attribute-from-account}
     */
    delete({ accountId, id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Custom attribute not found`,
            },
        });
    }
}
exports.CustomAttributes = CustomAttributes;
//# sourceMappingURL=CustomAttributes.js.map