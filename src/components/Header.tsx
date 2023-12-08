import React from "react";
// @ts-ignore
import Image from "next/image";
import { Button } from "./shared/Button";

const Header = (): JSX.Element => {
  return (
    <header className="relative w-[100vw] h-[90vh] mt-4">
      <Image
        src="/images/hero.jpg"
        className="absolute inset-0 w-[100vw]  h-[90vh] bg-cover"
        width={1440}
        height={650}
        alt=""
      />

      <div className="relative h-full z-[99]">
        <div className="flex flex-col pl-8 items-start justify-center gap-4 h-full w-full sm:w-1/2">
          <Image
            className="hidden sm:block absolute left-[50%] top-[40%]"
            src="/svg/vector.svg"
            height={56}
            width={56}
            alt=""
          />

          <Image
            className="hidden sm:block absolute lg:right-[10%] sm:right-[2%] md:right-[5%] top-[10%]"
            src="/svg/vectorlg.svg"
            height={104}
            width={104}
            alt=""
          />
          <h1 className="font-bold leading-[3rem] text-3xl md:text-[2.5rem]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-[1rem] text-primary">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button
            className="bg-accent text-white hover:bg-accent-light"
            label="Shop Now"
            link="/products"
          />
          <div className="articles flex gap-3">
            <article>
              <h2 className="font-bold  text-lg md:text-[2.5rem]">200+</h2>
              <p className="text-[1rem] text-primary">International Brands</p>
            </article>
            <article>
              <h2 className="font-bold  text-lg md:text-[2.5rem]">2,000+</h2>
              <p className="text-[1rem] text-primary">High-Quality Products</p>
            </article>
            <article>
              <h2 className="font-bold text-lg md:text-[2.5rem]">30,000+</h2>
              <p className="text-[1rem] text-primary">Happy Customers</p>
            </article>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
