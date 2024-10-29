// components/Navbar.tsx
"use client";
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC<{activeSection: string; setActiveSection: (section: string) => void }> = ({ activeSection, setActiveSection }) => {

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Restaurant Management</Link>
        </div>
        <ul className="flex space-x-6">
          <Link href='' onClick={() => setActiveSection('dashboard')} className={activeSection === '/' ? 'text-green-400 font-semibold' : ''}>
            Dashboard
          </Link>
          <Link href='' onClick={() => setActiveSection('orders')} className={activeSection === '/orders' ? 'text-green-400 font-semibold' : ''}>
            Orders
          </Link>
          <Link href='' onClick={() => setActiveSection('menus')} className={activeSection === '/menus' ? 'text-green-400 font-semibold' : ''}>
            Menu
          </Link>
          <Link href='' onClick={() => setActiveSection('restaurants')} className={activeSection === '/restaurants' ? 'text-green-400 font-semibold' : ''}>
            Restaurants
          </Link>
          <Link href='' onClick={() => setActiveSection('settings')} className={activeSection === '/settings' ? 'text-green-400 font-semibold' : ''}>
            Settings
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
