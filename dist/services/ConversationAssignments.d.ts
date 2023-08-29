import type { user } from "../models/user";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class ConversationAssignment {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Assign Conversation
     * Assign a conversation to an agent or a team
     * @returns user Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversation-Assignment/operation/assign-a-conversation}
     */
    assign({ accountId, conversationId, data, }: {
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
             * Id of the assignee user
             */
            assignee_id?: number;
            /**
             * Id of the team. If the assignee_id is present, this param would be ignored
             */
            team_id?: number;
        };
    }): CancelablePromise<user>;
}
