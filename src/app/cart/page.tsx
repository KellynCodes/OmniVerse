"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./cart.css";
import { Button } from "@/components/shared/Button";
import { CartData } from "@/libs/data/carts/cart.data";
import { CartDto } from "@/libs/types/Dtos/cart.dto";
import {
  calculateDiscountedPrice,
  calculateTotalPrice,
} from "@/libs/services/calculate.cart.price";
import ItemNotFound from "@/components/shared/ItemNotFound";

// Define the Cart component
const Cart = () => {
  const [cartItems, setCartItems] = useState(CartData.carts);

  const incrementHandler = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  // Creating decrement handler
  const decrementHandler = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = Math.max(
      1,
      updatedCartItems[index].quantity - 1
    );
    setCartItems(updatedCartItems);
  };

  // Handle item deletion
  const deleteHandler = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const discountPercentage = CartData.discount;
  const price = calculateTotalPrice(cartItems);
  const discountPrice = calculateDiscountedPrice(price, discountPercentage);
  const totalPrice = discountPrice + CartData.deliveryFee;

  if (cartItems.length <= 0) {
    return (
      <ItemNotFound
        buttonLabel="Buy Products"
        navigationLink="/#new-arrivals"
        message="No Item In Your Cart"
      />
    );
  }

  return (
    <section>
      <h1 className="heading">Your Cart</h1>
      <div className="cart-grid">
        <div className="cart">
          {cartItems &&
            cartItems.map((cart: CartDto, index: number) => (
              <div className="cart-container" key={cart.productId}>
                <Image src={cart.image} width={128} height={187} alt="cart" />
                <div className="cart-details">
                  <div className="cart-details-info">
                    <h2>{cart.title}</h2>
                    <p>
                      Size: <span>Large</span>
                    </p>
                    <p>
                      Color: <span>White</span>
                    </p>
                    <p className="cart-price">${cart.price * cart.quantity}</p>
                  </div>
                  <div className="cart-images">
                    <Image
                      onClick={() => deleteHandler(index)}
                      className="flex-1 cursor-pointer"
                      src="/images/Frame2.png"
                      width={24}
                      height={10}
                      alt="cart"
                    />
                    <div className="quantity">
                      <Image
                        onClick={() => decrementHandler(index)}
                        src="/images/minus.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <p>{cart.quantity}</p>
                      <Image
                        onClick={() => incrementHandler(index)}
                        src="/images/plus.png"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="order-container">
          <h1>Order Summary</h1>
          <div className="order-summary">
            <article>
              <p>Subtotal</p>
              <p>${price}</p>
            </article>
            <article>
              <p>Discount (-{CartData.discount}%)</p>
              <p className="red">-${discountPrice}</p>
            </article>
            <article>
              <p>Delivery Fee</p>
              <p>$15</p>
            </article>
          </div>
          <article className="total">
            <p>Total</p>
            <p>${totalPrice}</p>
          </article>

          <div className="input">
            <input type="text" placeholder="Add promo code" />
            <Button className="capitalize border border-border" label="Apply" />
          </div>

          <div className="check-out">
            <Button
              className="capitalize border border-border"
              label="Go to Checkout"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M14.7959 4.4541L21.5459 11.2041C21.6508 11.3086 21.734 11.4328 21.7908 11.5696C21.8476 11.7063 21.8768 11.8529 21.8768 12.001C21.8768 12.149 21.8476 12.2957 21.7908 12.4324C21.734 12.5691 21.6508 12.6933 21.5459 12.7979L14.7959 19.5479C14.5846 19.7592 14.2979 19.8779 13.9991 19.8779C13.7002 19.8779 13.4135 19.7592 13.2022 19.5479C12.9908 19.3365 12.8721 19.0499 12.8721 18.751C12.8721 18.4521 12.9908 18.1654 13.2022 17.9541L18.0313 13.125L4.25 13.125C3.95163 13.125 3.66548 13.0065 3.4545 12.7955C3.24353 12.5846 3.125 12.2984 3.125 12C3.125 11.7017 3.24353 11.4155 3.45451 11.2045C3.66548 10.9936 3.95163 10.875 4.25 10.875L18.0313 10.875L13.2013 6.04598C12.9899 5.83463 12.8712 5.54799 12.8712 5.2491C12.8712 4.95022 12.9899 4.66357 13.2013 4.45223C13.4126 4.24088 13.6992 4.12215 13.9981 4.12215C14.297 4.12215 14.5837 4.24088 14.795 4.45223L14.7959 4.4541Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
