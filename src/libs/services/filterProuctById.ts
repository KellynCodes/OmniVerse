import { ProductsData } from "../data/products/products";
import { ProductDto } from "../types/Dtos/product.dto";

 export const getProduct = (id: string | string[]): ProductDto | null => {
    const productId = Number(id);
    if (isNaN(productId)) {
      console.log("product was not a number", id);
      return null;
    }
    let productData: ProductDto | null = null;
    ProductsData.filter((x) => x.id == productId).map((product) => {
      productData = product;
    });
    return productData;
  }
