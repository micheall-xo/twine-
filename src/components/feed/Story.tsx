import React from 'react';
import type { Story as StoryType } from '../../types';

interface StoryProps {
  story: StoryType;
}

export function Story({ story }: StoryProps) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="w-16 h-16 rounded-full ring-2 ring-blue-500 p-1">
        <img
          src={story.user.avatar}
          alt={story.user.username}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <span className="text-xs">{story.user.username}</span>
    </div>
  );
}