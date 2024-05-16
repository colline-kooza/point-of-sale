"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface Order {
  id: string;
  total: number;
  orderId: string;
  status: string;
  paymentMethod: string;
  createdAt: string;
}

export function Overview({ orders }: { orders: Order[] }) {
  const monthlyTotals: { [key: string]: number } = {};

  orders.forEach((order) => {
    const date = new Date(order.createdAt);
    const month = date.toLocaleString('default', { month: 'short' });
    if (!monthlyTotals[month]) {
      monthlyTotals[month] = order.total;
    } else {
      monthlyTotals[month] += order.total;
    }
  });

  const data = Object.keys(monthlyTotals).map((month) => ({
    name: month,
    total: monthlyTotals[month],
  }));

  let containerWidth = "30%";
  if (data.length >= 3) {
    containerWidth = "100%";
  } else if (data.length < 3) {
    containerWidth = "40%";
  }

  return (
    <ResponsiveContainer width={containerWidth} height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={14}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={14}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className=""
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
