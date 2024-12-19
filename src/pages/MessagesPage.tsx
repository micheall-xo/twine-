import React from 'react';
import { MessageList } from '../components/messages/MessageList';

export function MessagesPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      <div className="bg-white rounded-lg shadow">
        <MessageList />
      </div>
    </div>
  );
}