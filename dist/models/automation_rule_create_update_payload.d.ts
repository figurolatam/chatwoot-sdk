export declare type automation_rule_create_update_payload = {
    /**
     * Rule name
     */
    name?: string;
    /**
     * The description about the automation and actions
     */
    description?: string;
    /**
     * The event when you want to execute the automation actions
     */
    event_name?: "conversation_created" | "conversation_updated" | "message_created";
    /**
     * Enable/disable automation rule
     */
    active?: boolean;
    /**
     * Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.
     */
    actions?: Array<any>;
    /**
     * Array of conditions on which conversation filter would work, e.g message content contains text help.
     */
    conditions?: Array<any>;
};
