import { CartDto } from "../types/Dtos/cart.dto";

export const calculateDiscountedPrice = (
  totalPrice: number,
  discountPercentage: number
) => {
  const discountAmount = (discountPercentage / 100) * totalPrice;
  return totalPrice - discountAmount;
};

export const calculateTotalPrice = (cartItems: CartDto[]) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return totalPrice;
};
