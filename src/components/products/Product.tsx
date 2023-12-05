import { ProductsData } from "@/libs/products/products";
import React from "react";
import Image from "next/image";

const Product = (): JSX.Element => {
  if (ProductsData.length <= 0) {
    return <p>No product found.</p>;
  }

  return (
    <>
      {ProductsData.map((product) => (
        <div className="card" key={product.id}>
          <Image
            src={product.productImg}
            width={product.width}
            height={product.width}
            alt={product.title}
          />
          <div className="article-content">
            <p className="text-xl font-bold capitalize">{product.title}</p>
            <article>
              <div>
                {product.images.map((img) => (
                  <Image
                    key={img.key}
                    src={img.value}
                    width={18.5}
                    height={18.5}
                    alt="Stars"
                  />
                ))}
              </div>
              <span>{product.rating}</span>
            </article>
            <p className="second">${product.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
