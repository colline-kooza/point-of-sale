"use server"
import db from "@/prisma/db";
import { CategoryProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function saveCategory(data:CategoryProps){
    console.log(data)
    try {
      const newCategory = await db.category.create({
        data
      }) 
      revalidatePath("/") 
      console.log(newCategory)
    } catch (error) {
       console.log(error) 
    }
}
export async function getCategories() {
  try {
    const categories = await db.category.findMany({
      include: {
        dishes: true,
      },
    });
    return categories;
  } catch (error) {
    console.log(error);
  }
}