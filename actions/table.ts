"use server"
import db from "@/prisma/db";

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

export async function getTable() {
  try {
    const table = await db.table.findMany();
    return table;
  } catch (error) {
    console.log(error);
  }
}
