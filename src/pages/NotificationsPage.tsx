import React from 'react';
import { NotificationList } from '../components/notifications/NotificationList';

export function NotificationsPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <NotificationList />
    </div>
  );
}