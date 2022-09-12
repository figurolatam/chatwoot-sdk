# Chatwoot API SDK
![npm (scoped)](https://img.shields.io/npm/v/@figuro/chatwoot-sdk) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/figurolatam/chatwoot-sdk/Node.js%20Package) ![NPM](https://img.shields.io/npm/l/@figuro/chatwoot-sdk)

A client to connect with Chatwoot from Javascript with Typescript support.

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