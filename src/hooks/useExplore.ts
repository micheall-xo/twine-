import { useState, useEffect } from 'react';
import type { Post } from '../types';

export function useExplore() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('foryou');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock posts data
        setPosts([
          {
            id: '1',
            user: {
              id: '1',
              username: 'john_doe',
              name: 'John Doe',
              avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
            },
            content: 'Beautiful sunset today! 🌅',
            image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800',
            likes: 42,
            comments: 5,
            timestamp: new Date().toISOString()
          },
          // Add more mock posts
        ]);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeTab]);

  return { posts, loading, activeTab, setActiveTab };
}