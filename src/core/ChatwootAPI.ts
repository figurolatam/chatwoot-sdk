/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from "./ApiRequestOptions";

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type ChatwootAPIConfig = {
    basePath: string;
    with_credentials: boolean;
    credentials: "include" | "omit" | "same-origin";
    token?: string | Resolver<string>;
    username?: string | Resolver<string>;
    password?: string | Resolver<string>;
    headers?: Headers | Resolver<Headers>;
    encode_path?: (path: string) => string;
};

export const ChatwootAPI: ChatwootAPIConfig = {
    basePath: "https://app.chatwoot.com",
    with_credentials: false,
    credentials: "include",
    token: undefined,
    username: undefined,
    password: undefined,
    headers: undefined,
    encode_path: undefined,
};
