import { getCategories, getCategory } from '@/actions/category'
import { getSingleDish } from '@/actions/dish'
import DishForm from '@/components/DishForm'
import React from 'react'

export default async function page({params:{id}}:any) {
    const categories=await getCategories()
    const singleDish=await getSingleDish(id)
   console.log(singleDish)
  return (
    <DishForm initialData={singleDish} isUpdate="true" categories={categories}/>
)
}
