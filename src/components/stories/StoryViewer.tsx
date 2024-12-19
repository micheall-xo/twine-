import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Story } from '../../types';

interface StoryViewerProps {
  stories: Story[];
  initialIndex: number;
  onClose: () => void;
}

export function StoryViewer({ stories, initialIndex, onClose }: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentIndex < stories.length - 1) {
            setCurrentIndex(currentIndex + 1);
            return 0;
          } else {
            onClose();
            return prev;
          }
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [currentIndex, stories.length, onClose]);

  const currentStory = stories[currentIndex];

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="relative w-full max-w-lg aspect-[9/16] bg-gray-900">
        <img
          src={currentStory.image}
          alt=""
          className="w-full h-full object-cover"
        />
        
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <img
            src={currentStory.user.avatar}
            alt={currentStory.user.name}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <span className="text-white font-semibold">
            {currentStory.user.username}
          </span>
        </div>

        {currentIndex > 0 && (
          <button
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
        )}

        {currentIndex < stories.length - 1 && (
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        )}
      </div>
    </div>
  );
}