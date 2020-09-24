import React from "react";

const CartContainer = () => {
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <article></article>
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
