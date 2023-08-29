import type { conversation } from "./conversation";
import type { generic_id } from "./generic_id";
import type { user } from "./user";
export declare type conversation_list = {
    data?: {
        meta?: {
            mine_count?: number;
            unassigned_count?: number;
            assigned_count?: number;
            all_count?: number;
        };
        /**
         * array of conversations
         */
        payload?: Array<generic_id & conversation & {
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
        }>;
    };
};
