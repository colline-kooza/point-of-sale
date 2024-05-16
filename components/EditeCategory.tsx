import { Pencil } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function EditCategory({id}:{id:string}) {
  return (
    <div>
   <Link  href={`/dashboard/category-dish/update/${id}`} className="hidden lg:block md:block">
      <Pencil size={18} className="text-xs  text-green-400"/>
     </Link>
    </div>
  )
}
