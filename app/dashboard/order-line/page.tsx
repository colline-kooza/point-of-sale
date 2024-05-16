import { getCategories } from '@/actions/category'
import { getDishes } from '@/actions/dish'
import { getTables } from '@/actions/table'
// import { getTable } from '@/actions/table'
import OrderLinePage from '@/components/order/OrderLinePage'
import getData from '@/lib/getData'
import React from 'react'

export default async function page() {
  const categories= await getCategories()
  const dishes= await getDishes()
  const tables= await getTables()
  const orders =await getData("/order")

  // console.log(tables)
  return (
    <div>
      <OrderLinePage categories={categories} dishes={dishes} tables={tables} orders={orders}/>
    </div>
  )
}
