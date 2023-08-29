import type { user } from "../../models/user";
import type { user_create_update_payload } from "../../models/user_create_update_payload";
import type { CancelablePromise } from "../../core/CancelablePromise";
import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
export declare class Users {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Create a User
     * Create a User
     * @returns user Success
     * @throws ApiError
     */
    create({ data }: {
        data: user_create_update_payload;
    }): CancelablePromise<user>;
    /**
     * Get an user details
     * Get the details of an user
     * @returns user Success
     * @throws ApiError
     */
    get({ id, }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
    }): CancelablePromise<user>;
    /**
     * Update a user
     * Update a user's attributes
     * @returns user Success
     * @throws ApiError
     */
    update({ id, data, }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
        data: user_create_update_payload;
    }): CancelablePromise<user>;
    /**
     * Delete a User
     * Delete a User
     * @returns any Success
     * @throws ApiError
     */
    delete({ id, }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
    }): CancelablePromise<any>;
    /**
     * Get User SSO Link
     * Get the sso link of a user
     * @returns any Success
     * @throws ApiError
     */
    getSSOUrl({ id, }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
    }): CancelablePromise<{
        /**
         * SSO url to autenticate the user
         */
        url?: string;
    }>;
}
