"use client";
import Image from "next/image";
import "../product.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetail = (): JSX.Element => {
  const params: Params = useParams();
  return (
    <div className="details-display">
      <div className="details-images">
        <Image
          className="details-image"
          src="/images/details1.png"
          width={152}
          height={167}
          alt=""
        />
        <Image
          className="details-image"
          src="/images/details2.png"
          width={152}
          height={167}
          alt=""
        />
        <Image
          className="details-image"
          src="/images/details3.png"
          width={152}
          height={167}
          alt=""
        />
        <Image
          className="details-image"
          src="/images/details4.png"
          width={152}
          height={167}
          alt=""
        />
      </div>
      <div className="product-details">
        <h1>One Life Graphic T-shirt</h1>
        <div className="product-stars">
          <Image src="/images/Star-1.png" width={24} height={24} alt="" />
          <Image src="/images/Star-2.png" width={24} height={24} alt="" />
          <Image src="/images/Star-3.png" width={24} height={24} alt="" />
          <Image src="/images/Star-4.png" width={24} height={24} alt="" />
          <Image src="/images/Star-6.png" width={24} height={24} alt="" />
          <p>4.5/5</p>
        </div>
        <p className="product-price">$260</p>
        <p className="product-text">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <br className="border" />
        <div className="color-section">
          <p>Select Colors</p>
          <div className="colors">
            <div className="color-1"></div>
            <div className="color-2"></div>
            <div className="color-3"></div>
          </div>
        </div>
        <br className="border" />
        <div className="size-section">
          <p>Choose Size</p>
          <div>
            <button>small</button>
            <button>medium</button>
            <button>large</button>
            <button>x-large</button>
          </div>
        </div>
        <br className="border" />
        <div className="quantity">
          <div>
            <Image src="/images/minus.png" width={24} height={24} alt="" />
            <p>1</p>
            <Image src="/images/plus.png" width={24} height={24} alt="" />
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
