import React from "react";
import Product from "./Product";
import { Button } from "../shared/Button";
import { ProductsData } from "@/libs/data/products/products";

const Products = (): JSX.Element => {
  return (
    <section
      id="new-arrivals"
      className="h-fit w-full flex flex-wrap items-center justify-center my-16 gap-4"
    >
      <h1 className="uppercase text-[2.5rem] font-bold my-8">NEW ARRIVALS</h1>
      <div className="flex flex-wrap mx-auto items-center justify-evenly my-6 gap-3 px-4 md:px-0">
        <Product productData={ProductsData} />
      </div>
      <Button
        className="mt-2 border border-accent bg-accent-white text-accent-light"
        label="View All"
        link="/products"
      />
    </section>
  );
};

export default Products;
