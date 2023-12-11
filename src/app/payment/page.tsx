"use client";

import React from "react";
import Image from "next/image";
import "./payment.css";
import { Button } from "@/components/shared/Button";
import { getProduct } from "@/libs/services/filterProuctById";
import { useSearchParams } from "next/navigation";
import Alert from "@/components/shared/alert/Alert";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MakePayment = () => {
  const productId = useSearchParams();
  const id = productId.get("productId");
  const router = useRouter();
  const product = getProduct(id!);

  if (product == null) {
    const alert: JSX.Element = (
      <Alert errorMessage="Payment or Product Not found! Navigating to Products page..." />
    );
    setTimeout(() => {
      router.push("/products");
    }, 3000);
    return alert;
  }

  return (
    <section className="px-4 w-full flex flex-col items-center justify-between gap-2">
      <h1 className="text-center">PAYMENT METHOD</h1>
      <div className="w-full h-full flex flex-wrap items-center justify-between gap-2">
        <div className="w-full md:w-[60%] h-full flex flex-col items-center justify-start">
          <div className="w-full flex flex-wrap items-center h-full justify-center gap-3">
            <div className="w-full flex items-center justify-center sm:w-[57%]">
              <Image
                className="flex justify-center"
                src={product.productImg}
                width={315}
                height={377}
                alt="Product Image"
              />
            </div>
            <div className="w-full sm:w-[40%] flex flex-col items-start justify-start gap-5">
              <h2 className="capitalize font-bold">{product.title}</h2>
              <h4 className="font-[400] ">Price ${product.price}</h4>
            </div>
          </div>
        </div>
        <form className="flex flex-col items-center justify-between gap-4 w-full md:w-[38%]">
          <div className="w-full flex justify-between items-center h-fit gap-4">
            <Link className="underline text-accent " href="/cart">
              See Cart
            </Link>
            <Button
              className="bg-accent text-white py-3 px-7"
              label="Connect Wallet"
            />
          </div>
          <textarea
            className="p-4 mt-4 w-full"
            id="did"
            name="did"
            placeholder="Enter DID"
          ></textarea>
          <Button
            label="Make Payment"
            className="bg-accent w-full  text-white py-3 px-7 text-center"
          />
        </form>
      </div>
    </section>
  );
};

export default MakePayment;
