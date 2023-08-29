import type { contact_inboxes } from "./contact_inboxes";
export declare type contact = {
    /**
     * Email address of the contact
     */
    email?: string;
    /**
     * The name of the contact
     */
    name?: string;
    /**
     * Phone number of the contact
     */
    phone_number?: string;
    /**
     * Avatar URL of the contact
     */
    thumbnail?: string;
    /**
     * The object containing additional attributes related to the contact
     */
    additional_attributes?: any;
    /**
     * The object to save custom attributes for contact, accepts custom attributes key and value
     */
    custom_attributes?: any;
    contact_inboxes?: Array<contact_inboxes>;
};
