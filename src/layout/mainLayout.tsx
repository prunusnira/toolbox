
import React from 'react';
import SideMenu from '@/feature/menu/component/SideMenu.tsx';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <SideMenu />
      <main className="flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
