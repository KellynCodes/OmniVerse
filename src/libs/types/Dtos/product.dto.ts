import { ProductStarDto } from "./product.star.dto";

export interface ProductDto {
  id: number;
  productImg: string;
  height: number;
  width: number;
  title: string;
  images: ProductStarDto[];
  rating: string;
  price: number;
}
