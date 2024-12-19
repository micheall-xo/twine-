import React from 'react';
import { File, X, Download } from 'lucide-react';

interface FilePreviewProps {
  file: File;
  onRemove?: () => void;
  showDownload?: boolean;
}

export function FilePreview({ file, onRemove, showDownload }: FilePreviewProps) {
  const isImage = file.type.startsWith('image/');
  
  return (
    <div className="relative group">
      {isImage ? (
        <img
          src={URL.createObjectURL(file)}
          alt={file.name}
          className="max-w-xs rounded-lg"
        />
      ) : (
        <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
          <File className="h-8 w-8 text-blue-500" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{file.name}</p>
            <p className="text-xs text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        </div>
      )}
      
      <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {showDownload && (
          <button className="p-1 bg-white rounded-full shadow hover:bg-gray-100">
            <Download className="h-4 w-4" />
          </button>
        )}
        {onRemove && (
          <button 
            onClick={onRemove}
            className="p-1 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}