import Link from 'next/link'
import React from 'react'

export default function UpdateDish({id}:{id:string}) {
  return (
    <div>
  <Link href={`/dashboard/dish/update/${id}`}>Edit</Link>
    </div>
  )
}
