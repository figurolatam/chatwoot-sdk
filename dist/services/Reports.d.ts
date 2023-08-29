import type { account_summary } from "../models/account_summary";
import type { agent_conversation_metrics } from "../models/agent_conversation_metrics";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class Reports {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Get Account reports
     * Get Account reports for a specific type, metric and date range
     * @returns any Success
     * @throws ApiError
     */
    list({ accountId, metric, type, id, since, until, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The type of metric
         */
        metric: "conversations_count" | "incoming_messages_count" | "outgoing_messages_count" | "avg_first_response_time" | "avg_resolution_time" | "resolutions_count";
        /**
         * Type of report
         */
        type: "account" | "agent" | "inbox" | "label" | "team";
        /**
         * The Id of specific object in case of agent/inbox/label
         */
        id?: string;
        /**
         * The timestamp from where report should start.
         */
        since?: string;
        /**
         * The timestamp from where report should stop.
         */
        until?: string;
    }): CancelablePromise<Array<{
        value?: string;
        timestamp?: number;
    }>>;
    /**
     * Get Account reports summary
     * Get Account reports summary for a specific type and date range
     * @returns account_summary Success
     * @throws ApiError
     */
    listSummaries({ accountId, type, id, since, until, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * Type of report
         */
        type: "account" | "agent" | "inbox" | "label" | "team";
        /**
         * The Id of specific object in case of agent/inbox/label
         */
        id?: string;
        /**
         * The timestamp from where report should start.
         */
        since?: string;
        /**
         * The timestamp from where report should stop.
         */
        until?: string;
    }): CancelablePromise<account_summary>;
    /**
     * Account Conversation Metrics
     * Get conversation metrics for Account
     * @returns any Success
     * @throws ApiError
     */
    getMetrics({ accountId, type, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * Type of report
         */
        type: "account";
    }): CancelablePromise<{
        open?: number;
        unattended?: number;
        unassigned?: number;
    }>;
    /**
     * Agent Conversation Metrics
     * Get conversation metrics for Agent
     * @returns agent_conversation_metrics Success
     * @throws ApiError
     */
    getAgentMetrics({ accountId, type, userId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * Type of report
         */
        type: "agent";
        /**
         * The numeric ID of the user
         */
        userId?: string;
    }): CancelablePromise<Array<agent_conversation_metrics>>;
}
