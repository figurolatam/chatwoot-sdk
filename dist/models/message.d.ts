import { agent } from "./agent";
import { agent_bot } from "./agent_bot";
import { user } from "./user";
export declare type message = {
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
    content_attributes?: Record<string, unknown>;
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
    sender?: user | agent | agent_bot;
    /**
     * ID of the conversation
     */
    conversation_id?: number;
    /**
     * ID of the message
     */
    source_id?: string;
    /**
     * ID of the reply message
     */
    source_reply_id?: string;
};
