/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { agent } from "../models/agent";
import type { inbox } from "../models/inbox";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class Inboxes {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * List all inboxes
     * List all inboxes available in the current account
     * @returns inbox Success
     * @throws ApiError
     */
    public listAllInboxes({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<inbox>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inboxes",
            path: {
                account_id: accountId,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Get an inbox
     * Get an inbox available in the current account
     * @returns inbox Success
     * @throws ApiError
     */
    public getInbox({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the inbox
         */
        id: number;
    }): CancelablePromise<inbox> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}/",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Create an inbox
     * You can create more than one website inbox in each account
     * @returns inbox Success
     * @throws ApiError
     */
    public inboxCreation({
        accountId,
        data,
    }: {
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
    }): CancelablePromise<inbox> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/inboxes/",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Update Inbox
     * Add avatar and disable auto assignment for an inbox
     * @returns inbox Success
     * @throws ApiError
     */
    public updateInbox({
        accountId,
        id,
        data,
    }: {
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
    }): CancelablePromise<inbox> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Show Inbox Agent Bot
     * See if an agent bot is associated to the Inbox
     * @returns void
     * @throws ApiError
     */
    public getInboxAgentBot({
        accountId,
        id,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the inbox
         */
        id: number;
    }): CancelablePromise<void> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}/agent_bot",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found, Agent bot not found`,
            },
        });
    }

    /**
     * Add or remove agent bot
     * To add an agent bot pass agent_bot id, to remove agent bot from an inbox pass null
     * @returns void
     * @throws ApiError
     */
    public updateAgentBot({
        accountId,
        id,
        data,
    }: {
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
    }): CancelablePromise<void> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/inboxes/{id}/set_agent_bot",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found, Agent bot not found`,
            },
        });
    }

    /**
     * List Agents in Inbox
     * Get Details of Agents in an Inbox
     * @returns agent Success
     * @throws ApiError
     */
    public getInboxMembers({
        accountId,
        inboxId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The ID of the Inbox
         */
        inboxId: number;
    }): CancelablePromise<Array<agent>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/inbox_members/{inbox_id}",
            path: {
                account_id: accountId,
                inbox_id: inboxId,
            },
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
            },
        });
    }

    /**
     * Remove an Agent from Inbox
     * Remove an Agent from Inbox
     * @returns any Success
     * @throws ApiError
     */
    public deleteAgentInInbox({
        accountId,
        inboxId,
        data,
    }: {
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
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/inbox_members/{inbox_id}",
            path: {
                account_id: accountId,
                inbox_id: inboxId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
                422: `User must exist`,
            },
        });
    }

    /**
     * Add a New Agent
     * Add a new Agent to Inbox
     * @returns agent Success
     * @throws ApiError
     */
    public addNewAgentToInbox({
        accountId,
        data,
    }: {
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
    }): CancelablePromise<Array<agent>> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/inbox_members",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
                422: `User must exist`,
            },
        });
    }

    /**
     * Update Agents in Inbox
     * All agents except the one passed in params will be removed
     * @returns agent Success
     * @throws ApiError
     */
    public updateAgentsInInbox({
        accountId,
        data,
    }: {
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
    }): CancelablePromise<Array<agent>> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/inbox_members",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Inbox not found`,
                422: `User must exist`,
            },
        });
    }
}
