import type { user } from "../models/user";
import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
export declare class Profile {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Fetch user profile
     * Get the user profile details
     * @returns user Success
     * @throws ApiError
     */
    profile(): CancelablePromise<user>;
}
