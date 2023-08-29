import type { agent_bot } from "../../models/agent_bot";
import type { agent_bot_create_update_payload } from "../../models/agent_bot_create_update_payload";
import type { CancelablePromise } from "../../core/CancelablePromise";
import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
export declare class AgentBots {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all AgentBots
     * List all agent bots available
     * @returns agent_bot Success
     * @throws ApiError
     */
    list(): CancelablePromise<Array<agent_bot>>;
    /**
     * Create an Agent Bot
     * Create an agent bot
     * @returns agent_bot Success
     * @throws ApiError
     */
    create({ data }: {
        data: agent_bot_create_update_payload;
    }): CancelablePromise<agent_bot>;
    /**
     * Get an agent bot details
     * Get the details of an agent bot
     * @returns agent_bot Success
     * @throws ApiError
     */
    get({ id, }: {
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
    update({ id, data, }: {
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
        data: agent_bot_create_update_payload;
    }): CancelablePromise<agent_bot>;
    /**
     * Delete an AgentBot
     * Delete an AgentBot
     * @returns any Success
     * @throws ApiError
     */
    delete({ id, }: {
        /**
         * The ID of the agentbot to be updated
         */
        id: number;
    }): CancelablePromise<any>;
}
