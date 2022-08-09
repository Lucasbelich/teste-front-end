import React from "react";
import { useContext } from "react";

import CartContext from "../../Context/CartContext";
import cartIcon from "../../assets/Icons/Cart.svg";
import "./Cart.styles.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart_container">
      <button className="cart_button">
        <img src={cartIcon} alt="cart" />
      </button>
      {cart.length ? (
        <span className="cart_count">{cart.length}</span>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
