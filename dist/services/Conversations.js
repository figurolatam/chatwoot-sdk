"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversations = void 0;
const request_1 = require("../core/request");
class Conversations {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Get Conversation Counts
     * Get open, unassigned and all Conversation counts
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/conversationListMeta}
     */
    getMeta({ accountId, status = "open", q, inboxId, teamId, labels, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations/meta",
            path: {
                account_id: accountId,
            },
            query: {
                status: status,
                q: q,
                inbox_id: inboxId,
                team_id: teamId,
                labels: labels,
            },
            errors: {
                400: `Bad Request Error`,
            },
        });
    }
    /**
     * Conversations List
     * List all the conversations with pagination
     * @returns conversation_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/conversationList}
     */
    list({ accountId, assigneeType = "all", status = "open", q, inboxId, teamId, labels, page = 1, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations",
            path: {
                account_id: accountId,
            },
            query: {
                assignee_type: assigneeType,
                status: status,
                q: q,
                inbox_id: inboxId,
                team_id: teamId,
                labels: labels,
                page: page,
            },
            errors: {
                400: `Bad Request Error`,
            },
        });
    }
    /**
     * Create New Conversation
     * Creating a conversation in chatwoot requires a source id.
     *
     * Learn more about source_id: https://github.com/chatwoot/chatwoot/wiki/Building-on-Top-of-Chatwoot:-Importing-Existing-Contacts-and-Creating-Conversations
     * @returns Pick<conversation, "id" | "account_id" | "inbox_id"> Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/newConversation}
     */
    create({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
            },
        });
    }
    /**
     * Conversations Filter
     * Filter conversations with custom filter options and pagination
     * @returns conversation_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/conversationFilter}
     */
    filter({ accountId, payload, page, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/filter",
            path: {
                account_id: accountId,
            },
            query: {
                page: page,
            },
            body: {
                payload
            },
            errors: {
                400: `Bad Request Error`,
            },
        });
    }
    /**
     * Conversation Details
     * Get all details regarding a conversation with all messages in the conversation
     * @returns conversation_show Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/get-details-of-a-conversation}
     */
    get({ accountId, conversationId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            errors: {
                403: `Access denied`,
                404: `Conversation not found`,
            },
        });
    }
    /**
     * Toggle Status
     * Toggles the status of the conversation between open and resolved
     * @returns conversation_status_toggle Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/toggle-status-of-a-conversation}
     */
    toggleStatus({ accountId, conversationId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_status",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                404: `Conversation not found`,
            },
        });
    }
}
exports.Conversations = Conversations;
//# sourceMappingURL=Conversations.js.map