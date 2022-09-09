/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type message = {
    /**
     * The text content of the message
     */
    content?: string;
    /**
     * The type of the template message
     */
    content_type?: "text" | "input_select" | "cards" | "form";
    /**
     * The content attributes for each content_type
     */
    content_attributes?: any;
    /**
     * The type of the message
     */
    message_type?: "incoming" | "outgoing" | "activity" | "template";
    /**
     * The time at which message was created
     */
    created_at?: number;
    /**
     * The flags which shows whether the message is private or not
     */
    private?: boolean;
    /**
     * The file object attached to the image
     */
    attachment?: any;
    /**
     * User/Agent/AgentBot object
     */
    sender?: any;
    /**
     * ID of the conversation
     */
    conversation_id?: number;
};
