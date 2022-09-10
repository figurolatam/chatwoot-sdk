/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user } from "../models/user";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class ConversationAssignment {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Assign Conversation
     * Assign a conversation to an agent or a team
     * @returns user Success
     * @throws ApiError
     */
    public assignAConversation({
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
             * Id of the assignee user
             */
            assignee_id?: number;
            /**
             * Id of the team. If the assignee_id is present, this param would be ignored
             */
            team_id?: number;
        };
    }): CancelablePromise<user> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/assignments",
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
