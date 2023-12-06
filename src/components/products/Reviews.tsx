"use client";

import React from "react";
import Image from "next/image";
import { ReviewData } from "../../libs/data/products/product.review";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="my-5 py-10 px-6">
      <div className="flex justify-between items-center w-full h-[4rem] my-4">
        <h1 className="align-left font-bold text-[3rem] my-8">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex w-[4rem] items-center justify-between">
          <Image
            src="/svg/arrow-left.svg"
            alt="Previous"
            width={24}
            height={24}
          />
          <Image src="/svg/arrow-right.svg" alt="Next" width={24} height={24} />
        </div>
      </div>
      <Slider {...settings} className="flex gap-10 items-center">
        {ReviewData &&
          ReviewData.map((review) => (
            <div
              className="flex flex-wrap w-[25rem] h-[15rem] justify-center items-center content-start gap-y-6 gap-x-[21.375rem] py-[1.75rem] px-[2rem] rounded-[1.25rem] border border-border mr-8"
              style={{ marginRight: "3rem" }}
              key={review.id}
            >
              <div className="review-star">
                {review.stars.map((star) => (
                  <Image
                    key={star.key}
                    src={star.value}
                    width={23}
                    height={21}
                    alt="Stars"
                  />
                ))}
              </div>
              <div className="reviewer">
                <p>{review.userName}</p>
                <Image
                  src={review.userImage}
                  width={24}
                  height={24}
                  alt={review.userName}
                />
              </div>
              <span>&quot;{review.reviewText}&quot;</span>
            </div>
          ))}
      </Slider>
    </section>
  );
};

export default Reviews;
