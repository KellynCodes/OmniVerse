import Products from "@/components/products/Products";
import { ProductsData } from "@/libs/data/products/products";
import React from "react";

const ProductList = () => {
  return (
    <Products
      productsData={ProductsData}
      buttonLabel="Load More"
      buttonLink="/products"
      pageId="new-arrivals"
      pageTitle="New Arrivals"
    />
  );
};

export default ProductList;
