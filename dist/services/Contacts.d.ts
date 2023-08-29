import type { contact_conversations } from "../models/contact_conversations";
import type { contact_create } from "../models/contact_create";
import type { contact_list } from "../models/contact_list";
import type { contact_update } from "../models/contact_update";
import type { extended_contact } from "../models/extended_contact";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class Contacts {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List Contacts
     * Listing all the resolved contacts with pagination (Page size = 15) . Resolved contacts are the ones with a value for identifier, email or phone number
     * @returns contact_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactList}
     */
    list({ accountId, sort, page, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The attribute by which list should be sorted
         */
        sort?: "name" | "email" | "phone_number" | "last_activity_at" | "-name" | "-email" | "-phone_number" | "-last_activity_at";
        /**
         * The page parameter
         */
        page?: number;
    }): CancelablePromise<contact_list>;
    /**
     * Create Contact
     * Create a new Contact
     * @returns extended_contact Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactCreate}
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: contact_create;
    }): CancelablePromise<extended_contact>;
    /**
     * Show Contact
     * Get a contact belonging to the account using ID
     * @returns extended_contact Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactDetails}
     */
    get({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
    }): CancelablePromise<extended_contact>;
    /**
     * Update Contact
     * Update a contact belonging to the account using ID
     * @returns void
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactUpdate}
     */
    update({ accountId, id, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
        data: contact_update;
    }): CancelablePromise<void>;
    /**
     * Delete Contact
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactDelete}
     */
    delete({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
    }): CancelablePromise<any>;
    /**
     * Contact Conversations
     * Get conversations associated to that contact
     * @returns contact_conversations Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactConversations}
     */
    listConversations({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
    }): CancelablePromise<contact_conversations>;
    /**
     * Search Contacts
     * Search the resolved contacts using a search key, currently supports email search (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number
     * @returns contact_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactSearch}
     */
    search({ accountId, q, sort, page, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * Search using contact `name`, `identifier`, `email` or `phone number`
         */
        q?: string;
        /**
         * The attribute by which list should be sorted
         */
        sort?: "name" | "email" | "phone_number" | "last_activity_at" | "-name" | "-email" | "-phone_number" | "-last_activity_at";
        /**
         * The page parameter
         */
        page?: number;
    }): CancelablePromise<{
        payload?: contact_list;
    }>;
    /**
     * Contact Filter
     * Filter contacts with custom filter options and pagination
     * @returns contact_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactFilter}
     */
    filter({ accountId, payload, page, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        payload: Array<{
            /**
             * filter attribute name
             */
            attribute_key?: string;
            /**
             * filter operator name
             */
            filter_operator?: "equal_to" | "not_equal_to" | "contains" | "does_not_contain";
            /**
             * array of the attribute values to filter
             */
            values?: Array<string>;
            /**
             * query operator name
             */
            query_operator?: "AND" | "OR";
        }>;
        page?: number;
    }): CancelablePromise<contact_list>;
}
