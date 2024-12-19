import React from 'react';
import { Heart, MessageCircle, Share } from 'lucide-react';
import type { Post as PostType } from '../../types';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow mb-4">
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{post.user.name}</h3>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        
        <p className="mt-4">{post.content}</p>
        
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="mt-4 rounded-lg w-full"
          />
        )}
        
        <div className="mt-4 flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
            <Heart className="h-5 w-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
            <MessageCircle className="h-5 w-5" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
            <Share className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}