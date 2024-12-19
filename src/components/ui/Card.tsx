import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-sm border border-gray-100
        ${hover ? 'transition-transform hover:-translate-y-1 hover:shadow-md' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}