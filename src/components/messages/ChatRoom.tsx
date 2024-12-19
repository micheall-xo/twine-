import React, { useState, useEffect, useRef } from 'react';
import { Send, Heart, MoreHorizontal, Phone, Video, Poll } from 'lucide-react';
import { socket } from '../../lib/socket';
import { useAuth } from '../../hooks/useAuth';
import { MessageBubble } from './MessageBubble';
import { MessageActions } from './MessageActions';
import { GroupChatModal } from './GroupChatModal';
import { PollModal } from './PollModal';
import type { Message, User } from '../../types';

interface ChatRoomProps {
  roomId: string;
  participants: User[];
}

export function ChatRoom({ roomId, participants }: ChatRoomProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [showActions, setShowActions] = useState(false);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [showPollModal, setShowPollModal] = useState(false);
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

    const isSilent = newMessage.includes('@silent');
    const content = newMessage.replace('@silent', '').trim();

    const message = {
      content,
      sender: user,
      timestamp: new Date().toISOString(),
      silent: isSilent,
    };

    socket.emit('send-message', { roomId, message });
    setNewMessage('');
  };

  const handleReaction = (messageId: string) => {
    socket.emit('react-message', { roomId, messageId, reaction: '❤️' });
  };

  const handleUnsend = (messageId: string) => {
    socket.emit('unsend-message', { roomId, messageId });
    setMessages(prev => prev.filter(m => m.id !== messageId));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-16rem)] bg-white rounded-lg shadow">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="font-semibold">
            {participants.map(p => p.name).join(', ')}
          </h2>
          {participants.some(p => p.isActive) && (
            <span className="text-sm text-green-500">Active now</span>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <Phone className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <Video className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setShowActions(!showActions)}
            className="text-gray-600 hover:text-gray-800"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwn={message.sender.id === user?.id}
            onReaction={() => handleReaction(message.id)}
            onUnsend={() => handleUnsend(message.id)}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Message..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPollModal(true)}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <Poll className="h-5 w-5" />
          </button>
          <button
            type="submit"
            className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>

      {showActions && (
        <MessageActions
          onClose={() => setShowActions(false)}
          onCreateGroup={() => setShowGroupModal(true)}
        />
      )}

      {showGroupModal && (
        <GroupChatModal
          onClose={() => setShowGroupModal(false)}
          onCreateGroup={(users) => {
            // Handle group creation
            setShowGroupModal(false);
          }}
        />
      )}

      {showPollModal && (
        <PollModal
          onClose={() => setShowPollModal(false)}
          onCreatePoll={(question, options) => {
            // Handle poll creation
            setShowPollModal(false);
          }}
        />
      )}
    </div>
  );
}