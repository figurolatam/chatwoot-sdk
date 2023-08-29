"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatwootAPI = exports.CancelError = exports.CancelablePromise = exports.ApiError = void 0;
var ApiError_1 = require("./core/ApiError");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return ApiError_1.ApiError; } });
var CancelablePromise_1 = require("./core/CancelablePromise");
Object.defineProperty(exports, "CancelablePromise", { enumerable: true, get: function () { return CancelablePromise_1.CancelablePromise; } });
Object.defineProperty(exports, "CancelError", { enumerable: true, get: function () { return CancelablePromise_1.CancelError; } });
var ChatwootAPI_1 = require("./core/ChatwootAPI");
Object.defineProperty(exports, "ChatwootAPI", { enumerable: true, get: function () { return ChatwootAPI_1.ChatwootAPI; } });
const AccountAgentBots_1 = require("./services/AccountAgentBots");
const Accounts_1 = require("./services/platform/Accounts");
const AccountUsers_1 = require("./services/platform/AccountUsers");
const AgentBots_1 = require("./services/platform/AgentBots");
const Agents_1 = require("./services/Agents");
const AutomationRules_1 = require("./services/AutomationRules");
const CannedResponses_1 = require("./services/CannedResponses");
const ContactInboxes_1 = require("./services/ContactInboxes");
const Contacts_1 = require("./services/Contacts");
const Contacts_2 = require("./services/client/Contacts");
const ConversationAssignments_1 = require("./services/ConversationAssignments");
const ConversationLabels_1 = require("./services/ConversationLabels");
const Conversations_1 = require("./services/Conversations");
const Conversations_2 = require("./services/client/Conversations");
const CustomAttributes_1 = require("./services/CustomAttributes");
const CustomFilters_1 = require("./services/CustomFilters");
const Inboxes_1 = require("./services/Inboxes");
const Integrations_1 = require("./services/Integrations");
const Messages_1 = require("./services/Messages");
const Messages_2 = require("./services/client/Messages");
const Profile_1 = require("./services/Profile");
const Reports_1 = require("./services/Reports");
const Teams_1 = require("./services/Teams");
const Users_1 = require("./services/platform/Users");
const Webhooks_1 = require("./services/Webhooks");
class ChatwootClient {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
        this.client = {
            contacts: new Contacts_2.ContactsApi({ config: config }),
            conversations: new Conversations_2.ConversationsApi({ config: config }),
            messages: new Messages_2.MessagesApi({ config: config }),
        };
        this.platform = {
            accounts: new Accounts_1.Accounts({ config: config }),
            accountUsers: new AccountUsers_1.AccountUsers({ config: config }),
            agentBots: new AgentBots_1.AgentBots({ config: config }),
            users: new Users_1.Users({ config: config }),
        };
        this.accountAgentBots = new AccountAgentBots_1.AccountAgentBots({ config: config });
        this.agentBots = new AgentBots_1.AgentBots({ config: config });
        this.agents = new Agents_1.Agents({ config: config });
        this.automationRule = new AutomationRules_1.AutomationRule({ config: config });
        this.cannedResponses = new CannedResponses_1.CannedResponses({ config: config });
        this.contact = new ContactInboxes_1.Contact({ config: config });
        this.contacts = new Contacts_1.Contacts({ config: config });
        this.customAttributes = new CustomAttributes_1.CustomAttributes({ config: config });
        this.conversationAssignment = new ConversationAssignments_1.ConversationAssignment({ config: config });
        this.conversationLabels = new ConversationLabels_1.ConversationLabels({ config: config });
        this.conversations = new Conversations_1.Conversations({ config: config });
        this.customFilters = new CustomFilters_1.CustomFilters({ config: config });
        this.inboxes = new Inboxes_1.Inboxes({ config: config });
        this.integrations = new Integrations_1.Integrations({ config: config });
        this.messages = new Messages_1.Messages({ config: config });
        this.profile = new Profile_1.Profile({ config: config });
        this.reports = new Reports_1.Reports({ config: config });
        this.teams = new Teams_1.Teams({ config: config });
        this.users = new Users_1.Users({ config: config });
        this.webhooks = new Webhooks_1.Webhooks({ config: config });
    }
    client = {};
    platform = {};
    accountAgentBots;
    agentBots;
    agents;
    automationRule;
    cannedResponses;
    contact;
    contacts;
    conversationAssignment;
    conversationLabels;
    conversations;
    customAttributes;
    customFilters;
    inboxes;
    integrations;
    messages;
    profile;
    reports;
    teams;
    users;
    webhooks;
}
exports.default = ChatwootClient;
//# sourceMappingURL=index.js.map