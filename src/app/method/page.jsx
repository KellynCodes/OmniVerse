import React from "react";
import Image from "next/image";
import "./method.css";

const page = () => {
  return (
    <main>
      <h1>PAYMENT METHOD</h1>
        
        <div className="wallet-cont">
        <button link="./cart">See Cart</button>
      <button className="wallet" type="submit">Connect Wallet</button>
</div>
      <div className="payment-container">
        <div className="left">
          <Image
            src="/images/details1.png"
            width={315}
            height={377}
            alt="cart"
          />
        </div>
        <div className="right">
          <textarea
            id="w3review"
            name="w3review"
            placeholder="Enter DID"
          ></textarea>
          <button type="submit">Make Payment</button>
        </div>
      </div>
    </main>
  );
};

export default page;
