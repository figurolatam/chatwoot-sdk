export { ApiError } from "./core/ApiError";
export { CancelablePromise, CancelError } from "./core/CancelablePromise";
export { ChatwootAPI } from "./core/ChatwootAPI";
export type { ChatwootAPIConfig } from "./core/ChatwootAPI";

export type { account } from "./models/account";
export type { account_create_update_payload } from "./models/account_create_update_payload";
export type { account_summary } from "./models/account_summary";
export type { agent } from "./models/agent";
export type { agent_bot } from "./models/agent_bot";
export type { agent_bot_create_update_payload } from "./models/agent_bot_create_update_payload";
export type { agent_conversation_metrics } from "./models/agent_conversation_metrics";
export type { automation_rule } from "./models/automation_rule";
export type { automation_rule_create_update_payload } from "./models/automation_rule_create_update_payload";
export type { bad_request_error } from "./models/bad_request_error";
export type { canned_response } from "./models/canned_response";
export type { canned_response_create_update_payload } from "./models/canned_response_create_update_payload";
export type { contact } from "./models/contact";
export type { contact_base } from "./models/contact_base";
export type { contact_conversations } from "./models/contact_conversations";
export type { contact_create } from "./models/contact_create";
export type { contact_inboxes } from "./models/contact_inboxes";
export type { contact_list } from "./models/contact_list";
export type { contact_update } from "./models/contact_update";
export type { contactable_inboxes } from "./models/contactable_inboxes";
export type { conversation } from "./models/conversation";
export type { conversation_labels } from "./models/conversation_labels";
export type { conversation_list } from "./models/conversation_list";
export type { conversation_message_create } from "./models/conversation_message_create";
export type { conversation_show } from "./models/conversation_show";
export type { conversation_status_toggle } from "./models/conversation_status_toggle";
export type { custom_attribute } from "./models/custom_attribute";
export type { custom_attribute_create_update_payload } from "./models/custom_attribute_create_update_payload";
export type { custom_filter } from "./models/custom_filter";
export type { custom_filter_create_update_payload } from "./models/custom_filter_create_update_payload";
export type { extended_contact } from "./models/extended_contact";
export type { extended_message } from "./models/extended_message";
export type { generic_id } from "./models/generic_id";
export type { inbox } from "./models/inbox";
export type { integrations_app } from "./models/integrations_app";
export type { integrations_hook } from "./models/integrations_hook";
export type { integrations_hook_create_payload } from "./models/integrations_hook_create_payload";
export type { integrations_hook_update_payload } from "./models/integrations_hook_update_payload";
export type { message } from "./models/message";
export type { platform_account } from "./models/platform_account";
export type { public_contact } from "./models/public_contact";
export type { public_contact_create_update_payload } from "./models/public_contact_create_update_payload";
export type { public_conversation } from "./models/public_conversation";
export type { public_message } from "./models/public_message";
export type { public_message_create_payload } from "./models/public_message_create_payload";
export type { public_message_update_payload } from "./models/public_message_update_payload";
export type { request_error } from "./models/request_error";
export type { team } from "./models/team";
export type { team_create_update_payload } from "./models/team_create_update_payload";
export type { user } from "./models/user";
export type { user_create_update_payload } from "./models/user_create_update_payload";
export type { webhook } from "./models/webhook";
export type { webhook_create_update_payload } from "./models/webhook_create_update_payload";

import { AccountAgentBots } from "./services/AccountAgentBots";
import { Accounts } from "./services/platform/Accounts";
import { AccountUsers } from "./services/platform/AccountUsers";
import { AgentBots } from "./services/platform/AgentBots";
import { Agents } from "./services/Agents";
import { AutomationRule } from "./services/AutomationRules";
import { CannedResponses } from "./services/CannedResponses";
import { Contact } from "./services/ContactInboxes";
import { Contacts } from "./services/Contacts";
import { ContactsApi } from "./services/client/Contacts";
import { ConversationAssignment } from "./services/ConversationAssignments";
import { ConversationLabels } from "./services/ConversationLabels";
import { Conversations } from "./services/Conversations";
import { ConversationsApi } from "./services/client/Conversations";
import { CustomAttributes } from "./services/CustomAttributes";
import { CustomFilters } from "./services/CustomFilters";
import { Inboxes } from "./services/Inboxes";
import { Integrations } from "./services/Integrations";
import { Messages } from "./services/Messages";
import { MessagesApi } from "./services/client/Messages";
import { Profile } from "./services/Profile";
import { Reports } from "./services/Reports";
import { Teams } from "./services/Teams";
import { Users } from "./services/platform/Users";
import { Webhooks } from "./services/Webhooks";

import { ChatwootAPIConfig } from "./core/ChatwootAPI";

export default class ChatwootClient {
    private chatwootAPI: ChatwootAPIConfig;
    public readonly client;
    public readonly platform;

    constructor({ config }: { config: ChatwootAPIConfig }) {
        this.chatwootAPI = config;

        this.client = {
            contacts: new ContactsApi({ config: config }),
            conversations: new ConversationsApi({ config: config }),
            messages: new MessagesApi({ config: config }),
        };

        this.platform = {
            accounts: new Accounts({ config: config }),
            accountUsers: new AccountUsers({ config: config }),
            agentBots: new AgentBots({ config: config }),
            users: new Users({ config: config }),
        };

        this.accountAgentBots = new AccountAgentBots({ config: config });

        this.agentBots = new AgentBots({ config: config });
        this.agents = new Agents({ config: config });
        this.automationRule = new AutomationRule({ config: config });
        this.cannedResponses = new CannedResponses({ config: config });
        this.contact = new Contact({ config: config });
        this.contacts = new Contacts({ config: config });

        this.customAttributes = new CustomAttributes({ config: config });
        this.conversationAssignment = new ConversationAssignment({ config: config });
        this.conversationLabels = new ConversationLabels({ config: config });
        this.conversations = new Conversations({ config: config });
        this.customFilters = new CustomFilters({ config: config });
        this.inboxes = new Inboxes({ config: config });
        this.integrations = new Integrations({ config: config });
        this.messages = new Messages({ config: config });

        this.profile = new Profile({ config: config });
        this.reports = new Reports({ config: config });
        this.teams = new Teams({ config: config });
        this.users = new Users({ config: config });
        this.webhooks = new Webhooks({ config: config });
    }
    
    public accountAgentBots: AccountAgentBots;
    public agentBots: AgentBots;
    public agents: Agents;
    public automationRule: AutomationRule;
    public cannedResponses: CannedResponses;
    public contact: Contact;
    public contacts: Contacts;
    public conversationAssignment: ConversationAssignment;
    public conversationLabels: ConversationLabels;
    public conversations: Conversations;
    public customAttributes: CustomAttributes;
    public customFilters: CustomFilters;
    public inboxes: Inboxes;
    public integrations: Integrations;
    public messages: Messages;
    public profile: Profile;
    public reports: Reports;
    public teams: Teams;
    public users: Users;
    public webhooks: Webhooks;
}
