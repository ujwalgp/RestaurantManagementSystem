"use client";

import { useState } from 'react';
import type { AppProps } from 'next/app';
import './globals.css';
import Navbar from './components/NavBar';
import Dashboard from './components/Dashboard';
import OrdersPage from './orders/page';
import MenusPage from './menus/page';
import ReviewsPage from './reviews/page';
import RestaurantsPage from './restaurants/page';

function MyApp({ Component, pageProps }: AppProps) {
  const [activeSection, setActiveSection] = useState('dashboard');

  console.log("Current Active Section", activeSection);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <OrdersPage />;
      case 'menus':
        return <MenusPage />;
      case 'restaurants':
        return <RestaurantsPage />;
      case 'settings':
        return <ReviewsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderActiveSection()}
      </main>
    </>
  );
}

export default MyApp;
