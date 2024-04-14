import { getCategories } from '@/actions/category'
import { getDishes } from '@/actions/dish'
import { getTable } from '@/actions/table'
import OrderLinePage from '@/components/order/OrderLinePage'
import React from 'react'

export default async function page() {
  const categories= await getCategories()
  const dishes= await getDishes()
  const tables= await getTable()
  // console.log(tables)
  return (
    <div>
      <OrderLinePage categories={categories} dishes={dishes} tables={tables}/>
    </div>
  )
}
