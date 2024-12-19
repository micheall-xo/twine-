import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Avatar } from '../ui/Avatar';
import { useSearch } from '../../hooks/useSearch';
import type { User } from '../../types';

interface GroupChatModalProps {
  onClose: () => void;
  onCreateGroup: (users: User[]) => void;
}

export function GroupChatModal({ onClose, onCreateGroup }: GroupChatModalProps) {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { results, search, loading } = useSearch();

  const handleUserSelect = (user: User) => {
    if (!selectedUsers.find(u => u.id === user.id)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleUserRemove = (userId: string) => {
    setSelectedUsers(selectedUsers.filter(u => u.id !== userId));
  };

  return (
    <Modal
      title="Create Group Chat"
      isOpen={true}
      onClose={onClose}
      footer={
        <>
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => onCreateGroup(selectedUsers)}
            disabled={selectedUsers.length < 2}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Create Group
          </button>
        </>
      }
    >
      <div className="space-y-4">
        {selectedUsers.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedUsers.map(user => (
              <div
                key={user.id}
                className="flex items-center bg-gray-100 rounded-full px-3 py-1"
              >
                <span className="text-sm">{user.username}</span>
                <button
                  onClick={() => handleUserRemove(user.id)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="relative">
          <Input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              search(e.target.value);
            }}
            placeholder="Search users..."
            icon={<Search className="h-5 w-5" />}
          />
        </div>

        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <div className="max-h-60 overflow-y-auto">
            {results
              .filter(r => r.type === 'user')
              .map(user => (
                <button
                  key={user.id}
                  onClick={() => handleUserSelect(user as User)}
                  className="flex items-center space-x-3 w-full p-2 hover:bg-gray-50 rounded-lg"
                >
                  <Avatar
                    src={user.avatar!}
                    alt={user.name!}
                    size="sm"
                  />
                  <div className="text-left">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">@{user.username}</p>
                  </div>
                </button>
              ))}
          </div>
        )}
      </div>
    </Modal>
  );
}