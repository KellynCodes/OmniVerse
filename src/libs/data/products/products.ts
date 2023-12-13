import { ProductDto } from "../../types/Dtos/product.dto";
import { ProductStars } from "./product.start";

export const ProductsData: ProductDto[] = [
  {
    id: 1,
    productImg: "/images/products/image-7.jpg",
    width: 295,
    height: 298,
    title: "T-shirt with Tap details",
    images: [...ProductStars],
    rating: "4.5/5",
    price: 120,
  },
  {
    id: 2,
    productImg: "/images/products/image-8.png",
    height: 268,
    width: 298,
    title: "Skinny Fit Jeans",
    images: [...ProductStars],
    rating: "4.5/5",
    price: 240,
  },
  {
    id: 3,
    productImg: "/images/products/image-9.png",
    width: 295,
    height: 298,
    title: "Checkered  Shirt",
    images: [...ProductStars],
    rating: "4.5/5",
    price: 180,
  },
  {
    id: 4,
    productImg: "/images/products/image-10.png",
    height: 295,
    width: 298,
    title: "Sleeve Striped T-Shirt",
    images: [...ProductStars],
    rating: "4.5/5",
    price: 130,
  },
];
