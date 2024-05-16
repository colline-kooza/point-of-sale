"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import { Loader } from "lucide-react";
// import { updateUserById } from "@/actions/users";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "./ui/use-toast";
import SubmitButton from "./SubmitButton";
import { updateUserById } from "@/actions/contact";
// import { updateUserById } from "@/actions/users";
// import SubmitButton from "../FormInputs/SubmitButton";

const FormSchema = z.object({
  token: z.string().min(6, {
    message: "Your Token must be 6 characters.",
  }),
});

export default function VerifyAccount({
  verificationId,
  singleUser
  // id,
}: {
  verificationId: string | undefined;
  singleUser: any;
}) {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const id = verificationId ?? "";
    const userInputToken = parseInt(data.token);
    const token=singleUser?.token
    // console.log(token)
    if (userInputToken == token) {
      setShowNotification(false);
      //Update User
      try {
        await updateUserById(id);
        setLoading(false);
        // reset();
        // toast.success("Account Verified");
        toast({
            
          description: "Account Verified",
        });
        router.push("/login");
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      setShowNotification(true);
      setLoading(false);
    }
    console.log(userInputToken);
  }

  return (
    <div className="w-full h-screen lg:mt-[5rem] mt-[12rem] bg-1">
      <div className="flex flex-col space-y-2 text-center mb-4">
  <h2 className="text-3xl md:text-5xl font-bold">Confirm OTP</h2>
  <p className="text-sm md:text-sm">
    Enter the OTP we just sent you.
  </p>
 </div>
 <div className="w-full flex flex-col items-center justify-center">
  <div className="flex flex-col items-center justify-center w-[400px] ">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {showNotification && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium text-red-500">Wrong Token!</span> Please Check the
            token and Enter again
          </Alert>
        )}
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Enter Token Here</FormLabel> */}
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              {/* <FormDescription>
                Please enter the 6-figure pass code sent to your email.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton
          title="Submit to Verify"
          isLoading={loading}
          loadingTitle="Verifying please wait..."
        />
      </form>
    </Form> 
    </div>
 </div>
  
    </div>
    
  );
}



