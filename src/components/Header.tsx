import React from "react";
import Image from "next/image";
import { Button } from "./shared/Button";

const Header = (): JSX.Element => {
  return (
    <header className="relative max-w-[100vw] h-[90vh] mt-[5rem]">
      <Image
        src="/images/hero.jpg"
        className="absolute inset-0 w-full h-[90vh] bg-cover"
        width={1440}
        height={650}
        alt=""
      />

      <div className="relative h-full z-[99]">
        <div className="flex flex-col pl-8 items-start justify-center gap-4 h-full w-1/2">
          <Image
            className="absolute left-[50%] top-[40%]"
            src="/svg/vector.svg"
            height={56}
            width={56}
            alt=""
          />

          <Image
            className="absolute right-[10%] top-[10%]"
            src="/svg/vectorlg.svg"
            height={104}
            width={104}
            alt=""
          />
          <h1 className="hero-content-width font-bold text-[2.5rem]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-[1rem] text-primary">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button
            customDesign="bg-accent text-white hover:bg-accent-light"
            label="Shop Now"
            link="/products"
          />
          <div className="articles flex gap-3">
            <article>
              <h2 className="font-bold text-[2.5rem]">200+</h2>
              <p className="text-[1rem] text-primary">International Brands</p>
            </article>
            <article>
              <h2 className="font-bold text-[2.5rem]">2,000+</h2>
              <p className="text-[1rem] text-primary">High-Quality Products</p>
            </article>
            <article>
              <h2 className="font-bold text-[2.5rem]">30,000+</h2>
              <p className="text-[1rem] text-primary">Happy Customers</p>
            </article>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
