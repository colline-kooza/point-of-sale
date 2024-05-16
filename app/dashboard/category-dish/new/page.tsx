"use client"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Upload,
} from "lucide-react"
import { PiSpinner } from "react-icons/pi"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"


import { Textarea } from "@/components/ui/textarea"
import { UploadButton } from "@/lib/uploadthing"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { saveCategory, updateCategory } from "@/actions/category"
import { useRouter } from "next/navigation"


type Inputs = {
  title: string
  description: string
}
export default function CategoryForm({initialData}:any) {
  const [image, setImage] = useState(initialData ? initialData.image : "/placeholder.svg");
    // console.log(i)
  const router=useRouter()
  const [loading , setLoading]=useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: initialData, 
  });

 
  async function onSubmit(data:any){
    // if (!data.image || !data.image.startsWith("http")) {
    //   toast({
    //     variant: "destructive",
    //     title: "Invalid Image URL",
    //     description: "Please upload category image",
    //     action: <ToastAction altText="Close">Close</ToastAction>,
    //   });
    //   return;
    // }

    data.image = image;
    
    try {
      setLoading(true);
      if (initialData) {
        // Make update request
        const { image, title, description } = data;
        await updateCategory(initialData.id, { image, title, description });
        
        toast({
          title: "Dish Category successfully Updated",
          description: "Dish category was successfully updated",
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
      } else {
        await saveCategory(data);
        toast({
          title: "Dish Category successfully Created",
          description: "Dish category was successfully created",
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
      }
      router.push("/dashboard/manage-dishes");
      setLoading(false);
      reset();
    } catch (error) {
      console.log(error);
      setLoading(false);
      reset();
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }

  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
  
        <form onSubmit={handleSubmit(onSubmit)} className="grid flex-1 items-start gap-4 p-4 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
             <Link href="/dashboard/manage-dishes">
             <Button type="button" variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
             </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
             Category
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                Category
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button type="button" variant="outline" size="sm">
                  Discard
                </Button>
               {
                loading ? (
                  <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
                  <PiSpinner className="animate-spin"/> {initialData ? "Updating":"Saving category"}
              </Button>
                ):(
                  <Button type="submit" size="sm">
                  {initialData ? "Update category":"Save category"}
  
                  </Button>
                )
               }
                {/* {
          loading ? (
        <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
           <PiSpinner className="animate-spin"/> Saving category
       </Button>
           )  : (
      <Button type="submit" className="w-full">
       Save category
      </Button>
           )
} */}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Category Details</CardTitle>
                    <CardDescription>
                      Insert Category Details which you be used in the due course of the category
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="First Foods"
                          {...register("title", { required: "Title is required" })}
                        />
                        {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          {...register("description", { required: "Description is required" })}
                          id="description"
                          placeholder="these are fast foods"

                          className="min-h-32"
                        />
                        {errors.description && <span className="text-red-500 text-xs">{errors.description.message}</span>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
             
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
               
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Category Images</CardTitle>
                    <CardDescription>
                    Upload category image of 1MB
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <Image
                        alt="Category image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src={image}
                        width="300"
                      />
                   
       <div className="mt-4">
       <UploadButton
                            endpoint="categoryUploader"
                            onClientUploadComplete={(res: any) => {
                              setImage(res[0].url);
                            }}
                            onUploadError={(error: Error) => {
                              alert(`ERROR! ${error.message}`);
                            }}
                          />
      </div>
                    </div>
                  </CardContent>
                </Card>
               
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button type="button" variant="outline" size="sm">
                Discard
              </Button>
              {
          loading ? (
        <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
           <PiSpinner className="animate-spin"/> {initialData ? "Updating":"Saving category"}
       </Button>
           )  : (
      <Button type="submit" className="w-full">
       
       {initialData ? "Update category":"Save category"}
      </Button>
           )
}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
