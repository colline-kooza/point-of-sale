"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import getData from '@/lib/getData'
import { ChevronDownIcon, CircleIcon, File, ListFilter, PlusCircle, PlusIcon, Pencil, StarIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PiSpinner } from 'react-icons/pi'
import { toast } from '../ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'

export default function ManageOrders({orders}:any) {
  console.log(orders)
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderID] = useState<string | undefined>();
  
  const inKitchen=orders?.filter((order:any)=>order.status === "kitchen")
  const served=orders?.filter((order:any)=>order.status === "served")
  const ready=orders?.filter((order:any)=>order.status === "ready")
  const waitList=orders?.filter((order:any)=>order.status === "wait list")
  const justNow=orders?.filter((order:any)=>order.status === "just now")
  // console.log(served)
//   const { register, handleSubmit, reset } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderID] = useState<string | undefined>();
//   const onSubmit = async ({ data}:any) => {

//     console.log(data)
//     setLoading(true);
//     try {
//       const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//       const response = await fetch(`${baseUrl}/order/${orderId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       if (response.ok) {
//         toast({
//             title: "Order Status Updated",
//             description: "Status was Edited.",
//             action: <ToastAction altText="Make Other">close</ToastAction>,
//         });
//         setLoading(false);
//       reset(); 
//     } else {
//         toast({
//             variant: "destructive",
//             title: "Uh oh! Failed to Edit.",
//             description: "There was a problem with your Edit.",
//             action: <ToastAction altText="Try again">Try again</ToastAction>,
//         });
//         setLoading(false)
//     }

    
//     } catch (error) {
//       console.error('Error:', error);
//       setLoading(false);
//     }
//   };
//   function updateOrderId(id:string){
//     setOrderID(id)
//   }

function updateOrderId(id:string){
        setOrderID(id)
     }
  const onSubmit = async (data:any) => {
    // console.log(data)
    setLoading(true);
    try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/order/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
                toast({
                    title: "Order Status Updated",
                    description: "Status was Edited.",
                    action: <ToastAction altText="Make Other">close</ToastAction>,
                });
                setLoading(false);
              reset(); 
              window.location.reload()
            } else {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Failed to Edit.",
                    description: "There was a problem with your Edit.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                });
                setLoading(false)
                window.location.reload()

            }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };
  return (
    <div className="mt-4">
  <Tabs defaultValue="all">
            <div className="flex items-center">
               <TabsList>
                <TabsTrigger value="all">Just Now</TabsTrigger>
                <TabsTrigger value="wait-list">Wait List</TabsTrigger>
                <TabsTrigger value="In kitchen">In kitchen</TabsTrigger>
                <TabsTrigger value="Ready" className="hidden sm:flex">
                 Ready
                </TabsTrigger>
                <TabsTrigger value="served" className="hidden sm:flex">
                  Served
                </TabsTrigger>
               
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
                <Link href="/dashboard/table-new">
                    <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add New Table
                  </span>
                </Button>
                </Link>
             
              </div>
            </div>
            <TabsContent value="all">
            <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>
                    Update order Status Accordingly to the progress
                  </CardDescription>
                </CardHeader>
              <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
             {
              justNow?.map((order:any)=>{
                return(
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     {order.tableNumber}
                    </CardTitle>
                 <AlertDialog>
                   <AlertDialogTrigger asChild>
                  <Button  onClick={() => updateOrderId(order.id)} variant="outline">
               <Pencil className='w-4 h-4'/>
               </Button>
        
       </AlertDialogTrigger>
       <AlertDialogContent>
        <AlertDialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
       <Card>
                  <CardHeader>
                    <CardTitle className='font-bold'>Change Order Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <select id="large" {...register('status')} className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                 <option value="kitchen">In kitchen</option>
                 <option value="wait list">Wait List</option>
                <option value="ready">Ready</option>
               <option value="served">Served</option>
                </select>
                 
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                  {
                        loading ? 
                        (
                            <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
                            <PiSpinner className="animate-spin"/> Updating Order
                             </Button>
                        ):(
                    <Button type="submit" >Update Order Status</Button>
                    )
                    }
                  </CardFooter>
               </Card>

               </form>
       
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${order.total}</div>
                    <div className='flex justify-between'>
                    <p className="text-xs text-muted-foreground">
                      {order.status}
                    </p>
                    <p className="text-sm  font-semibold">
                  Item: {order.items.length} 
                    </p>
                    <p className="text-[10px]  font-semibold ">
                    {new Date(order.createdAt).toLocaleTimeString()}
                    </p>
                    </div>
                  
                  </CardContent>
                </Card>
                )
              })
             }
            
              </div>
     
            </TabsContent>
            <TabsContent value="In kitchen">
            <CardHeader>
                  <CardTitle>Order In Kitchen</CardTitle>
                  <CardDescription>
                    Update order Status Accordingly to the progress
                  </CardDescription>
                </CardHeader>
              <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
             {
              inKitchen?.map((order:any)=>{
                return(
                  <Card className=''>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     {order.tableNumber}
                    </CardTitle>
                 <AlertDialog>
                   <AlertDialogTrigger asChild>
                  <Button  onClick={() => updateOrderId(order.id)} variant="outline">
               <Pencil className='w-4 h-4'/>
               </Button>
        
       </AlertDialogTrigger>
       <AlertDialogContent>
        <AlertDialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
       <Card>
                  <CardHeader>
                    <CardTitle className='font-bold'>Change Order Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <select id="large" {...register('status')} className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                 <option value="kitchen">In kitchen</option>
                 <option value="wait list">Wait List</option>
                <option value="ready">Ready</option>
               <option value="served">Served</option>
                </select>
                 
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                  {
                        loading ? 
                        (
                            <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
                            <PiSpinner className="animate-spin"/> Updating Order
                             </Button>
                        ):(
                    <Button type="submit" >Update Order Status</Button>
                    )
                    }
                  </CardFooter>
               </Card>

               </form>
       
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${order.total}</div>
                    <div className='flex justify-between'>
                    <p className="text-xs text-muted-foreground">
                      {order.status}
                    </p>
                    <p className="text-sm  font-semibold">
                  Item: {order.items.length} 
                    </p>
                    </div>
                  
                  </CardContent>
                </Card>
                )
              })
             }
            
              </div>
     
            </TabsContent>
            <TabsContent value="wait-list">
            <CardHeader>
                  <CardTitle>Wait List</CardTitle>
                  <CardDescription>
                    Update order Status Accordingly to the progress of the order
                  </CardDescription>
                </CardHeader>
              <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
             {
              waitList?.map((order:any)=>{
                return(
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     {order.tableNumber}
                    </CardTitle>
                 <AlertDialog>
                   <AlertDialogTrigger asChild>
                  <Button  onClick={() => updateOrderId(order.id)} variant="outline">
               <Pencil className='w-4 h-4'/>
               </Button>
        
       </AlertDialogTrigger>
       <AlertDialogContent>
        <AlertDialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
       <Card>
                  <CardHeader>
                    <CardTitle className='font-bold'>Change Order Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <select id="large" {...register('status')} className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                 <option value="kitchen">In kitchen</option>
                 <option value="wait list">Wait List</option>
                <option value="ready">Ready</option>
               <option value="served">Served</option>
                </select>
                 
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                  {
                        loading ? 
                        (
                            <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
                            <PiSpinner className="animate-spin"/> Updating Order
                             </Button>
                        ):(
                    <Button type="submit" >Update Order Status</Button>
                    )
                    }
                  </CardFooter>
               </Card>

               </form>
       
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${order.total}</div>
                    <div className='flex justify-between'>
                    <p className="text-xs text-muted-foreground">
                      {order.status}
                    </p>
                    <p className="text-sm  font-semibold">
                  Item: {order.items.length} 
                    </p>
                    </div>
                  
                  </CardContent>
                </Card>
                )
              })
             }
            
              </div>
     
            </TabsContent>
            <TabsContent value="Ready">
            <CardHeader>
                  <CardTitle>Ready Orders</CardTitle>
                  <CardDescription>
                    Update order Status Accordingly to the progress
                  </CardDescription>
                </CardHeader>
              <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
             {
              ready?.map((order:any)=>{
                return(
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     {order.tableNumber}
                    </CardTitle>
                 <AlertDialog>
                   <AlertDialogTrigger asChild>
                  <Button  onClick={() => updateOrderId(order.id)} variant="outline">
               <Pencil className='w-4 h-4'/>
               </Button>
        
       </AlertDialogTrigger>
       <AlertDialogContent>
        <AlertDialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
       <Card>
                  <CardHeader>
                    <CardTitle className='font-bold'>Change Order Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <select id="large" {...register('status')} className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                 <option value="kitchen">In kitchen</option>
                 <option value="wait list">Wait List</option>
                <option value="ready">Ready</option>
               <option value="served">Served</option>
                </select>
                 
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                  {
                        loading ? 
                        (
                            <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
                            <PiSpinner className="animate-spin"/> Updating Order
                             </Button>
                        ):(
                    <Button type="submit" >Update Order Status</Button>
                    )
                    }
                  </CardFooter>
               </Card>

               </form>
       
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${order.total}</div>
                    <div className='flex justify-between'>
                    <p className="text-xs text-muted-foreground">
                      {order.status}
                    </p>
                    <p className="text-sm  font-semibold">
                  Item: {order.items.length} 
                    </p>
                    </div>
                  
                  </CardContent>
                </Card>
                )
              })
             }
            
              </div>
     
            </TabsContent>
            <TabsContent value="served">
            <CardHeader>
                  <CardTitle>Served Orders</CardTitle>
                  <CardDescription>
                    Update order Status Accordingly to the progress
                  </CardDescription>
                </CardHeader>
              <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
             {
             served?.map((order:any)=>{
                return(
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     {order.tableNumber}
                    </CardTitle>
                 <AlertDialog>
                   <AlertDialogTrigger asChild>
                  <Button  onClick={() => updateOrderId(order.id)} variant="outline">
               <Pencil className='w-4 h-4'/>
               </Button>
        
       </AlertDialogTrigger>
       <AlertDialogContent>
        <AlertDialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
       <Card>
                  <CardHeader>
                    <CardTitle className='font-bold'>Change Order Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <select id="large" {...register('status')} className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                 <option value="kitchen">In kitchen</option>
                 <option value="wait list">Wait List</option>
                <option value="ready">Ready</option>
               <option value="served">Served</option>
                </select>
                 
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                  {
                        loading ? 
                        (
                            <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
                            <PiSpinner className="animate-spin"/> Updating Order
                             </Button>
                        ):(
                    <Button type="submit" >Update Order Status</Button>
                    )
                    }
                  </CardFooter>
               </Card>

               </form>
       
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${order.total}</div>
                    <div className='flex justify-between'>
                    <p className="text-xs text-muted-foreground">
                      {order.status}
                    </p>
                    <p className="text-sm  font-semibold">
                  Item: {order.items.length} 
                    </p>
                    </div>
                  
                  </CardContent>
                </Card>
                )
              })
             }
            
              </div>
     
            </TabsContent>
    </Tabs>
       
    </div>
  )
}
