import type { contact } from "./contact";
export declare type extended_contact = contact & {
    /**
     * Id of the user
     */
    id?: number;
    /**
     * Availability status of the user
     */
    availability_status?: "online" | "offline";
};
