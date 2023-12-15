export interface CartDto {
  productId: number;
  image: string;
  price: number;
  quantity: number;
  title: string;
  description: string;
}

export interface CartsDto {
  deliveryFee: number;
  discount: number;
  carts: CartDto[];
}
