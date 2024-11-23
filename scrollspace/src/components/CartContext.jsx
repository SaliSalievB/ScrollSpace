import React, { createContext, useState, useEffect } from 'react';
import axios from '../axiosConfig';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartState, setCartState] = useState(null);

  useEffect(() => {
    // Fetch cart on component mount
    axios.get('/cart')
      .then(response => {
        setCartState(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });
  }, []);

  const refreshCart = () => {
    axios.get('/cart')
      .then(response => {
        setCartState(response.data);
      })
      .catch(error => {
        console.error('Error refreshing cart:', error);
      });
  };

  return (
    <CartContext.Provider value={{ cart: cartState, refreshCart }}>
      {children}
    </CartContext.Provider>
  );
}
