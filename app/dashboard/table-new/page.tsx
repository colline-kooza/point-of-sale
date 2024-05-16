"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PiSpinner, PiSpinnerGapLight } from "react-icons/pi";
import TextInput from "@/components/dashboard/InputText";
import { saveTable } from "@/actions/table";

export default function Table({ initialData }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: initialData?.name,
    },
  });

  async function onSubmit(data: any) {
    const tableData = {
      ...data,
      tableNumber: parseInt(data.tableNumber),
    };

    if (initialData) {
      try {
        setIsLoading(false);
        toast({
          title: "Successfully Updated Table",
          description: "Request success, the table was updated successfully",
          action: <ToastAction altText="upload images">close</ToastAction>,
        });
        router.push("/dashboard/brands");
      } catch (error) {
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Update Failed",
          description: "Failed to update the table, please try again later",
          action: <ToastAction altText="upload images">close</ToastAction>,
        });
      }
    } else {
      try {
        setIsLoading(true);
        await saveTable(tableData);
        setIsLoading(false);
        router.push("/dashboard/");
        toast({
          title: "Successfully Created Table",
          description: "Request success, the table was created successfully",
          action: <ToastAction altText="upload images">close</ToastAction>,
        });
      } catch (error) {
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Creation Failed",
          description: "Failed to create the table, please try again later",
          action: <ToastAction altText="upload images">close</ToastAction>,
        });
      }
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 ">
      <div className="flex flex-col sm:gap-4 py-8 px-2 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 "
        >
          <div className="mx-auto grid w-full gap-4">
            <div className="flex items-center gap-4 py-2 px-4 ">
              <Link href="/dashboard/">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Table
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                In stock
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button type="button" variant="outline" size="sm">
                  Discard
                </Button>
                {isLoading ? (
                  <Button
                    variant="outline"
                    disabled={isLoading}
                    className="w-full flex gap-2 items-center bg-slate-950 text-white"
                  >
                    <PiSpinnerGapLight className="animate-spin" />
                    {initialData ? "Updating" : "Creating"}
                  </Button>
                ) : (
                  <Button size="sm">
                    {initialData ? "Update Table" : "Create Table"}
                  </Button>
                )}
              </div>
            </div>
            <div className="">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8 lg:w-[80%]">
                <Card>
                  <CardHeader>
                    <CardTitle>Table Detail</CardTitle>
                    <CardDescription>
                      Manage Table availability and visibility in your Products
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 col-span-1 lg:col-span-2">
                      <TextInput
                        label="Table Title"
                        name="title"
                        register={register}
                        errors={errors}
                        type="text"
                      />
                      <TextInput
                        label="Table Number"
                        name="tableNumber"
                        register={register}
                        errors={errors}
                        type="number"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8"></div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              {isLoading ? (
                <Button
                  variant="outline"
                  disabled={isLoading}
                  className="w-full flex gap-2 items-center bg-slate-950 text-white"
                >
                  <PiSpinner className="animate-spin" />
                  {initialData ? "Updating" : "Creating Table"}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  disabled={isLoading}
                  className="w-full flex gap-2 items-center bg-slate-950 text-white"
                >
                  {/* <PiSpinner className="animate-spin" /> */}
                  {initialData ? "Updating" : "Create Table"}
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
