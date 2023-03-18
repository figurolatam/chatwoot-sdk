# Chatwoot API SDK
[![npm (scoped)](https://img.shields.io/npm/v/@figuro/chatwoot-sdk)](https://www.npmjs.com/package/@figuro/chatwoot-sdk) ![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/figurolatam/chatwoot-sdk/npm-publish.yml?logo=github-actions) [![NPM](https://img.shields.io/npm/l/@figuro/chatwoot-sdk)](https://opensource.org/licenses/MIT)

The Chatwoot SDK is a JavaScript client that allows developers to connect to the Chatwoot API. With full TypeScript support, the SDK provides an easy-to-use interface for developers to interact with the Chatwoot platform programmatically.

The SDK is built with simplicity in mind and only depends on Axios for advanced data fetching support and compatibility. This means that developers can enjoy a lightweight, efficient SDK without the added burden of extraneous dependencies.

To learn more about the Chatwoot API, please refer to [Chatwoot's documentation](https://www.chatwoot.com/developers/api/). There, you'll find everything you need to get started, including detailed API reference documentation, sample code, and tutorials.

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

## Documentation
The full documentation for the Chatwoot API can be found [Chatwoot's documentation](https://www.chatwoot.com/developers/api/).

## Contributing
If you'd like to contribute, please open an issue or pull request on this repository. We'd love to hear from you!

## License
This SDK is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Support
If you have any questions or need help, please reach out to us by opening an issue on this repository.
