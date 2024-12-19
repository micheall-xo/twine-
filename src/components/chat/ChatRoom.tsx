import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { socket } from '../../lib/socket';
import { useAuth } from '../../hooks/useAuth';
import type { Message, User } from '../../types';

interface ChatRoomProps {
  roomId: string;
  participants: User[];
}

export function ChatRoom({ roomId, participants }: ChatRoomProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();

  useEffect(() => {
    socket.emit('join-room', roomId);
    
    socket.on('message', (message: Message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      socket.emit('leave-room', roomId);
      socket.off('message');
    };
  }, [roomId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      content: newMessage,
      sender: user,
      timestamp: new Date().toISOString(),
    };

    socket.emit('send-message', { roomId, message });
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-16rem)] bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="font-semibold">
          {participants.map(p => p.name).join(', ')}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender.id === user?.id ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender.id === user?.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              <p>{message.content}</p>
              <span className="text-xs opacity-75">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}