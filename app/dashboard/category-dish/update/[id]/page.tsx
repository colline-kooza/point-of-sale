import { getCategory } from '@/actions/category';
import React from 'react'
import CategoryForm from '../../new/page';
interface PageProps {
    params: {
      id: string;
    };
  }
export default async function Page({ params: { id } }: PageProps) {
    const singleCat=await getCategory(id)
    return (
    <div>
      <CategoryForm initialData={singleCat}/>
    </div>
  )
}
