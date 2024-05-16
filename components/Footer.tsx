"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Footer() {
  const pathName = usePathname()
  if (pathName == "/dashboard" || pathName=="/dashboard/order-line" || pathName=="/dashboard/manage-dishes" || pathName=="/dashboard/customers" || pathName=="/dashboard/manage-table" || pathName=="/dashboard/category-dish/new" || pathName=="/dashboard/dish/new" || pathName=="/dashboard/table-new" || pathName=="/verify-account"){
    return null
  }
  if (pathName.startsWith("/dashboard")) {
    return null
  }
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center px-4 md:px-6 border-t bg-1 ">
    <p className="text-xs text_gray_500 dark:text_gray_400">© 2024 Tasty point of sale. All rights reserved.</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <Link className="text-xs hover:underline underline_offset_4" href="#">
        Terms of Service
      </Link>
      <Link className="text-xs hover:underline underline_offset_4" href="#">
        Privacy
      </Link>
    </nav>
  </footer>
  )
}
