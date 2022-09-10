/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { contact_inboxes } from "../models/contact_inboxes";
import type { contactable_inboxes } from "../models/contactable_inboxes";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class Contact {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Create contact inbox
     * Create a contact inbox record for an inbox
     * @returns contact_inboxes Success
     * @throws ApiError
     */
    public contactInboxCreation({
        accountId,
        id,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
        data: {
            /**
             * The ID of the inbox
             */
            inbox_id: number;
            /**
             * Contact Inbox Source Id
             */
            source_id?: string;
        };
    }): CancelablePromise<contact_inboxes> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/contacts/{id}/contact_inboxes",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                401: `Authentication error`,
                422: `Incorrect payload`,
            },
        });
    }

    /**
     * Get Contactable Inboxes
     * Get List of contactable Inboxes
     * @returns contactable_inboxes Success
     * @throws ApiError
     */
    public contactableInboxesGet({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
    }): CancelablePromise<contactable_inboxes> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/contacts/{id}/contactable_inboxes",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                401: `Authentication error`,
                422: `Incorrect payload`,
            },
        });
    }
}
