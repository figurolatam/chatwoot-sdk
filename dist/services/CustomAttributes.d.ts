import type { custom_attribute } from "../models/custom_attribute";
import type { custom_attribute_create_update_payload } from "../models/custom_attribute_create_update_payload";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class CustomAttributes {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all custom attributes in an account
     * Get details of custom attributes in an Account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/get-account-custom-attribute}
     */
    list({ accountId, attributeModel, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * conversation_attribute(0)/contact_attribute(1)
         */
        attributeModel: "0" | "1";
    }): CancelablePromise<Array<custom_attribute>>;
    /**
     * Add a new custom attribute
     * Add a new custom attribute to account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/add-new-custom-attribute-to-account}
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: custom_attribute_create_update_payload;
    }): CancelablePromise<custom_attribute>;
    /**
     * Get a custom attribute details
     * Get the details of a custom attribute in the account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/get-details-of-a-single-custom-attribute}
     */
    get({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the custom attribute
         */
        id: number;
    }): CancelablePromise<custom_attribute>;
    /**
     * Update custom attribute in Account
     * Update a custom attribute in account
     * @returns custom_attribute Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/update-custom-attribute-in-account}
     */
    update({ accountId, id, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the custom attribute
         */
        id: number;
        data: custom_attribute_create_update_payload;
    }): CancelablePromise<custom_attribute>;
    /**
     * Remove a custom attribute from account
     * Remove a custom attribute from account
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Custom-Attributes/operation/delete-custom-attribute-from-account}
     */
    delete({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the custom attribute
         */
        id: number;
    }): CancelablePromise<any>;
}
