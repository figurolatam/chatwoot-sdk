/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { canned_response } from "../models/canned_response";
import type { canned_response_create_update_payload } from "../models/canned_response_create_update_payload";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class CannedResponsesService {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all Canned Responses in an Account
     * Get Details of Canned Responses in an Account
     * @returns canned_response Success
     * @throws ApiError
     */
    public getAccountCannedResponse({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<canned_response>> {
        return __request(this.chatwootAPI, {
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
    public addNewCannedResponseToAccount({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: canned_response_create_update_payload;
    }): CancelablePromise<canned_response> {
        return __request(this.chatwootAPI, {
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
     * Remove a Canned Response from Account
     * Remove a Canned Response from Account
     * @returns any Success
     * @throws ApiError
     */
    public deleteCannedResponseFromAccount({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the canned response to be deleted
         */
        id: number;
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
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
