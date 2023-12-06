import React from "react";
import Link from "next/link";

import Image from "next/image";

export const NavBar = (): React.JSX.Element => {
  return (
    <nav className="w-[100vw] mx-auto h-fit">
      <div className="flex items-center h-fit justify-start">
        <Link href="/">
          <h1 className="font-bold text-[2rem]">OmniVerse</h1>
        </Link>
      </div>
      <div className="options">
        <ul>
          <li className="shop">
            <Link
              href="/products"
              className="flex flex-row items-center justify-between"
            >
              Shop
              <Image src="/images/Vector-3.jpg" width={12} height={7} alt="" />
            </Link>
          </li>
          <li>
            <Link href="/#top-selling">On Sale</Link>
          </li>
          <li>
            <Link href="/#new-arrivals">New Arrivals</Link>
          </li>
          <li>
            <Link href="/brands">Brands</Link>
          </li>
        </ul>
      </div>
      <div className="search-container">
        <Image src="/images/Vector-1.png" width={22} height={22} alt="" />
        <input type="text" name="search" placeholder="Search for products..." />
      </div>
      <div>
        <Image
          src="/images/Vector-2.jpg"
          width={33}
          height={33}
          alt="Account"
        />
      </div>
    </nav>
  );
};
