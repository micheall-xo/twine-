import React from 'react';
import { Stories } from './Stories';
import { Post } from './Post';
import type { Post as PostType } from '../../types';

const MOCK_POSTS: PostType[] = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'john_doe',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    },
    content: 'Beautiful sunset today! 🌅',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
    likes: 42,
    comments: 5,
    timestamp: '2 hours ago',
  },
  // Add more mock posts here
];

export function Feed() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <Stories />
      <div className="space-y-4">
        {MOCK_POSTS.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}