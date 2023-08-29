export declare type custom_filter_create_update_payload = {
    /**
     * The name of the custom filter
     */
    name?: string;
    /**
     * The description about the custom filter
     */
    type?: "conversation" | "contact" | "report";
    /**
     * A query that needs to be saved as a custom filter
     */
    query?: any;
};
