/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { agent } from "../models/agent";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class Agents {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List Agents in Account
     * Get Details of Agents in an Account
     * @returns agent Success
     * @throws ApiError
     */
    public listAllAccountAgents({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<agent>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/agents",
            path: {
                account_id: accountId,
            },
            errors: {
                403: `Access denied`,
            },
        });
    }

    /**
     * Add a New Agent
     * Add a new Agent to Account
     * @returns agent Success
     * @throws ApiError
     */
    public createAgent({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * Full Name of the agent
             */
            name: string;
            /**
             * Email of the Agent
             */
            email: string;
            /**
             * Whether its administrator or agent
             */
            role: "agent" | "administrator";
            /**
             * The availability setting of the agent.
             */
            availability_status?: "available" | "busy" | "offline";
            /**
             * Whether the availability status of agent is configured to go offline automatically when away.
             */
            auto_offline?: boolean;
        };
    }): CancelablePromise<agent> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/agents",
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
     * Update Agent in Account
     * Update an Agent in Account
     * @returns agent Success
     * @throws ApiError
     */
    public updateAgent({
        accountId,
        id,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the agent to be updated.
         */
        id: number;
        data: {
            /**
             * Whether its administrator or agent
             */
            role: "agent" | "administrator";
            /**
             * The availability setting of the agent.
             */
            availability?: "available" | "busy" | "offline";
            /**
             * Whether the availability status of agent is configured to go offline automatically when away.
             */
            auto_offline?: boolean;
        };
    }): CancelablePromise<agent> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/agents/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Agent not found`,
            },
        });
    }

    /**
     * Remove an Agent from Account
     * Remove an Agent from Account
     * @returns any Success
     * @throws ApiError
     */
    public deleteAgent({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the agent to be deleted
         */
        id: number;
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/agents/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Agent not found`,
            },
        });
    }
}
