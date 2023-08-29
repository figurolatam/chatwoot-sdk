export declare type team_create_update_payload = {
    /**
     * The name of the team
     */
    name?: string;
    /**
     * The description of the team
     */
    description?: string;
    /**
     * If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team
     */
    allow_auto_assign?: boolean;
};
