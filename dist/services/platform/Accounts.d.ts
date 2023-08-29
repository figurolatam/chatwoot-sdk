import type { account_create_update_payload } from "../../models/account_create_update_payload";
import type { platform_account } from "../../models/platform_account";
import type { CancelablePromise } from "../../core/CancelablePromise";
import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
export declare class Accounts {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Create an Account
     * Create an Account
     * @returns platform_account Success
     * @throws ApiError
     */
    create({ data }: {
        data: account_create_update_payload;
    }): CancelablePromise<platform_account>;
    /**
     * Get an account details
     * Get the details of an account
     * @returns platform_account Success
     * @throws ApiError
     */
    get({ accountId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<platform_account>;
    /**
     * Update an account
     * Update an account's attributes
     * @returns platform_account Success
     * @throws ApiError
     */
    update({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: account_create_update_payload;
    }): CancelablePromise<platform_account>;
    /**
     * Delete an Account
     * Delete an Account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<any>;
}
