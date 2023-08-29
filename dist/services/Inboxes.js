"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inboxes = void 0;
const request_1 = require("../core/request");
class Inboxes {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all inboxes
     * List all inboxes available in the current account
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/listAllInboxes}
     */
    list({ accountId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inboxes",
            path: {
                account_id: accountId,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }
    /**
     * Get an inbox
     * Get an inbox available in the current account
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/GetInbox}
     */
    get({ accountId, id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}/",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }
    /**
     * Create an inbox
     * You can create more than one website inbox in each account
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/inboxCreation}
     */
    create({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/inboxes/",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }
    /**
     * Update Inbox
     * Add avatar and disable auto assignment for an inbox
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/updateInbox}
     */
    update({ accountId, id, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }
    /**
     * Show Inbox Agent Bot
     * See if an agent bot is associated to the Inbox
     * @returns agent_bot Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/getInboxAgentBot}
     */
    getAgentBot({ accountId, id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}/agent_bot",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found, Agent bot not found`,
            },
        });
    }
    /**
     * Add or remove agent bot
     * To add an agent bot pass agent_bot id, to remove agent bot from an inbox pass null
     * @returns void
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/updateAgentBot}
     */
    updateAgentBot({ accountId, id, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}/set_agent_bot",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found, Agent bot not found`,
            },
        });
    }
    /**
     * List Agents in Inbox
     * Get Details of Agents in an Inbox
     * @returns agent Success
     * @throws ApiError
     */
    listAgents({ accountId, inboxId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inbox_members/{inbox_id}",
            path: {
                account_id: accountId,
                inbox_id: inboxId,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }
    /**
     * Remove an Agent from Inbox
     * Remove an Agent from Inbox
     * @returns any Success
     * @throws ApiError
     */
    removeAgent({ accountId, inboxId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/inbox_members/{inbox_id}",
            path: {
                account_id: accountId,
                inbox_id: inboxId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
                422: `User must exist`,
            },
        });
    }
    /**
     * Add a New Agent
     * Add a new Agent to Inbox
     * @returns agent Success
     * @throws ApiError
     */
    addAgent({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/inbox_members",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
                422: `User must exist`,
            },
        });
    }
    /**
     * Update Agents in Inbox
     * All agents except the one passed in params will be removed
     * @returns agent Success
     * @throws ApiError
     */
    updateAgentsInInbox({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/inbox_members",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
                422: `User must exist`,
            },
        });
    }
}
exports.Inboxes = Inboxes;
//# sourceMappingURL=Inboxes.js.map