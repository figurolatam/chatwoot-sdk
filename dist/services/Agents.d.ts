import type { agent } from "../models/agent";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class Agents {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List Agents in Account
     * Get Details of Agents in an Account
     * @returns agent Success
     * @throws ApiError
     */
    list({ accountId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<agent>>;
    /**
     * Add a New Agent
     * Add a new Agent to Account
     * @returns agent Success
     * @throws ApiError
     */
    create({ accountId, data, }: {
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
    }): CancelablePromise<agent>;
    /**
     * Update Agent in Account
     * Update an Agent in Account
     * @returns agent Success
     * @throws ApiError
     */
    update({ accountId, id, data, }: {
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
    }): CancelablePromise<agent>;
    /**
     * Remove an Agent from Account
     * Remove an Agent from Account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the agent to be deleted
         */
        id: number;
    }): CancelablePromise<any>;
}
