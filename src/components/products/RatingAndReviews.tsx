import React, { ReactNode } from "react";
import { ReviewData } from "@/libs/data/products/product.review";
import Image from "next/image";
import { Button } from "../shared/Button";
import Reviews from "./Reviews";

const RatingAndReviews = (): ReactNode => {
  return (
    <div className="px-4 w-[96%] mx-auto">
      <div className="flex justify-between flex-wrap items-center h-auto">
        <div className="w-1/2 flex flex-row items-center gap-2 justify-start">
          <h1 className="font-semibold text-sm md:text-lg">All Reviews</h1>
          <span>({ReviewData.length})</span>
        </div>
        <div className="w-1/2 flex items-center justify-end gap-4">
          <div className="w-[3rem] h-[3rem] hidden md:block p-4 rounded-full bg-[#EFEFEF]">
            <Image
              src="/svg/view-layout.svg"
              width={24}
              height={24}
              alt="choose view layout"
            />
          </div>

          <select
            className="h-fit w-fit max-w-[5rem] p-3 bg-[#EFEFEF] rounded-md border-none outline-none"
            name="product-to-fetch"
            id="product-to-fetch"
          >
            <option value="latest">Latest</option>
            <option value="trending">Trending</option>
            <option value="old">Old</option>
          </select>

          <Button
            className="bg-accent text-xs md:text-lg  text-white px-2 md:px-7 py-0 md:py-4"
            label="Write a Review"
            link="/product/id/new-review"
          />
        </div>
      </div>
      <Reviews ReviewData={ReviewData} className="" pageTitle="" />
    </div>
  );
};

export default RatingAndReviews;
