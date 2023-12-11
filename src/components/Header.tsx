"use client";

import React from "react";
// @ts-ignore
import Image from "next/image";
import { Button } from "./shared/Button";

const Header = (): JSX.Element => {
  return (
    <header className="w-[100vw] h-auto md:h-[90vh] mt-4 flex flex-wrap gap-2 items-center justify-between">
      <div className="flex flex-col pl-8 items-start justify-center gap-4 h-full z-[99] w-[98vw] md:w-[58vw]">
        <h1 className="font-bold leading-[3rem] text-3xl md:text-[2.5rem]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-[1rem] text-primary">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button
          className="px-7 py-3 bg-accent text-white hover:bg-accent-light"
          label="Shop Now"
          link="/products"
        />
        <div className="flex gap-3">
          <article className="flex flex-col items-center justify-between gap-3 p-3">
            <h2 className="font-bold  text-lg md:text-[2.5rem]">200+</h2>
            <p className="text-[1rem] text-primary">International Brands</p>
          </article>
          <article className="flex flex-col items-center justify-between gap-3 border-gray-300 border-x-2 p-3">
            <h2 className="font-bold  text-lg md:text-[2.5rem]">2,000+</h2>
            <p className="text-[1rem] text-primary">High-Quality Products</p>
          </article>
          <article className="flex flex-col items-center justify-between  gap-3 p-3">
            <h2 className="font-bold text-lg md:text-[2.5rem]">30,000+</h2>
            <p className="text-[1rem] text-primary">Happy Customers</p>
          </article>
        </div>
      </div>
      <div className="relative w-[98vw] md:w-[40vw] h-full">
        <Image
          className="block absolute left-[3%] top-[50%]"
          src="/svg/vector.svg"
          height={56}
          width={56}
          alt=""
        />

        <Image
          className="block absolute lg:right-[10%] right-[2%] md:right-[5%] top-[10%]"
          src="/svg/vectorlg.svg"
          height={104}
          width={104}
          alt=""
        />
        <Image
          src="/images/hero.png"
          className="h-full w-full"
          width={671}
          height={663}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
