import db from "@/prisma/db";
import { NextResponse } from "next/server";

export async function PATCH(request: any, { params: { id } }: any) {
    console.log(id)
  try {
    const user = await db.user.update({
      where: {
        id,
      },
      data: {
        emailVerified: true,
      },
    });
    console.log(user)
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to update user",
      },
      {
        status: 500,
      }
    );
  }
}
