import { CartDto, CartsDto } from "@/libs/types/Dtos/cart.dto";

export const CartData: CartsDto = {
  deliveryFee: 15,
  discount: 20,
  carts: [
    {
      productId: 1,
      image: "/images/cart1.png",
      title: "Gradient Graphic T-shirt",
      price: 145,
      quantity: 1,
      description: "",
    },
    {
      productId: 2,
      image: "/images/cart2.png",
      title: "Skinny Fit Jeans.",
      price: 180,
      quantity: 1,
      description: "",
    },
    {
      productId: 3,
      image: "/images/cart3.png",
      title: "Checkered shirt.",
      price: 240,
      quantity: 1,
      description: "",
    },
  ],
};
