import db from "@/prisma/db";
import { NextResponse } from "next/server";

export async function PATCH(request: any, { params: { id } }: any) {
  try {
    const { status } = await request.json();
    const updatedOrder = await db.order.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to update order',
      },
      {
        status: 500,
      }
    );
  }
}
