import DashboardHeader from '@/components/dashboard/DashboardHeader';
import SideBar from '@/components/dashboard/SideBar';
import { getCurrentUser } from '@/lib/getUser';
import React from 'react';
import LoginPage from '../login/page';

export default async function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getCurrentUser()

  return (
  session?(
    <div className='w-full min-h-screen flex'>
    <div className='w-[18%] h-full fixed top-0 left-0'>
      <SideBar />
    </div>

    <div className='w-[80%] ml-[18%]'>
      <div className=''>
        <DashboardHeader/>
      </div>
      <div className='px-2 '>
        {children}
      </div>
    </div>
  </div>
  ):(
<LoginPage/>
  )
   
  );
}
