import type { agent } from "../models/agent";
import type { team } from "../models/team";
import type { team_create_update_payload } from "../models/team_create_update_payload";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class Teams {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all teams
     * List all teams available in the current account
     * @returns team Success
     * @throws ApiError
     */
    list({ accountId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<team>>;
    /**
     * Create a team
     * Create a team in the account
     * @returns team Success
     * @throws ApiError
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: team_create_update_payload;
    }): CancelablePromise<team>;
    /**
     * Get a team details
     * Get the details of a team in the account
     * @returns team Success
     * @throws ApiError
     */
    get({ accountId, teamId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
    }): CancelablePromise<team>;
    /**
     * Update a team
     * Update a team's attributes
     * @returns team Success
     * @throws ApiError
     */
    update({ accountId, teamId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
        data: team_create_update_payload;
    }): CancelablePromise<team>;
    /**
     * Delete a team
     * Delete a team from the account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, teamId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
    }): CancelablePromise<any>;
    /**
     * List Agents in Team
     * Get Details of Agents in an Team
     * @returns agent Success
     * @throws ApiError
     */
    listMembers({ accountId, teamId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the team to be updated
         */
        teamId: number;
    }): CancelablePromise<Array<agent>>;
    /**
     * Add a New Agent
     * Add a new Agent to Team
     * @returns agent Success
     * @throws ApiError
     */
    addAgent({ accountId, teamId, data, }: {
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
    }): CancelablePromise<Array<agent>>;
    /**
     * Update Agents in Team
     * All agents except the one passed in params will be removed
     * @returns agent Success
     * @throws ApiError
     */
    updateAgentsInTeam({ accountId, teamId, data, }: {
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
    }): CancelablePromise<Array<agent>>;
    /**
     * Remove an Agent from Team
     * Remove an Agent from Team
     * @returns any Success
     * @throws ApiError
     */
    removeAgent({ accountId, teamId, data, }: {
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
    }): CancelablePromise<any>;
}
