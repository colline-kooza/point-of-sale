"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { UploadButton } from "@/lib/uploadthing"
import { Label } from "./ui/label"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { CalendarIcon, Loader } from "lucide-react"
import { format } from "date-fns"
// import { Calendar } from "./ui/calendar"
import { Textarea } from "./ui/textarea"
// import { updateOrCreateProfile } from "@/actions/profile"
import { useSession } from "next-auth/react"
// import toast from "react-hot-toast"
// import DatePicker from 'react-date-picker';

import { toast } from "./ui/use-toast"
import { updateOrCreateProfile } from "@/actions/profile"
// import DatePickerComponent from "./FormInputs/DatePicker"


// type Value = ValuePiece | [ValuePiece, ValuePiece];


export function ProfileForm({id,singleProfile}:any) {
  const [loading , setLoading]=useState(false)
  const [value, onChange] = useState();
  // console.log(value)
  // console.log(loading)
  // const { data: session } = useSession(); 
  // console.log(session)
  const [imageUrls, setImageUrls] = useState<string[]>(singleProfile?.image ? [singleProfile.image] : []);
  const image = imageUrls[0];


     const form =  useForm({
      defaultValues: singleProfile ? {
        username: singleProfile.username,
        phoneNumber: singleProfile.phoneNumber,
        address: singleProfile.address,
        dateOfBirth: singleProfile.dateOfBirth,
        bio: singleProfile.bio,
      } : {},
    });

  const handleImageUpload = (uploadedImages: { url: string; name: string }[]) => {
    const newImageUrls = [...imageUrls, ...uploadedImages.map((image) => image.url)];
    setImageUrls(newImageUrls);
  };

  async function onSubmit(data:any) {
    setLoading(true)
    data.image = image;
     data.userId=id
    console.log(data)
    try {
      setLoading(true)
      await updateOrCreateProfile(data)
      setLoading(false)
    //   toast.success("Profile Updated Successfully");

    toast({
        title: "Your profile was successfully updated:",
        description: (
         "Profile successfully updated thank you"
        ),
      })
      window.location.reload()
    } catch (error) {
      console.log(error)
      setLoading(false)
    //   toast("Failed to Update");
    toast({
        title: "Failed to updated",
        description: (
         "Profile failed to update 😒"
        ),
      })
    }
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="gap-2 flex flex-col ">
            <Label className="font-semibold" htmlFor="text">Upload Profile Image</Label>
           {
            image? (
           <div className="flex flex-col items-start">
            <img className="inline-flex object-cover border-4 border-black rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-black bg-indigo-50 h-24 w-24 !h-32 mt-3 !w-32 mb-4 md:mb-0 ml-0 md:mr-5"
              src={image} alt=""/>

              <div className="mt-4">
                 <UploadButton
              endpoint="profileImage"
              onClientUploadComplete={handleImageUpload}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
              </div>
             


           </div>
            ) : (
              <div className="flex items-start  flex-col">
              <img className="inline-flex object-cover border-4 border-black rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-black bg-indigo-50 h-24 w-24 !h-32 mt-3 !w-32 mb-4 md:mb-0 ml-0 md:mr-5"
              src="/user.png" alt=""/>
            <div className="mt-3">
           <UploadButton
                endpoint="profileImage"
                onClientUploadComplete={handleImageUpload}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />

            </div>
             
            </div>
            )
           }
          </div>

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>phoneNumber</FormLabel>
              <FormControl>
                <Input placeholder="+256-7007704018" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display Phone Number. It can be your real Number or a pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Eg: Kampala " {...field} />
              </FormControl>
              <FormDescription>
                This is your public display Address. It can be your Address name or a
                pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
    
       <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Talk a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
         
              <FormMessage />
            </FormItem>
          )}
        />
        {
          loading ? (
            <Button variant="outline" type="submit" disabled={loading} className="w-full">
            <Loader className="m-2 h-4 w-4 animate-spin" /> Updating...
          </Button>
          ):(
          <Button type="submit">Update profile</Button>
          )
        }
      </form>
    </Form>
  )
}