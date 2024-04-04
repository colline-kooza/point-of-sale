import React from 'react'
import { Card, CardTitle } from '../ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import FoodsCategories from './FoodsCategories'

export default function FoodsMenu() {
  return (
    <div>
         <Card className='border-none p-0 shadow-none flex justify-between'>
        <CardTitle className='text-lg font-medium'>Foodies Menu</CardTitle>               
        <CardTitle className='text-lg font-semibold flex items-center'>
       <button >
       <ChevronLeft className='w-5 h-5' />
       </button>
       <button >
       <ChevronRight  className='w-5 h-5' />
       </button>
            </CardTitle>               
        </Card>
        <div>
            <FoodsCategories/>
        </div>
    </div>
  )
}
