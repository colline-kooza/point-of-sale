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
    import React, { useState } from 'react'
    import CheckOutBar from './CheckOutBar'

    export default function OrderLinePage({categories , dishes, tables}:any) {
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
        <div className='w-[72%] px-4 py-4 ' >
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

        <div className='w-[30%] dark:bg-black bg-[#f7f8fa] px-1 py-4 flex-grow'>
        <CheckOutBar quantities={quantities} dishes={dishes} tables={tables}/>
          </div>
        </div>
      )
    }
