import React from 'react';
import { ProfileHeader } from '../components/profile/ProfileHeader';

const MOCK_USER = {
  id: '1',
  username: 'john_doe',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
};

const MOCK_STATS = {
  posts: 42,
  followers: 1234,
  following: 567,
};

export function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <ProfileHeader user={MOCK_USER} stats={MOCK_STATS} />
    </div>
  );
}