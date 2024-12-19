import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { SearchResults } from './SearchResults';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { results, search, loading } = useSearch();

  useEffect(() => {
    if (query.trim()) {
      search(query);
    }
  }, [query, search]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search users and posts..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {isOpen && query && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <SearchResults
            results={results}
            loading={loading}
            onClose={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
}