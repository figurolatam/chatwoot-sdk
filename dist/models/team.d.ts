export declare type team = {
    /**
     * The ID of the team
     */
    id?: number;
    /**
     * The name of the team
     */
    name?: string;
    /**
     * The description about the team
     */
    description?: string;
    /**
     * If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team
     */
    allow_auto_assign?: boolean;
    /**
     * The ID of the account with the team is a part of
     */
    account_id?: number;
    /**
     * This field shows whether the current user is a part of the team
     */
    is_member?: boolean;
};
