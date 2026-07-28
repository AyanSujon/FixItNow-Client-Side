import Navbar from '@/components/common/Navbar'
import { getMe } from '@/services/getMe';
import React from 'react'
import DashboardSidebar from './_components/DashboardSidebar';


export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getMe();
  console.log(user)


  return (
    <div>
        {/* <Navbar user={user}/> */}
        <DashboardSidebar  user={user}/>
        {children}
    </div>
  )
}
