import type { contact_inboxes } from "../models/contact_inboxes";
import type { contactable_inboxes } from "../models/contactable_inboxes";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class Contact {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Create contact inbox
     * Create a contact inbox record for an inbox
     * @returns contact_inboxes Success
     * @throws ApiError
     */
    create({ accountId, id, data, }: {
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
    }): CancelablePromise<contact_inboxes>;
    /**
     * Get Contactable Inboxes
     * Get List of contactable Inboxes
     * @returns contactable_inboxes Success
     * @throws ApiError
     */
    getContactable({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
    }): CancelablePromise<contactable_inboxes>;
}
