import Products from "@/components/products/Products";
import { ProductsData } from "@/libs/data/products/products";
import React from "react";

const TopSellingList = () => {
  return (
    <Products
      productsData={ProductsData}
      pageId="top-selling"
      pageTitle="Top Selling"
      buttonLabel="Load More"
      buttonLink="top-selling"
    />
  );
};

export default TopSellingList;
