import type { CancelablePromise } from "../../core/CancelablePromise";
import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
export declare class AccountUsers {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * List all Account Users
     * List all account users
     * @returns any Success
     * @throws ApiError
     */
    list({ accountId, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<Array<{
        /**
         * The ID of the user
         */
        account_id?: number;
        /**
         * The ID of the user
         */
        user_id?: number;
        /**
         * whether user is an administrator or agent
         */
        role?: string;
    }>>;
    /**
     * Create an Account User
     * Create an Account User
     * @returns any Success
     * @throws ApiError
     */
    create({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * The ID of the user
             */
            user_id: number;
            /**
             * whether user is an administrator or agent
             */
            role: string;
        };
    }): CancelablePromise<any>;
    /**
     * Delete an Account User
     * Delete an Account User
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, data, }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: {
            /**
             * The ID of the user
             */
            user_id: number;
        };
    }): CancelablePromise<any>;
}
