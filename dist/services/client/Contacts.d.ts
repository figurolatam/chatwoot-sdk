import type { public_contact } from "../../models/public_contact";
import type { public_contact_create_update_payload } from "../../models/public_contact_create_update_payload";
import type { CancelablePromise } from "../../core/CancelablePromise";
import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
export declare class ContactsApi {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    /**
     * Create a contact
     * Create a contact
     * @returns public_contact Success
     * @throws ApiError
     */
    create({ inboxIdentifier, data, }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        data: public_contact_create_update_payload;
    }): CancelablePromise<public_contact>;
    /**
     * Get a contact
     * Get the details of a contact
     * @returns public_contact Success
     * @throws ApiError
     */
    get({ inboxIdentifier, contactIdentifier, }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
    }): CancelablePromise<public_contact>;
    /**
     * Update a contact
     * Update a contact's attributes
     * @returns public_contact Success
     * @throws ApiError
     */
    update({ inboxIdentifier, contactIdentifier, data, }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
        data: public_contact_create_update_payload;
    }): CancelablePromise<public_contact>;
}
