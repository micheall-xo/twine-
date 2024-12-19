import React from 'react';
import { Bell, Home, MessageCircle, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMessages } from '../../hooks/useMessages';
import { useNotifications } from '../../hooks/useNotifications';

export function Header() {
  const { unreadCount: unreadMessages } = useMessages();
  const { unreadCount: unreadNotifications } = useNotifications();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SocialApp
        </Link>
        
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Link to="/" className="nav-link">
            <Home className="h-6 w-6" />
          </Link>
          <Link to="/messages" className="nav-link relative">
            <MessageCircle className="h-6 w-6" />
            {unreadMessages > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {unreadMessages}
              </span>
            )}
          </Link>
          <Link to="/notifications" className="nav-link relative">
            <Bell className="h-6 w-6" />
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </Link>
          <Link to="/profile" className="nav-link">
            <User className="h-6 w-6" />
          </Link>
        </nav>
      </div>
    </header>
  );
}