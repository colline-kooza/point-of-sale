import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function OrderProducts() {
  return (
    <div className="grid grid-cols-4 gap-2 mt-8 ">
    <Card className="w-[100%] border-[1px]  dark:border-gray-700 h-[14.5rem]">
<div className="flex overflow-hidden rounded-lg cursor-pointer p-1">
  <img
    alt="Product"
    className="object-cover  rounded-md"
    src="/chicken-1.avif"
    style={{
      objectFit: "cover",
    }}
  />
</div>
<div className="grid gap-1 p-2 ">
  <p className="text-xs font-medium dark:text-gray-300 text-gray-500">Women's</p>
  <h2 className="text-sm font-bold tracking-tight">Crewneck Sweatshirt</h2>
  <div className="flex flex-row-reverse justify-between items-center gap-2">
    <div className="flex justify-center items-center space-x-2 mt-2">
    <Button variant="link" className="font-bold rounded-full w-8 h-8 dark:bg-gray-900 bg-gray-100">
        -
      </Button>
      <p className='font-medium text-xs'>0</p>
<Button variant="destructive" className="bg-[#159a97] rounded-full w-8 h-8  font-bold">
        +
      </Button>

    </div> 
   <div>
    <h2 className='font-bold dark:text-white text-gray-900 text-sm  dm'>$6.00</h2>
   </div>
  </div>
</div>
    </Card> 
    <Card className="w-[100%] border-[1px]   dark:border-gray-700h-[14.5rem]">
<div className="flex overflow-hidden rounded-lg cursor-pointer p-1">
  <img
    alt="Product"
    className="object-cover rounded-md"
    src="/chicken-1.avif"
    style={{
      objectFit: "cover",
    }}
  />
</div>
<div className="grid gap-1 p-2 ">
  <p className="text-xs font-medium dark:text-gray-300 text-gray-500">Women's</p>
  <h2 className="text-sm font-bold tracking-tight">Crewneck Sweatshirt</h2>
  <div className="flex flex-row-reverse justify-between items-center gap-2">
    <div className="flex justify-center items-center space-x-2 mt-2">
    <Button variant="link" className="font-bold rounded-full w-8 h-8 dark:bg-gray-900 bg-gray-100">
        -
      </Button>
      <p className='font-medium text-xs'>0</p>
<Button variant="destructive" className="bg-[#159a97] rounded-full w-8 h-8  font-bold">
        +
      </Button>

    </div> 
   <div>
    <h2 className='font-bold dark:text-white text-gray-900 text-sm  dm'>$6.00</h2>
   </div>
  </div>
</div>
    </Card> 
    <Card className="w-[100%] border-[1px]   dark:border-gray-700 h-[14.5rem]">
<div className="flex overflow-hidden rounded-lg cursor-pointer p-1">
  <img
    alt="Product"
    className="object-cover rounded-md"
    src="/chicken-1.avif"
    style={{
      objectFit: "cover",
    }}
  />
</div>
<div className="grid gap-1 p-2 ">
  <p className="text-xs font-medium dark:text-gray-300 text-gray-500">Women's</p>
  <h2 className="text-sm font-bold tracking-tight">Crewneck Sweatshirt</h2>
  <div className="flex flex-row-reverse justify-between items-center gap-2">
    <div className="flex justify-center items-center space-x-2 mt-2">
    <Button variant="link" className="font-bold rounded-full w-8 h-8 dark:bg-gray-900 bg-gray-100">
        -
      </Button>
      <p className='font-medium text-xs'>0</p>
<Button variant="destructive" className="bg-[#159a97] rounded-full w-8 h-8  font-bold">
        +
      </Button>

    </div> 
   <div>
    <h2 className='font-bold dark:text-white text-gray-900 text-sm  dm'>$6.00</h2>
   </div>
  </div>
</div>
    </Card> 
    <Card className="w-[100%] border-[2px]  border-[#b3dfe0] h-[14.5rem]">
<div className="flex overflow-hidden rounded-lg cursor-pointer p-1">
  <img
    alt="Product"
    className="object-cover rounded-md"
    src="/chicken-1.avif"
    style={{
      objectFit: "cover",
    }}
  />
</div>
<div className="grid gap-1 p-2 ">
  <p className="text-xs font-medium dark:text-gray-300 text-gray-500">Women's</p>
  <h2 className="text-sm font-bold tracking-tight">Crewneck Sweatshirt</h2>
  <div className="flex flex-row-reverse justify-between items-center gap-2">
    <div className="flex justify-center items-center space-x-2 mt-2">
    <Button variant="link" className="font-bold rounded-full w-8 h-8 dark:bg-gray-900 bg-gray-100">
        -
      </Button>
      <p className='font-medium text-xs'>0</p>
<Button variant="destructive" className="bg-[#159a97] rounded-full w-8 h-8  font-bold">
        +
      </Button>

    </div> 
   <div>
    <h2 className='font-bold dark:text-white text-gray-900 text-sm  dm'>$6.00</h2>
   </div>
  </div>
</div>
    </Card> 

  
   
    
     
    </div>
  )
}
 

