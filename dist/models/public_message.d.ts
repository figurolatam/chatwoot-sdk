export declare type public_message = {
    /**
     * Id of the message
     */
    id?: string;
    /**
     * Text content of the message
     */
    content?: string;
    /**
     * Denotes the message type
     */
    message_type?: string;
    /**
     * Content type of the message
     */
    content_type?: string;
    /**
     * Additional content attributes of the message
     */
    content_attributes?: string;
    /**
     * Created at time stamp of the message
     */
    created_at?: string;
    /**
     * Conversation Id of the message
     */
    conversation_id?: string;
    /**
     * Attachments if any
     */
    attachments?: Array<any>;
    /**
     * Details of the sender
     */
    sender?: any;
};
