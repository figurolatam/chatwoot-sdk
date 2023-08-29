export declare type custom_attribute_create_update_payload = {
    /**
     * Attribute display name
     */
    attribute_display_name?: string;
    /**
     * Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)
     */
    attribute_display_type?: number;
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
    attribute_values?: Array<string>;
    /**
     * Attribute type(conversation_attribute- 0, contact_attribute- 1)
     */
    attribute_model?: number;
};
