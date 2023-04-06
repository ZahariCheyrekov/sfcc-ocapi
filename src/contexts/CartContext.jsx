import { useEffect, createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    if (cart) {
      setCartItemsCount(cart.product_items?.length || 0);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartItemsCount,
        setCartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
