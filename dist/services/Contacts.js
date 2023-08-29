"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
const request_1 = require("../core/request");
class Contacts {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List Contacts
     * Listing all the resolved contacts with pagination (Page size = 15) . Resolved contacts are the ones with a value for identifier, email or phone number
     * @returns contact_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Contacts/operation/contactList}
     */
    list({ accountId, sort, page = 1, }) {
        return (0, request_1.request)(this.chatwootAPI, {
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
    create({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
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
    get({ accountId, id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
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
    update({ accountId, id, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
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
    delete({ accountId, id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
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
    listConversations({ accountId, id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
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
    search({ accountId, q, sort, page = 1, }) {
        return (0, request_1.request)(this.chatwootAPI, {
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
    filter({ accountId, payload, page, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/contacts/filter",
            path: {
                account_id: accountId,
            },
            query: {
                page: page,
            },
            body: payload,
            errors: {
                400: `Bad Request Error`,
            },
        });
    }
}
exports.Contacts = Contacts;
//# sourceMappingURL=Contacts.js.map