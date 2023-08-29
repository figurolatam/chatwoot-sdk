import type { conversation_labels } from "../models/conversation_labels";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class ConversationLabels {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List Labels
     * Lists all the labels of a conversation
     * @returns conversation_labels Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversation-Labels/operation/list-all-labels-of-a-conversation}
     */
    list({ accountId, conversationId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
    }): CancelablePromise<conversation_labels>;
    /**
     * Add Labels
     * Add labels to a conversation. Note that this API would overwrite the existing list of labels associated to the conversation.
     * @returns conversation_labels Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversation-Labels/operation/conversation-add-labels}
     */
    add({ accountId, conversationId, data, }: {
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
    }): CancelablePromise<conversation_labels>;
}
