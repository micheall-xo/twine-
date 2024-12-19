import React from 'react';
import { Story } from './Story';
import type { Story as StoryType } from '../../types';

const MOCK_STORIES: StoryType[] = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'john_doe',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=800&fit=crop',
    timestamp: new Date().toISOString(),
  },
  // Add more mock stories here
];

export function Stories() {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex space-x-4 overflow-x-auto">
        {MOCK_STORIES.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}