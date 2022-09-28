# Chatwoot API SDK
[![npm (scoped)](https://img.shields.io/npm/v/@figuro/chatwoot-sdk)](https://www.npmjs.com/package/@figuro/chatwoot-sdk) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/figurolatam/chatwoot-sdk/Node.js%20Package)](https://github.com/figurolatam/chatwoot-sdk/actions) [![NPM](https://img.shields.io/npm/l/@figuro/chatwoot-sdk)](https://opensource.org/licenses/MIT)

This SDK provides a Javascript client to connect with Chatwoot API. Typescript is fully supported.

This project depends only on Axios for advanced data fetching support and compatibility, not other dependencies are used.

Please refer to [Chatwoot's documentation](https://www.chatwoot.com/developers/api/) for further reference about the API.

## Installation

Using **npm**:

```shell
npm i @figuro/chatwoot-sdk --save
```

Using **yarn**:

```shell
yarn add @figuro/chatwoot-sdk
```

## Example

```typescript
import ChatwootClient from "@figuro/chatwoot-sdk";

const client = new ChatwootClient({
    config: {
        basePath: "https://app.chatwoot.com",
        with_credentials: true,
        credentials: "include",
        token: "<YOUR_API_TOKEN_HERE>"
    }
});

client.messages.create({
    accountId: 1,
    conversationId: 8,
    data: {
        content: "Hello, World!"
    }
})
    .then(response => {
        console.log(response.sender?.name);
    })
    .catch(err => {
        console.error(err);
    });
```

While not documented on Chatwoot, file messages are supported via `multipart/form-data`, to enable this, an attachment parameter is implemented. (Please note that content was shortened for simplicity and is not valid).

```typescript
client.messages.create({
    accountId: 1,
    conversationId: 8,
    data: {
        content: "Hello, World!",
        attachments: [
            {
                content: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/...gUaFFSdABUVmZpaSnFk7kXiPwNOgbDxE5JKbEAAAAASUVORK5CYII=",
                encoding: "base64",
                filename: "test.png"
            }
        ]
    }
})
    .then(response => {
        console.log(response.sender?.name);
    })
    .catch(err => {
        console.error(err);
    });
```