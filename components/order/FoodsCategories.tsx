import React from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

export default function FoodsCategories() {
  return (
    <ScrollArea>
 <div className="flex items-center space-x-2 mt-2 mb-4">
    <div className="flex items-center justify-between rounded-lg border dark:border-gray-850 px-2 py-3  cursor-pointer">
      <div className="flex items-center gap-1 py-1 w-40 h-8">
        <img
          alt="Sneakers"
          className="rounded-lg overflow-hidden"
          height={40}
          src="/chicken-1.avif"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <div className="grid gap-1 ml-1">
        <h3 className="font-bold text-xs leading-none">All Menu</h3>
          <small className="text-xs text">$29.99</small>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between rounded-lg border dark:border-gray-850 px-2 py-3  cursor-pointer  border-[#6fc2c1] ">
      <div className="flex items-center gap-1 py-1 w-40 h-8 ">
        <img
          alt="Sneakers"
          className="rounded-lg overflow-hidden"
          height={40}
          src="/chicken-1.avif"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <div className="grid gap-1 ml-1">
        <h3 className="font-bold text-xs leading-none">Special</h3>
          <small className="text-xs text">$29.99</small>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between rounded-lg border dark:border-gray-850 px-2 py-3  cursor-pointer">
      <div className="flex items-center gap-1 py-1 w-40  h-8">
        <img
          alt="Sneakers"
          className="rounded-lg overflow-hidden"
          height={40}
          src="/chicken-1.avif"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <div className="grid gap-1 ml-1">
        <h3 className="font-bold text-xs leading-none">Soups</h3>
          <small className="text-xs text">$29.99</small>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between rounded-lg border dark:border-gray-850 px-2 py-3  cursor-pointer">
      <div className="flex items-center gap-1 py-1 w-40  h-8">
        <img
          alt="Sneakers"
          className="rounded-lg overflow-hidden"
          height={40}
          src="/chicken-1.avif"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <div className="grid gap-1 ml-1">
        <h3 className="font-bold text-xs leading-none">Deserts</h3>
          <small className="text-xs text">$29.99</small>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between rounded-lg border dark:border-gray-850 px-2 py-3  cursor-pointer">
      <div className="flex items-center gap-1 py-1 w-40  h-8">
        <img
          alt="Sneakers"
          className="rounded-lg overflow-hidden"
          height={40}
          src="/chicken-1.avif"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <div className="grid gap-1 ml-1">
        <h3 className="font-bold text-xs leading-none">Chickens</h3>
          <small className="text-xs text">$29.99</small>
        </div>
      </div>
    </div>
  
  
  
  </div>
   <ScrollBar  orientation="horizontal" />
    </ScrollArea>
   
  )
}
