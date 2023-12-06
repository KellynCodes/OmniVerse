import { ProductStarDto } from "./product.star.dto";

export interface ProductReviewDto {
  id: number;
  userName: string;
  userImage: string;
  reviewText: string;
  stars: ProductStarDto[];
}
