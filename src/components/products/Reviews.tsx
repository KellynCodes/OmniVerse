"use client";

import React, { Component } from "react";
// @ts-ignore
import Image from "next/image";
import Slider from "react-slick";
import { settings } from "@/libs/services/slider.setting";
import { ProductReviewDto } from "@/libs/types/Dtos/product.review";
import ItemNotFound from "../shared/ItemNotFound";

export default class Reviews extends Component<{
  ReviewData: ProductReviewDto[];
  className: string;
  pageTitle: string;
}> {
  constructor(props: any) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  slider: any;
  next(): void {
    this.slider!.slickNext();
  }
  previous(): void {
    this.slider!.slickPrev();
  }

  render() {
    const ReviewData = this.props?.ReviewData;
    if (ReviewData == null || ReviewData.length <= 0) {
      return (
        <ItemNotFound
          buttonLabel="Write Your own Review"
          navigationLink="/new-review"
          message="No Review was found!"
        />
      );
    }
    return (
      <div className={`${this.props.className} h-[75vh] p-4`}>
        <div className="flex justify-between items-center w-full h-[4rem] my-4">
          <h1 className="align-left font-bold text-lg md:text-[2rem] my-8">
            {this.props.pageTitle}
          </h1>
          <div className="flex w-[4rem] items-center justify-between">
            <Image
              onClick={this.previous}
              className="cursor-pointer"
              src="/svg/arrow-left.svg"
              alt="Previous"
              width={24}
              height={24}
            />
            <Image
              onClick={this.next}
              className="cursor-pointer"
              src="/svg/arrow-right.svg"
              alt="Next"
              width={24}
              height={24}
            />
          </div>
        </div>
        <Slider ref={(c: any) => (this.slider = c)} {...settings}>
          {ReviewData &&
            ReviewData.map((review: ProductReviewDto) => (
              <div
                className="relative w-[24.375rem] h-[16.75rem] md:h-[13.75rem] p-6 border border-black border-opacity-10 justify-evenly items-start inline-flex rounded-[1.25rem] "
                key={review.id}
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-center justify-between">
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
                  <div className="flex items-center">
                    <p className="font-bold text-lg">{review.userName}</p>
                    <Image
                      src={review.userImage}
                      width={24}
                      height={24}
                      alt={review.userName}
                    />
                  </div>
                  <span className="text-black text-opacity-60 text-base font-normal leading-snug">
                    &quot;{review.reviewText}&quot;
                  </span>
                </div>
                <Image
                  className="absolute top-2 right-4"
                  src="/svg/dots.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}
