import type { ApiRequestOptions } from "./ApiRequestOptions";
declare type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
declare type Headers = Record<string, string>;
export declare type ChatwootAPIConfig = {
    basePath: string;
    with_credentials: boolean;
    credentials: "include" | "omit" | "same-origin";
    token?: string | Resolver<string>;
    username?: string | Resolver<string>;
    password?: string | Resolver<string>;
    headers?: Headers | Resolver<Headers>;
    encode_path?: (path: string) => string;
};
export declare const ChatwootAPI: ChatwootAPIConfig;
export {};
