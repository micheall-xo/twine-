import React, { useState } from 'react';
import { Heart, MoreVertical } from 'lucide-react';
import { formatMessageTime } from '../../utils/dateUtils';
import type { Message } from '../../types';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
  onReaction: () => void;
  onUnsend: () => void;
}

export function MessageBubble({ message, isOwn, onReaction, onUnsend }: MessageBubbleProps) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className={`group flex ${
        isOwn ? 'justify-end' : 'justify-start'
      }`}
    >
      <div className="relative max-w-[70%]">
        <div
          className={`rounded-lg p-3 ${
            isOwn
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100'
          }`}
          onDoubleClick={onReaction}
        >
          {message.content}
          {message.reaction && (
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow">
              <Heart className="h-3 w-3 fill-current text-red-500" />
            </div>
          )}
        </div>
        <div className="flex items-center mt-1 space-x-2">
          <span className="text-xs text-gray-500">
            {formatMessageTime(new Date(message.timestamp))}
            {message.seen && ' • Seen'}
          </span>
          {isOwn && (
            <button
              onClick={() => setShowActions(!showActions)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <MoreVertical className="h-4 w-4 text-gray-500" />
            </button>
          )}
        </div>
        {showActions && isOwn && (
          <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-lg py-1">
            <button
              onClick={onUnsend}
              className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Unsend
            </button>
          </div>
        )}
      </div>
    </div>
  );
}