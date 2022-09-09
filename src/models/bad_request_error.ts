/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { request_error } from "./request_error";

export type bad_request_error = {
    description?: string;
    errors?: Array<request_error>;
};
