import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave';
}

export function Skeleton({ 
  className = '', 
  variant = 'text',
  animation = 'pulse'
}: SkeletonProps) {
  const baseStyles = 'bg-gray-200 dark:bg-gray-700';
  const animations = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer'
  };
  
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${animations[animation]}
        ${className}
      `}
    />
  );
}