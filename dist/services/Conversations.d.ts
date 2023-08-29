import type { conversation } from "../models/conversation";
import type { conversation_list } from "../models/conversation_list";
import type { conversation_show } from "../models/conversation_show";
import type { conversation_status_toggle } from "../models/conversation_status_toggle";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class Conversations {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Get Conversation Counts
     * Get open, unassigned and all Conversation counts
     * @returns any Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/conversationListMeta}
     */
    getMeta({ accountId, status, q, inboxId, teamId, labels, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * Filter by conversation status.
         */
        status?: "open" | "resolved" | "pending" | "snoozed";
        /**
         * Filters conversations with messages containing the search term
         */
        q?: string;
        inboxId?: number;
        teamId?: number;
        labels?: Array<string>;
    }): CancelablePromise<{
        meta?: {
            mine_count?: number;
            unassigned_count?: number;
            assigned_count?: number;
            all_count?: number;
        };
    }>;
    /**
     * Conversations List
     * List all the conversations with pagination
     * @returns conversation_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/conversationList}
     */
    list({ accountId, assigneeType, status, q, inboxId, teamId, labels, page, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * Filter conversations by assignee type.
         */
        assigneeType?: "me" | "unassigned" | "all" | "assigned";
        /**
         * Filter by conversation status.
         */
        status?: "open" | "resolved" | "pending" | "snoozed";
        /**
         * Filters conversations with messages containing the search term
         */
        q?: string;
        inboxId?: number;
        teamId?: number;
        labels?: Array<string>;
        /**
         * paginate through conversations
         */
        page?: number;
    }): CancelablePromise<conversation_list>;
    /**
     * Create New Conversation
     * Creating a conversation in chatwoot requires a source id.
     *
     * Learn more about source_id: https://github.com/chatwoot/chatwoot/wiki/Building-on-Top-of-Chatwoot:-Importing-Existing-Contacts-and-Creating-Conversations
     * @returns Pick<conversation, "id" | "account_id" | "inbox_id"> Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/newConversation}
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * Conversation source id
             */
            source_id?: string;
            /**
             * Id of inbox in which the conversation is created <br/> Allowed Inbox Types: Website, Phone, Api, Email
             */
            inbox_id?: string;
            /**
             * Contact Id for which conversation is created
             */
            contact_id?: string;
            /**
             * Lets you specify attributes like browser information
             */
            additional_attributes?: any;
            /**
             * The object to save custom attributes for conversation, accepts custom attributes key and value
             */
            custom_attributes?: any;
            /**
             * Specify the conversation whether it's pending, open, closed
             */
            status?: "open" | "resolved" | "pending";
            /**
             * Agent Id for assigning a conversation to an agent
             */
            assignee_id?: string;
            /**
             * Team Id for assigning a conversation to a team
             */
            team_id?: string;
        };
    }): CancelablePromise<Pick<conversation, "id" | "account_id" | "inbox_id">>;
    /**
     * Conversations Filter
     * Filter conversations with custom filter options and pagination
     * @returns conversation_list Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/conversationFilter}
     */
    filter({ accountId, payload, page, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        payload: Array<{
            /**
             * filter attribute name
             */
            attribute_key?: string;
            /**
             * filter operator name
             */
            filter_operator?: "equal_to" | "not_equal_to" | "contains" | "does_not_contain";
            /**
             * array of the attribute values to filter
             */
            values?: Array<string>;
            /**
             * query operator name
             */
            query_operator?: "AND" | "OR";
        }>;
        page?: number;
    }): CancelablePromise<conversation_list>;
    /**
     * Conversation Details
     * Get all details regarding a conversation with all messages in the conversation
     * @returns conversation_show Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/get-details-of-a-conversation}
     */
    get({ accountId, conversationId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
    }): CancelablePromise<conversation_show>;
    /**
     * Toggle Status
     * Toggles the status of the conversation between open and resolved
     * @returns conversation_status_toggle Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversations/operation/toggle-status-of-a-conversation}
     */
    toggleStatus({ accountId, conversationId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        data: {
            /**
             * The status of the conversation
             */
            status: "open" | "resolved" | "pending";
        };
    }): CancelablePromise<conversation_status_toggle>;
}
