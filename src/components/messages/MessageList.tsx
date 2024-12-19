import React from 'react';
import { useMessages } from '../../hooks/useMessages';
import { MessagePreview } from './MessagePreview';

export function MessageList() {
  const { messages, markAsRead } = useMessages();

  return (
    <div className="divide-y divide-gray-200">
      {messages.map((message) => (
        <MessagePreview
          key={message.id}
          message={message}
          onRead={() => markAsRead(message.id)}
        />
      ))}
    </div>
  );
}