/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { agent } from "../models/agent";
import type { team } from "../models/team";
import type { team_create_update_payload } from "../models/team_create_update_payload";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class TeamsService {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all teams
     * List all teams available in the current account
     * @returns team Success
     * @throws ApiError
     */
    public listAllTeams({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<team>> {
        return __request(this.chatwootAPI, {
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
    public createATeam({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: team_create_update_payload;
    }): CancelablePromise<team> {
        return __request(this.chatwootAPI, {
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
    public getDetailsOfASingleTeam({
        accountId,
        teamId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
    }): CancelablePromise<team> {
        return __request(this.chatwootAPI, {
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
    public updateATeam({
        accountId,
        teamId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
        data: team_create_update_payload;
    }): CancelablePromise<team> {
        return __request(this.chatwootAPI, {
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
    public deleteATeam({
        accountId,
        teamId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
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
    public getTeamMembers({
        accountId,
        teamId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
    }): CancelablePromise<Array<agent>> {
        return __request(this.chatwootAPI, {
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
    public addNewAgentToTeam({
        accountId,
        teamId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
        data: {
            /**
             * IDs of users to be added to the team
             */
            user_ids: Array<number>;
        };
    }): CancelablePromise<Array<agent>> {
        return __request(this.chatwootAPI, {
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
    public updateAgentsInTeam({
        accountId,
        teamId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
        data: {
            /**
             * IDs of users to be added to the team
             */
            user_ids: Array<number>;
        };
    }): CancelablePromise<Array<agent>> {
        return __request(this.chatwootAPI, {
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
    public deleteAgentInTeam({
        accountId,
        teamId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
        data: {
            /**
             * IDs of users to be deleted from the team
             */
            user_ids: Array<number>;
        };
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
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
