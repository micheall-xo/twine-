import { useState, useCallback } from 'react';
import type { SearchResult } from '../types';

export function useSearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const search = useCallback(async (query: string) => {
    setLoading(true);
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockResults: SearchResult[] = [
        {
          id: '1',
          type: 'user',
          name: 'John Doe',
          username: 'john_doe',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop'
        },
        {
          id: '2',
          type: 'post',
          content: 'Beautiful sunset today! 🌅',
          image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=500&fit=crop',
          user: {
            id: '1',
            username: 'john_doe',
            name: 'John Doe',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop'
          }
        }
      ].filter(result => 
        result.type === 'user' 
          ? result.name.toLowerCase().includes(query.toLowerCase()) ||
            result.username.toLowerCase().includes(query.toLowerCase())
          : result.content.toLowerCase().includes(query.toLowerCase())
      );

      setResults(mockResults);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, search, loading };
}