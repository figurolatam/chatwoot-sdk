/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { contact_conversations } from "../models/contact_conversations";
import type { contact_create } from "../models/contact_create";
import type { contact_list } from "../models/contact_list";
import type { contact_update } from "../models/contact_update";
import type { extended_contact } from "../models/extended_contact";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class Contacts {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List Contacts
     * Listing all the resolved contacts with pagination (Page size = 15) . Resolved contacts are the ones with a value for identifier, email or phone number
     * @returns contact_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactList}
     */
    public list({
        accountId,
        sort,
        page = 1,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The attribute by which list should be sorted
         */
        sort?:
            | "name"
            | "email"
            | "phone_number"
            | "last_activity_at"
            | "-name"
            | "-email"
            | "-phone_number"
            | "-last_activity_at";
        /**
         * The page parameter
         */
        page?: number;
    }): CancelablePromise<contact_list> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/contacts",
            path: {
                account_id: accountId,
            },
            query: {
                sort: sort,
                page: page,
            },
            errors: {
                400: `Bad Request Error`,
            },
        });
    }

    /**
     * Create Contact
     * Create a new Contact
     * @returns extended_contact Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactCreate}
     */
    public create({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: contact_create;
    }): CancelablePromise<extended_contact> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/contacts",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                400: `Bad Request Error`,
            },
        });
    }

    /**
     * Show Contact
     * Get a contact belonging to the account using ID
     * @returns extended_contact Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactDetails}
     */
    public get({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
    }): CancelablePromise<extended_contact> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/contacts/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Contact not found`,
            },
        });
    }

    /**
     * Update Contact
     * Update a contact belonging to the account using ID
     * @returns void
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactUpdate}
     */
    public update({
        accountId,
        id,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
        data: contact_update;
    }): CancelablePromise<void> {
        return __request(this.chatwootAPI, {
            method: "PUT",
            url: "/api/v1/accounts/{account_id}/contacts/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Contact not found`,
            },
        });
    }

    /**
     * Delete Contact
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactDelete}
     */
    public delete({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/contacts/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Contact not found`,
            },
        });
    }

    /**
     * Contact Conversations
     * Get conversations associated to that contact
     * @returns contact_conversations Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactConversations}
     */
    public listConversations({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the contact
         */
        id: number;
    }): CancelablePromise<contact_conversations> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/contacts/{id}/conversations",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Contact not found`,
            },
        });
    }

    /**
     * Search Contacts
     * Search the resolved contacts using a search key, currently supports email search (Page size = 15). Resolved contacts are the ones with a value for identifier, email or phone number
     * @returns contact_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactSearch}
     */
    public search({
        accountId,
        q,
        sort,
        page = 1,
    }: {
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
        sort?:
            | "name"
            | "email"
            | "phone_number"
            | "last_activity_at"
            | "-name"
            | "-email"
            | "-phone_number"
            | "-last_activity_at";
        /**
         * The page parameter
         */
        page?: number;
    }): CancelablePromise<{
        payload?: contact_list;
    }> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/contacts/search",
            path: {
                account_id: accountId,
            },
            query: {
                q: q,
                sort: sort,
                page: page,
            },
            errors: {
                401: `Authentication error`,
            },
        });
    }

    /**
     * Contact Filter
     * Filter contacts with custom filter options and pagination
     * @returns contact_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactFilter}
     */
    public filter({
        accountId,
        payload,
        page,
    }: {
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
    }): CancelablePromise<contact_list> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/contacts/filter",
            path: {
                account_id: accountId,
            },
            query: {
                page: page,
            },
            body: {"payload": payload},
            errors: {
                400: `Bad Request Error`,
            },
        });
    }
}
