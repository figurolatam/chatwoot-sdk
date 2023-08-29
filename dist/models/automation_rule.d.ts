export declare type automation_rule = {
    /**
     * Automation Rule event, on which we call the actions(conversation_created, conversation_updated, message_created)
     */
    event_name?: "conversation_created" | "conversation_updated" | "message_created";
    /**
     * The name of the rule
     */
    name?: string;
    /**
     * Description to give more context about the rule
     */
    description?: string;
    /**
     * Enable/disable automation rule
     */
    active?: boolean;
    /**
     * Array of actions which we perform when condition matches
     */
    actions?: Array<any>;
    /**
     * Array of conditions on which conversation/message filter would work
     */
    conditions?: Array<any>;
    /**
     * Account Id
     */
    account_id?: number;
};
