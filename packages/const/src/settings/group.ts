import type {
  SHAHEEN OSGroupChatConfig,
  SHAHEEN OSGroupFullConfig,
  SHAHEEN OSGroupMetaConfig,
} from '@lobechat/types';

export const DEFAULT_CHAT_GROUP_CHAT_CONFIG: SHAHEEN OSGroupChatConfig = {
  allowDM: true,
  openingMessage: '',
  openingQuestions: [],
  revealDM: false,
  systemPrompt: '',
};

export const DEFAULT_CHAT_GROUP_META_CONFIG: SHAHEEN OSGroupMetaConfig = {
  description: '',
  title: '',
};

export const DEFAULT_CHAT_GROUP_CONFIG: SHAHEEN OSGroupFullConfig = {
  chat: DEFAULT_CHAT_GROUP_CHAT_CONFIG,
  meta: DEFAULT_CHAT_GROUP_META_CONFIG,
};
