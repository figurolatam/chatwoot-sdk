/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { conversation_message_create } from "../models/conversation_message_create";
import type { conversation_message_update } from "../models/conversation_message_update";
import type { generic_id } from "../models/generic_id";
import type { message } from "../models/message";

import type { CancelablePromise } from "../core/CancelablePromise";
import { ChatwootAPIConfig } from "../core/ChatwootAPI";
import { request as __request } from "../core/request";
import { Blob } from "buffer";
import { Readable } from "stream";
import { file_upload } from "../models/file_upload";

/**
 * Messages calls from Platform API
 */
export class Messages {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;
    }

    /**
     * Get messages
     * List all messages of a conversation
     * @returns any Success
     * @throws ApiError
     */
    public list({
        accountId,
        conversationId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
    }): CancelablePromise<Array<generic_id & message>> {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Conversation not found`,
            },
        });
    }

    /**
     * Create New Message
     * Create a new message in the conversation
     * @returns any Success
     * @throws ApiError
     */
    public create({
        accountId,
        conversationId,
        data,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        data: conversation_message_create;
        /**
         * The payload as {@link conversation_message_create}
         */
    }): CancelablePromise<generic_id & message> {
        const { attachments, ...clone } = data;
        let files: file_upload[] | undefined;
        if (attachments) {
            files = attachments.map<file_upload>((value) => {
                return {
                    content: new Readable({
                        read() {
                            this.push(Buffer.from(value?.content as string, value?.encoding as BufferEncoding));
                            this.push(null);
                        },
                    }),
                    filename: value?.filename as string,
                };
            });
        }
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            formData: { ...clone, attachments: files },

            errors: {
                403: `Access denied`,
                404: `Conversation not found`,
            },
        });
    }

    /**
     * Update a Message
     * Update a message in the conversation
     * @returns any Success
     * @throws ApiError
     */
    public update({
        accountId,
        conversationId,
        data,
        messageId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        data: conversation_message_update;
        /**
         * The payload as {@link conversation_message_update}
         */
        /**
         * The numeric ID of the message
         */
        messageId: number;
    }): CancelablePromise<generic_id & message> {
        const { attachments, ...clone } = data;
        let files: file_upload[] | undefined;
        if (attachments) {
            files = attachments.map<file_upload>((value) => {
                return {
                    content: new Readable({
                        read() {
                            this.push(Buffer.from(value?.content as string, value?.encoding as BufferEncoding));
                            this.push(null);
                        },
                    }),
                    filename: value?.filename as string,
                };
            });
        }
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
                message_id: messageId,
            },
            formData: { ...clone, attachments: files },

            errors: {
                403: `Access denied`,
                404: `Conversation not found`,
            },
        });
    }
    /**
     * Delete a message
     * Delete a message and it's attachments from the conversation.
     * @returns any Success
     * @throws ApiError
     */
    public delete({
        accountId,
        conversationId,
        messageId,
    }: {
        /**
         * The numeric ID of the account
         */
        accountId: number;
        /**
         * The numeric ID of the conversation
         */
        conversationId: number;
        /**
         * The numeric ID of the message
         */
        messageId: number;
    }): CancelablePromise<any> {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
                message_id: messageId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The message or conversation does not exist in the account`,
            },
        });
    }
}
