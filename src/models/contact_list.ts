/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { contact } from "./contact";
import type { generic_id } from "./generic_id";

/**
 * array of contacts
 */
export type contact_list = Array<generic_id & contact>;
