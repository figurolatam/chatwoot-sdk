/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_summary } from "../models/account_summary";
import type { agent_conversation_metrics } from "../models/agent_conversation_metrics";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class Reports {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Get Account reports
     * Get Account reports for a specific type, metric and date range
     * @returns any Success
     * @throws ApiError
     */
    public list({
        accountId,
        metric,
        type,
        id,
        since,
        until,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The type of metric
         */
        metric:
            | "conversations_count"
            | "incoming_messages_count"
            | "outgoing_messages_count"
            | "avg_first_response_time"
            | "avg_resolution_time"
            | "resolutions_count";
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
    }): CancelablePromise<
        Array<{
            value?: string;
            timestamp?: number;
        }>
    > {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v2/accounts/{account_id}/reports",
            path: {
                account_id: accountId,
            },
            query: {
                metric: metric,
                type: type,
                id: id,
                since: since,
                until: until,
            },
            errors: {
                403: `Access denied`,
                404: `reports not found`,
            },
        });
    }

    /**
     * Get Account reports summary
     * Get Account reports summary for a specific type and date range
     * @returns account_summary Success
     * @throws ApiError
     */
    public listSummaries({
        accountId,
        type,
        id,
        since,
        until,
    }: {
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
    }): CancelablePromise<account_summary> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v2/accounts/{account_id}/reports/summary",
            path: {
                account_id: accountId,
            },
            query: {
                type: type,
                id: id,
                since: since,
                until: until,
            },
            errors: {
                403: `Access denied`,
                404: `reports not found`,
            },
        });
    }

    /**
     * Account Conversation Metrics
     * Get conversation metrics for Account
     * @returns any Success
     * @throws ApiError
     */
    public getMetrics({
        accountId,
        type,
    }: {
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
    }> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v2/accounts/{account_id}/reports/conversations",
            path: {
                account_id: accountId,
            },
            query: {
                type: type,
            },
            errors: {
                403: `Access denied`,
                404: `reports not found`,
            },
        });
    }

    /**
     * Agent Conversation Metrics
     * Get conversation metrics for Agent
     * @returns agent_conversation_metrics Success
     * @throws ApiError
     */
    public getAgentMetrics({
        accountId,
        type,
        userId,
    }: {
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
    }): CancelablePromise<Array<agent_conversation_metrics>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v2/accounts/{account_id}/reports/conversations/",
            path: {
                account_id: accountId,
            },
            query: {
                type: type,
                user_id: userId,
            },
            errors: {
                403: `Access denied`,
                404: `reports not found`,
            },
        });
    }
}
