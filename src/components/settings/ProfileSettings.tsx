import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';
import { Camera } from 'lucide-react';
import { validateUsername } from '../../utils/validation';

export function ProfileSettings() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState('');

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle avatar upload logic here
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateUsername(username)) {
      setError('Invalid username format');
      return;
    }
    // Handle profile update logic here
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Avatar
            src={avatar || 'https://via.placeholder.com/150'}
            alt="Profile"
            size="xl"
          />
          <label className="absolute bottom-0 right-0 p-1 bg-blue-500 rounded-full cursor-pointer">
            <Camera className="h-4 w-4 text-white" />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </label>
        </div>
        <div>
          <h3 className="font-medium">Profile Picture</h3>
          <p className="text-sm text-gray-500">
            Upload a new profile picture
          </p>
        </div>
      </div>

      <Input
        label="Display Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your display name"
      />

      <Input
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your username"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit">Save Changes</Button>
    </form>
  );
}