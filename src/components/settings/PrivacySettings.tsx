import React from 'react';
import { Switch } from '../ui/Switch';
import type { PrivacySettings as PrivacySettingsType } from '../../types';

interface PrivacySettingsProps {
  settings: PrivacySettingsType;
  onUpdate: (settings: PrivacySettingsType) => void;
}

export function PrivacySettings({ settings, onUpdate }: PrivacySettingsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Private Account</h3>
            <p className="text-sm text-gray-500">Only approved followers can see your posts</p>
          </div>
          <Switch
            checked={settings.isPrivate}
            onChange={(isPrivate) => onUpdate({ ...settings, isPrivate })}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Show Activity Status</h3>
            <p className="text-sm text-gray-500">Let others see when you're active</p>
          </div>
          <Switch
            checked={settings.showActivity}
            onChange={(showActivity) => onUpdate({ ...settings, showActivity })}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Story Sharing</h3>
            <p className="text-sm text-gray-500">Allow others to share your stories</p>
          </div>
          <Switch
            checked={settings.allowStorySharing}
            onChange={(allowStorySharing) => onUpdate({ ...settings, allowStorySharing })}
          />
        </div>
      </div>
    </div>
  );
}