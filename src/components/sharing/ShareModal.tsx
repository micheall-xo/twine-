import React, { useState } from 'react';
import { Copy, Link, Twitter, Facebook, WhatsApp } from 'lucide-react';
import { useToast } from '../../hooks/useToast';

interface ShareModalProps {
  postId: string;
  onClose: () => void;
}

export function ShareModal({ postId, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();
  const shareUrl = `https://yourdomain.com/post/${postId}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      showToast('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToast('Failed to copy link', 'error');
    }
  };

  const shareOptions = [
    {
      name: 'Copy Link',
      icon: Copy,
      onClick: copyToClipboard,
      className: 'bg-gray-100 hover:bg-gray-200'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      onClick: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`),
      className: 'bg-blue-400 hover:bg-blue-500 text-white'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`),
      className: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    {
      name: 'WhatsApp',
      icon: WhatsApp,
      onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`),
      className: 'bg-green-500 hover:bg-green-600 text-white'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-semibold mb-4">Share Post</h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={option.onClick}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${option.className}`}
            >
              <option.icon className="h-5 w-5" />
              <span>{option.name}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
          <Link className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <button
            onClick={copyToClipboard}
            className={`text-sm font-medium ${copied ? 'text-green-500' : 'text-blue-500'}`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}