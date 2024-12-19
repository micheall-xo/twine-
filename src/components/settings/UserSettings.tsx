import React from 'react';
import { useUserSettings } from '../../hooks/useUserSettings';
import { PrivacySettings } from './PrivacySettings';
import { NotificationSettings } from './NotificationSettings';
import { ThemeSettings } from './ThemeSettings';
import { AccountSettings } from './AccountSettings';

export function UserSettings() {
  const { settings, updateSettings } = useUserSettings();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <AccountSettings
        settings={settings.account}
        onUpdate={(account) => updateSettings({ ...settings, account })}
      />
      <PrivacySettings
        settings={settings.privacy}
        onUpdate={(privacy) => updateSettings({ ...settings, privacy })}
      />
      <NotificationSettings
        settings={settings.notifications}
        onUpdate={(notifications) => updateSettings({ ...settings, notifications })}
      />
      <ThemeSettings
        settings={settings.theme}
        onUpdate={(theme) => updateSettings({ ...settings, theme })}
      />
    </div>
  );
}