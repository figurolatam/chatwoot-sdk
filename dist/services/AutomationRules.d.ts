import type { automation_rule } from "../models/automation_rule";
import type { automation_rule_create_update_payload } from "../models/automation_rule_create_update_payload";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class AutomationRule {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all automation rules in an account
     * Get details of automation rules in an Account
     * @returns automation_rule Success
     * @throws ApiError
     */
    list({ accountId, page, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The page parameter
         */
        page?: number;
    }): CancelablePromise<Array<automation_rule>>;
    /**
     * Add a new automation rule
     * Add a new automation rule to account
     * @returns automation_rule Success
     * @throws ApiError
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: automation_rule_create_update_payload;
    }): CancelablePromise<automation_rule>;
    /**
     * Get a automation rule details
     * Get the details of a automation rule in the account
     * @returns automation_rule Success
     * @throws ApiError
     */
    get({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the Automation Rule
         */
        id: number;
    }): CancelablePromise<automation_rule>;
    /**
     * Update automation rule in Account
     * Update a automation rule in account
     * @returns automation_rule Success
     * @throws ApiError
     */
    update({ accountId, id, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the Automation Rule
         */
        id: number;
        data: automation_rule_create_update_payload;
    }): CancelablePromise<automation_rule>;
    /**
     * Remove a automation rule from account
     * Remove a automation rule from account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, id, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * ID of the Automation Rule
         */
        id: number;
    }): CancelablePromise<any>;
}
