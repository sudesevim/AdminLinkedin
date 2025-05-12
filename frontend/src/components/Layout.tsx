import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="d-flex vh-100">
           <Sidebar />
    <div className="d-flex flex-column flex-grow-1 overflow-hidden">
        <Header />

        <main className="p-4 overflow-auto flex-grow-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
