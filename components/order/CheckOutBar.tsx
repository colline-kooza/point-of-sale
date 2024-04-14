"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { CircleChevronDown, Coins, Copy, CreditCard, MoreVertical, Mouse, Printer, Scan } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from '../ui/use-toast'
import { ToastAction } from '../ui/toast'
import { PiSpinner } from 'react-icons/pi'

interface Dish {
    id: string;
    title: string;
    subtitle: string;
    amount: number;
    qty: number;
    description: string;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
    categoryId: string;
}

export default function CheckOutBar({ quantities, dishes ,tables}: { quantities: Record<string, number>; dishes: Dish[];tables:any }) {
    const [orderID, setOrderID] = useState<string>(''); 
    const [loading, setLoading] = useState(false);
    const [selectedTable, setSelectedTable] = useState<string>(tables.length > 0 ? tables[0].tableNumber : 'Table 001');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('Cash');

    useEffect(() => {
        const generatedOrderID = generateOrderID();
        setOrderID(generatedOrderID);

        return () => {
            setOrderID('');
        };
    }, []);

    const calculateTotal = () => {
        let total = 0;
        Object.keys(quantities).forEach(id => {
            const quantity = quantities[id];
            const dish = dishes.find(d => d.id === id);
            if (dish) {
                total += dish.amount * quantity;
            }
        });
        return total.toFixed(2);
    };

    const generateOrderID = () => {
        return `O${Math.random().toString(36).substr(2, 9)}H`;
    };

    const countOrderItems = () => {
        let itemCount = 0;
        Object.values(quantities).forEach((qty) => {
            itemCount += qty;
        });
        return itemCount;
    };

 
    async function makeOrder() {
        const items = Object.keys(quantities).map(id => {
            const quantity = quantities[id];
            const dish = dishes.find(d => d.id === id);
            if (dish) {
                return {
                    id: dish.id,
                    title: dish.title,
                    quantity: quantity,
                };
            }
            return null;
        }).filter(item => item !== null);
    
        if (items.length === 0) {
            toast({
                variant: "destructive",
                title: "Empty Order",
                description: "Please add items to your order before placing it.",
                action: <ToastAction altText="Close">close</ToastAction>,
            });
            return;
        }
    
        const saleData = {
            totalPrice: calculateTotal(),
            items: items,
            orderId: orderID,
            paymentMethod: selectedPaymentMethod,
            tableNo: selectedTable,
        };
        console.log(saleData)
        try {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
            setLoading(true);
            const response = await fetch(`${baseUrl}/api/order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(saleData),
            });
    
            if (response.ok) {
                toast({
                    title: "Order was successfully Processed.",
                    description: "Order was successfully made.",
                    action: <ToastAction altText="Make Other">close</ToastAction>,
                });
                setLoading(false)
            } else {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Failed to create Order.",
                    description: "There was a problem with your order.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                });
                setLoading(false)
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Failed to create Order.",
                description: "There was a problem with your order.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
            setLoading(false)
        } finally {
            setLoading(false);
        }
    }
    
    
    function handleTableSelect(tableNumber: string) {
        setSelectedTable(tableNumber); 
    }
    function handlePaymentSelect(payment: string) {
        setSelectedPaymentMethod(payment); 
    }
    return (
        <div>
            <Card className="overflow-hidden border-none dark:shadow-2xl shadow-lg h-full">
                <CardHeader className="flex flex-row items-start bg-muted/50 p-4">
                    <div className="grid gap-0.3">
                        <CardTitle className="group flex items-center gap-2 text-sm font-bold whitespace-nowrap">
                     Table# {selectedTable}
                            {/* Table No #04 */}
                            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <CircleChevronDown className="h-3 w-3" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-600 dark:bg-black text-white dark:text-white w-[130px] font-semibold rounded-sm text-sm px-4 py-2 cursor-pointer" align="end">
                    {
                        tables.map((table:any)=>{
                            return(
                                <DropdownMenuItem onClick={() => handleTableSelect(table.tableNumber)}>No: {table.tableNumber}</DropdownMenuItem>
                            )
                        })
                    }
                                </DropdownMenuContent>
              </DropdownMenu>
                        </CardTitle>
                        <CardDescription className="text-xs">Order ID: {orderID}</CardDescription>
                    </div>
                    <div className="ml-auto flex items-center gap-1">

                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="outline" className="h-8 w-8">
                                    <MoreVertical className="h-3.5 w-3.5" />
                                    <span className="sr-only">More</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-slate-600 dark:bg-muted/50 text-white dark:text-white w-[80px] font-semibold rounded-sm text-sm px-4 py-2 cursor-pointer" align="end">
                                <DropdownMenuItem >Edit</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className='text-red-500 mt-1'>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                        <div className='flex items-center justify-between'>
                            <div className="font-semibold">Order Items</div>
                            <div className="font-semibold text-gray-400">{countOrderItems()}</div>
                        </div>
                        <ul className="grid gap-3">
                            {Object.keys(quantities).map(id => {
                                const quantity = quantities[id];
                                const dish = dishes.find(d => d.id === id);
                                return (
                                    dish && (
                                        <li key={id} className="flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                                {dish.title} x <span>{quantity}</span>
                                            </span>
                                            <span>${(dish.amount * quantity).toFixed(2)}</span>
                                        </li>
                                    )
                                );
                            })}
                        </ul>
                        <Separator className="my-2" />
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>${calculateTotal()}</span> 
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Charges</span>
                                <span>$0.00</span> 
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Tax</span>
                                <span>$0.00</span>
                            </li>
                            <li className="flex items-center justify-between font-semibold">
                                <span className="text-muted-foreground">Total</span>
                                <span>${calculateTotal()}</span> 
                            </li>
                        </ul>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                        <div className="font-semibold">Payment Method</div>
                        <dl className="grid gap-3 mt-3">
                            <div className="flex items-center gap-2">
                                <Card className="flex font-semibold text-xs items-center px-5  py-2  gap-1 text-black dark:text-white cursor-pointer border-[#5db8b9]" onClick={() => handlePaymentSelect('Cash')}>
                                    <Coins className="h-4 w-4" />
                                    Cash
                                </Card>
                                <Card className="flex font-semibold text-xs items-center px-5 py-2  gap-1 text-black dark:text-white cursor-pointer hover:border-[#5db8b9]" onClick={() => handlePaymentSelect('Card')}>
                                    <CreditCard className="h-4 w-4 text-[#5db8b9]" />
                                    Card
                                </Card>
                                <Card className="flex font-semibold text-xs items-center px-5  py-2  gap-1 text-black dark:text-white hover:border-[#5db8b9] cursor-pointer" onClick={() => handlePaymentSelect('Scan')}>
                                    <Scan className="h-3 w-3" />
                                    Scan
                                </Card>

                            </div>
                        </dl>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                    <div className="text-xs text-muted-foreground  w-full pt-8 pb-2">
                        <div className="hidden items-center gap-2  md:flex w-full ">
                            <Button className='flex items-center gap-2 text-sm' variant="outline" size="sm">
                                <Printer className="h-4 w-4" /> Print
                            </Button>
                           {
                            loading ? (
                                <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
                                <PiSpinner className="animate-spin"/>   Processing Order
                                 </Button>
                            ): (
                                <Button className='w-full bg-[#1ba09d] dark:bg-white dark:hover:bg-black dark:hover:text-slate-100 flex gap-1 items-center' size="sm" onClick={()=>makeOrder()}>
                                <Mouse className="h-4 w-4" />
                                Place Order
                            </Button>
                            )
                           }
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
