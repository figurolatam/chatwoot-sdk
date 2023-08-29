"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsApi = void 0;
const request_1 = require("../../core/request");
class ConversationsApi {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Create a conversation
     * Create a conversation
     * @returns public_conversation Success
     * @throws ApiError
     */
    create({ inboxIdentifier, contactIdentifier, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * List all conversations
     * List all conversations for the contact
     * @returns public_conversation Success
     * @throws ApiError
     */
    list({ inboxIdentifier, contactIdentifier, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
exports.ConversationsApi = ConversationsApi;
//# sourceMappingURL=Conversations.js.map