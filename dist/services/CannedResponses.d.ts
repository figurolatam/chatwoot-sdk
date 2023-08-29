import type { canned_response } from "../models/canned_response";
import type { canned_response_create_update_payload } from "../models/canned_response_create_update_payload";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class CannedResponses {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all Canned Responses in an Account
     * Get Details of Canned Responses in an Account
     * @returns canned_response Success
     * @throws ApiError
     */
    list({ accountId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<canned_response>>;
    /**
     * Add a New Canned Response
     * Add a new Canned Response to Account
     * @returns canned_response Success
     * @throws ApiError
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: canned_response_create_update_payload;
    }): CancelablePromise<canned_response>;
    /**
     * Update Canned Response in Account
     * Update a Canned Response in Account
     * @returns canned_response Success
     * @throws ApiError
     */
    update({ accountId, id, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the canned response to be updated.
         */
        id: number;
        data: canned_response_create_update_payload;
    }): CancelablePromise<canned_response>;
    /**
     * Remove a Canned Response from Account
     * Remove a Canned Response from Account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the canned response to be deleted
         */
        id: number;
    }): CancelablePromise<any>;
}
