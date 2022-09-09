/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_create_update_payload } from "../models/account_create_update_payload";
import type { platform_account } from "../models/platform_account";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class AccountsService {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Create an Account
     * Create an Account
     * @returns platform_account Success
     * @throws ApiError
     */
    public createAnAccount({ data }: { data: account_create_update_payload }): CancelablePromise<platform_account> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/accounts",
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get an account details
     * Get the details of an account
     * @returns platform_account Success
     * @throws ApiError
     */
    public getDetailsOfAnAccount({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<platform_account> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/accounts/{account_id}",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given account does not exist`,
            },
        });
    }

    /**
     * Update an account
     * Update an account's attributes
     * @returns platform_account Success
     * @throws ApiError
     */
    public updateAnAccount({
        accountId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        data: account_create_update_payload;
    }): CancelablePromise<platform_account> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/platform/api/v1/accounts/{account_id}",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete an Account
     * Delete an Account
     * @returns any Success
     * @throws ApiError
     */
    public deleteAnAccount({
        accountId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/accounts/{account_id}",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The account does not exist`,
            },
        });
    }
}
