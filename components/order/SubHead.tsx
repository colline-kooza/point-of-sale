import React from 'react'
import { Card, CardContent } from '../ui/card'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

export default function SubHead() {
  return (
    <ScrollArea  className="flex w-full py-3">
      <div className="flex md:gap-5 gap-2 lg:w-[90%] w-full h-[7vh]">
      <div className='lg:w-[90px] md:w-[130px] w-[120px] cursor-pointer flex justify-center items-center px-2 md:rounded-[2.5rem] rounded-3xl lg:rounded-3xl border-[#58bab9] border-[2px]'>
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
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
