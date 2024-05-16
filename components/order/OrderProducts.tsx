"use client"
import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';
import { ToastAction } from '../ui/toast';

export default function OrderProducts({ dishes, quantities, setQuantities }: any) {
  const increaseQuantity = (id: string) => {
    toast({
      title: "Item added successful",
      description: "Item was successfully added.",
      action: <ToastAction altText="Close">close</ToastAction>,
  });
    setQuantities((prevQuantities: any) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
   
  };

  const decreaseQuantity = (id: string) => {
    if (quantities[id] > 0) {
      setQuantities((prevQuantities: any) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
      toast({
        variant: "destructive",
        title: "Item has been reduced quantity",
        description: "The current item has been reduced.",
        action: <ToastAction altText="Close">close</ToastAction>,
    });
    }

  };

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 mt-8">
      {dishes.map((dish: any) => (
        <Card key={dish.id} className="w-full border-[1px] dark:border-gray-700">
          <div className="flex overflow-hidden rounded-lg cursor-pointer p-1">
            <img alt={dish.title} className="object-cover rounded-md w-full h-28" src={dish.images[0]} />
          </div>
          <div className="grid gap-1 p-2">
            <p className="text-xs font-medium dark:text-gray-300 text-gray-500">{dish.subtitle}</p>
            <h2 className="text-sm font-bold tracking-tight">{dish.title}</h2>
            <div className="flex flex-row-reverse justify-between items-center gap-2 mt-2">
              <div className="flex justify-center items-center space-x-2">
                <Button
                  variant="link"
                  className="font-bold rounded-full w-8 h-8 dark:bg-gray-900 bg-gray-100"
                  onClick={() => decreaseQuantity(dish.id)}
                >
                  -
                </Button>
                <p className="font-medium text-xs">{quantities[dish.id] || 0}</p>
                <Button
                  variant="destructive"
                  className="bg-[#159a97] rounded-full w-8 h-8 font-bold"
                  onClick={() => increaseQuantity(dish.id)}
                >
                  +
                </Button>
              </div>
              <div>
                <h2 className="font-bold dark:text-white text-gray-900 text-sm dm">${dish.amount}</h2>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
