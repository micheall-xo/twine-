import React from 'react';
import { UserSettings } from '../components/settings/UserSettings';

export function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <UserSettings />
    </div>
  );
}