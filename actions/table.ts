"use server"
import db from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function saveTable(data: any) {
  try {
    const newTable = await db.table.create({
      data
    });
    console.log(newTable)
    return newTable;
  } catch (error) {
    console.log(error);
  }
}

export async function getTables() {
  try {
    const table = await db.table.findMany();
    return table;
  } catch (error) {
    console.log(error);
  }
}

export async function deletedTable(id: string) {
  try {
    const deletedCategory = await db.table.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
    // console.log(deletedCategory);
    return deletedCategory;
  } catch (error) {
    console.log(error);
  }
}