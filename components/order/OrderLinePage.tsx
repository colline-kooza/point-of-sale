    "use client"
    import FoodsMenu from '@/components/order/FoodsMenu'
    import OrderProducts from '@/components/order/OrderProducts'
    import ProcessCards from '@/components/order/ProcessCards'
    import SubHead from '@/components/order/SubHead'
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
    import { Separator } from '@/components/ui/separator'
    import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
    import { AlignJustify, Coins, Copy, CreditCard, ListOrdered, MoreVertical, Mouse, Printer, Scan, Truck } from 'lucide-react'
    import React, { useState } from 'react'
    import CheckOutBar from './CheckOutBar'
    import Receipt from '../Receipt'
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import {
      Sheet,
      SheetClose,
      SheetContent,
      SheetDescription,
      SheetFooter,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
    } from "@/components/ui/sheet"
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
    export default function OrderLinePage({categories , dishes, tables ,orders}:any) {
      const [selectedCategory, setSelectedCategory] = useState('');
      const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

      const handleCategoryClick = (categoryId: string) => {
        setSelectedCategory(categoryId);
      };

      const filteredDishes = selectedCategory
        ? dishes.filter((dish: any) => dish.categoryId === selectedCategory)
        : dishes;
      return (
        <div className='w-full min-h-screen flex'>
          {/* <Receipt/> */}
        <div className='lg:w-[72%] w-full lg:px-4 md:px-3 px-2 lg:py-4 md:py-3 py-2' >
          <div>
            <Card className='border-none p-0 shadow-none flex justify-between items-center'>
              <CardTitle className='text-xl font-bold tracking-wide'>Order Line</CardTitle>               
        <CardTitle className='text-xl font-bold tracking-wide lg:hidden block'>
      <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
        {/* <button> */}
          <ListOrdered />
        {/* <button/> */}
        </Button>
      </SheetTrigger>
      <SheetContent className='!p-1'>
      <div className='w-[100%] block px-1 py-2'>
        <CheckOutBar orders={orders} quantities={quantities} dishes={dishes} tables={tables}/>
          </div>
      </SheetContent>
             </Sheet>
              </CardTitle>               
            </Card>

            <div>
              <SubHead/>
            </div>

            <div>
              <ProcessCards orders={orders}/>
            </div>

            <div className='mt-6'>
            <FoodsMenu categories={categories} onCategoryClick={handleCategoryClick} />
            </div>

            <div className='mt-4'>
              <Separator/>
            </div>

            <div>
            <OrderProducts dishes={filteredDishes} quantities={quantities} setQuantities={setQuantities} />
            </div>

            <div className='mt-4'>
              <Separator/>
            </div>
          </div>
        </div>

        <div className='lg:w-[30%] md:hidden hidden lg:block dark:bg-black bg-[#f7f8fa] px-1 py-4 flex-grow'>
        <CheckOutBar orders={orders} quantities={quantities} dishes={dishes} tables={tables}/>
          </div>
        </div>
      )
    }
