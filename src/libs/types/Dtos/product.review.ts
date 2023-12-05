import { ProductStarDto } from "./product.star.dto";

export interface ProductReviewDto {
  productId: number;
  userName: string;
  userImage: string;
  reviewText: string;
  stars: ProductStarDto[];
}
