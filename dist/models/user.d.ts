import type { account } from "./account";
export declare type user = {
    id?: number;
    uid?: string;
    name?: string;
    available_name?: string;
    display_name?: string;
    email?: string;
    account_id?: number;
    role?: "agent" | "administrator";
    confirmed?: boolean;
    /**
     * Available for users who are created through platform APIs and has custom attributes associated.
     */
    custom_attributes?: any;
    accounts?: Array<account>;
};
