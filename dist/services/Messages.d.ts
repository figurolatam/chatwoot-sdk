import type { conversation_message_create } from "../models/conversation_message_create";
import type { conversation_message_update } from "../models/conversation_message_update";
import type { generic_id } from "../models/generic_id";
import type { message } from "../models/message";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
/**
 * Messages calls from Platform API
 */
export declare class Messages {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Get messages
     * List all messages of a conversation
     * @returns any Success
     * @throws ApiError
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
    }): CancelablePromise<Array<generic_id & message>>;
    /**
     * Create New Message
     * Create a new message in the conversation
     * @returns any Success
     * @throws ApiError
     */
    create({ accountId, conversationId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        data: conversation_message_create;
    }): CancelablePromise<generic_id & message>;
    /**
     * Update a Message
     * Update a message in the conversation
     * @returns any Success
     * @throws ApiError
     */
    update({ accountId, conversationId, data, messageId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        data: conversation_message_update;
        /**
         * The payload as {@link conversation_message_update}
         */
        /**
         * The numeric ID of the message
         */
        messageId: number;
    }): CancelablePromise<generic_id & message>;
    /**
     * Delete a message
     * Delete a message and it's attachments from the conversation.
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, conversationId, messageId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        /**
         * The numeric ID of the message
         */
        messageId: number;
    }): CancelablePromise<any>;
}
