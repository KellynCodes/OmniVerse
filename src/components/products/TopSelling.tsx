import React from "react";
import Product from "./Product";
import { Button } from "../shared/Button";

const TopSelling = (): JSX.Element => {
  return (
    <section id="top-selling" className="top-selling">
      <h1>top selling</h1>
      <div className="container">
        <Product />
      </div>
      <Button link="top-reviews" label="View All" />
    </section>
  );
};

export default TopSelling;
