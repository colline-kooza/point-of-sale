export type CategoryProps={
    title:string
    description:string
    image:string
}
export type DishProps = {
    title: string;
    description: string;
    images: string[];
    qty: any;
    subTitle: string;
    categoryId: any;
    amount: number; 
  };
  
  export type UserProps = {
    id: string;
    name: string;
    email: string;
    password: string;
};
// types.ts or a similar file
export interface Order {
  id: string;
  orderId: string;
  status: string;
  createdAt: string | Date;
  total: number;
  dishName: string;
  paymentMethod: string;
}

export type LoginProps={
  email  :    String
  password  :  String 
}
