import React from 'react'
import { Card, CardContent } from '../ui/card'

export default function SubHead() {
  return (
    <div className="flex w-full py-3 ">
      <div className="flex gap-2 w-[90%]  h-[7vh]">
      <div className='w-[90px] cursor-pointer flex justify-center items-center px-2 rounded-3xl border-[#58bab9] border-[2px]'>
        <div className='flex items-center gap-1'>
            <h2 className='font-bold text-xs'>All</h2>
            <p className='text-xs text-white bg-[#58bab9] py-1 px-1.5 rounded-full flex items-center justify-center'>28</p>

        </div>
      </div>

      <div className='w-[120px] cursor-pointer flex justify-center items-center py-2 px-5 rounded-3xl border-gray-400 border-[1px]'>
        <div className='flex items-center gap-1'>
            <h2 className='font-bold text-xs whitespace-nowrap text-gray-400'>Dine in</h2>
            <p className='text-xs text-white bg-[#105f5f] py-1 px-1.5 rounded-full flex items-center justify-center'>28</p>

        </div>
      </div>
      <div className='w-[120px] cursor-pointer flex justify-center items-center py-2 px-5 rounded-3xl border-gray-400  border-[1px]'>
        <div className='flex items-center gap-1'>
            <h2 className='font-bold text-xs whitespace-nowrap text-gray-400'>Wait List</h2>
            <p className='text-xs text-white bg-[#d5490d] py-1 px-1.5 rounded-full flex items-center justify-center'>28</p>

        </div>
      </div>
      <div className='w-[120px] cursor-pointer flex justify-center items-center py-2 px-5 rounded-3xl border-gray-400 border-[1px]'>
        <div className='flex items-center gap-1'>
            <h2 className='font-bold text-xs whitespace-nowrap text-gray-400'>Take Away</h2>
            <p className='text-xs text-white bg-[#003700] py-1 px-1.5 rounded-full flex items-center justify-center'>28</p>

        </div>
      </div>
      <div className='w-[120px] cursor-pointer flex justify-center items-center py-2 px-5 rounded-3xl border-gray-400 border-[1px]'>
        <div className='flex items-center gap-1'>
            <h2 className='font-bold text-xs whitespace-nowrap text-gray-400'>Served</h2>
            <p className='text-xs text-white bg-[#58bab9] py-1 px-1.5 rounded-full flex items-center justify-center'>28</p>

        </div>
      </div>
      
     
      </div>
    </div>
  )
}
