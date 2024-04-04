"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MainNav } from "./MainNav"
import { MobileNav } from "./MobileNav"
import { CommandMenu } from "./CommandMenu"
import { buttonVariants } from "./ui/button"
import { Icons } from "./Icons"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./ModleToggle"

export default function Header() {
  const pathName = usePathname()
  if (pathName == "/dashboard" || pathName=="/dashboard/order-line" || pathName=="/dashboard/manage-dishes" || pathName=="/dashboard/customers" || pathName=="/dashboard/manage-table"){
    return null
  }
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/0 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/10">
      <div className="container flex h-14 max-w-screen-2xl items-center ">
      <div>
      <MainNav />
        <MobileNav />
      </div>
      <div>
        
      </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex items-center">
            <Link
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle/>
          </nav>
        </div>

      </div>
    </header>
  )
}