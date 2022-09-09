/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { canned_response } from "../models/canned_response";
import type { canned_response_create_update_payload } from "../models/canned_response_create_update_payload";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class CannedResponseService {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Update Canned Response in Account
     * Update a Canned Response in Account
     * @returns canned_response Success
     * @throws ApiError
     */
    public updateCannedResponseInAccount({
        accountId,
        id,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the canned response to be updated.
         */
        id: number;
        data: canned_response_create_update_payload;
    }): CancelablePromise<canned_response> {
        return __request(this.chatwootAPI, {
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
}
