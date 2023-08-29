export declare type agent = {
    id?: number;
    uid?: string;
    name?: string;
    available_name?: string;
    display_name?: string;
    email?: string;
    account_id?: number;
    role?: "agent" | "administrator";
    confirmed?: boolean;
    /**
     * The availability status of the agent computed by Chatwoot.
     */
    availability_status?: "available" | "busy" | "offline";
    /**
     * Whether the availability status of agent is configured to go offline automatically when away.
     */
    auto_offline?: boolean;
    /**
     * Available for users who are created through platform APIs and has custom attributes associated.
     */
    custom_attributes?: any;
};
