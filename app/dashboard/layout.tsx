import DashboardHeader from '@/components/dashboard/DashboardHeader';
import SideBar from '@/components/dashboard/SideBar';
import React from 'react';

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full min-h-screen flex'>
      <div className='w-[18%] h-full fixed top-0 left-0'>
        <SideBar />
      </div>

      <div className='w-[80%] ml-[18%]'>
        <div className=''>
          <DashboardHeader />
        </div>
        <div className='px-2 '>
          {children}
        </div>
      </div>
    </div>
  );
}
