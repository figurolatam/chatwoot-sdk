export declare type contact_create = {
    inbox_id: number;
    /**
     * name of the contact
     */
    name?: string;
    /**
     * email of the contact
     */
    email?: string;
    /**
     * phone number of the contact
     */
    phone_number?: string;
    /**
     * Send the form data with the avatar image binary or use the avatar_url
     */
    avatar?: Blob;
    /**
     * The url to a jpeg, png file for the contact avatar
     */
    avatar_url?: string;
    /**
     * A unique identifier for the contact in external system
     */
    identifier?: string;
    /**
     * An object where you can store custom attributes for contact. example {"type":"customer", "age":30}
     */
    custom_attributes?: any;
};
