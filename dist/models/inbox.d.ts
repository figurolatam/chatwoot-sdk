export declare type inbox = {
    /**
     * ID of the inbox
     */
    id?: number;
    /**
     * The name of the inbox
     */
    name?: string;
    /**
     * Website URL
     */
    website_url?: string;
    /**
     * The type of the inbox
     */
    channel_type?: string;
    /**
     * The avatar image of the inbox
     */
    avatar_url?: string;
    /**
     * Widget Color used for customization of the widget
     */
    widget_color?: string;
    /**
     * Website Token
     */
    website_token?: string;
    /**
     * The flag which shows whether Auto Assignment is enabled or not
     */
    enable_auto_assignment?: boolean;
    /**
     * Script used to load the website widget
     */
    web_widget_script?: string;
    /**
     * Welcome title to be displayed on the widget
     */
    welcome_title?: string;
    /**
     * Welcome tagline to be displayed on the widget
     */
    welcome_tagline?: string;
    /**
     * The flag which shows whether greeting is enabled
     */
    greeting_enabled?: boolean;
    /**
     * A greeting message when the user starts the conversation
     */
    greeting_message?: string;
};
