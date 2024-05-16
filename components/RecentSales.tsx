import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import getData from "@/lib/getData"
import PageNation from "./PageNation";

export default async function RecentSales() {
  const orders = await getData("/order");
   console.log(orders)
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead className="md:table-cell lg:table-cell hidden">Status</TableHead>
              <TableHead className="md:table-cell lg:table-cell hidden">Date</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              orders?.map((order :any)=>{
                return(
                  <TableRow key={order.id}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell className="md:table-cell lg:table-cell hidden">{order.status}</TableCell>
                  <TableCell className="md:table-cell lg:table-cell hidden">{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>{`$${order.total.toFixed(2)}`}</TableCell>
                </TableRow>
                )
              })
            }
            
          </TableBody>
          <TableFooter className=" w-full ">
            <PageNation data={orders}/>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
