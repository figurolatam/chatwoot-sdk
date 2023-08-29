import type { public_message } from "../../models/public_message";
import type { public_message_create_payload } from "../../models/public_message_create_payload";
import type { public_message_update_payload } from "../../models/public_message_update_payload";
import type { CancelablePromise } from "../../core/CancelablePromise";
import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
/**
 * Messages calls from Client API
 */
export declare class MessagesApi {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Create a message
     * Create a message
     * @returns public_message Success
     * @throws ApiError
     */
    create({ inboxIdentifier, contactIdentifier, conversationId, data, }: {
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
    }): CancelablePromise<public_message>;
    /**
     * List all messages
     * List all messages in the conversation
     * @returns public_message Success
     * @throws ApiError
     */
    list({ inboxIdentifier, contactIdentifier, conversationId, }: {
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
    }): CancelablePromise<Array<public_message>>;
    /**
     * Update a message
     * Update a message
     * @returns public_message Success
     * @throws ApiError
     */
    update({ inboxIdentifier, contactIdentifier, conversationId, messageId, data, }: {
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
    }): CancelablePromise<public_message>;
}
