import { useState, useCallback } from 'react';
import type { UserSettings } from '../types';

const DEFAULT_SETTINGS: UserSettings = {
  account: {
    email: '',
    username: '',
    language: 'en',
    timezone: 'UTC'
  },
  privacy: {
    isPrivate: false,
    showActivity: true,
    allowStorySharing: true
  },
  notifications: {
    likes: true,
    comments: true,
    follows: true,
    messages: true
  },
  theme: {
    mode: 'light',
    primaryColor: 'blue'
  }
};

export function useUserSettings() {
  const [settings, setSettings] = useState<UserSettings>(DEFAULT_SETTINGS);

  const updateSettings = useCallback((newSettings: UserSettings) => {
    setSettings(newSettings);
    // Here you would typically save to backend
  }, []);

  return { settings, updateSettings };
}