import type { public_conversation } from "../../models/public_conversation";
import type { CancelablePromise } from "../../core/CancelablePromise";
import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
export declare class ConversationsApi {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Create a conversation
     * Create a conversation
     * @returns public_conversation Success
     * @throws ApiError
     */
    create({ inboxIdentifier, contactIdentifier, }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
    }): CancelablePromise<public_conversation>;
    /**
     * List all conversations
     * List all conversations for the contact
     * @returns public_conversation Success
     * @throws ApiError
     */
    list({ inboxIdentifier, contactIdentifier, }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
    }): CancelablePromise<Array<public_conversation>>;
}
