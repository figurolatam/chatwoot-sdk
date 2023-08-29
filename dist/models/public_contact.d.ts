export declare type public_contact = {
    /**
     * Id of the contact
     */
    id?: number;
    /**
     * The session identifier of the contact
     */
    source_id?: string;
    /**
     * Name of the contact
     */
    name?: string;
    /**
     * Email of the contact
     */
    email?: string;
    /**
     * The token to be used to connect to chatwoot websocket
     */
    pubsub_token?: string;
};
