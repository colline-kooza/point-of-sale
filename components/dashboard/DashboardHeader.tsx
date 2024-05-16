"use client"
import React, { useState, useRef, useEffect } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../ModleToggle';
import { signOut } from 'next-auth/react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useRouter } from 'next/navigation';
import { ScrollArea } from '../ui/scroll-area';
import Link, { LinkProps } from "next/link"
import { cn } from '@/lib/utils';
import {
  Bell,
  BetweenVerticalEnd,
  BringToFront,
  Home,
  LifeBuoy,
  LineChart,
  LogOut,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react"
import { CgMenuGridR } from "react-icons/cg";

import { Badge } from "@/components/ui/badge"
import { usePathname } from "next/navigation";
import { getProfileByUserId } from '@/actions/profile';



export default function DashboardHeader({user}:any) {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [open, setOpen] = React.useState(false)
  const mobileSidebarRef = useRef<HTMLDivElement | null>(null);
  const pathName=usePathname()
  const [active, setActive] = useState(null);
//  console.log(active)
  const handleSetActive = (link:any) => {
    setActive(link);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileSidebarRef.current && !mobileSidebarRef.current.contains(event.target as Node)) {
        setShowMobileSidebar(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileSidebarRef]);

  const [profile, setProfile] = useState<any>(null); 
  //  console.log(profile)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const fetchedProfile = await getProfileByUserId(user.id);
        setProfile(fetchedProfile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [user.id]);
  return (
    <div className='w-full flex px-6 py-4 border-b border-border/80 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-[#0d1526]'>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              disabled
              placeholder="Search menu, orders and more..."
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
            <AvatarImage className="object-cover" src={
          profile?.image ??
           "https://utfs.io/f/8b034fb4-1f45-425a-8c57-a7a68835311f-2558r.png"
          } />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
            {profile ? profile.username : user?.name}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/dashboard/settings">Settings</Link>
              </DropdownMenuItem>

            {/* <DropdownMenuItem>Support</DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={(event) => {
              event.preventDefault();
              signOut({
                callbackUrl: "/register",
              });
            }}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className='flex flex-col relative'>
        <>
          <h3 className='font-bold text-xs lg:block hidden'>
          {profile ? profile.username : user?.name}
            </h3>
          <p className='text-xs text-gray-500 dark:text-gray-200 lg:block hidden'>   
          {profile ? profile.phoneNumber : user?.email}
         </p>
        </>
       {/* {
        showMobileSidebar ? (
        <>
          <h3 className='font-bold text-xs lg:block hidden'>Ibrahim Kadri</h3>
          <p className='text-xs text-gray-500 dark:text-gray-200 lg:block hidden'>Admin</p>
        </>
        ):(
          <Button className='block lg:hidden' variant='link' onClick={() => setShowMobileSidebar(true)}>
          <AlignRight />
        </Button>
        )
       } */}
<Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        className=" px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0  lg:hidden"
      >
        <svg
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M3 5H11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 12H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 19H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent  side="left" className=" !p-0">
     
      {/* <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-1"> */}
      <div className="grid min-h-screen overflow-hidden ">
         <div className=" z-20 block lg:hidden min-h-screen p-2">
  <div className="flex h-full max-h-screen flex-col gap-2">
    <div className="flex h-14 items-center border-b lg:h-[73px] lg:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="h-6 w-6" />
        <span className="">Tasty POS</span>
      </Link>
      <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
        <Bell className="h-4 w-4" />
        <span className="sr-only">Toggle notifications</span>
      </Button>
    </div>
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
onClick={() => handleSetActive("/dashboard")}
href="/dashboard"
className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
pathName === "/dashboard" ? "text-primary bg-muted" : ""
}`}
>
<CgMenuGridR className="h-5 w-5" />
Dashboard
</Link>


        <Link
   onClick={() => handleSetActive("/dashboard/manage-table")}
      href="/dashboard/manage-table"
     className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
       pathName === "/dashboard/manage-table" ? "text-primary bg-muted " : ""
     }`}
       >
       <BetweenVerticalEnd className="h-4 w-4" />
        Manage Order
       </Link>


       <Link
onClick={() => handleSetActive("/dashboard/order-line")}
href="/dashboard/order-line"
className={`flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary ${
pathName === "/dashboard/order-line" ? "text-primary bg-muted" : ""
}`}
>
<BringToFront className="h-4 w-4" />
Order Line
<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
6
</Badge>
</Link>



<Link
onClick={() => handleSetActive("/dashboard/manage-dishes")}
href="/dashboard/manage-dishes"
className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
pathName === "/dashboard/manage-dishes" ? "text-primary bg-muted" : ""
}`}
>
<UtensilsCrossed className="h-4 w-4" />
Manage Dishes
</Link>


<Link
onClick={() => handleSetActive("/dashboard/customers")}
href="customers"
className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
pathName === "/dashboard/customers" ? "text-primary bg-muted" : ""
}`}
>
<UsersRound className="h-4 w-4" />
Customers
</Link>

      </nav>
    </div>
    <div className=" ">
    <nav className="grid items-start px-2 text-sm font-medium ">
        <Link
  onClick={() => handleSetActive("/dashboard/settings")}
  href="/dashboard/settings"
  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
    pathName === "/dashboard/settings" ? "text-primary bg-muted" : ""
  }`}
>
         <Settings className="h-4 w-4" /> 
         Settings
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
        <LogOut className="h-4 w-4" />
        Logout
        </Link>
      </nav>
    </div>
  </div>
         </div>

        </div> 
      {/* </ScrollArea> */}
    </SheetContent>
  </Sheet>
        </div>
      </div>
    </div>
  
)}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
