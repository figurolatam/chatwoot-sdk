export declare type conversation_message_create = {
    /**
     * The content of the message
     */
    content: string;
    message_type?: "outgoing" | "incoming";
    /**
     * Flag to identify if it is a private note
     */
    private?: boolean;
    /**
     * if you want to create custom message types
     */
    content_type?: "input_email" | "cards" | "input_select" | "form" | "article";
    /**
     * attributes based on your content type
     */
    content_attributes?: Record<string, unknown>;
    /**
     * attributes based on your content type
     */
    attachments?: Array<Record<string, unknown>>;
    /**
     * The id source
     */
    source_id?: string;
    /**
     * The reply id source
     */
    source_reply_id?: string;
};
