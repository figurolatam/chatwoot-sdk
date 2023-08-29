export declare type public_contact_create_update_payload = {
    /**
     * External identifier of the contact
     */
    identifier?: string;
    /**
     * Identifier hash prepared for HMAC authentication
     */
    identifier_hash?: string;
    /**
     * Email of the contact
     */
    email?: string;
    /**
     * Name of the contact
     */
    name?: string;
    /**
     * Phone number of the contact
     */
    phone_number?: string;
    /**
     * The url to a jpeg, png file for the user avatar
     */
    avatar_url?: string;
    /**
     * Custom attributes of the customer
     */
    custom_attributes?: any;
};
