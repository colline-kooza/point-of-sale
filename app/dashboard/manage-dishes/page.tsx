import Image from "next/image"
import Link from "next/link"
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Soup,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { getCategories } from "@/actions/category"
import { getDishes } from "@/actions/dish"

export default async function Page() {
  const categories= await getCategories()
  const dishes= await getDishes()
  // console.log(dishes)
  // console.log(categories)
  return (
    <div className="flex min-h-screen w-full bg-muted/40 gap-2">
      <div className=" lg:w-[30%] min-h-screen relative p-4">
      <div>
      <Card className='border-none p-0 shadow-none'>
          <CardTitle className='text-xl font-semibold tracking-wide mt-4 bg-[#f9fbfd] dark:bg-[#0d1526]'>Dishes Category</CardTitle>               
        </Card>
        <div className="mt-4 flex flex-col gap-3">
       {
        categories?.map((cat)=>{
          return(
            <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer" role="alert">
            <div className="flex px-4 py-2 items-center justify-between">
           <div className="flex gap-1 items-center ">
           <div className="flex-shrink-0">
                <img src={cat.image} alt="Square Image" className="w-8 h-8 object-cover rounded-lg" />
              </div>
              <div className="ms-3">
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {cat.title}
                </p>
              </div>
            </div>
               <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              3
            </Badge>
            </div>
          </div>
          
          )
        })
       }
       
       
     

        </div>
      </div>
        <div className="absolute bottom-0 left-4 w-[90%] mb-5">
        <Link href="/dashboard/category-dish/new">
        <Button size="sm" className="h-10 gap-1 w-full ">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add New Category
                  </span>
                </Button>
        </Link>
        </div>
      </div>
      <div className="flex flex-col w-[70%] mt-5">
      
        <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
               
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Link href="/dashboard/dish/new">
                     <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add New Dish
                  </span>
                </Button>
                </Link>
             
              </div>
            </div>
            <TabsContent value="all">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Dishes</CardTitle>
                  <CardDescription>
                    Manage your dishes and view their sales performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="whitespace-nowrap">Sub-Title</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Price
                        </TableHead>
                      
                   
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
  {dishes?.map((dish) => (
    <TableRow key={dish.id}>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={dish.images[0]}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium whitespace-nowrap">
        {dish.title}
      </TableCell>
      <TableCell className="whitespace-nowrap">{dish.subtitle}</TableCell>
      <TableCell className="hidden md:table-cell">
        ${dish.amount.toFixed(2)} 
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-haspopup="true"
              size="icon"
              variant="ghost"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    dishes
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
