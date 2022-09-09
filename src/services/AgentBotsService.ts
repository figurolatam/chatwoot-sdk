/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { agent_bot } from "../models/agent_bot";
import type { agent_bot_create_update_payload } from "../models/agent_bot_create_update_payload";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class AgentBotsService {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all AgentBots
     * List all agent bots available
     * @returns agent_bot Success
     * @throws ApiError
     */
    public listAllAgentBots(): CancelablePromise<Array<agent_bot>> {
        return __request(this.chatwootAPI, {
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
    public createAnAgentBot({ data }: { data: agent_bot_create_update_payload }): CancelablePromise<agent_bot> {
        return __request(this.chatwootAPI, {
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
    public getDetailsOfASingleAgentBot({
        id,
    }: {
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
    }): CancelablePromise<agent_bot> {
        return __request(this.chatwootAPI, {
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
    public updateAnAgentBot({
        id,
        data,
    }: {
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
        data: agent_bot_create_update_payload;
    }): CancelablePromise<agent_bot> {
        return __request(this.chatwootAPI, {
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
    public deleteAnAgentBot({
        id,
    }: {
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
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
