import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}