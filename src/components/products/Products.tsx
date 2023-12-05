import React from "react";
import Product from "./Product";
import { Button } from "../shared/Button";

const Products = (): JSX.Element => {
  return (
    <section id="new-arrivals" className="arrivals">
      <h1>NEW ARRIVALS</h1>
      <div className="container">
        <Product />
      </div>
      <Button label="View All" link="/products" />
    </section>
  );
};

export default Products;
