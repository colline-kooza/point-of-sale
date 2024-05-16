import { getUserById } from '@/actions/register'
import VerifyAccount from '@/components/VerifyAccount'
import getData from '@/lib/getData'
import React from 'react'

export default async function page({params:{id}}:any) {
  const singleUser=await getUserById(id)
  // console.log(singleUser)
  return (
    <div className=''>
    
      <VerifyAccount verificationId={id} singleUser={singleUser}/>
    </div>
  )
}
