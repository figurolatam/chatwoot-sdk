export declare type agent_bot = {
    /**
     * ID of the agent bot
     */
    id?: number;
    /**
     * The name of the agent bot
     */
    name?: string;
    /**
     * The description about the agent bot
     */
    description?: string;
    /**
     * Account ID if it's an account specific bot
     */
    account_id?: number;
    /**
     * The webhook URL for the bot
     */
    outgoing_url?: string;
};
