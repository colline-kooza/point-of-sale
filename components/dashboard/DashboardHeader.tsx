"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Bell, CircleUser, Search } from 'lucide-react'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ModeToggle } from '../ModleToggle'
import { signOut } from 'next-auth/react'

export default function DashboardHeader() {
  return (
    <div className='w-full flex px-6 py-4 border-b border-border/80 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-[#0d1526]'>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search menu , orders and more..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <div className='flex items-center gap-3'>
          <ModeToggle/>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Avatar className='cursor-pointer'>
           <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
           </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem   onSelect={(event) => {
                event.preventDefault();
                signOut({
                  callbackUrl:"/register",
                });
              }}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> 
          <div className='flex flex-col'>
            <h3 className='font-bold text-xs'>Ibrahim Kadri</h3>
            <p className='text-xs text-gray-500 dark:text-gray-200'>Admin</p>
          </div>
          </div>
        
    </div>
  )
}
