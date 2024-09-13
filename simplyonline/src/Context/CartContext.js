import React, { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product, quantity = 1) => {
    let newCart = [...cart];
    const itemInCart = newCart.find((item) => item.id === product.id);

    if (itemInCart) {
      itemInCart.quantity += quantity;
    } else {
      newCart.push({
        ...product,
        quantity,
      });
    }

    setCart(newCart);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    setTotalItems(cart.reduce((acc, item) => acc + item.quantity, 0));
    setTotalPrice(
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
