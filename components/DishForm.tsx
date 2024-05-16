"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  X,
} from "lucide-react"

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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { getCategories } from "@/actions/category"
import { toast } from "./ui/use-toast"
import { ToastAction } from "./ui/toast"
import { useRouter } from "next/navigation"
import { PiSpinner } from "react-icons/pi"
import TextInputs from "./Input"
import TextAreas from "./TextArea"
import SelectInputs from "./SelectInputs"
import { UploadButton } from "@/lib/uploadthing"
import { saveDish, updateDish } from "@/actions/dish"


export default function DishForm({categories,isUpdate, initialData}:any) {
  // console.log(initialData)
  const [stateLoading , setStateLoading]=useState(false)
//   console.log(stateLoading)
    const [imageUrls , setImageUrl]=useState(initialData?.images || []);
    const handleImageRemove = (index:any) => {
      const updatedImages = imageUrls.filter((_:any, i:any) => i !== index);
      setImageUrl(updatedImages);
    };
    const router = useRouter()
      // console.log(imageUrl)
        const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm({
          defaultValues: initialData,
        })

        async function onSubmit(data: any) {
          
          try {
            setStateLoading(true);
            if (initialData) {
              // Parse amount and stock to integers
              const amount = parseInt(data.amount);
              const qty = parseInt(data.qty);
              const dishData = {
                ...data,
                amount,
                qty,
                images: imageUrls, 
              };
          
              const { title, subtitle,description, images } = dishData;
              const updatedDishData = { title, subtitle, amount, qty, description,   images };
              await updateDish(initialData.id, updatedDishData);

          
              toast({
                title: "Dish Updated Successfully",
                description: "Dish was updated successfully",
                action: <ToastAction altText="Close">Close</ToastAction>,
              });
              reset();
              setStateLoading(false);
              router.push("/dashboard/manage-dishes");
            } else {
              if (imageUrls) {
                // Parse amount and stock to integers
                const amount = parseInt(data.amount);
                const qty = parseInt(data.qty);
                const dishData = {
                  ...data,
                  amount,
                  qty,
                  images: imageUrls,
                };
          
                await saveDish(dishData); 
          
                toast({
                  title: "Dish Created Successfully",
                  description: "Dish was created successfully",
                  action: <ToastAction altText="Close">Close</ToastAction>,
                });
                reset();
                setStateLoading(false);
                router.push("/dashboard/manage-dishes");
              } else {
                toast({
                  variant: "destructive",
                  title: "Upload Dish Images",
                  description: "Dish won't be created without dish images",
                  action: <ToastAction altText="Upload Images">Close</ToastAction>,
                });
                setStateLoading(false);
                reset();
              }
            }
          } catch (error) {
            setStateLoading(false);
            console.log(error);
            toast({
              variant: "destructive",
              title: "Something Went Wrong",
              description: "Request failed, something went wrong",
              action: <ToastAction altText="Close">Close</ToastAction>,
            });
          }
          
          }
          
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 py-8 px-2">
        <form onSubmit={handleSubmit(onSubmit)}  className="grid flex-1 items-start gap-4  sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-full flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Link href="/dashboard/manage-dishes"  className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <div className="sr-only">Back</div>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
               Create Dish
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                In stock
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                {
          stateLoading ? (
        <Button variant='outline' disabled={stateLoading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
           <PiSpinner className="animate-spin"/> {isUpdate ? "Updating Dish":"Creating Dish"}
       </Button>
           )  : (
        <Button type="submit" className="w-full">
      {
        isUpdate ? "Update Dish":" Save Dish"
      }
        </Button>
            )
       }
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Dish  Details</CardTitle>
                    <CardDescription>
                    Manage dish availability and visibility in your Pos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                     <TextInputs label="Dish Title" name="title" IsRequired register={register} errors={errors} type="text" />
                     <TextAreas IsRequired  errors={errors} label="Dish Description" description="description" register={register} required="true" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Stock</CardTitle>
                    <CardDescription>
                     Insert Dish price and  Dish quantity
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Quantity</TableHead>
            <TableHead className="w-[200px]">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
          
            <TableCell>
              <Label htmlFor="qty" className="sr-only">
                Stock
              </Label>
              <Input
                {...register('qty', { required: true })}
                id="qty"
                type="number"
                defaultValue=""
                placeholder="100"

              />
            </TableCell>
           
            <TableCell>
              <Label htmlFor="selling-price-1" className="sr-only px-4">
                Selling Price
              </Label>
              <Input
                {...register('amount', { required: true })}
                id="selling-price-1"
                type="number"
                defaultValue=""
                placeholder="99.99"
              />
              
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Dish Category </CardTitle>
                  </CardHeader>
                  <CardContent>
                  <div className="grid gap-6">
                 <SelectInputs register={register} options={categories} errors={errors} name="categoryId" label="Select Category" warehouse={categories}/>
                </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
               
                <Card>
                  <CardHeader>
                    <CardTitle>Dish  Sub-Title</CardTitle>
                  </CardHeader>
                  <CardContent>
                  <div className="grid gap-6">
                  <TextInputs IsRequired={true} label="Dish  Sub-title" name="subtitle" register={register} errors={errors} type="text"/>
                </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
  <CardHeader>
    <CardTitle>Dish  Images</CardTitle>
    <CardDescription>
      Lipsum dolor sit amet, consectetur adipiscing elit
    </CardDescription>
  </CardHeader>
  <CardContent>
  <div className="grid gap-2">
      {imageUrls && imageUrls.length > 0 ? (
        <>
          <div className="relative">
            <Image
              alt="Dish  image"
              className="aspect-square w-full rounded-md object-cover"
              height="300"
              src={imageUrls[0]}
              width="300"
            />
            <div

              className="absolute top-2 right-2 cursor-point"
              onClick={() => handleImageRemove(0)}
            >
           <X className="text-red-500"/>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {imageUrls.slice(1, 4).map((imgUrl:any, index:any) => (
              <div key={index} className="relative">
                <div
                  className="absolute top-2 right-2 cursor-pointshadow-md"
                  onClick={() => handleImageRemove(index + 1)}
                >
           <X className="text-red-500"/>
                </div>
                <Image
                  alt="Dish  image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="84"
                  src={imgUrl}
                  width="84"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <Image
            alt="Placeholder"
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            src="/placeholder.svg"
            width="300"
          />
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((_, index) => (
              <div key={index}>
                <Image
                  alt="Placeholder"
                  className="aspect-square w-full rounded-md object-cover"
                  height="84"
                  src="/placeholder.svg"
                  width="84"
                />
              </div>
            ))}
          </div>
        </>
      )}
       <div className="mt-4">
          <UploadButton
          endpoint="DishImages"
          onClientUploadComplete={(res) => {
            const newImages = res.map((item) => item.url);
            setImageUrl([...newImages]);
          }}
        />
      
      </div>
  </div>
  </CardContent>
                </Card>

               </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              {/* <Button type="submit" size="sm">Save Dish</Button> */}
          {
          stateLoading ? (
        <Button variant='outline' disabled={stateLoading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
           <PiSpinner className="animate-spin"/> {initialData  ? "Updating":" Creating Dish"}
       </Button>
           )  : (
      <Button type="submit" className="w-full">
       {initialData ? "Update Dish":"Save Dish"}
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