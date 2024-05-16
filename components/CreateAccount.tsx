"use client"
import { useState } from "react";
import { useToast } from "./ui/use-toast";
// import { useRouter } from "next/router";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import { studentFormSchema } from "@/schema/schema";
import { useForm } from "react-hook-form";
import { UserProps } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveData } from "@/actions/register";
import { useRouter } from "next/navigation";


export function CardsCreateAccount() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const image = imageUrls[0];
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (uploadedImages: { url: string; name: string }[]) => {
    const newImageUrls = [...imageUrls, ...uploadedImages.map((image) => image.url)];
    setImageUrls(newImageUrls);
    alert('Upload Completed');
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: zodResolver(studentFormSchema),
  });

  const router = useRouter();

  async function onSubmit(data: any) {
   
    try {
      setIsLoading(true);
      const newUserData = await saveData(data);
    //   console.log( newStudentData )
      setIsLoading(false); 
      toast({
        description: "We have sent A verification Code to your Email",
      });
      router.push(`/verify-account/${newUserData.id}`);
    } catch (error) {
      setIsLoading(false);
      toast({
        description: "Ooops Already Have an Account / something wrong happened.",
      });
      console.log(error);
    }
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
       
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input {...register("name")} id="name" type="text" placeholder="john Doe" />
            {errors.name && (<p className='text-red-600 text-sm'>{errors.name.message}</p>)}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input {...register("email")} id="email" type="email" placeholder="m@example.com" />
            {errors.email && (<p className='text-red-600 text-sm'>{errors.email.message}</p>)}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input {...register("password")} id="password" type="password" />
            {errors.password && (<p className='text-red-600 text-sm'>{errors.password.message}</p>)}
          </div>
        </CardContent>
        <CardFooter>
          {isLoading ? (
            <Button variant="outline" type="submit" disabled={isLoading} className="w-full">
              <Icons.spinner className="m-2 h-4 w-4 animate-spin" /> Create account
            </Button>
          ) : (
            <Button type="submit" className="w-full">Create account</Button>
          )}
        </CardFooter>
      </Card>
    </form>
  );
}
