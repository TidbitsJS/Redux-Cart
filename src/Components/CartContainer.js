import React from "react";
import CartItem from "./CartItem";

const CartContainer = () => {
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <article>
        <CartItem />
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>total</span>
          </h4>
        </div>
        <button className="btn clear-btn">Empty Cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
