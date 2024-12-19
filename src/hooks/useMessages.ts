import { useState, useEffect } from 'react';
import type { Message, User } from '../types';
import { MOCK_MESSAGES } from '../data/messages';

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    setUnreadCount(messages.filter(m => !m.read).length);
  }, [messages]);

  const sendMessage = (receiverId: string, content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date().toISOString(),
      read: false,
      sender: MOCK_MESSAGES[0].sender, // Current user
      receiver: MOCK_MESSAGES.find(m => m.receiver.id === receiverId)?.receiver!,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const markAsRead = (id: string) => {
    setMessages(prev => 
      prev.map(m => m.id === id ? { ...m, read: true } : m)
    );
  };

  return { messages, unreadCount, sendMessage, markAsRead };
}