import type { request_error } from "./request_error";
export declare type bad_request_error = {
    description?: string;
    errors?: Array<request_error>;
};
