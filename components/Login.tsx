"use client"
import { useState } from "react";
import { LoginProps } from "@/types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/schema/schema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Icons } from "./Icons";

export default function Login({ users }: any) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(LoginFormSchema),
  });

  async function onSubmit(data: LoginProps) {
    try {
      setIsLoading(true);
  
      const response = await signIn('credentials', {
        // email: data.email,
        password: data.password,
        redirect: false,
      });
      if (response?.error) {
        throw new Error(response.error);
      }
    if(response?.ok){
        setIsLoading(false);
      toast({
        description: 'Successfully Logged In',
      });
      router.push('/dashboard/order-line');
    }
  
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast({
        description: 'Oops! Check Your Credentials.',
      });
    }
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
              <Icons.spinner className="m-2 h-4 w-4 animate-spin" /> Log In
            </Button>
          ) : (
            <Button type="submit" className="w-full">Log In</Button>
          )}
        </CardFooter>
      </Card>
    </form>
  );
}

