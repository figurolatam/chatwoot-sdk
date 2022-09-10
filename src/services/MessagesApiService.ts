/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { public_message } from "../models/public_message";
import type { public_message_create_payload } from "../models/public_message_create_payload";
import type { public_message_update_payload } from "../models/public_message_update_payload";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

/**
 * Messages calls from Client API
 */
export class MessagesApi {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Create a message
     * Create a message
     * @returns public_message Success
     * @throws ApiError
     */
    public createMessage({
        inboxIdentifier,
        contactIdentifier,
        conversationId,
        data,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        data: public_message_create_payload;
    }): CancelablePromise<public_message> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
                conversation_id: conversationId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * List all messages
     * List all messages in the conversation
     * @returns public_message Success
     * @throws ApiError
     */
    public listAllConverationMessages({
        inboxIdentifier,
        contactIdentifier,
        conversationId,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
    }): CancelablePromise<Array<public_message>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
                conversation_id: conversationId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a message
     * Update a message
     * @returns public_message Success
     * @throws ApiError
     */
    public updateMessage({
        inboxIdentifier,
        contactIdentifier,
        conversationId,
        messageId,
        data,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        /**
         * The numeric ID of the message
         */
        messageId: number;
        data: public_message_update_payload;
    }): CancelablePromise<public_message> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages/{message_id}",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
                conversation_id: conversationId,
                message_id: messageId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
