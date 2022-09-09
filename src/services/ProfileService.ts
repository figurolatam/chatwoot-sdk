/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user } from "../models/user";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";

export class ProfileService {
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
    public fetchProfile(): CancelablePromise<user> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/profile",
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
