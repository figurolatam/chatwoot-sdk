import type { agent } from "../models/agent";
import type { inbox } from "../models/inbox";
import type { agent_bot } from "../models/agent_bot";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class Inboxes {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all inboxes
     * List all inboxes available in the current account
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/listAllInboxes}
     */
    list({ accountId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<inbox>>;
    /**
     * Get an inbox
     * Get an inbox available in the current account
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/GetInbox}
     */
    get({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the inbox
         */
        id: number;
    }): CancelablePromise<inbox>;
    /**
     * Create an inbox
     * You can create more than one website inbox in each account
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/inboxCreation}
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * The name of the inbox
             */
            name?: string;
            /**
             * File for avatar image
             */
            avatar?: Blob;
            channel?: {
                type?: "web_widget";
                /**
                 * URL at which the widget will be loaded
                 */
                website_url?: string;
                /**
                 * Welcome title to be displayed on the widget
                 */
                welcome_title?: string;
                /**
                 * Welcome tagline to be displayed on the widget
                 */
                welcome_tagline?: string;
                /**
                 * A message which will be sent if there is not agent available. This is not available if agentbot is connected
                 */
                agent_away_message?: string;
                /**
                 * A Hex-color string used to customize the widget
                 */
                widget_color?: string;
            };
        };
    }): CancelablePromise<inbox>;
    /**
     * Update Inbox
     * Add avatar and disable auto assignment for an inbox
     * @returns inbox Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/updateInbox}
     */
    update({ accountId, id, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the inbox
         */
        id: number;
        data: {
            /**
             * The name of the inbox
             */
            name?: string;
            /**
             * Enable Auto Assignment
             */
            enable_auto_assignment: boolean;
            /**
             * Image file for avatar
             */
            avatar?: Blob;
            channel?: {
                /**
                 * URL at which the widget will be loaded
                 */
                website_url?: string;
                /**
                 * Welcome title to be displayed on the widget
                 */
                welcome_title?: string;
                /**
                 * Welcome tagline to be displayed on the widget
                 */
                welcome_tagline?: string;
                /**
                 * A message which will be sent if there is not agent available. This is not available if agentbot is connected
                 */
                agent_away_message?: string;
                /**
                 * A Hex-color string used to customize the widget
                 */
                widget_color?: string;
            };
        };
    }): CancelablePromise<inbox>;
    /**
     * Show Inbox Agent Bot
     * See if an agent bot is associated to the Inbox
     * @returns agent_bot Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/getInboxAgentBot}
     */
    getAgentBot({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the inbox
         */
        id: number;
    }): CancelablePromise<agent_bot>;
    /**
     * Add or remove agent bot
     * To add an agent bot pass agent_bot id, to remove agent bot from an inbox pass null
     * @returns void
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Inboxes/operation/updateAgentBot}
     */
    updateAgentBot({ accountId, id, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the inbox
         */
        id: number;
        data: {
            /**
             * Agent bot ID
             */
            agent_bot: number;
        };
    }): CancelablePromise<{
        agent_bot: number;
    }>;
    /**
     * List Agents in Inbox
     * Get Details of Agents in an Inbox
     * @returns agent Success
     * @throws ApiError
     */
    listAgents({ accountId, inboxId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the Inbox
         */
        inboxId: number;
    }): CancelablePromise<Array<agent>>;
    /**
     * Remove an Agent from Inbox
     * Remove an Agent from Inbox
     * @returns any Success
     * @throws ApiError
     */
    removeAgent({ accountId, inboxId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the Inbox
         */
        inboxId: number;
        data: {
            /**
             * The ID of the inbox
             */
            inbox_id: string;
            /**
             * IDs of users to be deleted from the inbox
             */
            user_ids: Array<number>;
        };
    }): CancelablePromise<any>;
    /**
     * Add a New Agent
     * Add a new Agent to Inbox
     * @returns agent Success
     * @throws ApiError
     */
    addAgent({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * The ID of the inbox
             */
            inbox_id: string;
            /**
             * IDs of users to be added to the inbox
             */
            user_ids: Array<number>;
        };
    }): CancelablePromise<Array<agent>>;
    /**
     * Update Agents in Inbox
     * All agents except the one passed in params will be removed
     * @returns agent Success
     * @throws ApiError
     */
    updateAgentsInInbox({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * The ID of the inbox
             */
            inbox_id: string;
            /**
             * IDs of users to be added to the inbox
             */
            user_ids: Array<number>;
        };
    }): CancelablePromise<Array<agent>>;
}
