import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const cartFromLocalStorage = localStorage.getItem("cart");
      return cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [];
    } catch (err) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (productToAdd) => {
    setCart([...cart, productToAdd]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
