'use server'
import db from "@/prisma/db";
// import { DishProps } from "@/types/types";

export async function saveDish(data: any) {
  // console.log(data)
  try {
    const newDish = await db.dish.create({
      data,
    });
    // console.log(newDish);
    return newDish; 
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to save dish");
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
