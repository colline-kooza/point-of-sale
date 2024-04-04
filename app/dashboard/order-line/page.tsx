"use client"
import FoodsMenu from '@/components/order/FoodsMenu'
import OrderProducts from '@/components/order/OrderProducts'
import ProcessCards from '@/components/order/ProcessCards'
import SubHead from '@/components/order/SubHead'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Coins, Copy, CreditCard, MoreVertical, Mouse, Printer, Scan, Truck } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='w-full min-h-screen flex'>
    <div className='w-[72%] px-4 py-4 overflow-y-scroll' >
      <div>
        <Card className='border-none p-0 shadow-none'>
          <CardTitle className='text-xl font-bold tracking-wide'>Order Line</CardTitle>               
        </Card>

        <div>
          <SubHead/>
        </div>

        <div>
          <ProcessCards/>
        </div>

        <div className='mt-6'>
          <FoodsMenu/>
        </div>

        <div className='mt-4'>
          <Separator/>
        </div>

        <div>
          <OrderProducts/>
        </div>

        <div className='mt-4'>
          <Separator/>
        </div>
      </div>
    </div>

    <div className='w-[30%] dark:bg-black bg-[#f7f8fa] px-1 py-4 flex-grow'>
      <div>
        <Card className="overflow-hidden border-none dark:shadow-2xl shadow-lg h-full">
            <CardHeader className="flex flex-row items-start bg-muted/50 p-4">
              <div className="grid gap-0.3">
                <CardTitle className="group flex items-center gap-2 text-sm font-bold whitespace-nowrap">
                Table No #04 
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Copy className="h-3 w-3" />
                    <span className="sr-only">Copy Order ID</span>
                  </Button>
                </CardTitle>
                <CardDescription className='text-xs'> Order ID: Oe31b70H</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-1">
                {/* <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Truck className="h-3.5 w-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Track Order
                  </span>
                </Button> */}
                <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <MoreVertical className="h-3.5 w-3.5" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-slate-600 dark:bg-muted/50 text-white dark:text-white w-[80px] font-semibold rounded-sm text-sm px-4 py-2 cursor-pointer" align="end">
                    <DropdownMenuItem >Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='text-red-500 mt-1'>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
              <div className="grid gap-3">
               <div className='flex items-center justify-between'>
               <div className="font-semibold">Order Items</div>
               <div className="font-semibold text-gray-400">05</div>
               </div>
                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Glimmer Lamps x <span>2</span>
                    </span>
                    <span>$250.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Aqua Filters x <span>1</span>
                    </span>
                    <span>$49.00</span>
                  </li>
                </ul>
                <Separator className="my-2" />
                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$299.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>$5.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>$25.00</span>
                  </li>
                  <li className="flex items-center justify-between font-semibold">
                    <span className="text-muted-foreground">Total</span>
                    <span>$329.00</span>
                  </li>
                </ul>
              </div>            
              <Separator className="my-4" />
              <div className="grid gap-3">
                <div className="font-semibold">Payment Method</div>
                <dl className="grid gap-3 mt-3">
                  <div className="flex items-center gap-2">
                    <Card className="flex font-semibold text-xs items-center px-5  py-2  gap-1 text-black dark:text-white cursor-pointer">
                    <Coins className="h-4 w-4"/>
                      Cash
                    </Card>
                    <Card className="flex font-semibold text-xs items-center px-5 py-2  gap-1 text-black dark:text-white cursor-pointer border-[#5db8b9]">
                      <CreditCard className="h-4 w-4 text-[#5db8b9]" />
                      Card
                    </Card>
                    <Card className="flex font-semibold text-xs items-center px-5  py-2  gap-1 text-black dark:text-white cursor-pointer">
                    <Scan className="h-3 w-3" />
                     Scan
                    </Card>
                 
                  </div>
                </dl>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">


              <div className="text-xs text-muted-foreground  w-full pt-8 pb-2">
                {/* Updated <time dateTime="2023-11-23">November 23, 2023</time> */}
                <div className="hidden items-center gap-2  md:flex w-full ">
                <Button className='flex items-center gap-2 text-sm' variant="outline" size="sm">
                <Printer className="h-4 w-4"/>   Print
                </Button>
                <Button className='w-full bg-[#1ba09d] dark:bg-white dark:hover:bg-black dark:hover:text-slate-100 flex gap-1 items-center' size="sm">
                <Mouse className="h-4 w-4"/>
                  Place Order</Button>
              </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
