import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { ChevronDownIcon, CircleIcon, PlusIcon, StarIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import Link from 'next/link'

export default function ProcessCards({orders}:any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 dm">
    <Link href="/dashboard/manage-table"  className="flex items-center justify-between bg-[#c1eae4] rounded-md shadow-sm p-4 dark:text-black">
      <div className="flex items-center space-x-4">
        <div className="space-y-1">
          <p className="text-sm font-medium">Order #F0027</p>
          <h3 className="font-bold text-sm">Item: 8x</h3>
          <p className="text-sm text-gray-500">1 mins ago</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-sm font-semibold">Table 03</p>
        <Link href="#" className="bg-[#116361] text-white rounded px-2 py-1 text-xs">
         In kitchen
        </Link>
      </div>
    </Link>
    <Link href="/dashboard/manage-table"  className="flex items-center justify-between bg-[#ffe2de] rounded-md shadow-sm p-4 dark:text-black">
      <div className="flex items-center space-x-4">
        <div className="space-y-1">
          <p className="text-sm font-medium">Order #F0027</p>
          <h3 className="font-bold text-sm">Item: 8x</h3>
          <p className="text-sm text-gray-500">1 mins ago</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-sm font-semibold">Table 03</p>
        <Link href="#" className="bg-[#cf4d13] text-white rounded px-2 py-1 text-xs">
        Just now
        </Link>
      </div>
    </Link> 
    <Link href="/dashboard/manage-table" className="flex items-center justify-between bg-[#e8d4ed] rounded-md shadow-sm p-4 dark:text-black">
      <div className="flex items-center space-x-4 ">
        <div className="space-y-1">
          <p className="text-sm font-medium ">Order #F0027</p>
          <h3 className="font-bold text-sm">Item: 8x</h3>
          <p className="text-sm text-gray-500">1 mins ago</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-sm font-semibold">Table 03</p>
        <Link href="#" className="bg-[#6a328d] text-white rounded px-2 py-1 text-xs">
         Ready
        </Link>
      </div>
    </Link>
 
  </div>
  )
}
