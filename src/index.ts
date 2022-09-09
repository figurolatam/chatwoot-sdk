/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { ChatwootAPI } from './core/ChatwootAPI';
export type { ChatwootAPIConfig } from './core/ChatwootAPI';

export type { account } from './models/account';
export type { account_create_update_payload } from './models/account_create_update_payload';
export type { account_summary } from './models/account_summary';
export type { agent } from './models/agent';
export type { agent_bot } from './models/agent_bot';
export type { agent_bot_create_update_payload } from './models/agent_bot_create_update_payload';
export type { agent_conversation_metrics } from './models/agent_conversation_metrics';
export type { automation_rule } from './models/automation_rule';
export type { automation_rule_create_update_payload } from './models/automation_rule_create_update_payload';
export type { bad_request_error } from './models/bad_request_error';
export type { canned_response } from './models/canned_response';
export type { canned_response_create_update_payload } from './models/canned_response_create_update_payload';
export type { contact } from './models/contact';
export type { contact_base } from './models/contact_base';
export type { contact_conversations } from './models/contact_conversations';
export type { contact_create } from './models/contact_create';
export type { contact_inboxes } from './models/contact_inboxes';
export type { contact_list } from './models/contact_list';
export type { contact_update } from './models/contact_update';
export type { contactable_inboxes } from './models/contactable_inboxes';
export type { conversation } from './models/conversation';
export type { conversation_labels } from './models/conversation_labels';
export type { conversation_list } from './models/conversation_list';
export type { conversation_message_create } from './models/conversation_message_create';
export type { conversation_show } from './models/conversation_show';
export type { conversation_status_toggle } from './models/conversation_status_toggle';
export type { custom_attribute } from './models/custom_attribute';
export type { custom_attribute_create_update_payload } from './models/custom_attribute_create_update_payload';
export type { custom_filter } from './models/custom_filter';
export type { custom_filter_create_update_payload } from './models/custom_filter_create_update_payload';
export type { extended_contact } from './models/extended_contact';
export type { extended_message } from './models/extended_message';
export type { generic_id } from './models/generic_id';
export type { inbox } from './models/inbox';
export type { integrations_app } from './models/integrations_app';
export type { integrations_hook } from './models/integrations_hook';
export type { integrations_hook_create_payload } from './models/integrations_hook_create_payload';
export type { integrations_hook_update_payload } from './models/integrations_hook_update_payload';
export type { message } from './models/message';
export type { platform_account } from './models/platform_account';
export type { public_contact } from './models/public_contact';
export type { public_contact_create_update_payload } from './models/public_contact_create_update_payload';
export type { public_conversation } from './models/public_conversation';
export type { public_message } from './models/public_message';
export type { public_message_create_payload } from './models/public_message_create_payload';
export type { public_message_update_payload } from './models/public_message_update_payload';
export type { request_error } from './models/request_error';
export type { team } from './models/team';
export type { team_create_update_payload } from './models/team_create_update_payload';
export type { user } from './models/user';
export type { user_create_update_payload } from './models/user_create_update_payload';
export type { webhook } from './models/webhook';
export type { webhook_create_update_payload } from './models/webhook_create_update_payload';

import { AccountAgentBotsService } from './services/AccountAgentBotsService';
import { AccountsService } from './services/AccountsService';
import { AccountUsersService } from './services/AccountUsersService';
import { AgentBotsService } from './services/AgentBotsService';
import { AgentsService } from './services/AgentsService';
import { AutomationRuleService } from './services/AutomationRuleService';
import { CannedResponseService } from './services/CannedResponseService';
import { CannedResponsesService } from './services/CannedResponsesService';
import { ContactService } from './services/ContactService';
import { ContactsService } from './services/ContactsService';
import { ContactsApiService } from './services/ContactsApiService';
import { ConversationAssignmentService } from './services/ConversationAssignmentService';
import { ConversationLabelsService } from './services/ConversationLabelsService';
import { ConversationsService } from './services/ConversationsService';
import { ConversationsApiService } from './services/ConversationsApiService';
import { CustomAttributesService } from './services/CustomAttributesService';
import { CustomFiltersService } from './services/CustomFiltersService';
import { InboxesService } from './services/InboxesService';
import { IntegrationsService } from './services/IntegrationsService';
import { MessagesService } from './services/MessagesService';
import { MessagesApiService } from './services/MessagesApiService';
import { ProfileService } from './services/ProfileService';
import { ReportsService } from './services/ReportsService';
import { TeamsService } from './services/TeamsService';
import { UsersService } from './services/UsersService';
import { WebhooksService } from './services/WebhooksService';

import { ChatwootAPIConfig } from './core/ChatwootAPI';

export default class ChatWootClient {
    private chatwootAPI: ChatwootAPIConfig;

    constructor({
        config
    }: {
        config: ChatwootAPIConfig;
    }) {
        this.chatwootAPI = config;

        this.accountAgentBotsService = new AccountAgentBotsService({ config: config });
        this.accountsService = new AccountsService({ config: config });
        this.accountUsersService = new AccountUsersService({ config: config });
        this.agentBotsService = new AgentBotsService({ config: config });
        this.agentsService = new AgentsService({ config: config });
        this.automationRuleService = new AutomationRuleService({ config: config });
        this.cannedResponseService = new CannedResponseService({ config: config });
        this.cannedResponsesService = new CannedResponsesService({ config: config });
        this.contactService = new ContactService({ config: config });
        this.contactsService = new ContactsService({ config: config });
        this.contactsApiService = new ContactsApiService({ config: config });
        this.conversationsApiService = new ConversationsApiService({ config: config });
        this.customAttributesService = new CustomAttributesService({ config: config });
        this.conversationAssignmentService = new ConversationAssignmentService({ config: config });
        this.conversationLabelsService = new ConversationLabelsService({ config: config });
        this.conversationsService = new ConversationsService({ config: config });
        this.customFiltersService = new CustomFiltersService({ config: config });
        this.inboxesService = new InboxesService({ config: config });
        this.integrationsService = new IntegrationsService({ config: config });
        this.messagesService = new MessagesService({ config: config });
        this.messagesApiService = new MessagesApiService({ config: config });
        this.profileService = new ProfileService({ config: config });
        this.reportsService = new ReportsService({ config: config });
        this.teamsService = new TeamsService({ config: config });
        this.usersService = new UsersService({ config: config });
        this.webhooksService = new WebhooksService({ config: config });
    }

    public accountAgentBotsService: AccountAgentBotsService;
    public accountsService: AccountsService;
    public accountUsersService: AccountUsersService;
    public agentBotsService: AgentBotsService;
    public agentsService: AgentsService;
    public automationRuleService: AutomationRuleService;
    public cannedResponseService: CannedResponseService;
    public cannedResponsesService: CannedResponsesService;
    public contactService: ContactService;
    public contactsService: ContactsService;
    public contactsApiService: ContactsApiService;
    public conversationAssignmentService: ConversationAssignmentService;
    public conversationLabelsService: ConversationLabelsService;
    public conversationsService: ConversationsService;
    public conversationsApiService: ConversationsApiService;
    public customAttributesService: CustomAttributesService;
    public customFiltersService: CustomFiltersService;
    public inboxesService: InboxesService;
    public integrationsService: IntegrationsService;
    public messagesService: MessagesService;
    public messagesApiService: MessagesApiService;
    public profileService: ProfileService;
    public reportsService: ReportsService;
    public teamsService: TeamsService;
    public usersService: UsersService;
    public webhooksService: WebhooksService;
}