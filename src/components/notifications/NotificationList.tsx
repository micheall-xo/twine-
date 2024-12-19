import React from 'react';
import { useNotifications } from '../../hooks/useNotifications';
import { NotificationItem } from './NotificationItem';

export function NotificationList() {
  const { notifications, markAsRead, markAllAsRead } = useNotifications();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button
          onClick={markAllAsRead}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Mark all as read
        </button>
      </div>
      <div className="divide-y divide-gray-200">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRead={() => markAsRead(notification.id)}
          />
        ))}
      </div>
    </div>
  );
}