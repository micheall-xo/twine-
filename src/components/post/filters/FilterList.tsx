import React from 'react';
import { FilterPreview } from './FilterPreview';
import { useImageFilters } from '../../../hooks/useImageFilters';
import type { Filter } from '../../../types';

interface FilterListProps {
  imageUrl: string;
  selectedFilter: Filter | null;
  onFilterSelect: (filter: Filter | null) => void;
}

export function FilterList({ imageUrl, selectedFilter, onFilterSelect }: FilterListProps) {
  const { filters } = useImageFilters();

  return (
    <div className="mt-4 flex overflow-x-auto space-x-4 pb-2">
      <FilterPreview
        filter={{ name: 'Original', css: '' }}
        selected={!selectedFilter}
        onSelect={() => onFilterSelect(null)}
        previewImage={imageUrl}
      />
      {filters.map((filter) => (
        <FilterPreview
          key={filter.name}
          filter={filter}
          selected={selectedFilter?.name === filter.name}
          onSelect={() => onFilterSelect(filter)}
          previewImage={imageUrl}
        />
      ))}
    </div>
  );
}