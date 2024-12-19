import type { Message } from '../types';

export const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    sender: {
      id: '2',
      username: 'jane_smith',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    receiver: {
      id: '1',
      username: 'john_doe',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    },
    content: 'Hey, how are you?',
    timestamp: '2024-03-15T10:30:00Z',
    read: false,
  },
  // Add more mock messages
];