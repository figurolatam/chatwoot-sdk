"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentBots = void 0;
const request_1 = require("../../core/request");
class AgentBots {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all AgentBots
     * List all agent bots available
     * @returns agent_bot Success
     * @throws ApiError
     */
    list() {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/agent_bots",
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create an Agent Bot
     * Create an agent bot
     * @returns agent_bot Success
     * @throws ApiError
     */
    create({ data }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/agent_bots",
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get an agent bot details
     * Get the details of an agent bot
     * @returns agent_bot Success
     * @throws ApiError
     */
    get({ id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/agent_bots/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given agent bot ID does not exist`,
            },
        });
    }
    /**
     * Update an agent bot
     * Update an agent bot's attributes
     * @returns agent_bot Success
     * @throws ApiError
     */
    update({ id, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/platform/api/v1/agent_bots/{id}",
            path: {
                id: id,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Delete an AgentBot
     * Delete an AgentBot
     * @returns any Success
     * @throws ApiError
     */
    delete({ id, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/agent_bots/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The agent bot does not exist`,
            },
        });
    }
}
exports.AgentBots = AgentBots;
//# sourceMappingURL=AgentBots.js.map