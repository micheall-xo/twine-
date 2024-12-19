import React, { useState } from 'react';
import { Image, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { ImageFilter } from './ImageFilter';
import type { Filter } from '../../types';

export function CreatePost() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation logic here
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />

        {!image && (
          <div
            {...getRootProps()}
            className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500"
          >
            <input {...getInputProps()} />
            <Image className="h-8 w-8 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">
              Drag and drop an image, or click to select
            </p>
          </div>
        )}

        {preview && (
          <div className="mt-4 relative">
            <button
              onClick={() => {
                setImage(null);
                setPreview('');
              }}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={preview}
              alt="Preview"
              className="w-full rounded-lg"
              style={{ filter: selectedFilter?.css }}
            />
            <div className="mt-4 flex overflow-x-auto space-x-4 pb-2">
              <ImageFilter
                name="Original"
                css=""
                onSelect={() => setSelectedFilter(null)}
                selected={!selectedFilter}
              />
              <ImageFilter
                name="Grayscale"
                css="grayscale(100%)"
                onSelect={() => setSelectedFilter({ name: 'Grayscale', css: 'grayscale(100%)' })}
                selected={selectedFilter?.name === 'Grayscale'}
              />
              <ImageFilter
                name="Sepia"
                css="sepia(100%)"
                onSelect={() => setSelectedFilter({ name: 'Sepia', css: 'sepia(100%)' })}
                selected={selectedFilter?.name === 'Sepia'}
              />
              {/* Add more filters */}
            </div>
          </div>
        )}

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            disabled={!content && !image}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}