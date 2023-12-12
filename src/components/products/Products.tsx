"use client";

import React, { Component } from "react";
import Product from "./Product";
import { Button } from "../shared/Button";
import { ProductDto } from "@/libs/types/Dtos/product.dto";

class Products extends Component<{
  pageTitle: string;
  buttonLabel: string;
  productsData: ProductDto[];
  pageId: string;
  buttonLink: string;
}> {
  render() {
    return (
      <section
        id={this.props.pageId}
        className="h-fit flex-col flex flex-wrap items-center justify-center my-16 gap-4"
      >
        <h1 className="uppercase text-[2.5rem] font-bold my-8">
          {this.props.pageTitle}
        </h1>
        <div className="flex flex-wrap mx-auto items-center justify-evenly my-6 gap-3 px-4 md:px-0">
          <Product productData={this.props.productsData} />
        </div>
        <Button
          className="mt-2  px-7 py-3 border border-accent bg-accent-white text-accent-light"
          label={this.props.buttonLabel}
          link="/products"
        />
      </section>
    );
  }
}

export default Products;
