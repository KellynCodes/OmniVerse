import React from "react";
import Product from "./Product";
import { Button } from "../shared/Button";
import { ProductsData } from "@/libs/data/products/products";

const TopSelling = (): JSX.Element => {
  return (
    <section
      id="top-selling"
      className="flex h-fit flex-col w-full my-16 items-center justify-center"
    >
      <h1 className="uppercase text-[2.5rem] font-bold my-6">top selling</h1>
      <div className="flex mx-auto flex-wrap items-center justify-center my-4 h-fit w-full gap-3">
        <Product productData={ProductsData} />
      </div>
      <Button
        className="mt-2 border border-accent bg-accent-white text-accent-light"
        link="top-selling"
        label="View All"
      />
    </section>
  );
};

export default TopSelling;
