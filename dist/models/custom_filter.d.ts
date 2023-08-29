export declare type custom_filter = {
    /**
     * The ID of the custom filter
     */
    id?: number;
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
    /**
     * The time at which the custom filter was created
     */
    created_at?: string;
    /**
     * The time at which the custom filter was updated
     */
    updated_at?: string;
};
