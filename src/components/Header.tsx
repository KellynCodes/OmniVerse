import React from "react";
import Image from "next/image";
import { Button } from "./shared/Button";

const Header = (): JSX.Element => {
  return (
    <header className="hero">
      <Image
        src="/images/hero.jpg"
        className="w-[100vw]"
        width={1440}
        height={650}
        alt=""
      />
      <div className="hero-content">
        <div className="hero-content-width">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button
            customDesign="bg-accent text-white hover:bg-accent-light"
            label="Shop Now"
            link="/products"
          />
          <div className="articles">
            <article>
              <h2>200+</h2>
              <p>International Brands</p>
            </article>
            <article>
              <h2>2,000+</h2>
              <p>High-Quality Products</p>
            </article>
            <article>
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </article>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
