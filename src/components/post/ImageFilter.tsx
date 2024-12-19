import React from 'react';

interface ImageFilterProps {
  name: string;
  css: string;
  selected: boolean;
  onSelect: () => void;
}

export function ImageFilter({ name, css, selected, onSelect }: ImageFilterProps) {
  return (
    <button
      onClick={onSelect}
      className={`flex flex-col items-center ${
        selected ? 'text-blue-500' : 'text-gray-500'
      }`}
    >
      <div
        className={`w-16 h-16 rounded-lg bg-gray-200 ${
          selected ? 'ring-2 ring-blue-500' : ''
        }`}
        style={{ filter: css }}
      />
      <span className="mt-1 text-sm">{name}</span>
    </button>
  );
}