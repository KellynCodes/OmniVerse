"use client";

import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import SearchProduct from "../products/SearchProduct";

export const NavBar = (): React.JSX.Element => {
  const [isNavbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    if (window.innerWidth > 640) {
      return;
    }
    setNavbar(!isNavbar);
  };

  return (
    <nav className="w-[100vw] md:w-[100vw] mx-auto h-fit flex justify-between items-center lg:gap-[4%] sm:gap-[5%] mt-3">
      <div className="flex items-center h-fit justify-center pl-2 w-[40%] sm:w-[15%]">
        <Link href="/">
          <h1 className="font-bold lg:text-[2rem] text-lg">OmniVerse</h1>
        </Link>
      </div>
      <div
        onClick={toggleNavbar}
        className={`${
          isNavbar ? "navlinks-open" : ""
        } transition-all md:w-[40%]`}
      >
        <ul className={`${isNavbar ? "open" : "close"} flex gap-4`}>
          <li>
            <Link
              href="/products"
              className="flex mr-3 items-center justify-between text-sm lg:text-lg"
            >
              Shop
              <Image
                className="ml-4"
                src="/images/Vector-3.jpg"
                width={12}
                height={7}
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link href="/#top-selling" className="text-sm lg:text-lg">
              On Sale
            </Link>
          </li>
          <li>
            <Link href="/#new-arrivals" className="text-sm lg:text-lg">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link href="/brands" className="text-sm lg:text-lg">
              Brands
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-3 mt-[0.2rem] md:w-[20%] md:h-[2rem] lg:w-[35%] lg:h-[2.7rem] bg-[#f0f0f0] rounded-[30px] pl-4 md:py-3">
        <Image
          className="w-[1rem] h-[1rem]"
          src="/images/Vector-1.png"
          width={22}
          height={22}
          alt=""
        />
        <SearchProduct search={"shoe"} />
      </div>
      <div className="w-[47%] sm:w-[8%] flex items-center justify-evenly md:justify-center pr-4">
        <Link href="/cart">
          <Image
            className="cursor-pointer"
            src="/svg/cart.svg"
            width={26.13}
            height={23.91}
            alt="Cart"
          />
        </Link>
        <div className="block cursor-pointer sm:hidden" onClick={toggleNavbar}>
          Menu
        </div>
      </div>
    </nav>
  );
};
