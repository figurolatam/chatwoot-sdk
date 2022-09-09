/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook } from "../models/webhook";
import type { webhook_create_update_payload } from "../models/webhook_create_update_payload";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class WebhooksService {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all webhooks
     * List all webhooks in the account
     * @returns webhook Success
     * @throws ApiError
     */
    public listAllWebhooks({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<webhook>> {
        return __request(this.chatwootAPI, {
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
    public createAWebhook({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: webhook_create_update_payload;
    }): CancelablePromise<webhook> {
        return __request(this.chatwootAPI, {
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
    public updateAWebhook({
        accountId,
        webhookId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the webhook
         */
        webhookId: number;
        data: webhook_create_update_payload;
    }): CancelablePromise<webhook> {
        return __request(this.chatwootAPI, {
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
    public deleteAWebhook({
        accountId,
        webhookId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the webhook
         */
        webhookId: number;
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
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
