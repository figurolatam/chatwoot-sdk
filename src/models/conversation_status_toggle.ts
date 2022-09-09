/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type conversation_status_toggle = {
    meta?: any;
    payload?: {
        success?: boolean;
        current_status?: "open" | "resolved";
        conversation_id?: number;
    };
};
