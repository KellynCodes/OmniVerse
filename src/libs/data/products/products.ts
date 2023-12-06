import { ProductDto } from "../../types/Dtos/product.dto";
import { ProductStars } from "./product.start";

export const ProductsData: ProductDto[] = [
  {
    id: 1,
    productImg: "/images/image-7.jpg",
    width: 295,
    height: 298,
    title: "T-shirt with Tap details",
    images: [...ProductStars],
    rating: "4.5/5",
    price: 120,
  },
  {
    id: 2,
    productImg: "/images/image-8.png",
    height: 268,
    width: 298,
    title: "T-shirt with Tap details",
    images: [...ProductStars],
    rating: "4.5/5",
    price: 120,
  },
  {
    id: 1,
    productImg: "/images/image-9.png",
    width: 295,
    height: 298,
    title: "T-shirt with Tap details",
    images: [...ProductStars],
    rating: "4.5/5",
    price: 120,
  },
  {
    id: 1,
    productImg: "/images/image-10.png",
    height: 295,
    width: 298,
    title: "T-shirt with Tap details",
    images: [...ProductStars],
    rating: "4.5/5",
    price: 120,
  },
];
