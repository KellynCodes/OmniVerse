import { ProductDto } from "../types/Dtos/product.dto";

export const handleQuantityIncreaseORDecrease = (
  action: string,
  product: ProductDto,
  productQuantity: number
): number => {
  let quantity: number = productQuantity;
  if (action === "increment" && product != undefined) {
    if (productQuantity) quantity = productQuantity += 1;
  } else if (action === "decrement" && product != undefined) {
    if (productQuantity > 1) {
      quantity = productQuantity -= 1;
    }
  }
  return quantity;
};
