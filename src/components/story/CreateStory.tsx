import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { Button } from '../ui/Button';
import { FilterList } from '../post/filters/FilterList';
import type { Filter } from '../../types';

export function CreateStory() {
  const [media, setMedia] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
      'video/*': ['.mp4', '.mov']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setMedia(file);
      setPreview(URL.createObjectURL(file));
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle story creation logic here
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Create Story</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {!media ? (
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500"
          >
            <input {...getInputProps()} />
            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">
              Drag and drop a photo or video, or click to select
            </p>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={() => {
                setMedia(null);
                setPreview('');
              }}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow"
            >
              <X className="h-4 w-4" />
            </button>
            {media.type.startsWith('image/') ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full rounded-lg"
                style={{ filter: selectedFilter?.css }}
              />
            ) : (
              <video
                src={preview}
                className="w-full rounded-lg"
                controls
                style={{ filter: selectedFilter?.css }}
              />
            )}
          </div>
        )}

        {preview && media?.type.startsWith('image/') && (
          <FilterList
            imageUrl={preview}
            selectedFilter={selectedFilter}
            onFilterSelect={setSelectedFilter}
          />
        )}

        <Button
          type="submit"
          disabled={!media}
          className="w-full"
        >
          Share Story
        </Button>
      </form>
    </div>
  );
}