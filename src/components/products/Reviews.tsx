"use client";

import React from "react";
import Image from "next/image";
import { ReviewData } from "../../libs/products/product.review";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h1>OUR HAPPY CUSTOMERS</h1>
      <div className="reviews-container">
        {ReviewData.map((review) => (
          <div className="reviews-card" key={review.productId}>
            <div className="review-star">
              {review.stars.map((star) => (
                <Image
                  key={star.key}
                  src={star.value}
                  width={18.5}
                  height={18.5}
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
            <span>"{review.reviewText}"</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
