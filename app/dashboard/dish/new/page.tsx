import { getCategories } from '@/actions/category'
import DishForm from '@/components/DishForm'
import React from 'react'

export default async function page() {
  const categories=await getCategories()

  return (
    <div>
      <DishForm initialData={''} isUpdate="false" categories={categories}/>
    </div>
  )
}
