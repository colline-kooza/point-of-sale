import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface TrendingCardProps {
  orders: any[];
}

function getTrendingDishes(orders: any[]) {
  const currentMonth = new Date().getMonth();
  const previousMonth = new Date(new Date().setMonth(currentMonth - 1)).getMonth();
  
  const currentMonthCount: Record<string, number> = {};
  const previousMonthCount: Record<string, number> = {};
  
  orders.forEach(order => {
    const orderMonth = new Date(order.createdAt).getMonth();
    order.items.forEach((item: any) => {
      if (orderMonth === currentMonth) {
        currentMonthCount[item.title] = (currentMonthCount[item.title] || 0) + 1;
      } else if (orderMonth === previousMonth) {
        previousMonthCount[item.title] = (previousMonthCount[item.title] || 0) + 1;
      }
    });
  });
  
  const currentMonthTrending = Object.keys(currentMonthCount).reduce((a, b) => currentMonthCount[a] > currentMonthCount[b] ? a : b, "");
  const previousMonthTrending = Object.keys(previousMonthCount).reduce((a, b) => previousMonthCount[a] > previousMonthCount[b] ? a : b, "");
  
  return { currentMonthTrending, previousMonthTrending };
}

export default function TrendingCard({ orders }: TrendingCardProps) {
  const { currentMonthTrending, previousMonthTrending } = getTrendingDishes(orders);
  
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Trending Dish</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">{currentMonthTrending || 'No data'}</div>
          <p className="text-xs text-muted-foreground ">
          {previousMonthTrending || 'No data'} Most trending item last month
          </p>
        </CardContent>
      </Card>
      {/* <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Previous Month's Trending Dish</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{previousMonthTrending || 'No data'}</div>
          <p className="text-xs text-muted-foreground">
            Most trending item last month
          </p>
        </CardContent>
      </Card> */}
    </div>
  );
}
