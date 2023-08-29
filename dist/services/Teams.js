"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teams = void 0;
const request_1 = require("../core/request");
class Teams {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all teams
     * List all teams available in the current account
     * @returns team Success
     * @throws ApiError
     */
    list({ accountId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/teams",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create a team
     * Create a team in the account
     * @returns team Success
     * @throws ApiError
     */
    create({ accountId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/teams",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get a team details
     * Get the details of a team in the account
     * @returns team Success
     * @throws ApiError
     */
    get({ accountId, teamId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/teams/{team_id}",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given team ID does not exist in the account`,
            },
        });
    }
    /**
     * Update a team
     * Update a team's attributes
     * @returns team Success
     * @throws ApiError
     */
    update({ accountId, teamId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/teams/{team_id}",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Delete a team
     * Delete a team from the account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, teamId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/teams/{team_id}",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The team does not exist in the account`,
            },
        });
    }
    /**
     * List Agents in Team
     * Get Details of Agents in an Team
     * @returns agent Success
     * @throws ApiError
     */
    listMembers({ accountId, teamId, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "GET",
            url: "/accounts/{account_id}/teams/{team_id}/team_members",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }
    /**
     * Add a New Agent
     * Add a new Agent to Team
     * @returns agent Success
     * @throws ApiError
     */
    addAgent({ accountId, teamId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "POST",
            url: "/accounts/{account_id}/teams/{team_id}/team_members",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Team not found`,
                422: `User must exist`,
            },
        });
    }
    /**
     * Update Agents in Team
     * All agents except the one passed in params will be removed
     * @returns agent Success
     * @throws ApiError
     */
    updateAgentsInTeam({ accountId, teamId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "PATCH",
            url: "/accounts/{account_id}/teams/{team_id}/team_members",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Team not found`,
                422: `User must exist`,
            },
        });
    }
    /**
     * Remove an Agent from Team
     * Remove an Agent from Team
     * @returns any Success
     * @throws ApiError
     */
    removeAgent({ accountId, teamId, data, }) {
        return (0, request_1.request)(this.chatwootAPI, {
            method: "DELETE",
            url: "/accounts/{account_id}/teams/{team_id}/team_members",
            path: {
                account_id: accountId,
                team_id: teamId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Team not found`,
                422: `User must exist`,
            },
        });
    }
}
exports.Teams = Teams;
//# sourceMappingURL=Teams.js.map