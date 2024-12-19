import React from 'react';
import { Link } from 'react-router-dom';
import { Loader } from 'lucide-react';
import type { SearchResult } from '../../types';

interface SearchResultsProps {
  results: SearchResult[];
  loading: boolean;
  onClose: () => void;
}

export function SearchResults({ results, loading, onClose }: SearchResultsProps) {
  return (
    <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg z-20 max-h-96 overflow-y-auto">
      {loading ? (
        <div className="p-4 text-center">
          <Loader className="h-6 w-6 animate-spin mx-auto text-blue-500" />
        </div>
      ) : results.length > 0 ? (
        <div className="divide-y">
          {results.map((result) => (
            <Link
              key={result.id}
              to={result.type === 'user' ? `/profile/${result.username}` : `/post/${result.id}`}
              onClick={onClose}
              className="flex items-center p-4 hover:bg-gray-50"
            >
              {result.type === 'user' ? (
                <>
                  <img
                    src={result.avatar}
                    alt={result.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{result.name}</p>
                    <p className="text-sm text-gray-500">@{result.username}</p>
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-3">
                  {result.image && (
                    <img
                      src={result.image}
                      alt=""
                      className="w-16 h-16 rounded object-cover"
                    />
                  )}
                  <div>
                    <p className="font-medium">{result.content}</p>
                    <p className="text-sm text-gray-500">
                      Posted by @{result.user.username}
                    </p>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-4 text-center text-gray-500">
          No results found
        </div>
      )}
    </div>
  );
}