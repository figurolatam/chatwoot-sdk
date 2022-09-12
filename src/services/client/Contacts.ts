/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { public_contact } from "../../models/public_contact";
import type { public_contact_create_update_payload } from "../../models/public_contact_create_update_payload";

import type { CancelablePromise } from "../../core/CancelablePromise";
import { ChatwootAPIConfig } from "../../core/ChatwootAPI";
import { request as __request } from "../../core/request";

export class ContactsApi {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Create a contact
     * Create a contact
     * @returns public_contact Success
     * @throws ApiError
     */
    public create({
        inboxIdentifier,
        data,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        data: public_contact_create_update_payload;
    }): CancelablePromise<public_contact> {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts",
            path: {
                inbox_identifier: inboxIdentifier,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get a contact
     * Get the details of a contact
     * @returns public_contact Success
     * @throws ApiError
     */
    public get({
        inboxIdentifier,
        contactIdentifier,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
    }): CancelablePromise<public_contact> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given contact does not exist`,
            },
        });
    }

    /**
     * Update a contact
     * Update a contact's attributes
     * @returns public_contact Success
     * @throws ApiError
     */
    public update({
        inboxIdentifier,
        contactIdentifier,
        data,
    }: {
        /**
         * The identifier obtained from API inbox channel
         */
        inboxIdentifier: string;
        /**
         * The source id of contact obtained on contact create
         */
        contactIdentifier: string;
        data: public_contact_create_update_payload;
    }): CancelablePromise<public_contact> {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
