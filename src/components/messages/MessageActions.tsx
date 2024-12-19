import React from 'react';
import { Image, File, Music, Users } from 'lucide-react';

interface MessageActionsProps {
  onClose: () => void;
  onCreateGroup: () => void;
}

export function MessageActions({ onClose, onCreateGroup }: MessageActionsProps) {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle file upload
      console.log('Uploading file:', file);
    }
  };

  return (
    <div className="absolute bottom-20 right-4 bg-white rounded-lg shadow-lg py-2 z-10">
      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
        <label className="flex items-center space-x-3 cursor-pointer">
          <Image className="h-5 w-5 text-blue-500" />
          <span>Share Photo</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>
      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
        <label className="flex items-center space-x-3 cursor-pointer">
          <File className="h-5 w-5 text-green-500" />
          <span>Share File</span>
          <input
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>
      <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
        <label className="flex items-center space-x-3 cursor-pointer">
          <Music className="h-5 w-5 text-purple-500" />
          <span>Share Song</span>
        </label>
      </div>
      <div 
        className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
        onClick={onCreateGroup}
      >
        <div className="flex items-center space-x-3">
          <Users className="h-5 w-5 text-orange-500" />
          <span>Create Group</span>
        </div>
      </div>
    </div>
  );
}