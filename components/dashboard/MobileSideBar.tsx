"use client"
import Link from "next/link"
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
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function MobileSideBar() {
  const pathName=usePathname()
  const [active, setActive] = useState(null);
//  console.log(active)
  const handleSetActive = (link:any) => {
    setActive(link);
  };
  return (
    <div className="grid min-h-screen w-full overflow-hidden">
      <div className="border-r bg-black z-20 block lg:hidden min-h-screen">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[73px] lg:px-6">
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
              Manage Table
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
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LifeBuoy className="h-4 w-4"/>
               Help Center
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
  )
}
