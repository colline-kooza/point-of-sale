"use client"
//   import getData from '@/utils/getData';
  import Link from 'next/link';
  import React, { useState } from 'react';
  import { useForm } from 'react-hook-form';
  import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Icons } from './Icons';
import getData from '@/lib/getData';
import { getUsers } from '@/actions/register';
  
  export default function VerifyAccount({ verificationId }: any) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
  
    const onSubmit = async (data: any) => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

        setLoading(true); 
        const user = await getUsers();
        const verifiedUser=user?.find((user:any)=>user.verifiactionToken == verificationId )
        // console.log(verifiedUser)
        if (verifiedUser) {
          if (verifiedUser.token === data.otp1 + data.otp2 + data.otp3 + data.otp4) {
            const userId=verifiedUser.id
            // console.log(userId)
              setLoading(true);
              const url = `${baseUrl}/api/updateVerified/${userId}` 
              const method = 'PATCH';
              const response = await fetch(url, {
                method: method,
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userId), 
              });
              if(response.ok){
                // console.log(response)
                toast({
                  description: "Email successfully Approved",
                })
                reset()
                window.location.href = '/login';
              }else(
                toast({
                  description: "something wrong happened",
                })
              )
             
          } else {
            reset()
            toast({
              description: "Incorrect token. Please try again.",
            });
          }
        } else {
          toast({
            
            description: "Failed to verify the email",
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); 
      }
    };
  
    return (
      <div className='mt-[6rem] h-screen'>
        <div className="flex flex-col space-y-2 text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
          <p className="text-sm md:text-lg">
            Enter the OTP we just sent you.
          </p>
        </div>
        <div className="max-w-md mx-auto border max-w-sm rounded">
          <form className="shadow-md px-4 py-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center gap-2 mb-6">
              <input
                className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                type="number"
                maxLength={1}
                {...register('otp1', { required: true })}
              />
              <input
                className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                type="number"
                maxLength={1}
                {...register('otp2', { required: true })}
              />
              <input
                className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                type="number"
                maxLength={1}
                {...register('otp3', { required: true })}
              />
              <input
                className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                type="number"
                maxLength={1} 
                {...register('otp4', { required: true })}
              />
            </div>
            <div className="flex items-center justify-center">
              {
                loading ? (
                  <Button variant="outline" type="submit" disabled={loading} className="w-full">
                  <Icons.spinner className="m-2 h-4 w-4 animate-spin" />Verifying
                </Button>
                ):(
                  <button
                  className="bg-blue-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                verify
                </button>
                )
              }
             
            {
              loading ?(
               ""
              ):(
                 <Link
                className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800 ml-4"
                href="#"
              >
                Resend OTP
              </Link>
              )
            }
            </div>
            {errors.otp1 && <p className="text-red-500 text-xs text-center">Please enter all digits of the OTP.</p>}
          </form>
        </div>
      </div>
    );
  }
  