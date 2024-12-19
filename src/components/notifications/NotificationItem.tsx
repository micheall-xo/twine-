import React from 'react';
import { formatDistanceToNow } from '../../utils/dateUtils';
import type { Notification } from '../../types';

interface NotificationItemProps {
  notification: Notification;
  onRead: () => void;
}

export function NotificationItem({ notification, onRead }: NotificationItemProps) {
  return (
    <div
      className={`p-4 hover:bg-gray-50 cursor-pointer ${
        !notification.read ? 'bg-blue-50' : ''
      }`}
      onClick={onRead}
    >
      <div className="flex items-center space-x-3">
        <img
          src={notification.user.avatar}
          alt={notification.user.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-900">
            <span className="font-medium">{notification.user.name}</span>{' '}
            {notification.content}
          </p>
          <p className="text-xs text-gray-500">
            {formatDistanceToNow(new Date(notification.timestamp))}
          </p>
        </div>
      </div>
    </div>
  );
}