import React from 'react';
import { Settings, Grid, Bookmark, Heart } from 'lucide-react';
import type { User } from '../../types';

interface ProfileHeaderProps {
  user: User;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
}

export function ProfileHeader({ user, stats }: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start space-x-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-32 h-32 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">{user.username}</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Follow
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex space-x-8 mb-4">
            <div className="text-center">
              <div className="font-semibold">{stats.posts}</div>
              <div className="text-gray-500 text-sm">posts</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{stats.followers}</div>
              <div className="text-gray-500 text-sm">followers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{stats.following}</div>
              <div className="text-gray-500 text-sm">following</div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-gray-600 mt-1">
              Digital creator | Photography enthusiast 📸
              Living life one frame at a time ✨
            </p>
          </div>
        </div>
      </div>

      <div className="flex border-t mt-8 pt-4">
        <button className="flex-1 flex items-center justify-center py-2 text-blue-500 border-b-2 border-blue-500">
          <Grid className="h-5 w-5 mr-1" />
          Posts
        </button>
        <button className="flex-1 flex items-center justify-center py-2 text-gray-500 hover:text-gray-700">
          <Bookmark className="h-5 w-5 mr-1" />
          Saved
        </button>
        <button className="flex-1 flex items-center justify-center py-2 text-gray-500 hover:text-gray-700">
          <Heart className="h-5 w-5 mr-1" />
          Liked
        </button>
      </div>
    </div>
  );
}