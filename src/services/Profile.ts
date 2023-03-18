/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user } from "../models/user";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class Profile {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Fetch user profile
     * Get the user profile details
     * @returns user Success
     * @throws ApiError
     */
    public profile(): CancelablePromise<user> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/profile",
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
