"use client"
import getData from '@/lib/getData';
import React, { useEffect, useState } from 'react';

export default function Receipt({ receiptId}: any) {
    const [order, setOrder] = useState<any>(null);
    const [totalAmount, setTotalAmount] = useState<number>(0);
  
    useEffect(() => {
      async function fetchOrders() {
        try {
          const data= await getData("/order");
          const foundOrder = data.find((order: any) => order.orderId === receiptId);
          if (foundOrder) {
            const amount = foundOrder.items.reduce((total: number, item: any) => total + item.amount, 0);
            setOrder(foundOrder);
            setTotalAmount(amount);
          }
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      }
  
      fetchOrders();
    }, [receiptId]);
  
    if (!order) {
      return <div>Loading...</div>;
    }
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
      };
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white border rounded-2xl py-9 shadow-lg px-8 w-[80%]">
        <h1 className="font-bold text-2xl my-4 text-center text-green-600">
          TASTY P.O.S
        </h1>
        <div className="flex justify-between mb-3">
          <h1 className="text-xl font-bold text-black">Receipt</h1>
          <div className="text-gray-700">
          <div>Date: {formatDate(order.createdAt)}</div>
            <div className='text-sm'>Order #: {order.orderId}</div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-sm font-bold mb-1 text-slate-800">Bill From:</h2>
          <div className="text-gray-700 mb-2 text-xs">Tasty Point Of Sale</div>
        </div>
        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="text-left font-bold text-gray-700">Item Name</th>
              <th className="text-right font-bold text-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item: any, index: number) => (
              <tr key={index}>
                <td className="text-left text-gray-700 text-sm">{item.title}</td>
                <td className="text-right text-gray-700">${item.amount}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-left font-bold text-gray-700">Total</td>
              <td className="text-right font-bold text-gray-700">${totalAmount}</td>
            </tr>
          </tfoot>
        </table>
        <div className="text-gray-700 mb-2 text-center text-sm">
          Thank you for your business!
        </div>
      </div>
    </div>
  );
}
