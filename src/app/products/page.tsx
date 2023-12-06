import Product from "@/components/products/Product";
import Products from "@/components/products/Products";
import { Button } from "@/components/shared/Button";
import React from "react";

const ProductList = () => {
  return (
    <section
      id="new-arrivals"
      className="h-fit w-full flex flex-wrap items-center justify-center my-16 gap-4"
    >
      <h1 className="uppercase text-[2.5rem] font-bold my-8">NEW ARRIVALS</h1>
      <div className="flex flex-wrap mx-auto items-center justify-evenly my-6 gap-3">
        <Product />
      </div>
      <Button
        customDesign="mt-2 border border-accent bg-accent-white text-accent-light"
        label="Load More"
        link="/products"
      />
    </section>
  );
};

export default ProductList;
