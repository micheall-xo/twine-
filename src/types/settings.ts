export interface AccountSettings {
  email: string;
  username: string;
  language: string;
  timezone: string;
}

export interface PrivacySettings {
  isPrivate: boolean;
  showActivity: boolean;
  allowStorySharing: boolean;
}

export interface NotificationSettings {
  likes: boolean;
  comments: boolean;
  follows: boolean;
  messages: boolean;
}

export interface ThemeSettings {
  mode: 'light' | 'dark';
  primaryColor: string;
}

export interface UserSettings {
  account: AccountSettings;
  privacy: PrivacySettings;
  notifications: NotificationSettings;
  theme: ThemeSettings;
}