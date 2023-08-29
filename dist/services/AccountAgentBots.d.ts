import type { agent_bot } from "../models/agent_bot";
import type { agent_bot_create_update_payload } from "../models/agent_bot_create_update_payload";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class AccountAgentBots {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all AgentBots
     * List all agent bots available for the current account
     * @returns agent_bot Success
     * @throws ApiError
     */
    list({ accountId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<agent_bot>>;
    /**
     * Create an Agent Bot
     * Create an agent bot in the account
     * @returns agent_bot Success
     * @throws ApiError
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: agent_bot_create_update_payload;
    }): CancelablePromise<agent_bot>;
    /**
     * Get an agent bot details
     * Get the details of an agent bot in the account
     * @returns agent_bot Success
     * @throws ApiError
     */
    get({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
    }): CancelablePromise<agent_bot>;
    /**
     * Update an agent bot
     * Update an agent bot's attributes
     * @returns agent_bot Success
     * @throws ApiError
     */
    update({ accountId, id, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
        data: agent_bot_create_update_payload;
    }): CancelablePromise<agent_bot>;
    /**
     * Delete an AgentBot
     * Delete an AgentBot from the account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
    }): CancelablePromise<any>;
}
