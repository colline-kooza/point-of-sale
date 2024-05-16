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
      revalidatePath("/dashboard/manage-dishes"); 
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
export async function deletedCategory(id: string) {
  try {
    const deletedCategory = await db.category.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
    console.log(deletedCategory);
    return deletedCategory;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategory(id: string) {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
     
    });
    return category;
  } catch (error) {
    console.log(error);
  }
}


export async function updateCategory(id: string, data: CategoryProps) {
  // console.log(id , data)
  try {
    const updatedCategory = await db.category.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/manage-dishes"); 
    // console.log(updatedCategory);
    return updatedCategory;
  } catch (error) {
    console.log(error);
  }
}