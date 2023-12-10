"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [counter, setCounter] = useState(50);
  // creating increment and decrement handlers
  const incrementHandler = () => {
    setCounter((val) => val + 1);
  };

  // creating decrement and decrement handlers
  const decrementHandler = () => {
    setCounter((val) => val - 1);
  };

  return (
    <div className="quantity">
      <Image
        onClick={decrementHandler}
        src="/images/minus.png"
        width={24}
        height={24}
        alt=""
      />
      <p>{counter}</p>
      <Image
        onClick={incrementHandler}
        src="/images/plus.png"
        width={24}
        height={24}
        alt=""
      />
    </div>
  );
};

export default page;
