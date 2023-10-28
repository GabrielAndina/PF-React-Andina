import { createContext, useState, useEffect } from "react";


export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0, 
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0); 
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);
  useEffect(() => {
    // Calcula el total cada vez que cambia el carrito
    const newTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);
  
    setTotal(newTotal);
  }, [cart]);
  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartContext;
