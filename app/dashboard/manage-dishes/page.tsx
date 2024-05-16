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
  Pencil,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Soup,
  Trash2,
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
import DeleteCategory from "@/components/DeleteCategory"
import DeleteDish from "@/components/DeleteDish"
import PageNation from "@/components/PageNation"
import EditCategory from "@/components/EditeCategory"
import UpdateDish from "@/components/UpdateDish"
interface Dish {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  qty: number;
  description: string | null;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
  orderId: string | null;
}

export default async function Page() {
  const categories= await getCategories()
  const dishes= await getDishes()
  // console.log(dishes)
  // console.log(categories)
  const calculateItemsCount = (dishes: Dish[], categoryId: string): number => {
    return dishes.filter((dish) => dish.categoryId === categoryId).length;
  };
  

  return (
    <div className="flex lg:flex-row md:flex-row flex-col min-h-screen w-full gap-2  overflow-hidden">
      <div className="lg:w-[30%] md:w-[35%] w-full md:min-h-screen lg:min-h-screen relative p-4">
      <div>
      <Card className='border-none p-0 shadow-none flex justify-between items-center'>
          <CardTitle className='text-xl font-semibold tracking-wide mt-4'>Dishes Category</CardTitle>    

          <Link className="lg:hidden md:hidden block" href="/dashboard/category-dish/new">
        <Button size="sm" className="h-10 gap-1 w-full ">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:">
                    Add New Category
                  </span>
                </Button>
        </Link>           
        </Card>
        <div className="mt-4 gap-3 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-2">
       {
        categories?.map((cat)=>{
          const itemsCount = calculateItemsCount(dishes, cat.id);
          return(
            <div key={cat.id} className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer" role="alert">
            <div className="flex px-4 py-2 items-center justify-between">
           <div className="flex gap-1 items-center ">
           <div className="flex-shrink-0 ">
                <img src={cat.image} alt="Square Image" className="w-8 h-8 object-cover rounded-lg" />
              </div>
              <div className="ms-3">
                <p className=" text-gray-700 lg:text-sm md:text-sm text-xs dark:text-gray-400 line-clamp-1">
                  {cat.title}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DeleteCategory id={cat.id}/>
                 <Badge className="lg:ml-auto md:ml-auto ml-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                 {itemsCount} 
            </Badge>
           <EditCategory id={cat.id}/>
            </div>
            </div>
          </div>
          )
        })
       }
       
        </div>
      </div>
        <div className="absolute bottom-0 left-4 w-[90%] mb-5 hidden lg:block md:block">
        <Link href="/dashboard/category-dish/new">
        <Button size="sm" className="h-10 gap-1 w-full ">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:">
                    Add New Category
                  </span>
                </Button>
        </Link>
        </div>
      </div>
      <div className="flex flex-col lg:w-[70%] md:w-[65%] w-full mt-5">
      
        <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
               
              </TabsList>
              <div className="lg:mr-0 md:mr-5 mr-12 flex items-center gap-2">
               
                <Link href="/dashboard/dish/new">
                     <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:">
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
                  <div>
                    <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden lg:table-cell  md:hidden ">Sub-Title</TableHead>
                        <TableHead className="md:table-cell">
                          Price
                        </TableHead>
                        <TableHead className="hidden lg:table-cell  md:hidden ">
                          Qty
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
      <TableCell className="hidden  lg:table-cell md:hidden whitespace-nowrap ">{dish.subtitle}</TableCell>
      <TableCell className="md:table-cell">
        ${dish.amount.toFixed(2)} 
      </TableCell>
      <TableCell className="hidden lg:table-cell  md:hidden ">
       {dish.qty}
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
            <DropdownMenuItem>
              <UpdateDish id={dish.id}/>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DeleteDish id={dish.id}/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

                  </Table>
                  </div>
                  
                </CardContent>
                <CardFooter>
                  <PageNation  data={dishes}/>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
