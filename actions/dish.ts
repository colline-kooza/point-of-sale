'use server'
import db from "@/prisma/db";
import { revalidatePath } from "next/cache";
// import { DishProps } from "@/types/types";

export async function saveDish(data: any) {
  // console.log(data)
  try {
    const newDish = await db.dish.create({
      data,
    });
    revalidatePath("/dashboard/manage-dishes"); 
    return newDish; 
  } catch (error) {
    console.log(error);
  }
}

export async function getDishes() {
  try {
    const dishes = await db.dish.findMany();
    return dishes;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch dishes");
  }
}

export async function getSingleDish(dishId: string) {
  try {
    const dish = await db.dish.findUnique({
      where: {
        id: dishId,
      },
    });
    return dish;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch dish");
  }
}


export async function deletedDish(id: string) {
  try {
    const deletedDish = await db.dish.delete({
      where: {
        id,
      },
    });
    console.log(deletedDish);
    return deletedDish;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete dish");
  }
}

export async function updateDish(id: string, data: any) {
  console.log(data , id)
  try {
    const updatedDish = await db.dish.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/manage-dishes"); 
    return updatedDish;
  } catch (error) {
    console.log(error);
  }
}