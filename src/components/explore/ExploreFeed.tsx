import React from 'react';
import { SearchBar } from '../search/SearchBar';
import { Post } from '../feed/Post';
import { Card } from '../ui/Card';
import { Tabs } from '../ui/Tabs';
import { useExplore } from '../../hooks/useExplore';

export function ExploreFeed() {
  const { posts, loading, activeTab, setActiveTab } = useExplore();

  const tabs = [
    { id: 'foryou', label: 'For You' },
    { id: 'trending', label: 'Trending' },
    { id: 'latest', label: 'Latest' }
  ];

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      <SearchBar />
      
      <Card>
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </Card>

      <div className="grid gap-6">
        {loading ? (
          <div>Loading...</div>
        ) : (
          posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}