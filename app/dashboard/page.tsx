import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "@/components/OverView"
import RecentSales from "@/components/RecentSales"
import { getTables } from "@/actions/table"
import DeleteTable from "@/components/DeleteTable"
import getData from "@/lib/getData"
import TrendingCard from "@/components/TrendingCard"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Tasty Point of sale dashboard.",
}
interface Order {
  status: string;
  createdAt: string | Date;
  total: number;
  dishName: string;
}
export default async function DashboardPage() {
  const orders = await getData("/order");
  console.log(orders)
  // console.log(orders);
  const tables = await getTables();
  
  const monthlySales = orders.reduce((acc:any, order:any) => {
    const date = new Date(order.createdAt);
    const month = date.toLocaleString("default", { month: "short" });
    if (order.status === "served") {
      acc[month] = (acc[month] || 0) + order.total;
    }
    return acc;
  }, {});

  const currentMonth = new Date().toLocaleString("default", { month: "short" });
  const totalCurrentMonth = monthlySales[currentMonth] || 0;

  const previousMonth = new Date();
  previousMonth.setMonth(previousMonth.getMonth() - 1);
  const totalPreviousMonth = monthlySales[previousMonth.toLocaleString("default", { month: "short" })] || 0;

  const percentageChange = ((totalCurrentMonth - totalPreviousMonth) / totalPreviousMonth) * 100;

  const trendingDishCurrentMonth = orders.reduce((acc:any, order:any) => {
    if (order.status === "served") {
      acc[order.dishName] = (acc[order.dishName] || 0) + 1; 
    }
    return acc;
  }, {});

  const trendingDishNameCurrentMonth = Object.keys(trendingDishCurrentMonth).reduce((a, b) =>
    trendingDishCurrentMonth[a] > trendingDishCurrentMonth[b] ? a : b
  );

  const totalTrendingDishCurrentMonth = trendingDishCurrentMonth[trendingDishNameCurrentMonth] || 0;

  const previousMonthDate = new Date();
  previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
  const trendingDishPreviousMonth = orders.reduce((acc:any, order:any) => {
    const date = new Date(order.createdAt);
    const month = date.toLocaleString("default", { month: "short" });
    if (month === previousMonthDate.toLocaleString("default", { month: "short" }) && order.status === "served") {
      acc[order.dishName] = (acc[order.dishName] || 0) + 1;
    }
    return acc;
  }, {});

  const trendingDishNamePreviousMonth = Object.keys(trendingDishPreviousMonth).reduce((a, b) =>
    trendingDishPreviousMonth[a] > trendingDishPreviousMonth[b] ? a : b
  );

  const totalTrendingDishPreviousMonth = trendingDishPreviousMonth[trendingDishNamePreviousMonth] || 0;

  const percentageChangeTrendingDish = ((totalTrendingDishCurrentMonth - totalTrendingDishPreviousMonth) / totalTrendingDishPreviousMonth) * 100;

  const totalCurrentMonthSales = orders.reduce((acc:any, order:any) => {
    if (order.status === "served") {
      return acc + 1; 
    }
    return acc;
  }, 0);
  const previousMonthTotalSales = totalCurrentMonthSales * 0.9; 
  const percentageChangeTotalSales = ((totalCurrentMonthSales - previousMonthTotalSales) / previousMonthTotalSales) * 100;


  const totalCurrentMonthOrders=orders.filter((order:any)=>order.status === "served").length;
  const previousMonthTotalOrders = totalCurrentMonthOrders * 0.85; 
  const percentageChangeTotalOrders = ((totalCurrentMonthOrders - previousMonthTotalOrders) / previousMonthTotalOrders) * 100;


  return (
    <>
      <div className=" flex-col md:flex  bg-1">
        <div className="border-b">
         
        </div>
        <div className="flex-1 space-y-4 md:p-6 p-2 lg:p-8 lg:pt-6 md:pt-6 pt-2">
         
          <Tabs defaultValue="overview" className="lg:space-y-4 ">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">
                Tables
              </TabsTrigger>
        
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
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
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{`$${totalCurrentMonth.toFixed(2)}`}</div>
                    <p className="text-xs text-muted-foreground">{`${percentageChange.toFixed(1)}% from last month`}</p>
                  </CardContent>
              </Card>

              <TrendingCard orders={orders}/>

                <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Total Complete Sales</CardTitle>
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <path d="M2 10h20" />
    </svg>
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">{`${totalCurrentMonthOrders}`} sales</div>
    <p className="text-xs text-muted-foreground">{`${percentageChange.toFixed(1)}% from last month`}</p>
  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     Total Sales
                    </CardTitle>
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
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+{orders.length}</div>
                    <p className="text-xs text-muted-foreground">
                      +{orders.length} total sales 
                    </p>
                  </CardContent>
                </Card>


              </div>
              <Card className="col-span-8 !w-full ">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent  className="lg:pl-2 w-full ">
                    <Overview orders={orders}/>
                  </CardContent>
                </Card>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 ">
                
                {/* <Card className="col-span-3">
                    <PeopleSales />
                </Card> */}
                <Card className="col-span-9">
                    <RecentSales />
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
               {
                tables?.map((table)=>{
                  return(
                    <Card key={table.id}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Tasty tables
                      </CardTitle>
                     <DeleteTable id={table.id}/>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Table :{table.tableNumber}</div>
                      <p className="text-xs text-muted-foreground">
                       {table.title}
                      </p>
                    </CardContent>
                  </Card>
                  )
                })
               }
             
              </div>
             
            </TabsContent>
          </Tabs>
        
        </div>
      </div>
    </>
  )
}