import type { conversation } from "./conversation";
import type { user } from "./user";
/**
 * array of conversations
 */
export declare type contact_conversations = Array<conversation & {
    meta?: {
        sender?: {
            /**
             * ID fo the sender
             */
            id?: number;
            /**
             * The name of the sender
             */
            name?: string;
            /**
             * Avatar URL of the contact
             */
            thumbnail?: string;
            /**
             * Channel Type
             */
            channel?: string;
        };
        assignee?: user;
    };
} & {
    display_id?: number;
}>;
