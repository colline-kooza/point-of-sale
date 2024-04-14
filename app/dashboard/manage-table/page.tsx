import ManageOrders from '@/components/order/ManageOrders'
import getData from '@/lib/getData'
import React from 'react'

export default async function page() {
  const orders =await getData("/order")
  console.log(orders)
  return (
    <div>
    <ManageOrders orders={orders}/>
    </div>
  )
}
