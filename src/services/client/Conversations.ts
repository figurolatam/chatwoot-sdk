/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { public_conversation } from "../../models/public_conversation";

import type { CancelablePromise } from "../../core/CancelablePromise";
import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
import { request as __request } from "../../core/request";

export class ConversationsApi {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Create a conversation
     * Create a conversation
     * @returns public_conversation Success
     * @throws ApiError
     */
    public create({
        inboxIdentifier,
        contactIdentifier,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
    }): CancelablePromise<public_conversation> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * List all conversations
     * List all conversations for the contact
     * @returns public_conversation Success
     * @throws ApiError
     */
    public list({
        inboxIdentifier,
        contactIdentifier,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
    }): CancelablePromise<Array<public_conversation>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
