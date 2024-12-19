import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';
import type { Post } from '../../types';

interface PostActionsProps {
  post: Post;
  onLike: () => void;
  onComment: () => void;
}

export function PostActions({ post, onLike, onComment }: PostActionsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike();
  };

  return (
    <div className="flex items-center justify-between pt-4 pb-2">
      <div className="flex items-center space-x-4">
        <button 
          onClick={handleLike}
          className={`flex items-center space-x-1 ${isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
        >
          <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
          <span>{post.likes + (isLiked ? 1 : 0)}</span>
        </button>
        <button 
          onClick={onComment}
          className="flex items-center space-x-1 text-gray-500 hover:text-blue-500"
        >
          <MessageCircle className="h-6 w-6" />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
          <Share className="h-6 w-6" />
        </button>
      </div>
      <button 
        onClick={() => setIsSaved(!isSaved)}
        className={`${isSaved ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'}`}
      >
        <Bookmark className={`h-6 w-6 ${isSaved ? 'fill-current' : ''}`} />
      </button>
    </div>
  );
}