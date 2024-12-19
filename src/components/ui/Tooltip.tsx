import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
}

export function Tooltip({ 
  content, 
  children, 
  position = 'top',
  delay = 200 
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number>();

  const positions = {
    top: '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
    right: 'top-1/2 -right-2 translate-x-full -translate-y-1/2',
    bottom: '-bottom-2 left-1/2 -translate-x-1/2 translate-y-full',
    left: 'top-1/2 -left-2 -translate-x-full -translate-y-1/2'
  };

  const handleMouseEnter = () => {
    const id = window.setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsVisible(false);
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          className={`
            absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 
            rounded shadow-lg pointer-events-none
            transition-opacity duration-200
            ${positions[position]}
          `}
          role="tooltip"
        >
          {content}
          <div
            className={`
              absolute w-2 h-2 bg-gray-900 transform rotate-45
              ${position === 'top' ? 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' : ''}
              ${position === 'right' ? 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2' : ''}
              ${position === 'bottom' ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
              ${position === 'left' ? 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2' : ''}
            `}
          />
        </div>
      )}
    </div>
  );
}