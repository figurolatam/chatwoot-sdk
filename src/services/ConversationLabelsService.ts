/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { conversation_labels } from "../models/conversation_labels";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class ConversationLabelsService {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List Labels
     * Lists all the labels of a conversation
     * @returns conversation_labels Success
     * @throws ApiError
     */
    public listAllLabelsOfAConversation({
        accountId,
        conversationId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
    }): CancelablePromise<conversation_labels> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Conversation not found`,
            },
        });
    }

    /**
     * Add Labels
     * Add labels to a conversation. Note that this API would overwrite the existing list of labels associated to the conversation.
     * @returns conversation_labels Success
     * @throws ApiError
     */
    public conversationAddLabels({
        accountId,
        conversationId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        data: {
            /**
             * Array of labels (comma-separated strings)
             */
            labels?: Array<string>;
        };
    }): CancelablePromise<conversation_labels> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                404: `Conversation not found`,
            },
        });
    }
}
