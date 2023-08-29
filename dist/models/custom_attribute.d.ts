export declare type custom_attribute = {
    /**
     * Identifier
     */
    id?: number;
    /**
     * Attribute display name
     */
    attribute_display_name?: string;
    /**
     * Attribute display type (text, number, currency, percent, link, date, list, checkbox)
     */
    attribute_display_type?: string;
    /**
     * Attribute description
     */
    attribute_description?: string;
    /**
     * Attribute unique key value
     */
    attribute_key?: string;
    /**
     * Attribute values
     */
    attribute_values?: string;
    /**
     * Attribute default value
     */
    default_value?: string;
    /**
     * Attribute type(conversation_attribute/contact_attribute)
     */
    attribute_model?: string;
    /**
     * Account Id
     */
    account_id?: number;
};
