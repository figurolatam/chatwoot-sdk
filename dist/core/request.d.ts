import type { ApiRequestOptions } from "./ApiRequestOptions";
import { CancelablePromise } from "./CancelablePromise";
import type { ChatwootAPIConfig } from "./ChatwootAPI";
/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export declare const request: <T>(config: ChatwootAPIConfig, options: ApiRequestOptions) => CancelablePromise<T>;
