import React from 'react';
import { Filter } from '../../../types';

interface FilterPreviewProps {
  filter: Filter;
  selected: boolean;
  onSelect: () => void;
  previewImage: string;
}

export function FilterPreview({ filter, selected, onSelect, previewImage }: FilterPreviewProps) {
  return (
    <button
      onClick={onSelect}
      className={`flex flex-col items-center ${
        selected ? 'text-blue-500' : 'text-gray-500'
      }`}
    >
      <div
        className={`w-16 h-16 rounded-lg overflow-hidden ${
          selected ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        <img
          src={previewImage}
          alt={filter.name}
          className="w-full h-full object-cover"
          style={{ filter: filter.css }}
        />
      </div>
      <span className="mt-1 text-sm">{filter.name}</span>
    </button>
  );
}