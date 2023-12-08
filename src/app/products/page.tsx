import Product from "@/components/products/Product";
import { Button } from "@/components/shared/Button";
import { ProductsData } from "@/libs/data/products/products";
import React from "react";

const ProductList = () => {
  return (
    <section
      id="new-arrivals"
      className="h-fit w-full flex flex-wrap items-center justify-center my-5 gap-4"
    >
      <h1 className="uppercase text-xl md:text-[2.5rem] font-bold my-4 md:my-8">
        NEW ARRIVALS
      </h1>
      <div className="flex flex-wrap mx-auto items-center justify-evenly my-6 gap-3">
        <Product productData={ProductsData} />
      </div>
      <Button
        className="mt-2  px-7 py-3 border border-accent bg-accent-white text-accent-light"
        label="Load More"
        link="/products"
      />
    </section>
  );
};

export default ProductList;
