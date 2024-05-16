"use client"
import { useFieldArray, useForm } from "react-hook-form"
import { useState } from "react"
import { CalendarIcon, Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { toast } from "./ui/use-toast"
import { createContactUs } from "@/actions/contact"
import { ToastAction } from "./ui/toast"
// import { createContactUs } from "@/actions/contact"
// import toast from "react-hot-toast";

export function  ContactForm() {
  const router=useRouter()
  const [loading , setLoading]=useState(false)
  // console.log(loading)
     const form = useForm()
  async function onSubmit(data:any) {
    // console.log(data)
    setLoading(true)
    try {
        const { fullName, email, phone, message } = data;
        await createContactUs(fullName, email, phone, message);
        setLoading(false);
        router.push("/")
        toast({
          title: "Message sent successful ",
          description: "You will receive a response shortly",
          action: (
            <ToastAction altText="">cancel</ToastAction>
          ),
        })

    } catch (error) {
      setLoading(false);
      toast({
        description: 'Failed to send message something went wrong',
      });
     
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
   
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>fullName</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} required/>
              </FormControl>
              <FormDescription>
                Insert your fullName
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="johndoe@gmail.com" {...field} required/>
              </FormControl>
              <FormDescription>
                Insert A valid Email where the response will be sent
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insert Phone Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="+012 (345) 678 99" {...field} required/>
              </FormControl>
              <FormDescription>
                Insert your contact phone number
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter message</FormLabel>
              <FormControl>
              <Textarea placeholder="Type your message here." {...field}/>
              </FormControl>
              <FormDescription>
                Insert your message 
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      
       
        {
          loading ? (
            <Button variant="outline" type="submit" disabled={loading} className="w-full">
            <Loader className="m-2 h-4 w-4 animate-spin" /> Sending...
          </Button>
          ):(
          <Button type="submit">Request site</Button>
          )
        }
      </form>
    </Form>
  )
}