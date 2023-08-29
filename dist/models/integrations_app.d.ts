export declare type integrations_app = {
    /**
     * The ID of the integration
     */
    id?: string;
    /**
     * The name of the integration
     */
    name?: string;
    /**
     * The description about the team
     */
    description?: string;
    /**
     * Whether the integration is an account or inbox integration
     */
    hook_type?: string;
    /**
     * Whether the integration is enabled for the account
     */
    enabled?: boolean;
    /**
     * Whether multiple hooks can be created for the integration
     */
    allow_multiple_hooks?: boolean;
    /**
     * If there are any hooks created for this integration
     */
    hooks?: Array<any>;
};
