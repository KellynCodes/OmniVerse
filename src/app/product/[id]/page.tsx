"use client";
import Image from "next/image";
import "../product.css";
import { useParams } from "next/navigation";

import React, {useEffect, useState} from "react";
import { Button } from "@/components/shared/Button";

import Alert from "@/components/alert/Alert";
import { useRouter } from 'next/navigation';
import { handleQuantityIncreaseORDecrease } from "@/libs/services/quantityIncrement";
import { getProduct } from "@/libs/services/filterProuctById";
import { RenderCurrentPage } from "@/components/shared/page.toggler";

import ProtocolDefinition from "@/app/auth/ProtocolDefinition";


const ProductDetail = (): JSX.Element => {
  const [web5, setWeb5] = useState<any>(null);
  const [myDid, setMyDid] = useState<any>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [product, setProduct] = useState<any>(null);

  const [productQuantity, setProductQuantity] = useState(1);
  const [page, setPage] = useState("");
  const params = useParams();

  const { id } = params;


  const router = useRouter();

  useEffect(() => {
    const initWeb5 = async () => {

      const { Web5 } = await import("@web5/api");

      try {
        const { web5, did } = await Web5.connect();
        console.log(web5);
        setWeb5(web5);
        setMyDid(did);
      } catch (error) {
        console.error("Failed to connect using Web5: ", error);
      }
    };

    initWeb5();

     const product = getProduct(id);
     setProduct(product);
  }, [id]);



  const totalPrice = (): number => {
    return product?.price! * productQuantity;
  };


//working
  const addToCart = async () => {
    try {
      if (!product) {
        console.error('Product not found');
        return;
      }

      const productData = {
        Id: product?.id,
        Image: product?.productImg,
        ProductName: product?.title,
        Price: product?.price,
        Rating: product?.rating,
      };

      console.log(productData)


      // Convert base64 image string to Blob
      const imageBlob = await fetch(productData.Image).then((response) => response.blob());
      console.log(imageBlob)

      // Create a product record
      const { record: productRecord } = await web5.dwn.records.create({
        data: { ...productData, Image: undefined },
        store: false,
        message: {
          schema: 'Product',
          dataFormat: 'application/json',
          protocol: ProtocolDefinition.protocol,
          protocolPath: 'Product',
          published: true,
        },
      });
      console.log('Product Record ID:', productRecord.id);

      // Create an image record
      const contextId = productRecord.id; // Use the product record ID as the context ID
      const { record: imageRecord } = await web5.dwn.records.create({
        data: imageBlob,
        store: false,
        message: {
          schema: 'Product',
          dataFormat: 'image/png',
          protocol: ProtocolDefinition.protocol,
          protocolPath: 'Product/Image',
          parentId: contextId, // Set the parent ID to the product record ID
          contextId: contextId,
          published: true,
        },
      });
      console.log('Product Record ID:', imageRecord.id);
      // Send both records to the DWN
      const { status: productStatus } = await productRecord.send(myDid);
      const { status: imageStatus } = await imageRecord.send(myDid);

      console.log(productStatus, imageStatus);
      console.log(web5);
      setShowSuccessMessage(true);

// Fetch records after adding the product
      const imageRecords = await web5.dwn.records.query({
        from: myDid,
        message: {
          filter: {
            protocol: ProtocolDefinition.protocol,
            protocolPath: 'Product/Image',

          },
        },
      });

      console.log('Image Records:', imageRecords);
      console.log(ProtocolDefinition.protocol);

      const productRecords = await web5.dwn.records.query({
        from: myDid,
        message: {
          filter: {
            protocol: ProtocolDefinition.protocol,
            protocolPath: 'Product',
          },
        },
      });

      console.log('Product Records:', productRecords);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };



  return (
    <>
      <div className="container flex my-8 py-10 flex-col">
        <div className="details-display  px-0 md:px-6 ">
          <div className="details-images">
            <Image
              className="details-image rounded-md"
              src={product?.productImg!}
              width={1980}
              height={2880}
              alt=""
            />

          </div>
          <div className="product-details flex flex-col gap-2">
            <h1 className="text-3xl md:text-[2.5rem]">{product?.title}</h1>
            <div className="product-stars">
              <Image src="/images/Star-1.png" width={24} height={24} alt="" />
              <Image src="/images/Star-2.png" width={24} height={24} alt="" />
              <Image src="/images/Star-3.png" width={24} height={24} alt="" />
              <Image src="/images/Star-4.png" width={24} height={24} alt="" />
              <Image src="/images/Star-6.png" width={9} height={17} alt="" />
              <p>{product?.rating}</p>
            </div>
            <p className="product-price">${totalPrice()}</p>
            <p className="product-text">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <hr className="my-3" />
            <div className="color-section">
              <p className="product-text my-3">Select Colors</p>
              <div className="colors">
                <div className="flex items-center justify-center w-10 h-10 bg-[#4f4631] rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Frame">
                      <path
                        id="Vector"
                        d="M14.5306 5.03063L6.5306 13.0306C6.46092 13.1005 6.37813 13.156 6.28696 13.1939C6.1958 13.2317 6.09806 13.2512 5.99935 13.2512C5.90064 13.2512 5.8029 13.2317 5.71173 13.1939C5.62057 13.156 5.53778 13.1005 5.4681 13.0306L1.9681 9.53063C1.89833 9.46087 1.84299 9.37804 1.80524 9.28689C1.76748 9.19574 1.74805 9.09804 1.74805 8.99938C1.74805 8.90072 1.76748 8.80302 1.80524 8.71187C1.84299 8.62072 1.89833 8.53789 1.9681 8.46813C2.03786 8.39837 2.12069 8.34302 2.21184 8.30527C2.30299 8.26751 2.40069 8.24808 2.49935 8.24808C2.59801 8.24808 2.69571 8.26751 2.78686 8.30527C2.87801 8.34302 2.96083 8.39837 3.0306 8.46813L5.99997 11.4375L13.4693 3.96938C13.6102 3.82848 13.8013 3.74933 14.0006 3.74933C14.1999 3.74933 14.391 3.82848 14.5318 3.96938C14.6727 4.11028 14.7519 4.30137 14.7519 4.50063C14.7519 4.69989 14.6727 4.89098 14.5318 5.03188L14.5306 5.03063Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="#314F4A" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="#31344F" />
                </svg>
              </div>
            </div>
            <hr className="my-2" />
            <div className="">
              <p className="my-1">Choose Size</p>
              <div className="w-full flex gap-3 flex-wrap">
                <Button
                  className="capitalize hover:bg-accent-light hover:text-white px-8 py-3 border border-border"
                  label="small"
                />
                <Button
                  className="capitalize hover:bg-accent-light hover:text-white px-8 py-3 border border-border"
                  label="medium"
                />
                <Button
                  style={{ backgroundColor: "black" }}
                  className="bg-accent-light text-white px-8 py-3 border"
                  label="Large"
                />

                <Button
                  className="capitalize  hover:bg-accent-light hover:text-white px-8 py-3 border border-border"
                  label="x-large"
                />
              </div>
            </div>
            <br className="border" />
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-[13rem] flex items-center justify-evenly bg-[#f0f0f0] rounded-2xl p-1">
                <div
                  className="bg-[#31344F]  flex items-center justify-center w-12 h-12 rounded-full p-2 cursor-pointer"
                  onClick={() =>
                    setProductQuantity(
                      handleQuantityIncreaseORDecrease(
                        "decrement",
                        product!,
                        productQuantity
                      )
                    )
                  }
                >
                  <Image
                    className="text-white"
                    src="/images/minus.png"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                <h5 className="font-bold">{productQuantity}</h5>
                <div
                  className="bg-[#314F4A] cursor-pointer flex items-center justify-center w-12 h-12 rounded-full p-2"
                  onClick={() =>
                    setProductQuantity(
                      handleQuantityIncreaseORDecrease(
                        "increment",
                        product!,
                        productQuantity
                      )
                    )
                  }
                >
                  <Image
                    className="text-white"
                    src="/images/plus.png"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
              </div>
              <button
                className="w-full md:w-[65%] capitalize md:px-12 text-white bg-accent  border-[#0000001a] flex items-center justify-center rounded-[3.875rem] gap-[0.75rem] font-[500] text-base py-3 px-7 h-auto  text-[0.9rem] transition-all"
                onClick={addToCart}
              >
                Add to Cart
              </button>
              {showSuccessMessage && (
                  <div className="bg-green-500 text-white p-3 rounded-md my-3">
                    Product added to the cart successfully!
                  </div>
              )}
            </div>
          </div>
        </div>
        <Button
          className="w-full mx-auto md:w-1/2 mt-6 py-5 px-7 text-white bg-accent"
          link={`/payment?productId=${product?.id}`}
          label="Proceed to Checkout"
        />
      </div>

      <section className="w-full min-h-screen p-3">
        <ul className="flex justify-between items-center p-4 my-5 border border-b-4">
          <li
            className="cursor-pointer"
            onClick={() => setPage("productDetails")}
          >
            Product Details
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setPage("ratingAndReview")}
          >
            Rating & Reviews
          </li>
          <li className="cursor-pointer" onClick={() => setPage("faq")}>
            FAQs
          </li>
        </ul>
        <div>{RenderCurrentPage(page)}</div>
      </section>
    </>
  );
};


export default ProductDetail;
