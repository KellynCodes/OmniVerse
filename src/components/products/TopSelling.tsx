import React from "react";
import Product from "./Product";
import { Button } from "../shared/Button";

const TopSelling = (): JSX.Element => {
  return (
    <section
      id="top-selling"
      className="flex h-fit flex-col w-full my-16 items-center justify-center"
    >
      <h1 className="uppercase text-[2.5rem] font-bold my-6">top selling</h1>
      <div className="flex mx-auto flex-wrap items-center justify-center my-4 h-fit w-full gap-3">
        <Product />
      </div>
      <Button
        customDesign="border border-accent bg-accent-white text-accent-light"
        link="top-reviews"
        label="View All"
      />
    </section>
  );
};

export default TopSelling;
