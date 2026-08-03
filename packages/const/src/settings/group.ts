import type {
  SHAHEENOSGroupChatConfig,
  SHAHEENOSGroupFullConfig,
  SHAHEENOSGroupMetaConfig,
} from '@lobechat/types';

export const DEFAULT_CHAT_GROUP_CHAT_CONFIG: SHAHEENOSGroupChatConfig = {
  allowDM: true,
  openingMessage: '',
  openingQuestions: [],
  revealDM: false,
  systemPrompt: '',
};

export const DEFAULT_CHAT_GROUP_META_CONFIG: SHAHEENOSGroupMetaConfig = {
  description: '',
  title: '',
};

export const DEFAULT_CHAT_GROUP_CONFIG: SHAHEENOSGroupFullConfig = {
  chat: DEFAULT_CHAT_GROUP_CHAT_CONFIG,
  meta: DEFAULT_CHAT_GROUP_META_CONFIG,
};
