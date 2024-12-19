import React from 'react';
import { formatDistanceToNow } from '../../utils/dateUtils';
import type { Message } from '../../types';

interface MessagePreviewProps {
  message: Message;
  onRead: () => void;
}

export function MessagePreview({ message, onRead }: MessagePreviewProps) {
  return (
    <div
      className={`p-4 hover:bg-gray-50 cursor-pointer ${!message.read ? 'bg-blue-50' : ''}`}
      onClick={onRead}
    >
      <div className="flex items-center space-x-3">
        <img
          src={message.sender.avatar}
          alt={message.sender.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {message.sender.name}
          </p>
          <p className="text-sm text-gray-500 truncate">{message.content}</p>
        </div>
        <div className="text-xs text-gray-500">
          {formatDistanceToNow(new Date(message.timestamp))}
        </div>
      </div>
    </div>
  );
}