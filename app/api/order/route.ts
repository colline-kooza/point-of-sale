import db from "@/prisma/db";
import { NextResponse } from "next/server";

interface Item {
    id: string;
    quantity: number;
}

export async function POST(request: any) {
    try {
        const { totalPrice, items, orderId, paymentMethod, tableNo } = await request.json();
        const tableNumber = String(tableNo);
        const orderItems: Item[] = items.map((item: Item) => ({ id: item.id, quantity: item.quantity }));

        for (const item of orderItems) {
            const existingItem = await db.dish.findUnique({ where: { id: item.id } });
            if (existingItem) {
                await db.dish.update({
                    where: { id: item.id },
                    data: { qty: existingItem.qty - item.quantity },
                });
            }
        }

        const order = await db.order.create({
            data: {
                total: parseFloat(totalPrice), 
                orderId,
                status: "just now",
                paymentMethod,
                tableNumber,
                items: { connect: orderItems.map(item => ({ id: item.id })) },
            },
        });

        // console.log(order);
        return NextResponse.json({ order });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create an order",
            },
            {
                status: 500,
            }
        );
    }
}


export async function GET(request: any) {
    try {
        const orders = await db.order.findMany({
            orderBy: {
                createdAt: "desc"  
            },
            include: {
                items: true 
            }
        });
        return NextResponse.json(orders);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to fetch orders",
            },
            {
                status: 500,
            }
        );
    }
}