"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesApi = void 0;
const request_1 = require("../../core/request");
/**
 * Messages calls from Client API
 */
class MessagesApi {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Create a message
     * Create a message
     * @returns public_message Success
     * @throws ApiError
     */
    create({ inboxIdentifier, contactIdentifier, conversationId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
                conversation_id: conversationId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * List all messages
     * List all messages in the conversation
     * @returns public_message Success
     * @throws ApiError
     */
    list({ inboxIdentifier, contactIdentifier, conversationId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
                conversation_id: conversationId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Update a message
     * Update a message
     * @returns public_message Success
     * @throws ApiError
     */
    update({ inboxIdentifier, contactIdentifier, conversationId, messageId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages/{message_id}",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
                conversation_id: conversationId,
                message_id: messageId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
exports.MessagesApi = MessagesApi;
//# sourceMappingURL=Messages.js.map