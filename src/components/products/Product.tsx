import { ProductsData } from "../../libs/data/products/products";
import React from "react";
import Image from "next/image";

const Product = (): JSX.Element => {
  if (ProductsData.length <= 0) {
    return <p>No product found.</p>;
  }

  return (
    <>
      {ProductsData.map((product) => (
        <div
          className="w-[18.4375rem] mx-1 h-[25.5rem] flex flex-col"
          key={product.id}
        >
          <Image
            src={product.productImg}
            width={product.width}
            height={product.height}
            alt={product.title}
            className="w-[18.4375rem] max-h-[18.625rem] flex pt-0 pr-[0.8125rem] pb-[0.875rem] flex-col justify-center rounded-[1.25rem] bg-[#F0EEED] items-center"
          />
          <div className="flex flex-col items-start justify-start px-2 mt-3">
            <p className="text-lg font-[400] capitalize">{product.title}</p>
            <div className="flex items-center justify-center h-12 gap-1">
              {product.images.map((img) => (
                <Image
                  key={img.key}
                  src={img.value}
                  width={23}
                  height={21}
                  alt="Stars"
                />
              ))}
              <span className="text-sm font-[300]">{product.rating}</span>
            </div>
              <p className="text">${product.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
