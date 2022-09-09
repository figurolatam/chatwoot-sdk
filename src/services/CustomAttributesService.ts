/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { custom_attribute } from "../models/custom_attribute";
import type { custom_attribute_create_update_payload } from "../models/custom_attribute_create_update_payload";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class CustomAttributesService {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all custom attributes in an account
     * Get details of custom attributes in an Account
     * @returns custom_attribute Success
     * @throws ApiError
     */
    public getAccountCustomAttribute({
        accountId,
        attributeModel,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * conversation_attribute(0)/contact_attribute(1)
         */
        attributeModel: "0" | "1";
    }): CancelablePromise<Array<custom_attribute>> {
        return __request(this.chatwootAPI, {
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
     */
    public addNewCustomAttributeToAccount({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: custom_attribute_create_update_payload;
    }): CancelablePromise<custom_attribute> {
        return __request(this.chatwootAPI, {
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
     */
    public getDetailsOfASingleCustomAttribute({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the custom attribute
         */
        id: number;
    }): CancelablePromise<custom_attribute> {
        return __request(this.chatwootAPI, {
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
     */
    public updateCustomAttributeInAccount({
        accountId,
        id,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the custom attribute
         */
        id: number;
        data: custom_attribute_create_update_payload;
    }): CancelablePromise<custom_attribute> {
        return __request(this.chatwootAPI, {
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
     */
    public deleteCustomAttributeFromAccount({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the custom attribute
         */
        id: number;
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
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
