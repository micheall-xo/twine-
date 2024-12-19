import type { Notification } from '../types';

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'like',
    user: {
      id: '2',
      username: 'jane_smith',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    content: 'liked your post',
    timestamp: '2024-03-15T10:30:00Z',
    read: false,
  },
  // Add more mock notifications
];