import React from 'react';
import { Card, CardTitle } from '../ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

export default function FoodsMenu({ categories, onCategoryClick }: any) {
  const totalDishes = categories.reduce((total: number, category: any) => total + category.dishes.length, 0);
  console.log(totalDishes);
console.log(totalDishes)
  return (
    <div>
      <Card className='border-none p-0 shadow-none flex justify-between'>
        <CardTitle className='text-lg font-medium'>Foodies Menu</CardTitle>               
        <CardTitle className='text-lg font-semibold flex items-center'>
          <button >
            <ChevronLeft className='w-5 h-5' />
          </button>
          <button >
            <ChevronRight className='w-5 h-5' />
          </button>
        </CardTitle>               
      </Card>
      <div>
        <ScrollArea>
          <div className="flex items-center space-x-2 mt-2 mb-4">
          <div className="flex items-center justify-between rounded-lg border dark:border-gray-850 hover:border-[#159a97] px-2 py-3  cursor-pointer" onClick={() => onCategoryClick("")}>
      <div className="flex items-center gap-1 py-1 w-40 h-8">
        <img
          alt="Sneakers"
          className="rounded-lg overflow-hidden"
          height={40}
          src="/all.jpg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <div className="grid gap-1 ml-1">
        <h3 className="font-bold text-xs leading-none">All Menu</h3>
             <small className="text-xs text">{totalDishes} items</small>

        </div>
      </div>
    </div>
            {categories.map((category: any) => (
              <div key={category.id}
              onClick={() => onCategoryClick(category.id)}
               className="flex items-center justify-between rounded-lg border dark:border-gray-850 hover:border-[#159a97] px-2 py-3 cursor-pointer">
                <div className="flex items-center gap-1 py-1 w-40 h-8">
                  <img
                    alt={category.title}
                    className="rounded-lg overflow-hidden"
                    height={40}
                    src={category.image}
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div className="grid gap-1 ml-1">
                    <h3 className="font-bold text-xs leading-none">{category.title}</h3>
                  
                    <small className="text-xs text">{category.dishes.length} items</small>

                  </div>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
