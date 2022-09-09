/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user } from "../models/user";
import type { user_create_update_payload } from "../models/user_create_update_payload";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class UsersService {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Create a User
     * Create a User
     * @returns user Success
     * @throws ApiError
     */
    public createAUser({ data }: { data: user_create_update_payload }): CancelablePromise<user> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/users",
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get an user details
     * Get the details of an user
     * @returns user Success
     * @throws ApiError
     */
    public getDetailsOfAUser({
        id,
    }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
    }): CancelablePromise<user> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/users/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given user does not exist`,
            },
        });
    }

    /**
     * Update a user
     * Update a user's attributes
     * @returns user Success
     * @throws ApiError
     */
    public updateAUser({
        id,
        data,
    }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
        data: user_create_update_payload;
    }): CancelablePromise<user> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/platform/api/v1/users/{id}",
            path: {
                id: id,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a User
     * Delete a User
     * @returns any Success
     * @throws ApiError
     */
    public deleteAUser({
        id,
    }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/users/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The user does not exist`,
            },
        });
    }

    /**
     * Get User SSO Link
     * Get the sso link of a user
     * @returns any Success
     * @throws ApiError
     */
    public getSsoUrlOfAUser({
        id,
    }: {
        /**
         * The numeric ID of the user on the platform
         */
        id: number;
    }): CancelablePromise<{
        /**
         * SSO url to autenticate the user
         */
        url?: string;
    }> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/users/{id}/login",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given user does not exist`,
            },
        });
    }
}
