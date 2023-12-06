import React from "react";

const Order = () => {
  return (
    <div className="checkout">
      <h1>Order Summary</h1>
      <div className="checkout-card">
        <div className="checkout-details">
          <p className="name">Subtotal</p>
          <p className="price">$565</p>
        </div>
        <div className="checkout-details">
          <p className="name">Discount (-20%)</p>
          <p className="price">$565</p>
        </div>
        <div className="checkout-details">
          <p className="name">Delivery Fee</p>
          <p className="price">$15</p>
        </div>
        <div className="checkout-details">
          <p className="name">Total</p>
          <p className="price">$465</p>
        </div>
      </div>
      <div className="checkout-input">
        <input type="text" name="text" id="" placeholder="Add promo code" />
        <button type="button">Apply</button>
      </div>
      <button className="checkout-btn" type="button">
        Go to checkout
      </button>
    </div>
  );
};

export default Order;
