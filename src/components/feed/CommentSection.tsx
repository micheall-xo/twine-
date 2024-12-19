import React, { useState } from 'react';
import type { Comment } from '../../types';

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
  onAddComment: (content: string) => void;
}

export function CommentSection({ comments, onAddComment }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="px-4 pb-4">
      <div className="space-y-3 mb-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-2">
            <img
              src={comment.user.avatar}
              alt={comment.user.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-semibold">{comment.user.username}</span>{' '}
                {comment.content}
              </p>
              <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                <span>{comment.timestamp}</span>
                <button className="hover:text-gray-700">Reply</button>
                <button className="hover:text-gray-700">Like</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={!newComment.trim()}
          className="text-blue-500 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Post
        </button>
      </form>
    </div>
  );
}