import DashboardHeader from '@/components/dashboard/DashboardHeader';
import SideBar from '@/components/dashboard/SideBar';
import { getCurrentUser } from '@/lib/getUser';
import React from 'react';
import LoginPage from '../login/page';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { redirect } from 'next/navigation';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const user = session?.user;
  // const role = user?.role;

  return (
  session?(
    <div className='w-full min-h-screen flex '>
    <div className='lg:w-[18%] h-full fixed top-0 left-0 hidden lg:block'>
      <SideBar />
    </div>

    <div className='lg:w-[80%] w-[100%] lg:ml-[18%]'>
      <div className=''>
        <DashboardHeader user={user}/>
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
